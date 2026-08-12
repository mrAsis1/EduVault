# Tailwind: Architecture

## Utility classes replace a separate stylesheet architecture, not component architecture

Tailwind changes *where* styling lives (inline utility classes) but
doesn't change component boundaries — a component's responsibility per
[`principles/component-design.md`](../../principles/component-design.md)
is unchanged whether it's styled with Tailwind or CSS modules. Don't
let "everything is inline now" become an excuse for components that
mix unrelated concerns.

## Design tokens live in `tailwind.config`, not scattered magic values

Colors, spacing, and typography scale should be defined once in
`tailwind.config.js`'s theme, and referenced by name everywhere
(`bg-brand-600`, not `bg-[#3366ff]`) — this is
[`ARCHITECTURE_DECISIONS.md`](../../ARCHITECTURE_DECISIONS.md)'s
ADR-0002 "never duplicate" applied to design values instead of
documentation.

## Related

- [`principles/component-design.md`](../../principles/component-design.md)
- [`docs/style-guide.md`](../../docs/style-guide.md)
