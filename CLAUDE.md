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
```

There is no test suite.

## Architecture

- **Routes** (`app/`): `/` (`app/page.js`), `/projects` (`app/projects/page.js`), `/about` (`app/about/page.js`). `app/layout.js` renders the shared `Navbar` and sets the default Barlow Condensed font. Route-specific components live next to their page (e.g. `app/about/*.jsx`, `app/projects/ProjectTimelineCard.jsx`); shared ones live in `components/`.
- **Import alias**: `@/*` maps to the repo root (`jsconfig.json`), e.g. `@/components/Footer`.
- **Project data is hardcoded, in two separate places**:
  - `components/Projects.jsx` — cards on the home page (with `projectURL` links).
  - `app/projects/page.js` — timeline on `/projects` (with `projectPic`, optional `frontImage`/`backImage` for the image demo).
  Adding/editing a project usually means updating both arrays. Each entry uses fixed `techStack1`/`techStack2`/`techStack3` fields rather than an array. Despite the README, there is no live GitHub API fetching.
- **Contact form**: `components/Contact.jsx` sends mail client-side via `@emailjs/browser` (service/template/public key inlined) and shows `react-toastify` toasts. It is shown as a fixed-position overlay toggled from `app/page.js`.
- **Client components**: `app/page.js` is a `"use client"` page (scroll handlers, contact overlay state), as are `Navbar` and `ProjectTimelineCard`. Add `"use client"` to any new component that uses hooks or browser APIs.
- **Styling**: Tailwind utilities plus a few component CSS files (`components/*.css`, `app/projects/timeline.css`, `app/globals.css` — dark `#121212` page background). Fonts come from `next/font/google`, often instantiated per file.
- **Custom Tailwind breakpoints** (`tailwind.config.js`) replace the defaults: `sm` = 576px, `md` = 960px, `lg` = 1440px (there is no `xl`/`2xl`). Keep this in mind for responsive classes.
- **Static assets** are in `public/` (icons, `Resume.pdf` served at `/Resume.pdf`, project screenshots under `public/images/`). Images are mostly plain `<img>` tags, not `next/image`.
