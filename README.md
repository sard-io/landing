# SARD — landing (sard.io)

Static single-page landing for **SARD**, deployed to sard.io via Vercel.

`index.html` is fully self-contained — fonts and logos are inlined as data-URIs, so there are
**no external requests** and **no build step**. Vercel serves it as static (`vercel.json` disables
the build and serves the repo root).

## Source

This is the built output of the redesign. The editable source (`page.html` + `build.ps1`) lives in
**`sard-io/landing-redesign`** — make design changes there and copy the rebuilt `index.html` here.

## Assets

`assets/` holds the partner logos and font subsets used by the source build; `index.html` already
inlines everything it needs at runtime.

---
The previous React/Vite landing is preserved at **`sard-io/landing-legacy`**.
