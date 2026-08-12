# Tailwind: Security

## User-controlled values should never become arbitrary Tailwind values

```tsx
// Wrong: unbounded user input reaching into a build-time-scanned class string
<div className={`w-[${userInput}px]`} />
```

Beyond the fact this doesn't work as expected (see
[`common-mistakes.md`](common-mistakes.md) on dynamic class names), if
user input ever reaches a rendered style/class in any form, treat it
with the same suspicion as any other unsanitized output per
[`.github/instructions/security.instructions.md`](../../.github/instructions/security.instructions.md)'s
"escape output rendered into HTML/DOM contexts" — CSS injection is a
real, if less common, risk.

## Related

- [`.github/instructions/security.instructions.md`](../../.github/instructions/security.instructions.md)
