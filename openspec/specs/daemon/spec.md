# daemon Specification

## Purpose
TBD - created by archiving change change-default-tld. Update Purpose after archive.
## Requirements
### Requirement: Default TLD
The system SHALL use `.local` as the default Top-Level Domain for local applications.

#### Scenario: Default Configuration
- **WHEN** Hotel is started without a user configuration
- **THEN** it defaults to using `.local` (e.g., `app.local`)

