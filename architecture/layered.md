# Layered Architecture

## Purpose

Describe a simple structure that separates presentation, application, and data concerns into ordered layers.

## Why it Matters

Layered systems are easy to explain and onboard. The structure works well when the team needs a familiar model more than deep flexibility.

## Core Concepts

- Upper layers call lower layers.
- Each layer owns one responsibility type.
- Business logic should not depend on UI or storage details.

## When to Use

- Keep the layer order consistent.
- Move shared business rules into the application or domain layer.
- Expose data through services or repositories rather than direct database calls.

- Use the smallest number of layers that makes the system clear.
- Name layers by role, not by framework.
- Draw a boundary around anything that changes for a different reason.

## When Not to Use

- Letting the presentation layer reach into persistence.
- Splitting code into layers that only forward calls.
- Treating the pattern as a license for one giant service per layer.

## Benefits

Layered Architecture is straightforward.

## Drawbacks

It can become leaky when domain rules scatter across controllers, services, and repositories. It is best when the problem is moderate and the team values simplicity.

## Example

A web app can keep controllers in the presentation layer, use cases in the application layer, and database access in the data layer.

## Related MAW Documents

- [Clean Architecture](clean-architecture.md)
- [Service Layer](../patterns/service-layer.md)
- [Feature Folder](../patterns/feature-folder.md)
