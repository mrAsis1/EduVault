---
applyTo: "**/*.tsx"
---

Always:

- Use semantic HTML elements before reaching for a `div`/`span` with ARIA
  bolted on (`<button>` not `<div onClick>`, `<nav>` not `<div class="nav">`)
- Provide an accessible name for every interactive element (visible label,
  `aria-label`, or `aria-labelledby`) — icon-only buttons always need one
- Keep focus order matching visual/reading order
- Keep a visible focus indicator — never `outline: none` without a
  replacement that's equally visible
- Ensure every interactive element is reachable and operable by keyboard
  alone (Tab, Enter/Space, Escape where applicable)
- Convey state and errors through more than color alone (icon, text, or
  pattern in addition to color)

Avoid:

- Custom interactive controls (dropdowns, modals, tabs) built without
  keyboard support and correct ARIA roles/states
- Hiding essential information or actions behind hover-only interactions
  with no keyboard/touch equivalent
- Positive `tabIndex` values — they break natural tab order
- Images conveying meaning without alt text (`alt=""` only for
  decorative images)

Prefer:

- Native controls (`<button>`, `<select>`, `<dialog>`) over custom-built
  equivalents when the native control already satisfies the interaction
- Testing new interactive components with keyboard-only navigation before
  requesting review

Any component introducing a new interaction pattern (custom dropdown,
drag-and-drop, custom modal) must be checked against
`verification/accessibility/checklist.md` before merge. Rationale and
the "why" behind these rules live in `principles/accessibility.md`.
