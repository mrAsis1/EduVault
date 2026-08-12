# Retry With Exponential Backoff

Retries a failing async operation with increasing delay between
attempts — for transient failures (network blips, rate limits), not a
substitute for proper error handling of non-transient failures.

Complies with: `.github/instructions/typescript.instructions.md`
(explicit types, no `any`).

```ts
interface RetryOptions {
  attempts?: number;
  baseDelayMs?: number;
}

export async function retryWithBackoff<T>(
  fn: () => Promise<T>,
  { attempts = 3, baseDelayMs = 200 }: RetryOptions = {}
): Promise<T> {
  let lastError: unknown;

  for (let attempt = 0; attempt < attempts; attempt++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;
      if (attempt < attempts - 1) {
        const delay = baseDelayMs * 2 ** attempt;
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }

  throw lastError;
}
```

## Usage

```ts
const data = await retryWithBackoff(() => fetchFlakyEndpoint(), {
  attempts: 4,
  baseDelayMs: 300,
});
```

## Caution

Don't wrap a call that can fail for a non-transient reason (bad input,
403, 404) — retrying those just delays the inevitable and hides the
real error. Reserve this for genuinely transient failures.

## Related MAW Documents

- `.github/instructions/typescript.instructions.md`
- `snippets/utilities/debounce.md`
