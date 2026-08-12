# Common Accessibility Mistakes

## Semantics

**A clickable `div` styled to look like a button.** Works with mouse
click but not Tab/Enter/Space unless keyboard handlers and `role="button"`
are added manually — and they usually aren't. Traces to: semantic
elements before custom + ARIA.

**An icon-only button with no `aria-label`**, because the icon "obviously"
means delete/close/edit to a sighted user. Traces to: accessible name for
every interactive element.

## Keyboard

**A custom dropdown/modal built with mouse interaction only**, keyboard
support added later as an afterthought (or not at all). Traces to: custom
components need full keyboard support.

**`outline: none` in a global reset**, removing the focus ring
everywhere with no replacement — usually done to "clean up" the visual
design without checking what it breaks. Traces to: visible focus
indicator required.

**Hover-triggered menus/tooltips with no keyboard-accessible equivalent**
— a keyboard user simply cannot reach the content. Traces to: no
essential info behind hover-only.

## State

**Error state shown only as a red border**, with no icon or text change —
invisible to colorblind users and screen readers alike. Traces to: convey
state through more than color alone.

## Related MAW Documents

- `verification/accessibility/checklist.md`
- `.github/instructions/accessibility.instructions.md`
