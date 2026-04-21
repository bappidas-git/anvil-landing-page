# 26 — Thank You Page

## Objective
Rebrand the post-submission `/thank-you` page so it confirms the Anvil Saathi follow-up and encourages next-step engagement (WhatsApp, read more, explore the calculator). Preserves any Google Ads / Meta conversion fires and GTM events.

## Files to modify
- `src/pages/ThankYou/ThankYou.jsx`
- `src/pages/ThankYou/ThankYou.module.css` (hex cleanup)

## ⚠️ NO-TOUCH
- Any call to `trackConversion(...)`, `trackLead(...)`, `gtag(...)`, `pushDataLayer(...)`
- Any `useEffect` that fires analytics on mount — keep intact

## Implementation steps

### 1. Page headline + confirmation
```jsx
<div className={styles.successCard}>
  <div className={styles.checkmark}>✓</div>
  <h1>Your request is in. Your Anvil Saathi will call you shortly.</h1>
  <p className={styles.subline}>
    Thanks for choosing Anvil. A personal Saathi will call from <strong>1800 2020 001</strong> within the next 30 minutes (Mon–Sat, 9 AM – 7 PM IST) to go over your free solar savings plan.
  </p>
</div>
```

### 2. "What happens next" strip
```jsx
<section className={styles.nextSteps}>
  <h2>What happens next</h2>
  <ol>
    <li><strong>Quick call (5–10 min)</strong> — confirm your roof type, monthly bill, and power-cut history.</li>
    <li><strong>Custom savings plan</strong> — we email a personalised system design + expected savings + EMI options.</li>
    <li><strong>Site survey</strong> — if you're interested, we book a free on-site survey at your convenience.</li>
    <li><strong>Installation & subsidy</strong> — we handle the PM Surya Ghar paperwork and install in 3–6 weeks.</li>
  </ol>
</section>
```

### 3. Quick-action buttons
```jsx
<div className={styles.quickActions}>
  <a href="https://wa.me/918002020001" className={styles.primaryAction}>
    💬 Ping us on WhatsApp
  </a>
  <a href="/" className={styles.secondaryAction}>
    🏠 Back to home
  </a>
</div>
```

### 4. Trust reminder
```jsx
<div className={styles.trustRow}>
  <span>✓ 10,000+ rooftops powered</span>
  <span>✓ 25-year panel warranty</span>
  <span>✓ Zero-obligation consultation</span>
</div>
```

### 5. CSS
Replace literal old hex with CSS vars. Keep the confetti / animation imports unchanged.

## Guardrails
- Analytics firing must run unchanged
- Do not remove `noindex` meta (the page should stay out of search)
- Do not remove confetti on success if it exists

## Validation checklist
- [ ] No medical / clinical language remains
- [ ] Confirmation mentions Anvil Saathi + 30-minute callback
- [ ] Analytics events still fire on mount
- [ ] WhatsApp link points to Anvil's number
- [ ] Back-to-home link goes to `/`

## Next step
Proceed to `27-admin-panel.md` for admin rebranding.
