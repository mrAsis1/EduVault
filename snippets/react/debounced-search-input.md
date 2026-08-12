# Debounced Search Input

Controlled search input that debounces the change callback — avoids
firing a request on every keystroke.

Complies with: `.github/instructions/react.instructions.md` (functional,
hooks, composition), `.github/instructions/typescript.instructions.md`
(explicit types, no `any`), `.github/instructions/accessibility.instructions.md`
(accessible name provided).

```tsx
import { useState, useEffect, useRef } from "react";

interface DebouncedSearchInputProps {
  onSearch: (query: string) => void;
  delayMs?: number;
  placeholder?: string;
  label: string;
}

export function DebouncedSearchInput({
  onSearch,
  delayMs = 300,
  placeholder,
  label,
}: DebouncedSearchInputProps) {
  const [value, setValue] = useState("");
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => onSearch(value), delayMs);
    return () => clearTimeout(timeoutRef.current);
  }, [value, delayMs, onSearch]);

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
      aria-label={label}
    />
  );
}
```

## Related MAW Documents

- `.github/instructions/performance.instructions.md` (debounce
  high-frequency handlers)
- `templates/component.md`
