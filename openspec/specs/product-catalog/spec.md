# product-catalog Specification

## Purpose
TBD - created by archiving change establish-project-baseline. Update Purpose after archive.
## Requirements
### Requirement: Product listing renders configured product groups
The products page SHALL render product cards from `products.js` using configured product ID groups for MCUs and expansion boards.

#### Scenario: Visitor opens products page
- **WHEN** `products.html` loads
- **THEN** it renders the configured MCU products and expansion board products into separate sections

### Requirement: Product cards link to detail pages
Each product card SHALL link to `product_single.html?product={id}` for the corresponding product ID.

#### Scenario: Visitor clicks a product card
- **WHEN** a visitor clicks a product card image or details button
- **THEN** the browser navigates to the matching product detail URL

### Requirement: Product details render from URL parameter
The product detail page SHALL use the `product` query parameter to select `products["product{id}"]` and render the matching product name, description, main image, thumbnails, description expansion control, and note block state.

#### Scenario: Visitor opens a product detail URL
- **WHEN** a visitor opens `product_single.html?product=1`
- **THEN** the page renders the matching product name, description, main image, thumbnails, and optional note block state

#### Scenario: Product description exceeds collapsed height
- **WHEN** the rendered product description is taller than its collapsed container
- **THEN** the page shows a control that toggles between collapsed and expanded description display

### Requirement: Product image thumbnails switch the main image
The product detail page SHALL render product thumbnails that update the main product image when selected.

#### Scenario: Visitor selects a thumbnail
- **WHEN** a visitor clicks a product thumbnail
- **THEN** the main product image changes to the selected image

### Requirement: Product notes are controlled per product
The product detail page SHALL display the note block only when the selected product has `showNote` enabled and note content exists. Otherwise the note block SHALL remain hidden.

#### Scenario: Product note is disabled
- **WHEN** a selected product has `showNote` set to false
- **THEN** the note block remains hidden

#### Scenario: Product note is enabled
- **WHEN** a selected product has `showNote` set to true and note content exists
- **THEN** the note block displays the product note content

