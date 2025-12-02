# Contributing to Hotel

## Prerequisites

- **Node.js**: v18 or higher is required.
- **pnpm**: This project uses `pnpm` for dependency management. Please do not use `npm` or `yarn`.

## Setup

1.  Clone the repository.
2.  Install dependencies:
    ```sh
    pnpm install
    ```

## Development

- **Start Daemon**:
    ```sh
    pnpm start
    ```
- **Linting**:
    ```sh
    pnpm run lint
    ```
- **Testing**:
    ```sh
    pnpm test
    ```

## CI/CD

This project uses **GitHub Actions** for Continuous Integration.
- All Pull Requests are automatically tested on Ubuntu, macOS, and Windows.
- We support Node.js LTS versions (18, 20, 22).

## Notes

- **Lockfile**: We use `pnpm-lock.yaml`. `package-lock.json` has been removed and should not be committed.
