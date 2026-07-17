## MODIFIED Requirements

### Requirement: Donation page presents supported payment methods
The donation page SHALL allow visitors to choose among the configured donation payment methods: PayPal, WeChat Pay, YoYoPay, JKOPay, and Taiwan Pay.

#### Scenario: Visitor changes donation method
- **WHEN** a visitor selects a payment method from the donation selector
- **THEN** the donation QR image and related explanatory text update for that method

### Requirement: Donation form collects amount and email
The donation page SHALL retain the amount and email donation form markup as disabled baseline code until a future change enables or replaces the submission flow.

#### Scenario: Visitor views donation page
- **WHEN** `donation.html` loads in the baseline state
- **THEN** the visible donation interaction is the payment-method selector rather than an active amount and email submission form

### Requirement: Donation submission confirms intent
The donation submission helper SHALL ask for confirmation before sending amount and email data when the disabled donation form flow is enabled or invoked by a future change.

#### Scenario: Donation helper is invoked
- **WHEN** the donation submission helper is invoked
- **THEN** the page asks the visitor to confirm before attempting to submit donation information
