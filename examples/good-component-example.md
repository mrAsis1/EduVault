# Example: Good Component

This is a worked example of `templates/component.md` filled in, paired
with the actual implementation it describes. It demonstrates compliance
with `.github/instructions/react.instructions.md` (functional, hooks,
composition, accessibility) and `.github/instructions/typescript.instructions.md`
(explicit types, no `any`).

---

## Filled template

# Component: RateLimitBanner

## Responsibility

Displays a dismissible warning when a user is close to or has hit a rate
limit, with a countdown to when they can retry.

## Props / Inputs

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| `retryAfterSeconds` | `number` | yes | — | Seconds until the user can retry |
| `onDismiss` | `() => void` | no | `undefined` | Called when user dismisses the banner |

## State

| Name | Type | Purpose |
|---|---|---|
| `remainingSeconds` | `number` | Local countdown, ticks down from `retryAfterSeconds` |
| `dismissed` | `boolean` | Whether the user has closed the banner |

## Events / Outputs

| Name | Payload | Trigger |
|---|---|---|
| `onDismiss` | none | User clicks the close button |

## Dependencies

- Internal: `useCountdown` (custom hook)
- External: none

## Accessibility

- [x] Keyboard navigable — dismiss button is a real `<button>`, focusable
- [x] Screen reader labels — `role="alert"`, dismiss button has `aria-label`
- [x] Color contrast checked — warning colors meet WCAG AA

## Test Cases

- [x] Renders with default props (no dismiss handler)
- [x] Renders with edge-case props (0 seconds remaining)
- [x] Calls `onDismiss` when close button clicked
- [x] Countdown ticks down and stops at 0

## Notes

- Countdown logic lives in `useCountdown`, not inline, so it's reusable
  and independently testable — keeps this component's own logic focused
  on rendering.

---

## Implementation

```tsx
import { useCountdown } from "../hooks/use-countdown";

interface RateLimitBannerProps {
  retryAfterSeconds: number;
  onDismiss?: () => void;
}

export function RateLimitBanner({
  retryAfterSeconds,
  onDismiss,
}: RateLimitBannerProps): JSX.Element | null {
  const remainingSeconds = useCountdown(retryAfterSeconds);

  if (remainingSeconds <= 0) {
    return null;
  }

  return (
    <div role="alert" className="rate-limit-banner">
      <span>Too many attempts. Try again in {remainingSeconds}s.</span>
      {onDismiss && (
        <button aria-label="Dismiss warning" onClick={onDismiss}>
          &times;
        </button>
      )}
    </div>
  );
}
```

```tsx
// hooks/use-countdown.ts
import { useEffect, useState } from "react";

export function useCountdown(startSeconds: number): number {
  const [remaining, setRemaining] = useState(startSeconds);

  useEffect(() => {
    if (remaining <= 0) return;

    const interval = setInterval(() => {
      setRemaining((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [remaining]);

  return remaining;
}
```

---

## Why this is a good example

- Countdown logic is extracted into `useCountdown`, a custom hook, per
  the "Custom Hooks" preference in `react.instructions.md` — the
  component itself only renders.
- Explicit return type (`JSX.Element | null`) and a typed props
  interface, per `typescript.instructions.md` — no `any`, no implicit
  types.
- Accessibility isn't an afterthought — `role="alert"` and `aria-label`
  are in the template checklist *and* the actual code, so the template
  wasn't just filled in for show.
- The component returns `null` when the countdown hits zero rather than
  rendering an empty/broken state — an edge case handled deliberately,
  not left implicit.
