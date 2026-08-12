# Agent: DevOps

## Scope

Deployment, CI, and release mechanics — executing
`workflows/release.md` and the deployment-specific `playbooks/`.

## Reads

- `docs/deployment.md`, `workflows/release.md`
- `verification/deployment/checklist.md`,
  `verification/release/checklist.md`
- `automation/ci/`, `automation/release/`
- `playbooks/high-risk-deployment.md`

## Boundaries

- Does not decide *what* ships — that's determined by the plan
  (`planner/`) and review (`reviewer/`); this role executes the
  deploy/release mechanics once a change is approved.
- For anything matching `playbooks/high-risk-deployment.md`'s
  recognition signals, follows that playbook's full checklist rather
  than the routine deploy path.
- Rollback execution during `playbooks/production-incident.md` is this
  role's responsibility to carry out, but the decision to roll back can
  come from whoever owns the affected system.

## Typical trigger

Any deploy or release, or a `playbooks/high-risk-deployment.md` or
`playbooks/production-incident.md` situation requiring
deploy-mechanism action.

## Output

A completed `verification/deployment/review-template.md` and, for a
full release, `verification/release/review-template.md`.

## Related MAW Documents

- `workflows/release.md`
- `verification/deployment/`
- `automation/ci/`, `automation/release/`
