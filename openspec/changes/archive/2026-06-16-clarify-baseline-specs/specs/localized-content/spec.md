## ADDED Requirements

### Requirement: Language fallback is deterministic
The website SHALL determine the active language in this order: saved `localStorage.lang` when supported, exact browser language when supported, `zh-TW` for other Chinese browser languages, and `en` as the final fallback.

#### Scenario: Browser language is unsupported Chinese variant
- **WHEN** no supported language is saved and the browser reports a Chinese language that is not explicitly supported
- **THEN** the active language falls back to `zh-TW`

#### Scenario: Browser language is unsupported non-Chinese variant
- **WHEN** no supported language is saved and the browser reports an unsupported non-Chinese language
- **THEN** the active language falls back to `en`

## MODIFIED Requirements

### Requirement: Localized data fields use language objects
Data records SHALL support localized fields using objects keyed by `en`, `zh-TW`, and `zh-CN`. Renderers SHALL prefer the active language value, then the English value, then the first available object value.

#### Scenario: Product name is localized
- **WHEN** a product field is a language object and the active language exists
- **THEN** the renderer displays the active language value

#### Scenario: Active language value is missing
- **WHEN** a localized data field does not contain the active language
- **THEN** the renderer displays the English value when available
