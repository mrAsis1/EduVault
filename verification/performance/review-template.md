# Performance Review Template

## Scope

What changed, and whether it touches data handling, algorithmic
complexity, or event-handler frequency.

## Checklist result

Reference: `verification/performance/checklist.md`

- Passed: [count] / [total applicable]
- Failed items: [list or "none"]

## Benchmark/profile (required if a readability trade-off was made)

- **Before:** measurement and method (profiler, load test, benchmark
  script)
- **After:** measurement under the same method
- **Conclusion:** the specific improvement, not "faster"

If no trade-off was made, state that explicitly and skip this section.

## Failed items — detail

For each Fail:

- **Item:** which checklist line
- **Where:** file/function
- **Risk:** concrete impact at expected scale
- **Resolution:** fixed in this PR / follow-up ticket linked

## Reviewer

Name, date, score from `verification/performance/scorecard.md` if
tracked.

## Related MAW Documents

- `verification/performance/checklist.md`
- `.github/instructions/performance.instructions.md`
