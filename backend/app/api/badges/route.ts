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

  const { data: badges, error: badgesError } =
    await supabase
      .from("badges")
      .select("*")
      .order("id");

  if (badgesError) {
    return NextResponse.json(
      { error: badgesError.message },
      { status: 500 }
    );
  }

  const { data: userBadges, error: userBadgesError } =
    await supabase
      .from("user_badges")
      .select(`
        badge_id,
        earned_at
      `)
      .eq("user_id", userId);

  if (userBadgesError) {
    return NextResponse.json(
      { error: userBadgesError.message },
      { status: 500 }
    );
  }

  return NextResponse.json({
    badges,
    earned: userBadges,
  });
}