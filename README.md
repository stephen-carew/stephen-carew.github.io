# Stephen Carew — Portfolio

Personal site: [stephen-carew.github.io](https://stephen-carew.github.io) · [ebenor.co.uk](https://ebenor.co.uk)

I'm an instrumentation & control engineer (MSc, Teesside University) who builds
production software solo. The site is drawn as an engineering document
package on drafting vellum, with a transfer switch that re-annotates the whole
page for two audiences:

- **PRODUCT mode** (default): software and product engineering recruiters.
- **INSTRUMENT mode**: control & instrumentation engineering recruiters.

## Work

Live project data lives in [`src/data/projects.ts`](src/data/projects.ts).
Current flagship: **Ebenor** (UK property management SaaS, solo-built, in
production at ebenor.co.uk), alongside Solana/NFT platforms, a restaurant
ordering system with M-Pesa payments, a car-parts marketplace, and a Discord
bot suite running across 50+ servers.

## Theses

- **MSc (in progress), Teesside University:** PSO-Optimised Fuzzy Self-Tuning
  PID Control: Performance and Robustness under Dead Time, Nonlinearity and
  Parameter Uncertainty.
- **BSc (Hons), Curtin University:** Gait Phase Detection using Inertial
  Measurement Units and Neural Networks.

## Stack

Next.js 15 (App Router, static export), React 19, TypeScript, Tailwind CSS 4,
Framer Motion, Martian Mono + Archivo. No UI kit in the shipped pages; the
drawing primitives (ISA bubbles, stamps, dimension rules, plotter reveals)
live in `src/components/drawing.tsx` and `src/components/transfer-switch.tsx`.

## Development

```bash
npm install
npm run dev        # local dev at http://localhost:3000
npm run build      # static export to out/ (GitHub Pages)
npm run lint
```

Notes:

- `next.config.ts` uses `output: "export"`, so there is no server at runtime.
  The contact form falls back to opening the visitor's mail client.
- The two-mode preference persists in `localStorage` under
  `sc-drawing-transfer`.
- Design decisions are documented in `PRODUCT.md` and `DESIGN.md`.

## Contact

hi@stephencarew.dev · [LinkedIn](https://www.linkedin.com/in/stephen-carew) ·
[GitHub](https://github.com/stephen-carew)
