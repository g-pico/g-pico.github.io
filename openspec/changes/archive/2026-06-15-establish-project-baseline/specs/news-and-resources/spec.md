## ADDED Requirements

### Requirement: Home page tables render from structured data
The home page SHALL render news, technical document, and useful link tables from structured data provided by `i18n.js`.

#### Scenario: Visitor opens the home page
- **WHEN** `index.html` loads
- **THEN** the news tab renders rows from `window.i18n.getTables()`

### Requirement: Home page tables support tab switching
The home page SHALL allow visitors to switch between news, technical documents, and useful links without leaving the page.

#### Scenario: Visitor selects technical documents
- **WHEN** a visitor selects the technical documents tab
- **THEN** the technical documents table becomes the active visible table

### Requirement: Home page tables support pagination
The home page SHALL paginate table rows using the configured rows-per-page value.

#### Scenario: Table has more rows than one page
- **WHEN** a table has more rows than the page size
- **THEN** pagination controls allow the visitor to select another page

### Requirement: News detail pages render by query parameter
The news detail page SHALL use the `news` query parameter to render the matching entry from `news.js`.

#### Scenario: Visitor opens a news detail URL
- **WHEN** a visitor opens `news_single.html?news=1`
- **THEN** the page renders the matching news title, subtitle, content, and image

### Requirement: Resource links open external references safely
External document and useful links SHALL open in a new tab with opener isolation where implemented.

#### Scenario: Visitor opens an external resource
- **WHEN** a visitor clicks an external technical document or useful link
- **THEN** the link opens in a new tab using the configured link attributes
