## ADDED Requirements

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
Data records SHALL support localized fields using objects keyed by `en`, `zh-TW`, and `zh-CN`, with English fallback behavior.

#### Scenario: Product name is localized
- **WHEN** a product field is a language object and the active language exists
- **THEN** the renderer displays the active language value

### Requirement: Translation application emits an event
The translation system SHALL dispatch `i18n:applied` after applying translations.

#### Scenario: Page-specific renderer listens for translation changes
- **WHEN** `applyTranslations()` completes
- **THEN** page-specific code can re-render dynamic content in response to `i18n:applied`
