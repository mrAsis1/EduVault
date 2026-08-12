# Next.js: Performance

Builds on [`modules/react/performance.md`](../react/performance.md).

## Static generation and caching are the primary lever

Before reaching for `memo`/`useMemo` (the React-level tools), check
whether a route can be statically generated or its data cached with
`revalidate` — moving work to build time or a shared cache eliminates
per-request cost entirely, which is a bigger win than optimizing
client-side re-renders. This is
[`heuristics/when-to-cache.md`](../../heuristics/when-to-cache.md)
applied at the routing layer.

## `next/image` and `next/font` handle two common bottlenecks by default

Unoptimized images and web fonts are frequent, measurable performance
problems; Next.js's built-in components handle sizing, lazy-loading,
and font-loading strategy without custom code — prefer them over raw
`<img>`/`<link>` tags.

## Related

- [`modules/react/performance.md`](../react/performance.md)
- [`heuristics/when-to-cache.md`](../../heuristics/when-to-cache.md)
