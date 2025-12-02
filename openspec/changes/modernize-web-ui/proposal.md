## Why
The current Web UI build stack (Webpack 2, React 16, TypeScript 2.7) is severely outdated and incompatible with modern Node.js versions (v18+).
This prevents developers from building or running the UI in modern environments, forcing them to rely solely on the CLI or Daemon.

## What Changes
- **Short-term**: Document that Web UI build is broken on Node 18+ and suggest using CLI/Daemon.
- **Long-term**: Replace the legacy Webpack build with a modern toolchain (Vite).
- **Upgrade**: Update React to v18+ and TypeScript to v5+.
- **Refactor**: Migrate class components to functional components (optional but recommended).

## Impact
- Affected specs: `ui`
- Affected code: `src/app`, `webpack.*.js`, `package.json`
- **Risk**: Rewriting the build system is a major change. We might lose some legacy browser support (IE), which is acceptable.
