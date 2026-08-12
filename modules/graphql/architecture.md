# GraphQL: Architecture

## The schema is the contract; design it before resolvers

Per [`principles/api-design.md`](../../principles/api-design.md)'s "an
API is a contract," GraphQL makes this explicit and enforced by the
type system — but that only pays off if the schema is designed around
client use cases first, not generated mechanically from database
tables (which reintroduces REST's "exposing internal database shape
directly" problem `api-design.md` warns against, just via GraphQL
instead).

## Resolvers should delegate to services, not embed logic

A resolver's job mirrors a thin route handler's — per
[`modules/express/architecture.md`](../express/architecture.md), it
parses arguments, calls a service, and shapes the response. Business
logic belongs in the service layer underneath, per
[`patterns/service-layer.md`](../../patterns/service-layer.md), so it's
reachable and testable outside the GraphQL layer too.

## Related

- [`decision-trees/api-rest-vs-graphql.md`](../../decision-trees/api-rest-vs-graphql.md)
- [`patterns/service-layer.md`](../../patterns/service-layer.md)
