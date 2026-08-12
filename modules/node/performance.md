# Node.js: Performance

General rules: [`.github/instructions/performance.instructions.md`](../../.github/instructions/performance.instructions.md).

## Offload CPU-bound work off the main thread

Worker threads (or a separate service/queue for heavier jobs) keep the
event loop free to handle I/O for other requests while a CPU-bound task
runs — see [`architecture.md`](architecture.md).

## Connection pooling over one-connection-per-request

Opening a new database connection per request is expensive and doesn't
scale; a pool reuses connections, per
[`.github/instructions/performance.instructions.md`](../../.github/instructions/performance.instructions.md)'s
"cache with clear invalidation" spirit applied to connections rather
than data.

## Measure with real profiling, not assumption

Node's built-in `--prof` flag or clinic.js show actual bottlenecks.
Per [`heuristics/when-to-optimize.md`](../../heuristics/when-to-optimize.md),
optimize what's measured, not what seems slow.

## Related

- [`.github/instructions/performance.instructions.md`](../../.github/instructions/performance.instructions.md)
- [`heuristics/when-to-optimize.md`](../../heuristics/when-to-optimize.md)
