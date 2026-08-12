# Architecture Verification

## Purpose

Verifies compliance with `.github/instructions/architecture.instructions.md`
(enforced rules) and the rationale in `docs/architecture.md` — single
responsibility, dependency direction, separation of business logic from
framework/UI code, and avoiding duplicate patterns.

## Why a separate verification layer

Architectural drift rarely happens in one big violation — it accumulates
one small compromise at a time (one more responsibility bolted onto an
existing file, one direct dependency taken "just this once"). A checklist
run at review time catches drift while it's still a one-line fix, instead
of after it's load-bearing.

## What lives here

- **`checklist.md`** — traces to
  `.github/instructions/architecture.instructions.md`.
- **`review-template.md`** — architecture review write-up structure.
- **`common-mistakes.md`** — recurring architectural drift patterns.
- **`scorecard.md`** — comparable score across reviews.

## How to use this area

1. Run `checklist.md` for any change touching folder structure, module
   boundaries, or introducing a new pattern.
2. For anything altering architecture significantly, this should happen
   *before* implementation, via `.github/prompts/plan-feature.md` — this
   checklist verifies the plan was followed, not a substitute for it.
3. Use `review-template.md` for the write-up.

## Related MAW Documents

- `.github/instructions/architecture.instructions.md`
- `docs/architecture.md`
- `.github/prompts/plan-feature.md`
