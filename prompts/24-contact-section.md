# 24 — Contact Section

## Objective
Rebrand `ContactSection` so the heading, contact-method cards (phone / WhatsApp / email / office), and embedded form copy match Anvil — without touching the LeadForm internals (handled in prompt 19).

## Files to modify
- `src/components/sections/ContactSection/ContactSection.jsx`
- `src/components/sections/ContactSection/ContactSection.module.css` (hex cleanup)

## Implementation steps

### 1. Section heading
```jsx
<SectionTitle
  eyebrow="Talk to Anvil"
  title={<>Questions? <span className={styles.accent}>Your Saathi is 30 minutes away.</span></>}
  subtitle="Call, WhatsApp, or drop us a line. No pushy sales — just a solar savings plan that actually makes sense."
/>
```

### 2. Contact-method cards
Render 4 cards backed by env values:
```jsx
const contactMethods = [
  {
    icon: "mdi:phone-in-talk",
    title: "Call our toll-free",
    value: "1800 2020 001",
    href: `tel:+918002020001`,
    cta: "Call now",
  },
  {
    icon: "mdi:whatsapp",
    title: "WhatsApp",
    value: "Chat with Anvil Saathi",
    href: `https://wa.me/918002020001?text=${encodeURIComponent("Hi Anvil — I'd like a solar savings plan")}`,
    cta: "Open WhatsApp",
  },
  {
    icon: "mdi:email",
    title: "Email",
    value: process.env.REACT_APP_SALES_EMAIL || "hello@anvil.energy",
    href: `mailto:${process.env.REACT_APP_SALES_EMAIL || "hello@anvil.energy"}`,
    cta: "Send email",
  },
  {
    icon: "mdi:map-marker",
    title: "HQ",
    value: "Gurugram, Haryana",
    href: "https://maps.google.com/?q=Gurugram,Haryana,India",
    cta: "View on map",
  },
];
```

### 3. Hours strip
```jsx
<div className={styles.hours}>
  <strong>Open hours:</strong> Mon–Sat, 9:00 AM – 7:00 PM IST · Sunday closed
</div>
```

### 4. Embedded form
The section renders the `LeadForm` or `UnifiedLeadForm` already. Ensure the heading above the embedded form reads:
```jsx
<h3>Prefer to fill a form? We'll call you back.</h3>
```

### 5. CSS
Replace literal old hex with CSS vars.

## Guardrails
- Do not modify the embedded form component
- Do not change Google Maps iframes if present — only update address text. If an iframe hardcodes Guwahati coords, replace the `src` with a Gurugram coords version:
  - `src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.xxx!...Gurugram..."`
  - If you cannot generate a proper embed URL, swap the iframe for the static image at `locationData.mapUrl` and link to `maps.google.com?q=Gurugram,Haryana,India`.

## Validation checklist
- [ ] 4 contact-method cards render
- [ ] Phone + WhatsApp use Anvil's toll-free
- [ ] No Guwahati address, pincode, or landmark remains
- [ ] Hours strip visible
- [ ] Embedded form opens / submits as before

## Next step
Proceed to `25-footer.md` for the Footer component.
