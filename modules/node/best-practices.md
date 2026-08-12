# Node.js: Best Practices

## `async`/`await` over raw callbacks or unhandled promise chains

`async`/`await` makes error propagation explicit and traceable with
`try`/`catch`, versus deeply nested callbacks or a `.then()` chain
missing a final `.catch()`. Every `async` function that can reject
needs an explicit handling path at some level of the call stack — an
unhandled rejection is the async equivalent of
[`.github/instructions/debugging.instructions.md`](../../.github/instructions/debugging.instructions.md)'s
"silencing errors."

## Validate environment variables at startup, not at first use

Fail immediately on missing/invalid required config, rather than
crashing three requests into production traffic when a code path first
touches the missing variable — per
[`principles/error-handling.md`](../../principles/error-handling.md)'s
"fail fast on invalid input."

## Streams for large payloads

Reading a large file or request body fully into memory before
processing doesn't scale; Node's stream API processes data
incrementally. This is the direct Node instance of
[`.github/instructions/performance.instructions.md`](../../.github/instructions/performance.instructions.md)'s
"paginate or stream large datasets instead of loading fully into
memory."

## Related

- [`principles/error-handling.md`](../../principles/error-handling.md)
- [`.github/instructions/performance.instructions.md`](../../.github/instructions/performance.instructions.md)
