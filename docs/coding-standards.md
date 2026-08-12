# Coding Standards

Naming conventions exist so that the *shape* of an identifier tells you
what it is before you read its definition. Consistency here is what lets
someone unfamiliar with a file still navigate it quickly.

## Variables

`camelCase`

Variables and function names read like verbs/nouns in a sentence.
`camelCase` is the JavaScript/TypeScript ecosystem convention — matching
it means Monarch code looks native in any JS/TS codebase, not like a
foreign dialect.

## Components

`PascalCase`

Capitalizing components distinguishes them from regular functions and
variables at a glance, and matches JSX's own requirement that custom
components start with a capital letter (lowercase tags are treated as
native HTML elements).

## Constants

`UPPER_CASE`

A name in `UPPER_CASE` signals "this value is fixed and never reassigned"
without needing to check its declaration. Reserve this for true constants
(config values, enum-like sets) — not for `const`-declared variables that
just happen to not be reassigned in their local scope.

## Folders

`kebab-case`

Filesystems vary in case-sensitivity across operating systems.
`kebab-case` avoids case-collision bugs that only show up on some
platforms, and avoids the readability cost of `snake_case` or
`camelCase` in URLs and file paths.

## Why these live here, not in `.github/instructions/`

These are naming conventions, not mechanically enforced rules — they rely
on judgment (is this really a constant, or just an unreassigned local?).
Language-specific enforceable rules (types, strictness, forbidden
patterns) live in `.github/instructions/typescript.instructions.md`;
this file is the reasoning a human reads once and then applies by habit.
