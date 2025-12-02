## Why
Modern browsers (Chrome M71+) enforce implicit proxy bypass rules for `localhost` and `*.localhost`, making it impossible to proxy these domains reliably without complex user configuration (e.g., `<-loopback>`).
To ensure a smooth out-of-the-box experience, we are changing the default TLD to `.local`.

## What Changes
- Change default TLD from `.localhost` to `.local`.
- Update `conf.json` generation to use `.local`.
- Update documentation (README) to explain the change and the browser limitation.

## Impact
- Affected specs: `daemon`
- Affected code: `src/daemon/index.js` (default config), `README.md`
- **Risk**: `.local` is used by mDNS (Bonjour). While this usually resolves to local devices, using it for local development proxies might conflict if there are actual mDNS devices with the same name. However, given the browser constraints, this is a necessary trade-off. Users can still configure a custom TLD if needed.
