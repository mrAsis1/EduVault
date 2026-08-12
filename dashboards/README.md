# Dashboards

## Purpose

Defines what a dashboard surfacing `metrics/` would show, once
`metrics/` has real data behind it. Scaffolded only — no dashboard
implementation, no fabricated screenshots or sample numbers.

## What would exist

- A rollup view of `verification/*/scorecard.md` trends across areas,
  surfacing which quality dimension is declining before it becomes a
  pattern worth a `knowledge/postmortems/` entry.
- A `playbooks/` frequency view — which situations recur often enough
  that a `runbooks/` entry (currently unpopulated, per v0.7) would
  start paying for itself.
- An `automation/` audit-history view — pass/fail trend for
  `npm run audit` over time, surfacing repo-hygiene drift.

## Why not built now

A dashboard needs `metrics/` data to render, and `metrics/` has none
yet — building the visualization first would mean populating it with
invented numbers to make it look functional, which is exactly the
placeholder-content problem this project avoids throughout (see
`knowledge/README.md`, `runbooks/README.md`). This file exists so the
shape is agreed before real data exists to justify building it.

## Related MAW Documents

- `metrics/`
- `telemetry/`
