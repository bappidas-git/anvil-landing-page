# 13 — Services Section Display Layer

## Objective
Update the Services section's heading, subtitle, and any non-data copy so the section reads naturally as "Solar Solutions" powered by the data from prompt 12. Also update any hardcoded service-count or fallback strings.

## Files to modify
- `src/components/sections/ServicesSection/ServicesSection.jsx`
- `src/components/sections/ServicesSection/ServicesSection.module.css` (hex cleanup)

## Implementation steps

### 1. Section header
```jsx
<SectionTitle
  eyebrow="Solar Solutions"
  title={<>One partner for every rooftop. <span className={styles.accent}>Homes, offices, and factories.</span></>}
  subtitle="Pick the Anvil solar system that fits your roof, your load, and your budget. Our Saathi will walk you through each option on your free call."
/>
```

If the existing `SectionTitle` props are `title`, `description`, or similar, match that exact API — only change strings.

### 2. Hardcoded CTA footer
If the section ends with a CTA card / button ("Book a consultation", "Free quote"), update to:
```jsx
<Button onClick={handleOpenLeadForm} variant="contained" color="primary">
  Book Your Free Call
</Button>
<p className={styles.ctaHelp}>Your Anvil Saathi will call you within 30 minutes.</p>
```

### 3. Swiper / carousel settings
Do NOT change Swiper config — only the JSX for slide footer text like "View Details" → `"See Solution"`.

### 4. Card hover / detail text
If each card uses microcopy like "Book consultation →" or "Learn more about this procedure →", change to:
- `"See this solution →"` (card link)
- `"Talk to Anvil Saathi →"` (hover CTA)

### 5. CSS
Replace any literal old-palette hex with CSS vars.

## Guardrails
- Do NOT change the grid / swiper configuration
- Do NOT change how `servicesData` is imported and mapped

## Validation checklist
- [ ] Heading reads "Solar Solutions"
- [ ] Subtitle mentions "Anvil Saathi"
- [ ] No medical language remains in any JSX string
- [ ] The section renders all 4 services once prompt 12 is applied
- [ ] CTA opens the lead form modal

## Next step
Proceed to `14-service-details.md` to populate the deep-dive per-service data.
