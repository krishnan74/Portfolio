"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Site-wide motion: one-time scroll reveals for [data-reveal] elements, and
// Lenis smooth scrolling on desktop pointers. Both stand down when the
// visitor prefers reduced motion.
export default function Motion() {
  const pathname = usePathname();

  // Reveals. The head script adds .reveal-ready only when motion is allowed,
  // so without JS (or with reduced motion) content is never hidden.
  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("reveal-ready")) return;
    root.classList.add("reveal-live");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.dataset.revealed = "true";
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px" }
    );
    document.querySelectorAll("[data-reveal]:not([data-revealed])").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  // Smooth scrolling, loaded lazily and only where it helps.
  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    let lenis;
    let cancelled = false;
    import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;
      // Anchors honour the CSS scroll-padding-top / scroll-margin-top.
      lenis = new Lenis({
        autoRaf: true,
        lerp: 0.12,
        anchors: true,
        // Leave native scrolling to dialogs and anything opting out.
        prevent: (node) => node.nodeName === "DIALOG",
      });
    });
    return () => {
      cancelled = true;
      lenis?.destroy();
    };
  }, []);

  return null;
}
