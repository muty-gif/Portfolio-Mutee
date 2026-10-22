# AGENTS.md

Static single-page portfolio (plain HTML/CSS/JS). No frameworks, no package manager, no build, test, or lint tooling exists — don't invent or look for any.

## Running / verifying

- Serve locally: `python3 -m http.server 8000` (open http://localhost:8000). Opening `index.html` directly in a browser also works.
- The only verification available is previewing the page in both languages (EN/ES) and checking browser console for errors.

## Deployment

- GitHub Pages deploys every push to `main` automatically. There is no CI, no review gate — treat `main` as live production.

## i18n architecture (the main trap)

Text is NOT edited in one place. A visible string change requires touching all three spots:

1. `index.html` — the default inline English text, plus:
   - `data-i18n="key"` (textContent), `data-i18n-alt` (img alt), `data-i18n-aria-label` (aria-label)
2. `script.js` → `translations.en[key]`
3. `script.js` → `translations.es[key]`

Details:

- Missing/empty dictionary values silently fall back to English (`applyLanguage` only overwrites when the value is truthy) — no error is thrown, so verify the Spanish text by actually switching language.
- `<title>` and `<meta name="description">` are swapped at runtime via the `"document.title"` and `"document.description"` dictionary keys; update both the static `<head>` tags and both dictionaries.
- Some elements are intentionally not translated (e.g. the technical-skills list, tech tags in `.tech`, project index numbers, the `EN`/`ES` button labels). Follow the existing pattern; don't add keys for them.

## Both READMEs

`README.md` (English) and `README.es.md` (Spanish) are parallel mirrors. Feature, screenshot, or wording changes should update both.

## Projects / screenshots

- Screenshots live in `images/`; project gallery images are 1920×935 and use explicit `width`/`height` attributes.
- The lightbox builds its gallery from the `<ul class="thumbs" data-thumbs="<name>">` images and opens from `[data-shot="<name>"]`; a new screenshot must be added as a thumb there (the main image swaps to the selected thumb's src).
- Project card descriptions quote the linked repos' stats (test counts, frameworks) — keep `index.html`, both `script.js` dictionaries, and both READMEs consistent when updating them.
