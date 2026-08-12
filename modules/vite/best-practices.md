# Vite: Best Practices

## Keep `vite.config.ts` declarative

Config should describe *what* plugins and settings apply, not contain
imperative logic beyond simple conditionals (`mode === "production"`).
Complex build logic belongs in a plugin, not inline in the config file
— consistent with [`docs/style-guide.md`](../../docs/style-guide.md)'s
general preference for clarity over cleverness.

## Use `import.meta.env`, not `process.env`, in client code

Vite replaces `import.meta.env.VITE_*` at build time; `process.env`
isn't defined in the browser and either fails or requires a shim.
Reach for `import.meta.env` directly rather than polyfilling Node's env
API.

## Alias paths in both `vite.config.ts` and `tsconfig.json`

If a path alias (`@/components`) is only defined in one, the dev server
or the type-checker will disagree with the other. Keep both in sync, or
generate one from the other.

## Related

- [`docs/style-guide.md`](../../docs/style-guide.md)
- [`modules/typescript/project-structure.md`](../typescript/project-structure.md)
