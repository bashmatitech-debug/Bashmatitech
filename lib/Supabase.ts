import { createClient } from "@supabase/supabase-js";

// Server-side Supabase client. Uses the service role key so it can
// insert rows even with Row Level Security turned on. NEVER expose
// SUPABASE_SERVICE_ROLE_KEY to the browser — it must only be read
// on the server (API routes), which is exactly how this file is used.
export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);
