# When to Refactor

## Purpose

Explain when improving code structure is worth the time and risk.

## Why it Matters

Refactoring keeps code healthy before it turns into a maintenance liability. The right moment is when the current structure starts costing more than the change.

## Core Concepts

- Refactor when friction is repeated and visible.
- Refactor to improve clarity, not to change behavior.
- Preserve behavior with tests before changing structure.

## When to Use

- Refactor when complexity or duplication blocks progress.
- Refactor when a bug pattern keeps returning.
- Do not refactor just because the code could be prettier.

- Make refactoring small and safe.
- Use tests as a safety net.
- Improve the part that causes the pain first.

## When Not to Use

- Refactoring without a reason.
- Mixing refactorings with unrelated feature work.
- Treating every cleanup as urgent.

## Benefits

Refactoring improves future velocity.

## Drawbacks

It consumes time now and can introduce risk if the behavior is not protected.

## Example

Refactor when a function is copied and edited in several places or when a module is becoming hard to explain to a new teammate.

## Related MAW Documents

- [Maintainability](../principles/maintainability.md)
- [When to Split Files](when-to-split-files.md)
- [Testing](../principles/testing.md)
