# Common Release Mistakes

## Version bump

**Calling a breaking change "minor" because the team wasn't ready to
bump major.** The version number stops meaning anything to consumers
once this happens once. Traces to: bump matches semver rules, not team
preference.

## Changelog

**Writing changelog entries from memory of what was intended**, rather
than from the actual commit log — entries appear for work that got
descoped or reverted. Traces to: every entry corresponds to an actual
commit.

## Tag

**Tagging a commit slightly after the actual release commit** because a
small last-minute fix went in, so the tag doesn't match what was actually
deployed. Traces to: tag at the release commit specifically.

## Post-release verification

**Treating "the deploy succeeded" as equivalent to "the release is
verified."** A successful deploy pipeline run doesn't confirm the running
version matches the tag or that monitoring is actually clean — that
requires a separate look. Traces to: post-release verification step.

## Announcement

**Skipping the announcement for "small" releases**, so consumers/team
members find out about a behavior change only when it breaks something
for them. Traces to: every release gets summarized.

## Related MAW Documents

- `verification/release/checklist.md`
- `workflows/release.md`
