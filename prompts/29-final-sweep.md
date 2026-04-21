# 29 — Final Sweep (Kill Every Monjoven Trace)

## Objective
After prompts 01–28, run a rigorous project-wide search for any surviving Monjoven or hair-transplant references, ensure asset URLs, analytics placeholders, and pages are all Anvil-aligned, and fix anything that slipped through.

## Files to scan
The entire repo. No exceptions.

## Implementation steps

### 1. Case-insensitive string search
Run each of these and resolve any hits:
```bash
grep -rni "monjoven" .
grep -rni "porag" .
grep -rni "hair transplant" .
grep -rni "cosmetic surgery" .
grep -rni "FUE" src/
grep -rni "FUT" src/
grep -rni "PRP" src/
grep -rni "guwahati" .
grep -rni "borbari" .
grep -rni "pratiksha" .
grep -rni "dn9gyaiik" .             # old Cloudinary account
grep -rni "north east" src/
grep -rni "ne states" src/
grep -rni "Assam" src/               # only remove clinic-specific context; keep state name in state dropdown
```

Resolve every hit. If a match is inside a large unrelated block, edit only the offending line.

### 2. Color sweep (ensure palette swap is complete)
```bash
grep -rE "#1A5276|#148F77|#1ABC9C|#2980B9|#0E6655|#17A589" src/ public/
```
Any remaining hit must be replaced with the Anvil equivalent (prompt 02).

### 3. Image / CDN sweep
```bash
grep -rn "monjoven.com\|dn9gyaiik" .
```
Resolve all hits to the new Anvil URLs from prompt 05.

### 4. Brand-voice sweep
Read (briefly) every section component and search for lingering words that belong to the old clinic brand:
- `procedure`, `patient`, `treatment`, `consultation at clinic`, `Dr.`, `surgeon`
Swap to solar vocabulary (`installation`, `customer`, `project`, `Saathi`, `engineer`) wherever they appear in UI strings.

### 5. Alt text sweep
```bash
grep -rn 'alt=' src/ public/ | grep -i "monjoven\|hair\|doctor\|clinic"
```
Fix any alt text that still describes the old brand.

### 6. JSON-LD + meta sweep (public/index.html + seo.js)
Re-open `public/index.html` and `src/config/seo.js`. Verify:
- Organization `name` = `Anvil`
- LocalBusiness `@type` = `SolarEnergyContractor`
- FAQ questions are solar-themed
- OG / Twitter / canonical URLs use `solar.anvil.energy`

### 7. Console log sweep
```bash
grep -rn "console\." src/ | grep -i monjoven
```
Replace any Monjoven console strings with Anvil equivalents or delete.

### 8. Manifest + robots + sitemap
- `public/manifest.json`: update `name`, `short_name`, `theme_color` (`#0A1F3D`), `background_color`.
- `public/robots.txt`: update any sitemap URL from `monjoven.com` → `solar.anvil.energy`.
- `public/sitemap.xml`: update `<loc>` values from monjoven.com → solar.anvil.energy.

### 9. Favicon
Replace the contents of `public/favicon.png` with an Anvil-branded favicon. If you can't generate a file, point `<link rel="icon">` in `public/index.html` to the Anvil logo URL:
```html
<link rel="icon" type="image/svg+xml" href="https://solar.anvil.energy/svgs/logo.svg" />
```

### 10. Tel: and wa.me sweep
```bash
grep -rn "tel:\|wa.me" src/ public/
```
Every phone link must match `+918002020001` (or pull from env). No `+919181956562` / `+919127062599` should remain.

## Validation checklist
- [ ] All grep queries above return zero Monjoven hits
- [ ] Old palette hex is gone from `src/` and `public/`
- [ ] All alt text references Anvil/solar imagery
- [ ] Manifest, robots.txt, sitemap.xml updated
- [ ] Favicon is Anvil or linked to Anvil logo

## Next step
Proceed to `30-final-qa.md` for build verification and production readiness.
