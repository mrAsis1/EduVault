# Release Workflow

Invoked by `.github/prompts/release.md`. Conventions referenced
throughout: `docs/git-workflow.md`, `.github/instructions/git.instructions.md`.

## 1. Confirm readiness

- All target changes are merged to `main`.
- CI is green on `main`.
- No known unresolved blocking issues from recent reviews.

## 2. Determine version bump

Following semantic versioning (major.minor.patch):

- **Major** — breaking change (public API changed incompatibly).
- **Minor** — new backward-compatible functionality.
- **Patch** — backward-compatible bug fix only.

State which applies and why, based on the nature of merged commits since
the last release (commit `type` prefixes per
`.github/instructions/git.instructions.md` make this identifiable).

## 3. Generate changelog

- Derive entries from commit history since the last release tag.
- Group by type: Features, Fixes, Refactors, Docs, Chores.
- Every entry must correspond to an actual commit — no hand-written
  entries describing work that isn't in the log.
- Update `CHANGELOG.md`.

## 4. Tag the release

- Tag `main` at the release commit with the new version number.
- Tag message follows the same conventional format as commits.

## 5. Deploy

- Follow the deployment principles in `docs/deployment.md` and the
  project's own CI/CD configuration for the actual deploy mechanics.
- Confirm the rollback path is known before deploying, per
  `docs/deployment.md`.

## 6. Verify post-release

- Confirm the deployed version matches the tagged version.
- Confirm monitoring/error tracking shows no immediate regressions.

## 7. Announce

- Summarize the release (version, headline changes) for the relevant
  audience (README badge, release notes, changelog link).
