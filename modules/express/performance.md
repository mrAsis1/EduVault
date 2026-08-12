# Express: Performance

Builds on [`modules/node/performance.md`](../node/performance.md).

## Middleware order affects every request's latency

Expensive middleware (heavy logging, synchronous parsing of large
bodies) placed early in the chain runs on every request, including
ones that will be rejected by auth middleware later. Put cheap
rejection checks (auth, rate limiting) before expensive ones where
correctness allows it.

## Compression and caching headers

`compression` middleware and correct `Cache-Control` headers reduce
payload size and repeat-request cost — the HTTP-layer form of
[`.github/instructions/performance.instructions.md`](../../.github/instructions/performance.instructions.md)'s
"caching with clear invalidation."

## Related

- [`modules/node/performance.md`](../node/performance.md)
