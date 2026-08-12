# Checklist: Breaking Change

Full reasoning: `playbooks/breaking-change.md`

- [ ] Every known consumer identified before implementation
- [ ] Migration path decided explicitly (versioned endpoint,
      deprecation window, dual-write, feature flag)
- [ ] Migration path stated in the feature plan's architectural-impact
      section
- [ ] Consumer list sanity-checked by a second engineer
- [ ] Gap between shipping the change and requiring migration is
      real, not same-day, unless all consumers are internal and
      coordinated
- [ ] Old shape/endpoint has a scheduled removal date, not left
      indefinitely
