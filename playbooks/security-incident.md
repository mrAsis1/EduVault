# Playbook: Security Incident

## Recognition signals

- A vulnerability is discovered (in code, a dependency, or
  infrastructure) or there's evidence of unauthorized access, data
  exposure, or credential compromise.
- If this is a proactive check with no suspected/confirmed issue, that's
  a normal review against `verification/security/checklist.md`, no
  playbook needed.

## Immediate actions

**Do:**

- Contain first: rotate the specific exposed credential, revoke the
  specific compromised token/session, patch the specific vulnerability
  — narrowly, before broader investigation.
- Determine scope: what was actually exposed/accessed, not just what
  could theoretically have been. Check logs before assuming worst case
  or best case.
- Preserve evidence (logs, the vulnerable code state) before making
  changes that could overwrite it, if a forensic review is needed.

**Don't:**

- Discuss details in a channel wider than necessary before containment
  — an in-progress vulnerability shouldn't be broadcast before it's
  patched.
- Assume a single rotated credential is sufficient without checking
  whether the same exposure pattern affects other credentials of the
  same type.
- Silently patch and move on without recording what happened —
  `.github/instructions/security.instructions.md` requires flagging
  violations found, not silently fixing them; that applies doubly to an
  actual incident.

## Who to involve

- Whoever owns the affected system, immediately, regardless of time of
  day.
- Legal/compliance contact if user data exposure is confirmed or likely
  — this is a scope decision outside engineering alone.

## Handoff

Once contained, the actual fix follows `workflows/bug-fix.md` for a
code vulnerability, or standard credential-rotation procedure for
exposure — `.github/instructions/security.instructions.md` governs the
fix quality. Verify against `verification/security/checklist.md` before
closing.

## Resolved when

- The vulnerability is patched and verified against
  `verification/security/checklist.md`.
- All exposed credentials of the affected type are rotated, not just the
  one confirmed exposed.
- A postmortem exists in `knowledge/postmortems/`.

## Related MAW Documents

- `.github/instructions/security.instructions.md`
- `verification/security/`
- `knowledge/postmortems/`
- `checklists/security-incident.md`
