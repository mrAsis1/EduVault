# Vite: Examples

## Example: safe vs unsafe env variable usage

```ts
// vite.config.ts
export default defineConfig({
  define: {
    // Wrong: bakes a server secret into the client bundle
    __API_SECRET__: JSON.stringify(process.env.API_SECRET),
  },
});
```

```ts
// Right: only the public base URL is exposed, via the VITE_ prefix convention
// .env
VITE_API_BASE_URL=https://api.example.com
```

```ts
// client code
fetch(`${import.meta.env.VITE_API_BASE_URL}/users`);
```

**Why this is a good example:** the secret never leaves the server; the
client only receives what it's meant to see, matching
[`security.md`](security.md).

## Related

- [`modules/typescript/examples.md`](../typescript/examples.md)
