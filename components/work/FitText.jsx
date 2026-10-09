"use client";

import { useEffect, useRef } from "react";

// Scales a single line of text so it spans its container's width. The CSS
// font-size is the pre-hydration fallback; the container's size is fixed, so
// adjusting the type here never shifts layout.
export default function FitText({ children, max = Infinity }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const box = el?.parentElement;
    if (!el || !box) return;

    const fit = () => {
      // 0.98 leaves room for glyph overhang past the advance width.
      const target = box.clientWidth * 0.98;
      if (!target) return;
      let size = parseFloat(getComputedStyle(el).fontSize);
      // A few passes: the optical-size axis changes glyph widths with size,
      // so scaling isn't perfectly linear.
      for (let i = 0; i < 4; i++) {
        const width = el.getBoundingClientRect().width;
        if (!width || Math.abs(width - target) < 1) break;
        size = Math.min((size * target) / width, max);
        el.style.fontSize = `${size}px`;
      }
    };

    // Fit only once the card nears the viewport, keeping the measuring work
    // off the initial load (the posters sit below the fold).
    let resize;
    const onFonts = () => resize && fit();
    const visible = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        visible.disconnect();
        fit();
        resize = new ResizeObserver(fit);
        resize.observe(box);
        // Re-fit once the webfont replaces the fallback.
        document.fonts?.ready.then(onFonts);
      },
      { rootMargin: "50% 0px" }
    );
    visible.observe(box);
    document.fonts?.addEventListener("loadingdone", onFonts);
    return () => {
      visible.disconnect();
      resize?.disconnect();
      document.fonts?.removeEventListener("loadingdone", onFonts);
    };
  }, [max]);

  return (
    <span ref={ref} className="fit-text">
      {children}
    </span>
  );
}
