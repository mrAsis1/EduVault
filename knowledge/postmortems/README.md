# Postmortems

## Purpose

What happened when something broke in production (or nearly did), why,
and what changed as a result. Blameless by convention — the goal is a
systemic fix, not identifying who to blame.

## When to add an entry

After any incident affecting users, data, or availability — and,
optionally, after a near-miss significant enough that the team wants a
record of how close it came.

## Format

One file per incident: `[yyyy-mm-dd-short-description].md`, using
`postmortem-template.md`.

## Related MAW Documents

- `knowledge/README.md`
- `knowledge/lessons-learned/`
- `verification/deployment/common-mistakes.md` (recurring deploy
  failure patterns — check for overlap before writing a new postmortem
  that duplicates a known pattern)
