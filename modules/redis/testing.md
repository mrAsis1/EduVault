# Redis: Testing

## Test against a real Redis instance for cache-dependent behavior

A containerized Redis (per
[`modules/docker/testing.md`](../docker/testing.md)) in integration
tests catches real TTL and eviction behavior a mocked client can't —
per [`docs/testing.md`](../../docs/testing.md)'s "integration tests at
real boundaries."

## Test the fail-open/fail-closed path explicitly

If a feature has a defined behavior for Redis being unavailable (per
[`architecture.md`](architecture.md)), that path needs its own test —
simulate a connection failure and assert the documented fallback
actually happens, not just the happy path.

## Related

- [`docs/testing.md`](../../docs/testing.md)
- [`architecture.md`](architecture.md)
