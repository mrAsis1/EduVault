# Common Deployment Mistakes

## Automation

**A "just this once" manual deploy** during an automation outage or
urgent hotfix, which then quietly becomes the pattern for the next
urgent fix too. Traces to: automated, not manual.

## Reversibility

**Deciding on a rollback plan only after something breaks.** By the time
it's needed, there's no time to design it well. Traces to: rollback path
decided before deploying.

**A rollback plan that only covers code, not data/schema.** A migration
that ran as part of the deploy has no corresponding down-migration.
Traces to: known rollback path — implicitly, one that actually covers
everything that changed.

## Environment parity

**Staging using slightly older dependency versions** than production
because staging wasn't rebuilt at the same time, silently invalidating
what staging testing proved. Traces to: same dependency versions across
environments.

**A config value hardcoded "temporarily" for a demo**, then shipped
because the demo went well and nobody removed it. Traces to: environment
variables, not hardcoded values.

## Observability

**Shipping a feature with no new error tracking for its new failure
modes**, relying on generic top-level error tracking that doesn't
distinguish this feature's errors from anything else. Traces to: error
tracking ships as part of the deployable artifact.

## Related MAW Documents

- `verification/deployment/checklist.md`
- `docs/deployment.md`
