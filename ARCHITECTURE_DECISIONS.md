# Architecture Decision Records

This file records why Monarch AI Workspace is shaped the way it is.
Each record is a decision about MAW's own structure — not about how
code written *using* MAW should be shaped (that reasoning lives in
[`docs/architecture.md`](docs/architecture.md)). New structural
decisions should be appended here, not folded into `docs/` or
`ROADMAP.md`, so the reasoning survives independent of any single
conversation or contributor.

Format: Status, Context, Decision, Consequences.

---

## ADR-0001: Separate layers by question answered, not by feature

**Status:** Accepted

**Context:** Engineering conventions can be organized many ways — by
feature, by team, by file type, or by the kind of question they
answer. MAW needed one organizing principle that both humans and AI
agents could rely on consistently.

**Decision:** Organize top-level layers by *which question they
answer*: `docs/` answers why, `.github/instructions/` answers what is
enforced, `workflows/` answers how (ordered steps), `.github/prompts/`
answers how to invoke a task, `templates/` answers what shape an
artifact takes, `examples/` answers what good looks like filled in.

**Consequences:** Any new content has exactly one correct home, which
is checkable ("does this explain why, or state a rule, or sequence
steps?"). The tradeoff is that a single topic (e.g. testing) is
necessarily split across multiple files in multiple layers rather than
living in one place — mitigated by consistent cross-referencing rather
than consolidation.

---

## ADR-0002: Never duplicate — link instead

**Status:** Accepted

**Context:** With content split across layers (ADR-0001), the same
fact could easily get restated in multiple files, and those copies
would drift out of sync over time as one gets edited and the other
doesn't.

**Decision:** No file may restate content that exists in another file.
When a file needs to reference information owned by another layer, it
links to that file instead of repeating its content, even partially.

**Consequences:** Every file stays a single source of truth for its
one fact, and edits only ever need to happen in one place. The
tradeoff is that reading any single file often requires following
links to get full context — accepted because the alternative (drift
between duplicated copies) is a worse failure mode than the extra
navigation cost.

---

## ADR-0003: Adapters must be thin — never a content fork

**Status:** Accepted

**Context:** MAW must work across GitHub Copilot, Claude Code, Codex,
Cursor, Gemini, and future agents. Each tool has its own convention
for where it expects instructions (e.g. `.github/copilot-instructions.md`,
a future `CLAUDE.md`). Without a rule, each per-tool file risks
becoming a full copy of MAW's conventions, reintroducing the
duplication problem ADR-0002 exists to prevent.

**Decision:** Per-agent adapters may only contain tool-specific
delivery mechanics (file location, frontmatter format the tool
requires) and must otherwise route back to `docs/`,
`.github/instructions/`, and `workflows/`. This is formalized as the
thin-adapter discipline applied to `adapters/` in v0.4 (see
`ROADMAP.md`).

**Consequences:** Adding support for a new AI agent becomes a small,
low-risk addition rather than a fork requiring the entire convention
set to be re-authored and kept in sync by hand. The tradeoff is that
adapters cannot offer a tool-optimized rewrite of the conventions for
that specific agent's quirks — accepted because consistency across
agents matters more than per-agent optimization for a framework whose
core value proposition is cross-agent consistency.

---

## ADR-0004: Sequence platform maturity by capability dependency, not by feature appeal

**Status:** Superseded by ADR-0006

**Context:** MAW was evaluated as a platform with eight capabilities
(Knowledge, Reasoning, Planning, Verification, Automation,
Collaboration, Adaptation, Learning). Several of these — particularly
Automation and Learning — are the most immediately appealing to build,
but building them before Verification exists means their outputs
would be unchecked and their behavior unaccountable.

**Decision:** Roadmap phases are sequenced by capability dependency:
Verification and the groundwork for Collaboration first (v0.2),
because every other capability's output is only trustworthy once
something checks it; Reasoning and Adaptation next (v0.5), because
extension and configuration require judgment support to be meaningful
rather than arbitrary; Automation, Planning, and Learning last (v1.0),
because they depend on trustworthy signal from Verification and
Collaboration to avoid calcifying errors into the platform.

**Consequences:** Some capabilities that would be immediately useful
in isolation (e.g. Automation) are deliberately deferred. This is
accepted because building them out of order would either produce
unverified, unaccountable behavior, or require redoing the work once
the dependency capabilities land.

**Superseded because:** in practice, content did not cluster along
capability lines — a single piece of content (e.g. a React pattern)
often served multiple capabilities at once, making "which capability
does this belong to" a harder and less useful question than "what
kind of content is this." See ADR-0006 for the replacement rationale.

---

## ADR-0005: `core/` is judgment support, not enforcement — kept structurally distinct from `.github/instructions/`

**Status:** Superseded by ADR-0006 — see note below

**Context:** Six candidate reasoning concepts were evaluated
(principles, decision trees, heuristics, review checklists,
architecture patterns, AI personas). Three of them — principles,
decision trees, heuristics — are structurally different from anything
in `.github/instructions/`: they support judgment in ambiguous cases
rather than encode a binary, always-apply rule.

**Decision:** These three become a new layer, `core/`, explicitly
labeled non-enforceable and distinct from `.github/instructions/`.
Review checklists extend existing instruction files rather than
becoming a new layer; architecture patterns and AI personas become
narrow extensions of `docs/` and `.github/prompts/` respectively,
rather than new top-level structure.

**Consequences:** MAW gains a mechanism for judgment calls that flat
rules cannot express, without conflating "enforced" and
"judgment-supporting" content in the same layer — which would make it
unclear to an agent whether a given piece of content is a hard
requirement or a weighted input. The tradeoff is an additional layer
for contributors to learn; accepted because collapsing it into
`.github/instructions/` would misrepresent heuristics as enforceable
rules, which is a worse failure mode (per the original evaluation of
heuristics being easy to cite selectively when treated as binary).

**Superseded because:** when v0.2 was actually built under the
content-type-sequenced plan (ADR-0006), `principles/`,
`heuristics/`, and `decision-trees/` were delivered as top-level
layers directly — not nested under a `core/` wrapper. The underlying
distinction this ADR argued for (judgment support vs. enforcement)
still holds and is preserved; only the packaging decision (a separate
`core/` directory) did not survive contact with implementation. No
further `core/` directory is planned.

---

## ADR-0006: Sequence versions by content type delivered, not by capability dependency

**Status:** Accepted

**Context:** ADR-0004's capability-dependency sequencing assumed
content would cluster naturally along capability lines (Knowledge,
Reasoning, Verification, etc.). In practice, most content serves
several capabilities simultaneously — a React best-practice entry is
simultaneously Knowledge, a Verification aid, and Reasoning support,
depending on how it's used. This made "which capability phase does
this belong to" an unproductive question to answer for each new file,
and it obscured a simpler, more legible way contributors and agents
alike already think about the repo: by content type — rules, docs,
workflows, stack-specific guidance, and so on.

**Decision:** Roadmap versions are now sequenced by the *kind* of
content delivered, not by which platform capability it serves:
v0.1 Foundation (root files, `docs/`, `templates/`, `workflows/`,
`examples/`, `.github/`) → v0.2 Engineering Foundations
(`foundations/`, `principles/`, `heuristics/`, `decision-trees/`,
`architecture/`, `patterns/`) → v0.3 Technology Library
(`modules/`, `tools/`) → v0.4 AI Integration (`adapters/`,
`prompts/`) → v0.5 Quality System (`verification/`) → v0.6 Engineering
Knowledge (`knowledge/`, `research/`) → v0.7 Playbooks → v0.8
Reusability → v0.9 Automation → v1.0 AI Engineering Platform
(`agents/`, `memory/`, and related observability layers). Full detail
lives in [`ROADMAP.md`](ROADMAP.md); this ADR states only the
sequencing principle, not the phase-by-phase content, per this file's
own no-duplication rule (ADR-0002).

**Consequences:** Each version's scope is now trivially checkable
("does this belong to a rule, a doc, a stack module, a verification
artifact?") rather than requiring a judgment call about capability
ownership. The tradeoff is that the platform-capability lens (Knowledge/
Reasoning/Verification/etc.) is no longer explicit in the roadmap's
structure — it still exists conceptually (a `verification/` entry is
obviously Verification-capability work) but is no longer the
organizing axis. This is accepted because the content-type axis maps
more directly onto both how contributors decide where new work goes
and how MAW's own layers (per ADR-0001) are already organized —
reusing one mental model instead of maintaining two in parallel.

---

## ADR-0007: `playbooks/` are situation/judgment guides, not a second copy of `workflows/`

**Status:** Accepted

**Context:** The original v0.7 roadmap entry listed
`playbooks/feature-development.md`, `playbooks/refactoring.md`,
`playbooks/bug-investigation.md`, `playbooks/deployment.md`,
`playbooks/performance-audit.md`, and `playbooks/security-review.md`.
Two of those filenames — `feature-development.md` and `refactoring.md`
— are identical to existing files in `workflows/`, which already state
a complete ordered process for each (plan → set up → implement → verify
→ review → document → merge, in the feature-development case). Writing
`playbooks/` versions with the same structure would have restated those
workflows almost verbatim in a second folder, directly violating
ADR-0002 (never duplicate — link instead). The remaining four didn't
collide on filename but had the same underlying problem in miniature:
they described process for a *task type* (deployment, a performance
pass, a security pass) rather than a *specific high-stakes situation*,
which is what the roadmap's own one-line description of `playbooks/`
actually asks for ("scenario-specific... for common high-stakes
situations").

**Decision:** `playbooks/` is reframed around situations — something
that just happened or is happening now — rather than task types that
already have a `workflows/` entry:

- `playbooks/breaking-change.md` (was `feature-development.md`)
- `playbooks/production-incident.md` (was `bug-investigation.md`)
- `playbooks/high-risk-deployment.md` (was `deployment.md`)
- `playbooks/performance-regression.md` (was `performance-audit.md`)
- `playbooks/security-incident.md` (was `security-review.md`)
- `playbooks/large-refactor-decision.md` (was `refactoring.md`)

Each playbook answers: how do you recognize you're in this situation,
what to do and not do immediately, who to involve, and which existing
`workflows/`, `.github/instructions/`, or `verification/` document
governs the actual mechanics from there — it does not restate those
mechanics. `checklists/` holds a condensed, situation-specific action
checklist per playbook (derived from the playbook, not a duplicate of
`verification/`'s quality-dimension checklists, which check work
product rather than in-the-moment response). `runbooks/` is scaffolded
only (`README.md` + template) since real runbooks require this team's
actual infrastructure and service names, which don't exist as fabricable
content — same policy as `knowledge/`/`research/` in v0.6.

**Consequences:** No filename or content collision with `workflows/`,
and the distinction between the two folders is now a checkable rule
("is this the ordered process for a task type, or judgment guidance for
a live situation") instead of a naming coincidence someone has to
notice. The tradeoff is that the roadmap's originally named playbook
files no longer exist under those names — anything referencing the old
names (`playbooks/feature-development.md` etc.) needs updating to the
new ones. `ROADMAP.md` reflects the renamed list; this ADR is the
record of why.
