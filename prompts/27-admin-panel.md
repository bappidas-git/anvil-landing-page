# 27 — Admin Panel Rebranding (content/strings only)

## Objective
Replace Monjoven-branded strings in the admin panel with Anvil values — brand name, welcome copy, header logo, dashboard title. **Do NOT touch** auth, routing, lead service, lead CRUD, or any localStorage/server key.

## Files to modify
- `src/admin/components/AdminLogin.jsx`
- `src/admin/components/AdminLayout.jsx`
- `src/admin/components/AdminTopbar.jsx`
- `src/admin/pages/Dashboard.jsx`
- `src/admin/pages/LeadManagement.jsx`
- `src/admin/pages/LeadDetail.jsx`
- `src/admin/pages/Guideline.jsx` (and its `guidelineContent/*` children)
- `src/admin/README.md`

## ⚠️ STRICT NO-TOUCH
- `src/admin/context/AdminAuthContext.jsx`
- `src/admin/utils/adminAuth.js`
- `src/admin/utils/leadService.js`
- `src/admin/utils/adminConfig.js`
- `src/admin/utils/googleAdsExport.js`
- Any localStorage key name (e.g., `lp_submitted_leads`, `lp_admin_session`) — these must persist across deploys for existing admins
- Any server endpoint paths (`/api/leads.php`, etc.)
- Any env var lookups

## Implementation steps

### 1. AdminLogin
- Replace the header / logo with the Anvil logo.
- Update the brand text to `Anvil Admin`.
- Update the welcome copy:
  ```jsx
  <h1>Anvil Admin</h1>
  <p>Sign in to manage solar leads.</p>
  ```
- Do NOT change the username/password form fields or submit handler.

### 2. AdminLayout / AdminTopbar
- Replace the logo image with Anvil's.
- Update the brand display (e.g. `Anvil Admin` or `Anvil · Lead Manager`).
- Sidebar nav labels can stay as-is (`Dashboard`, `Leads`, `Guidelines`, etc.) — they are already product-agnostic.

### 3. Dashboard
- Header: `Welcome back to Anvil Admin`.
- Subheading: `Here's your solar lead pipeline.`
- Any default "service interest" labels that appear in charts / summary cards: update to reflect the options from prompt 19 (`On-Grid Solar`, `Hybrid Solar`, `Commercial Solar`, `Subsidy Assistance`, `Financing`, `Site Survey`, `Not Sure`).

### 4. LeadManagement / LeadDetail
- Column headers: keep as-is (`Name`, `Mobile`, `Email`, `Interest`, `Status`, `Date`).
- Status option labels: keep as-is (`new`, `contacted`, `consultation_booked`, `procedure_scheduled`, `completed`, `not_interested`) — they're stored values and do NOT need renaming to avoid breaking existing data. Only change the **display label** mapping if one exists:
  - `consultation_booked` → `"Saathi Call Booked"`
  - `procedure_scheduled` → `"Site Survey Scheduled"`
  - `completed` → `"Solar Installed"`
  - `not_interested` → `"Not Interested"`
  - `new` → `"New Lead"`
  - `contacted` → `"Saathi Called"`
- If a display-label map exists (e.g. `const STATUS_LABELS = { … }`), update the values only; leave the keys alone.

### 5. Guideline page + children
- Swap brand-specific phrasing in setup guides: every reference to `Monjoven`, `hair transplant`, `clinic`, `Dr. Porag Neog` → Anvil-specific wording.
- Keep every webhook / pixel / gtag / Pabbly setup step — they're product-agnostic.

### 6. src/admin/README.md
- Replace Monjoven-specific admin onboarding language with Anvil equivalents.
- Retain all env-var instructions verbatim (keys unchanged).

### 7. Visual polish
- Any hardcoded `#1A5276` / `#148F77` → use `var(--admin-primary)` / `var(--admin-accent)` (already repointed in prompt 02).
- Avatar initial / branding accent color → `var(--accent-gold)`.

## Guardrails
- DO NOT rename admin route paths
- DO NOT rename localStorage keys
- DO NOT change any lead status string value (only display labels)
- DO NOT remove or rename any util function

## Validation checklist
- [ ] Login page shows Anvil branding
- [ ] Dashboard greeting uses Anvil
- [ ] Lead status display labels reflect solar flow
- [ ] Stored status values unchanged
- [ ] Auth, CRUD, export, and Pabbly admin webhook all still work (verify later)

## Next step
Proceed to `28-documentation.md` to update the docs folder.
