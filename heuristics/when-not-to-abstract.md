# When Not to Abstract

## Purpose

Explain when repetition is still cheaper than introducing a new abstraction.

## Why it Matters

Premature abstraction hides differences that have not settled yet. It can make the code harder to read and harder to change than the repeated logic it replaced.

## Core Concepts

- Similarity is not enough; the underlying rule must be the same.
- An abstraction should reduce future change cost.
- Stable variation is the best sign that abstraction is ready.

## When to Use

- Keep direct code when there are only one or two usages.
- Wait until the variation pattern is clear.
- Prefer duplication over a bad shared abstraction.

- Revisit the decision when the third real use case appears.
- Abstract the changing part, not the whole block.
- Use tests to protect the new boundary once it exists.

## When Not to Use

- Creating helpers for tiny repeated snippets.
- Forcing unrelated code through one generic interface.
- Removing duplication before understanding the domain.

## Benefits

Not abstracting keeps code simple now.

## Drawbacks

It may require a later refactor. That is usually acceptable if the repeated logic is still small and readable.

## Example

Two forms that share a label do not need a shared form engine. Two places that implement the same pricing rule may.

## Related MAW Documents

- [DRY](../foundations/dry.md)
- [When to Abstract](when-to-abstract.md)
- [YAGNI](../foundations/yagni.md)
