# 11 — About Section ("Why Anvil")

## Objective
Rewrite the About section — currently about "Dr. Porag Neog" — to become "Why Anvil", introducing the Anvil Saathi program, end-to-end offering, and the 4–6 stat highlights that earn trust.

## Files to modify
- `src/components/sections/AboutSection/AboutSection.jsx`
- `src/components/sections/AboutSection/AboutSection.module.css` (hex cleanup)

## Implementation steps

### 1. Section heading
```jsx
<SectionTitle
  eyebrow="Why Anvil"
  title={<>Your <span className={styles.accent}>Anvil Saathi</span> — from first call to first kilowatt.</>}
  subtitle="Anvil handles every step of your rooftop solar journey so you never have to juggle vendors, paperwork, or subsidy approvals."
/>
```

### 2. Profile block (was Dr. Porag Neog)
Replace the "doctor profile" block with a "program highlight" block. Use the installer image from prompt 05:

```jsx
<div className={styles.profile}>
  <img
    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80&auto=format&fit=crop"
    alt="Anvil certified solar installer working on a residential rooftop"
    className={styles.profileImage}
  />
  <div className={styles.profileText}>
    <p className={styles.profileName}>Anvil Saathi</p>
    <p className={styles.profileTitle}>Your dedicated solar companion</p>
    <p className={styles.profileBio}>
      Every Anvil customer is assigned a personal Saathi who handles the site survey,
      system design, DISCOM paperwork, subsidy filing, installation oversight, and
      lifetime support. One number. One person. Zero runaround.
    </p>
  </div>
</div>
```

### 3. Stats strip (if the section renders inline stats)
Change the 4 mini-stats next to the profile:
```js
const aboutStats = [
  { value: "10,000+", label: "Rooftops powered" },
  { value: "70–90%", label: "Average bill cut" },
  { value: "₹78,000", label: "Subsidy assistance" },
  { value: "25 yrs", label: "Panel warranty" },
];
```

### 4. Differentiator bullets
If the section has a "differentiators" list, replace with:
```js
const differentiators = [
  { icon: "mdi:handshake", title: "One Saathi, start to finish" },
  { icon: "mdi:file-document-check", title: "PM Surya Ghar paperwork handled" },
  { icon: "mdi:cash-multiple", title: "Zero-down-payment EMI options" },
  { icon: "mdi:solar-panel-large", title: "Tier-1 panels + Tier-1 inverters" },
  { icon: "mdi:shield-check", title: "25-year panel + 10-year inverter warranty" },
  { icon: "mdi:wrench", title: "Free AMC for the first year" },
];
```

### 5. Optional body paragraph
```jsx
<p className={styles.aboutBody}>
  Rooftop solar in India is a maze of DISCOMs, vendors, subsidies, and financing options. Anvil cuts through all of it. Your Saathi designs the right system for your home or business, books the panels, gets the sanctions, and hands you a running solar plant — usually in 3 to 6 weeks.
</p>
```

### 6. CSS
Replace old-palette hex literals with CSS vars. No layout changes.

## Guardrails
- Do NOT change the grid layout or how the image / text are arranged at each breakpoint.
- Do NOT remove Framer Motion animations.
- Keep all existing classNames intact.

## Validation checklist
- [ ] No reference to Dr. Porag Neog, MBBS, or Monjoven remains
- [ ] Profile image uses the solar-installer Unsplash URL
- [ ] Stats strip shows solar-relevant numbers
- [ ] Differentiator bullets are present and solar-focused
- [ ] Section headline includes "Anvil Saathi"

## Next step
Proceed to `12-services-data.md` to rewrite the services catalog.
