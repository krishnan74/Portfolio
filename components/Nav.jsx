"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { profile, socials } from "@/data/profile";

const links = [
  { href: "/work", label: "Work" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
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

  const openMenu = () => menuRef.current?.showModal();
  const closeMenu = () => menuRef.current?.close();

  return (
    <header
      onFocusCapture={() => setHidden(false)}
      className={`nav fixed inset-x-0 top-0 z-40 flex h-nav items-start justify-center px-gutter pt-nav-top transition-transform duration-base ease-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
      data-scrolled={scrolled}
    >
      <nav aria-label="Primary" className="nav-glass flex items-center gap-5">
        {/* Centered: the bubble mark (home), the page links, then the toggle. */}
        <Link href="/" aria-label={`${profile.name}, home`} className="nav-home text-step-1">
          <span aria-hidden="true" className="nav-mark" />
        </Link>

        <div className="flex items-center gap-2 md:gap-5">
          <ul className="hidden items-center gap-5 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
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
          <ThemeToggle />
          <button
            type="button"
            onClick={openMenu}
            aria-haspopup="dialog"
            className="h-7 rounded-full px-4 font-medium md:hidden"
          >
            Menu
          </button>
        </div>
      </nav>

      <dialog ref={menuRef} className="menu-sheet" aria-label="Menu">
        <div className="flex min-h-full flex-col px-gutter pb-7">
          {/* Mirrors the bar it covers, so Close lands where Menu was. */}
          <div className="flex h-nav items-start justify-center pt-nav-top">
            <div className="nav-glass flex items-center gap-5">
              <span aria-hidden="true" className="nav-home text-step-1">
                <span className="nav-mark" />
              </span>
              <div className="flex items-center gap-2">
                <span aria-hidden="true" className="h-7 w-7" />
                <button type="button" onClick={closeMenu} className="h-7 rounded-full px-4 font-medium">
                  Close
                </button>
              </div>
            </div>
          </div>
          <ul className="mt-8 flex flex-col gap-3">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className="menu-link font-display text-step-4 font-bold tracking-tight"
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
