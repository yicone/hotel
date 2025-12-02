## ADDED Requirements
### Requirement: Restart Server
The CLI SHALL provide a command to restart a specific server.

#### Scenario: Restart by name
- **WHEN** user runs `hotel restart app-name`
- **THEN** the server `app-name` is restarted

### Requirement: Open Server
The CLI SHALL provide a command to open a server in the default browser.

#### Scenario: Open by name
- **WHEN** user runs `hotel open app-name`
- **THEN** the default browser opens `http://app-name.localhost` (or configured TLD)
