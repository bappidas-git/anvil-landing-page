# 17 — Highlights Section ("How it works")

## Objective
Repurpose `HighlightsSection` to visualise Anvil's **4-step customer journey**: Free Call → Custom Design → Installation → Lifetime Support. This earns trust and lowers the perceived effort of switching to solar.

## Files to modify
- `src/components/sections/HighlightsSection/HighlightsSection.jsx`
- `src/components/sections/HighlightsSection/HighlightsSection.module.css` (hex cleanup)

## Implementation steps

### 1. Header
```jsx
<SectionTitle
  eyebrow="How it works"
  title={<>From first call to first kilowatt in <span className={styles.accent}>as little as 3 weeks.</span></>}
  subtitle="Your Anvil Saathi owns every step. You only focus on the savings."
/>
```

### 2. Steps array (inside the component or a local const)
```jsx
const steps = [
  {
    step: "01",
    icon: "mdi:phone-in-talk",
    title: "Free Call",
    description:
      "Share your state, monthly bill, and roof type. Your Anvil Saathi calls within 30 minutes with a preliminary savings plan.",
  },
  {
    step: "02",
    icon: "mdi:home-search",
    title: "Site Survey & Custom Design",
    description:
      "Our engineer visits your roof, captures measurements, and designs a system tailored to your load and shading profile.",
  },
  {
    step: "03",
    icon: "mdi:file-document-check",
    title: "Paperwork & Subsidy",
    description:
      "We handle the PM Surya Ghar application, DISCOM approval, net metering, and loan processing — end to end.",
  },
  {
    step: "04",
    icon: "mdi:solar-power",
    title: "Install & Commission",
    description:
      "Installation completes in 2–4 days. Your system goes live once the DISCOM approves — typically within 3–6 weeks total.",
  },
  {
    step: "05",
    icon: "mdi:chart-line",
    title: "Monitor & Support",
    description:
      "Track live output, savings, and CO₂ offset in the Anvil app. Anvil Saathi stays on call for the life of your system.",
  },
];
```

### 3. Card / grid rendering
Keep the existing `.map(...)` and card markup. Only the array content changes.

### 4. Footer CTA
```jsx
<Button onClick={handleOpenLeadForm} variant="contained" color="primary" size="large">
  Start With a Free Call
</Button>
<p className={styles.note}>Zero obligation. Zero hard sell.</p>
```

### 5. CSS
Replace literal old hex with CSS vars.

## Guardrails
- Do NOT change layout, card shape, or animation timings
- Do NOT rename the component or its export

## Validation checklist
- [ ] 5 steps render in order 01 → 05
- [ ] Each step has a title and description
- [ ] Subtitle mentions Anvil Saathi
- [ ] CTA at the bottom opens the lead form

## Next step
Proceed to `18-why-solar.md` to repurpose the old "Why Transplants Fail" section.
