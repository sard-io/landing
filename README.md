# SARD — landing

Pixel-perfect landing for **SARD** (iGaming ecosystem), rebuilt 1-to-1 from the Figma
"final" boards. Responsive (desktop + mobile) with a light/dark theme toggle (dark default).

## Stack

- **Vite + React + TypeScript**
- Plain CSS with design tokens (`src/styles/tokens.css`), CSS custom properties per theme
- **Golos Text** (self-hosted via `@fontsource`, Cyrillic subset) — matches the Figma type
- Bun for install/dev/build

## Scripts

```bash
bun install
bun run dev      # http://localhost:5173
bun run build    # -> dist/
bun run preview
```

## Structure

- `src/App.tsx` — page composition (Header → Hero → Projects → Partners → WhoWeAre → Footer)
- `src/theme.tsx` — theme provider/toggle (persists to localStorage, sets `data-theme` on `<html>`)
- `src/components/*` — one component + co-located CSS per section
- `src/data.ts` — all copy extracted verbatim from the Figma boards
- `public/assets/*` — logos / graphics; theme-paired as `<name>-dark.png` / `<name>-light.png`

## Design source

The design lives in the Figma "Sard" file, section `26:286`, four boards:
desktop-dark `14:26`, desktop-light `25:424`, mobile-dark `25:738`, mobile-light `25:2748`.
Reference PNGs, JSON, and cropped assets are under `.figma-ref/` (git-ignored), captured via
the `skulidropek/figma-tunnel-mcp` bridge. Rendered screenshots were diffed side-by-side
against the board exports to tune the layout to 1-to-1.
