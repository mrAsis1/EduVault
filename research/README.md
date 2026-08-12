# Research

## Purpose

Exploratory work still being evaluated — benchmarks, experiments, and
comparisons that haven't yet become a settled decision. Where
`knowledge/` holds what the team already knows, `research/` holds what
it's currently investigating.

## Why this is separate from `knowledge/`

Research in progress is provisional by nature — a benchmark can be
re-run, an experiment can be inconclusive, a comparison can change as
tools evolve. Mixing that with `knowledge/`'s settled entries would make
it unclear what's actually decided versus still being tested. When
research concludes something worth keeping permanently, it graduates
into `knowledge/` (usually `lessons-learned/` or `references/`) and the
research entry stays as the record of how that conclusion was reached.

## What lives here

- **`benchmarks/`** — measured performance comparisons with methodology.
- **`experiments/`** — a specific hypothesis tested, with outcome.
- **`comparisons/`** — evaluating multiple options (tools, libraries,
  approaches) against defined criteria.
- **`notes/`** — informal working notes that don't yet fit the other
  three, kept here rather than lost, until they either graduate or turn
  out not to matter.

## Content policy

Same as `knowledge/`: real, specific entries only. An empty subfolder
with just its `README.md` and template is the correct state until real
research exists.

## Related MAW Documents

- `knowledge/README.md`
- `verification/performance/` (a benchmark that justifies a
  readability-for-performance trade-off belongs in both: the number in
  `research/benchmarks/`, the trade-off review in
  `verification/performance/review-template.md`)
