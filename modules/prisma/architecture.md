# Prisma: Architecture

## `schema.prisma` is the single source of schema truth

The schema file generates both the database migrations and the
TypeScript client types — one file drives both, which is a strong,
built-in instance of
[`ARCHITECTURE_DECISIONS.md`](../../ARCHITECTURE_DECISIONS.md)'s
ADR-0002 "never duplicate — link instead," applied to schema and types
staying in sync automatically rather than by discipline.

## Wrap Prisma calls behind a repository, don't call the client from everywhere

Even though the generated client is convenient to import anywhere,
importing `PrismaClient` directly into route handlers or components
couples the whole app to Prisma's API. A repository layer (per
[`patterns/repository-pattern.md`](../../patterns/repository-pattern.md))
keeps that coupling in one place, so swapping ORMs or mocking in tests
doesn't ripple through the codebase.

## Related

- [`patterns/repository-pattern.md`](../../patterns/repository-pattern.md)
- [`docs/architecture.md`](../../docs/architecture.md)
