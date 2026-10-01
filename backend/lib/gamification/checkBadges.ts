import { SupabaseClient } from "@supabase/supabase-js";

export async function checkAndAwardBadges(
  supabase: SupabaseClient,
  userId: string
) {
  const { count: completedCount } = await supabase
    .from("user_progress")
    .select("*", {
      count: "exact",
      head: true,
    })
    .eq("user_id", userId)
    .eq("status", "completed");

  const { data: profile } = await supabase
    .from("profiles")
    .select("xp")
    .eq("id", userId)
    .single();

  const { data: badges } = await supabase
    .from("badges")
    .select("*");

  if (!badges) {
    return [];
  }

  const unlocked: string[] = [];

  for (const badge of badges) {
    let qualifies = false;

    if (
      badge.requirement_type === "scenarios_completed" &&
      (completedCount ?? 0) >= badge.requirement_value
    ) {
      qualifies = true;
    }

    if (
      badge.requirement_type === "xp" &&
      (profile?.xp ?? 0) >= badge.requirement_value
    ) {
      qualifies = true;
    }

    if (!qualifies) {
      continue;
    }

    const { data: existing } = await supabase
      .from("user_badges")
      .select("badge_id")
      .eq("user_id", userId)
      .eq("badge_id", badge.id)
      .maybeSingle();

    if (!existing) {
      await supabase
        .from("user_badges")
        .insert({
          user_id: userId,
          badge_id: badge.id,
        });

      unlocked.push(badge.name);
    }
  }

  return unlocked;
}