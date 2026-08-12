# Strategy Pattern

## Purpose

Explain how to swap algorithms or policies behind a common interface.

## Why it Matters

Strategy keeps variation out of the caller. That makes behavior easier to extend without rewriting the code that uses it.

## Core Concepts

- The context uses a strategy.
- Each strategy implements one policy or algorithm.
- The caller chooses the strategy explicitly or through configuration.

## When to Use

- Use strategy when the behavior varies by rule, not by data alone.
- Keep each strategy focused and named clearly.
- Make the selection mechanism simple.

- Inject strategies where possible.
- Test each strategy independently.
- Keep the shared interface small enough to stay honest.

## When Not to Use

- Creating strategies when a simple conditional is enough.
- Packing unrelated behaviors into one interface.
- Hiding selection logic so deeply that it becomes hard to debug.

## Benefits

Strategy improves flexibility and testability.

## Drawbacks

It can overcomplicate simple flows that only need one algorithm.

## Example

A shipping calculator can use different strategies for standard, express, and pickup delivery rules.

## Related MAW Documents

- [Factory Pattern](factory-pattern.md)
- [Composition Over Inheritance](../foundations/composition-over-inheritance.md)
- [When to Abstract](../heuristics/when-to-abstract.md)
