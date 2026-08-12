# Style Guide

This file covers formatting and stylistic conventions that aren't naming
(see `coding-standards.md`) and aren't language-mechanics (see
`.github/instructions/typescript.instructions.md`). It's the layer of
"how code looks," which matters because inconsistent formatting adds
noise to every diff and every review.

## Formatting is automated, not debated

Indentation, quote style, trailing commas, line length — these are
enforced by a formatter (e.g. Prettier) and a linter (e.g. ESLint), not by
convention or review comments. If the formatter disagrees with a written
rule, fix the formatter config, don't hand-format around it. This is why
`.github/instructions/review.instructions.md` explicitly excludes
formatting nitpicks from review feedback — the tooling already caught it.

## Imports

- Group in order: external packages, then internal absolute imports, then
  relative imports.
- No unused imports — they cost the reader time figuring out if they're
  load-bearing.
- Avoid deep relative paths (`../../../..`); prefer configured path
  aliases.

## Comments

- Comment *why*, not *what*. Code already says what it does; it can't
  explain why a workaround exists or why the obvious approach was
  rejected.
- Delete commented-out code instead of leaving it — version control is
  the history, not the file itself.
- A function that needs a comment to explain what it does is a candidate
  for a rename or a decomposition, not a comment.

## File length

- If a file is hard to summarize in one sentence, it's likely doing more
  than one job — see `docs/architecture.md` on single responsibility.
- No hard line limit, but growth past ~300 lines is a signal to check for
  a natural split.

## Whitespace and structure

- One blank line between logical sections within a function.
- No more than one level of nested callbacks — extract a named function
  instead.
- Early returns over deeply nested conditionals.
