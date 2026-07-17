## MODIFIED Requirements

### Requirement: Product details render from URL parameter
The product detail page SHALL use the `product` query parameter to select `products["product{id}"]` and render the matching product name, description, main image, thumbnails, description expansion control, and note block state.

#### Scenario: Visitor opens a product detail URL
- **WHEN** a visitor opens `product_single.html?product=1`
- **THEN** the page renders the matching product name, description, main image, thumbnails, and optional note block state

#### Scenario: Product description exceeds collapsed height
- **WHEN** the rendered product description is taller than its collapsed container
- **THEN** the page shows a control that toggles between collapsed and expanded description display

### Requirement: Product notes are controlled per product
The product detail page SHALL display the note block only when the selected product has `showNote` enabled and note content exists. Otherwise the note block SHALL remain hidden.

#### Scenario: Product note is disabled
- **WHEN** a selected product has `showNote` set to false
- **THEN** the note block remains hidden

#### Scenario: Product note is enabled
- **WHEN** a selected product has `showNote` set to true and note content exists
- **THEN** the note block displays the product note content
