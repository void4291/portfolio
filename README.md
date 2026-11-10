# Wajahat Rahman — Portfolio

Personal portfolio site. A fully static, front-end-only single-page app with a dark purple theme and animated transitions.

**Stack:** [Vite](https://vite.dev) · React 19 · TypeScript · Tailwind CSS v4 · [Motion](https://motion.dev) · Lucide icons · self-hosted variable fonts (Inter, Space Grotesk, JetBrains Mono).

## Run locally

```bash
npm install
npm run dev
```

Other scripts: `npm run build` (type-check + production build into `dist/`) and `npm run preview` (serve the build).

## Editing content

All content lives in one file: [`src/data/profile.ts`](src/data/profile.ts) — profile text, experience, selected work, skills, certifications, education and awards.

**Contact links** are set in `profile.links` in that file. Any link left empty is hidden:

```ts
links: {
  email: 'you@example.com',
  linkedin: 'https://www.linkedin.com/in/your-handle',
  github: 'https://github.com/your-handle',
  resume: '/resume.pdf', // drop the file into /public
},
```

## Project structure

```
src/
  data/profile.ts     all site content
  sections/           Hero, About, Experience, Work, Skills, Credentials, Awards, Contact
  components/         Navbar, Loader, Background (starfield), CursorGlow, cards, marquee, etc.
  hooks/              scroll-spy for the active nav item
  lib/motion.ts       shared animation variants
  index.css           theme tokens (colors, fonts, keyframes) and component styles
```

The colour palette is defined as theme tokens at the top of `src/index.css`.

## Deploying to Vercel

1. Push this repository to GitHub.
2. In Vercel, **Add New → Project** and import the repository.
3. Vercel detects Vite automatically (build command `npm run build`, output directory `dist`) — no configuration needed.

## Accessibility & performance

- Respects `prefers-reduced-motion`: the intro, typing effects and scroll animations are skipped or simplified.
- The intro loader plays once per browser session.
- The starfield canvas pauses when the tab is hidden; the cursor glow is disabled on touch devices.
