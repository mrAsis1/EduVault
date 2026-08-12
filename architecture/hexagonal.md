# Hexagonal Architecture

## Purpose

Show how to organize a system around ports and adapters so the core stays independent of delivery and infrastructure choices.

## Why it Matters

Ports make dependencies explicit. Adapters let the same core accept HTTP, CLI, queues, tests, or background jobs without changing the business logic.

## Core Concepts

- A port is the interface the core exposes or consumes.
- An adapter translates between an external system and a port.
- Inbound adapters drive use cases; outbound adapters satisfy dependencies.

## When to Use

- Keep ports small and behavior-focused.
- Treat adapters as translation code, not policy code.
- Prefer use-case centric naming over transport-centric naming.

- Design ports from the needs of the core, not from framework capabilities.
- Put integration-specific details at the edge.
- Test the core through ports and stub adapters.

## When Not to Use

- Creating ports for every class instead of every boundary.
- Letting adapters leak transport concepts into the core.
- Duplicating the same business rule in multiple adapters.

## Benefits

Hexagonal Architecture adds indirection.

## Drawbacks

It makes replacement and testing much easier when the system has multiple entry points or infrastructure choices.

## Example

A billing use case can expose a `ChargeCustomer` port. HTTP, batch jobs, and a command-line tool can all call it through different adapters.

## Related MAW Documents

- [Clean Architecture](clean-architecture.md)
- [Repository Pattern](../patterns/repository-pattern.md)
- [Dependency Injection](../patterns/dependency-injection.md)
