# Redis: Best Practices

## Always set a TTL for cache entries

An un-expiring cache key is a memory leak and a staleness risk with no
natural correction — per
[`heuristics/when-to-cache.md`](../../heuristics/when-to-cache.md)'s
"keep invalidation rules clear," a TTL is the simplest invalidation
rule available and should be the default, not an afterthought.

## Choose the right data structure, not just strings

Redis's hashes, sorted sets, and lists often map more directly to the
actual access pattern than a JSON-serialized string blob — e.g. a
sorted set for a leaderboard avoids read-modify-write races that a
single JSON string would need extra locking to avoid.

## Namespace keys consistently

See [`project-structure.md`](project-structure.md).

## Related

- [`heuristics/when-to-cache.md`](../../heuristics/when-to-cache.md)
