# Vite: Project Structure

## Config file placement

`vite.config.ts` lives at the project root, alongside `package.json` —
this is a Vite convention, not one MAW imposes, but it's worth stating
so it isn't accidentally moved into `src/`.

## Env files

- `.env` — defaults, safe to commit if it contains no secrets.
- `.env.local` — local overrides, gitignored.
- `.env.production` — production-specific, non-secret values only.

Only variables prefixed `VITE_` are exposed to client code — this is a
deliberate Vite safeguard, not an accident. See
[`security.md`](security.md) for why that prefix boundary matters.

## Related

- [`docs/folder-structure.md`](../../docs/folder-structure.md)
- [`docs/git-workflow.md`](../../docs/git-workflow.md) (why `.env` is never committed with secrets)
