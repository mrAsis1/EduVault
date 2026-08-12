# Supabase: Common Mistakes

## Shipping a table with RLS disabled

```sql
-- Wrong: RLS off means any authenticated (or anonymous) client can read/write everything
create table orders (...);

-- Right: enable it, then define explicit policies
alter table orders enable row level security;
create policy "Users can view their own orders"
  on orders for select
  using (auth.uid() = user_id);
```

A table with RLS off is fully exposed to the client if the anon/public
key is used — see [`security.md`](security.md).

## Using the `service_role` key in client-side code

The `service_role` key bypasses RLS entirely — it belongs only in
server-side code (Edge Functions, a trusted backend), never shipped to
a browser or mobile client. Treat it exactly like any other server
secret per [`docs/security.md`](../../docs/security.md).

## Assuming the dashboard schema matches migrations

A manual dashboard edit not captured in a migration file will be lost
or cause drift the next time migrations run elsewhere (CI, another
developer's machine).

## Related

- [`security.md`](security.md)
