# API: REST vs GraphQL

## Purpose

Help choose the API style that best fits the client, data shape, and team constraints.

## Why it Matters

The wrong API style creates friction for clients or unnecessary complexity for the server. The right choice reduces over-fetching, duplicate endpoints, and contract churn.

## Core Concepts

- REST works well when resources are stable and cacheable.
- GraphQL works well when clients need different views of the same data.
- Both depend on a disciplined schema and clear ownership.

## When to Use

- Choose REST when the domain maps cleanly to resources and HTTP semantics matter.
- Choose GraphQL when multiple clients need different shapes from the same graph of data.
- Prefer the simpler option unless the extra flexibility is clearly useful.

- Design the API around client use cases, not internal tables.
- Keep response shapes consistent and documented.
- Validate and version contracts deliberately.

## When Not to Use

- Choosing GraphQL to avoid designing the data model.
- Building many REST endpoints that only exist to satisfy one frontend screen.
- Mixing both styles without a clear boundary.

## Benefits

REST is simpler to cache and operate. GraphQL is more flexible for clients.

## Drawbacks

Requires stricter schema governance and resolver discipline.

## Example

Use REST for a public product catalog. Use GraphQL when a dashboard needs several related objects in one request.

## Related MAW Documents

- [API Design](../principles/api-design.md)
- [Backend Framework](backend-framework.md)
- [Database Choice](database-choice.md)
