# Postman: Best Practices

## A collection mirrors the API's actual documented shape

Organize requests by resource, matching
[`templates/api.md`](../../templates/api.md)'s structure — this keeps
the collection useful as living documentation, not just an ad hoc
scratchpad of requests someone made once.

## Environments hold config, never secrets committed to a shared collection

Base URLs and non-sensitive config belong in a shared, exportable
environment; API keys and tokens belong in Postman's "current value"
(local-only, not exported/synced) — the same secrets-never-committed
discipline as
[`docs/security.md`](../../docs/security.md), applied to a tool whose
export/share feature makes it easy to leak a secret by accident.

## Collections stay a manual-exploration tool, not a substitute for automated tests

A Postman collection confirms an endpoint works right now, for one
person, once. It doesn't run in CI, doesn't get regression-checked
automatically, and doesn't replace
[`.github/instructions/testing.instructions.md`](../../.github/instructions/testing.instructions.md)'s
requirement that new code ships with real tests.

## Related

- [`templates/api.md`](../../templates/api.md)
- [`docs/security.md`](../../docs/security.md)
