---
applyTo: "**/*.md"
---

Always:

- State purpose in the first paragraph — no throat-clearing
- Use imperative, active voice
- Keep one topic per file
- Link to related files instead of repeating their content
- Update docs in the same PR as the code change they describe

Avoid:

- Duplicating content that exists in another file — link instead
- Marketing language ("powerful", "seamless", "cutting-edge")
- Documenting obvious code — comment/document intent and non-obvious decisions only
- Stale examples — every code example must run against current code

Prefer:

- Short paragraphs and lists over dense prose
- Concrete examples over abstract descriptions
- Headings that describe content, not files that describe headings

`docs/*.md` explains why. `.github/instructions/*.md` states enforceable
rules. `workflows/*.md` states ordered process. Never write the same fact
in more than one of these layers.
