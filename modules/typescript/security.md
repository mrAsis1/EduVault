# TypeScript: Security

## Types are a compile-time guarantee, not a runtime one

A type annotation says "this is what the code expects," not "this is
what's actually here." Data crossing a real boundary — an API request
body, `JSON.parse` output, environment variables — must be validated
at runtime (e.g. with a schema library like Zod), per
[`.github/instructions/security.instructions.md`](../../.github/instructions/security.instructions.md)'s
"validate and sanitize all external input." Casting `req.body as
CreateUserRequest` with no runtime check is not validation, it's a
type-level assumption with no enforcement behind it.

## Related

- [`.github/instructions/security.instructions.md`](../../.github/instructions/security.instructions.md)
- [`principles/security-first.md`](../../principles/security-first.md)
