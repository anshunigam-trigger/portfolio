# Anshu Nigam — Portfolio

A Next.js 14 portfolio built around a terminal-boot hero, an "experiment log"
of real projects, and a layered stack breakdown.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Customize

- **Projects, metrics, stack:** all content lives in `data/projects.js` — no
  need to touch components to update text.
- **Colors:** edit the palette in `tailwind.config.js` (`void`, `panel`,
  `hairline`, `ink`, `mist`, `signal`, `ember`).
- **Fonts:** loaded via `next/font/google` in `app/layout.js` — Space Grotesk
  (headings), Inter (body), JetBrains Mono (data/terminal).
- **Links:** GitHub/LinkedIn/email links are hardcoded in `Hero.js`,
  `Contact.js`, and `data/projects.js` — update if your handles change.

## Deploy

Easiest path is Vercel (built by the same team as Next.js):

1. Push this folder to a GitHub repo.
2. Go to https://vercel.com/new, import the repo.
3. Vercel auto-detects Next.js — no config needed. Click Deploy.

## Structure

```
app/
  layout.js       — fonts + global metadata
  page.js          — assembles all sections
  globals.css      — palette, grid texture, reduced-motion handling
components/
  Hero.js          — terminal boot sequence (the signature element)
  NetworkCanvas.js — ambient node-network background (canvas, no libraries)
  StatusBar.js     — real metrics readout
  About.js         — bio + education
  Projects.js / ProjectCard.js — the "experiment log"
  Skills.js        — stack shown as layered architecture
  Contact.js       — email/GitHub/LinkedIn CTA
data/
  projects.js      — all real content: projects, metrics, stack layers
```
