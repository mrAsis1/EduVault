# When to Create a Service

## Purpose

Explain when application logic should move into a service instead of staying in controllers or components.

## Why it Matters

Services centralize orchestration and business rules that would otherwise be duplicated across entry points. They also create a stable place for non-UI logic to live.

## Core Concepts

- A service coordinates a business operation.
- A service should have a clear responsibility.
- Entry points should call services, not reimplement them.

## When to Use

- Create a service when the same workflow appears in more than one place.
- Move nontrivial decision logic out of controllers and UI code.
- Keep service APIs business-focused.

- Inject external dependencies into the service.
- Keep services easy to test without a full app stack.
- Avoid putting every helper into one service class.

## When Not to Use

- Using services as a dumping ground.
- Making services thin wrappers around repositories.
- Creating a service before there is real shared logic.

## Benefits

Services improve reuse and testability.

## Drawbacks

Too many of them create an extra layer with little value.

## Example

Use a service for checkout orchestration that applies pricing, inventory checks, and payment calls. Keep a one-off form handler in the component if no other caller exists.

## Related MAW Documents

- [Service Layer](../patterns/service-layer.md)
- [Layered Architecture](../architecture/layered.md)
- [When to Refactor](when-to-refactor.md)
