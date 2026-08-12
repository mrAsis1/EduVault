# PostgreSQL: Security

## Parameterized queries are non-negotiable

This is [`.github/instructions/security.instructions.md`](../../.github/instructions/security.instructions.md)'s
"never string-concatenated SQL" applied directly — every query
interface in front of Postgres (raw driver, ORM, query builder) must
parameterize user input, no exceptions for "trusted" internal input
either.

## Least-privilege database roles

The application's database user shouldn't have superuser or
schema-altering privileges in production — scope it to the CRUD
operations it actually performs, per
[`.github/instructions/security.instructions.md`](../../.github/instructions/security.instructions.md)'s
"principle of least privilege," applied to database roles.

## Related

- [`.github/instructions/security.instructions.md`](../../.github/instructions/security.instructions.md)
