"use client";

import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import Picture from "@/components/Picture";
import { linkLabel } from "./linkLabel";

function PlusIcon({ open }) {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" className="index-icon" data-open={open}>
      <path d="M2 8h12" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 2v12" stroke="currentColor" strokeWidth="1.5" className="index-icon-v" />
    </svg>
  );
}

// Expandable list of projects. On devices with a fine pointer, hovering a row
// that has a screenshot shows it in a preview that trails the cursor.
export default function ProjectIndex({ projects, headingLevel = 4 }) {
  const Heading = `h${headingLevel}`;
  const [open, setOpen] = useState(() => new Set());
  const [hovered, setHovered] = useState(null);
  const [canPreview, setCanPreview] = useState(false);
  // Preview images load only once someone hovers the list.
  const [armed, setArmed] = useState(false);
  const previewRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setCanPreview(fine.matches);
    update();
    fine.addEventListener("change", update);
    return () => fine.removeEventListener("change", update);
  }, []);

  // Trail the cursor with a light spring; transform only.
  useEffect(() => {
    if (!canPreview || !armed) return;
    const el = previewRef.current;
    const list = listRef.current;
    if (!el || !list) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pos = { x: 0, y: 0 };
    const goal = { x: 0, y: 0 };
    let frame = 0;
    let primed = false;

    const loop = () => {
      const ease = reduce ? 1 : 0.18;
      pos.x += (goal.x - pos.x) * ease;
      pos.y += (goal.y - pos.y) * ease;
      el.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      frame = Math.abs(goal.x - pos.x) + Math.abs(goal.y - pos.y) > 0.5 ? requestAnimationFrame(loop) : 0;
    };
    const onMove = (e) => {
      goal.x = e.clientX + 24;
      goal.y = e.clientY - el.offsetHeight / 2;
      if (!primed) {
        pos.x = goal.x;
        pos.y = goal.y;
        primed = true;
      }
      if (!frame) frame = requestAnimationFrame(loop);
    };
    const onLeave = () => {
      primed = false;
    };
    list.addEventListener("pointermove", onMove);
    list.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      list.removeEventListener("pointermove", onMove);
      list.removeEventListener("pointerleave", onLeave);
    };
  }, [canPreview, armed]);

  const toggle = (slug) => {
    const update = () =>
      flushSync(() =>
        setOpen((prev) => {
          const next = new Set(prev);
          next.has(slug) ? next.delete(slug) : next.add(slug);
          return next;
        })
      );
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!document.startViewTransition || reduce) return update();
    // Rows glide to their new positions; the rest of the page doesn't crossfade.
    document.documentElement.classList.add("vt-index");
    const transition = document.startViewTransition(update);
    transition.finished.finally(() => document.documentElement.classList.remove("vt-index"));
  };

  const previewable = projects.filter((p) => p.images?.length);
  const showPreview = canPreview && hovered && !open.has(hovered);

  return (
    <div className="relative">
      <ul ref={listRef} className="border-b border-line">
        {projects.map((project) => {
          const isOpen = open.has(project.slug);
          const panelId = `project-${project.slug}`;
          return (
            <li
              key={project.slug}
              className="index-row border-t border-line"
              style={{ viewTransitionName: `idx-${project.slug}` }}
            >
              <Heading>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(project.slug)}
                  onPointerEnter={() => {
                    setArmed(true);
                    setHovered(project.images?.length ? project.slug : null);
                  }}
                  onPointerLeave={() => setHovered(null)}
                  className="index-trigger grid w-full grid-cols-12 items-baseline gap-x-5 py-5 text-left"
                >
                  <span className="col-span-10 font-display text-step-2 font-bold tracking-tight md:col-span-5">
                    {project.name}
                  </span>
                  <span className="hidden font-body text-step--1 font-normal tracking-normal text-muted md:col-span-6 md:block">
                    {project.stack.join(", ")}
                  </span>
                  <span className="col-span-2 justify-self-end md:col-span-1">
                    <PlusIcon open={isOpen} />
                  </span>
                </button>
              </Heading>
              <div id={panelId} hidden={!isOpen} className="index-panel">
                <div className="grid gap-6 pb-7 md:grid-cols-12 md:gap-x-5">
                  <div className="flex flex-col gap-4 md:col-span-5">
                    {project.recognition && (
                      <p className="flex items-center gap-2 text-step--1 font-medium">
                        <span className="medal" aria-hidden="true" />
                        {project.recognition}
                      </p>
                    )}
                    <p className="max-w-measure">{project.description}</p>
                    <p className="text-step--1 text-muted md:hidden">{project.stack.join(", ")}</p>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline self-start"
                      >
                        {linkLabel(project.url)}
                        <span className="sr-only"> for {project.name} (opens in a new tab)</span>
                      </a>
                    )}
                  </div>
                  {project.images?.length > 0 && (
                    <div className="grid gap-4 md:col-span-7">
                      {isOpen &&
                        project.images.map((img, i) => (
                          <Picture
                            key={img}
                            name={img}
                            alt={`${project.name} screenshot${project.images.length > 1 ? ` ${i + 1}` : ""}`}
                            sizes="(min-width: 768px) 55vw, 100vw"
                            className="w-full rounded-md border border-line"
                          />
                        ))}
                    </div>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      {canPreview && armed && (
        <div ref={previewRef} className="index-preview" data-visible={showPreview ? "true" : "false"} aria-hidden="true">
          {previewable.map((p) => (
            <div key={p.slug} className="index-preview-item" data-active={hovered === p.slug}>
              <Picture name={p.images[0]} alt="" sizes="22rem" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
