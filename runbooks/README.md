# Runbooks

## Purpose

Exact, executable command sequences for recurring operational tasks
(restart a specific service, rotate a specific credential, roll back a
specific deployment mechanism) — the most concrete layer in MAW.
Distinct from `playbooks/`, which is judgment guidance for a situation;
a runbook is what you actually type once the playbook says what to do.

## Why this is scaffolded, not populated

A real runbook requires this team's actual service names, hosting
provider, and command syntax — content that can't be usefully
generalized or invented without becoming wrong the moment it's needed.
Writing a fabricated example here would be worse than an empty folder:
someone under incident pressure could copy a command that doesn't match
real infrastructure. Per this project's standing policy against
placeholder content (also applied to `knowledge/`/`research/` in v0.6),
this directory holds only the template; real entries get added as real
operational procedures are established.

## When to add an entry

The first time a runbook would have been useful — i.e., the first time
someone had to look up or reconstruct an exact operational command
sequence during a `playbooks/` situation. Write it down then, not
speculatively now.

## Format

One file per procedure: `[short-topic-in-kebab-case].md`, using
`runbook-template.md`.

## Related MAW Documents

- `playbooks/`
- `knowledge/README.md` (same no-placeholder-content policy)
