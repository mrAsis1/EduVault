# Changelog

All notable changes to Monarch AI Workspace are documented in this
file. Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and versioning follows [Semantic Versioning](https://semver.org/) once
a versioning policy is formally adopted (tracked in
[`ROADMAP.md`](ROADMAP.md)).

## [Unreleased]

No unreleased changes.

## [1.0.0] — AI Engineering Platform

### Added
- `agents/` — ten specialized role definitions (architect, planner,
  frontend, backend, database, security, reviewer, qa, devops,
  documentation), each stating scope, what it reads, explicit
  boundaries/handoffs to other roles, typical trigger, and output.
  Composes with `adapters/` rather than replacing it.
- `memory/` — schema spec for persistent cross-session context
  (decision/preference/constraint/fact entries, superseded not
  deleted). Format only, no storage implementation.
- `project-profiles/` — schema spec for a per-project current-state
  summary, distinct from `memory/`'s ongoing log.
- `metrics/`, `dashboards/`, `telemetry/` — scaffolded only, per the
  no-fabricated-content policy used since `knowledge/` (v0.6): each
  states what would be tracked/shown/collected once a real system
  exists to instrument, with no invented sample data.
- `automation/scripts/validate-structure.mjs` extended to check
  `agents/<role>/README.md` and the new single-README v1.0
  directories.

### Fixed
- Removed two more stray brace-literal directories,
  `snippets/{react,typescript,...}` and `blueprints/{react-vite,...}`,
  same root cause as the v0.6 fix in the previous release — the v0.8
  `mkdir -p` command shipped uncaught since `validate-structure.mjs`
  didn't yet check `snippets/`/`blueprints/`. Extended the script to
  check both (blueprint subdirs require `README.md`; snippet subdirs
  require at least one real `.md` file, since they don't use a
  per-subfolder README convention) and verified it catches a simulated
  repeat of the bug before shipping this version.

### Notes
- Full `npm run audit` passes clean against the built repo.

## [0.9.0] — Automation

### Added
- `automation/` — a self-contained, dependency-free Node toolkit
  (`automation/package.json`, built-ins only) with two audiences:
  - **Meta-tooling** (`scripts/`, `generators/new-verification-area.mjs`,
    `quality/`, `maintenance/`): `validate-structure.mjs`,
    `check-links.mjs`, `check-adr-order.mjs`, `check-roadmap-sync.mjs`,
    run together via `npm run audit`.
  - **Downstream templates** (`ci/downstream-quality-gate.yml`,
    generator reference to `templates/component.md`): reusable
    starting points for projects built using MAW's conventions.
  - `ci/maw-audit.yml` — runs the meta-tooling on this repo's own PRs.
  - `release/check-release-readiness.mjs` — checks changelog/roadmap
    readiness for a version, without tagging or judging content.

### Fixed
- Removed two stray directories literally named
  `{books,articles,glossary,...}` and `{benchmarks,experiments,...}`
  under `knowledge/` and `research/` — a shell brace-expansion mistake
  from the v0.6 `mkdir -p` command that shipped in that delivery
  uncaught. Found by running `validate-structure.mjs` against the repo
  during this version's build, before any script existed to catch it
  automatically going forward.

### Notes
- All four `scripts/` checks and the generator were run against the
  real repo, not just written — see Fixed above for what that caught.

## [0.8.0] — Reusability

### Added
- `snippets/` — 12 real, working snippets across `react/`,
  `typescript/`, `supabase/`, `node/`, `sql/`, `utilities/`, each
  stating which `.github/instructions/` file(s) it complies with.
- `blueprints/` — `react-vite/`, `react-supabase/`, `express-api/`,
  `fullstack/`, `electron/`: structure, key config, and links to the
  `modules/` governing each stack piece.
- `starter-kits/` — the on-demand generation process from a blueprint,
  rather than pre-generated (and quickly stale) project scaffolds.

### Notes
- `blueprints/electron/` is intentionally minimal: no `modules/electron/`
  exists in the v0.3 technology library to trace it back to (ADR-0002).
  Flagged rather than filled with fabricated Electron-specific
  guidance.
- `starter-kits/` has no named kits yet by design — freezing a specific
  combination of project-specific decisions (package manager, CI,
  hosting) is premature until one combination repeats across real
  projects.

## [0.7.0] — Playbooks

### Added
- `playbooks/` — six situation-specific judgment guides:
  `breaking-change.md`, `production-incident.md`,
  `high-risk-deployment.md`, `performance-regression.md`,
  `security-incident.md`, `large-refactor-decision.md`. Each states
  recognition signals, immediate actions (do/don't), who to involve,
  and a handoff to the existing `workflows/`, `.github/instructions/`,
  or `verification/` document that governs the actual mechanics.
- `checklists/` — one condensed action checklist per playbook,
  extracted from it (not a duplicate of `verification/`'s
  quality-dimension checklists).
- `runbooks/` — scaffolded only (`README.md` + `runbook-template.md`);
  no fabricated procedures, same policy as `knowledge/`/`research/`.
- `ARCHITECTURE_DECISIONS.md` — ADR-0007, recording why `playbooks/`
  was renamed from the original roadmap wording (two of six original
  names collided directly with existing `workflows/` filenames and
  would have duplicated their content).

### Fixed
- Corrected an ADR ordering error introduced while drafting ADR-0007
  (the ADR-0006 heading was briefly overwritten during editing; content
  was recovered and restored to its original position).

## [0.6.0] — Engineering Knowledge (scaffolded)

### Added
- `knowledge/` — `books/`, `articles/`, `glossary/`, `references/`,
  `lessons-learned/`, `postmortems/`, `cheatsheets/`. Each subfolder has
  a `README.md` and a fillable template, following the same
  bracket-placeholder convention as `templates/`.
- `research/` — `benchmarks/`, `experiments/`, `comparisons/`, `notes/`,
  same structure.

### Notes
- Scaffolded only — no example/placeholder content was fabricated.
  Every subfolder is correctly empty of real entries until real books,
  incidents, benchmarks, or experiments actually occur, per this
  project's stated aversion to placeholder content.
- `knowledge/glossary/` deviates from the one-file-per-entry pattern
  used elsewhere: it's a single running `glossary.md`, since a glossary
  is meant to be skimmed as a whole rather than looked up file-by-file.

## [0.5.0] — Quality System

### Added
- `verification/` — ten areas (architecture, design, code-quality,
  security, performance, accessibility, testing, documentation,
  deployment, release), each with `README.md`, `checklist.md`,
  `review-template.md`, `common-mistakes.md`, `scorecard.md`.
  `security/` was built first as the pilot; the remaining nine areas
  replicate its shape once validated (pilot-then-replicate).
- `.github/instructions/accessibility.instructions.md` — the
  accessibility rule set didn't previously exist in enforceable form
  (`react.instructions.md` only listed the bare word "Accessibility");
  added before `verification/accessibility/` so its checklist had a
  real rule to trace to.

### Notes
- Every checklist and common-mistakes item in `verification/` traces to
  an existing rule in `.github/instructions/` or `docs/` — none restate
  a rule (ADR-0002).
- `verification/design/`, `verification/code-quality/`, and
  `verification/deployment/` intentionally trace to `docs/style-guide.md`,
  `docs/coding-standards.md`, and `docs/deployment.md` respectively,
  not to new instructions files — those docs already state why an
  instructions file doesn't fit those areas, and adding one would have
  duplicated/contradicted that reasoning.

## [0.4.0] — AI Integration

### Added
- `adapters/` — thin, tool-specific delivery mechanics for Claude,
  GitHub Copilot, Cursor, Gemini, Codex, and Windsurf. File count is
  content-driven per `docs/folder-structure.md`'s "content-driven"
  reasoning, applied the same way as v0.3's `tools/`: `copilot/` stays
  to `README.md`, `system-prompt.md`, and `workflow.md` since a native
  adapter already exists at `.github/copilot-instructions.md`;
  `codex/` skips a separate system-prompt paste step since Codex CLI
  reads MAW's root `AGENTS.md` directly; `claude/`, `cursor/`,
  `gemini/`, and `windsurf/` each get the full six-file set
  (`README.md`, `system-prompt.md`, `best-practices.md`,
  `limitations.md`, `example-prompts.md`, `workflow.md`).
- `prompts/` — reusable, tool-agnostic prompt library covering
  planning, implementation, debugging, reviewing, refactoring,
  testing, and documentation. Each entry gets `README.md` and
  `prompt.md`; `variants.md` is added only where a genuinely distinct
  variant exists (`planning/`, for small-fix vs. architectural-change
  framing; `debugging/`, for the case where reproduction isn't yet
  possible).

### Changed
- `ARCHITECTURE_DECISIONS.md`'s ADR-0005 (`core/` as a distinct
  judgment-support layer) resolved as folded into v0.2's
  `principles/`, `heuristics/`, and `decision-trees/` — no separate
  `core/` directory is planned. See ADR-0005's superseded note.

## [0.3.0] — Technology Library

### Added
- `modules/` — stack-specific guidance for React, TypeScript, Vite,
  Next.js, Node, Express, Supabase, Prisma, Docker, Tailwind,
  PostgreSQL, Redis, and GraphQL. Each entry: `README.md`,
  `architecture.md`, `project-structure.md`, `best-practices.md`,
  `common-mistakes.md`, `performance.md`, `security.md`, `testing.md`,
  `examples.md`.
- `tools/` — lighter-weight guidance for VS Code, Git, GitHub, GitHub
  Actions, Figma, Postman, Docker Desktop, PowerShell, and Vercel,
  scoped to what's genuinely relevant per tool rather than the full
  module file set.

### Changed
- Roadmap sequencing model changed from capability-dependency
  (Knowledge/Reasoning/Verification/etc., per the now-superseded
  ADR-0004) to content-type sequencing, per ADR-0006. See
  `ARCHITECTURE_DECISIONS.md` for the full rationale.

## [0.2.0] — Engineering Foundations

### Added
- `foundations/` — engineering-philosophy, software-lifecycle,
  software-architecture, clean-code, clean-architecture, solid, dry,
  kiss, yagni, separation-of-concerns, composition-over-inheritance,
  convention-over-configuration.
- `principles/` — component-design, api-design, database-design,
  error-handling, accessibility, security-first, performance-first,
  maintainability, testing, documentation.
- `heuristics/` — when-to-create-component, when-to-create-hook,
  when-to-create-service, when-to-use-context,
  when-to-use-global-state, when-to-abstract, when-not-to-abstract,
  when-to-cache, when-to-optimize, when-to-split-files,
  when-to-refactor.
- `decision-trees/` — frontend-framework, backend-framework,
  state-management, database-choice, authentication, authorization,
  deployment, testing, api-rest-vs-graphql.
- `architecture/` — layered, clean-architecture, modular-monolith,
  hexagonal, mvc, mvvm, microservices.
- `patterns/` — repository-pattern, service-layer, adapter-pattern,
  strategy-pattern, factory-pattern, observer-pattern,
  dependency-injection, singleton, feature-folder.

Every file in this release follows the standardized heading sequence
(`Purpose → Why it Matters → Core Concepts → When to Use → When Not to
Use → Benefits → Drawbacks → Example → Related MAW Documents`) and
states trade-offs explicitly rather than presenting guidance as
unconditional best practice.

## [0.1.0] - Initial framework skeleton

### Added
- `README.md` rewritten as a linked map of the actual repository
  structure, replacing the prior stale feature-list version.
- `AGENTS.md` — universal, tool-agnostic entry point for any AI coding
  agent, independent of `.github/copilot-instructions.md` or future
  per-agent adapters.
- `ROADMAP.md` — initial roadmap.
- `ARCHITECTURE_DECISIONS.md` — architecture decision records for
  MAW's own structural choices.
- `docs/` — full rationale layer (architecture, coding standards,
  style guide, testing, security, git workflow, folder structure,
  deployment).
- `.github/instructions/` — scoped, enforceable rules for typescript,
  react, testing, security, performance, git, review, documentation,
  debugging, and architecture.
- `.github/prompts/` — task entry points (plan-feature, implement,
  refactor, debug, review, release, brainstorm).
- `workflows/` — ordered processes for feature development, bug
  fixing, code review, refactoring, and release.
- `templates/` — fillable scaffolds for features, components, APIs,
  database changes, pages, and bugs.
- `examples/` — worked examples of a good feature plan, PR
  description, and component implementation.
- Core instructions (`copilot-instructions.md`)
- Prompt library skeleton
- Workflow skeleton

### Fixed
- `LICENSE` previously contained changelog content instead of a valid
  license. Replaced with a valid MIT license.
