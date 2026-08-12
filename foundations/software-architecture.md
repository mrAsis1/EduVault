# Software Architecture

## Purpose

Define architecture as the set of structural decisions that are expensive to change later.

## Why it Matters

Architecture is not just folder layout. It is how a system handles boundaries, dependencies, deployment shape, data ownership, and change isolation.

## Core Concepts

- Architecture captures hard-to-change decisions.
- Good architecture makes the important things easier to change.
- Boundaries should be intentional, not accidental.

## When to Use

- Design around change, not around code generation or fashion.
- Keep the core of the system independent from unstable details.
- Make module and service boundaries visible in code.

- Document architectural decisions when they matter.
- Revisit boundaries when the system's pain points change.
- Prefer simple architectures that fit the current scale.

## When Not to Use

- Calling any folder structure an architecture.
- Adding distributed systems complexity without a need.
- Refusing to adjust boundaries when the domain changes.

## Benefits

Architecture adds upfront thinking.

## Drawbacks

It prevents expensive redesign later. The wrong architecture is costly either through overengineering or through uncontrolled coupling.

## Example

A project can use a modular monolith today and only split services when a real boundary, team need, or scaling pressure appears.

## Related MAW Documents

- [Architecture](../docs/architecture.md)
- [Modular Monolith](../architecture/modular-monolith.md)
- [Microservices](../architecture/microservices.md)
