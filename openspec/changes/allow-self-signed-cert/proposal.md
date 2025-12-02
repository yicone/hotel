## Why
Users may want to use their own self-signed certificates or allow insecure connections when proxying to HTTPS targets.
Based on PR #55.

## What Changes
- Allow configuring the proxy to accept self-signed certificates (e.g., via `secure: false` option in `http-proxy`).

## Impact
- Affected specs: `proxy`
- Affected code: `src/daemon/group.js`
