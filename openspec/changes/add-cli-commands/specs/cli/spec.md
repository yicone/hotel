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
- **THEN** the default browser opens `http://app-name.local` (or configured TLD)

#### Scenario: Open from directory
- **GIVEN** user is in a directory registered as `app-name`
- **WHEN** user runs `hotel open`
- **THEN** the default browser opens `http://app-name.local` (or configured TLD)

### Restart server

The CLI SHALL provide a command to restart a server.

#### Scenario: Restart by name
- **WHEN** user runs `hotel restart app-name`
- **THEN** the server `app-name` is stopped and started

#### Scenario: Restart from directory
- **GIVEN** user is in a directory registered as `app-name`
- **WHEN** user runs `hotel restart`
- **THEN** the server `app-name` is stopped and started
