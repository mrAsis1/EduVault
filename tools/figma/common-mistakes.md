# Figma: Common Mistakes

## Hardcoded colors/spacing instead of applied design tokens

A frame using a raw hex value instead of the shared color style means
a later brand color update requires manually finding every instance —
the design-tool version of
[`foundations/dry.md`](../../foundations/dry.md)'s duplication problem.

## Implementing pixel values from Figma literally instead of the nearest token

Copying an exact `17px` from Figma into code as an arbitrary Tailwind
value, when the design system's `4` (16px) or `5` (20px) scale value
was clearly intended, silently breaks the design system's consistency
— see
[`modules/tailwind/best-practices.md`](../../modules/tailwind/best-practices.md)'s
"use the config's theme scale, not arbitrary values."

## Related

- [`best-practices.md`](best-practices.md)
