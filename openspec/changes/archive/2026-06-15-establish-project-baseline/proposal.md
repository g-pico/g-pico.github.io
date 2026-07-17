## Why

The repository already contains a working static website, but its current behavior is not captured as OpenSpec requirements. Establishing a baseline makes future website changes reviewable as explicit spec deltas instead of informal edits.

## What Changes

- Add baseline specifications for the existing static website capabilities.
- Document the current page structure, localized content model, product catalog, news/resource tables, contact and donation flows, and GUI service information page.
- Add implementation tasks that mark the baseline documentation and validation work as trackable.
- No runtime behavior is changed by this proposal.

## Capabilities

### New Capabilities

- `static-site-shell`: Shared static-site structure, navigation, CDN runtime assumptions, and asset loading.
- `localized-content`: Language selection, translation application, and localized data-field behavior.
- `product-catalog`: Product listing and product detail behavior based on `products.js`.
- `news-and-resources`: Home page news, technical documents, useful links, and news detail behavior.
- `contact-and-donation`: Contact channel presentation and donation payment-method UI.
- `gui-service-info`: GUI service information, service scope, workflow, pricing, terms, and contact details.

### Modified Capabilities

- None. This is the first OpenSpec baseline for the repository.

## Impact

- Adds OpenSpec documentation under `openspec/changes/establish-project-baseline/`.
- Adds no application code changes.
- Future changes can use these specs as the baseline contract before implementation.
