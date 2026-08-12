# Common Documentation Mistakes

## Duplication

**Restating a rule from `.github/instructions/` inside a `docs/*.md`
file** "for convenience," so the two now have to be kept in sync manually
— and eventually drift when only one gets updated. Traces to: no
duplicated content, link instead. This is the exact failure ADR-0002
exists to prevent.

**Copying a checklist item's wording into a new area's checklist**
instead of tracing back to the instructions file it came from — now two
verification areas silently disagree if the source rule changes. Traces
to: correct layer used, no duplication across layers.

## Currency

**Merging a behavior change without touching the doc that describes
it**, planning to "update the docs later." Later rarely comes, and the
doc actively misleads readers until it does. Traces to: docs updated in
the same PR as the code.

**A code example that matches an old API signature** after a refactor,
because nobody re-ran it. A reader who copies it gets a broken example.
Traces to: no stale examples.

## Structure

**A README-style file that buries the purpose in paragraph three**,
after background and history, making a reader scan past irrelevant
context to find out what the file is even for. Traces to: purpose stated
in the first paragraph.

**A single file covering two unrelated topics** because they felt
related when the file was created, making it hard to link to "just the
relevant part" from elsewhere. Traces to: one topic per file.

## Related MAW Documents

- `verification/documentation/checklist.md`
- `.github/instructions/documentation.instructions.md`
