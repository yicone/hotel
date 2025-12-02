## ADDED Requirements
### Requirement: Self-Signed Certificates
The system SHALL allow proxying to targets with self-signed certificates.

#### Scenario: Proxy to insecure HTTPS
- **WHEN** a server is configured with an HTTPS target using a self-signed cert
- **THEN** the proxy forwards the request without rejecting it due to SSL errors
