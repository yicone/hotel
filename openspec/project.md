# Project Context

## Purpose
**Hotel** is a local process manager and proxy for developers. It allows starting apps from the browser and using local domains (e.g., `.localhost`) automatically.
This repository also contains a **Raycast Extension** (`raycast-hotel`) to manage Hotel apps directly from Raycast.

## Tech Stack
- **Hotel Daemon**: Node.js, Express, `http-proxy`, `respawn`
- **Raycast Extension**: React, TypeScript, `@raycast/api`, `@raycast/utils`
- **Package Manager**: npm (migrated from pnpm)

## Project Conventions

### Code Style
- **JavaScript (Hotel)**: Standard JS style (ESLint + Prettier)
- **TypeScript (Raycast)**: Raycast ESLint config (React hooks rules, etc.)
- **Formatting**: Prettier

### Architecture Patterns
- **Hotel**:
  - `src/daemon`: The core server and process manager.
  - `src/cli`: Command-line interface.
  - `conf.json`: User configuration.
- **Raycast Extension**:
  - `src/index.tsx`: Main entry point.
  - Interacts with Hotel via HTTP API (`http://localhost:2000/_/servers`).

### Testing Strategy
- **Hotel**: AVA for unit/integration tests.
- **Raycast**: Manual testing in Raycast, `npm run fix-lint` for static analysis.

### Git Workflow
- **Main Branch**: `master` (Hotel), `main` (Raycast Extension - separate repo/folder structure).
- **Commits**: Conventional Commits (e.g., `feat:`, `fix:`, `docs:`).

## Domain Context
- **TLD**: Defaults to `.local` (changed from `.localhost` due to Chrome implicit bypass). Previously `.dev` (deprecated).
- **Proxy**: Hotel acts as a reverse proxy, mapping domains to local ports.
- **Process Management**: Uses `respawn` to keep processes alive.

## Important Constraints
- **Node Version**: Must support modern Node (v18+), but legacy code might have issues (e.g., SSL key size on Node 17+).
- **Browser Security**: `.localhost` is forced to `127.0.0.1` on some browsers/OSs, bypassing PAC files.

## External Dependencies
- **Raycast API**: For the extension.
- **System**: `lsof`, `ps` (used by Hotel internally).
