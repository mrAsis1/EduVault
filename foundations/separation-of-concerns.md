# Separation of Concerns

## Purpose

Explain how to divide a system so each part changes for one main reason.

## Why it Matters

When concerns are mixed, every change becomes risky because unrelated behavior sits in the same place. Clear separation keeps reasoning local and makes tests more focused.

## Core Concepts

- A concern is a distinct responsibility or reason to change.
- Boundaries should reflect behavior, not just technical labels.
- One module should answer one primary question.

## When to Use

- Separate decision logic from rendering.
- Separate orchestration from domain rules.
- Separate data access from business policy.

- Group code by responsibility, not by convenience alone.
- Keep interfaces narrow where concerns meet.
- Move shared logic to the layer that truly owns it.

## When Not to Use

- Splitting code into layers that still know too much about each other.
- Hiding a single concern across many tiny files.
- Treating separation as an excuse to over-abstract.

## Benefits

Better separation usually means more files and more explicit wiring.

## Drawbacks

The payback is easier testing, clearer ownership, and lower change risk.

## Example

A checkout page should render cart data, call a use case, and let the domain rules decide whether the purchase is valid.

## Related MAW Documents

- [Architecture: Clean Architecture](../architecture/clean-architecture.md)
- [Component Design](../principles/component-design.md)
- [Service Layer](../patterns/service-layer.md)
