# Checklist: Production Incident

Full reasoning: `playbooks/production-incident.md`

- [ ] Impact assessed (who/what/how badly) before root-causing
- [ ] Mitigation applied (rollback/flag-off/scale) before full diagnosis
      if available
- [ ] Mitigation confirmed effective by someone other than who applied
      it
- [ ] Status communicated at a fixed cadence
- [ ] Root cause identified after mitigation, not skipped
- [ ] Regression test added per `workflows/bug-fix.md`
- [ ] Postmortem written if severity warrants it
