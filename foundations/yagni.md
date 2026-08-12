# YAGNI

## Purpose

Explain why you should avoid building features or abstractions before they are needed.

## Why it Matters

Every speculative feature carries design, implementation, and maintenance cost. YAGNI protects the current project from future guesswork that may never pay off.

## Core Concepts

- Need should be real, not imagined.
- Future flexibility has a cost today.
- The cheapest feature is the one you do not build.

## When to Use

- Build the current requirement cleanly.
- Delay generalization until variation appears.
- Let evidence of change drive abstraction.

- Keep the design narrow until requirements prove otherwise.
- Revisit decisions when a second real use case appears.
- Pair YAGNI with refactoring so the code can evolve when needed.

## When Not to Use

- Confusing restraint with lack of planning.
- Using YAGNI to excuse poor structure.
- Adding extension points because they feel safe.

## Benefits

YAGNI reduces wasted work.

## Drawbacks

It can mean revisiting code later. That trade-off is usually better than paying for generality too early.

## Example

Do not add plugin support until more than one plugin use case exists. Do not create multiple payment providers until the product actually needs them.

## Related MAW Documents

- [When to Abstract](../heuristics/when-to-abstract.md)
- [When to Refactor](../heuristics/when-to-refactor.md)
- [KISS](kiss.md)
