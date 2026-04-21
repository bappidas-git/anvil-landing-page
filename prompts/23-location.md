# 23 — Location Data + LocationSection

## Objective
Replace Guwahati-specific clinic location info with Anvil's PAN-India service footprint, HQ in Gurugram, and popular solar markets.

## Files to modify
- `src/data/locationData.js`
- `src/components/sections/LocationSection/LocationSection.jsx`
- `src/components/sections/LocationSection/LocationSection.module.css` (hex cleanup)

## Implementation — `src/data/locationData.js`

```js
export const locationData = {
  name: "Anvil Energy HQ",
  address: "Anvil Energy, Gurugram, Haryana, India",
  city: "Gurugram",
  state: "Haryana",
  phone: "+911800202001",
  phoneDisplay: "1800 2020 001",
  altPhone: "",
  tollFree: "1800 2020 001",
  email: "hello@anvil.energy",
  website: "solar.anvil.energy",
  whatsapp: "911800202001",
  mapUrl:
    "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1200&q=80&auto=format&fit=crop",
  warehouses: [],
  nearbyAreas: [
    "Delhi NCR",
    "Noida",
    "Ghaziabad",
    "Faridabad",
    "Manesar",
    "Sohna",
    "Dwarka",
    "Rohini",
    "Greater Noida",
    "South Delhi",
    "West Delhi",
    "East Delhi",
    "Karol Bagh",
    "Saket",
    "Vasant Kunj",
  ],
  servingStates: [
    "Delhi NCR",
    "Haryana",
    "Uttar Pradesh",
    "Punjab",
    "Rajasthan",
    "Maharashtra",
    "Karnataka",
    "Tamil Nadu",
    "Telangana",
    "Andhra Pradesh",
    "Gujarat",
    "Madhya Pradesh",
    "Kerala",
    "West Bengal",
    "Odisha",
    "Bihar",
  ],
};
```

## Implementation — LocationSection.jsx

### 1. Section heading
```jsx
<SectionTitle
  eyebrow="PAN-India"
  title={<>Solar-ready in <span className={styles.accent}>300+ cities.</span></>}
  subtitle="Anvil's vetted installer teams serve every major metro and tier-2 city across India. Enter your state in the calculator to check local incentives."
/>
```

### 2. Map / address card
- Use `locationData.mapUrl` for the image
- Address line shows `locationData.address`
- Phone: `locationData.phoneDisplay` with `tel:+911800202001` link
- Email: `locationData.email`
- Replace any "Get Directions" copy that references Guwahati roads

### 3. "Nearby areas" chip strip → rename visually to "Serving PAN-India"
Title the chip strip: `We install across Delhi NCR and beyond`.

### 4. "Serving states" visual — list of states
Render `locationData.servingStates` as small chips under a heading `States we serve`.

### 5. CSS
Replace literal old hex with CSS vars. No layout changes.

## Guardrails
- Do NOT rename exported object `locationData`
- Do NOT change any property name consumed elsewhere (grep `locationData.` across the repo first to confirm)

## Validation checklist
- [ ] `locationData` exports with identical shape
- [ ] No mention of Pratiksha Hospital, VIP Road, Six Mile, or other Guwahati streets
- [ ] Phone / email / website values reflect Anvil
- [ ] Section heading mentions PAN-India

## Next step
Proceed to `24-contact-section.md` for the ContactSection.
