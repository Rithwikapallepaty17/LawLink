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

  const { data: profile, error: profileError } =
    await supabase
      .from("profiles")
      .select("xp, level, current_streak, longest_streak")
      .eq("id", userId)
      .single();

  if (profileError) {
    return NextResponse.json(
      { error: profileError.message },
      { status: 500 }
    );
  }

  const { data: transactions, error } =
    await supabase
      .from("xp_transactions")
      .select(`
        id,
        amount,
        reason,
        reference_id,
        created_at
      `)
      .eq("user_id", userId)
      .order("created_at", {
        ascending: false,
      });

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({
    profile,
    transactions,
  });
}