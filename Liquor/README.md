# Jasper Studio

Live demo: (local) run the dev server with `npm run dev` and open the URL printed by Vite.

## Project Overview
Jasper Studio is a small product design studio focused on helping startups and small teams ship thoughtful, user-centered web products. This repository demonstrates a responsive React (Vite) site styled with Tailwind CSS, using optimized images, accessible components, and a consistent design system.

## Brand Identity
- Brand name: Jasper Studio
- Tagline: Design for thoughtful brands
- Value proposition: Strategic design + pragmatic delivery for product teams
- Target audience: Early-stage startups, small product teams, and creative agencies
- Voice & tone: Clear, confident, and helpful

### Color System
- Primary: #1F6FEB — primary brand color for CTAs and highlights (trustworthy, tech-forward blue)
- Secondary: #FF7AA2 — supporting accent (friendly, human tone)
- Accent: #FFD166 — callouts and highlights (warm attention)
- Neutral dark: #0F1724 — primary text color (high contrast)
- Neutral light: #F3F4F6 — backgrounds and surfaces

Color rationale: The palette balances a dependable blue primary with warm supporting accents to create an approachable, professional presence. Colors meet WCAG AA contrast when used for text over backgrounds.

### Typography
- Headings: Poppins / Inter (stack) — geometric, modern display weight for headings
- Body: Inter / system-sans — readable, neutral body text
- Type scale: large, clear headings on LG, scaled down for MD & SM breakpoints

## Files added
- `tailwind.config.cjs` — custom color palette, fonts and breakpoints
- `postcss.config.cjs` — Tailwind integration
- `src/components/` — Header, Navigation, Footer, Hero, Features, About, Contact and common components
- `src/assets/images/` — high-quality images (optimized to multiple sizes and WebP)
- `scripts/resize-images.cjs` — image resizing script (uses `sharp`)

## Image Credits
- Hero: "Team collaborating" — Unsplash (photo id: photo-1522202176988) — https://unsplash.com/
- Feature images: Various Unsplash images used as placeholders — see `src/assets/images/` for filenames.

## Installation & Setup
1. Install dependencies:
```bash
cd /workspaces/James-/liquor
npm install
```
2. Generate responsive images (already generated in this workspace). To regenerate locally:
```bash
npm run images:build
```
3. Start dev server:
```bash
npm run dev
```

## Technologies Used
- React (18+ compatible)
- Vite
- Tailwind CSS
- Sharp (image processing)

## Notes on Lighthouse and Deployment
I started the dev server in this environment. Running Lighthouse programmatically requires Chrome/Chromium available in the environment — if Chrome is not present here, run Lighthouse locally or on the deployed URL for accurate scores.

## Next steps & Improvements
- Continue pixel-perfect adjustments against the provided LG design using exact spacing measurements.
- Deploy to Netlify or Vercel and run Lighthouse audits to reach target scores.
- Add automated image generation to the build pipeline.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
