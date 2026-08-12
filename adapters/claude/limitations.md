# Claude: Limitations

Per [`docs/documentation.instructions.md`](../../.github/instructions/documentation.instructions.md)'s
"state purpose... no throat-clearing" — this file exists so MAW
workflows aren't assumed to work identically across every agent. These
are genuine gaps, not disclaimers.

## No persistent enforcement between sessions

`.github/instructions/*.instructions.md` files are *read and followed*
by Claude within a session, but nothing mechanically blocks Claude from
drifting over a long conversation the way a linter or CI check would.
[`workflows/code-review.md`](../../workflows/code-review.md)'s human
review step remains necessary — this adapter does not substitute for
it.

## `.github/prompts/*.md` are not slash-commands here

Unlike some tools, pasting a prompt file's path doesn't invoke special
behavior — its content has to actually be included or referenced in
the message. Treat these as templates to paste from, not commands to
run.

## Context window limits on large repos

A repo with extensive `modules/`/`tools/` content (per v0.3) may
exceed what fits usefully in a single context window if everything is
loaded at once. Point Claude at the specific relevant files for the
task rather than the whole repo, per
[`best-practices.md`](best-practices.md)'s task-scoped invocation
guidance.

## Related

- [`best-practices.md`](best-practices.md)
- [`workflows/code-review.md`](../../workflows/code-review.md)
