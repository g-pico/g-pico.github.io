## ADDED Requirements

### Requirement: Static pages load without a build step
The website SHALL be served as static HTML, JavaScript, and asset files without requiring a bundler, framework build, backend service, or package installation.

#### Scenario: Visitor opens a top-level page
- **WHEN** a visitor opens a top-level HTML page from the repository through a static server
- **THEN** the page loads its local scripts and assets using repository-relative paths

### Requirement: Shared navigation exposes primary site areas
The website SHALL expose navigation links for the home page, products page, contact page, and donation page on primary pages.

#### Scenario: Visitor uses the navigation bar
- **WHEN** a visitor views a primary page
- **THEN** the navigation bar provides links to `index.html`, `products.html`, `contact.html`, and `donation.html`

### Requirement: CDN dependencies support existing UI behavior
The website SHALL use Bootstrap 4 and its existing CDN helper dependencies to support responsive navigation and current UI components.

#### Scenario: Bootstrap scripts are available
- **WHEN** CDN dependencies load successfully
- **THEN** responsive Bootstrap components such as the navigation toggler operate as expected

### Requirement: Assets remain repository-relative
The website SHALL reference product images, PDFs, payment images, and general site media with paths that work from the static site root.

#### Scenario: Product image is rendered
- **WHEN** a product card or product detail page displays an image from product data
- **THEN** the image source resolves to a path under `assets/`
