import "server-only";
import { createClient } from "@supabase/supabase-js";
import { serverEnv } from "@/shared/config/server-env";

export function createSupabaseServerClient() {
  return createClient(serverEnv.supabaseUrl, serverEnv.supabaseSecretKey, {
    auth: {
      autoRefreshToken: false,
      detectSessionInUrl: false,
      persistSession: false,
    },
  });
}
