# localized-content Specification

## Purpose
TBD - created by archiving change establish-project-baseline. Update Purpose after archive.
## Requirements
### Requirement: Language selection is persistent
The website SHALL persist the selected language in browser local storage using the `lang` key.

#### Scenario: Visitor changes language
- **WHEN** a visitor chooses a language from `#langSelect`
- **THEN** the selected language is stored and reused on later page loads

### Requirement: Translatable elements use data attributes
The website SHALL translate elements marked with `data-i18n` using the active language dictionary.

#### Scenario: Translation pass runs
- **WHEN** translations are applied to the document
- **THEN** elements with matching `data-i18n` keys display the localized value

### Requirement: Attribute translations are supported
The website SHALL support translating element attributes using `data-i18n-attr`.

#### Scenario: Placeholder is localized
- **WHEN** an input has `data-i18n` and `data-i18n-attr="placeholder"`
- **THEN** the placeholder attribute is set from the active language dictionary

### Requirement: Localized data fields use language objects
Data records SHALL support localized fields using objects keyed by `en`, `zh-TW`, and `zh-CN`. Renderers SHALL prefer the active language value, then the English value, then the first available object value.

#### Scenario: Product name is localized
- **WHEN** a product field is a language object and the active language exists
- **THEN** the renderer displays the active language value

#### Scenario: Active language value is missing
- **WHEN** a localized data field does not contain the active language
- **THEN** the renderer displays the English value when available

### Requirement: Translation application emits an event
The translation system SHALL dispatch `i18n:applied` after applying translations.

#### Scenario: Page-specific renderer listens for translation changes
- **WHEN** `applyTranslations()` completes
- **THEN** page-specific code can re-render dynamic content in response to `i18n:applied`

### Requirement: Language fallback is deterministic
The website SHALL determine the active language in this order: saved `localStorage.lang` when supported, exact browser language when supported, `zh-TW` for other Chinese browser languages, and `en` as the final fallback.

#### Scenario: Browser language is unsupported Chinese variant
- **WHEN** no supported language is saved and the browser reports a Chinese language that is not explicitly supported
- **THEN** the active language falls back to `zh-TW`

#### Scenario: Browser language is unsupported non-Chinese variant
- **WHEN** no supported language is saved and the browser reports an unsupported non-Chinese language
- **THEN** the active language falls back to `en`

