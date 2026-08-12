# Checklist: Security Incident

Full reasoning: `playbooks/security-incident.md`

- [ ] Specific exposed credential/token/vulnerability contained first
- [ ] Scope determined from logs, not assumed
- [ ] Evidence preserved before changes that could overwrite it, if
      forensic review is needed
- [ ] Discussion kept to a narrow channel until contained
- [ ] All credentials of the same exposure pattern rotated, not just the
      one confirmed
- [ ] Fix verified against `verification/security/checklist.md`
- [ ] Postmortem written in `knowledge/postmortems/`
- [ ] Legal/compliance looped in if user data exposure is confirmed or
      likely
