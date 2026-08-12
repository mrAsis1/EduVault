# Architecture

## Why one responsibility per file

A file that does one thing can be understood without loading the rest of
the system into your head. When a file grows multiple responsibilities,
every change to it risks breaking something unrelated, and every reviewer
has to re-verify the whole file instead of the one thing that changed.
This is the reasoning behind the rule in
`.github/instructions/architecture.instructions.md`.

## Why depend on abstractions at boundaries

External systems change on their own schedule — APIs version, databases
migrate, third-party services get replaced. Code that depends directly on
a concrete implementation (a specific HTTP client, a specific ORM) has to
change everywhere that dependency is used. Code that depends on an
abstraction (an interface) only has to change in one place: the
implementation behind it. This is why API clients, storage, and external
services should sit behind an interface, even when there's only one
implementation today.

## Why business logic stays separate from framework/UI code

Frameworks and UI libraries change faster than business rules. If "how we
calculate a discount" lives inside a React component, you can't test it
without rendering a component, and you can't reuse it if the UI changes.
Separating logic from framework code means the logic is testable in
isolation and survives framework migrations.

## Why composition over inheritance

Inheritance couples a class to its entire ancestor chain — a change to a
base class can silently break every subclass. Composition (building
behavior out of small, injected pieces) keeps that coupling explicit and
local. This is a default, not an absolute — inheritance is fine for
genuine is-a relationships with stable contracts.

## Why no circular dependencies

A circular dependency means two modules can't be understood, tested, or
deployed independently — they're really one module pretending to be two.
It also tends to signal that a responsibility is split in the wrong place.
If module A needs something from module B and vice versa, that shared
thing usually belongs in a third module both can depend on.

## How to propose an architectural change

Architecture changes aren't made file-by-file during implementation — they
go through `.github/prompts/plan-feature.md` first, because they affect
more than the code being written. State the current pattern, the proposed
pattern, and why the tradeoff is worth it, before writing code.
