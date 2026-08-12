# Code Quality Verification

## Purpose

Verifies naming conventions (`docs/coding-standards.md`) and the
cross-cutting review bar (`.github/instructions/review.instructions.md`)
— correctness, clarity, consistency, test coverage, scope. Distinct from
`verification/design/`, which covers formatting/structure judgment calls;
this area covers naming and the general review checklist, not style.

## Why a separate verification layer

`docs/coding-standards.md` is explicit that naming conventions rely on
judgment (a human reads the reasoning once, then applies it by habit) —
they aren't mechanically enforced. `review.instructions.md` states what a
reviewer should check but not a checkable, comparable format for
recording that a check happened. This area turns both into something
verifiable and trackable.

## What lives here

- **`checklist.md`** — naming conventions plus the review-checklist
  items, made checkable.
- **`review-template.md`** — general code review write-up structure.
- **`common-mistakes.md`** — recurring naming/review failures.
- **`scorecard.md`** — comparable score across reviews.

## How to use this area

1. Run `checklist.md` before requesting review.
2. Reviewer uses `review-template.md` for the write-up.
3. Track results in `scorecard.md` if the project monitors quality trend.

## Related MAW Documents

- `docs/coding-standards.md`
- `.github/instructions/review.instructions.md`
- `.github/instructions/typescript.instructions.md`
