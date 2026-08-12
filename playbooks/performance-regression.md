# Playbook: Performance Regression

## Recognition signals

- Users, monitoring, or metrics show something got measurably slower
  than it used to be — not a general "let's improve performance"
  initiative with no specific regression identified.
- If there's no specific regression — just a desire to optimize
  something proactively — that's a normal change under
  `.github/instructions/performance.instructions.md`, no playbook
  needed.

## Immediate actions

**Do:**

- Confirm the regression with a measurement before investigating — a
  before/after comparison, not just a subjective "feels slower."
- Bisect to the change that introduced it (deploy history, recent
  merges) before guessing at a cause.
- Check the obvious first: a new N+1 query, a missing index, a newly
  unbounded loop, a dependency version bump with different performance
  characteristics.

**Don't:**

- Optimize the first thing that looks slow without confirming it's
  actually the regression's cause — per
  `.github/instructions/performance.instructions.md`, measure before
  optimizing applies here too.
- Ship a fix without a benchmark showing the regression is actually
  resolved, not just "should be" resolved.

## Who to involve

- Whoever authored the change identified as the likely cause, if known
  — they have the fastest context.
- Whoever owns the affected system if the cause isn't obviously a
  specific recent change.

## Handoff

Once cause is identified, the fix follows normal
`workflows/bug-fix.md` or `workflows/refactoring.md` as appropriate,
with `.github/instructions/performance.instructions.md` governing the
fix itself. Record the before/after measurement in
`research/benchmarks/`.

## Resolved when

- Measurement confirms the regression is gone, against the same
  methodology that confirmed it existed.
- A benchmark entry exists in `research/benchmarks/` if the fix involved
  a real trade-off worth remembering.

## Related MAW Documents

- `.github/instructions/performance.instructions.md`
- `verification/performance/`
- `research/benchmarks/`
- `checklists/performance-regression.md`
