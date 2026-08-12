# Documentation Verification Checklist

Traces to `.github/instructions/documentation.instructions.md` (`[DOC]`).

## Structure

- [ ] Purpose is stated in the first paragraph — no throat-clearing
      `[DOC]`
- [ ] Written in imperative, active voice `[DOC]`
- [ ] One topic per file `[DOC]`
- [ ] Headings describe content, not files that describe headings `[DOC]`
- [ ] Short paragraphs/lists used over dense prose `[DOC]`

## Duplication

- [ ] No content duplicated from another file — linked instead `[DOC]`
- [ ] The correct layer was used for this content: `docs/*.md` for why,
      `.github/instructions/*.md` for enforceable rules, `workflows/*.md`
      for ordered process — not the same fact written in more than one
      `[DOC]`

## Currency

- [ ] Docs updated in the same PR as the code change they describe
      `[DOC]`
- [ ] Every code example runs against current code — no stale examples
      `[DOC]`

## Content quality

- [ ] No marketing language ("powerful", "seamless", "cutting-edge")
      `[DOC]`
- [ ] Documents intent and non-obvious decisions only — not obvious code
      `[DOC]`
- [ ] Concrete examples used over abstract descriptions where useful
      `[DOC]`

## Related MAW Documents

- `.github/instructions/documentation.instructions.md`
- `verification/documentation/review-template.md`
