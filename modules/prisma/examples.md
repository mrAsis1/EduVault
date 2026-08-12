# Prisma: Examples

## Example: repository wrapping Prisma, per repository-pattern.md

```ts
// repositories/orders.repository.ts
export class OrdersRepository {
  async findByUser(userId: string) {
    return prisma.order.findMany({
      where: { userId },
      include: { items: true }, // avoids N+1, see common-mistakes.md
    });
  }
}
```

```ts
// services/orders.service.ts — depends on the repository, not Prisma directly
export class OrdersService {
  constructor(private repo: OrdersRepository) {}

  async getUserOrders(userId: string) {
    return this.repo.findByUser(userId);
  }
}
```

**Why this is a good example:** the service has no import of
`PrismaClient` at all — it depends on `OrdersRepository`'s interface,
matching [`architecture.md`](architecture.md)'s "wrap Prisma calls
behind a repository."

## Related

- [`patterns/repository-pattern.md`](../../patterns/repository-pattern.md)
