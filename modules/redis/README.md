# Module: Redis

Covers Redis as a cache and ephemeral store. General caching reasoning
lives in `heuristics/when-to-cache.md`; this module is Redis-specific.

## In this module

| File | Covers |
|---|---|
| [`architecture.md`](architecture.md) | Redis's role: cache vs system of record |
| [`project-structure.md`](project-structure.md) | Key naming, client setup |
| [`best-practices.md`](best-practices.md) | TTLs, key naming, data structures |
| [`common-mistakes.md`](common-mistakes.md) | Recurring Redis failure patterns |
| [`performance.md`](performance.md) | Pipelining, memory management |
| [`security.md`](security.md) | Access control, network exposure |
| [`testing.md`](testing.md) | Testing cache-dependent code |
| [`examples.md`](examples.md) | Worked examples |

## Relationship to other layers

- [`heuristics/when-to-cache.md`](../../heuristics/when-to-cache.md)
- [`principles/performance-first.md`](../../principles/performance-first.md)
