# Figma: Best Practices

## Design tokens should map 1:1 to code tokens, by name

If Figma defines a color as `brand/600`, the codebase's
`tailwind.config.js` theme should use the same name
(`brand-600`) — per
[`modules/tailwind/architecture.md`](../../modules/tailwind/architecture.md)'s
"design tokens live in `tailwind.config`, not scattered magic values,"
the token's name should be the shared vocabulary between design and
code, not a value copied once and then drifting.

## Components in Figma should mirror component boundaries in code, where practical

Not a hard requirement — but when a Figma component and a code
component represent the same UI concept with the same name, handoff
conversations get much shorter. This is
[`principles/component-design.md`](../../principles/component-design.md)'s
"one primary responsibility" applied as a shared naming convention
across the design/code boundary.

## Related

- [`principles/component-design.md`](../../principles/component-design.md)
