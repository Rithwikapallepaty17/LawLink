import { NextResponse } from "next/server";

import { createClient } from "@/lib/supabase/server";
import { getAuthenticatedUserId } from "@/lib/auth/getUser";

export async function GET() {
  const userId = await getAuthenticatedUserId();

  if (!userId) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const supabase = await createClient();

  const { data, error } = await supabase
    .from("profiles")
    .select(`
      id,
      username,
      full_name,
      avatar_url,
      xp,
      level,
      current_streak,
      longest_streak,
      last_active_at
    `)
    .eq("id", userId)
    .single();

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json(data);
}