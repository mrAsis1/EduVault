# Backend Framework

## Purpose

Help choose a backend framework that matches team needs, delivery speed, and system complexity.

## Why it Matters

Framework choice shapes defaults, testing style, ecosystem support, and the amount of ceremony the team must carry.

## Core Concepts

- Opinionated frameworks speed up common paths.
- Minimal frameworks give more control but require more assembly.
- Ecosystem maturity matters as much as raw features.

## When to Use

- Choose the smallest framework that supports the required architecture.
- Prefer strong conventions when the team wants consistency.
- Prefer flexibility when the application has unusual runtime or integration needs.

- Evaluate routing, validation, testability, and deployment support together.
- Check whether the framework makes boundaries easy to enforce.
- Favor maintainability over novelty.

## When Not to Use

- Choosing a framework because it is fashionable.
- Optimizing for benchmarks that do not match the real workload.
- Ignoring the ecosystem around auth, tooling, and observability.

## Benefits

More opinionated frameworks reduce design decisions,.

## Drawbacks

Lighter frameworks reduce abstraction overhead. The right answer depends on how much structure the team needs.

## Example

Pick a convention-heavy framework for a CRUD-heavy product team. Pick a minimal framework if the app needs custom middleware or unusual request handling.

## Related MAW Documents

- [API Design](../principles/api-design.md)
- [Layered Architecture](../architecture/layered.md)
- [Maintainability](../principles/maintainability.md)
