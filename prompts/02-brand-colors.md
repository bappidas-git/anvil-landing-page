# 02 — Brand Color System (Anvil Palette)

## Objective
Replace the Monjoven teal/navy color palette with Anvil's solar-energy palette across all design tokens. Anvil's identity blends an "anvil" (forged iron / deep navy) feel with sun-gold accents for solar energy.

## Anvil palette (target)
| Token | Hex | Purpose |
|---|---|---|
| Anvil Deep Navy | `#0A1F3D` | Primary brand, headings |
| Anvil Navy | `#14315B` | Primary alt, headers |
| Anvil Navy Light | `#1E4A85` | Hover, light sections |
| Anvil Navy Lighter | `#3B6FB5` | Accent text, outlines |
| Solar Gold | `#FFB800` | Secondary / accents / badges |
| Solar Gold Light | `#FFC939` | Gradient stops, hover |
| Solar Gold Dark | `#E6A500` | Pressed state |
| Eco Green | `#10B981` | Success, savings badges |
| Eco Green Light | `#34D399` | Success hover |
| Sunrise Orange | `#FF6B35` | CTAs only (retained for conversion) |
| Sunrise Orange Light | `#FF8C5A` | CTA hover |
| Sunrise Orange Dark | `#E85A20` | CTA pressed |
| Soft Gold BG | `#FFF8E1` | Card backgrounds |
| Soft Navy BG | `#EEF4FB` | Section backgrounds |

## Files to modify
- `src/styles/variables.css`
- `src/theme/muiTheme.js`
- Any `.module.css` files that reference old hex values literally (search `#1A5276`, `#148F77`, `#1ABC9C`, `#2980B9`)

## Implementation steps

### 1. Update `src/styles/variables.css`
Replace the values in the `:root` block while **keeping every variable name identical** (so downstream CSS keeps working):

```css
/* ========== Primary Colors ========== */
--primary-dark: #0A1F3D;
--primary-dark-alt: #14315B;
--primary-dark-light: #1E4A85;
--primary-dark-lighter: #3B6FB5;

/* ========== Accent Colors - Solar Gold (was "gold/teal") ========== */
--accent-gold: #FFB800;
--accent-gold-light: #FFC939;
--accent-gold-dark: #E6A500;
--accent-gold-hover: #F5B000;
--accent-gold-gradient: linear-gradient(135deg, #FFB800 0%, #FFC939 100%);
--accent-gold-gradient-reverse: linear-gradient(135deg, #FFC939 0%, #FFB800 100%);
--accent-gold-gradient-horizontal: linear-gradient(90deg, #FFB800 0%, #FFC939 50%, #FFB800 100%);

/* ========== Accent Orange - CTAs Only (retained) ========== */
--accent-orange: #FF6B35;
--accent-orange-light: #FF8C5A;
--accent-orange-dark: #E85A20;
--accent-orange-gradient: linear-gradient(135deg, #FF6B35 0%, #FF8C5A 100%);
--accent-orange-gradient-reverse: linear-gradient(135deg, #FF8C5A 0%, #FF6B35 100%);
```

Also update:
```css
--icon-gold: #FFB800;
--icon-gold-bg: rgba(255, 184, 0, 0.15);
--icon-teal: #10B981;               /* repurpose teal → eco green */
--icon-teal-bg: rgba(16, 185, 129, 0.15);
--icon-green: #10B981;
--icon-green-bg: rgba(16, 185, 129, 0.15);

--card-yellow: #FFF8E1;              /* soft gold card */
--card-green: #E8F5F0;               /* soft eco green */
--card-blue: #EEF4FB;                /* soft navy */
--card-gold-gradient: linear-gradient(135deg, #FFB800 0%, #E6A500 100%);
--card-dark-gradient: linear-gradient(135deg, #0A1F3D 0%, #1E4A85 100%);

--shadow-gold: rgba(255, 184, 0, 0.3);
--shadow-card: 0 2px 12px rgba(10, 31, 61, 0.08);
--shadow-card-hover: 0 8px 30px rgba(10, 31, 61, 0.12);

--overlay-dark: rgba(10, 31, 61, 0.7);
--overlay-darker: rgba(10, 31, 61, 0.85);
--overlay-gradient: linear-gradient(180deg, rgba(10, 31, 61, 0.9) 0%, rgba(10, 31, 61, 0.4) 100%);
--overlay-gradient-reverse: linear-gradient(0deg, rgba(10, 31, 61, 0.9) 0%, rgba(10, 31, 61, 0.2) 100%);
```

Also the Admin Panel block:
```css
--admin-primary: #0A1F3D;
--admin-primary-light: #1E4A85;
--admin-primary-dark: #061330;
--admin-accent: #FFB800;
--admin-accent-light: #FFC939;
--admin-gradient: linear-gradient(135deg, #0A1F3D 0%, #1E4A85 100%);
--admin-gradient-accent: linear-gradient(135deg, #0A1F3D 0%, #FFB800 100%);
```

### 2. Update `src/theme/muiTheme.js`
Find every occurrence of `#1A5276`, `#148F77`, `#1ABC9C`, `#2980B9`, `#0E6655`, `#17A589` and replace:
- `#1A5276` → `#0A1F3D`
- `#2980B9` → `#1E4A85`
- `#148F77` → `#FFB800`
- `#1ABC9C` → `#FFC939`
- `#0E6655` → `#E6A500`
- `#17A589` → `#F5B000`
- `rgba(20, 143, 119, …)` → `rgba(255, 184, 0, …)`
- `rgba(26, 82, 118, …)` → `rgba(10, 31, 61, …)`

Leave all orange values (`#FF6B35`, `#FF8C5A`) untouched — they remain the CTA accent.

### 3. Scan module CSS files
Run a search for the OLD hex values across `src/**/*.module.css`:
- `#1A5276`, `#2980B9`, `#148F77`, `#1ABC9C`, `#0E6655`, `#17A589`

Replace each with the mapping above. Hex values that come from CSS vars (e.g. `var(--primary-dark)`) need NO change — only literal hex.

## Validation checklist
- [ ] `grep -r "#1A5276" src/` returns no matches
- [ ] `grep -r "#148F77" src/` returns no matches
- [ ] `grep -r "#1ABC9C" src/` returns no matches
- [ ] All CSS variable NAMES remain identical (nothing like `--primary-dark` was renamed)
- [ ] `src/theme/muiTheme.js` compiles (no stray commas or syntax errors)
- [ ] Orange CTA tokens (`#FF6B35`, `#FF8C5A`) are unchanged

## Next step
Proceed to `03-typography.md` to align fonts with the Anvil brand.
