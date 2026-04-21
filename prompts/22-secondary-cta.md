# 22 — Secondary CTA Section

## Objective
Rebrand the `SecondaryCTASection` into a "Limited-period offer / next-step" banner that nudges the fence-sitter. Keep layout intact.

## Files to modify
- `src/components/sections/SecondaryCTASection/SecondaryCTASection.jsx`
- `src/components/sections/SecondaryCTASection/SecondaryCTASection.module.css` (hex cleanup)

## Implementation steps

### 1. Main copy
```jsx
<div className={styles.ctaInner}>
  <span className={styles.eyebrow}>⚡ Limited-period offer</span>
  <h2 className={styles.ctaTitle}>
    Go solar this month. <span className={styles.accent}>We cover your PM Surya Ghar paperwork — free.</span>
  </h2>
  <p className={styles.ctaSubtitle}>
    Book your free consultation before month-end and we'll handle the subsidy filing, DISCOM coordination, and loan processing at zero cost. Saving starts from day one.
  </p>

  <div className={styles.ctaButtons}>
    <Button onClick={handleOpenLeadForm} variant="contained" color="primary" size="large">
      Claim Free Consultation
    </Button>
    <a href="tel:+918002020001" className={styles.callLink}>
      or call 1800 2020 001
    </a>
  </div>

  <ul className={styles.ctaBullets}>
    <li>✓ Free site survey</li>
    <li>✓ Personalised savings plan</li>
    <li>✓ Zero obligation</li>
  </ul>
</div>
```

### 2. Background
If the component uses a background image, swap to:
```js
backgroundImage: "url('https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1600&q=80&auto=format&fit=crop')"
```
Retain any overlay filter.

### 3. CSS
Replace literal old hex with CSS vars.

## Guardrails
- Do NOT change the parent wrapper / container padding
- Do NOT change animation timings

## Validation checklist
- [ ] Section copy is solar-specific
- [ ] Primary CTA opens the lead form
- [ ] Phone link uses Anvil's toll-free
- [ ] Background image (if any) is solar-themed

## Next step
Proceed to `23-location.md` to update location data and LocationSection.
