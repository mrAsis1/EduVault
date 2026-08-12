# API Design

## Purpose

Explain how to design APIs that are predictable, durable, and easy to use correctly.

## Why it Matters

An API is a contract. Good API design reduces integration friction, avoids accidental misuse, and makes versioning less painful.

## Core Concepts

- APIs should model the domain or use case.
- Names and shapes should be consistent.
- Errors should be actionable and stable.

## When to Use

- Prefer explicit request and response structures.
- Keep endpoints or methods focused.
- Design for the caller's most common paths.

- Use clear naming and stable contracts.
- Validate inputs at the boundary.
- Version deliberately when breaking change is unavoidable.

## When Not to Use

- Exposing internal database shape directly.
- Making endpoints do too many unrelated things.
- Returning errors that are hard to act on.

## Benefits

Highly flexible APIs can be powerful.

## Drawbacks

They are harder to understand. Simpler APIs are easier to adopt and maintain.

## Example

A `createOrder` endpoint should accept the data needed to create an order, not a copy of the database schema.

## Related MAW Documents

- [REST vs GraphQL](../decision-trees/api-rest-vs-graphql.md)
- [Database Design](database-design.md)
- [Error Handling](error-handling.md)
