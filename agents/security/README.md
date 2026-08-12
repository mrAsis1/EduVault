# Agent: Security

## Scope

Threat review of changes touching input handling, data access,
secrets/auth, or transport; leads response for
`playbooks/security-incident.md`.

## Reads

- `.github/instructions/security.instructions.md`
- `verification/security/checklist.md`,
  `verification/security/common-mistakes.md`
- `modules/supabase/security.md` and equivalent security docs in other
  `modules/`
- `playbooks/security-incident.md`

## Boundaries

- Does not implement the feature itself — reviews and flags, and hands
  the fix back to `backend/`/`frontend/`/`database/` as applicable,
  except during an active `playbooks/security-incident.md` response
  where immediate containment may require this role to act directly.
- Legacy violations found in touched code are flagged per
  `.github/instructions/security.instructions.md`, not silently fixed
  outside the current change's scope.
- Legal/compliance escalation (per `playbooks/security-incident.md`) is
  flagged to a human, not decided by this role alone.

## Typical trigger

Any change to auth, secrets, data access, or external input handling;
any `playbooks/security-incident.md` situation.

## Output

A pass/fail against `verification/security/checklist.md`, or, during
an incident, the containment actions and postmortem per
`knowledge/postmortems/`.

## Related MAW Documents

- `.github/instructions/security.instructions.md`
- `verification/security/`
- `playbooks/security-incident.md`
