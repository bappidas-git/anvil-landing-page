# 12 — Services Data (`src/data/servicesData.js`)

## Objective
Replace the hair-transplant / cosmetic-surgery services catalog with Anvil's four core solar offerings: On-Grid Rooftop Solar, Hybrid Rooftop Solar (with battery), Commercial & Industrial Solar, and Solar EMI / Subsidy Assistance.

## File to modify
- `src/data/servicesData.js`

## Structural rule
Do not change the exported constant name (`servicesData`) or any property keys consumed by `ServicesSection.jsx` (typical keys: `id`, `name`, `shortName`, `target`, `duration`, `description`, `features` array, `frequency`, `badge`, `icon`). Read the current file to confirm the exact shape, then only change VALUES.

## Target replacement content

```js
export const servicesData = [
  {
    id: "on-grid-solar",
    name: "On-Grid Rooftop Solar",
    shortName: "On-Grid Solar",
    target: "Homes & small businesses",
    duration: "Installed in 2–3 days",
    description:
      "The most popular choice for homeowners. Export surplus solar to the grid, earn net-metering credits, and cut your monthly bill by 70–90%.",
    features: [
      "Tier-1 monocrystalline panels",
      "Tier-1 string / micro inverter",
      "Net metering + DISCOM paperwork handled",
      "Eligible for PM Surya Ghar subsidy up to ₹78,000",
      "25-year panel / 10-year inverter warranty",
    ],
    frequency: "One-time install",
    badge: "Most Popular",
    icon: "mdi:solar-panel",
  },
  {
    id: "hybrid-solar",
    name: "Hybrid Solar with Battery",
    shortName: "Hybrid Solar",
    target: "Homes with frequent power cuts",
    duration: "Installed in 3–4 days",
    description:
      "Solar + lithium battery backup. Keep your home running through outages and stay self-reliant when the grid fails.",
    features: [
      "Lithium-ion battery (4–10 kWh options)",
      "Automatic grid-to-battery switchover",
      "Smart inverter with app monitoring",
      "Ideal for areas with >4 hours of daily outages",
      "25-year panel + 10-year inverter warranty",
    ],
    frequency: "One-time install",
    badge: "Power-Cut Proof",
    icon: "mdi:battery-charging-high",
  },
  {
    id: "commercial-solar",
    name: "Commercial & Industrial Solar",
    shortName: "C&I Solar",
    target: "Offices, factories, societies",
    duration: "Installed in 2–6 weeks",
    description:
      "Bring your commercial electricity costs down by 60–80%. Capex, Opex, or RESCO models available. End-to-end EPC with 24×7 monitoring.",
    features: [
      "Custom-designed 10 kW – 1 MW systems",
      "Capex / Opex / RESCO financing options",
      "Accelerated depreciation benefits",
      "Remote monitoring + annual performance reports",
      "Dedicated account manager",
    ],
    frequency: "One-time install",
    badge: "Best ROI",
    icon: "mdi:office-building",
  },
  {
    id: "subsidy-finance",
    name: "Subsidy & Finance Assistance",
    shortName: "Subsidy & EMI",
    target: "Every Anvil customer",
    duration: "Included free",
    description:
      "We handle the PM Surya Ghar application, DISCOM coordination, bank loan paperwork, and subsidy disbursal — end to end. Zero-down-payment EMIs available.",
    features: [
      "PM Surya Ghar Yojana registration",
      "Subsidy disbursal up to ₹78,000",
      "Solar loans from ₹2 lakh at 7% p.a.",
      "EMI tenors up to 10 years",
      "Zero-down-payment for eligible customers",
    ],
    frequency: "Built into every install",
    badge: "Included Free",
    icon: "mdi:bank",
  },
];
```

> **If the existing file exports additional fields** (e.g. `image`, `color`, `tagline`, `savingsRange`) — keep those keys and fill them with sensible Anvil values (e.g. `savingsRange: "70–90%"`, `color: "var(--accent-gold)"`).

## Guardrails
- Do NOT rename `servicesData` or any consumed key
- Do NOT change the array length if a downstream component renders by hardcoded index (check `ServicesSection.jsx` first — if it maps over `.map()`, any length is safe)
- Iconify names (`mdi:*`) must match the icon library the rest of the app uses (`@iconify/react` is already a dependency)

## Validation checklist
- [ ] File parses without syntax errors
- [ ] No mention of `hair`, `transplant`, `surgery`, `FUE`, `PRP`, or `Dr.` remains
- [ ] Exactly 4 services defined (or however many existed, with solar content)
- [ ] Each service has required keys: `id`, `name`, `description`, `features`
- [ ] Icons use `mdi:*` namespace

## Next step
Proceed to `13-services-section.md` to rebrand the display-layer copy.
