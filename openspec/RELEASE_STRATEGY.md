# Release Strategy

Since the upstream `typicode/hotel` is unmaintained, this fork (`yicone/hotel`) serves as the modern, maintained version.

## 1. Package Identity
- **Name**: `@yicone/hotel` (Scoped package)
  - *Reason*: We do not own the `hotel` name on npm. Scoping allows us to publish our own version without conflicts.
- **Repository**: `https://github.com/yicone/hotel`

## 2. Versioning
- **Scheme**: Semantic Versioning (SemVer) `MAJOR.MINOR.PATCH`
- **Baseline**:
  - `v1.0.0`: The state of the fork before our major changes (Node 14 fixes).
  - `v1.1.0`: The first "modern" release (Node 18+, .local TLD).

## 3. Release Workflow
1.  **Preparation**:
    - Ensure all changes are committed and tests pass (`npm test`).
    - Update `CHANGELOG.md` with new version entry.
    - Bump version in `package.json`: `npm version <major|minor|patch> --no-git-tag-version`
2.  **Commit**:
    - `git add package.json CHANGELOG.md`
    - `git commit -m "chore: release vX.Y.Z"`
3.  **Tag**:
    - `git tag vX.Y.Z`
4.  **Publish**:
    - Push code: `git push origin master`
    - Push tags: `git push origin vX.Y.Z`
    - Publish to npm: `npm publish --access public`

## 4. Branching Model
- **master**: Stable, deployable code.
- **feature branches**: For new OpenSpec proposals. Merge into `master` via PR or direct merge after validation.
