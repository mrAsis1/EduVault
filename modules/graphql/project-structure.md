# GraphQL: Project Structure

```
src/
  schema/
    <domain>.graphql          — SDL, one file per domain
  resolvers/
    <domain>.resolvers.ts      — thin, delegates to services
  services/                     — shared with the rest of the backend, per service-layer.md
```

## Schema-first: `.graphql` SDL files as the source of truth

Generate TypeScript types from the schema (e.g. via GraphQL Code
Generator), rather than hand-writing types that must be kept in sync
manually — the same "generated, never hand-edited" discipline as
[`modules/supabase/project-structure.md`](../supabase/project-structure.md)'s
generated database types.

## Related

- [`patterns/service-layer.md`](../../patterns/service-layer.md)
