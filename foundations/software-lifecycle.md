# Software Lifecycle

## Purpose

Explain the stages a system passes through from idea to maintenance.

## Why it Matters

Different stages need different artifacts. A design that is good for exploration is not always good for operations, and a release process that works for a prototype may fail in production.

## Core Concepts

- Discovery clarifies the problem.
- Design chooses the shape of the solution.
- Implementation makes it real.
- Verification checks that it works.
- Operation keeps it useful.

## When to Use

- Match the level of rigor to the stage.
- Keep documentation, tests, and deployment in step with the code.
- Expect feedback from production to reshape earlier decisions.

- Write plans before large changes.
- Verify behavior before claiming completion.
- Update docs when the lifecycle stage changes meaningfully.

## When Not to Use

- Treating launch as the end of the work.
- Building without a clear path to verification or maintenance.
- Leaving decisions undocumented until they become folklore.

## Benefits

Lifecycle discipline adds process overhead.

## Drawbacks

It lowers the chance that a system becomes unmaintainable after the first release.

## Example

Before implementation, define the problem and constraints. After release, monitor behavior and update the design if reality differs from the plan.

## Related MAW Documents

- [Engineering Philosophy](engineering-philosophy.md)
- [Testing](../principles/testing.md)
- [Release Workflow](../workflows/release.md)
