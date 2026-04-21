# 07 — SEO Config (`src/config/seo.js`)

## Objective
Rewrite `src/config/seo.js` so every dynamically-injected meta tag, JSON-LD schema, FAQ, and page-level SEO setting aligns with Anvil Solar. Keep the file's exports and object shape identical so `SEOHead.jsx` and any page consumers continue to work.

## File to modify
- `src/config/seo.js`

## Structural rule
Do **not** change any top-level export names. Only change string VALUES inside the objects. If you need to add an FAQ entry, follow the existing array format exactly.

## Implementation steps

### 1. Site constants
```js
export const siteConfig = {
  name: "Anvil",
  legalName: "Anvil Energy",
  url: "https://solar.anvil.energy",
  defaultTitle: "Anvil Solar | Rooftop Solar for Homes & Businesses",
  titleTemplate: "%s | Anvil Solar",
  defaultDescription:
    "Switch to rooftop solar with Anvil. End-to-end installation, PM Surya Ghar subsidy, zero-hassle financing, and lifetime support. Calculate your savings today.",
  defaultKeywords:
    "rooftop solar India, home solar, PM Surya Ghar, solar calculator, on-grid solar, hybrid solar, solar subsidy, Anvil Saathi",
  ogImage:
    "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&h=630&q=80&auto=format&fit=crop",
  locale: "en_IN",
  twitterHandle: "@anvilenergy",
};
```

### 2. Organization schema
```js
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Anvil",
  legalName: "Anvil Energy",
  url: "https://solar.anvil.energy",
  logo: "https://solar.anvil.energy/svgs/logo.svg",
  description:
    "End-to-end rooftop solar installation for homes and businesses across India.",
  founder: {
    "@type": "Person",
    name: "Anvil Energy Team",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Anvil Energy HQ",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    postalCode: "122001",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-1800-2020-001",
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi"],
  },
  sameAs: [
    "https://www.facebook.com/anvilenergy",
    "https://www.instagram.com/anvil.energy",
    "https://www.linkedin.com/company/anvil-energy",
    "https://www.youtube.com/@anvilenergy",
  ],
};
```

### 3. LocalBusiness schema
Replace `@type: "MedicalBusiness"` (or similar) with `@type: "SolarEnergyContractor"`. Update:
- `name: "Anvil"`
- `priceRange: "₹₹"`
- `openingHours: "Mo-Sa 09:00-19:00"`
- `areaServed: "India"`
- `geo` → `{ latitude: 28.4595, longitude: 77.0266 }`
- Remove `medicalSpecialty` if present
- Add `knowsAbout: ["Rooftop Solar", "On-Grid Solar", "Hybrid Solar", "Solar Net Metering", "PM Surya Ghar Yojana", "Solar Financing"]`

### 4. FAQ schema
Replace the 10 medical FAQs wholesale with these 10 solar FAQs:

```js
export const faqSchema = [
  {
    question: "How much can I save by going solar with Anvil?",
    answer:
      "Most residential customers cut their electricity bill by 70–90%. The exact savings depend on your monthly consumption, state tariff, system size, and sunlight hours. Use the Anvil Solar Savings Calculator on our homepage for an instant personalised estimate.",
  },
  {
    question: "Does Anvil help me claim the PM Surya Ghar subsidy?",
    answer:
      "Yes. Anvil handles the entire PM Surya Ghar Muft Bijli Yojana process — registration, DISCOM coordination, technical feasibility report, and subsidy disbursal. Eligible households can receive up to ₹78,000 in central government subsidy.",
  },
  {
    question: "What is the difference between on-grid and hybrid solar?",
    answer:
      "An on-grid system exports excess solar to the utility grid for credits (net metering) but shuts off during outages. A hybrid system adds a battery so you keep power during outages and stay self-reliant. Anvil recommends the right fit based on your load profile and state policy.",
  },
  {
    question: "What roof types are suitable for solar?",
    answer:
      "Anvil installs on concrete (RCC) and tin-sheet (metal / asbestos-replacement) roofs. A site survey confirms structural suitability and shading. Minimum usable area: roughly 100 sq ft per kW for residential systems.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Physical installation of a 3–5 kW residential system takes 2–3 days once materials arrive. End-to-end timeline including subsidy approval, net metering, and commissioning is typically 3–6 weeks depending on your DISCOM.",
  },
  {
    question: "What warranties do I get?",
    answer:
      "25-year linear power warranty on solar panels, 10-year comprehensive warranty on the inverter, and 5-year Anvil workmanship warranty on the entire installation — including mounting structures and AC/DC cabling.",
  },
  {
    question: "What happens on cloudy or rainy days?",
    answer:
      "Solar panels still generate electricity on cloudy days (at reduced output). Any shortfall is automatically drawn from the grid for on-grid systems, or from your battery for hybrid systems, so you never lose power.",
  },
  {
    question: "Can Anvil help with financing or EMI?",
    answer:
      "Yes. Anvil partners with leading banks under the PM Surya Ghar loan scheme to offer low-interest solar loans starting at 7% with EMI tenors up to 10 years. Zero down-payment options are available for eligible customers.",
  },
  {
    question: "How much maintenance does a solar system need?",
    answer:
      "Very little. Panels need cleaning every 2–4 weeks in most Indian cities. Anvil offers optional annual maintenance contracts that include panel cleaning, electrical inspection, and remote monitoring.",
  },
  {
    question: "Is Anvil available in my city?",
    answer:
      "Anvil installs across India through a vetted partner network. Enter your state in the savings calculator to see local incentives, and our Anvil Saathi will confirm availability during your free consultation.",
  },
];
```

### 5. Page-level SEO (home, thank-you, admin)
If the file exports `pageSEO` (or similar) with per-page title/description, update each page:

```js
export const pageSEO = {
  home: {
    title: "Anvil Solar | Rooftop Solar for Homes & Businesses in India",
    description:
      "Switch to rooftop solar with Anvil. End-to-end installation, PM Surya Ghar subsidy, zero-hassle financing, and lifetime support. Book your free consultation today.",
  },
  thankYou: {
    title: "Thank You | Your Anvil Saathi Will Call You Shortly",
    description:
      "Your Anvil Saathi will call you within the next 30 minutes to discuss your rooftop solar consultation.",
    noindex: true,
  },
  admin: {
    title: "Anvil Admin",
    description: "Lead management for Anvil Solar",
    noindex: true,
  },
};
```

## Guardrails
- Keep every exported name identical (`siteConfig`, `organizationSchema`, `localBusinessSchema`, `faqSchema`, `pageSEO`, etc.)
- Do not delete exports — if a key no longer makes sense for Anvil, replace the value with a sensible default rather than removing it
- Do not rename object properties — `SEOHead.jsx` consumes them literally

## Validation checklist
- [ ] No occurrence of `monjoven`, `hair transplant`, `Dr. Porag Neog`, or `Guwahati` remains in `src/config/seo.js`
- [ ] All JSON-LD objects are valid JS (commas balanced)
- [ ] All exported names unchanged
- [ ] The file re-compiles (no syntax errors)

## Next step
Proceed to `08-header.md` to rebrand the header nav.
