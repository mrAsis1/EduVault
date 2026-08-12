# Deployment

## Why deployment is not covered by a `.github/instructions/` file

Deployment steps are environment-specific (cloud provider, hosting model,
CI/CD platform) in a way that naming conventions or code style aren't —
there's no single mechanical rule an agent can apply across every
project using this framework. This file instead states the *principles*
a Monarch-based project's deployment setup should follow; the concrete
steps live in that project's own CI/CD configuration, not here.

## Deployments should be automated, not manual

A manual deployment is a manual process that eventually gets skipped
under time pressure — a step forgotten once is a step that will be
forgotten again. Automating deployment (triggered by a merge to `main` or
a release tag) means the same steps run the same way every time.

## Deployments should be reversible

Every deployment strategy should have a known rollback path decided
*before* the deploy, not improvised after something breaks. Blue-green
deployment, canary releases, or simple versioned rollback are all valid —
what matters is that "how do we undo this" has an answer in advance.

## Environments should be as similar as possible

Differences between local, staging, and production environments are
where "works on my machine" bugs come from. Using the same containerized
build, the same dependency versions, and the same configuration mechanism
(environment variables, not hardcoded values) across environments
reduces surprises at deploy time.

## Deployments should be observable

A deployment without monitoring/alerting means the first sign of a
problem is a user report. Health checks, error tracking, and basic
metrics should ship as part of the deployable artifact, not be added
after an incident.

## Relationship to release process

This file covers deployment *principles*. The ordered release process
(versioning, changelog, tagging) lives in `workflows/release.md` and is
invoked via `.github/prompts/release.md`.
