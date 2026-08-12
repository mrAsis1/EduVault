# Prisma: Common Mistakes

## N+1 queries from looped `findUnique` calls

```ts
// Wrong: one query per order
const orders = await prisma.order.findMany();
for (const order of orders) {
  order.user = await prisma.user.findUnique({ where: { id: order.userId } });
}

// Right: one query total
const orders = await prisma.order.findMany({ include: { user: true } });
```

This is the Prisma-specific instance of
[`.github/instructions/performance.instructions.md`](../../.github/instructions/performance.instructions.md)'s
"N+1 queries — batch or join instead."

## Editing a generated migration file by hand after it's applied

Migration files are meant to be immutable history, per
[`principles/database-design.md`](../../principles/database-design.md)'s
"treat migrations as part of the design." Hand-editing an already-applied
migration desyncs environments that already ran the original version.

## Instantiating multiple `PrismaClient`s

See [`project-structure.md`](project-structure.md).

## Related

- [`performance.md`](performance.md)
