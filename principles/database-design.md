# Database Design

## Purpose

Explain how to model data so it stays correct, queryable, and maintainable.

## Why it Matters

Database design affects correctness, performance, and future change cost. A bad schema can force application workarounds that never really go away.

## Core Concepts

- Model the data around the business truth.
- Preserve invariants with constraints where possible.
- Design indexes around real queries.

## When to Use

- Normalize when relationships are important.
- Denormalize only for measured reasons.
- Treat migrations as part of the design.

- Use clear keys and relationships.
- Keep write paths and read paths understandable.
- Review query plans for expensive operations.

## When Not to Use

- Designing the schema from the UI alone.
- Ignoring referential integrity.
- Adding indexes without measuring the query patterns.

## Benefits

Strict schemas improve reliability and reasoning,.

## Drawbacks

More flexible structures can speed up certain product changes at the cost of more application logic.

## Example

Use a relational schema for orders, items, and payments. Add a search index only when text retrieval is a real requirement.

## Related MAW Documents

- [Database Choice](../decision-trees/database-choice.md)
- [Repository Pattern](../patterns/repository-pattern.md)
- [Performance First](performance-first.md)
