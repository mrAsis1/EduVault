# Testing Verification

## Purpose

Verifies compliance with `.github/instructions/testing.instructions.md`
and the testing-pyramid rationale in `docs/testing.md` — one behavior per
test, coverage of happy/edge/error paths, test independence, and pyramid
shape (unit-heavy, integration-moderate, e2e-light).

## Why a separate verification layer

`docs/testing.md` is explicit that coverage percentage is a signal, not a
target — a high number with weak assertions creates false confidence.
This area exists to check the *quality* of tests (does each test assert
something meaningful, does the suite shape match the pyramid), not just
whether tests exist.

## What lives here

- **`checklist.md`** — traces to
  `.github/instructions/testing.instructions.md` and `docs/testing.md`.
- **`review-template.md`** — test review write-up structure.
- **`common-mistakes.md`** — recurring testing failures.
- **`scorecard.md`** — comparable score across reviews.

## How to use this area

1. Run `checklist.md` alongside the code review, not as an afterthought.
2. New code requires new tests in the same PR — this area verifies those
   tests are meaningful, not just present.

## Related MAW Documents

- `.github/instructions/testing.instructions.md`
- `docs/testing.md`
