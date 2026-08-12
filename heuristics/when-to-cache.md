# When to Cache

## Purpose

Explain when caching improves performance or resilience enough to justify the complexity.

## Why it Matters

Caching can cut latency and load, but stale data and invalidation bugs can be worse than the original cost. The cache must solve a real bottleneck.

## Core Concepts

- Cache repeated expensive work.
- Keep invalidation rules clear.
- Cache closer to the consumer when possible.

## When to Use

- Cache only after measuring repeated cost.
- Choose a TTL or invalidation strategy that matches the data.
- Separate cached data from the source of truth.

- Start with simple caching boundaries.
- Monitor hit rate and freshness.
- Make cache misses safe and predictable.

## When Not to Use

- Caching everything because it might help.
- Forgetting to invalidate on writes.
- Using caching to hide a design problem.

## Benefits

Caching improves speed and reduces load.

## Drawbacks

It adds state, inconsistency risk, and operational overhead.

## Example

Cache a user profile read that is expensive and frequently repeated. Do not cache a rapidly changing counter unless the inconsistency is acceptable.

## Related MAW Documents

- [Performance First](../principles/performance-first.md)
- [When to Optimize](when-to-optimize.md)
- [Database Design](../principles/database-design.md)
