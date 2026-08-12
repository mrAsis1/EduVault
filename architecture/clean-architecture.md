# Clean Architecture

## Purpose

Explain how to keep business rules independent from frameworks, delivery mechanisms, and external services.

## Why it Matters

When the center of the system depends on the outside world, simple changes in UI, storage, or transport ripple through the codebase. Clean Architecture makes core behavior easier to test, replace, and reason about.

## Core Concepts

- Dependency rule: source dependencies point inward.
- Inner layers hold policies and use cases.
- Outer layers hold controllers, presenters, databases, and frameworks.

## When to Use

- Put business decisions in the core, not in adapters.
- Define boundaries around inputs, outputs, and persistence.
- Inject implementations instead of hard-coding framework calls.

- Model use cases explicitly.
- Keep data transfer objects separate from domain objects when they solve different problems.
- Treat framework code as replaceable infrastructure.

## When Not to Use

- Creating layers without a clear dependency direction.
- Introducing abstractions before there is a boundary to protect.
- Turning the architecture into ceremony with no real change isolation.

## Benefits

Clean Architecture improves testability and change tolerance.

## Drawbacks

It adds mapping code and more moving parts. Use it when the domain is valuable enough to justify the structure.

## Example

A checkout flow can keep pricing, discounts, and validation in the use case layer while the web controller only translates HTTP requests and responses.

## Related MAW Documents

- [Hexagonal Architecture](hexagonal.md)
- [Layered Architecture](layered.md)
- [Separation of Concerns](../foundations/separation-of-concerns.md)
