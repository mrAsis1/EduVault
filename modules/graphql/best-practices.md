# GraphQL: Best Practices

## Design the schema around client needs, not database tables

Per [`architecture.md`](architecture.md) — a `User` type shouldn't
mechanically mirror a `users` table; it should expose what clients
actually need, potentially computed or joined from multiple tables
behind one resolver.

## Use DataLoader (or equivalent) to batch resolver calls

Prevents the N+1 resolver problem described in
[`common-mistakes.md`](common-mistakes.md) — this is the standard,
well-maintained solution, per
[`docs/security.md`](../../docs/security.md)'s general "prefer
well-maintained, audited libraries" reasoning applied to a performance
tool.

## Version by evolving the schema, not by breaking it

GraphQL's typical evolution path is additive (new fields, deprecating
old ones with `@deprecated`) rather than versioned endpoints — plan
field removal with real deprecation windows, consistent with
[`docs/git-workflow.md`](../../docs/git-workflow.md)'s general
"breaking changes need a stated plan" spirit.

## Related

- [`architecture.md`](architecture.md)
- [`principles/api-design.md`](../../principles/api-design.md)
