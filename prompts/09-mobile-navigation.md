# 09 — Mobile Drawer & Bottom Navigation

## Objective
Mirror the header rebrand into the mobile drawer and the persistent mobile bottom-nav so the mobile experience is fully Anvil-branded. Preserve all drawer open/close mechanics, focus trapping, and bottom-nav active-item logic.

## Files to modify
- `src/components/common/MobileDrawer/MobileDrawer.jsx`
- `src/components/common/MobileDrawer/MobileDrawer.module.css` (hex literals only)
- `src/components/common/MobileNavigation/MobileNavigation.jsx`
- `src/components/common/MobileNavigation/MobileNavigation.module.css` (hex literals only)

## Implementation steps

### 1. Drawer logo + header
Inside `MobileDrawer.jsx`, replace the branded block at the top of the drawer:
```jsx
<div className={styles.drawerHeader}>
  <img src="https://solar.anvil.energy/svgs/logo.svg" alt="Anvil Solar" />
  <p className={styles.brandTagline}>Your Anvil Saathi for rooftop solar</p>
</div>
```

### 2. Drawer nav items
Replace the hardcoded nav array with the same list as Header (prompt 08):
```js
const navItems = [
  { label: "Home", href: "#home", icon: "mdi:home" },
  { label: "Solar Calculator", href: "#calculator", icon: "mdi:calculator" },
  { label: "Solar Solutions", href: "#services", icon: "mdi:solar-panel" },
  { label: "Why Anvil", href: "#about", icon: "mdi:shield-sun" },
  { label: "Savings", href: "#stats", icon: "mdi:chart-line" },
  { label: "FAQ", href: "#faq", icon: "mdi:help-circle-outline" },
  { label: "Contact", href: "#contact", icon: "mdi:phone" },
];
```
*(Swap to the icon library you already use — if the existing code uses `@mui/icons-material`, keep those component references and just update labels + hrefs.)*

### 3. Drawer footer CTAs
The drawer currently shows a "Call Now" + "WhatsApp" pair. Update to:
- Call button → label `"Call 1800 2020 001"`, `href={`tel:${process.env.REACT_APP_SALES_PHONE}`}`
- WhatsApp button → label `"Chat on WhatsApp"`, `href={`https://wa.me/${process.env.REACT_APP_WHATSAPP_NUMBER}`}`
- Primary CTA button → `"Book Your Free Call"`, onClick opens the lead form

### 4. Socials
Footer of the drawer links to social icons. Pull URLs from env (`REACT_APP_FACEBOOK_URL`, etc.). Replace any hardcoded social URLs.

### 5. MobileNavigation (bottom bar)
`MobileNavigation.jsx` renders a bottom-fixed 4–5 icon nav. Update the items:
```js
const bottomItems = [
  { label: "Home", href: "#home", icon: "mdi:home" },
  { label: "Calculator", href: "#calculator", icon: "mdi:calculator" },
  { label: "Solutions", href: "#services", icon: "mdi:solar-panel" },
  { label: "Call", href: "tel:+918002020001", icon: "mdi:phone", external: true },
  { label: "Book", onClick: openLeadForm, icon: "mdi:calendar-check", primary: true },
];
```
The "Book" item should visually be the primary (gold or orange pill). Keep the existing classNames (`styles.bottomNavItem`, `styles.primary`, etc.).

### 6. CSS color cleanup
Replace any literal `#1A5276`, `#148F77`, `#1ABC9C`, `#2980B9` in `MobileDrawer.module.css` and `MobileNavigation.module.css` with `var(--primary-dark)`, `var(--accent-gold)`, etc.

## Guardrails
- Do NOT modify focus-trap / aria-modal logic inside the drawer.
- Do NOT restructure the bottom-nav DOM — active-state styling relies on exact classes.
- Do NOT add new dependencies.

## Validation checklist
- [ ] Mobile drawer opens/closes (test later in dev)
- [ ] Drawer logo is Anvil
- [ ] All nav items match header nav
- [ ] Drawer "Call" + "WhatsApp" use env vars
- [ ] Bottom-nav primary CTA opens the lead form modal
- [ ] No hardcoded old hex remains in mobile CSS modules

## Next step
Proceed to `10-hero-section.md` to rewrite the hero headline, sub-headline, and above-the-fold CTA.
