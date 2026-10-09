"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { profile, socials } from "@/data/profile";

const links = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(null);
  const menuRef = useRef(null);

  // Hide while scrolling down, reveal on any upward scroll.
  useEffect(() => {
    let last = window.scrollY;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      setScrolled(y > 8);
      if (Math.abs(y - last) < 6) return;
      setHidden(y > last && y > 160);
      last = y;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  // Highlight the section currently in the middle of the viewport.
  useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.id)).filter(Boolean);
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const openMenu = () => menuRef.current?.showModal();
  const closeMenu = () => menuRef.current?.close();

  return (
    <header
      onFocusCapture={() => setHidden(false)}
      className={`nav fixed inset-x-0 top-0 z-40 transition-transform duration-base ease-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
      data-scrolled={scrolled}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-nav max-w-page items-center justify-between gap-5 px-gutter"
      >
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-step-1 font-bold tracking-tight"
        >
          <span aria-hidden="true" className="nav-mark" />
          {profile.name}
        </Link>

        <div className="flex items-center gap-2 md:gap-5">
          <ul className="hidden items-center gap-5 md:flex">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  href={`/#${link.id}`}
                  aria-current={active === link.id ? "true" : undefined}
                  className="nav-link"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="nav-link">
                Resume
              </a>
            </li>
          </ul>
          <ThemeToggle className="md:-mr-3" />
          <button
            type="button"
            onClick={openMenu}
            aria-haspopup="dialog"
            className="-mr-4 h-7 rounded-full px-4 font-medium md:hidden"
          >
            Menu
          </button>
        </div>
      </nav>

      <dialog ref={menuRef} className="menu-sheet" aria-label="Menu">
        <div className="flex min-h-full flex-col px-gutter pb-7">
          <div className="flex h-nav items-center justify-between">
            <span className="flex items-center gap-2 font-display text-step-1 font-bold tracking-tight">
              <span aria-hidden="true" className="nav-mark" />
              {profile.name}
            </span>
            <button type="button" onClick={closeMenu} className="-mr-4 h-7 rounded-full px-4 font-medium">
              Close
            </button>
          </div>
          <ul className="mt-8 flex flex-col gap-3">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  href={`/#${link.id}`}
                  onClick={closeMenu}
                  className="font-display text-step-4 font-bold tracking-tight"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-step-4 font-bold tracking-tight"
              >
                Resume
              </a>
            </li>
          </ul>
          <div className="mt-auto flex flex-col gap-3 pt-8 text-muted">
            <a href={`mailto:${profile.email}`} className="text-fg underline underline-offset-4">
              {profile.email}
            </a>
            <ul className="flex flex-wrap gap-5">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-fg">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </dialog>
    </header>
  );
}
