# DRY

## Purpose

Explain why the same knowledge should not be copied into multiple places.

## Why it Matters

Duplication makes change expensive because the same rule can drift in different directions. DRY reduces that risk by keeping a single source of truth for a piece of knowledge.

## Core Concepts

- Duplicate knowledge is the real problem, not repeated characters.
- The right abstraction depends on volatility and reuse.
- Not all repetition should be eliminated.

## When to Use

- Remove repeated business rules first.
- Leave harmless repetition alone when abstraction would be noisier.
- Merge copies only when they truly represent the same idea.

- Use shared functions, modules, or services for stable rules.
- Compare change cost before abstracting.
- Keep abstractions focused on one concept.

## When Not to Use

- Creating indirection just to remove a small repeated snippet.
- Collapsing similar but distinct logic into one fragile helper.
- Treating DRY as a mandate to reuse everything.

## Benefits

DRY lowers maintenance cost.

## Drawbacks

Overusing it creates brittle abstractions. The goal is less duplication of knowledge, not fewer lines at any cost.

## Example

If three places calculate tax differently, extract the shared rule. If two forms happen to have the same label, that alone is not a reason to abstract.

## Related MAW Documents

- [When to Abstract](../heuristics/when-to-abstract.md)
- [When Not to Abstract](../heuristics/when-not-to-abstract.md)
- [KISS](kiss.md)
