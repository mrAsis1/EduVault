# Common Design/Style Mistakes

## Comments

**A comment restating the line below it.** `// increment counter` above
`counter++`. Traces to: comments explain why, not what.

**Leaving a commented-out old implementation "just in case."** Traces to:
no commented-out code — git history is the "just in case."

## File shape

**A file that grew one small addition at a time until it quietly does
three jobs.** No single commit looks like a violation, but the file as a
whole can't be summarized in one sentence. Traces to: one-sentence
summary test.

**Nested callbacks that grew organically** — each new condition added one
more level instead of prompting a named-function extraction. Traces to:
no more than one level of nested callbacks.

## Imports

**Path aliases configured but not used**, because the deep relative
import already worked and nobody revisited it. Traces to: avoid deep
relative paths where an alias exists.

## Related MAW Documents

- `verification/design/checklist.md`
- `docs/style-guide.md`
