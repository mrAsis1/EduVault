# Tailwind: Performance

## Production builds purge unused classes automatically

Tailwind only ships CSS for classes actually found via the `content`
scan — there's no manual purging step needed, but an inaccurate
`content` glob (too broad, scanning `node_modules`) can slow builds
unnecessarily. Scope `content` tightly to actual source directories.

## Avoid excessive arbitrary values at scale

Each unique arbitrary value (`w-[437px]`) generates its own CSS rule
that can't be shared/cached the way a theme-scale utility can across
components — a minor cost individually, but see
[`best-practices.md`](best-practices.md) for the better reason to avoid
them (design consistency, not just performance).

## Related

- [`.github/instructions/performance.instructions.md`](../../.github/instructions/performance.instructions.md)
