# Repository Pattern

## Purpose

Explain how to wrap persistence access behind a collection-like interface.

## Why it Matters

Repositories let the rest of the application depend on business concepts instead of SQL, ORM details, or vendor-specific query code.

## Core Concepts

- The repository exposes domain-oriented persistence operations.
- The implementation hides storage details.
- The consumer does not know where the data comes from.

## When to Use

- Keep repositories focused on persistence and retrieval.
- Name methods after domain needs, not table structure.
- Use the repository boundary to isolate infrastructure changes.

- Combine repositories with dependency injection.
- Keep complex query logic readable and testable.
- Return domain-relevant data shapes.

## When Not to Use

- Making repositories thin ORM pass-throughs.
- Putting business rules in the repository.
- Creating one repository per table when the domain boundary is different.

## Benefits

Repositories protect the core from persistence churn.

## Drawbacks

They can add a layer that is unnecessary for tiny CRUD apps.

## Example

A user repository can expose `findByEmail` and `save` without exposing the underlying SQL schema.

## Related MAW Documents

- [Hexagonal Architecture](../architecture/hexagonal.md)
- [Database Design](../principles/database-design.md)
- [Dependency Injection](dependency-injection.md)
