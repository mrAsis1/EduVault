# Design Verification

## Purpose

Verifies adherence to `docs/style-guide.md` — the "how code looks" layer
(formatting, imports, comments, file length, structure). This is
deliberately thin: `docs/style-guide.md` itself explains that formatting
and stylistic conventions are enforced by tooling (Prettier/ESLint), not
by a `.github/instructions/` rule or manual review. This area verifies
the parts of style that tooling *can't* catch — the judgment calls.

## Why a separate verification layer

Tooling catches indentation, quote style, and line length automatically.
It cannot catch whether a comment explains *why* instead of *what*,
whether a file is doing more than one job, or whether nesting depth hurts
readability even when it's technically valid. This area exists for that
gap — the style judgment calls a linter can't make.

## What lives here

- **`checklist.md`** — the non-automatable style items from
  `docs/style-guide.md`, turned into checkable review items.
- **`review-template.md`** — structure for a style/readability review.
- **`common-mistakes.md`** — recurring judgment-call failures.
- **`scorecard.md`** — a comparable score across reviews.

## How to use this area

1. Confirm the formatter/linter ran clean first — this area assumes that,
   it doesn't re-check it.
2. Run the non-automated items in `checklist.md`.
3. Use `review-template.md` for the write-up.

## Related MAW Documents

- `docs/style-guide.md`
- `.github/instructions/review.instructions.md`
- `docs/architecture.md` (single responsibility, referenced by file-length
  guidance)
