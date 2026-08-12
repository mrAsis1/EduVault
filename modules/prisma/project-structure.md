# Prisma: Project Structure

```
prisma/
  schema.prisma
  migrations/
    20240101000000_init/
      migration.sql
src/
  repositories/
    orders.repository.ts     — wraps prisma.order.*, per repository-pattern.md
  lib/
    prisma-client.ts           — one shared PrismaClient instance
```

## One `PrismaClient` instance, shared

Instantiating `new PrismaClient()` per request/module exhausts database
connections under load. Create one instance in `lib/prisma-client.ts`
and import it everywhere — this is the connection-pooling form of
[`.github/instructions/performance.instructions.md`](../../.github/instructions/performance.instructions.md).

## Related

- [`patterns/repository-pattern.md`](../../patterns/repository-pattern.md)
- [`templates/database.md`](../../templates/database.md)
