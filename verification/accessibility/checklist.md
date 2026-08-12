# Accessibility Verification Checklist

Traces to `.github/instructions/accessibility.instructions.md` (`[A11Y]`).

## Semantics and naming

- [ ] Semantic HTML elements used before custom `div`/`span` + ARIA
      `[A11Y]`
- [ ] Every interactive element has an accessible name (visible label,
      `aria-label`, or `aria-labelledby`) `[A11Y]`
- [ ] Icon-only buttons/controls have an accessible name `[A11Y]`
- [ ] Images conveying meaning have alt text; purely decorative images
      use `alt=""` `[A11Y]`

## Keyboard operability

- [ ] Every interactive element is reachable and operable by keyboard
      alone `[A11Y]`
- [ ] Focus order matches visual/reading order `[A11Y]`
- [ ] A visible focus indicator is present — no `outline: none` without
      an equally visible replacement `[A11Y]`
- [ ] No positive `tabIndex` values used `[A11Y]`
- [ ] No essential action/information hidden behind hover-only, with no
      keyboard or touch equivalent `[A11Y]`

## Custom components

- [ ] Any custom dropdown, modal, tabs, or drag-and-drop component has
      correct ARIA roles/states and full keyboard support `[A11Y]`
- [ ] Native controls used instead of custom-built equivalents where the
      native control already satisfies the interaction `[A11Y]`

## State and errors

- [ ] State/errors are conveyed through more than color alone `[A11Y]`

## Related MAW Documents

- `.github/instructions/accessibility.instructions.md`
- `principles/accessibility.md`
- `verification/accessibility/review-template.md`
