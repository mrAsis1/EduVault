# Playbook: Breaking Change

## Recognition signals

- A public API's request/response shape, a database column/table used
  by other services, or a widely-imported function's signature is
  changing in a way existing consumers can't tolerate unchanged.
- "We'll just tell people to update" is being said about something with
  more than one consumer, or an external/unknown consumer.

If none of these apply, this is a normal feature — use
`workflows/feature-development.md` directly, no playbook needed.

## Immediate actions

**Do:**

- Identify every known consumer of the thing being changed before
  writing code, not after.
- Decide the migration path explicitly: versioned endpoint, deprecation
  window, dual-write, feature flag — before implementation starts.
- State the breaking change and its migration path in the plan required
  by `workflows/feature-development.md` step 1 — this is the
  "architectural impact" that plan step already asks for made explicit.

**Don't:**

- Ship the change and the migration announcement in the same PR with no
  gap for consumers to react, unless every consumer is internal and
  coordinated in advance.
- Treat "it's just an internal API" as automatic license to skip a
  migration path — check who actually depends on it first.

## Who to involve

- Anyone who owns a known downstream consumer, before implementation
  starts, not at review time.
- A second engineer to sanity-check the consumer list — it's the part
  most likely to be incomplete.

## Handoff

Once the migration path is decided and consumers are identified, this
is executed as a normal `workflows/feature-development.md` change — the
plan step already covers architectural-impact review; this playbook
exists to make sure that review actually happens for breaking changes
specifically, since "it compiles" doesn't catch a breaking API/schema
change the way it catches a type error.

## Resolved when

- All known consumers have migrated or the deprecation window has
  passed.
- The old shape/endpoint is safely removed, per the decided migration
  path — not left indefinitely "for safety" with no removal date.

## Related MAW Documents

- `workflows/feature-development.md`
- `docs/architecture.md`
- `checklists/breaking-change.md`
