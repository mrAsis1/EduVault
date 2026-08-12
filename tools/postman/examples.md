# Postman: Examples

## Example: collection structure mirroring templates/api.md

```
Orders API (collection)
├── Environments
│   └── local.postman_environment.json  (base_url, no secrets)
├── Orders
│   ├── GET /orders
│   ├── GET /orders/:id
│   ├── POST /orders
│   └── DELETE /orders/:id
```

```
// Request auth header, referencing an environment variable, not a literal key
Authorization: Bearer {{api_token}}
```

**Why this is a good example:** the collection is organized by
resource matching [`templates/api.md`](../../templates/api.md), and the
actual token value lives only in the local environment's current
value, never in the exported/shared collection file, per
[`best-practices.md`](best-practices.md).

## Related

- [`templates/api.md`](../../templates/api.md)
