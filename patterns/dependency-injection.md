# Dependency Injection

## Purpose

Explain how to supply dependencies from the outside instead of constructing them inside a class or module.

## Why it Matters

Injection makes dependencies visible, improves testability, and keeps policy separate from infrastructure. It also makes replacement easier when a dependency changes.

## Core Concepts

- A consumer declares what it needs.
- Another part of the system provides the implementation.
- The consumer does not decide how the dependency is created.

## When to Use

- Inject dependencies through constructors, parameters, or factories.
- Keep dependency graphs understandable.
- Use the smallest injection mechanism that solves the problem.

- Prefer explicit injection over hidden globals.
- Inject abstractions at boundaries.
- Keep object creation near composition roots.

## When Not to Use

- Using a container to hide design problems.
- Injecting everything just because it is possible.
- Creating tight coupling through service locators.

## Benefits

Dependency Injection improves clarity and testing.

## Drawbacks

It can add wiring code and cognitive overhead if the object graph is simple.

## Example

A service can accept a repository and logger in its constructor instead of creating them internally.

## Related MAW Documents

- [Composition Over Inheritance](../foundations/composition-over-inheritance.md)
- [SOLID](../foundations/solid.md)
- [Clean Architecture](../architecture/clean-architecture.md)
