# Service Layer

## Purpose

Explain how to place application use cases in a dedicated layer between UI and domain or persistence code.

## Why it Matters

The service layer keeps controllers, handlers, and components thin. It also creates a clear home for orchestration that should not live in presentation code.

## Core Concepts

- Services coordinate application workflows.
- They sit above repositories and below UI entry points.
- They own orchestration, not infrastructure.

## When to Use

- Put use case logic in services.
- Keep services focused on one business workflow.
- Keep controllers and views free of business decisions.

- Inject dependencies into services.
- Name services after the action or use case they perform.
- Test the service as the unit of application behavior.

## When Not to Use

- Turning services into a dumping ground.
- Moving domain logic into the wrong layer.
- Making services a second controller with no value.

## Benefits

The service layer adds structure and reuse.

## Drawbacks

If the application is tiny it may add more abstraction than benefit.

## Example

A checkout service can validate a cart, reserve inventory, charge payment, and create the order.

## Related MAW Documents

- [Layered Architecture](../architecture/layered.md)
- [When to Create a Service](../heuristics/when-to-create-service.md)
- [Clean Architecture](../architecture/clean-architecture.md)
