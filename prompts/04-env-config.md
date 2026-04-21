# 04 — Environment Variables (`.env` + `.env.example`)

## Objective
Replace every Monjoven-specific environment variable with Anvil values. This drives admin credentials, contact info, social links, and name-based copy across the app without touching any component code.

## Files to modify
- `/.env`
- `/.env.example`

## Target values (Anvil)
- **Brand name:** `Anvil`
- **Full brand name:** `Anvil – Home & Business Solar Solutions`
- **Location:** `Gurugram, Haryana` (Anvil's operating base in India — update if a different HQ is known)
- **Toll-free:** `1800 2020 001`
- **Sales phone (display):** `+91 1800 2020 001`
- **WhatsApp:** `+911800 2020 001` (WhatsApp accepts toll-free; keep original format `9181956562` as fallback only if WhatsApp toll-free fails — if unsure, use a placeholder `REACT_APP_WHATSAPP_NUMBER="+91XXXXXXXXXX"`)
- **Email:** `hello@anvil.energy`
- **Support email:** `support@anvil.energy`
- **Website:** `https://solar.anvil.energy`
- **Office address:** `Anvil Energy, Gurugram, Haryana, India`

## Implementation steps

### 1. Rewrite `/.env`
Overwrite the file with:

```env
# ============================================
# Environment Variables - Anvil
# ============================================

# Application Configuration
REACT_APP_NAME="Anvil"
REACT_APP_VERSION=1.0.0
REACT_APP_ENVIRONMENT=development

# Project Information
REACT_APP_PROJECT_NAME="Anvil – Home & Business Solar Solutions"
REACT_APP_DEVELOPER_NAME="Anvil Energy"
REACT_APP_PROJECT_LOCATION="Gurugram, Haryana"

# Admin Panel Credentials
REACT_APP_ADMIN_USERNAME="anvil"
REACT_APP_ADMIN_PASSWORD="anvil@2026solar"

# Contact Information
REACT_APP_SALES_PHONE="+91 1800 2020 001"
REACT_APP_WHATSAPP_NUMBER="+918002020001"
REACT_APP_SALES_EMAIL="hello@anvil.energy"
REACT_APP_SUPPORT_EMAIL="support@anvil.energy"

# Office Address
REACT_APP_OFFICE_ADDRESS="Anvil Energy, Gurugram, Haryana, India"

# Social Media Links (optional)
REACT_APP_FACEBOOK_URL="https://www.facebook.com/anvilenergy"
REACT_APP_INSTAGRAM_URL="https://www.instagram.com/anvil.energy"
REACT_APP_YOUTUBE_URL="https://www.youtube.com/@anvilenergy"
REACT_APP_LINKEDIN_URL="https://www.linkedin.com/company/anvil-energy"

# Google Maps Configuration
REACT_APP_GOOGLE_MAPS_API_KEY=""
REACT_APP_PROJECT_LATITUDE="28.4595"
REACT_APP_PROJECT_LONGITUDE="77.0266"

# Analytics & Tracking
REACT_APP_GTM_ID=""
REACT_APP_GA4_MEASUREMENT_ID=""
REACT_APP_GOOGLE_ADS_ID=""
REACT_APP_GOOGLE_ADS_CONVERSION_LABEL=""
REACT_APP_GOOGLE_ADS_CONVERSION_VALUE=""
REACT_APP_GOOGLE_ADS_ENHANCED_CONVERSIONS=false
REACT_APP_META_PIXEL_ID=""
REACT_APP_FB_PIXEL_ID=""
REACT_APP_META_CAPI_ENDPOINT="/api/meta-capi.php"
REACT_APP_META_TEST_EVENT_CODE=""
REACT_APP_ENABLE_CONSENT_MODE=false

# API Endpoints
REACT_APP_API_BASE_URL=""
REACT_APP_LEAD_SUBMISSION_ENDPOINT="/api/lead-handler.php"
REACT_APP_LEADS_API_URL="/api/leads.php"
REACT_APP_LEADS_ADMIN_KEY="skdfjsdfweiormcnzxmzdlkfjds"

# Hero Video (set URL to enable hero background video)
REACT_APP_HERO_VIDEO_URL=""

# Feature Flags
REACT_APP_ENABLE_ANALYTICS=false
REACT_APP_ENABLE_CHAT_WIDGET=false
REACT_APP_ENABLE_EMI_CALCULATOR=true
REACT_APP_ENABLE_VIRTUAL_TOUR=false

# Performance Settings
REACT_APP_IMAGE_CDN_URL=""
REACT_APP_LAZY_LOAD_OFFSET=100

# Admin Panel Pabbly Webhook (retained — tied to customer's Pabbly workflow)
REACT_APP_ADMIN_PABBLY_WEBHOOK_URL="https://connect.pabbly.com/webhook-listener/webhook/IjU3NjIwNTZkMDYzZTA0Mzc1MjZmNTUzZCI_3D_pc/IjU3NjcwNTZmMDYzZjA0Mzc1MjZhNTUzMDUxMzMi_pc"

# Build Information
REACT_APP_BUILD_DATE=""
REACT_APP_BUILD_NUMBER=""
```

### 2. Rewrite `/.env.example`
Mirror `.env` but with placeholder values so new deployments can copy it:

- Admin password: `REACT_APP_ADMIN_PASSWORD="changeme"`
- Pabbly webhook: blank string
- Contact details: blank strings
- All analytics IDs: blank strings

## Guardrails
- **Do not** rename any variable keys — React components rely on the exact `REACT_APP_*` names.
- **Do not** delete the `REACT_APP_ADMIN_PABBLY_WEBHOOK_URL` line (admin relies on it).
- **Do not** delete `REACT_APP_LEADS_ADMIN_KEY` — it secures `/api/leads.php`.

## Validation checklist
- [ ] Every variable key that existed before still exists (same names)
- [ ] No `monjoven` string remains in `.env` or `.env.example`
- [ ] `REACT_APP_NAME` equals `Anvil`
- [ ] Admin credentials have been updated
- [ ] Pabbly webhook URL is retained (unchanged)

## Next step
Proceed to `05-logo-assets.md` to replace logo URLs and hero imagery.
