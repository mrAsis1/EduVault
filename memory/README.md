# Memory

## Purpose

Defines the schema for what an agent should retain across sessions
within a project — a format spec, not a running store. This is the
missing link between `agents/`'s per-invocation roles and continuity
across invocations: without a defined shape for memory, each agent
invocation starts from zero context every time.

## Why this is a schema, not an implementation

The actual storage mechanism (a file, a database, a vector store) is a
tool/platform choice outside MAW's scope — MAW defines conventions, not
infrastructure (see `docs/architecture.md`'s framing of MAW itself).
What MAW can usefully define is the *shape* memory should take so it's
consistent regardless of what stores it.

## Schema

```yaml
# memory entry — one per retained fact/decision
id: string                # stable identifier
category: decision | preference | constraint | fact
role: string               # which agents/ role recorded this, if any
content: string             # the retained information itself
source:                      # where this came from
  type: pr | conversation | adr | manual
  reference: string           # link/id to the source
recorded_at: timestamp
supersedes: string | null    # id of an entry this replaces, if any
```

## What belongs in memory vs. elsewhere

- A decision significant enough to affect future work but not
  significant enough for its own ADR → `memory`, `category: decision`.
- A recorded team/person preference (not a `.github/instructions/`
  rule — those are enforced, not merely remembered) → `category:
  preference`.
- Anything that should be enforced, not just remembered, belongs in
  `.github/instructions/` instead — memory is for context, not rules;
  putting a rule only in memory means it can silently be forgotten,
  which `.github/instructions/` files are specifically designed to
  prevent.

## Superseding, not deleting

An outdated memory entry is marked `supersedes` by its replacement
rather than deleted outright — preserves why a decision changed, the
same reasoning `ARCHITECTURE_DECISIONS.md` already applies at the
project level.

## Related MAW Documents

- `project-profiles/`
- `ARCHITECTURE_DECISIONS.md`
- `agents/README.md`
