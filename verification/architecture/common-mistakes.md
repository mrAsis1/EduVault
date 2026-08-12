# Common Architecture Mistakes

## Responsibility

**A utility file that starts as one helper function and accumulates
unrelated helpers over months**, each addition reasonable in isolation.
No single PR looks like a violation. Traces to: one responsibility per
file/module.

## Boundaries

**Importing a concrete database client directly into a component or
service** instead of going through a repository/interface, because "it's
faster for now." The dependency then shows up everywhere that data is
used. Traces to: depend on abstractions at boundaries.

**A new feature quietly reaching across layers** — UI code calling the
database directly to save "one extra hop," bypassing the service layer
that exists for exactly this. Traces to: no reaching across layers.

**A service depending on another service by importing it directly**
instead of through an injected interface, creating a hidden coupling that
only surfaces when one changes. Traces to: explicit dependencies over
hidden globals.

## Business logic

**A discount/pricing calculation written inside a React component**
because it was only needed in one place at first — then it's needed
elsewhere, and it's now untestable without rendering the component.
Traces to: business logic separate from framework/UI code.

## Pattern consistency

**Introducing a new state-management pattern for one feature** because a
new team member preferred it, while the rest of the codebase uses a
different established pattern. Traces to: no new pattern where an
existing one already fits.

## Related MAW Documents

- `verification/architecture/checklist.md`
- `docs/architecture.md`
