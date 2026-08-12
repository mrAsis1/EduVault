# Vercel: Common Mistakes

## Using production secrets in Preview environment variables

A preview deployment is reachable by anyone with the URL (often
without additional auth) — a production database credential or
payment API key scoped to "Preview" as well as "Production" means
every PR preview has production-level access. See
[`security.md`](security.md).

## Assuming Vercel's default caching matches the app's actual freshness needs

Static/ISR pages cache by default per Next.js's rendering strategy
(see
[`modules/nextjs/performance.md`](../../modules/nextjs/performance.md))
— data that needs to be fresh per-request but is accidentally cached
looks like a bug in application code when it's actually a
caching/revalidation configuration issue.

## Not setting resource/timeout limits appropriate to the function

A serverless function with a default timeout too short for a genuinely
long-running task (a large report export) fails silently at the
platform level, not in application code — check function configuration
before debugging the function itself for this symptom.

## Related

- [`security.md`](security.md)
- [`performance.md`](performance.md)
