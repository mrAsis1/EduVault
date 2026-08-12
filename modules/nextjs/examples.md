# Next.js: Examples

## Example: Server Action with real authorization, not just a hidden form

```ts
// app/orders/actions.ts
"use server";

export async function cancelOrder(orderId: string) {
  const user = await getAuthenticatedUser();
  const order = await getOrder(orderId);

  if (order.userId !== user.id) {
    throw new Error("Forbidden");
  }

  await updateOrderStatus(orderId, "cancelled");
}
```

**Why this is a good example:** the action re-checks ownership itself,
rather than trusting that only the order's owner ever sees the cancel
button — matching [`security.md`](security.md)'s "Server Actions are
public endpoints."

## Related

- [`modules/react/examples.md`](../react/examples.md)
