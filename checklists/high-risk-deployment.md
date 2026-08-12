# Checklist: High-Risk Deployment

Full reasoning: `playbooks/high-risk-deployment.md`

- [ ] Full `verification/deployment/checklist.md` run, not abbreviated
- [ ] Rollback path covers data/schema changes specifically, not just
      code
- [ ] Migration tested against realistic data volume, not just staging
      defaults
- [ ] Deploy scheduled when responders are actually available
- [ ] No unrelated changes bundled into this deploy
- [ ] Rollback plan independently confirmed before deploy starts
