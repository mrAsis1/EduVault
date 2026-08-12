# Prisma: Security

## `$queryRaw`/`$executeRaw` need the same discipline as raw SQL

Prisma's query builder parameterizes automatically, but
`$queryRawUnsafe` and manually interpolated raw queries reopen the
exact SQL injection risk
[`.github/instructions/security.instructions.md`](../../.github/instructions/security.instructions.md)
exists to prevent. Prefer the query builder; if raw SQL is genuinely
needed, use `$queryRaw` with tagged template parameters, never string
concatenation.

## `DATABASE_URL` is a secret

The connection string often includes credentials — treat it exactly
like any other secret per
[`docs/security.md`](../../docs/security.md), never hardcoded or
committed.

## Related

- [`.github/instructions/security.instructions.md`](../../.github/instructions/security.instructions.md)
- [`docs/security.md`](../../docs/security.md)
