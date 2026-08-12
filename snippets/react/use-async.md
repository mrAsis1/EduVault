# useAsync Hook

Wraps an async function with loading/error/data state — avoids
repeating the same three `useState` calls in every component that
fetches something.

Complies with: `.github/instructions/react.instructions.md` (hooks,
composition over duplication), `.github/instructions/typescript.instructions.md`
(explicit generics, no `any`).

```tsx
import { useState, useCallback } from "react";

interface AsyncState<T> {
  data: T | null;
  error: Error | null;
  loading: boolean;
}

export function useAsync<T>(fn: () => Promise<T>) {
  const [state, setState] = useState<AsyncState<T>>({
    data: null,
    error: null,
    loading: false,
  });

  const run = useCallback(async () => {
    setState({ data: null, error: null, loading: true });
    try {
      const data = await fn();
      setState({ data, error: null, loading: false });
    } catch (err) {
      setState({
        data: null,
        error: err instanceof Error ? err : new Error(String(err)),
        loading: false,
      });
    }
  }, [fn]);

  return { ...state, run };
}
```

## Usage

```tsx
const { data, loading, error, run } = useAsync(() => fetchUser(id));
```

## Related MAW Documents

- `.github/instructions/typescript.instructions.md`
- `snippets/typescript/result-type.md` (alternative for explicit
  success/failure typing without exceptions)
