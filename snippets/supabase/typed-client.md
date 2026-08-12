# Typed Supabase Client

Singleton Supabase client typed against generated database types,
instead of an untyped client scattered across the codebase.

Complies with: `.github/instructions/typescript.instructions.md`
(explicit types, no `any`), `modules/supabase/project-structure.md`
(generated types).

```ts
import { createClient } from "@supabase/supabase-js";
import type { Database } from "./database.types"; // generated via
// `supabase gen types typescript`, per modules/supabase/project-structure.md

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment configuration");
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
```

## Related MAW Documents

- `modules/supabase/project-structure.md`
- `.github/instructions/security.instructions.md` (secrets from
  environment, not hardcoded)
- `snippets/supabase/row-level-query-with-auth.md`
