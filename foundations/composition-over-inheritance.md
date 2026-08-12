# Composition Over Inheritance

## Purpose

Explain why behavior should usually be assembled from smaller pieces instead of inherited from a base class.

## Why it Matters

Inheritance creates deep coupling to the parent class. Composition keeps dependencies explicit, lets behavior vary independently, and reduces the chance that one base-class change breaks many descendants.

## Core Concepts

- Composition combines focused parts.
- Inheritance shares a contract and implementation tree.
- The best default is to pass behavior in, not inherit it.

## When to Use

- Prefer delegation when a class can use another object to do the work.
- Use inheritance only for stable, genuinely shared behavior.
- Keep base classes small and predictable if you must use them.

- Model variation with strategies, adapters, or injected services.
- Use interfaces to define the expected behavior at the boundary.
- Keep subtype relationships honest; do not force an is-a relationship.

## When Not to Use

- Using inheritance for code reuse alone.
- Building deep hierarchies that are hard to reason about.
- Letting subclasses depend on base-class internals.

## Benefits

Composition usually creates more objects and wiring.

## Drawbacks

It gives better local reasoning and easier change isolation.

## Example

A notification system can compose email, SMS, and push senders instead of putting them in a single inheritance tree.

## Related MAW Documents

- [Strategy Pattern](../patterns/strategy-pattern.md)
- [Dependency Injection](../patterns/dependency-injection.md)
- [SOLID](solid.md)
