# Redis: Security

## Never expose Redis directly to the public internet

Redis has minimal built-in auth by default in many setups — it should
sit behind a private network/VPC, reachable only by the application,
per
[`.github/instructions/security.instructions.md`](../../.github/instructions/security.instructions.md)'s
"principle of least privilege."

## Enable auth (`requirepass` / ACLs) even on a private network

Defense in depth: a private network reduces exposure but isn't a
substitute for authentication, consistent with
[`docs/security.md`](../../docs/security.md)'s "input is hostile until
proven otherwise" — treat network position as one layer, not the only
layer.

## Don't cache sensitive data unencrypted longer than necessary

Session tokens and similar sensitive values in Redis should have short
TTLs and, where the threat model warrants it, be encrypted at rest —
per [`docs/security.md`](../../docs/security.md).

## Related

- [`.github/instructions/security.instructions.md`](../../.github/instructions/security.instructions.md)
- [`docs/security.md`](../../docs/security.md)
