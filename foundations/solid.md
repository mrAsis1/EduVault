# SOLID

## Purpose

Summarize the five design principles that help code stay flexible and understandable.

## Why it Matters

SOLID is not a checklist for its own sake. It is a way to reduce coupling, keep responsibilities clear, and make changes local.

## Core Concepts

- Single Responsibility: one reason to change.
- Open/Closed: extend behavior without rewriting stable code.
- Liskov Substitution: subtypes must honor the contract.
- Interface Segregation: keep interfaces small and specific.
- Dependency Inversion: depend on abstractions, not concrete details.

## When to Use

- Use SRP to keep modules focused.
- Use OCP when variation is real and likely.
- Use LSP to prevent inheritance from lying about behavior.
- Use ISP to avoid forcing consumers to depend on unused methods.
- Use DIP to keep policy independent from implementation.

- Apply the principle that solves the current design problem.
- Prefer composition and small interfaces.
- Keep contracts honest and testable.

## When Not to Use

- Applying every principle to every file.
- Creating interfaces without multiple realistic implementations.
- Using SOLID language to justify abstraction without evidence.

## Benefits

The principles improve design quality.

## Drawbacks

Over-application can create unnecessary indirection. Use them to reduce change cost, not to add ceremony.

## Example

A payment service can separate validation, charging, and notification so each part can change independently.

## Related MAW Documents

- [Dependency Injection](../patterns/dependency-injection.md)
- [Composition Over Inheritance](composition-over-inheritance.md)
- [Maintainability](../principles/maintainability.md)
