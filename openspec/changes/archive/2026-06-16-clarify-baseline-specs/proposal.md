## Why

The initial baseline is valid, but several requirements are too broad or leave verification boundaries implicit. Clarifying them now makes future website changes easier to review against the current static-site contract.

## What Changes

- Clarify which pages are covered by the shared navigation baseline.
- Add explicit language fallback behavior for the i18n baseline.
- Clarify product detail rendering expectations, including thumbnails, description expansion, and note visibility.
- Tighten external resource link requirements so they are verifiable.
- Correct the donation baseline to reflect that the amount/email submission form is currently retained but disabled in markup.
- Clarify GUI service page localization scope.
- No runtime website behavior changes are included.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `static-site-shell`: Clarify navigation coverage and static page shell expectations.
- `localized-content`: Add explicit language fallback behavior.
- `product-catalog`: Clarify product detail page rendering requirements.
- `news-and-resources`: Clarify external link behavior for resource tables.
- `contact-and-donation`: Clarify current donation QR selector behavior and disabled form state.
- `gui-service-info`: Clarify localized GUI service page content scope.

## Impact

- Adds OpenSpec deltas under `openspec/changes/clarify-baseline-specs/`.
- Does not modify HTML, JavaScript, assets, or runtime behavior.
- Intended to be archived after review to update `openspec/specs/`.
