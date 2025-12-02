## MODIFIED Requirements
### Requirement: Proxy WebSockets
The system MUST proxy WebSocket connections to the target server using the correct port.

#### Scenario: WebSocket Upgrade
- **WHEN** a client initiates a WebSocket connection to a local domain
- **THEN** the connection is upgraded and proxied to the target server's port
