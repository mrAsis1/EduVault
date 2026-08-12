# Singleton

## Purpose

Explain when a single shared instance is justified and why it is usually a last resort.

## Why it Matters

Singletons make global access easy, but they also hide dependencies and make testing and replacement harder. A shared instance should be a deliberate choice, not a default.

## Core Concepts

- One instance exists for a defined scope.
- The instance is globally reachable or centrally managed.
- The pattern is about lifetime, not convenience.

## When to Use

- Use singletons only for truly shared, stable resources.
- Prefer explicit injection when possible.
- Make initialization and lifecycle rules obvious.

- Keep singleton state minimal.
- Avoid mutable shared behavior unless there is a strong reason.
- Consider simpler lifetime management first.

## When Not to Use

- Using singletons as a substitute for good architecture.
- Hiding application state in a globally accessible object.
- Making tests depend on order because of shared state.

## Benefits

Singletons reduce wiring.

## Drawbacks

They increase coupling and can make behavior hard to reason about in larger systems.

## Example

A shared configuration cache may be acceptable. A domain service that performs business decisions is usually better injected than made global.

## Related MAW Documents

- [Dependency Injection](dependency-injection.md)
- [Maintainability](../principles/maintainability.md)
- [When to Use Global State](../heuristics/when-to-use-global-state.md)
