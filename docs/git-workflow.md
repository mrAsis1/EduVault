# Git Workflow

## Branching model

- `main` is always deployable. Nothing is committed to it directly.
- Feature and fix work happens on branches named `<type>/<short-description>`
  (e.g. `feat/user-auth`, `fix/login-redirect`), branched from `main`.
- Branches merge back into `main` via pull request, never direct push.

This exists so `main` can always be built, deployed, or tagged for
release without someone first checking "is this actually in a good
state" — a guarantee that direct commits to `main` breaks immediately.

## Why conventional commit messages

`<type>(<scope>): <summary>` format makes commit history machine-readable
— changelogs can be generated from it automatically (see
`.github/prompts/release.md`), and `git log --oneline` becomes scannable
instead of a wall of inconsistent phrasing. The type also communicates
intent before you even read the summary: `fix` vs `feat` vs `refactor`
tells a reviewer what kind of risk to expect.

## Why one logical change per commit

A commit that bundles a bug fix with an unrelated refactor is hard to
revert cleanly — reverting the refactor means reverting the fix too. It's
also hard to review: the reviewer has to separate two unrelated diffs
mentally. One logical change per commit keeps both revert and review
simple.

## Why no force-push on shared branches

Force-pushing rewrites history that others may have already pulled or
based work on. On a solo/local branch this is fine — on a shared branch
it silently breaks other people's work and CI history.

## Pull request process

1. Open PR from feature branch into `main`.
2. CI must pass (tests, lint, type-check).
3. At least one review per `.github/instructions/review.instructions.md`,
   using the checklist in `workflows/code-review.md`.
4. Squash or rebase merge — `main` history stays linear and one commit
   per logical PR change.

## Release tagging

Releases are tagged from `main` following semantic versioning
(major.minor.patch). Full release steps live in `workflows/release.md`;
this file only covers the branching/commit conventions that release
process depends on.
