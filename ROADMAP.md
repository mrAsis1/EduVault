# Roadmap

This roadmap reflects the current plan for Monarch AI Workspace (MAW).
It is a plan, not a changelog — completed work is recorded in
[`CHANGELOG.md`](CHANGELOG.md). Structural reasoning behind major shifts
is recorded in [`ARCHITECTURE_DECISIONS.md`](ARCHITECTURE_DECISIONS.md);
this file states *what*, not *why*.

> **Note:** This roadmap supersedes the earlier capability-sequenced plan
> (Knowledge/Reasoning/Planning/Verification/Automation/Collaboration/
> Adaptation/Learning, previously described in ADR-0004). Versions below
> are sequenced by *content type* delivered, not by capability dependency.
> The ADR reconciling this change is tracked as a follow-up and should be
> written before v0.3 implementation begins.

## Guiding principles

- Document first.
- Automate repetitive work.
- Prefer consistency over novelty.
- Update examples when the thing they describe changes.
- Record lessons learned instead of losing them to memory.

---

## Version 0.1 — Foundation ✅

**Delivered:** root-level project files and the core structural layers.

- [x] `README.md`
- [x] `ROADMAP.md`
- [x] `CHANGELOG.md`
- [x] `LICENSE`
- [x] `AGENTS.md`
- [x] `ARCHITECTURE_DECISIONS.md`
- [x] `docs/` — architecture, coding-standards, deployment,
      folder-structure, git-workflow, security, style-guide, testing
- [x] `templates/`
- [x] `workflows/`
- [x] `examples/`
- [x] `.github/`

## Version 0.2 — Engineering Foundations ✅

**Delivered:** the framework-agnostic reasoning layer. Every file
explains *why*, includes concrete examples, and states trade-offs
explicitly (Benefits/Drawbacks), per the standardized heading sequence:
`Purpose → Why it Matters → Core Concepts → When to Use → When Not to
Use → Benefits → Drawbacks → Example → Related MAW Documents`.

- [x] `foundations/` — engineering-philosophy, software-lifecycle,
      software-architecture, clean-code, clean-architecture, solid, dry,
      kiss, yagni, separation-of-concerns, composition-over-inheritance,
      convention-over-configuration
- [x] `principles/` — component-design, api-design, database-design,
      error-handling, accessibility, security-first, performance-first,
      maintainability, testing, documentation
- [x] `heuristics/` — when-to-create-component, when-to-create-hook,
      when-to-create-service, when-to-use-context,
      when-to-use-global-state, when-to-abstract, when-not-to-abstract,
      when-to-cache, when-to-optimize, when-to-split-files,
      when-to-refactor
- [x] `decision-trees/` — frontend-framework, backend-framework,
      state-management, database-choice, authentication, authorization,
      deployment, testing, api-rest-vs-graphql
- [x] `architecture/` — layered, clean-architecture, modular-monolith,
      hexagonal, mvc, mvvm, microservices
- [x] `patterns/` — repository-pattern, service-layer, adapter-pattern,
      strategy-pattern, factory-pattern, observer-pattern,
      dependency-injection, singleton, feature-folder

## Version 0.3 — Technology Library ✅

**Focus:** stack-specific guidance. Each module/tool links out to the
rules already established in `docs/`, `.github/instructions/`, and the
v0.2 reasoning layer — it does not restate them. Only what's genuinely
stack-specific belongs here.

Each entry under `modules/` gets: `README.md`, `architecture.md`,
`project-structure.md`, `best-practices.md`, `common-mistakes.md`,
`performance.md`, `security.md`, `testing.md`, `examples.md`.

- [x] `modules/react/`
- [x] `modules/typescript/`
- [x] `modules/vite/`
- [x] `modules/nextjs/`
- [x] `modules/node/`
- [x] `modules/express/`
- [x] `modules/supabase/`
- [x] `modules/prisma/`
- [x] `modules/docker/`
- [x] `modules/tailwind/`
- [x] `modules/postgres/`
- [x] `modules/redis/`
- [x] `modules/graphql/`

