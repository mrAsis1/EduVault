# Telemetry

## Purpose

Defines what raw events would feed `metrics/` and `dashboards/`, once a
real collection mechanism exists. Scaffolded only — no collector, no
sample event payloads with invented data.

## What would be collected

Event-level records feeding the aggregates described in
`metrics/README.md`:

```yaml
# telemetry event shape (spec only, not implemented)
event: verification_run | playbook_invoked | automation_audit | agent_handoff
timestamp: timestamp
area: string              # e.g. which verification/ area, which playbook
result: pass | fail | partial
role: string | null        # which agents/ role, if applicable
reference: string           # PR/commit/incident link
```

## Why not implemented now

Real telemetry requires instrumentation wired into wherever
`verification/`, `playbooks/`, and `automation/` actually get used —
that's a per-project integration decision (which tool orchestrates
`agents/` roles, where PRs happen, what logging infrastructure already
exists), not something MAW can build generically without guessing at
infrastructure that may not match any real deployment. This spec
exists so the event shape is agreed in advance, the same way
`memory/`'s schema is agreed before any specific storage backend is
chosen.

## Related MAW Documents

- `metrics/`
- `dashboards/`
- `memory/` (same schema-before-implementation approach)
