# Playbook: Large Refactor Decision

## Recognition signals

- Someone is proposing a refactor that touches multiple modules, changes
  a shared abstraction, or will take longer than a normal PR cycle to
  land safely.
- If it's scoped to one file/module and fits in a normal review cycle,
  that's a routine change under `workflows/refactoring.md` directly, no
  playbook needed.

## Immediate actions

**Do:**

- Require a stated reason tied to a real cost being paid now — repeated
  bugs in the area, measurable velocity drag, or a specific upcoming
  need the current shape blocks. "It's not clean" alone isn't sufficient
  justification for a large refactor.
- Decide whether it can be done incrementally (strangler pattern,
  behind a flag, module by module) before committing to a big-bang
  rewrite — incremental is the default; big-bang needs its own
  justification.
- Confirm test coverage exists for the current behavior *before*
  refactoring starts — a refactor without a safety net is a rewrite
  wearing a disguise.

**Don't:**

- Greenlight a large refactor motivated primarily by a new team member's
  preference for a different pattern, without the cost/benefit case
  above.
- Let a large refactor stay unmerged for long — long-lived refactor
  branches diverge from `main` and become their own integration risk.

## Who to involve

- Whoever owns the module(s) being refactored, before work starts, not
  at review time on a large diff.
- Anyone whose in-flight work touches the same area — coordinate
  sequencing to avoid a painful merge.

## Handoff

Once justified and scoped, execution follows `workflows/refactoring.md`
in full. This playbook is the go/no-go and scoping judgment that
precedes it — not a replacement for its steps.

## Resolved when

- The refactor is merged incrementally or fully, per
  `workflows/refactoring.md`'s verification step, with behavior
  preserved and tests passing throughout.
- If the refactor stalls or is abandoned, that decision and its reason
  are recorded (a `knowledge/lessons-learned/` entry is often
  appropriate) so it isn't silently re-attempted later without the
  earlier context.

## Related MAW Documents

- `workflows/refactoring.md`
- `docs/architecture.md`
- `knowledge/lessons-learned/`
- `checklists/large-refactor-decision.md`
