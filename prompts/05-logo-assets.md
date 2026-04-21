# 05 — Logo & Image Assets

## Objective
Replace every Monjoven-branded image URL (logo, hero art, doctor portrait, clinic interiors, map pin, og-image) with Anvil-branded imagery. We will use the Anvil logo from the public site and generic Unsplash/CDN imagery that matches the solar-energy theme.

## Asset list & replacement map

| Slot | Old URL (examples) | New URL |
|---|---|---|
| Primary logo (color on light) | `https://www.monjoven.com/assets/img/logo.png` | `https://solar.anvil.energy/svgs/logo.svg` |
| Logo on dark / white variant | `https://res.cloudinary.com/dn9gyaiik/image/upload/v1775887476/MONJOVEN-LOGO_hqpdnc.png` | `https://solar.anvil.energy/svgs/logo-white.svg` *(fallback: use the same `/svgs/logo.svg` with CSS filter: brightness(0) invert(1))* |
| Hero image — desktop | Cloudinary Monjoven URL | `https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&q=80&auto=format&fit=crop` *(rooftop solar panels on modern home)* |
| Hero image — mobile | Cloudinary Monjoven URL | `https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80&auto=format&fit=crop` *(solar panels vertical crop)* |
| About / "team" image (was Dr. Porag Neog) | Cloudinary URL | `https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80&auto=format&fit=crop` *(solar installer on roof)* |
| Stats / clinic interior images | Cloudinary URLs | `https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=1200&q=80&auto=format&fit=crop` *(residential solar array)* |
| Location map image | Cloudinary map of Guwahati | `https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1200&q=80&auto=format&fit=crop` *(generic solar field; replace with Google Static Maps when API key is added)* |
| OG image (social share) | `https://www.monjoven.com/og-image.jpg` | `https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&h=630&q=80&auto=format&fit=crop` |
| Favicon | `public/favicon.png` | `public/favicon.png` *(leave file path; replace bytes — if that is not possible in-tree, use Anvil's favicon URL in `<link rel="icon">` inside `public/index.html`)* |

> **Note:** If any Unsplash URL returns 404 in production, replace with an equivalent CDN image (e.g., Pexels, Pixabay). The criteria: rooftop residential solar, installer at work, or sun-over-panels imagery. No branded imagery from third-party solar companies.

## Files to modify
- `src/components/common/Header/Header.jsx`
- `src/components/common/Footer/Footer.jsx`
- `src/components/common/MobileDrawer/MobileDrawer.jsx`
- `src/components/sections/HeroSection/HeroSection.jsx`
- `src/components/sections/AboutSection/AboutSection.jsx`
- `src/components/sections/LocationSection/LocationSection.jsx` (map image)
- `src/data/locationData.js` (mapUrl)
- `src/data/serviceDetailsData.js` (any image URLs)
- `public/index.html` (splash-screen logo, og:image, twitter:image, favicon link, all JSON-LD `"logo"` and `"image"` fields)
- `src/config/seo.js` (ogImage, logo field inside schemas)

## Implementation steps

### 1. Global search & replace — logo URL
Replace **every** occurrence of:
- `https://www.monjoven.com/assets/img/logo.png` → `https://solar.anvil.energy/svgs/logo.svg`
- `https://res.cloudinary.com/dn9gyaiik/image/upload/v1775887476/MONJOVEN-LOGO_hqpdnc.png` → `https://solar.anvil.energy/svgs/logo.svg`

### 2. Header `logoWhite` variant
In `src/components/common/Header/Header.jsx`, the component renders one of two logos depending on scroll state or theme. Replace both so the dark-background variant uses the same Anvil logo but with a filter, or use a pre-inverted URL:

```jsx
const LOGO_URL = "https://solar.anvil.energy/svgs/logo.svg";
const LOGO_WHITE_URL = "https://solar.anvil.energy/svgs/logo.svg"; // same file — tint via CSS if needed
```

If the header applies `filter: brightness(0) invert(1)` via className, keep that logic intact.

### 3. Hero images
In `src/components/sections/HeroSection/HeroSection.jsx`, find the two constants referencing desktop / mobile hero images and swap to the Unsplash URLs above.

### 4. About section image
In `src/components/sections/AboutSection/AboutSection.jsx`, replace the "Dr. Porag Neog" portrait URL with the solar-installer image URL above. The alt text (to be changed in a later prompt) should eventually read `"Anvil certified solar installer on a residential rooftop"`.

### 5. Location map image
In `src/data/locationData.js`, set:
```js
mapUrl: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1200&q=80&auto=format&fit=crop",
```
*(This is a temporary placeholder — a later prompt will replace it with a Google Static Maps URL once an API key is provided.)*

### 6. `public/index.html`
- Update `<link rel="apple-touch-icon">` and `<link rel="icon">` hrefs if they reference `monjoven.com`.
- Update the `<img>` inside the loader splash screen to point to the Anvil logo.
- Update `og:image`, `twitter:image`, and all JSON-LD `"logo"` / `"image"` URLs (a later prompt drills into index.html; here, just handle images — leave copy/text untouched).

### 7. `src/config/seo.js`
Update `ogImage`, `logo`, and any Organization/LocalBusiness schema image fields with the new URLs.

## Validation checklist
- [ ] `grep -r "monjoven.com" .` returns no image URLs
- [ ] `grep -r "dn9gyaiik" src/` returns no matches (Cloudinary account for Monjoven)
- [ ] Header, Footer, MobileDrawer all render the same Anvil logo URL
- [ ] Hero desktop + mobile images updated
- [ ] OG image URL updated in `seo.js` and `public/index.html`
- [ ] No broken `src=""` attributes introduced

## Next step
Proceed to `06-public-index-html.md` to rewrite index.html meta tags and loader copy.
