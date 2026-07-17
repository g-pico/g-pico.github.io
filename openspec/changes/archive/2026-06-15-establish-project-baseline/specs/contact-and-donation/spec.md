## ADDED Requirements

### Requirement: Contact page presents official channels
The contact page SHALL present official g-Pico contact and community channels, including video, community, social, email, and professional profile links.

#### Scenario: Visitor opens contact page
- **WHEN** `contact.html` loads
- **THEN** the visitor can find the configured contact and community links

### Requirement: Donation page presents supported payment methods
The donation page SHALL allow visitors to choose among the configured donation payment methods.

#### Scenario: Visitor changes donation method
- **WHEN** a visitor selects a payment method from the donation selector
- **THEN** the donation QR image and related explanatory text update for that method

### Requirement: Donation form collects amount and email
The donation page SHALL provide fields for donation amount and donor email.

#### Scenario: Visitor views donation form
- **WHEN** `donation.html` loads
- **THEN** the form contains amount and email inputs with localized labels or placeholders

### Requirement: Donation submission confirms intent
The donation page SHALL ask the visitor to confirm before completing the donation information submission flow.

#### Scenario: Visitor submits donation form
- **WHEN** a visitor submits donation information
- **THEN** the page shows a confirmation step before reporting success, failure, error, or cancellation
