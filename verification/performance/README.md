# Performance Verification

## Purpose

Verifies compliance with `.github/instructions/performance.instructions.md`
— measure-before-optimizing, algorithmic complexity, data handling at
scale, and event-handler throttling.

## Why a separate verification layer

Performance instructions rely on a judgment call the instructions file
itself calls out: any readability-for-performance trade-off needs a
measurement to justify it. Without a place to record that measurement,
"I think this is faster" and "I profiled this and it's 3x faster" look
identical in a diff. This area makes the measurement a checkable,
recorded artifact.

## What lives here

- **`checklist.md`** — traces to
  `.github/instructions/performance.instructions.md`.
- **`review-template.md`** — performance review write-up, including
  where to record the benchmark/profile.
- **`common-mistakes.md`** — recurring performance failures.
- **`scorecard.md`** — comparable score across reviews.

## How to use this area

1. Run `checklist.md` for any change touching data handling, loops over
   user-scale data, or high-frequency event handlers.
2. If a readability trade-off was made for performance, the benchmark
   goes in `review-template.md` — not just a claim.

## Related MAW Documents

- `.github/instructions/performance.instructions.md`
- `.github/instructions/review.instructions.md`
