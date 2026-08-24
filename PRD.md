# Zenith Wills Technologies — Landing Page PRD

_Version 1.0  ·  24 Aug 2026  ·  Status: Draft for review_


## 1. Overview

Zenith Wills Technologies (ZWT) is a professional technology-installation company based in Nigeria. This document specifies the company's primary digital storefront: a single, conversion-focused landing page.

The page has one job — turn a visitor into a booked enquiry. Every section, colour and word is in service of that goal, channelling visitors toward the WhatsApp / phone contact path.


## 2. Goals

- Generate qualified enquiries (WhatsApp and phone) for the five core services.
- Establish credibility through clear, honest, professional positioning.
- Present each service and its value in plain, Nigeria-relevant language.
- Load fast on mobile data — most visitors will be on a phone.

## 3. Success Metrics

- WhatsApp / phone click-through volume (primary).
- Page load under 2s on 3G; Lighthouse performance score ≥ 90.
- Enquiry-to-quote conversion (tracked by the owner, not hard-coded into the site).

## 4. Target Audience

- Homeowners and landlords in urban Nigeria.
- Small businesses and offices.
- Estate, compound and street/union administrators.
- Anyone needing solar power, CCTV, vehicle tracking, intercom or networking.
Motivations: security and insecurity concerns, unreliable power supply (solar), asset protection (car tracking), and the need for professional, trustworthy installation.


## 5. Brand Identity


### 5.1 Name & Tagline

- Name: Zenith Wills Technologies.
- Tagline: “We are professional in…”, led into by the five services.
- Voice: calm, competent and professional — no hype, no inflated claims.

### 5.2 Colour Palette

- Primary navy #0F1523 — deep, technical, trustworthy.
- Deep navy #001020 — darkest ground / footer.
- Elevated navy #1E2A3A — cards and surfaces.
- Accent green #70D050 — energy, “go”, primary CTA highlight.
- Secondary teal #2080A0 — technology, trust, sub-labels.
- Text white #F4F7FB · Muted slate #A0C0D0.

### 5.3 Typography

- Headings / wordmark: geometric sans (Avenir Next, Montserrat fallback), 700–800.
- Body: system sans (Inter / system-ui).
- “TECHNOLOGIES” sub-label: uppercase, letter-spaced.

### 5.4 Logo Variants (delivered in branding/logo)

- Mark — icon: navy rounded tile + white “Z” + green zenith dot.
- Horizontal lockup — mark + ZENITH WILLS / TECHNOLOGIES.
- Stacked lockup — mark over centred text.
- Light — reversed, for dark backgrounds.
- Monochrome — single-colour, for print / footer.

## 6. Site Structure (single page)

Sections render top-to-bottom on one scrollable page:

- Header / Nav
- Hero
- Services
- Why Choose Us
- About
- How It Works
- Contact / Book Us (CTA)
- Footer

## 7. Section-by-Section Spec


### 7.1 Header / Nav

- Logo (horizontal lockup, compact).
- Nav links: Services · About · Contact.
- “Book Us” button (green), top-right, scrolls to the contact section.

### 7.2 Hero

- Headline: “We are professional in solar power, CCTV, car tracking, intercom & networking.”
- Subcopy: one reassurance line — trusted, local, professional installation.
- Primary CTA: “Book Us” (green).
- Secondary: “Contact us / WhatsApp — 081-2829-3556”.
- Background: deep navy #0F1523; use the light logo variant.

### 7.3 Services — five cards

- Solar Power Inverter — reliable backup power for homes and offices.
- CCTV Camera Installation — keep watch over your property.
- Car Tracker / Car GPS — protect and locate your vehicle.
- Intercom — secure, easy entry communication.
- System Networking — stable home and office networks.
Each card: icon, short description, and a “Book” link. Copy stays honest — no invented statistics.


### 7.4 Why Choose Us

- Professional, experienced installation.
- Reliability that fits Nigeria's power and security realities.
- Responsive, after-install support.
- Clear, upfront communication.

### 7.5 About

A short, honest company positioning paragraph. No fabricated history, client counts or market claims.


### 7.6 How It Works

- 1. Contact us (WhatsApp / phone).
- 2. Site assessment and clear quote.
- 3. Professional installation.
- 4. After-install support.

### 7.7 Contact / Book Us

- WhatsApp deep-link button (primary action).
- Phone: 081-2829-3556.
- Optional lightweight enquiry form; WhatsApp link is the v1 default.

### 7.8 Footer

- Logo, services list, contact details, copyright line.

## 8. Contact Information

- WhatsApp / Phone: 081-2829-3556.

## 9. Technical Stack

- Next.js (App Router) + React + TypeScript.
- Tailwind CSS for the design system.
- Static/SSG-first; SEO metadata + Open Graph image.
- Brand assets from branding/logo and branding/favicon.

## 10. Assets (delivered)

- Logo variants — SVG + PNG (mark, horizontal, stacked, light, monochrome).
- Favicon — SVG, PNG (16–512px), multi-size favicon.ico, site.webmanifest.

## 11. Non-Goals (v1)

- No e-commerce or online payment.
- No user accounts or login.
- No fabricated testimonials or usage statistics.
- Multi-page expansion (blog, careers) is out of scope for v1.

## 12. Milestones

- M1 — Brand assets + PRD (complete).
- M2 — Next.js scaffold + design system + responsive shell.
- M3 — Build all sections with real copy.
- M4 — SEO, Open Graph, analytics, deploy.
- M5 — Review against this PRD and polish.
