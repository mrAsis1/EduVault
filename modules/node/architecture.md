# Node.js: Architecture

## Single-threaded event loop shapes everything

Node runs JavaScript on one thread; concurrency comes from
non-blocking I/O, not parallel execution. A CPU-bound synchronous
operation (heavy computation, synchronous JSON parsing of a huge
payload) blocks that one thread for everyone — this is the concrete
reason behind
[`.github/instructions/performance.instructions.md`](../../.github/instructions/performance.instructions.md)'s
"avoid blocking the main thread with synchronous heavy computation" in
a Node context specifically. Offload genuinely CPU-bound work to a
worker thread or a separate service.

## Layered module boundaries still apply

[`docs/architecture.md`](../../docs/architecture.md)'s "depend on
abstractions at boundaries" applies directly: a service module
shouldn't import a database driver directly — depend on a repository
interface, per [`patterns/repository-pattern.md`](../../patterns/repository-pattern.md),
so the database can be swapped or mocked in tests.

## Related

- [`docs/architecture.md`](../../docs/architecture.md)
- [`patterns/repository-pattern.md`](../../patterns/repository-pattern.md)
