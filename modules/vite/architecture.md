# Vite: Architecture

## Vite's role: dev server + bundler, not a framework

Vite provides fast dev-server startup (native ESM, no bundling in dev)
and a Rollup-based production build. It doesn't dictate application
structure — that's the framework's job (React, Vue) or the project's
own conventions per [`docs/folder-structure.md`](../../docs/folder-structure.md).
Keep `vite.config.ts` scoped to build/dev concerns; application
architecture decisions don't belong there.

## Plugins as the extension boundary

Vite's plugin system is the sanctioned way to extend behavior (SVG
imports, path aliases, framework support). Prefer an existing,
maintained plugin over a custom transform — per
[`docs/security.md`](../../docs/security.md)'s "prefer well-maintained,
audited libraries," this applies to build tooling too, since a plugin
runs arbitrary code at build time.

## Related

- [`docs/architecture.md`](../../docs/architecture.md)
- [`decision-trees/frontend-framework.md`](../../decision-trees/frontend-framework.md)
