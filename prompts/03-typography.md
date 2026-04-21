# 03 — Typography System

## Objective
Align typography with Anvil's clean, modern brand feel. Anvil's site uses a neutral geometric sans-serif. We will stay with a high-quality free Google Font stack that looks close to the Anvil marketing look and keep fluid sizing as-is.

## Font choice
- **Headings:** `Plus Jakarta Sans` (geometric humanist, close to Anvil's header feel). Fallback: `Poppins`, `Inter`, sans-serif.
- **Body:** `Inter` (retained — excellent legibility for long-form).
- **Mono:** unchanged.

## Files to modify
- `public/index.html` — add the Google Fonts `<link>` preconnect + stylesheet
- `src/styles/variables.css` — update `--font-heading`
- `src/theme/muiTheme.js` — update the `typography.fontFamily` heading definitions
- `src/styles/global.css` (or equivalent, if present) — confirm heading font stack

## Implementation steps

### 1. `public/index.html`
Inside `<head>`, locate the existing Google Fonts section (it currently loads Inter + Poppins). Replace/augment with:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap">
```

Remove the old Poppins `<link>` if it is present and not re-referenced elsewhere.

### 2. `src/styles/variables.css`
Update the typography section:

```css
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
--font-heading: 'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif;
--font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
```

Do not change any `--fs-*` fluid sizes — they are intentional.

### 3. `src/theme/muiTheme.js`
Find the `typography` block and change:

```js
typography: {
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  h1: { fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif", /* ...keep rest */ },
  h2: { fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif", /* ... */ },
  h3: { fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif", /* ... */ },
  h4: { fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif", /* ... */ },
  h5: { fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif", /* ... */ },
  h6: { fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif", /* ... */ },
  // ...
}
```

Keep all weights / sizes / line-heights as-is.

### 4. Global styles sanity check
If `src/index.css`, `src/App.css`, or `src/styles/global.css` hard-codes `'Poppins'` as a font-family anywhere, update the value to `var(--font-heading)`.

## Validation checklist
- [ ] New Google Fonts link loads Plus Jakarta Sans + Inter (open Network tab)
- [ ] Headings visually use Plus Jakarta Sans in a local dev server (run later)
- [ ] Body text still uses Inter
- [ ] `grep -r "Poppins" src/` only returns fallback references (or zero)
- [ ] No font size / weight tokens were changed

## Next step
Proceed to `04-env-config.md` to update environment variables.
