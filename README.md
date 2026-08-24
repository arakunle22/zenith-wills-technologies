# Zenith Wills Technologies

Professional technology-installation company (Nigeria). This folder holds the
brand identity and product specification for the company's landing page.

## Contents

- `PRD.md` / `PRD.docx` — Product Requirements Document for the landing page.
- `branding/logo/` — logo variants (SVG source + PNG preview):
  - `zenith-wills-mark.svg` — primary icon mark (navy tile + white "Z" + green zenith dot)
  - `zenith-wills-logo-horizontal.svg` — mark + wordmark lockup
  - `zenith-wills-logo-stacked.svg` — mark over centred text
  - `zenith-wills-logo-light.svg` — reversed (for dark backgrounds)
  - `zenith-wills-logo-monochrome.svg` — single colour (print / footer)
- `branding/favicon/` — favicon set:
  - `favicon.svg`, `favicon.ico` (multi-size), PNG sizes 16–512px
  - `site.webmanifest`

## Brand

| Token | Value | Use |
|-------|-------|-----|
| Primary navy | `#0F1523` | backgrounds, wordmark |
| Deep navy | `#001020` | footer / darkest ground |
| Elevated navy | `#1E2A3A` | cards / surfaces |
| Accent green | `#70D050` | CTA, zenith dot |
| Secondary teal | `#2080A0` | sub-labels, "TECHNOLOGIES" |
| Text white | `#F4F7FB` | body on navy |
| Muted slate | `#A0C0D0` | secondary text |

Tagline: **"We are professional in…"** (solar inverter, CCTV, car tracker/GPS,
intercom, system networking). Contact / WhatsApp: **081-2829-3556**.

## Next steps

1. Scaffold the Next.js app (App Router + TypeScript + Tailwind) in this folder.
2. Drop `branding/` assets into `public/` (or import the SVGs as React components).
3. Build the single-page sections per `PRD.md` §7.
