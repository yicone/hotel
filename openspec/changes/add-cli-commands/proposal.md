## Why
Users need more control over servers from the command line, such as restarting or opening them.
Based on PR #237.

## What Changes
- Add `hotel restart <name>` command.
- Add `hotel open <name>` command.

## Impact
- Affected specs: `cli`
- Affected code: `src/cli/bin.js`
