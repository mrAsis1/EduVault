# Release Verification Checklist

Traces to `workflows/release.md` (`[REL]`), by its seven steps.

## 1. Readiness

- [ ] All target changes are merged to `main` `[REL]`
- [ ] CI is green on `main` `[REL]`
- [ ] No known unresolved blocking issues from recent reviews `[REL]`

## 2. Version bump

- [ ] Version bump (major/minor/patch) is stated explicitly, with the
      reasoning tied to commits since the last release `[REL]`
- [ ] Bump matches semantic versioning rules (breaking → major, additive
      → minor, fix-only → patch) `[REL]`

## 3. Changelog

- [ ] Every changelog entry corresponds to an actual commit — no
      hand-written entries for work not in the log `[REL]`
- [ ] Entries grouped by type (Features, Fixes, Refactors, Docs, Chores)
      `[REL]`
- [ ] `CHANGELOG.md` is updated `[REL]`

## 4. Tag

- [ ] `main` is tagged at the release commit with the new version number
      `[REL]`
- [ ] Tag message follows the same conventional format as commits `[REL]`

## 5. Deploy

- [ ] Deploy followed `verification/deployment/checklist.md` `[REL]`

## 6. Post-release verification

- [ ] Deployed version matches the tagged version `[REL]`
- [ ] Monitoring/error tracking shows no immediate regressions `[REL]`

## 7. Announcement

- [ ] Release summarized for the relevant audience (README badge,
      release notes, changelog link) `[REL]`

## Related MAW Documents

- `workflows/release.md`
- `verification/deployment/checklist.md`
- `verification/release/review-template.md`
