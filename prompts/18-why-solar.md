# 18 — "Why Solar Installations Fail" Section (Objection Handler)

## Objective
Repurpose the existing `WhyTransplantsFailCTA` component into a **"Why Solar Installations Fail — and how Anvil prevents it"** section. This is a proven conversion lever: it handles the top objections (shady installers, broken panels, subsidy mess) before asking for the lead.

## Files to modify
- `src/components/sections/WhyTransplantsFailCTA/WhyTransplantsFailCTA.jsx`
- `src/components/sections/WhyTransplantsFailCTA/WhyTransplantsFailCTA.module.css` (hex cleanup)

> **Do not rename the file/component** — keep the directory and export names stable to avoid touching `App.jsx` routing and section ordering.

## Implementation steps

### 1. Headline & subtitle
```jsx
<SectionTitle
  eyebrow="Before you go solar"
  title={<>Why most <span className={styles.accent}>bad</span> solar installs fail — and how Anvil prevents it.</>}
  subtitle="We've audited hundreds of failed rooftops. Here's what actually goes wrong — and the checklist we follow on every Anvil installation."
/>
```

### 2. Pain-point cards
Replace the existing card/list content with:

```jsx
const failureModes = [
  {
    icon: "mdi:alert-decagram",
    title: "Wrong panel specs for the roof",
    problem: "Undersized panels for the household's real load — bills barely move.",
    fix: "Anvil sizes the array from 12 months of your actual consumption, not a quick eyeball.",
  },
  {
    icon: "mdi:cable-data",
    title: "Cheap DC cabling & earthing",
    problem: "Fire risk, voltage drops, and broken inverters within 2–3 years.",
    fix: "Copper DC cable, proper earthing pits, and IP-65 rated combiner boxes on every install.",
  },
  {
    icon: "mdi:file-remove",
    title: "Subsidy paperwork stuck in DISCOM",
    problem: "Customers wait months for PM Surya Ghar disbursal — or never get it.",
    fix: "Anvil's paperwork team tracks every application until the subsidy hits your bank.",
  },
  {
    icon: "mdi:wrench-off",
    title: "Installer vanishes post-install",
    problem: "No AMC, no phone support, and warranty claims nobody honours.",
    fix: "Every Anvil customer keeps their Saathi for life, with a 5-year workmanship warranty.",
  },
  {
    icon: "mdi:solar-panel-large",
    title: "No monitoring = hidden underperformance",
    problem: "You only notice low output when your bill arrives months later.",
    fix: "Live app monitoring + monthly performance reports from Anvil.",
  },
  {
    icon: "mdi:shield-off",
    title: "Fake warranties",
    problem: "Generic 'lifetime' claims with no OEM backing.",
    fix: "Real OEM warranties on panels + inverter, countersigned by Anvil.",
  },
];
```

### 3. CTA block
```jsx
<div className={styles.ctaCard}>
  <h3>Every Anvil install avoids all six. Guaranteed.</h3>
  <Button onClick={handleOpenLeadForm} variant="contained" color="primary" size="large">
    Book Your Free Call
  </Button>
</div>
```

### 4. CSS
Replace literal old-palette hex with CSS vars.

## Guardrails
- Do not rename file, directory, or component
- Do not change animation or inview logic
- Keep classNames stable for CSS modules to keep working

## Validation checklist
- [ ] 6 failure-mode cards render
- [ ] Each card shows a problem + Anvil's fix
- [ ] No mention of hair/transplant/surgery anywhere
- [ ] CTA opens the lead form

## Next step
Proceed to `19-lead-form.md` to rebrand the LeadForm (without touching submission logic).
