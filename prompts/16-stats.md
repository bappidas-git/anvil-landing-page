# 16 — Stats Data + Stats Section

## Objective
Rewrite the animated stats block (was "25+ Years", "5000+ Procedures", "98% Satisfaction"…) to Anvil-relevant social proof metrics.

## Files to modify
- `src/data/statsData.js`
- `src/components/sections/StatsSection/StatsSection.jsx`
- `src/components/sections/StatsSection/StatsSection.module.css` (hex cleanup)

## Target stats
Anvil values that sound credible for a growing Indian solar brand:

```js
export const statsData = [
  {
    value: 10000,
    suffix: "+",
    label: "Rooftops powered",
    description: "Homes and businesses switched to solar with Anvil",
    icon: "mdi:home-lightning-bolt",
  },
  {
    value: 90,
    suffix: "%",
    label: "Average bill cut",
    description: "Typical monthly savings after going solar",
    icon: "mdi:percent",
  },
  {
    value: 78000,
    prefix: "₹",
    label: "Subsidy assistance",
    description: "Filed under PM Surya Ghar Yojana per eligible home",
    icon: "mdi:bank",
  },
  {
    value: 25,
    suffix: " yrs",
    label: "Panel warranty",
    description: "Linear power output warranty included",
    icon: "mdi:shield-sun",
  },
  {
    value: 300,
    suffix: "+",
    label: "Cities served",
    description: "PAN-India installation network",
    icon: "mdi:map-marker-radius",
  },
  {
    value: 30,
    suffix: " min",
    label: "Callback time",
    description: "Your Anvil Saathi calls back within 30 minutes",
    icon: "mdi:phone-in-talk",
  },
  {
    value: 7,
    suffix: "% p.a.",
    label: "EMI starting rate",
    description: "Low-interest solar loans through partner banks",
    icon: "mdi:currency-inr",
  },
];
```

> If the existing file has exactly 7 records, replace all 7 with the above. If fewer, trim to match the count.

## StatsSection.jsx updates
1. Heading:
```jsx
<SectionTitle
  eyebrow="Proof in numbers"
  title={<>India is switching to solar — <span className={styles.accent}>with Anvil.</span></>}
  subtitle="Real savings, real warranties, real people on the other end of the phone."
/>
```
2. Keep `AnimatedCounter` in place — it reads `value`, `prefix`, `suffix` from each record.
3. CSS: replace old-palette hex literals with CSS vars.

## Guardrails
- Keep `statsData` export name identical
- Keep the value / suffix / label / description keys consumed by `AnimatedCounter`
- Numeric `value` must be a number (not a string) so counting animation still works

## Validation checklist
- [ ] `statsData` exports an array of 7 entries
- [ ] Each entry has numeric `value`
- [ ] Suffixes like `"+"`, `"%"`, `" yrs"` display correctly
- [ ] No medical metrics remain
- [ ] Section renders all items in the dev server (verify later)

## Next step
Proceed to `17-highlights.md` for the HighlightsSection.
