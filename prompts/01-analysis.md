# 01 — Project Analysis & Transformation Scope

## Objective
Establish a complete working understanding of the existing Monjoven landing page and the target Anvil brand (https://solar.anvil.energy/) so every subsequent prompt can execute safely without breaking existing systems.

## Why this matters
The repo contains a production-grade lead capture system, admin panel, webhook integrations, GTM/Meta/Google Ads tracking, and SEO infrastructure. We are rebranding **content, copy, colors, logos, images, and SEO only** — we are **NOT** modifying the component logic, form submission flow, admin panel wiring, or webhook pipeline.

## Files to read (read-only in this step — no edits)
- `CLAUDE.md`, `README.md`, `CUSTOMIZATION_GUIDE.md`, `CHANGELOG.md`
- `package.json`
- `.env`, `.env.example`
- `src/App.jsx`, `src/index.js`
- `src/config/seo.js`
- `src/theme/muiTheme.js`
- `src/styles/variables.css`
- `src/data/servicesData.js`, `statsData.js`, `featuresData.js`, `locationData.js`, `serviceDetailsData.js`
- `src/components/common/Header/Header.jsx`
- `src/components/common/Footer/Footer.jsx`
- `src/components/common/LeadForm/LeadForm.jsx`
- `src/components/common/UnifiedLeadForm/UnifiedLeadForm.jsx`
- `src/utils/webhookSubmit.js`
- `src/utils/validators.js`
- `public/index.html`

## Target brand reference (Anvil)
- **URL:** https://solar.anvil.energy/
- **What Anvil does:** End-to-end residential & commercial rooftop solar in India. They handle installation, paperwork (including PM Surya Ghar subsidy), financing, and maintenance.
- **Nav items:** `Solar calculator`, `Solar solution`, `Book Your Free Call`
- **Primary CTA:** "Book Your Free Call"
- **Toll-free number:** `1800 2020 001`
- **Signature program:** "Anvil Saathi" (your personal solar companion)
- **Calculator fields observed:**
  - Consumer Type: Residential / Business-Office
  - System Type: On-Grid / Hybrid (with battery backup)
  - Roof Type: Concrete / Tin shed
  - State of Residence (India)
  - Phase In Use: 1 Phase (home) / 3 Phase (commercial)
  - Avg. monthly bill (INR) & units consumed
- **Government schemes referenced:** PM Surya Ghar Muft Bijli Yojana (up to ₹78,000 subsidy, up to 300 free units/month)

## Implementation steps
1. Re-read every file listed above. Take notes (mentally or in scratch) on:
   - All hard-coded occurrences of `Monjoven`, `monjoven`, `MONJOVEN`
   - All hard-coded phone numbers, email addresses, URLs
   - All hard-coded medical/clinical copy that needs replacing
   - All Cloudinary image URLs currently referenced
2. Confirm these systems are **off-limits to logic changes**:
   - `src/utils/webhookSubmit.js` (only the lead enrichment metadata may change — never the POST logic)
   - `src/utils/validators.js`
   - `src/utils/swalHelper.js`
   - `src/admin/**` routing, auth, CRUD logic (branding strings and copy CAN change)
   - Framer Motion animations
   - MobileDrawer / MobileNavigation mechanics
   - Modal + LeadFormDrawer open/close logic
3. Do NOT run the build or install dependencies yet — subsequent prompts will trigger that.

## Validation checklist
- [ ] You can name every section component file without opening it
- [ ] You can describe the lead submission flow (form → validators → webhookSubmit → Pabbly + /api/leads.php)
- [ ] You know where the logo URL is hard-coded (Header, Footer, MobileDrawer, public/index.html, seo.js)
- [ ] You can list the current brand colors (#1A5276 primary, #148F77 teal, #FF6B35 orange)
- [ ] No files have been edited in this step

## Next step
Proceed to `02-brand-colors.md` to replace the color system with Anvil's palette.
