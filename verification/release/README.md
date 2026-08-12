# Release Verification

## Purpose

Verifies that a release followed `workflows/release.md` — version bump
correctness, changelog accuracy, tagging, and post-release confirmation.
Distinct from `verification/deployment/`, which covers the deploy
mechanics themselves (rollback, parity, observability); this area covers
the release *process* around that deploy (versioning, changelog, tag,
announcement).

## Why a separate verification layer

`workflows/release.md` defines seven ordered steps. It's easy to follow
steps 1–5 correctly and skip step 6 (post-release verification) or step 7
(announcement) because the deploy itself "worked." This area makes each
step explicitly checkable so none get silently skipped.

## What lives here

- **`checklist.md`** — the seven release-workflow steps, made checkable.
- **`review-template.md`** — release sign-off write-up.
- **`common-mistakes.md`** — recurring release-process failures.
- **`scorecard.md`** — comparable score across releases.

## How to use this area

1. Work through `checklist.md` alongside `workflows/release.md`.
2. Record the release in `review-template.md`.
3. This runs *after* `verification/deployment/checklist.md` for the
   deploy step itself (step 5).

## Related MAW Documents

- `workflows/release.md`
- `docs/git-workflow.md`
- `verification/deployment/checklist.md`
