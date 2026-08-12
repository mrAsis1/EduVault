# Adapter Pattern

## Purpose

Explain how to bridge two incompatible interfaces without changing either side.

## Why it Matters

Adapters let old code, third-party APIs, or different layers talk to each other through a stable local interface. That keeps the rest of the system from depending on external shapes directly.

## Core Concepts

- The target interface is what the local code expects.
- The adaptee is the existing thing you need to use.
- The adapter translates between them.

## When to Use

- Put translation logic in one place.
- Keep the adapter thin and predictable.
- Let the core depend on the target interface, not the adaptee.

- Use adapters at boundaries such as APIs, databases, and vendors.
- Name adapters after the system they wrap or the boundary they serve.
- Test the translation, especially for edge cases.

## When Not to Use

- Mixing business rules into the adapter.
- Building adapters when both sides already match.
- Letting one adapter leak transport details into the core.

## Benefits

Adapters add indirection.

## Drawbacks

They make replacement and integration easier when systems do not speak the same language.

## Example

A payment adapter can translate a local `ChargeCustomer` call into a provider-specific API request.

## Related MAW Documents

- [Hexagonal Architecture](../architecture/hexagonal.md)
- [Repository Pattern](repository-pattern.md)
- [Dependency Injection](dependency-injection.md)
