# 28 — Documentation (README, Guides, CLAUDE.md, CHANGELOG)

## Objective
Update all repo-level markdown documentation so it describes Anvil instead of Monjoven, while keeping technical instructions (env vars, webhooks, build commands) verbatim.

## Files to modify
- `README.md`
- `CUSTOMIZATION_GUIDE.md`
- `PABBLY_GUIDE.md`
- `GTM_GUIDE.md`
- `SEO_GUIDE.md`
- `CHANGELOG.md`
- `CLAUDE.md`

## Implementation steps

### 1. README.md
- Title: `# Anvil — Rooftop Solar Landing Page`
- Tagline: `High-converting, mobile-first landing page for Anvil Solar with integrated lead capture, admin panel, and paid-ads analytics.`
- Replace any mention of hair transplant / Monjoven / clinic.
- Project description: "Production-ready React 18 + Material UI + Framer Motion landing page optimised for Google Ads + Meta Ads traffic. Built for Anvil — India's hassle-free rooftop solar partner."
- Keep install / build / deploy sections unchanged.

### 2. CUSTOMIZATION_GUIDE.md
- The guide teaches operators how to rebrand. Leave the **structure** intact.
- Replace examples that use Monjoven (e.g., "Change `REACT_APP_NAME='Monjoven'` to…") with Anvil-specific examples.
- Leave file paths, variable names, and code snippets untouched except for content values.

### 3. PABBLY_GUIDE.md + GTM_GUIDE.md + SEO_GUIDE.md
- Replace any "Example: Monjoven" sample values with "Example: Anvil".
- Keep screenshots / snippets / webhook URLs as illustrative examples only — don't add real production URLs.
- If any screenshot URLs point to Monjoven assets, leave them (they demonstrate flow) OR replace with neutral placeholder screenshots — your call, but either way remove "Monjoven" alt-text.

### 4. CHANGELOG.md
Append a new top entry:

```markdown
## [2.0.0] - 2026-04-21 — Anvil Rebrand

### Changed
- Full visual rebrand from Monjoven (hair transplant clinic) to Anvil (rooftop solar).
- Updated color palette to Anvil navy (#0A1F3D) + solar gold (#FFB800) + sunrise orange (#FF6B35).
- Replaced hero, about, services, features, stats, highlights, testimonials, and FAQ content with solar-industry messaging.
- Converted the why-transplants-fail section into "Why Solar Installations Fail" objection handler.
- Augmented UnifiedLeadForm with a solar-savings-calculator shell (no backend schema change).
- Updated all SEO schemas to `SolarEnergyContractor` / `Organization` with Anvil values.
- Migrated admin panel branding strings to Anvil.

### Unchanged (preserved)
- Lead submission pipeline (`webhookSubmit.js`, Pabbly webhook, `/api/leads.php`).
- Admin auth, routing, CRUD, and lead service.
- GTM, Meta CAPI, Google Ads, consent mode, enhanced conversions.
- Validators, SweetAlert helpers, modal/drawer mechanics.
- Framer Motion animations, responsive layouts.
```

### 5. CLAUDE.md
Update the top of the file:

```markdown
# Anvil — Rooftop Solar Landing Page

## Overview

A high-converting, mobile-first landing page for Anvil (India's rooftop solar partner). Built on React 18, Material UI, and Framer Motion. Designed for lead generation from Google Ads / Meta Ads traffic. Includes an admin panel with lead management, GTM integration, Meta CAPI, and Google Ads conversion tracking.
```

Keep the rest of the file (project structure, brand-color-system defaults, customization guide pointers, DO NOT MODIFY list) intact — update the **defaults** block to reflect the new Anvil palette:

```markdown
## Brand Color System (Defaults)

- Primary: #0A1F3D (Anvil Deep Navy)
- Secondary: #FFB800 (Solar Gold)
- CTA Warm: #FF6B35 (Sunrise Orange — CTAs only)
- Accent Green: #10B981 (Eco Green for savings)
- Soft Gold BG: #FFF8E1
- White: #FFFFFF
- Text: #0A1F3D
```

## Guardrails
- Keep every technical instruction and file path intact
- Keep every env-var name referenced in docs exactly as it is in code
- Do NOT delete `PABBLY_GUIDE.md` / `GTM_GUIDE.md` / `SEO_GUIDE.md` — operators rely on them

## Validation checklist
- [ ] README title reads "Anvil"
- [ ] No `Monjoven` / `hair transplant` string remains in any `.md` at the repo root
- [ ] CHANGELOG has a new 2.0.0 entry summarising the rebrand
- [ ] CLAUDE.md defaults block reflects Anvil palette
- [ ] Technical instructions in guides are unchanged

## Next step
Proceed to `29-final-sweep.md` for the final "kill every Monjoven trace" pass.
