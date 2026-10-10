"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Picture from "./Picture";
import StackMarquee from "./StackMarquee";
import { profile, socials } from "@/data/profile";

const socialIcons = { FaGithub, FaLinkedin, FaXTwitter };
// Magnification inside the bubble.
const ZOOM = 1.18;
// How long the gum has to be hovered (or pressed) before a bubble comes off.
const CHARGE_MS = 2000;
const DEFLATE_MS = 350;
// How long a bubble that has lost the cursor floats before it pops.
const LEAVE_MS = 900;
const POP_MS = 420;
// After a pop the photo fades back in (200ms delay + --dur-slow in CSS); only
// then do the reaction frames rewind, out of sight.
const REWIND_MS = 950;
const SPLASH = [0, 45, 90, 135, 180, 225, 270, 315];

function Letters({ stagger = false }) {
  return (
    <span className="hero-line">
      <span className="hero-line-inner">
        {profile.name.split("").map((char, i) => (
          <span key={i} className="hero-char" style={stagger ? { "--i": i } : undefined}>
            {char}
          </span>
        ))}
      </span>
    </span>
  );
}

export default function Hero() {
  const heroRef = useRef(null);
  const statueRef = useRef(null);
  const gumRef = useRef(null);
  const titleRef = useRef(null);
  const lensRef = useRef(null);
  const copyRef = useRef(null);
  // David's reaction frames load once the page has, or on first touch of him.
  const [framesOn, setFramesOn] = useState(false);
  const framesDone = useRef(0);

  const onFrameDone = () => {
    framesDone.current += 1;
    if (framesDone.current === profile.portraitReactions.length && heroRef.current) {
      heroRef.current.dataset.frames = "ready";
    }
  };

  useEffect(() => {
    const statue = statueRef.current;
    if (framesOn || !statue) return;
    const on = () => setFramesOn(true);
    let cancel = () => {};
    const later = () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      if (window.requestIdleCallback) {
        const id = requestIdleCallback(on, { timeout: 2000 });
        cancel = () => cancelIdleCallback(id);
      } else {
        const id = setTimeout(on, 200);
        cancel = () => clearTimeout(id);
      }
    };
    if (document.readyState === "complete") later();
    else window.addEventListener("load", later, { once: true });
    statue.addEventListener("pointerenter", on, { once: true });
    statue.addEventListener("pointerdown", on, { once: true });
    return () => {
      window.removeEventListener("load", later);
      statue.removeEventListener("pointerenter", on);
      statue.removeEventListener("pointerdown", on);
      cancel();
    };
  }, [framesOn]);

  // The bubble lives in one of these states:
  //   idle     no bubble; hovering (or pressing) the statue starts charging
  //   free     blown off the gum, following the cursor (or resting on the name)
  //   leaving  lost the cursor, floating up until it pops
  //   pop      bursting, then back to idle
  //   rest     reduced motion: a still bubble on the name, no interaction
  useEffect(() => {
    const hero = heroRef.current;
    const statue = statueRef.current;
    const gum = gumRef.current;
    const title = titleRef.current;
    const lens = lensRef.current;
    const copy = copyRef.current;
    if (!hero || !statue || !gum || !title || !lens || !copy) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

    let state = "idle";
    let size = 0; // lens diameter at scale 1
    let box = { x: 0, y: 0, w: 0, h: 0 }; // name box in hero coords
    let rest = { x: 0, y: 0 }; // resting point over the name
    let mouth = { x: 0, y: 0, d: 0 }; // gum center and diameter in hero coords
    const pos = { x: 0, y: 0 };
    const vel = { x: 0, y: 0 };
    let scale = 1;
    let scaleVel = 0;
    let target = null; // pointer position in hero coords, null = none
    let hovering = false; // mouse over the statue
    let pressing = false; // touch or pen held on the statue
    let charge = 0; // 0..1
    let leftAt = 0;
    let popTimer = 0;
    let rewindTimer = 0;
    let frame = 0;
    let last = 0;
    let visible = true;
    const t0 = performance.now();

    const setState = (next) => {
      state = next;
      hero.dataset.bubble = next;
    };

    const render = () => {
      const c = size / 2;
      lens.style.transform = `translate3d(${pos.x - c}px, ${pos.y - c}px, 0) scale(${scale})`;
      // Map name coordinates into lens coordinates, magnified about the lens
      // center. The copy is typeset at ZOOM and the lens scales about its
      // center, so only a translate is needed.
      const tx = c + ZOOM * (box.x - pos.x);
      const ty = c + ZOOM * (box.y - pos.y);
      copy.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
    };

    const renderGum = (now) => {
      if (charge <= 0) {
        gum.style.opacity = "0";
        gum.style.transform = "translate(-50%, -50%)";
        return;
      }
      // Swells slowly, then faster, with a wobble that grows as it nears release.
      const eased = charge * charge;
      const wobble = Math.sin((now - t0) / 55) * 0.035 * charge;
      gum.style.opacity = String(Math.min(1, charge * 6));
      gum.style.transform = `translate(-50%, -50%) scale(${1 + eased * 0.55 + wobble}, ${1 + eased * 0.55 - wobble})`;
    };

    const measure = () => {
      const heroRect = hero.getBoundingClientRect();
      const titleRect = title.getBoundingClientRect();
      const gumRect = gum.getBoundingClientRect();
      size = lens.offsetWidth;
      box = {
        x: titleRect.left - heroRect.left,
        y: titleRect.top - heroRect.top,
        w: titleRect.width,
        h: titleRect.height,
      };
      copy.style.fontSize = `${parseFloat(getComputedStyle(title).fontSize) * ZOOM}px`;
      copy.style.width = `${box.w * ZOOM}px`;
      // Rest over the tail of the name ("an").
      rest = { x: box.x + box.w * 0.86, y: box.y + box.h * 0.5 };
      // getBoundingClientRect includes the gum's current scale; its center doesn't move.
      mouth = {
        x: gumRect.left + gumRect.width / 2 - heroRect.left,
        y: gumRect.top + gumRect.height / 2 - heroRect.top,
        d: gum.offsetWidth,
      };
      if (state === "rest") {
        pos.x = rest.x;
        pos.y = rest.y;
        scale = 1;
      }
      render();
    };

    const blow = () => {
      charge = 0;
      // The bubble starts as the swollen gum and grows to full size on its way out.
      pos.x = mouth.x;
      pos.y = mouth.y;
      scale = (mouth.d * 1.55) / size;
      scaleVel = 0;
      const goal = target && finePointer.matches ? target : rest;
      const dx = goal.x - pos.x;
      const dy = goal.y - pos.y;
      const len = Math.hypot(dx, dy) || 1;
      vel.x = (dx / len) * 6;
      vel.y = (dy / len) * 6 - 2;
      setState("free");
      hero.dataset.blown = "true";
      // Start David's reaction from its first frame.
      clearTimeout(rewindTimer);
      delete hero.dataset.react;
      void hero.offsetWidth;
      hero.dataset.react = "";
      render();
    };

    const pop = () => {
      if (state !== "free" && state !== "leaving") return;
      setState("pop");
      clearTimeout(popTimer);
      popTimer = setTimeout(() => {
        if (state !== "pop") return;
        setState("idle");
        rewindTimer = setTimeout(() => delete hero.dataset.react, REWIND_MS);
        // Still on the statue? Start blowing the next one.
        start();
      }, POP_MS);
    };

    const tick = (now) => {
      frame = 0;
      const ms = Math.min(48, now - (last || now));
      const dt = ms / 16.67;
      last = now;

      if (state === "idle") {
        charge = hovering || pressing
          ? Math.min(1, charge + ms / CHARGE_MS)
          : Math.max(0, charge - ms / DEFLATE_MS);
        if (charge >= 1) blow();
        renderGum(now);
      } else if (charge > 0) {
        charge = 0;
        renderGum(now);
      }

      if (state === "free" || state === "leaving") {
        let goal;
        if (state === "leaving") {
          // Buoyant: drift up from wherever it is.
          goal = { x: pos.x + vel.x * 4, y: pos.y - 40 };
          if (now - leftAt > LEAVE_MS) pop();
        } else if (target && finePointer.matches) {
          goal = target;
        } else {
          // Touch: idle drift around the resting point on the name.
          const t = (now - t0) / 1000;
          const amp = Math.min(box.w, 900) * 0.03;
          goal = { x: rest.x + Math.sin(t * 0.7) * amp, y: rest.y + Math.cos(t * 0.53) * amp * 0.8 };
        }

        // Damped spring toward the goal.
        const k = state === "leaving" ? 0.01 : 0.06;
        const damping = Math.pow(0.8, dt);
        vel.x = (vel.x + (goal.x - pos.x) * k * dt) * damping;
        vel.y = (vel.y + (goal.y - pos.y) * k * dt) * damping;
        pos.x += vel.x * dt;
        pos.y += vel.y * dt;

        // Jelly spring on the size, so it overshoots a little as it inflates.
        scaleVel = (scaleVel + (1 - scale) * 0.05 * dt) * Math.pow(0.84, dt);
        scale += scaleVel * dt;
        render();
      }

      const busy = state !== "idle" || hovering || pressing || charge > 0;
      if (busy && visible && !document.hidden) frame = requestAnimationFrame(tick);
    };

    const start = () => {
      if (state === "rest" || frame || !visible) return;
      last = 0;
      frame = requestAnimationFrame(tick);
    };
    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
    };

    const toHero = (e) => {
      const r = hero.getBoundingClientRect();
      return { x: e.clientX - r.left, y: e.clientY - r.top };
    };

    // Mouse: hovering the statue charges the gum.
    const onStatueEnter = (e) => {
      if (e.pointerType !== "mouse") return;
      hovering = true;
      start();
    };
    const onStatueLeave = (e) => {
      if (e.pointerType !== "mouse") return;
      hovering = false;
    };

    // Touch and pen: press and hold the statue. Scrolling cancels the press.
    const onStatueDown = (e) => {
      if (e.pointerType === "mouse" || state !== "idle") return;
      pressing = true;
      start();
    };
    const onStatueUp = (e) => {
      if (e.pointerType === "mouse") return;
      pressing = false;
    };
    const onContextMenu = (e) => {
      if (state !== "rest") e.preventDefault();
    };

    const onPointerMove = (e) => {
      if (e.pointerType !== "mouse") return;
      target = toHero(e);
      if (state === "leaving") setState("free");
    };
    const onPointerLeave = (e) => {
      if (e.pointerType !== "mouse") return;
      target = null;
      hovering = false;
      if (state === "free") {
        leftAt = performance.now();
        setState("leaving");
      }
    };
    // Any press in the hero pops a free bubble (links and buttons still work).
    const onPointerDown = () => pop();

    const visibility = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      visible ? start() : stop();
    });
    const resize = new ResizeObserver(measure);
    const onVisibility = () => (document.hidden ? stop() : start());
    const applyMotion = () => {
      stop();
      clearTimeout(popTimer);
      clearTimeout(rewindTimer);
      delete hero.dataset.react;
      charge = 0;
      pressing = false;
      renderGum(0);
      setState(reduce.matches ? "rest" : "idle");
      measure();
    };

    document.fonts?.ready.then(measure);
    applyMotion();
    resize.observe(hero);
    visibility.observe(hero);
    statue.addEventListener("pointerenter", onStatueEnter);
    statue.addEventListener("pointerleave", onStatueLeave);
    statue.addEventListener("pointerdown", onStatueDown);
    statue.addEventListener("pointerup", onStatueUp);
    statue.addEventListener("pointercancel", onStatueUp);
    statue.addEventListener("contextmenu", onContextMenu);
    hero.addEventListener("pointermove", onPointerMove);
    hero.addEventListener("pointerleave", onPointerLeave);
    hero.addEventListener("pointerdown", onPointerDown, true);
    document.addEventListener("visibilitychange", onVisibility);
    reduce.addEventListener("change", applyMotion);

    return () => {
      stop();
      clearTimeout(popTimer);
      clearTimeout(rewindTimer);
      resize.disconnect();
      visibility.disconnect();
      statue.removeEventListener("pointerenter", onStatueEnter);
      statue.removeEventListener("pointerleave", onStatueLeave);
      statue.removeEventListener("pointerdown", onStatueDown);
      statue.removeEventListener("pointerup", onStatueUp);
      statue.removeEventListener("pointercancel", onStatueUp);
      statue.removeEventListener("contextmenu", onContextMenu);
      hero.removeEventListener("pointermove", onPointerMove);
      hero.removeEventListener("pointerleave", onPointerLeave);
      hero.removeEventListener("pointerdown", onPointerDown, true);
      document.removeEventListener("visibilitychange", onVisibility);
      reduce.removeEventListener("change", applyMotion);
    };
  }, []);

  return (
    <section ref={heroRef} className="hero" aria-labelledby="hero-title">
      {/* From lg the frame and copy are centered as a pair, and the copy column is
          exactly as tall as the frame: intro at the top, socials and buttons on
          the frame's bottom edge. */}
      <div className="shell hero-body grid items-center gap-8 md:grid-cols-12 md:gap-x-5 lg:grid-cols-hero lg:content-center lg:items-start lg:justify-center lg:gap-x-hero-gap">
        <figure className="hero-figure md:col-span-5 lg:col-span-1">
          <div className="statue-card">
            <div ref={statueRef} className="statue">
              <Picture
                name={profile.portrait}
                alt="Michelangelo's David blowing a pink bubblegum bubble"
                sizes="(min-width: 1024px) 26rem, (min-width: 768px) 32vw, 18rem"
                loading="eager"
                fetchPriority="high"
                className="statue-photo block w-full"
              />
              {/* Under the photo: David's reaction, a flipbook from bubble-less
                  to shocked, played while the bubble is out. */}
              {framesOn &&
                profile.portraitReactions.map((name, i, all) => (
                  <span
                    key={name}
                    className={`statue-frame${i === 0 ? " statue-frame-base" : ""}${
                      i === all.length - 1 ? " statue-frame-last" : ""
                    }`}
                    style={{ "--frame": i }}
                    aria-hidden="true"
                  >
                    <Picture
                      name={name}
                      alt=""
                      sizes="(min-width: 1024px) 26rem, (min-width: 768px) 32vw, 18rem"
                      loading="eager"
                      fetchPriority="low"
                      onLoad={onFrameDone}
                      onError={onFrameDone}
                      className="block w-full"
                    />
                  </span>
                ))}
              <span ref={gumRef} className="gum" aria-hidden="true" />
            </div>
          </div>
          <figcaption className="hero-hint" aria-hidden="true">
            <span className="medal" />
            <span className="hint-hover">Hover over David for two seconds</span>
            <span className="hint-touch">Press and hold David</span>
          </figcaption>
        </figure>

        <div className="hero-copy md:col-span-7 lg:col-span-1 lg:flex lg:flex-col lg:self-stretch">
          <p className="hero-hello font-display text-step-2 font-medium text-muted">Hello, I&rsquo;m</p>
          <div className="hero-name">
            <h1
              id="hero-title"
              ref={titleRef}
              aria-label={profile.name}
              className="hero-title font-display font-extrabold tracking-hero"
            >
              <span aria-hidden="true">
                <Letters stagger />
              </span>
            </h1>
          </div>
          <div className="hero-meta lg:flex lg:flex-1 lg:flex-col">
            <p className="font-display text-step-1 font-bold uppercase">{profile.role}</p>
            <p className="hero-bio mt-6 max-w-measure text-step-1 leading-lede lg:mt-4">{profile.bio[0]}</p>
            <p className="mt-3 text-muted lg:mt-2">{profile.current}</p>
            <div className="mt-6 md:mt-7 lg:mt-auto lg:flex lg:flex-wrap lg:items-center lg:gap-x-6 lg:gap-y-4 lg:pt-5">
              <ul className="flex items-center gap-2">
                {socials.map(({ label, href, icon }) => {
                  const Icon = socialIcons[icon];
                  return (
                    <li key={label}>
                      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="icon-link">
                        <Icon aria-hidden="true" />
                      </a>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-7 lg:mt-0">
                <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn">
                  Download CV
                </a>
                <Link href="/contact" className="btn btn-ghost">
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-marquee">
        <StackMarquee />
      </div>

      {/* Signature effect: a bubble blown off David's gum that magnifies the name. */}
      <div className="hero-lens-layer" aria-hidden="true">
        <div ref={lensRef} className="hero-lens">
          <div className="hero-bubble">
            <div ref={copyRef} className="hero-lens-copy font-display font-extrabold tracking-hero">
              <Letters />
            </div>
          </div>
          <span className="hero-splash">
            {SPLASH.map((deg) => (
              <i key={deg} style={{ "--a": `${deg}deg` }} />
            ))}
          </span>
        </div>
      </div>
    </section>
  );
}
