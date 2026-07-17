## MODIFIED Requirements

### Requirement: GUI service page supports localized labels
The GUI service page SHALL support localized display for configured labels and content blocks through `data-i18n` attributes and the page-specific `ts_cs.js` script.

#### Scenario: Visitor changes GUI service page language
- **WHEN** a visitor selects a supported language
- **THEN** visible labels and configured content controlled by the page script update to the selected language
