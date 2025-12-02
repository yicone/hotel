# Enable CI with GitHub Actions

## Goal
Enable Continuous Integration (CI) for the project using GitHub Actions, replacing the legacy Travis CI and AppVeyor configurations. The CI pipeline will use `pnpm` for dependency management.

## Proposed Changes

### 1. Create GitHub Actions Workflow
- Create `.github/workflows/ci.yml`.
- Trigger on `push` to `master` and `pull_request`.
- Strategy: Matrix build for Node.js versions (e.g., 18, 20, 22) and OS (Ubuntu, macOS, Windows).
- Steps:
    - Checkout code.
    - Setup Node.js.
    - Setup `pnpm`.
    - Install dependencies (`pnpm install`).
    - Run linting (`pnpm run lint`).
    - Run tests (`pnpm test`).
    - Build (`pnpm run build`).

### 2. Remove Legacy CI Configs
- Delete `.travis.yml`.
- Delete `appveyor.yml`.

### 3. Update Documentation
- Update `README.md` to reflect the new CI status (badges) and contribution guidelines.

## Verification Plan
- The CI workflow itself acts as the verification.
- We will push the changes and check the Actions tab (simulated by local verification where possible).
