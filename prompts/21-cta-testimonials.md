# 21 — Testimonials + CTA Section

## Objective
Replace the 6 hard-coded patient testimonials in `CTASection.jsx` with 6 realistic Anvil customer testimonials and update the trust badges. Keep the carousel, layout, and animations unchanged.

## Files to modify
- `src/components/sections/CTASection/CTASection.jsx`
- `src/components/sections/CTASection/CTASection.module.css` (hex cleanup)

## Testimonial content

Replace the testimonials array with:

```js
const testimonials = [
  {
    name: "Rohit Verma",
    location: "Gurugram, Haryana",
    rating: 5,
    initials: "RV",
    feedback:
      "Our electricity bill dropped from ₹6,200 to ₹580 after Anvil's 5 kW system went live. The Saathi handled every single paper — I didn't chase DISCOM once.",
    systemSize: "5 kW On-Grid",
  },
  {
    name: "Sneha Iyer",
    location: "Pune, Maharashtra",
    rating: 5,
    initials: "SI",
    feedback:
      "We chose hybrid because power cuts here are brutal. Now the lights never go off. The app shows us how much we're saving every day — it's addictive.",
    systemSize: "6 kW Hybrid + 8 kWh battery",
  },
  {
    name: "Anwar Khan",
    location: "Hyderabad, Telangana",
    rating: 5,
    initials: "AK",
    feedback:
      "I compared four installers. Only Anvil's Saathi could explain net metering clearly. End-to-end in 4 weeks, subsidy credited to my bank in the 5th. No drama.",
    systemSize: "4 kW On-Grid",
  },
  {
    name: "Meera Pillai",
    location: "Kochi, Kerala",
    rating: 5,
    initials: "MP",
    feedback:
      "We run a small printing unit. Anvil's 25 kW commercial install pays for itself in under 4 years, and the AMC is included. Zero regrets.",
    systemSize: "25 kW Commercial",
  },
  {
    name: "Harpreet Singh",
    location: "Ludhiana, Punjab",
    rating: 5,
    initials: "HS",
    feedback:
      "The EMI option was a game-changer — 84 months, zero down payment. My monthly EMI is less than half of what my old electricity bill used to be.",
    systemSize: "3 kW On-Grid",
  },
  {
    name: "Deepika Rao",
    location: "Bengaluru, Karnataka",
    rating: 5,
    initials: "DR",
    feedback:
      "Professional installers, neat cabling, clean commissioning. Even the neighbours have asked for Anvil's number. Highly recommend.",
    systemSize: "7 kW Hybrid",
  },
];
```

## Trust-badge strip

Replace the old trust badges with:
```jsx
const trustBadges = [
  { value: "10,000+", label: "Happy homes powered" },
  { value: "4.9/5", label: "Average customer rating" },
  { value: "300+", label: "Cities served PAN-India" },
  { value: "25 yrs", label: "Panel warranty" },
];
```

## Section heading
```jsx
<SectionTitle
  eyebrow="Real customers, real savings"
  title={<>Anvil families are <span className={styles.accent}>saving ₹5,000+ every month.</span></>}
  subtitle="See what homeowners and businesses across India are saying about their Anvil Saathi."
/>
```

## Section CTA (bottom)
```jsx
<div className={styles.ctaBlock}>
  <h3>Join 10,000+ homes already saving with Anvil</h3>
  <Button onClick={handleOpenLeadForm} variant="contained" color="primary" size="large">
    Book Your Free Call
  </Button>
  <p className={styles.ctaHelp}>Zero-obligation. Your Saathi calls within 30 minutes.</p>
</div>
```

## CSS
Replace literal old hex with CSS vars. Keep swiper + card sizing intact.

## Guardrails
- Do NOT change swiper / carousel config
- Each testimonial must keep `name`, `location`, `rating`, `feedback` keys used by the card template
- If the component currently renders `initials` computed from name, you can delete the explicit `initials` field

## Validation checklist
- [ ] 6 testimonials rendered with solar context
- [ ] All Indian cities used (Gurugram, Pune, Hyderabad, Kochi, Ludhiana, Bengaluru)
- [ ] Trust badges reflect Anvil metrics
- [ ] No medical/surgical references remain
- [ ] Section CTA opens the lead form

## Next step
Proceed to `22-secondary-cta.md` for the SecondaryCTASection.
