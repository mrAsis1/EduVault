# When to Optimize

## Purpose

Explain when performance work is justified and what should trigger it.

## Why it Matters

Optimization has a cost. If the code is not actually slow enough to matter, the team may trade clarity for no user-visible gain.

## Core Concepts

- Measure before changing behavior for speed.
- Optimize hot paths, not guesses.
- User experience matters more than theoretical efficiency.

## When to Use

- Optimize only when a metric or user experience proves the need.
- Focus on the bottleneck with the biggest payoff.
- Keep the simpler code if the speedup is negligible.

- Profile first.
- Verify the improvement after the change.
- Document the reason for the optimization.

## When Not to Use

- Making everything fast by default.
- Confusing micro-optimizations with product improvements.
- Keeping a complex optimization after the workload changes.

## Benefits

Optimization can improve responsiveness and cost.

## Drawbacks

It often makes code more specialized and harder to maintain.

## Example

Optimize a query that dominates request time. Do not rewrite a straightforward loop unless profiling shows it matters.

## Related MAW Documents

- [Performance First](../principles/performance-first.md)
- [When to Cache](when-to-cache.md)
- [Testing](../principles/testing.md)
