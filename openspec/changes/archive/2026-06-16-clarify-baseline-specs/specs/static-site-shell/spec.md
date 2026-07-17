## MODIFIED Requirements

### Requirement: Shared navigation exposes primary site areas
The website SHALL expose navigation links for the home page, products page, contact page, and donation page on primary content pages. Primary content pages currently include `index.html`, `products.html`, `product_single.html`, `news_single.html`, `contact.html`, and `donation.html`. Legacy or optional pages such as `buy_page.html` may retain older navigation behavior until separately updated.

#### Scenario: Visitor uses the navigation bar
- **WHEN** a visitor views a primary content page
- **THEN** the navigation bar provides links to `index.html`, `products.html`, `contact.html`, and `donation.html`

### Requirement: CDN dependencies support existing UI behavior
The website SHALL use Bootstrap 4 and the existing CDN-loaded helper dependencies required by each page to support responsive navigation and current Bootstrap UI components.

#### Scenario: Bootstrap scripts are available
- **WHEN** the page CDN dependencies load successfully
- **THEN** responsive Bootstrap components such as the navigation toggler operate as expected
