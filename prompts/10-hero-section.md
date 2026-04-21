# 10 — Hero Section (Above-the-Fold Conversion)

## Objective
Rewrite the hero with Anvil's highest-converting messaging: a benefit-led headline, specific subhead, primary CTA, secondary "how it works" reassurance, and trust indicators. Keep ALL layout, animation, image-loading, and lead-form wiring identical.

## Files to modify
- `src/components/sections/HeroSection/HeroSection.jsx`
- `src/components/sections/HeroSection/HeroSection.module.css` (hex literals only)

## Conversion strategy (keep in mind)
- **Headline:** specific benefit + time-frame
- **Sub-headline:** the "how" in one sentence
- **CTA:** primary button opens the lead form (calculator experience)
- **Trust row:** 4 quick proof points
- **Hero image:** rooftop solar panels (already swapped in prompt 05)

## Implementation steps

### 1. Headline, sub-headline, CTAs
Inside `HeroSection.jsx`, locate the headline block (usually `<h1>` + `<p>` + `<Button>`). Replace text with:

```jsx
<h1 className={styles.heroTitle}>
  Cut your electricity bill by up to <span className={styles.accent}>90%</span> with rooftop solar.
</h1>

<p className={styles.heroSubtitle}>
  Anvil handles everything — design, PM Surya Ghar subsidy, financing, installation, and lifetime support. Get your free personalised savings plan in under 60 seconds.
</p>

<div className={styles.heroCtas}>
  <Button
    variant="contained"
    color="primary"
    size="large"
    onClick={handleOpenLeadForm}
    className={styles.primaryCta}
  >
    Book Your Free Call
  </Button>
  <Button
    variant="outlined"
    size="large"
    href="#calculator"
    className={styles.secondaryCta}
  >
    Calculate My Savings
  </Button>
</div>
```

### 2. Trust indicators
Replace the 4 existing trust bullets (Monjoven's "25+ Yrs Plastic Surgery", etc.) with:

```jsx
const trustIndicators = [
  { icon: "mdi:solar-power", label: "PAN-India installation" },
  { icon: "mdi:bank", label: "PM Surya Ghar subsidy included" },
  { icon: "mdi:shield-check", label: "25-year panel warranty" },
  { icon: "mdi:currency-inr", label: "Zero down-payment EMI" },
];
```

Keep the rendering loop exactly as it was — just swap the array contents.

### 3. Micro-copy above the headline (eyebrow)
If the hero has an eyebrow / badge above the headline, change to:
```jsx
<span className={styles.eyebrow}>⚡ India's hassle-free rooftop solar partner</span>
```

### 4. Hero imagery
Already updated in prompt 05. Confirm the two URLs read correctly:
- Desktop: `https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&q=80&auto=format&fit=crop`
- Mobile: `https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80&auto=format&fit=crop`

Update `alt` text:
```jsx
alt="Modern home with rooftop solar panels installed by Anvil"
```

### 5. Hero background video (optional)
The project supports `REACT_APP_HERO_VIDEO_URL`. If empty (default in `.env`), the static image renders. **Do not hardcode a video URL.** Customers add their own later.

### 6. CSS
Replace any literal old-palette hex in `HeroSection.module.css` with CSS vars (`var(--primary-dark)`, `var(--accent-gold)`, `var(--accent-orange)`). Keep all sizes, transitions, and grid layouts untouched.

## Guardrails
- Do NOT change the Framer Motion `variants` objects
- Do NOT remove the `useInView` hook or IntersectionObserver
- Do NOT change the grid / flex layout
- Do NOT rename the handler `handleOpenLeadForm` — it ties into `ModalContext`

## Validation checklist
- [ ] Headline contains "Cut your electricity bill by up to 90%" and a highlighted span
- [ ] Primary CTA says "Book Your Free Call" and opens the lead form
- [ ] Secondary CTA scrolls to `#calculator`
- [ ] 4 trust indicators updated to solar-relevant items
- [ ] Hero images visible (Unsplash URLs load)
- [ ] `Monjoven` absent from the section JSX

## Next step
Proceed to `11-about-section.md` — the "Why Anvil" section.
