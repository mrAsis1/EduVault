---
applyTo: "**/*"
---

Commit messages:

- Format: `<type>(<scope>): <summary>`
- Types: `feat`, `fix`, `refactor`, `test`, `docs`, `chore`, `perf`, `style`
- Summary in imperative mood, no trailing period, under 72 characters
- Body explains *why*, not *what* — the diff already shows what

Always:

- One logical change per commit
- Run tests before committing
- Keep commits buildable in isolation (no "WIP" commits on shared branches)

Never:

- Commit directly to `main`
- Force-push shared branches
- Commit generated files, secrets, or `node_modules`

Branch naming: `<type>/<short-description>` (e.g. `feat/user-auth`,
`fix/login-redirect`).

Full workflow (branching strategy, PR process, release tagging) is defined
in `docs/git-workflow.md`.
