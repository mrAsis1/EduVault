# Security Verification

## Purpose

This area defines how security is *verified*, not how it is *practiced*.
Security practice — what to do while writing code — is already owned by
`.github/instructions/security.instructions.md` (enforced rules) and
`docs/security.md` (rationale and threat model). This directory answers a
different question: **how does someone confirm, after the fact, that
those rules were actually followed?**

## Why a separate verification layer

MAW's `.github/instructions/` layer tells an agent or engineer what to do
*while* writing code. It does not tell a reviewer what to check *after*
code is written, nor does it give a way to score how well a piece of work
met the bar. Without this layer, verification either doesn't happen
consistently, or every reviewer re-derives their own checklist — which is
exactly the duplicated-standards problem MAW's `principles/` and
`heuristics/` layers already solve for design-time decisions.

## What lives here

- **`checklist.md`** — a pass/fail list a reviewer works through, each
  item traced back to a rule in `.github/instructions/security.instructions.md`
  or `docs/security.md`. No item here restates a rule; it only points at
  one and turns it into something checkable.
- **`review-template.md`** — the structure a security review write-up
  follows, so reviews are comparable across PRs and reviewers.
- **`common-mistakes.md`** — recurring, specific failure patterns seen in
  practice, kept separate from the checklist because a mistake is a
  concrete story ("token logged in an error handler") while a checklist
  item is a compact abstraction of many possible mistakes.
- **`scorecard.md`** — a way to turn a completed checklist into a single
  comparable signal (score/grade) for tracking security posture over time
  or across projects.

## How to use this area

1. Before requesting review, run the work through `checklist.md`.
2. Write the review using `review-template.md`.
3. If a new failure pattern shows up that isn't in `common-mistakes.md`,
   add it there — but only after confirming it traces back to a rule in
   `.github/instructions/security.instructions.md`. If it doesn't, the
   rule is missing, not the checklist item; fix the instructions file
   first (see ADR-0002).
4. Record the outcome in `scorecard.md` if the project is tracking
   security posture over time.

## Related MAW Documents

- `.github/instructions/security.instructions.md` — the enforced rules
  this area verifies compliance against.
- `docs/security.md` — rationale and threat model behind those rules.
- `principles/security-first.md` — design-time principle this area
  verifies was applied.
- `ARCHITECTURE_DECISIONS.md` — ADR-0002 (link, don't duplicate).
