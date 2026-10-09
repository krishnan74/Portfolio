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

- **Routes** (`app/`): `/` (`app/page.js`: hero, the first three featured projects, contact strip), `/work` (all featured cards + project index), `/experience` (experience + skills), `/about` (about + recognition) and `/contact`. Each subpage ends with a `NextPage` link to the next one; `/projects` redirects to `/work` (`next.config.js`). Section components take `first` to render an `h1` and `pt-page` padding when they open a page. `app/layout.js` holds fonts, metadata (OG/Twitter, theme color), Person JSON-LD, the blocking head script (saved theme + reveal flag), `Nav` (highlights the current route), `Footer` and `Motion`. `app/sitemap.js` and `app/robots.js` generate those files; `public/og.png` is the social card.
- **Content lives in `data/`**, not in components:
  - `data/projects.js` — the single project list. `featured: true` projects (in order) get the poster cards; the rest go in the expandable index. `stack` is an array; `images` are base names of files in `public/images/opt`.
  - `data/experience.js`, `data/profile.js` (bio, links with icons, email, hero marquee logos, skills, achievements, certifications, education).
  - `data/images.json` is generated; don't edit by hand.
- **Components** (`components/`): one per section (`Hero`, `work/*`, `Experience`, `Skills`, `About`, `Recognition`, `Contact`, `ContactStrip`) plus shell (`Nav`, `ThemeToggle`, `Footer`, `Motion`) and helpers (`SectionHeader`, `NextPage`, `Picture`, `StackMarquee`). Add `"use client"` to any new component that uses hooks or browser APIs.
- **Design tokens**: every color, space, type size, radius, shadow and duration is a CSS custom property in `app/globals.css` (`:root` = dark, light via `prefers-color-scheme` or `html[data-theme]`). `tailwind.config.js` maps its theme *only* to these tokens, so `text-step-2`, `px-gutter`, `bg-surface`, `py-section` etc. are the vocabulary; Tailwind's default colors/spacing don't exist. Component-level CSS lives in `@layer components` in `globals.css`.
- **Breakpoints** (`tailwind.config.js`): `sm` 576, `md` 768, `lg` 1024, `xl` 1440, `2xl` 1920. Featured cards use a container query (`@container card`) rather than viewport breakpoints.
- **Fonts**: Bricolage Grotesque (display, variable with `opsz`) and IBM Plex Sans (body) via `next/font/google`, exposed as `--font-display` / `--font-body`.
- **Images**: use `components/Picture.jsx` (AVIF/WebP `<picture>` with intrinsic size) for anything in `public/images/opt`. To add a framed screenshot, put the PNG in `public/images/` and add its name to `screenshots` in `scripts/optimize-images.mjs`; featured-project images (used uncropped) live in `assets/images/project pics/` and are listed in its `photos` map. Run the script, then reference the base name from `images` in `data/projects.js`. Featured cards with an image show it whole and put the name below; without one they fall back to the typographic poster.
- **Motion**: the hero bubble (`Hero.jsx`) is the one signature effect: hovering David for 2s (press and hold on touch) swells the gum (`.gum`, positioned over the bubble painted in `statue.png`) until a bubble comes off, follows the cursor and magnifies the name; a press pops it. Reduced motion gets a still bubble on the name. It only animates `transform`/`opacity`. Scroll reveals use `data-reveal` attributes picked up by `Motion.jsx`; the head script enables them only when motion is allowed. Lenis smooth scroll loads lazily on fine pointers. Respect `prefers-reduced-motion` in anything new.
- **Contact form**: `components/Contact.jsx` sends via `@emailjs/browser` (loaded on submit; service/template/public key inlined) and reports status in an `aria-live` region.
