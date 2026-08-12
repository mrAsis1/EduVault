# Folder Structure

## Why this repo is organized by layer, not by feature

Monarch AI Workspace organizes top-level folders by *what kind of thing*
a file is (a rule, a doc, a process, a template) rather than by feature,
because this repo isn't an application — it's a framework other
applications and agents consume. An agent needs to reliably find "all
enforceable rules" or "all workflows" without knowing anything about a
specific feature.

Applications built *using* Monarch conventions should organize their own
`src/` by feature/domain once they reach meaningful size — that's a
separate concern from how this framework repo is organized, and belongs
in that project's own `docs/architecture.md`.

## Top-level layout

```
.github/
  copilot-instructions.md   — global agent contract
  instructions/             — scoped, machine-enforced rules (the "what")
  prompts/                  — task entry points (the "when/how to invoke")
docs/                       — narrative rationale (the "why")
workflows/                  — ordered engineering processes (the "steps")
templates/                  — structural scaffolds, no content
examples/                   — worked examples showing the quality bar
```

## The rule that keeps these from duplicating each other

Each layer answers a different question about the same topic:

| Topic     | `docs/` (why)         | `.github/instructions/` (what) | `workflows/` (how, step-by-step) |
|-----------|------------------------|----------------------------------|-----------------------------------|
| Testing   | `testing.md`           | `testing.instructions.md`        | (referenced from testing.md as needed) |
| Security  | `security.md`          | `security.instructions.md`       | — |
| Git       | `git-workflow.md`      | `git.instructions.md`            | `release.md` |
| Review    | (in git-workflow.md)   | `review.instructions.md`         | `code-review.md` |

If you're about to write a sentence that already exists in another layer,
link to it instead of repeating it — this is the single rule that keeps
the framework maintainable as it grows.

## Where new content goes

- New rule that an agent should mechanically apply while editing → `.github/instructions/`
- New reasoning a human should read once to understand a decision → `docs/`
- New multi-step process (release, onboarding, incident response) → `workflows/`
- New task an agent gets invoked to do on demand → `.github/prompts/`
- New reusable scaffold → `templates/`
- New concrete "here's what good looks like" → `examples/`
