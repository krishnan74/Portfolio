# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio site for Divyakrishnan (live at https://www.divyakrishnan.com/). Next.js 13.5 App Router, React 18, Tailwind CSS 3, plain JavaScript (no TypeScript).

## Commands

```bash
npm install
npm run dev      # dev server on http://localhost:3000
npm run build    # production build
npm run start    # serve production build
npm run lint     # next lint (extends next/core-web-vitals)
node scripts/optimize-images.mjs   # regenerate public/images/opt + data/images.json
node scripts/make-icons.mjs        # regenerate favicon.ico, icon.svg, apple-icon.png
```

There is no test suite.

## Architecture

- **Routes** (`app/`): `/` (`app/page.js`, a server component composing the sections) and `/projects` (full project index). `/about` redirects to `/#about` (`next.config.js`). `app/layout.js` holds fonts, metadata (OG/Twitter, theme color), Person JSON-LD, the blocking head script (saved theme + reveal flag), `Nav`, `Footer` and `Motion`. `app/sitemap.js` and `app/robots.js` generate those files; `public/og.png` is the social card.
- **Content lives in `data/`**, not in components:
  - `data/projects.js` — the single project list. `featured: true` projects (in order) get the poster cards; the rest go in the expandable index. `stack` is an array; `images` are base names of files in `public/images/opt`.
  - `data/experience.js`, `data/profile.js` (bio, links, email, marquee logos, skills, achievements, certifications, education).
  - `data/images.json` is generated; don't edit by hand.
- **Components** (`components/`): one per section (`Hero`, `work/*`, `Experience`, `Skills`, `About`, `Recognition`, `Contact`) plus shell (`Nav`, `ThemeToggle`, `Footer`, `Motion`) and helpers (`SectionHeader`, `Picture`). Add `"use client"` to any new component that uses hooks or browser APIs.
- **Design tokens**: every color, space, type size, radius, shadow and duration is a CSS custom property in `app/globals.css` (`:root` = dark, light via `prefers-color-scheme` or `html[data-theme]`). `tailwind.config.js` maps its theme *only* to these tokens, so `text-step-2`, `px-gutter`, `bg-surface`, `py-section` etc. are the vocabulary; Tailwind's default colors/spacing don't exist. Component-level CSS lives in `@layer components` in `globals.css`.
- **Breakpoints** (`tailwind.config.js`): `sm` 576, `md` 768, `lg` 1024, `xl` 1440, `2xl` 1920. Featured cards use a container query (`@container card`) rather than viewport breakpoints.
- **Fonts**: Bricolage Grotesque (display, variable with `opsz`) and IBM Plex Sans (body) via `next/font/google`, exposed as `--font-display` / `--font-body`.
- **Images**: use `components/Picture.jsx` (AVIF/WebP `<picture>` with intrinsic size) for anything in `public/images/opt`. To add a screenshot, put the PNG in `public/images/`, add its name to `scripts/optimize-images.mjs`, run it, and reference it from `data/projects.js`.
- **Motion**: the hero bubble lens (`Hero.jsx`) is the one signature effect; it only animates `transform`. Scroll reveals use `data-reveal` attributes picked up by `Motion.jsx`; the head script enables them only when motion is allowed. Lenis smooth scroll loads lazily on fine pointers. Respect `prefers-reduced-motion` in anything new.
- **Contact form**: `components/Contact.jsx` sends via `@emailjs/browser` (loaded on submit; service/template/public key inlined) and reports status in an `aria-live` region.
