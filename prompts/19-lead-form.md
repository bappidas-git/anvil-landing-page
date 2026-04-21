# 19 — LeadForm Content (keep submission logic untouched)

## Objective
Rebrand the user-facing labels, placeholder text, service-interest dropdown, and helper copy in `LeadForm.jsx` to Anvil-relevant solar fields. **Do not change** field names, validators, `webhookSubmit.js`, swal alerts, or the success/error flow.

## Files to modify
- `src/components/common/LeadForm/LeadForm.jsx`
- `src/components/common/LeadForm/LeadForm.module.css` (hex cleanup)

## ⚠️ STRICT NO-TOUCH LIST
- `src/utils/webhookSubmit.js`
- `src/utils/validators.js`
- `src/utils/swalHelper.js`
- The `name="name"`, `name="mobile"`, `name="email"`, `name="service_interest"`, `name="message"` attributes — **field names stay identical** (the backend consumes them)
- The submit handler, error state management, duplicate check, or redirect logic

## Implementation steps

### 1. Form header copy
```jsx
<div className={styles.formHeader}>
  <h3>Get your free solar savings plan</h3>
  <p>Share a few details — your Anvil Saathi will call you within 30 minutes.</p>
</div>
```

### 2. Field labels / placeholders
- **Name** label: `Full Name`, placeholder: `e.g., Priya Sharma`
- **Mobile** label: `Mobile Number`, placeholder: `10-digit number starting 6-9`, help text: `We'll only call to schedule your site survey`
- **Email** label: `Email (optional)`, placeholder: `you@example.com`
- **Service Interest** label: `What are you interested in?` (keep the same `name="service_interest"`)
  - Replace the `<option>` list with:
    ```jsx
    <option value="">Select a solar solution</option>
    <option value="On-Grid Solar">On-Grid Rooftop Solar (residential)</option>
    <option value="Hybrid Solar">Hybrid Solar with Battery Backup</option>
    <option value="Commercial Solar">Commercial / Industrial Solar</option>
    <option value="Subsidy Assistance">PM Surya Ghar Subsidy Help</option>
    <option value="Financing">Solar Loan / EMI</option>
    <option value="Site Survey">Free Site Survey</option>
    <option value="Not Sure">I'm not sure yet — advise me</option>
    ```
- **Message** label: `Anything specific? (optional)`, placeholder: `e.g., my monthly bill is ₹4,000 and I'm in Gurugram`
- **Submit button** label: `Book My Free Call`
- **Privacy note under button**: `By submitting, you agree to be contacted by Anvil about your solar enquiry. We never share your details.`

### 3. Field order (reorder JSX only — fields stay the same)
For mobile-first conversion, ensure the order is:
1. Name
2. Mobile
3. Service Interest
4. Email (optional)
5. Message (optional)

### 4. Trust strip below the form
If the component has a trust strip, update to:
```jsx
<ul className={styles.trustStrip}>
  <li>✓ No spam calls</li>
  <li>✓ Your Saathi calls within 30 min</li>
  <li>✓ Zero-obligation consultation</li>
</ul>
```

### 5. Success alert text
If the success path shows inline copy (not inside `swalHelper`), change to:
```
Thanks! Your Anvil Saathi will call you within 30 minutes.
```

If the component triggers a `swalHelper.showSuccess(...)`, leave the helper alone — you can still update the message string passed in as an argument:
```js
showSuccess("Your Anvil Saathi will call within 30 minutes!", "Request received");
```

### 6. CSS
Replace literal old hex with CSS vars. Keep all flex/grid/spacing untouched.

## Guardrails
- Field `name` attributes must stay: `name`, `mobile`, `email`, `service_interest`, `message`
- Validators must continue to work — do not change regex or min/max constraints
- `onSubmit` / `handleSubmit` wiring is untouched
- Duplicate-detection alert (422 / 409) remains intact

## Validation checklist
- [ ] All field `name` attributes unchanged
- [ ] Service-interest dropdown options are solar-relevant
- [ ] Submit button reads "Book My Free Call"
- [ ] Helper / privacy copy reflects Anvil
- [ ] No change to submission flow files

## Next step
Proceed to `20-unified-lead-form.md` for the calculator-style UnifiedLeadForm.
