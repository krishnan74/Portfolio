"use client";

import { useEffect, useRef } from "react";
import { profile } from "@/data/profile";

const LINES = ["Divya", "krishnan"];
// Magnification inside the bubble. Must match --lens-zoom in globals.css.
const ZOOM = 1.18;

function Letters({ stagger = false }) {
  let i = 0;
  return LINES.map((line) => (
    <span key={line} className="hero-line">
      <span className="hero-line-inner">
        {line.split("").map((char, j) => (
          <span key={j} className="hero-char" style={stagger ? { "--i": i++ } : undefined}>
            {char}
          </span>
        ))}
      </span>
    </span>
  ));
}

export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const lensRef = useRef(null);
  const copyRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const title = titleRef.current;
    const lens = lensRef.current;
    const copy = copyRef.current;
    if (!hero || !title || !lens || !copy) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

    let size = 0; // lens diameter
    let box = { x: 0, y: 0, w: 0, h: 0 }; // headline box in hero coords
    let rest = { x: 0, y: 0 };
    const pos = { x: 0, y: 0 };
    const vel = { x: 0, y: 0 };
    let target = null; // pointer target (lens center), null = rest
    let frame = 0;
    let last = 0;
    let visible = true;
    let t0 = performance.now();

    const render = () => {
      const c = size / 2;
      const x = pos.x - c;
      const y = pos.y - c;
      lens.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      // Map headline coordinates into lens coordinates, magnified about the
      // lens center. The copy is already typeset at ZOOM, so only translate.
      const tx = c + ZOOM * (box.x - x - c);
      const ty = c + ZOOM * (box.y - y - c);
      copy.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
    };

    const measure = () => {
      const heroRect = hero.getBoundingClientRect();
      const titleRect = title.getBoundingClientRect();
      size = lens.offsetWidth;
      box = {
        x: titleRect.left - heroRect.left,
        y: titleRect.top - heroRect.top,
        w: titleRect.width,
        h: titleRect.height,
      };
      copy.style.width = `${box.w * ZOOM}px`;
      // Rest over the tail of the first line ("ya").
      const first = title.querySelector(".hero-line-inner").getBoundingClientRect();
      rest = {
        x: first.left - heroRect.left + first.width * 0.8,
        y: first.top - heroRect.top + first.height * 0.55,
      };
      if (!frame || reduce.matches) {
        pos.x = rest.x;
        pos.y = rest.y;
      }
      render();
    };

    const tick = (now) => {
      frame = 0;
      const dt = Math.min(48, now - (last || now)) / 16.67;
      last = now;

      let goal = target;
      if (!goal) {
        // Idle drift around the resting point.
        const t = (now - t0) / 1000;
        const amp = Math.min(box.w, 900) * 0.03;
        goal = { x: rest.x + Math.sin(t * 0.7) * amp, y: rest.y + Math.cos(t * 0.53) * amp * 0.8 };
      }

      // Damped spring toward the goal.
      const k = 0.06;
      const damping = Math.pow(0.8, dt);
      vel.x = (vel.x + (goal.x - pos.x) * k * dt) * damping;
      vel.y = (vel.y + (goal.y - pos.y) * k * dt) * damping;
      pos.x += vel.x * dt;
      pos.y += vel.y * dt;
      render();
      if (visible && !document.hidden) frame = requestAnimationFrame(tick);
    };

    const start = () => {
      if (reduce.matches || frame || !visible) return;
      last = 0;
      frame = requestAnimationFrame(tick);
    };
    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
    };

    const onPointerMove = (e) => {
      if (!finePointer.matches) return;
      const r = hero.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      target = x >= 0 && y >= 0 && x <= r.width && y <= r.height ? { x, y } : null;
    };
    const onPointerLeave = () => {
      target = null;
    };

    const visibility = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      visible ? start() : stop();
    });
    const resize = new ResizeObserver(measure);
    const onVisibility = () => (document.hidden ? stop() : start());
    const onReduceChange = () => {
      stop();
      measure();
      start();
    };

    document.fonts?.ready.then(measure);
    measure();
    resize.observe(hero);
    visibility.observe(hero);
    hero.addEventListener("pointermove", onPointerMove);
    hero.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("visibilitychange", onVisibility);
    reduce.addEventListener("change", onReduceChange);
    hero.dataset.lens = "ready";
    start();

    return () => {
      stop();
      resize.disconnect();
      visibility.disconnect();
      hero.removeEventListener("pointermove", onPointerMove);
      hero.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibility);
      reduce.removeEventListener("change", onReduceChange);
    };
  }, []);

  return (
    <section ref={heroRef} className="hero" aria-labelledby="hero-title">
      <div className="shell flex flex-col justify-between gap-9 pb-9 pt-9 md:pt-10 lg:min-h-svh lg:gap-8">
        <h1
          id="hero-title"
          ref={titleRef}
          aria-label={profile.name}
          className="hero-title font-display text-hero font-extrabold tracking-hero"
        >
          <span aria-hidden="true" className="hero-stack">
            <Letters stagger />
          </span>
        </h1>

        <div className="hero-meta grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="max-w-measure text-step-1 leading-lede md:text-step-2">{profile.intro}</p>
            <p className="mt-3 text-muted">{profile.current}</p>
          </div>
          <div className="flex flex-wrap items-center gap-5 lg:col-span-5 lg:justify-end">
            <a href="#contact" className="btn">
              Get in touch
            </a>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="link-underline">
              Download CV
            </a>
          </div>
        </div>
      </div>

      {/* Signature effect: a bubblegum lens that magnifies the headline. */}
      <div className="hero-lens-layer" aria-hidden="true">
        <div ref={lensRef} className="hero-lens">
          <div className="hero-bubble">
            <div ref={copyRef} className="hero-lens-copy hero-stack font-display font-extrabold tracking-hero">
              <Letters />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
