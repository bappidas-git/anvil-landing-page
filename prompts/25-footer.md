# 25 — Footer

## Objective
Rebrand the Footer: logo, about blurb, quick links, service links, contact block, social links, legal links, and copyright. Keep the Privacy Policy + Terms modal triggers intact.

## Files to modify
- `src/components/common/Footer/Footer.jsx`
- `src/components/common/Footer/Footer.module.css` (hex cleanup)

## Implementation steps

### 1. Brand block
```jsx
<div className={styles.brandBlock}>
  <img src="https://solar.anvil.energy/svgs/logo.svg" alt="Anvil Solar" className={styles.footerLogo} />
  <p className={styles.footerTagline}>
    India's hassle-free rooftop solar partner. Design, subsidy, finance, install, and lifetime support — all handled by your Anvil Saathi.
  </p>
</div>
```

### 2. Quick Links column
```jsx
const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Solar Calculator", href: "#calculator" },
  { label: "Solar Solutions", href: "#services" },
  { label: "Why Anvil", href: "#about" },
  { label: "How It Works", href: "#highlights" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];
```

### 3. Solutions column
```jsx
const solutionLinks = [
  { label: "On-Grid Rooftop Solar", href: "#services" },
  { label: "Hybrid Solar + Battery", href: "#services" },
  { label: "Commercial & Industrial", href: "#services" },
  { label: "PM Surya Ghar Subsidy", href: "#services" },
  { label: "Solar EMI & Loans", href: "#services" },
];
```

### 4. Contact column
```jsx
<div className={styles.contactCol}>
  <h4>Get in touch</h4>
  <a href="tel:+918002020001">📞 1800 2020 001</a>
  <a href="mailto:hello@anvil.energy">✉️ hello@anvil.energy</a>
  <a href="https://wa.me/918002020001">💬 Chat on WhatsApp</a>
  <p>Anvil Energy, Gurugram, Haryana, India</p>
  <p>Mon–Sat, 9 AM – 7 PM IST</p>
</div>
```

### 5. Social block
Read social URLs from env (`REACT_APP_FACEBOOK_URL`, etc.). Ensure icons fall back gracefully if an env var is empty.

### 6. Legal / bottom bar
```jsx
<div className={styles.footerBottom}>
  <p>© {new Date().getFullYear()} Anvil Energy. All rights reserved.</p>
  <div className={styles.legalLinks}>
    <button onClick={openPrivacyModal}>Privacy Policy</button>
    <button onClick={openTermsModal}>Terms of Service</button>
    <a href="/sitemap.xml">Sitemap</a>
  </div>
</div>
```

### 7. Privacy Policy + Terms modal content
If the modals render hardcoded content within the Footer component, update the policy/terms text to reference Anvil Energy, solar installation services, and standard India e-commerce / Consumer Protection Act language. Leave the modal-open/close mechanics untouched.

### 8. CSS
Replace literal old hex with CSS vars.

## Guardrails
- Do NOT change the Privacy / Terms modal open/close wiring
- Do NOT rename classNames that other components reference
- Copyright must use `new Date().getFullYear()` (not hardcoded 2026)

## Validation checklist
- [ ] Footer logo is Anvil
- [ ] 3 columns (Quick Links, Solutions, Contact) populated
- [ ] Social icons link to env-driven URLs
- [ ] Copyright shows the current year dynamically
- [ ] Privacy + Terms modals still open

## Next step
Proceed to `26-thank-you-page.md`.
