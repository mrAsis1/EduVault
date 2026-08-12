# Release (Automation)

## Purpose

A script wrapping the mechanically-checkable parts of
`workflows/release.md` and `verification/release/checklist.md` — not a
replacement for either, since several release steps (readiness
judgment, changelog *accuracy*, announcement) require a human decision
this script doesn't attempt.

## What `check-release-readiness.mjs` checks

- `CHANGELOG.md` has an entry above the previous version (not "No
  unreleased changes" left in place)
- The version in `CHANGELOG.md`'s top entry matches the version passed
  as an argument
- `ROADMAP.md` has no unchecked items for the version being released

## What it deliberately does not do

- Tag anything, or push — release execution stays a deliberate human
  action per `docs/git-workflow.md`, this script only checks readiness.
- Judge changelog *content* quality — only that an entry exists and the
  version matches. Per `verification/release/checklist.md` step 3, a
  human still confirms every entry traces to a real commit.

## Related MAW Documents

- `workflows/release.md`
- `verification/release/checklist.md`
