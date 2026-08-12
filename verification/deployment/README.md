# Deployment Verification

## Purpose

Verifies the deployment *principles* in `docs/deployment.md` — automated,
reversible, environment parity, observable. `docs/deployment.md` is
explicit that it can't be a `.github/instructions/` file because
deployment mechanics are environment-specific; this area is the
project-agnostic checklist form of those principles, applied at each
project's own deploy mechanism.

## Why a separate verification layer

The four deployment principles are easy to agree with and easy to
silently skip under release pressure ("we'll add rollback later," "just
this once, deploy manually"). A checklist run before each release makes
skipping a principle a visible, recorded decision instead of a quiet one.

## What lives here

- **`checklist.md`** — the deployment principles, made checkable per
  release.
- **`review-template.md`** — pre-deploy review write-up.
- **`common-mistakes.md`** — recurring deployment failures.
- **`scorecard.md`** — comparable score across releases.

## How to use this area

1. Run `checklist.md` before each deploy, not after an incident.
2. Use `review-template.md` to record the pre-deploy check.
3. This area is invoked as part of `workflows/release.md` step 5.

## Related MAW Documents

- `docs/deployment.md`
- `workflows/release.md`
