# Accessibility Verification

## Purpose

Verifies compliance with `.github/instructions/accessibility.instructions.md`
(enforced rules) and the rationale in `principles/accessibility.md`. This
is the newest instructions file in MAW — added alongside this
verification area because it didn't previously exist in enforceable form
(`react.instructions.md` only listed the word "Accessibility" with no
checkable content).

## Why a separate verification layer

Accessibility failures are easy to miss visually — a component can look
correct and still be unusable by keyboard or screen reader. Automated
tooling (axe, Lighthouse) catches a subset of issues but not custom
interaction patterns (focus order in a custom modal, keyboard support in
a custom dropdown). This area covers what needs deliberate manual
verification.

## What lives here

- **`checklist.md`** — traces to
  `.github/instructions/accessibility.instructions.md`.
- **`review-template.md`** — accessibility review write-up structure.
- **`common-mistakes.md`** — recurring accessibility failures.
- **`scorecard.md`** — comparable score across reviews.

## How to use this area

1. Run automated tooling first (axe/Lighthouse) if available in the
   project.
2. Run `checklist.md` manually, especially keyboard-only navigation.
3. Use `review-template.md` for the write-up.

## Related MAW Documents

- `.github/instructions/accessibility.instructions.md`
- `principles/accessibility.md`
