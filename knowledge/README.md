# Knowledge

## Purpose

Holds accumulated engineering knowledge that isn't a rule, a pattern, or
a process — the kind of thing you'd otherwise lose to memory or a
scattered Slack thread. Where `principles/`, `heuristics/`, and
`patterns/` are prescriptive (what to do), everything under `knowledge/`
is descriptive: what happened, what was learned, what a term means, what
a source said.

## Why this is a separate layer

MAW's earlier layers all answer "what should I do." None of them answer
"what have we already learned the hard way" or "what does this term
actually mean in our context." Without a dedicated place, that knowledge
either lives in someone's head, gets rediscovered the hard way twice, or
gets crammed into a `principles/` file where it doesn't belong (a
postmortem is not a principle — it's evidence a principle exists for a
reason).

## What lives here

- **`books/`** — notes on books that shaped how the team works, not full
  summaries or reproductions.
- **`articles/`** — notes on external articles/posts worth remembering.
- **`glossary/`** — terms specific to this project/team that a newcomer
  wouldn't know from general software vocabulary.
- **`references/`** — pointers to external standards, specs, or docs
  used as a source of truth for something.
- **`lessons-learned/`** — a specific insight gained from experience,
  independent of whether anything broke.
- **`postmortems/`** — what happened when something broke, why, and what
  changed as a result.
- **`cheatsheets/`** — quick-reference material for something used
  often enough to be worth condensing.

## How this differs from `research/`

`knowledge/` is settled — things the team already knows and has
integrated. `research/` (sibling directory) is exploratory — benchmarks,
experiments, and comparisons still being evaluated. When research
concludes something worth keeping permanently, it graduates into
`knowledge/` (usually `lessons-learned/` or `references/`).

## Content policy

Every file here should be a real, specific entry — a real book, a real
incident, a real term this team actually uses. Do not fill these folders
with generic or hypothetical examples; an empty subfolder with just its
`README.md` and template is the correct state until real content exists.

## Related MAW Documents

- `research/README.md`
- `principles/`, `heuristics/` (prescriptive counterparts)
