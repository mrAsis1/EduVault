# Vercel: Best Practices

## Environment variables scoped per environment, not one flat list

Vercel supports separate values for Production, Preview, and
Development — use this rather than one variable shared across all
three, especially for anything pointing at a real vs. test resource
(database URL, payment provider key). This is
[`docs/deployment.md`](../../docs/deployment.md)'s "environments should
be as similar as possible" *and* "deployments should be reversible" in
tension, deliberately resolved: structurally similar, but pointed at
different, isolated resources.

## Preview deployments are real, reachable deployments

Every PR's preview URL is a live, running instance of the app —
treat it with the same care as production for anything security
sensitive (see [`security.md`](security.md)), not as a throwaway
sandbox.

## Let Vercel's build cache work — don't fight it with non-deterministic builds

A build that produces different output for the same input (uncached
timestamps, random values baked in at build time) defeats Vercel's
incremental build caching — keep builds deterministic per
[`docs/deployment.md`](../../docs/deployment.md)'s "environments should
be as similar as possible" reasoning applied to build reproducibility.

## Related

- [`docs/deployment.md`](../../docs/deployment.md)
