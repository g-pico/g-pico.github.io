# gui-service-info Specification

## Purpose
TBD - created by archiving change establish-project-baseline. Update Purpose after archive.
## Requirements
### Requirement: GUI service page presents service overview
The GUI service page SHALL present the g-Pico GUI design service overview, service scope, use cases, and requirement preparation guidance.

#### Scenario: Visitor opens GUI service page
- **WHEN** `gui_service_full_i18n.html` loads
- **THEN** the visitor can review the service overview and preparation guidance

### Requirement: GUI service page presents workflow and pricing
The GUI service page SHALL present project workflow, client checklist, pricing information, and GUI style examples.

#### Scenario: Visitor reviews service terms
- **WHEN** a visitor navigates through the GUI service page table of contents
- **THEN** the visitor can access workflow, checklist, pricing, and style sections

### Requirement: GUI service page presents cooperation terms
The GUI service page SHALL present cooperation terms including evaluation, quote and deposit, change handling, termination, progress updates, acceptance, and maintenance.

#### Scenario: Visitor reviews cooperation details
- **WHEN** a visitor opens the cooperation terms section
- **THEN** the page displays the configured term details

### Requirement: GUI service page supports localized labels
The GUI service page SHALL support localized display for configured labels and content blocks through `data-i18n` attributes and the page-specific `ts_cs.js` script.

#### Scenario: Visitor changes GUI service page language
- **WHEN** a visitor selects a supported language
- **THEN** visible labels and configured content controlled by the page script update to the selected language

