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
    .from("user_progress")
    .select(`
      id,
      scenario_id,
      status,
      score,
      attempts,
      completed_at,
      scenarios (
        id,
        title,
        topic_id
      )
    `)
    .eq("user_id", userId)
    .order("updated_at", {
      ascending: false,
    });

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json(data);
}