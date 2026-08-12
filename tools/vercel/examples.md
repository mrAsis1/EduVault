# Vercel: Examples

## Example: environment variables scoped correctly across environments

```
# Production environment only
DATABASE_URL=postgres://prod-host/db
STRIPE_SECRET_KEY=sk_live_...

# Preview environment only — points at a safe, isolated test resource
DATABASE_URL=postgres://staging-host/db
STRIPE_SECRET_KEY=sk_test_...

# All environments — genuinely safe to be public
NEXT_PUBLIC_API_BASE_URL=https://api.example.com
```

**Why this is a good example:** a PR preview deployment can never
touch the real database or charge a real card, even though it's a
live, publicly reachable deployment — matching
[`security.md`](security.md)'s "scope environment variables per
environment, strictly."

## Related

- [`security.md`](security.md)
