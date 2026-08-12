# Vite: Common Mistakes

## Exposing secrets via `VITE_` prefix

```
# Wrong — ships to the browser, visible in devtools
VITE_STRIPE_SECRET_KEY=sk_live_...

# Right — server-only, no VITE_ prefix, never referenced in client code
STRIPE_SECRET_KEY=sk_live_...
```

Any env var prefixed `VITE_` is bundled into client code. See
[`security.md`](security.md).

## Importing server-only code into a client bundle

Importing a Node-only module (e.g. one that reads `fs`) from a
component pulls it into the client bundle or breaks the build. Keep
server-only code in files never imported by client entry points.

## Mismatched aliases between `vite.config.ts` and `tsconfig.json`

The dev server resolves fine but the editor shows false type errors
(or vice versa) — see [`best-practices.md`](best-practices.md).

## Related

- [`security.md`](security.md)
