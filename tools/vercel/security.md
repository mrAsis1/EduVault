# Vercel: Security

## Scope environment variables per environment, strictly

Production secrets should never also be available to Preview
deployments unless there's a specific, considered reason — per
[`.github/instructions/security.instructions.md`](../../.github/instructions/security.instructions.md)'s
"principle of least privilege," a preview deployment (often reachable
by anyone with the link, including in a public PR on an open-source
repo) shouldn't carry production-level access by default.

## `NEXT_PUBLIC_` variables are public in every environment, including previews

Same boundary as
[`modules/nextjs/security.md`](../../modules/nextjs/security.md) —
worth restating here because it's easy to forget a preview deployment
ships the same public bundle exposure as production.

## Restrict who can trigger deployments and view environment variable values

Team/project access settings control who can see configured secret
values in the dashboard — scope this the same way you'd scope any
other credential access, per
[`docs/security.md`](../../docs/security.md).

## Related

- [`.github/instructions/security.instructions.md`](../../.github/instructions/security.instructions.md)
- [`modules/nextjs/security.md`](../../modules/nextjs/security.md)
