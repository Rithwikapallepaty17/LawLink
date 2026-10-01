import { createClient } from "@/lib/supabase/server";

export async function getAuthenticatedUserId() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getClaims();

  if (error || !data?.claims?.sub) {
    return null;
  }

  return data.claims.sub as string;
}