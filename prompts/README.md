# Anvil Rebrand — Sequential Prompt Series

This folder contains **30 atomic, sequential prompt files** that transform the Monjoven hair-transplant landing page boilerplate into the production-ready Anvil (https://solar.anvil.energy/) rooftop-solar landing page — without breaking any existing functional system (lead management, admin panel, backend integrations, analytics, layouts, responsiveness, or component structure).

## How to use

Execute each prompt file **in order** (01 → 30). Every file is self-contained and leaves the repo in a working state after it completes. Most prompts touch 1–4 files. None of them require manual fixes between steps.

| # | File | Scope |
|---|---|---|
| 01 | `01-analysis.md` | Understand the current system & target brand |
| 02 | `02-brand-colors.md` | Replace color tokens (CSS vars + MUI theme) |
| 03 | `03-typography.md` | Switch heading font to Plus Jakarta Sans |
| 04 | `04-env-config.md` | `.env` + `.env.example` |
| 05 | `05-logo-assets.md` | Logo, hero, about, OG image URLs |
| 06 | `06-public-index-html.md` | `public/index.html` meta, schemas, loader |
| 07 | `07-seo-config.md` | `src/config/seo.js` schemas + FAQs |
| 08 | `08-header.md` | Desktop header |
| 09 | `09-mobile-navigation.md` | Mobile drawer + bottom nav |
| 10 | `10-hero-section.md` | Hero above-the-fold |
| 11 | `11-about-section.md` | "Why Anvil" + Saathi |
| 12 | `12-services-data.md` | `src/data/servicesData.js` |
| 13 | `13-services-section.md` | ServicesSection display layer |
| 14 | `14-service-details.md` | `serviceDetailsData.js` deep-dive cards |
| 15 | `15-features.md` | `featuresData.js` + FeaturesSection |
| 16 | `16-stats.md` | `statsData.js` + StatsSection |
| 17 | `17-highlights.md` | HighlightsSection (how-it-works) |
| 18 | `18-why-solar.md` | Why-installations-fail objection handler |
| 19 | `19-lead-form.md` | LeadForm labels + copy |
| 20 | `20-unified-lead-form.md` | UnifiedLeadForm → calculator shell |
| 21 | `21-cta-testimonials.md` | CTASection testimonials |
| 22 | `22-secondary-cta.md` | SecondaryCTASection |
| 23 | `23-location.md` | `locationData.js` + LocationSection |
| 24 | `24-contact-section.md` | ContactSection |
| 25 | `25-footer.md` | Footer |
| 26 | `26-thank-you-page.md` | `/thank-you` page |
| 27 | `27-admin-panel.md` | Admin branding (no logic changes) |
| 28 | `28-documentation.md` | README, CHANGELOG, guides |
| 29 | `29-final-sweep.md` | Kill every Monjoven trace |
| 30 | `30-final-qa.md` | Build, smoke test, ship |

## Non-negotiable constraints (enforced by every prompt)

- **DO NOT** modify: `webhookSubmit.js`, `validators.js`, `swalHelper.js`, Framer Motion variants, MobileDrawer/MobileNavigation mechanics, Modal/LeadFormDrawer behavior, admin auth/routing/CRUD logic, any localStorage key, any API path.
- **DO NOT** rename any exported constant or field name used by the backend (`name`, `mobile`, `email`, `service_interest`, `message`).
- **DO NOT** change layout structure, grid/flex topology, or breakpoints.
- **ONLY** update content, styling (colors/images), and landing-page optimization copy.

## Anvil brand reference

- **Company:** Anvil Energy — India's hassle-free rooftop solar partner
- **Site:** https://solar.anvil.energy/
- **Toll-free:** 1800 2020 001
- **Signature program:** Anvil Saathi
- **Primary CTA:** Book Your Free Call
- **Calculator:** Your Solar Savings Calculator
- **Palette:** `#0A1F3D` (navy) / `#FFB800` (solar gold) / `#FF6B35` (sunrise orange CTA) / `#10B981` (eco green)
- **Tone:** Practical, confident, no-nonsense — "one Saathi, start to finish"

## After running all 30 prompts

The repo will be a production-ready Anvil landing page with:
- Full Anvil branding (logo, colors, typography, copy)
- Rooftop-solar messaging from hero → footer
- Calculator-style lead form collecting the same backend schema
- Admin panel rebranded (logic untouched)
- Updated SEO, JSON-LD, sitemap, robots, manifest
- All documentation aligned with Anvil
- Zero Monjoven traces
