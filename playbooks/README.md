# Playbooks

## Purpose

Judgment guides for specific high-stakes situations — something that
just happened or is happening now, not a task type someone chose to
start. Distinct from `workflows/`, which states the ordered process for
a category of planned work (feature development, bug fixes, releases).
A playbook answers: how do you recognize you're in this situation, what
to do and not do immediately, who to involve, and which existing
document governs the mechanics from there.

## Why this is separate from `workflows/`

The original version of this layer proposed playbooks with the same
names and shape as existing workflows (`feature-development.md`,
`refactoring.md`), which would have restated those workflows almost
verbatim — a direct violation of ADR-0002. ADR-0007 records the
resolution: playbooks are reframed around situations, not task types,
and none of them restate a workflow's steps. Each playbook links to the
`workflows/`, `.github/instructions/`, or `verification/` document that
governs the actual how-to; the playbook itself is the layer above that —
recognition and judgment, not procedure.

## What lives here

- `breaking-change.md` — shipping a change that breaks a public
  contract, API, or data shape.
- `production-incident.md` — something is broken in production right
  now.
- `high-risk-deployment.md` — a deploy riskier than the routine case
  (migration, major dependency bump, off-hours release).
- `performance-regression.md` — users or monitoring report things got
  slower.
- `security-incident.md` — a vulnerability or breach is suspected or
  confirmed.
- `large-refactor-decision.md` — deciding whether and how to greenlight
  a large-scale refactor.

## How to use a playbook

1. Confirm you're actually in the situation the playbook describes —
   each playbook opens with recognition signals.
2. Follow the immediate actions and escalation guidance.
3. Once stabilized/scoped, hand off to the linked `workflows/` document
   for the actual execution process.
4. Use the matching file in `checklists/` as a fast, condensed
   companion once you already know the playbook.

## Related MAW Documents

- `ARCHITECTURE_DECISIONS.md` — ADR-0007
- `workflows/`
- `checklists/`
- `runbooks/`
