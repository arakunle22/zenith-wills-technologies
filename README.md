# Zenith Wills Technologies

Professional technology-installation company (Nigeria). This is the company's
marketing website — a multi-page Next.js app.

## Site

- **Stack:** Next.js (App Router) + React + TypeScript + Tailwind CSS 4.
- **Pages:** Home (`/`), Services (`/services`), Our Work (`/work`), About (`/about`), Contact (`/contact`).
- **Brand assets:** `public/logo.png`, `public/favicon-*`, `public/og*.png`; SVG/PNG sources in `branding/logo/`.
- **Media:** `public/images/` (service + work photos), `public/videos/` (installation clips).

## Brand

| Token | Value | Use |
|-------|-------|-----|
| Primary blue | `#0090F0` | links, secondary accents |
| Primary deep | `#0070C0` | hover states |
| Accent green | `#60D818` | primary CTA, badges |
| Accent deep | `#45AD12` | readable green text on white |
| Page | `#FFFFFF` | page background |
| Surface | `#F4F6F9` | alternating sections / cards |
| Line | `#E6EBF1` | hairlines / borders |
| Ink | `#0B1526` | headings |
| Mist | `#54657C` | body / muted |
| Frost | `#FFFFFF` | text over dark overlays |

Typography: Space Grotesk (display/headings) + Inter (body).

Tagline: **“We power what matters.”**

## Brand and media sources

The `branding/` folder holds source assets — logo SVGs/PNGs, the favicon set,
and the raw WhatsApp photos/videos. Processed copies live under `public/`.
Source photos and videos under `branding/` are intentionally git-ignored
(local-only).

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

Contact / WhatsApp: **081-2829-3556**.
