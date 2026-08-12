# Playbook: Production Incident

## Recognition signals

- Users, monitoring, or alerts indicate something is broken *right now*
  in a live environment — not a bug filed for later triage.
- If it's not currently affecting a live environment, this is a normal
  bug — use `workflows/bug-fix.md` directly, no playbook needed.

## Immediate actions

**Do:**

- Assess and state impact first: who's affected, how badly, is data at
  risk — before diagnosing root cause.
- Mitigate before you fully understand — a rollback or feature-flag-off
  that stops the bleeding is correct even before root cause is known.
- Communicate status at a fixed cadence (even "still investigating,
  next update in 15 min") rather than going quiet while working.

**Don't:**

- Spend the first response cycle root-causing before mitigating, if a
  fast mitigation (rollback, flag off, scale down) is available.
- Deploy a fix under incident pressure without at least confirming it
  addresses the assessed impact — a wrong fix under pressure can make
  impact worse.
- Skip `workflows/bug-fix.md` step 2 (diagnose root cause) once
  mitigated — "it's stable now" isn't the same as "we know why."

## Who to involve

- Whoever owns the affected system/service, immediately.
- Anyone who can independently confirm the mitigation actually worked
  (don't rely solely on the person who applied it).

## Handoff

Once mitigated and impact is stable, root-causing and the permanent fix
follow `workflows/bug-fix.md` in full, including its regression-test
requirement — mitigation is not the same as resolution.

## Resolved when

- Impact is fully stopped, not just reduced.
- Root cause is identified and a permanent fix (or accepted follow-up
  with an owner and date) exists.
- A postmortem is written per `knowledge/postmortems/` if severity
  warrants it.

## Related MAW Documents

- `workflows/bug-fix.md`
- `knowledge/postmortems/`
- `verification/deployment/checklist.md` (if mitigation involves a
  deploy/rollback)
- `checklists/production-incident.md`
