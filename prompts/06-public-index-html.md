# 06 — `public/index.html` (Meta, Schemas, Loader)

## Objective
Replace every text/meta reference to Monjoven in `public/index.html` with Anvil-aligned content: title, description, keywords, Open Graph, Twitter, geo tags, JSON-LD schemas, inline loader copy, and theme color.

## File to modify
- `public/index.html`

## Implementation steps

### 1. `<title>`
```html
<title>Anvil Solar | Save on Electricity with Rooftop Solar – Free Consultation</title>
```

### 2. Core meta tags
```html
<meta name="description" content="Anvil makes switching to rooftop solar effortless. End-to-end installation, PM Surya Ghar subsidy, easy financing, and lifetime support. Calculate your savings and book a free call." />
<meta name="keywords" content="rooftop solar India, home solar installation, PM Surya Ghar Yojana, solar panels, solar calculator, on-grid solar, hybrid solar, Anvil Saathi, solar subsidy, solar financing" />
<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
<meta name="author" content="Anvil Energy" />
<link rel="canonical" href="https://solar.anvil.energy/" />
```

### 3. Theme colors
Replace the old primary navy with Anvil's navy:
```html
<meta name="theme-color" content="#0A1F3D" />
<meta name="msapplication-TileColor" content="#0A1F3D" />
```

### 4. Open Graph / social
```html
<meta property="og:type" content="website" />
<meta property="og:url" content="https://solar.anvil.energy/" />
<meta property="og:title" content="Anvil Solar | Save on Electricity with Rooftop Solar" />
<meta property="og:description" content="Switch to clean solar energy with Anvil. Instant savings calculator, PM Surya Ghar subsidy assistance, and zero-hassle installation by certified professionals." />
<meta property="og:image" content="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&h=630&q=80&auto=format&fit=crop" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:site_name" content="Anvil" />
<meta property="og:locale" content="en_IN" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Anvil Solar | Save on Electricity" />
<meta name="twitter:description" content="India's hassle-free rooftop solar partner. Calculate savings, claim PM Surya Ghar subsidy, and book your free consultation." />
<meta name="twitter:image" content="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&h=630&q=80&auto=format&fit=crop" />
```

### 5. Geo tags
Replace Guwahati/Assam with India-wide (Anvil serves PAN India):
```html
<meta name="geo.region" content="IN" />
<meta name="geo.placename" content="India" />
<meta name="ICBM" content="28.4595, 77.0266" />
```

### 6. Manifest / PWA
Update `<meta name="application-name">` and `<meta name="apple-mobile-web-app-title">` to `Anvil`.

### 7. JSON-LD schemas
Find the three `<script type="application/ld+json">` blocks and replace their contents with:

**Organization:**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Anvil",
  "legalName": "Anvil Energy",
  "url": "https://solar.anvil.energy/",
  "logo": "https://solar.anvil.energy/svgs/logo.svg",
  "description": "End-to-end rooftop solar installation for homes and businesses across India. Anvil handles design, financing, subsidy, installation, and maintenance.",
  "foundingDate": "2023",
  "slogan": "Your Anvil Saathi for rooftop solar",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-1800-2020-001",
    "contactType": "customer service",
    "areaServed": "IN",
    "availableLanguage": ["English", "Hindi"]
  },
  "sameAs": [
    "https://www.facebook.com/anvilenergy",
    "https://www.instagram.com/anvil.energy",
    "https://www.linkedin.com/company/anvil-energy",
    "https://www.youtube.com/@anvilenergy"
  ]
}
```

**LocalBusiness (or SolarEnergyContractor):**
```json
{
  "@context": "https://schema.org",
  "@type": "SolarEnergyContractor",
  "name": "Anvil",
  "image": "https://solar.anvil.energy/svgs/logo.svg",
  "url": "https://solar.anvil.energy/",
  "telephone": "+91-1800-2020-001",
  "priceRange": "₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Anvil Energy HQ",
    "addressLocality": "Gurugram",
    "addressRegion": "Haryana",
    "postalCode": "122001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 28.4595,
    "longitude": 77.0266
  },
  "openingHours": "Mo-Sa 09:00-19:00",
  "areaServed": "India"
}
```

**FAQPage:** replace the 5 medical FAQs with 5 solar FAQs:
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "How much can I save by going solar?", "acceptedAnswer": { "@type": "Answer", "text": "Most homeowners see 70–90% reduction in their electricity bill. Use the Anvil savings calculator on our homepage for a personalised estimate based on your state, bill size, and roof type." }},
    { "@type": "Question", "name": "Does Anvil help with the PM Surya Ghar subsidy?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Anvil handles end-to-end paperwork for the PM Surya Ghar Muft Bijli Yojana, including DISCOM coordination and subsidy disbursal up to ₹78,000." }},
    { "@type": "Question", "name": "What is the difference between on-grid and hybrid systems?", "acceptedAnswer": { "@type": "Answer", "text": "On-grid systems feed excess solar back to the utility grid (net metering). Hybrid systems add battery backup so you retain power during outages. Anvil recommends the right fit based on your load and state policy." }},
    { "@type": "Question", "name": "How long does installation take?", "acceptedAnswer": { "@type": "Answer", "text": "A standard 3–5 kW residential system is installed in 2–3 days once materials are on site. End-to-end timeline including paperwork and net metering is typically 3–6 weeks." }},
    { "@type": "Question", "name": "What warranty do I get?", "acceptedAnswer": { "@type": "Answer", "text": "25-year linear power warranty on panels, 10-year warranty on inverter, and 5-year Anvil workmanship warranty on installation." }}
  ]
}
```

### 8. Inline loader splash screen
Find the `<div id="initial-loader">` markup near the bottom of `<body>` and change:
- Logo `<img src>` → `https://solar.anvil.energy/svgs/logo.svg`
- Tagline text → `Powering your rooftop with solar`
- Replace any `Monjoven` text with `Anvil`.

### 9. Inline critical CSS
In the `<style>` block, find any hardcoded colors (`#1A5276`, `#148F77`, etc.) used inside the loader / skip-link styles and update them to the Anvil palette from prompt 02.

### 10. Noscript + alt text
Any `<noscript>` fallback messages that mention Monjoven → Anvil.

## Guardrails
- **Do NOT touch** the GTM script tag or the GTM noscript iframe — leave its placeholder ID (`GTM-XXXXXXX`) as-is so the customer can swap it later.
- **Do NOT change** the `<div id="root"></div>` line.
- **Do NOT remove** the loader hide script.

## Validation checklist
- [ ] `grep -i "monjoven" public/index.html` returns zero results
- [ ] `grep "1A5276\|148F77" public/index.html` returns zero (all hex updated)
- [ ] Title, description, OG, Twitter, geo, and theme-color updated
- [ ] All three JSON-LD blocks validate as JSON (no trailing commas)
- [ ] Loader splash uses Anvil logo and tagline

## Next step
Proceed to `07-seo-config.md` to update `src/config/seo.js`.
