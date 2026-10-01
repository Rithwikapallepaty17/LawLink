import { NextRequest, NextResponse } from "next/server";

import { createClient } from "@/lib/supabase/server";
import { getAuthenticatedUserId } from "@/lib/auth/getUser";

export async function GET(request: NextRequest) {
  const userId = await getAuthenticatedUserId();

  if (!userId) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const topicId = request.nextUrl.searchParams.get("topic");

  const supabase = await createClient();

  let query = supabase
    .from("scenarios")
    .select(`
      id,
      topic_id,
      title,
      description,
      difficulty,
      estimated_minutes,
      xp_reward,
      order_number
    `)
    .order("order_number");

  if (topicId) {
    query = query.eq("topic_id", Number(topicId));
  }

  const { data, error } = await query;

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json(data);
}