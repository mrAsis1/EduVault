Prepare a release.

Follow `workflows/release.md` for the full process and
`.github/instructions/git.instructions.md` for commit/tag conventions.

Do:

1. Confirm all target changes are merged to the release branch.
2. Confirm CI is green.
3. Generate/update `CHANGELOG.md` from commit history since last release.
4. Determine version bump (major/minor/patch) per semantic versioning,
   based on the nature of merged changes.

Do NOT:

- Release with failing tests or known unresolved blocking issues
- Hand-write changelog entries that don't correspond to actual commits
- Skip version bump reasoning — state why major/minor/patch was chosen

Output when done:

- Proposed version number and why
- Changelog entries
- Files changed
- Commit/tag message
