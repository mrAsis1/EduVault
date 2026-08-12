# GraphQL: Security

## Limit query depth and complexity

A single GraphQL endpoint that accepts arbitrary query shapes can be
abused with deeply nested or extremely broad queries to exhaust server
resources — a GraphQL-specific denial-of-service vector with no REST
equivalent. Set depth and complexity limits, per
[`.github/instructions/security.instructions.md`](../../.github/instructions/security.instructions.md)'s
general input-validation posture applied to query *shape*, not just
query *values*.

## Authorize per field, not just per query

A field resolver returning sensitive data (e.g. `User.email`) needs its
own authorization check if it can be reached through a different query
path than the one it was designed for — per
[`decision-trees/authorization.md`](../../decision-trees/authorization.md),
centralize this logic (e.g. in a directive or shared resolver helper)
rather than repeating ad hoc checks per resolver.

## Disable introspection and detailed error messages in production

Schema introspection is useful in development but hands an attacker a
full map of the API surface in production; detailed resolver error
messages can leak internal implementation details — per
[`principles/error-handling.md`](../../principles/error-handling.md)'s
"preserve context without exposing sensitive data."

## Related

- [`.github/instructions/security.instructions.md`](../../.github/instructions/security.instructions.md)
- [`decision-trees/authorization.md`](../../decision-trees/authorization.md)
