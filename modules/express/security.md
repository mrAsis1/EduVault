# Express: Security

Builds on [`modules/node/security.md`](../node/security.md).

## `helmet` for baseline HTTP header hardening

Sets sane defaults (CSP, X-Frame-Options, etc.) that a hand-rolled
Express app otherwise omits by default. Prefer it over manually
setting each header, per
[`docs/security.md`](../../docs/security.md)'s "prefer well-maintained,
audited libraries."

## Rate limiting on auth and other sensitive routes

Unbounded login attempts are a brute-force vector. `express-rate-limit`
or equivalent on `/login`, `/reset-password`, etc., mirrors the rate
limiting example in
[`examples/good-feature-plan.md`](../../examples/good-feature-plan.md).

## CORS configured explicitly, not wide open

`cors()` with no options allows any origin — scope it to the actual
known frontend origin(s), per
[`.github/instructions/security.instructions.md`](../../.github/instructions/security.instructions.md)'s
"principle of least privilege" applied to cross-origin access.

## Related

- [`.github/instructions/security.instructions.md`](../../.github/instructions/security.instructions.md)
- [`examples/good-feature-plan.md`](../../examples/good-feature-plan.md)
