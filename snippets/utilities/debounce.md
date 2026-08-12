# Debounce

Generic debounce utility — the framework-agnostic version of the logic
inside `snippets/react/debounced-search-input.md`, for use outside
React (vanilla event listeners, Node scripts).

Complies with: `.github/instructions/performance.instructions.md`
(debounce high-frequency handlers), `.github/instructions/typescript.instructions.md`
(explicit generics, no `any`).

```ts
export function debounce<Args extends unknown[]>(
  fn: (...args: Args) => void,
  delayMs: number
): (...args: Args) => void {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: Args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delayMs);
  };
}
```

## Usage

```ts
const debouncedSave = debounce((value: string) => saveDraft(value), 500);
window.addEventListener("input", (e) => debouncedSave((e.target as HTMLInputElement).value));
```

## Related MAW Documents

- `.github/instructions/performance.instructions.md`
- `snippets/react/debounced-search-input.md`
- `snippets/utilities/retry-with-backoff.md`
