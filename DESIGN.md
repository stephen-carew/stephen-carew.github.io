# Design System — Drawing Package SC-2026

## Theme

Light drafting-vellum surface throughout. The sheet is warm paper with a faint grain and a barely-visible 40px drafting grid. No dark mode by design; the "terminal" identity is carried by ink line-work, not background color.

Accent color is **pen color** and switches with the transfer position:

- PRODUCT mode → **redline** `oklch(55% 0.19 28)` (revision-pen red)
- INSTRUMENT mode → **bluepen** `oklch(42% 0.11 248)` (prussian drafting blue)

CSS custom property `--accent` is set on `html[data-mode]`; every accent usage references `var(--color-accent)`.

## Color tokens

| Token | Value | Use |
|---|---|---|
| `paper` | oklch(95.5% 0.017 85) | page surface |
| `sheet` | oklch(92.8% 0.02 85) | table fields, recessed blocks |
| `chart` | oklch(90% 0.045 92) | tan strip-chart paper |
| `ink` | oklch(24% 0.017 75) | text, line-work |
| `ink-soft` | oklch(45% 0.02 75) | secondary text |
| `ink-faint` | oklch(58% 0.02 78) | annotations |
| `rule` | ink @ 14–32% alpha | borders, grid lines |
| `redline` / `bluepen` | see above | pen accents per mode |
| `pass` | oklch(50% 0.12 150) | rare status stamps only |

Never pure black/white. Neutrals are warm-hued (hue 75–92).

## Typography

- **Archivo** (next/font): display and body. Weights 500/700/800/900. Headings 800–900, tracking `-0.02em`, sentence case. One committed industrial grotesque — no display/body pairing.
- **Martian Mono** (next/font): annotation grammar ONLY — tags, dimensions, stamps, schedule columns, small labels. Uppercase, `tracking-[0.14em]+`, size ≤ 15px. Never body copy.
- Fluid heading scale via `clamp()`, ratio ≥1.3. Light-on-dark rules do not apply (we are ink-on-paper).

## Signature devices

- **Title block**: bottom-corner drawing stamp (DWG NO / TITLE / SCALE: NTS / SHEET n OF 6 / DRAWN BY / APPROVED with dotted sign-line). In hero and footer.
- **Instrument bubbles** (ISA-5.1): circle, horizontal hairline, tag letters above / number below. Used for project tags (`TEN-101`) and section marks.
- **Revision stamps**: zone-positioned corner stamps per section (`SHT 03 · REV E`), never centered above headings.
- **Equipment schedule**: projects as table rows (TAG / SERVICE / YR / MATERIAL / STATUS), expandable to `SECTION A-A` detail. Not cards.
- **Dimension rules**: section dividers drawn as dimension lines (ticks + arrowheads), replacing plain `<hr>`.
- **Strip chart**: thesis trace on tan chart paper with perforated edge.

## Motion

- **Plotter reveal**: SVG paths animate `pathLength` 0→1 over 1.2–1.8s, ease-out-quint `[0.22,1,0.36,1]`, sequenced left-to-right along the signal path. Lines draw; blocks fade-settle 0.35s max.
- Transfer switch: knob translates 0.28s; sheet annotations swap with a quick crossfade ≤0.2s.
- No bounce, no elastic, no layout-property animation, no scroll-jacking. All under the global reduced-motion kill switch.

## Layout rules

- Max sheet width 1240px, generous asymmetric margins, left-anchored compositions; hero is a two-zone drawing sheet (nameplate left, loop diagram right), never a centered stack.
- Corners: 0–2px radius only. Right angles are the brand.
- No card grids, no icon-above-heading, no glassmorphism, no gradients on text.
