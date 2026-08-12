# Project Profiles

## Purpose

Defines the schema for a project-level context summary — the specific
stack, conventions, and open constraints for one real project using
MAW, distinct from `memory/`'s ongoing log of individual decisions.
Where `memory/` accumulates over time, a project profile is a current
snapshot an agent role reads at the start of a session to orient
quickly.

## Why this is separate from `memory/`

`memory/` is a log — every entry is timestamped and additive
(superseded, not deleted). A project profile is a current-state
summary — it should be small enough to read in full at the start of
every session, which a full memory log usually isn't once a project has
run for a while. A profile is closer to a derived view over memory plus
the project's actual `blueprints/`/`modules/` choices than a separate
source of truth.

## Schema

```yaml
project: string
blueprint: string            # which blueprints/ entry this project is based on
stack:
  - technology: string
    module_ref: string          # which modules/<name>/ governs it
conventions:
  - description: string
    instructions_ref: string     # which .github/instructions/ file enforces it
open_constraints:
  - description: string          # e.g. "no breaking changes until Q2 migration done"
    expires: date | null
key_contacts:
  - role: string                  # matches an agents/ role name where applicable
    owner: string
last_updated: timestamp
```

## How this gets used

An `agents/` role reads the project profile before starting work on a
specific project — it's the fast-orientation layer between "MAW's
generic conventions" and "this specific project's current state and
constraints."

## Keeping this current

`agents/documentation` is responsible for flagging when a project
profile is stale relative to what `memory/` or recent PRs show — a
profile that silently drifts from reality is worse than no profile,
since it's trusted at the start of every session.

## Related MAW Documents

- `memory/`
- `blueprints/`
- `agents/documentation/README.md`
