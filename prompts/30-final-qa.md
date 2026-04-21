# 30 — Final QA, Build Verification, and Production Readiness

## Objective
End-to-end verify that the Anvil rebrand is production-ready: install dependencies, run the dev server, smoke-test each section, build for production, and run the lead submission against the Pabbly pipeline in dummy mode.

## Steps

### 1. Install & dev server
```bash
npm install
npm start
```
Open http://localhost:3000 in Chrome and Firefox. No console errors, no blocked mixed content.

### 2. Visual QA checklist (manual, above-the-fold)
- [ ] Header: Anvil logo, nav items (Home, Solar Calculator, Solar Solutions, Why Anvil, Savings, FAQ, Contact), "Book Your Free Call" CTA
- [ ] Hero: headline mentions "Cut your electricity bill by up to 90%", 4 trust indicators, two CTAs, hero image loads
- [ ] About ("Why Anvil"): Anvil Saathi messaging, solar installer image, 4 stat chips, differentiator grid
- [ ] Services: 4 cards (On-Grid, Hybrid, Commercial, Subsidy), each with icon + features
- [ ] Highlights: 5-step journey visible
- [ ] Why Installations Fail: 6 failure-mode cards
- [ ] Stats: animated counters count up, correct suffixes (₹, %, yrs, +)
- [ ] Features: 3 category groups, 3 items each
- [ ] Testimonials: 6 carousel slides, all Indian cities
- [ ] Secondary CTA: "Claim Free Consultation", phone link visible
- [ ] Location: PAN-India messaging, state chips
- [ ] Contact: 4 contact method cards, embedded form
- [ ] Footer: Anvil logo, 3 link columns, social icons, copyright current year

### 3. Responsive QA
- [ ] 320px, 375px, 414px, 768px, 1024px, 1440px — no overflow, no layout breaks
- [ ] Mobile drawer opens from the hamburger
- [ ] Mobile bottom nav visible on < 768px; "Book" is the primary pill
- [ ] Hero image swaps to the mobile variant under 768px

### 4. Lead submission smoke test (do NOT submit to real Pabbly)
- In `src/utils/webhookSubmit.js`, temporarily set `DUMMY_MODE = true` (or flip via env flag if available)
- Open the lead form, fill all fields, submit
- Verify:
  - [ ] Success swal fires with Anvil copy
  - [ ] `/api/leads.php` call attempted (will 404 in local dev — that's expected; dummy mode should catch)
  - [ ] Payload structure: `name`, `mobile`, `email`, `service_interest`, `message` fields present, with `message` enriched by the calculator summary when `UnifiedLeadForm` is used
  - [ ] Duplicate check fires when the same mobile is submitted twice
- Revert `DUMMY_MODE = false` before committing

### 5. Admin smoke test
- Navigate to `/admin/login`
- Log in with the credentials from `.env` (`anvil` / `anvil@2026solar`)
- Confirm: Dashboard loads, lead list renders, status dropdown shows solar-friendly display labels, Pabbly webhook test (if wired) does not throw

### 6. Accessibility
Run Lighthouse locally (DevTools → Lighthouse → Mobile):
- [ ] Accessibility score ≥ 90
- [ ] Best Practices ≥ 90
- [ ] SEO ≥ 95
- [ ] No missing `alt` attributes

### 7. Production build
```bash
npm run build
```
- [ ] Build succeeds with zero errors
- [ ] Warnings reviewed — address any "use of variable X is never used" that your changes introduced
- [ ] `build/` folder generated
- [ ] Open `build/index.html` — title, meta, OG, JSON-LD all Anvil

### 8. Final grep sweep
```bash
grep -rni "monjoven" . --exclude-dir=node_modules --exclude-dir=.git --exclude-dir=build --exclude-dir=prompts
grep -rEi "#1A5276|#148F77|#1ABC9C" src/ public/
grep -rn "dn9gyaiik" . --exclude-dir=node_modules --exclude-dir=.git
```
All three must return **zero** results.

> Exclude `prompts/` from Monjoven greps — these prompt files intentionally reference the old brand for context.

### 9. Ship-readiness checklist
- [ ] `.env` has real Anvil credentials
- [ ] GTM ID, GA4 ID, Meta Pixel ID, Google Ads ID populated (if available)
- [ ] Pabbly webhook verified
- [ ] `sitemap.xml` uses `solar.anvil.energy`
- [ ] Favicon is Anvil-branded
- [ ] Logo URLs return 200 (not 404) in production build preview

### 10. Deploy
Push to `claude/anvil-landing-page-101Pb`, open a PR, and deploy through the standard pipeline.

## Post-deploy smoke test (on staging URL)
- [ ] Lead form submits successfully and lead appears in admin panel
- [ ] Pabbly webhook receives the payload
- [ ] GTM fires page view + lead event (if GTM ID set)
- [ ] Google Ads / Meta Pixel conversions fire on `/thank-you`
- [ ] Mobile site navigation works on a real phone

## You're done!
After all checkboxes are green, the repo is production-ready as the Anvil landing page.
