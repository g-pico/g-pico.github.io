# AGENTS.md

## Project Overview

This repository is a pure frontend static website for g-Pico automation. The site helps customers understand available automation resources, supported hardware, service content, contact channels, donation options, and news updates.

There is no build step or frontend framework. Pages are standalone HTML files that load plain JavaScript files and assets directly from the repository.

## Runtime Model

- Static HTML/CSS/JavaScript only.
- Bootstrap 4 is loaded from CDN in the HTML pages.
- jQuery and Popper are also loaded from CDN where Bootstrap components need them.
- Local development can be done by opening HTML files directly, but a local static server is better for consistent asset loading.
- Existing helper servers:
  - `http_sever.py`
  - `http_sever_2.py`

## Important Files

- `index.html`
  - Main landing/home page.
  - Shows hero/about content, solution links, and tabbed tables for news, technical documents, and useful links.
  - Table data comes from `i18n.js` through `window.i18n.getTables()`.

- `i18n.js`
  - Central translation dictionary for shared labels and page text.
  - Provides `getCurrentLanguage()`, `setLanguage()`, `applyTranslations()`, `t()`, `tField()`, and `window.i18n.getTables()`.
  - Dispatches the `i18n:applied` event after translations are applied.
  - Stores selected language in `localStorage` under `lang`.

- `products.html`
  - Product/compatibility list page.
  - Renders product cards from `products.js`.
  - Currently separates products into MCU and expansion board groups with explicit ID arrays.

- `product_single.html`
  - Single product detail page.
  - Reads `?product={id}` from the URL and renders `products["product{id}"]`.
  - Supports image thumbnails, description expansion, and optional notes via `showNote`.

- `products.js`
  - Product data source.
  - Product fields such as `name`, `brief_description`, and `description` can be language objects keyed by `en`, `zh-TW`, and `zh-CN`.
  - Product images are repository-relative paths under `assets/`.

- `news_single.html`
  - Single news detail page.
  - Reads `?news={id}` from the URL and renders entries from `news.js`.

- `news.js`
  - News detail data source.
  - Uses the same language-object pattern for localized fields.

- `contact.html`
  - Contact and social links page.

- `donation.html`
  - Donation page with QR/payment-method switching and donation form UI.

- `buy_page.html`
  - Older / optional purchase page that still reads product data.

- `gui_service_full_i18n.html`
  - Service page for GUI design/development terms, workflow, pricing, and contact information.
  - Uses `ts_cs.js` for page-specific translation/content behavior.

- `ts_cs.js`
  - Large page-specific JavaScript for `gui_service_full_i18n.html`.

- `assets/`
  - Product images, PDFs, payment images, and general site images.

- `GUI_ref/`
  - Reference/about JSON and logos for GUI/service-related content.

- `temp/`
  - Temporary or backup copies. Do not edit these unless the task explicitly targets them.

## Development Guidelines

- Use `UTF-8 without BOM` for all HTML, JavaScript, Markdown, JSON, and text edits.
- Before saving files with Chinese text, confirm the editor is not using ANSI, Big5, UTF-16, or another legacy encoding.
- Keep the site static and dependency-free unless the user explicitly asks for a build system.
- Preserve the existing Bootstrap 4 style unless a broader redesign is requested.
- Prefer small, page-local changes over broad refactors.
- When adding shared text, add keys to `i18n.js` and use `data-i18n`.
- When adding product fields, use the existing language-object shape:

```js
{
  "en": "English text",
  "zh-TW": "Traditional Chinese text",
  "zh-CN": "Simplified Chinese text"
}
```

- When rendering dynamic product/news data, use the existing `tField()` helper pattern.
- Keep asset paths relative to the HTML file location, usually `assets/...`.
- For external links, use `target="_blank"` with `rel="noopener"` where possible.
- Avoid editing `temp/` backup files during normal development.

## Content Update Patterns

### Add or Update Home Page Tables

Edit `I18N_TABLES` in `i18n.js`.

- `newsData` controls rows in the News tab.
- `techDocsData` controls rows in the Technical Documents tab.
- `usefulLinksData` controls rows in the Useful Links tab.

### Add a Product

1. Add a `productN` object in `products.js`.
2. Add image/PDF assets under `assets/`.
3. Add the product ID to the appropriate array in `products.html`:
   - MCU list: `const mcus = [...]`
   - Expansion board list: `const expansions = [...]`
4. Verify `product_single.html?product=N`.

### Add a News Item

1. Add a `newsN` object in `news.js`.
2. Add a row to `I18N_TABLES.newsData` in `i18n.js` with `href: "news_single.html?news=N"`.
3. Verify `news_single.html?news=N`.

### Add Shared Navigation Text

Update `TRANSLATIONS` in `i18n.js` and apply `data-i18n` in each HTML page that needs the label.

## Known Risks / Technical Debt

- The site currently uses valid `UTF-8 without BOM`, and browser display is expected to be correct. Mojibake seen in terminals or tools usually means the file was decoded with the wrong code page, not that the file is damaged.
- Wrong editor settings can still corrupt Chinese text during future saves. Always preserve `UTF-8 without BOM` when editing localized content.
- Some pages duplicate navbar/footer markup. Navigation changes usually need to be applied to multiple HTML files.
- Inline scripts and styles are common. Keep edits scoped, but consider extracting shared code only if duplication becomes a real maintenance problem.
- `index.html` includes Bootstrap-related scripts more than once near the bottom. Be careful when changing script order.
- `news.js` contains an older news data block inside a large comment. Do not treat commented legacy data as active content.
- `applyTranslations()` uses `innerHTML`, which allows HTML translations but requires careful handling of any user-provided or untrusted text.
- The Git repository may trigger a `safe.directory` warning on this machine. Do not change global Git config unless the user approves or asks for Git operations.

## Verification Checklist

For normal frontend changes:

1. Open the edited page through a local static server or directly in the browser.
2. Check desktop and mobile widths.
3. Switch languages with `#langSelect`.
4. Check browser console for JavaScript errors.
5. For product changes, test both `products.html` and `product_single.html?product=N`.
6. For news changes, test both `index.html` news table and `news_single.html?news=N`.
7. Confirm images and PDFs load with correct relative paths.

## Project Intent

The site should make g-Pico automation approachable for customers who need practical automation help. Prioritize clarity, trust, and direct access to resources:

- What g-Pico automation supports.
- Which hardware and expansion boards are compatible.
- What services are available, especially GUI / automation support.
- How customers can contact the team.
- Where customers can find news, documents, communities, and downloads.
