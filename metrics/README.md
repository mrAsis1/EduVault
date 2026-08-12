# Metrics

## Purpose

Defines what *would* be tracked about MAW's own effectiveness and
`agents/` performance, once a real system exists to measure it.
Scaffolded, not populated — there is no live data yet, and inventing
numbers here would be worse than an empty spec (see
`knowledge/README.md`'s content policy, applied the same way to
`runbooks/` in v0.7 and `dashboards/`/`telemetry/` here).

## What would be tracked

- **Verification pass rate** — per `verification/*/scorecard.md`,
  aggregated over time, to see which quality dimensions trend down.
- **Playbook invocation frequency** — how often each `playbooks/`
  entry is actually used, which situations are common vs. rare in
  practice.
- **Automation catch rate** — how often `automation/scripts/` catches
  a real issue vs. runs clean, per category (structure, links, ADR
  order, roadmap sync).
- **Time-to-resolution** — for `playbooks/production-incident.md` and
  `playbooks/security-incident.md` specifically, from recognition to
  resolved.
- **Agent role handoff accuracy** — how often an `agents/` role's
  boundary section correctly predicts the next role needed, versus
  work bouncing back.

## Why not implement collection now

Each of the above requires either instrumentation in a real running
system or a log of real `playbooks/`/`verification/` usage that
doesn't exist yet in this repository. This spec exists so that when
real usage starts accumulating (e.g. via `knowledge/postmortems/`,
`research/benchmarks/`, git history on `verification/*/scorecard.md`
tables), there's already an agreed shape for what to pull from it.

## Related MAW Documents

- `dashboards/`
- `telemetry/`
- `verification/`