Each entry under `tools/` gets a lighter treatment (scoped to what's
relevant for that tool — not all 9 module files apply).

- [x] `tools/vscode/`
- [x] `tools/git/`
- [x] `tools/github/`
- [x] `tools/github-actions/`
- [x] `tools/figma/`
- [x] `tools/postman/`
- [x] `tools/docker-desktop/`
- [x] `tools/powershell/`
- [x] `tools/vercel/`

## Version 0.4 — AI Integration ✅

**Focus:** thin, tool-specific adapters that route back to `docs/`,
`.github/instructions/`, and `workflows/` rather than forking them
(same discipline as ADR-0003), plus a reusable prompt library.

Each entry under `adapters/` gets: `README.md`, `system-prompt.md`,
`best-practices.md`, `limitations.md`, `example-prompts.md`,
`workflow.md` — except where content-driven scoping (same principle as
v0.3's `tools/`) calls for fewer: `adapters/copilot/` stays to 3 files
since a native adapter already exists at
`.github/copilot-instructions.md`, and `adapters/codex/` skips a
separate system-prompt paste step since Codex reads MAW's root
`AGENTS.md` directly. Each entry under `prompts/` gets `README.md` and
`prompt.md`, plus `variants.md` only where a genuinely distinct variant
exists (`prompts/planning/`, `prompts/debugging/`).

- [x] `adapters/copilot/`
- [x] `adapters/claude/`
- [x] `adapters/cursor/`
- [x] `adapters/gemini/`
- [x] `adapters/codex/`
- [x] `adapters/windsurf/`

- [x] `prompts/planning/`
- [x] `prompts/implementation/`
- [x] `prompts/debugging/`
- [x] `prompts/reviewing/`
- [x] `prompts/refactoring/`
- [x] `prompts/testing/`
- [x] `prompts/documentation/`

## Version 0.5 — Quality System ✅

**Delivered:** enforceable verification across every quality dimension.
Each area under `verification/` has: `README.md`, `checklist.md`,
`review-template.md`, `common-mistakes.md`, `scorecard.md`. `security/`
was built first as the pilot; the remaining nine areas replicate its
shape. Every checklist item traces to an existing rule in
`.github/instructions/` or `docs/` per ADR-0002 — none restate a rule.
Building `verification/accessibility/` surfaced a real gap: no
enforceable accessibility rule existed (`react.instructions.md` only had
the bare word "Accessibility"), so
`.github/instructions/accessibility.instructions.md` was added first.

- [x] `verification/security/` (pilot)
- [x] `verification/design/`
- [x] `verification/code-quality/`
- [x] `verification/accessibility/` — required adding
      `.github/instructions/accessibility.instructions.md` first
- [x] `verification/deployment/`
- [x] `verification/release/`
- [x] `verification/architecture/`
- [x] `verification/performance/`
- [x] `verification/testing/`
- [x] `verification/documentation/`

## Version 0.6 — Engineering Knowledge ✅ (scaffolded)

**Delivered:** structure only — every folder has a `README.md`
explaining its purpose and a fillable template, matching the convention
in `templates/`. No fabricated example content was added; these folders
are correctly empty of real entries until real books, incidents,
benchmarks, etc. actually occur. Real entries get added as they happen,
not backfilled speculatively.

- [x] `knowledge/books/`
- [x] `knowledge/articles/`
- [x] `knowledge/glossary/`
- [x] `knowledge/references/`
- [x] `knowledge/lessons-learned/`
- [x] `knowledge/postmortems/`
- [x] `knowledge/cheatsheets/`

- [x] `research/benchmarks/`
- [x] `research/experiments/`
- [x] `research/comparisons/`
- [x] `research/notes/`

## Version 0.7 — Playbooks ✅

**Delivered:** situation-specific judgment guides that sit above the
generic `workflows/` layer for common high-stakes moments — how to
recognize the situation, what to do immediately, who to involve, and
which existing workflow/instructions/verification document governs the
actual mechanics from there. Renamed from the original roadmap wording
per ADR-0007 to avoid duplicating `workflows/` (two of the original six
names collided with existing workflow files outright).

- [x] `playbooks/breaking-change.md`
- [x] `playbooks/production-incident.md`
- [x] `playbooks/high-risk-deployment.md`
- [x] `playbooks/performance-regression.md`
- [x] `playbooks/security-incident.md`
- [x] `playbooks/large-refactor-decision.md`
- [x] `checklists/` — one condensed action checklist per playbook
- [x] `runbooks/` — scaffolded only (README + template); real runbooks
      need this team's actual infrastructure, added as they're written

## Version 0.8 — Reusability ✅

**Delivered:** ready-to-use building blocks — small (snippets) to large
(blueprints, starter-kit process) — grounded in `modules/` and
`.github/instructions/` from v0.3–v0.5. Two real gaps surfaced and were
flagged rather than silently filled: `blueprints/electron/` has no
backing `modules/electron/` in the v0.3 technology library (kept
minimal until that module exists); `starter-kits/` has no named kits
yet because no combination of project-specific decisions has repeated
often enough across real projects to justify freezing one.

- [x] `snippets/react/`
- [x] `snippets/typescript/`
- [x] `snippets/supabase/`
- [x] `snippets/node/`
- [x] `snippets/sql/`
- [x] `snippets/utilities/`

- [x] `blueprints/react-vite/`
- [x] `blueprints/react-supabase/`
- [x] `blueprints/express-api/`
- [x] `blueprints/fullstack/`
- [x] `blueprints/electron/` — minimal; blocked on `modules/electron/`
      not existing yet

- [x] `starter-kits/` — process documented; no named kits yet (by design)

## Version 0.9 — Automation ✅

**Delivered:** both meta-tooling (validates MAW's own repo) and
downstream templates (for projects built using MAW), per the split
decided when this version started. All four `scripts/` checks were
run against the real repo during build — `validate-structure.mjs`
caught two real leftover stray directories from a shell brace-expansion
mistake in the v0.6 delivery, now fixed. `check-adr-order.mjs` confirmed
the manual ADR-0006/0007 ordering fix from v0.7 actually held.

- [x] `automation/scripts/` — structure, links, ADR order, roadmap sync
- [x] `automation/generators/` — verification-area scaffolder (meta),
      links to `templates/component.md` (downstream, no duplicate)
- [x] `automation/quality/` — composite `npm run audit`, scope stated
      relative to `verification/`
- [x] `automation/maintenance/` — cadence and what to do with findings
- [x] `automation/ci/` — `maw-audit.yml` (meta, runs on this repo) +
      `downstream-quality-gate.yml` (template for other projects)
- [x] `automation/release/` — release-readiness check (changelog +
      roadmap only; does not tag or judge content)

## Version 1.0 — AI Engineering Platform ✅

**Delivered:** MAW becomes agent-operable, not just agent-readable —
ten specialized agent roles, persistent-memory and project-profile
schemas (real, buildable now), and an observability layer scaffolded
per the same no-fabricated-content policy used for `knowledge/` (v0.6)
and `runbooks/` (v0.7): `metrics/`, `dashboards/`, `telemetry/` define
what would be tracked, not invented sample data. `automation/scripts/validate-structure.mjs`
was extended to cover `agents/<role>/` and the new single-README
directories.

- [x] `agents/architect/`
- [x] `agents/planner/`
- [x] `agents/frontend/`
- [x] `agents/backend/`
- [x] `agents/database/`
- [x] `agents/security/`
- [x] `agents/reviewer/`
- [x] `agents/qa/`
- [x] `agents/devops/`
- [x] `agents/documentation/`

- [x] `memory/` — schema spec, not an implementation
- [x] `project-profiles/` — schema spec, not an implementation
- [x] `metrics/` — scaffolded: what would be tracked, no live data
- [x] `dashboards/` — scaffolded: what would be shown, no live data
- [x] `telemetry/` — scaffolded: event shape spec, no collector

## Future (v2.0+)

Not scheduled — recorded so early decisions don't accidentally foreclose
them.

- [ ] CLI
- [ ] VS Code Extension
- [ ] AI Orchestrator
- [ ] Plugin System
- [ ] Local Knowledge Database
- [~] Project Generator — piloted, not complete. Chose this item first
      because it had the fewest unmet dependencies (`blueprints/`
      already existed from v0.8). Pilot surfaced a real gap: blueprints
      were prose-only, with no machine-readable structure to generate
      from. Added `blueprints/blueprint.schema.json` (manifest format)
      and `blueprints/react-vite/blueprint.json` (one manifest, mirrors
      its README exactly — no new decisions invented) plus
      `automation/scripts/generate-project.mjs`, tested against a real
      target directory including its failure paths (existing dir,
      missing manifest). The other four blueprints intentionally don't
      have a manifest yet — replicate only after this one schema has
      proven itself with real use, per the pilot-then-replicate
      pattern used for `verification/security/` in v0.5.
- [ ] Self-Updating Knowledge Base

---

## Full directory tree

```
MAW/
│
├── Version 0.1 — Foundation
│   │
│   ├── README.md ✅
│   ├── ROADMAP.md ✅
│   ├── CHANGELOG.md ✅
│   ├── LICENSE ✅
│   ├── AGENTS.md ✅
│   ├── ARCHITECTURE_DECISIONS.md ✅
│   │
│   ├── docs/ ✅
│   │   ├── architecture.md ✅
│   │   ├── coding-standards.md ✅
│   │   ├── deployment.md ✅
│   │   ├── folder-structure.md ✅
│   │   ├── git-workflow.md ✅
│   │   ├── security.md ✅
│   │   ├── style-guide.md ✅
│   │   └── testing.md ✅
│   │
│   ├── templates/ ✅
│   ├── workflows/ ✅
│   ├── examples/ ✅
│   └── .github/ ✅
│
├── Version 0.2 — Engineering Foundations ✅
│   │
│   ├── foundations/ ✅
│   │   ├── engineering-philosophy.md ✅
│   │   ├── software-lifecycle.md ✅
│   │   ├── software-architecture.md ✅
│   │   ├── clean-code.md ✅
│   │   ├── clean-architecture.md ✅
│   │   ├── solid.md ✅
│   │   ├── dry.md ✅
│   │   ├── kiss.md ✅
│   │   ├── yagni.md ✅
│   │   ├── separation-of-concerns.md ✅
│   │   ├── composition-over-inheritance.md ✅
│   │   └── convention-over-configuration.md ✅
│   │
│   ├── principles/ ✅
│   │   ├── component-design.md ✅
│   │   ├── api-design.md ✅
│   │   ├── database-design.md ✅
│   │   ├── error-handling.md ✅
│   │   ├── accessibility.md ✅
│   │   ├── security-first.md ✅
│   │   ├── performance-first.md ✅
│   │   ├── maintainability.md ✅
│   │   ├── testing.md ✅
│   │   └── documentation.md ✅
│   │
│   ├── heuristics/ ✅
│   │   ├── when-to-create-component.md ✅
│   │   ├── when-to-create-hook.md ✅
│   │   ├── when-to-create-service.md ✅
│   │   ├── when-to-use-context.md ✅
│   │   ├── when-to-use-global-state.md ✅
│   │   ├── when-to-abstract.md ✅
│   │   ├── when-not-to-abstract.md ✅
│   │   ├── when-to-cache.md ✅
│   │   ├── when-to-optimize.md ✅
│   │   ├── when-to-split-files.md ✅
│   │   └── when-to-refactor.md ✅
│   │
│   ├── decision-trees/ ✅
│   │   ├── frontend-framework.md ✅
│   │   ├── backend-framework.md ✅
│   │   ├── state-management.md ✅
│   │   ├── database-choice.md ✅
│   │   ├── authentication.md ✅
│   │   ├── authorization.md ✅
│   │   ├── deployment.md ✅
│   │   ├── testing.md ✅
│   │   └── api-rest-vs-graphql.md ✅
│   │
│   ├── architecture/ ✅
│   │   ├── layered.md ✅
│   │   ├── clean-architecture.md ✅
│   │   ├── modular-monolith.md ✅
│   │   ├── hexagonal.md ✅
│   │   ├── mvc.md ✅
│   │   ├── mvvm.md ✅
│   │   └── microservices.md ✅
│   │
│   └── patterns/ ✅
│       ├── repository-pattern.md ✅
│       ├── service-layer.md ✅
│       ├── adapter-pattern.md ✅
│       ├── strategy-pattern.md ✅
│       ├── factory-pattern.md ✅
│       ├── observer-pattern.md ✅
│       ├── dependency-injection.md ✅
│       ├── singleton.md ✅
│       └── feature-folder.md ✅
│
├── Version 0.3 — Technology Library ✅
│   │
│   ├── modules/
│   │   ├── react/ ✅
│   │   ├── typescript/ ✅
│   │   ├── vite/ ✅
│   │   ├── nextjs/ ✅
│   │   ├── node/ ✅
│   │   ├── express/ ✅
│   │   ├── supabase/ ✅
│   │   ├── prisma/ ✅
│   │   ├── docker/ ✅
│   │   ├── tailwind/ ✅
│   │   ├── postgres/ ✅
│   │   ├── redis/ ✅
│   │   └── graphql/ ✅
│   │
│   └── tools/
│       ├── vscode/ ✅
│       ├── git/ ✅
│       ├── github/ ✅
│       ├── github-actions/ ✅
│       ├── figma/ ✅
│       ├── postman/ ✅
│       ├── docker-desktop/ ✅
│       ├── powershell/ ✅
│       └── vercel/ ✅
│
├── Version 0.4 — AI Integration ✅
│   │
│   ├── adapters/
│   │   ├── copilot/ ✅
│   │   ├── claude/ ✅
│   │   ├── cursor/ ✅
│   │   ├── gemini/ ✅
│   │   ├── codex/ ✅
│   │   └── windsurf/ ✅
│   │
│   └── prompts/
│       ├── planning/ ✅
│       ├── implementation/ ✅
│       ├── debugging/ ✅
│       ├── reviewing/ ✅
│       ├── refactoring/ ✅
│       ├── testing/ ✅
│       └── documentation/ ✅
│
├── Version 0.5 — Quality System
│   │
│   └── verification/
│       ├── architecture/
│       ├── design/
│       ├── code-quality/
│       ├── security/
│       ├── performance/
│       ├── accessibility/
│       ├── testing/
│       ├── documentation/
│       ├── deployment/
│       └── release/
│
├── Version 0.6 — Engineering Knowledge
│   │
│   ├── knowledge/
│   │   ├── books/
│   │   ├── articles/
│   │   ├── glossary/
│   │   ├── references/
│   │   ├── lessons-learned/
│   │   ├── postmortems/
│   │   └── cheatsheets/
│   │
│   └── research/
│       ├── benchmarks/
│       ├── experiments/
│       ├── comparisons/
│       └── notes/
│
├── Version 0.7 — Playbooks
│   │
│   ├── playbooks/
│   ├── checklists/
│   └── runbooks/
│
├── Version 0.8 — Reusability
│   │
│   ├── snippets/
│   ├── blueprints/
│   └── starter-kits/
│
├── Version 0.9 — Automation
│   │
│   └── automation/
│       ├── scripts/
│       ├── generators/
│       ├── quality/
│       ├── maintenance/
│       ├── ci/
│       └── release/
│
├── Version 1.0 — AI Engineering Platform
│   │
│   ├── agents/
│   │   ├── architect/
│   │   ├── planner/
│   │   ├── frontend/
│   │   ├── backend/
│   │   ├── database/
│   │   ├── security/
│   │   ├── reviewer/
│   │   ├── qa/
│   │   ├── devops/
│   │   └── documentation/
│   │
│   ├── memory/
│   ├── project-profiles/
│   ├── metrics/
│   ├── dashboards/
│   └── telemetry/
│
└── Future (v2.0+)
    │
    ├── CLI/
    ├── VS Code Extension/
    ├── AI Orchestrator/
    ├── Plugin System/
    ├── Local Knowledge Database/
    ├── Project Generator/
    └── Self-Updating Knowledge Base/
```
