# Vite: Security

## The `VITE_` prefix is a security boundary, not a naming convention

Only prefix a variable `VITE_` if it's genuinely safe to be public. See
[`docs/security.md`](../../docs/security.md)'s "why secrets never live
in code" — the same reasoning applies even though this isn't a
committed secret, since the *bundle* itself becomes the public
distribution channel.

## Dev server exposure

`vite --host` exposes the dev server to the local network — fine for
testing on a phone, but shouldn't be left running as a de facto public
server. Production always goes through a real build + proper hosting,
never the dev server.

## Related

- [`docs/security.md`](../../docs/security.md)
- [`.github/instructions/security.instructions.md`](../../.github/instructions/security.instructions.md)
