## Why
WebSockets are currently not proxied correctly when the target server is running on a specific port. The proxy needs to use the correct server port for WebSocket upgrades.
Based on PR #261.

## What Changes
- Update proxy logic to use the target server's port when handling `upgrade` events.

## Impact
- Affected specs: `proxy`
- Affected code: `src/daemon/group.js` (or wherever proxy logic resides)
