# Supabase: Examples

## Example: RLS policy matching the app's authorization rule

```sql
-- Only the order's owner, or an admin, can view it
create policy "Owner or admin can view order"
  on orders for select
  using (
    auth.uid() = user_id
    or exists (
      select 1 from profiles
      where profiles.id = auth.uid() and profiles.role = 'admin'
    )
  );
```

```ts
// Client code doesn't need its own authorization check — RLS enforces it
const { data, error } = await supabase
  .from("orders")
  .select("*")
  .eq("id", orderId)
  .single();
```

**Why this is a good example:** the authorization rule lives in exactly
one place (the policy), matching
[`ARCHITECTURE_DECISIONS.md`](../../ARCHITECTURE_DECISIONS.md)'s
ADR-0002 "no duplication" applied to security rules specifically — the
client trusts the database to enforce it rather than re-implementing
the check.

## Related

- [`security.md`](security.md)
