# Tailwind: Testing

## Test behavior, not exact class strings

Asserting a specific Tailwind class list in a test couples the test to
implementation detail exactly as
[`.github/instructions/testing.instructions.md`](../../.github/instructions/testing.instructions.md)
warns against — test what the user experiences (visible text, role,
whether an element is present/hidden), not which utility classes
produced it.

## Visual regression testing for genuinely visual concerns

For layout/responsive behavior that unit tests can't meaningfully
capture, a visual regression tool (Chromatic, Percy) is a better fit
than asserting class names — this is
[`decision-trees/testing.md`](../../decision-trees/testing.md)'s "match
the test type to the risk" applied to styling specifically.

## Related

- [`.github/instructions/testing.instructions.md`](../../.github/instructions/testing.instructions.md)
