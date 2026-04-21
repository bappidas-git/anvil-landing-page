# 20 — UnifiedLeadForm (calculator-style experience)

## Objective
Turn `UnifiedLeadForm.jsx` into a quick **Solar Savings Calculator** experience — the same backend fields, rebranded and augmented with a few UI-only "qualifying" selects so the user feels they're configuring their system. The submission still goes through the existing webhook / API pipeline untouched.

## Files to modify
- `src/components/common/UnifiedLeadForm/UnifiedLeadForm.jsx`
- `src/components/common/UnifiedLeadForm/UnifiedLeadForm.module.css` (hex cleanup)

## ⚠️ STRICT NO-TOUCH LIST
- `src/utils/webhookSubmit.js`
- `src/utils/validators.js`
- The real submit handler (we only add UI-only selects that are concatenated into the existing `message` field before submission — this is non-breaking)

## Design of the "calculator" shell

Mirror Anvil's calculator fields from https://solar.anvil.energy/solar-calculator:
- Consumer Type: Residential / Business-Office
- System Type: On-Grid / Hybrid
- Roof Type: Concrete / Tin shed
- State
- Phase: 1 Phase / 3 Phase
- Avg monthly bill (INR)

These become **UI-only selects** that the user fills in. Their values are concatenated into the `message` field on submit, so the webhook receives:
```
message = "Consumer: Residential | System: Hybrid | Roof: Concrete | State: Haryana | Phase: 1 | Bill: ₹4200 | Notes: <user's message>"
```

This way the backend schema (`name`, `mobile`, `email`, `service_interest`, `message`) stays IDENTICAL.

## Implementation steps

### 1. Add UI-only state at the top of the component
```jsx
const [calc, setCalc] = useState({
  consumerType: "",
  systemType: "",
  roofType: "",
  state: "",
  phase: "",
  monthlyBill: "",
});
```

### 2. New form header
```jsx
<div className={styles.calcHeader}>
  <span className={styles.eyebrow}>⚡ Solar Savings Calculator</span>
  <h3>See how much you could save on electricity</h3>
  <p>Step 1 of 2: a few quick questions about your home. Step 2: your contact details — an Anvil Saathi will call you in 30 minutes with a personalised plan.</p>
</div>
```

### 3. Render the 6 calculator selects/inputs

```jsx
<div className={styles.calcGrid}>
  <label>
    Consumer Type
    <select value={calc.consumerType} onChange={e => setCalc({ ...calc, consumerType: e.target.value })}>
      <option value="">Select</option>
      <option value="Residential">Residential</option>
      <option value="Business-Office">Business / Office</option>
    </select>
  </label>

  <label>
    System Type
    <select value={calc.systemType} onChange={e => setCalc({ ...calc, systemType: e.target.value })}>
      <option value="">Select</option>
      <option value="On-Grid">On-Grid</option>
      <option value="Hybrid">Hybrid (with battery backup)</option>
    </select>
  </label>

  <label>
    Roof Type
    <select value={calc.roofType} onChange={e => setCalc({ ...calc, roofType: e.target.value })}>
      <option value="">Select</option>
      <option value="Concrete">Concrete Roof</option>
      <option value="Tin-shed">Tin-shed Roof</option>
    </select>
  </label>

  <label>
    State
    <select value={calc.state} onChange={e => setCalc({ ...calc, state: e.target.value })}>
      <option value="">Select your state</option>
      {INDIAN_STATES.map(s => <option key={s} value={s}>{s}</option>)}
    </select>
  </label>

  <label>
    Phase In Use
    <select value={calc.phase} onChange={e => setCalc({ ...calc, phase: e.target.value })}>
      <option value="">Select</option>
      <option value="1-Phase">1 Phase (homes)</option>
      <option value="3-Phase">3 Phase (commercial / large societies)</option>
    </select>
  </label>

  <label>
    Avg. monthly electricity bill (₹)
    <input
      type="number"
      min="0"
      placeholder="e.g. 4200"
      value={calc.monthlyBill}
      onChange={e => setCalc({ ...calc, monthlyBill: e.target.value })}
    />
  </label>
</div>
```

### 4. `INDIAN_STATES` constant (at top of file)
```js
const INDIAN_STATES = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Delhi",
  "Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala",
  "Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland",
  "Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura",
  "Uttar Pradesh","Uttarakhand","West Bengal","Chandigarh","Puducherry",
  "Jammu & Kashmir","Ladakh","Andaman & Nicobar","Dadra & Nagar Haveli & Daman & Diu","Lakshadweep",
];
```

### 5. Submit-time message enrichment
Locate the `handleSubmit` (or whatever the existing submit handler is named). **Just before** the existing call to the webhook/submission util, inject:

```js
const calcSummary = [
  calc.consumerType && `Consumer: ${calc.consumerType}`,
  calc.systemType && `System: ${calc.systemType}`,
  calc.roofType && `Roof: ${calc.roofType}`,
  calc.state && `State: ${calc.state}`,
  calc.phase && `Phase: ${calc.phase}`,
  calc.monthlyBill && `Bill: ₹${calc.monthlyBill}`,
].filter(Boolean).join(" | ");

const enrichedMessage = calcSummary
  ? `${calcSummary}${formData.message ? ` | Notes: ${formData.message}` : ""}`
  : formData.message;

// Use enrichedMessage in the payload object passed to the existing submitter.
```

This keeps the backend schema IDENTICAL — the existing `message` field just carries richer context.

### 6. Contact fields (Step 2)
Keep the existing Name / Mobile / Email / Service Interest / Message fields. Labels and dropdown options = same as prompt 19.

### 7. Submit button
Label it `Get My Free Savings Plan`.

### 8. Footer trust row
```jsx
<ul className={styles.trustStrip}>
  <li>✓ Takes under 60 seconds</li>
  <li>✓ No spam — Saathi call only</li>
  <li>✓ Includes subsidy & EMI options</li>
</ul>
```

### 9. CSS
Replace literal old hex with CSS vars. Add a `.calcGrid` rule that renders the 6 calculator fields in 2 columns on desktop, 1 column on mobile (use existing spacing tokens).

## Guardrails
- Do NOT change the submit util signature
- Do NOT change existing form field `name=""` attributes
- Do NOT remove duplicate-check or validation logic
- `INDIAN_STATES` must be declared at module scope to avoid re-creation each render

## Validation checklist
- [ ] 6 calculator fields render above the contact fields
- [ ] Contact fields unchanged in names
- [ ] Submit button reads "Get My Free Savings Plan"
- [ ] Enriched `message` lands in the webhook payload
- [ ] No breaking changes to validators or webhookSubmit

## Next step
Proceed to `21-cta-testimonials.md` to refresh the testimonial block.
