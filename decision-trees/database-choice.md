# Database Choice

## Purpose

Help choose the right database model for the data shape, consistency needs, and query patterns.

## Why it Matters

The database often becomes the hardest part to change. A good fit reduces operational risk and makes core queries natural instead of forced.

## Core Concepts

- Relational databases fit structured data and transactional guarantees.
- Document databases fit flexible records and aggregate-shaped reads.
- Key-value stores fit simple lookups and short-lived state.
- Search systems fit text search and filtered retrieval.

## When to Use

- Choose relational by default when data is highly connected.
- Choose non-relational storage only when the access pattern clearly benefits.
- Model the most important queries before locking in the database.

- Preserve invariants as close to the data as practical.
- Keep migrations and backups part of the design, not an afterthought.
- Pick one system of record unless there is a clear reason to split it.

## When Not to Use

- Using a document database to avoid schema work.
- Choosing a search engine as the primary store.
- Ignoring join-heavy queries when evaluating storage.

## Benefits

Relational systems are stricter and easier to reason about. Flexible stores can speed up certain reads.

## Drawbacks

They often shift complexity into application code.

## Example

Choose a relational database for orders, payments, and inventory. Choose a document store for loosely structured content with frequent shape changes.

## Related MAW Documents

- [Database Design](../principles/database-design.md)
- [Repository Pattern](../patterns/repository-pattern.md)
- [API Design](../principles/api-design.md)
