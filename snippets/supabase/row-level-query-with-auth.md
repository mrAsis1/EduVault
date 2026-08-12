# Row-Level-Secured Query

A query pattern that relies on RLS as the actual authorization
boundary — the query doesn't filter by user ID in application code,
because the RLS policy already restricts rows to the authenticated
user.

Complies with: `modules/supabase/security.md` (RLS as the primary
enforcement point), `.github/instructions/security.instructions.md`
(don't roll custom authorization checks where a vetted mechanism
exists).

```ts
import { supabase } from "./typed-client";

// The RLS policy on `notes` (e.g. `user_id = auth.uid()`) does the
// authorization — this query does NOT add `.eq("user_id", userId)`
// itself, since duplicating that check in application code creates
// two sources of truth that can drift.
export async function getMyNotes() {
  const { data, error } = await supabase
    .from("notes")
    .select("id, title, created_at")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
}
```

## Related MAW Documents

- `modules/supabase/security.md`
- `modules/supabase/common-mistakes.md`
- `snippets/supabase/typed-client.md`
