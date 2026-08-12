# Documentation Verification

## Purpose

Verifies compliance with `.github/instructions/documentation.instructions.md`
— purpose-first writing, no duplicated content across layers, docs
updated in the same PR as the code they describe, and the three-layer
separation MAW itself depends on (`docs/*.md` = why,
`.github/instructions/*.md` = enforceable rules, `workflows/*.md` =
ordered process).

## Why a separate verification layer

This is the one area where the thing being verified is MAW's own
structural rule (ADR-0002: link, don't duplicate). Documentation drift
here doesn't just cost readability — it recreates the exact
duplicated-standards problem MAW's layering exists to prevent. This area
exists to catch that early, on every doc change, not just during
periodic MAW-wide audits.

## What lives here

- **`checklist.md`** — traces to
  `.github/instructions/documentation.instructions.md`.
- **`review-template.md`** — documentation review write-up structure.
- **`common-mistakes.md`** — recurring documentation drift patterns.
- **`scorecard.md`** — comparable score across reviews.

## How to use this area

1. Run `checklist.md` on any PR touching `.md` files, or any PR whose
   code change should have a doc update alongside it.
2. Pay particular attention to the "no duplicated content" and "one
   topic per file" items — these are the ones most likely to silently
   erode MAW's own layering over time.

## Related MAW Documents

- `.github/instructions/documentation.instructions.md`
- `ARCHITECTURE_DECISIONS.md` (ADR-0002)
