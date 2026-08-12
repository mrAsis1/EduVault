# Deployment Verification Checklist

Traces to `docs/deployment.md` (`[DEP]`).

## Automation

- [ ] Deployment is triggered by automation (merge to `main` or a
      release tag), not run manually `[DEP]`
- [ ] No manual step exists that could be skipped under time pressure
      `[DEP]`

## Reversibility

- [ ] A rollback path is decided *before* this deploy, not improvised
      after `[DEP]`
- [ ] The rollback mechanism (blue-green, canary, versioned rollback) is
      named explicitly `[DEP]`

## Environment parity

- [ ] Local/staging/production use the same containerized build `[DEP]`
- [ ] Same dependency versions across environments `[DEP]`
- [ ] Configuration via environment variables, not hardcoded values,
      across environments `[DEP]`

## Observability

- [ ] Health checks ship as part of the deployable artifact `[DEP]`
- [ ] Error tracking is in place before deploy, not added after an
      incident `[DEP]`
- [ ] Basic metrics/monitoring are in place `[DEP]`

## Related MAW Documents

- `docs/deployment.md`
- `verification/deployment/review-template.md`
