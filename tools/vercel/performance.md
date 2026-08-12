# Vercel: Performance

## Understand cold starts for serverless functions

A serverless function not recently invoked incurs a cold-start delay
on the next request — for latency-sensitive endpoints, this is a real,
measurable cost worth profiling per
[`heuristics/when-to-optimize.md`](../../heuristics/when-to-optimize.md),
not assumed away.

## Use Edge Functions for latency-sensitive, lightweight logic

Edge Functions run closer to the user with less cold-start overhead
than traditional serverless functions, but with a more limited runtime
— the right fit depends on whether the logic needs full Node.js APIs
(serverless) or can run in the more constrained edge runtime.

## Configure caching headers deliberately, matching modules/nextjs/performance.md

Vercel respects `Cache-Control`/`revalidate` configuration from
Next.js — see
[`modules/nextjs/performance.md`](../../modules/nextjs/performance.md)
for how to set that correctly; this file is about knowing that Vercel
will honor it, not re-explaining the Next.js side.

## Related

- [`modules/nextjs/performance.md`](../../modules/nextjs/performance.md)
- [`heuristics/when-to-optimize.md`](../../heuristics/when-to-optimize.md)
