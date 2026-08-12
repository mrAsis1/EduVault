# KISS

## Purpose

Explain why the simplest solution that solves the current problem is usually the best starting point.

## Why it Matters

Simple designs are easier to understand, test, and change. Complexity only pays for itself when it removes enough real pain to justify its cost.

## Core Concepts

- Simplicity is about clarity, not minimal features.
- The best solution is the one that is easiest to maintain.
- Extra abstraction is a cost, not a virtue.

## When to Use

- Start with direct code and plain structure.
- Add indirection only when the benefit is concrete.
- Prefer understandable logic over elegant machinery.

- Solve one problem at a time.
- Keep the happy path obvious.
- Remove complexity that does not pay rent.

## When Not to Use

- Confusing simple with simplistic.
- Using KISS to justify fragile shortcuts.
- Adding architecture before the shape of the problem is known.

## Benefits

KISS can delay generalization.

## Drawbacks

That is usually acceptable. Premature sophistication is harder to undo than a small direct implementation.

## Example

A direct validation function is better than a plugin system when there is only one rule set and no evidence it will vary soon.

## Related MAW Documents

- [YAGNI](yagni.md)
- [Clean Code](clean-code.md)
- [When to Refactor](../heuristics/when-to-refactor.md)
