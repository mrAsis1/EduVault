# Playbook: High-Risk Deployment

## Recognition signals

- The deploy includes a database migration, a major dependency bump, a
  change to auth/payments, or is happening outside normal working hours
  with reduced on-call coverage.
- If none of these apply, this is a routine deploy — follow
  `verification/deployment/checklist.md` and `workflows/release.md`
  directly, no playbook needed.

## Immediate actions

**Do:**

- Run `verification/deployment/checklist.md` in full, not the abbreviated
  version — high-risk deploys are exactly when a skipped rollback plan
  or missing observability check actually costs something.
- Confirm the rollback path covers data/schema changes specifically, not
  just code — a migration usually needs its own down-migration or
  documented irreversibility.
- Schedule the deploy when the people who'd need to respond are actually
  available, not just when CI happens to be green.

**Don't:**

- Bundle a high-risk change with unrelated changes "since we're
  deploying anyway" — it narrows what you can safely roll back.
- Treat "we tested in staging" as sufficient if staging doesn't have
  production-scale data for a migration — test migration timing against
  a realistic data volume first.

## Who to involve

- Whoever owns the affected system, present (not just reachable) during
  the deploy window.
- A second person to independently confirm the rollback plan before the
  deploy starts, not after something goes wrong.

## Handoff

Execution follows `workflows/release.md` in full; this playbook is the
judgment layer for deciding *when* and *how carefully*, not a
replacement for that workflow's steps.

## Resolved when

- Deploy completed, verified against `verification/deployment/checklist.md`
  step 6 (post-release verification).
- No mitigation/rollback was needed, or if one was, `production-incident.md`
  governs from that point.

## Related MAW Documents

- `verification/deployment/checklist.md`
- `workflows/release.md`
- `docs/deployment.md`
- `checklists/high-risk-deployment.md`
