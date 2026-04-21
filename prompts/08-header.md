# 08 — Header Component

## Objective
Rebrand the desktop/tablet header to Anvil: swap logo, rewrite nav items to match Anvil's IA (`Solar Calculator`, `Solar Solution`, `Book Your Free Call`), replace the phone CTA with Anvil's toll-free, and ensure the "Book Your Free Call" button is the visual primary CTA.

## Files to modify
- `src/components/common/Header/Header.jsx`
- `src/components/common/Header/Header.module.css` (colors only if hex literals exist)

## Implementation steps

### 1. Logo constants
At the top of `Header.jsx`:
```jsx
const LOGO_URL = "https://solar.anvil.energy/svgs/logo.svg";
const LOGO_WHITE_URL = "https://solar.anvil.energy/svgs/logo.svg";
const BRAND_NAME = process.env.REACT_APP_NAME || "Anvil";
```
Use the white variant when the header has `isScrolled === false` over a dark hero (keep existing conditional).

### 2. Nav items
Find the `navItems` array (or JSX list of `<NavLink>` / `<a>` entries) and replace with:
```js
const navItems = [
  { label: "Home", href: "#home" },
  { label: "Solar Calculator", href: "#calculator" },
  { label: "Solar Solutions", href: "#services" },
  { label: "Why Anvil", href: "#about" },
  { label: "Savings", href: "#stats" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];
```
Keep anchor targets that already exist in the app. If section IDs differ (e.g., `#hero` vs `#home`), match the current section IDs already rendered by the page components.

### 3. Primary CTA button
The header's right-side "Book Now" / "Consultation" button must read **"Book Your Free Call"**. Keep the onClick handler that opens the lead form drawer (`openModal` / `openLeadForm`) exactly as-is.

```jsx
<Button
  variant="contained"
  color="primary"
  onClick={handleOpenLeadForm}
  className={styles.ctaButton}
  startIcon={<PhoneIcon />}
>
  Book Your Free Call
</Button>
```

### 4. Phone / WhatsApp link
If the header renders a phone number, pull it from `process.env.REACT_APP_SALES_PHONE` (already `+91 1800 2020 001`) rather than hardcoding. Confirm any `tel:` href becomes `tel:+918002020001` (WhatsApp-compatible).

### 5. Visual tweaks
In `Header.module.css`, search for any literal hex values belonging to the old palette (`#1A5276`, `#148F77`, etc.) and replace with the appropriate CSS var (`var(--primary-dark)`, `var(--accent-gold)`). Leave layout/spacing/animation untouched.

### 6. Accessibility
- `alt` on the logo `<img>` → `"Anvil — rooftop solar for homes and businesses"`.
- Retain the existing `aria-label` on the hamburger / drawer button.

## Guardrails
- Do NOT modify the scroll-detection logic, transition classNames, or mobile menu toggle behavior.
- Do NOT restructure the JSX tree — only change strings, hrefs, and the image URL.
- Do NOT add new dependencies.

## Validation checklist
- [ ] Desktop header shows Anvil logo on initial load and after scroll
- [ ] Nav items read: Home, Solar Calculator, Solar Solutions, Why Anvil, Savings, FAQ, Contact
- [ ] "Book Your Free Call" button opens the existing lead form modal
- [ ] Phone link reads `+91 1800 2020 001`
- [ ] No `Monjoven` text appears in the header DOM

## Next step
Proceed to `09-mobile-navigation.md` to update the mobile drawer and bottom nav.
