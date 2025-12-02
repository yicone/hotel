## MODIFIED Requirements
### Requirement: Modern Build System
The system SHALL use a modern build toolchain (e.g., Vite) compatible with Node.js 18+.

#### Scenario: Development
- **WHEN** a developer runs `npm start`
- **THEN** the development server SHALL start without errors on Node 18+
- **AND** Hot Module Replacement (HMR) SHALL function correctly
