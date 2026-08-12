# Postman: Common Mistakes

## Hardcoding a real API key into a shared, exported collection

```
Authorization: Bearer sk_live_abc123...   ← baked into the request, exported/shared as-is
```

Once exported or synced to a team workspace, that key is now wherever
the collection is — treat it exactly like committing a secret to git,
per [`docs/security.md`](../../docs/security.md). Use an environment
variable reference (`{{api_key}}`) instead, with the actual value kept
local.

## Treating a passing manual request as equivalent to test coverage

A request that returns `200` once in Postman doesn't mean the endpoint
is tested — see [`best-practices.md`](best-practices.md).

## Related

- [`best-practices.md`](best-practices.md)
