# GraphQL: Performance

## Batch with DataLoader as the default, not an optimization added later

Given how easy the N+1 pattern is to write accidentally (see
[`common-mistakes.md`](common-mistakes.md)), treat DataLoader as part
of the baseline resolver pattern for any relationship field, not a fix
applied only after a measured problem — this is one of the rare cases
where the "measure before optimizing" default from
[`heuristics/when-to-optimize.md`](../../heuristics/when-to-optimize.md)
is superseded by how cheap and structural the batching fix is.

## Limit query depth and complexity

Unbounded query nesting is both a performance and security concern
(see [`security.md`](security.md)) — set explicit limits via a
complexity-analysis library rather than trusting client queries to stay
reasonable.

## Related

- [`common-mistakes.md`](common-mistakes.md)
- [`security.md`](security.md)
