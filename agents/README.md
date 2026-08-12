# Agents

## Purpose

Defines ten specialized agent roles — the point where MAW stops being
purely agent-*readable* (documents a human or a general-purpose agent
consults) and becomes agent-*operable* (a specific role an orchestrator
can invoke, with a defined scope, defined reading list, and defined
handoff points to other roles).

## Relationship to `adapters/`

`adapters/` (v0.4) delivers one generic "senior engineer following MAW"
persona per tool. `agents/` is narrower: each role here is a
specialization of that same persona, scoped to one concern. An
`agents/frontend/` invocation still follows everything in the relevant
`adapters/<tool>/system-prompt.md` — it doesn't replace that layer, it
adds a role-specific scope on top of it.

## Why roles instead of one generalist agent

A single agent handling architecture, security, and QA in one pass
tends to under-invest in whichever concern isn't currently top of mind
— exactly the failure `verification/`'s separate quality dimensions
exist to catch after the fact. Splitting into roles with explicit
boundaries and handoffs makes the same separation apply *during* the
work, not just at review.

## Format

Each role has one file: `agents/<role>/README.md`, stating:

- **Scope** — what this role owns
- **Reads** — which MAW layers/files it primarily consults
- **Boundaries** — what it explicitly does not do, and which role it
  hands off to for that
- **Typical trigger** — when an orchestrator should invoke this role
- **Output** — what it produces

## Roles

| Role | Owns |
|------|------|
| `architect/` | System structure, module boundaries, ADRs |
| `planner/` | Feature plans, scoping, sequencing |
| `frontend/` | UI components, client-side state, accessibility |
| `backend/` | API/service layer, business logic |
| `database/` | Schema, migrations, query performance |
| `security/` | Threat review, auth, secrets, vulnerability response |
| `reviewer/` | Code review against `.github/instructions/` and `verification/` |
| `qa/` | Test strategy and coverage |
| `devops/` | Deployment, CI, release |
| `documentation/` | Docs currency and structure |

## Composition

A real task usually invokes more than one role in sequence — e.g. a
new feature: `planner` → `architect` (if structural) → `backend`/
`frontend` → `reviewer` → `qa` → `devops`. `agents/<role>/README.md`'s
"Boundaries" section states the explicit handoff for each role so this
sequencing isn't ad hoc.

## Related MAW Documents

- `adapters/`
- `verification/`
- `memory/`
- `project-profiles/`
