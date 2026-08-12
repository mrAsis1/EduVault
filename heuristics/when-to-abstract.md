# When to Abstract

## Purpose

Explain when repeated or volatile code deserves a shared abstraction.

## Why it Matters

Good abstractions reduce duplication of knowledge and localize change. Bad abstractions freeze the wrong shape and make the code harder to understand.

## Core Concepts

- Abstract when the same concept changes in more than one place.
- Prefer abstractions around policy, not incidental syntax.
- A useful abstraction has one clear reason to exist.

## When to Use

- Look for repeated rules, not repeated text.
- Abstract only when the shared part is likely to stay shared.
- Keep the contract small and obvious.

- Use names that describe the concept, not the implementation.
- Make the abstraction easier to use than duplicating the logic.
- Stop abstracting when the interface starts hiding too much.

## When Not to Use

- Abstracting because the code looks similar.
- Bundling unrelated variation points into one type.
- Creating a generic framework where a helper function is enough.

## Benefits

Abstraction adds indirection and upfront design cost.

## Drawbacks

It reduces repeated edits and inconsistency when the shared rule is real.

## Example

If several modules validate the same business rule, extract the rule. If several modules just happen to format text in a similar way, keep the code local.

## Related MAW Documents

- [DRY](../foundations/dry.md)
- [When Not to Abstract](when-not-to-abstract.md)
- [Service Layer](../patterns/service-layer.md)
