import { NextRequest, NextResponse } from "next/server";

import { checkAndAwardBadges } from "@/lib/gamification/checkBadges";
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

  const scenarioId = request.nextUrl.searchParams.get("scenarioId");

  if (!scenarioId) {
    return NextResponse.json(
      { error: "scenarioId is required" },
      { status: 400 }
    );
  }

  const supabase = await createClient();

  const { data: scenario, error: scenarioError } = await supabase
    .from("scenarios")
    .select(`
      id,
      title,
      description,
      difficulty,
      estimated_minutes,
      xp_reward
    `)
    .eq("id", Number(scenarioId))
    .single();

  if (scenarioError || !scenario) {
    return NextResponse.json(
      { error: "Scenario not found" },
      { status: 404 }
    );
  }

  const { data: questions, error: questionsError } =
    await supabase
      .from("questions")
      .select(`
        id,
        question_text,
        question_type,
        explanation,
        xp_reward,
        order_number,
        question_options (
          id,
          option_text,
          order_number
        )
      `)
      .eq("scenario_id", Number(scenarioId))
      .order("order_number");

  if (questionsError) {
    return NextResponse.json(
      { error: questionsError.message },
      { status: 500 }
    );
  }

  return NextResponse.json({
    scenario,
    questions,
  });
}

import { calculateLevel } from "@/lib/gamification/calculateLevel";
import { calculateQuizXP } from "@/lib/gamification/calculateXP";
import { QuizSubmissionSchema } from "@/lib/validation/schemas";

export async function POST(request: NextRequest) {
  const userId = await getAuthenticatedUserId();

  if (!userId) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const body = await request.json();

  const parsed = QuizSubmissionSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Invalid request",
        details: parsed.error.flatten(),
      },
      { status: 400 }
    );
  }

  const { scenarioId, answers } = parsed.data;

  const supabase = await createClient();

  // ----------------------------------------------------------
  // Get scenario
  // ----------------------------------------------------------

  const { data: scenario, error: scenarioError } =
    await supabase
      .from("scenarios")
      .select(`
        id,
        xp_reward
      `)
      .eq("id", scenarioId)
      .single();

  if (scenarioError || !scenario) {
    return NextResponse.json(
      { error: "Scenario not found" },
      { status: 404 }
    );
  }

  // ----------------------------------------------------------
  // Get questions + correct answers
  // ----------------------------------------------------------

  const { data: questions, error: questionsError } =
    await supabase
      .from("questions")
      .select(`
        id,
        question_options (
          id,
          is_correct
        )
      `)
      .eq("scenario_id", scenarioId);

  if (questionsError) {
    return NextResponse.json(
      { error: questionsError.message },
      { status: 500 }
    );
  }

  // ----------------------------------------------------------
  // Calculate score on server
  // ----------------------------------------------------------

  let score = 0;

  for (const answer of answers) {
    const question = questions?.find(
      (q) => q.id === answer.questionId
    );

    if (!question) {
      continue;
    }

    const selectedOption = question.question_options.find(
      (option) => option.id === answer.optionId
    );

    if (selectedOption?.is_correct) {
      score++;
    }
  }

  const totalQuestions = questions?.length ?? 0;

  const xpEarned = calculateQuizXP(
    score,
    totalQuestions,
    scenario.xp_reward
  );

  // ----------------------------------------------------------
  // Save quiz attempt
  // ----------------------------------------------------------

  const { error: attemptError } = await supabase
    .from("quiz_attempts")
    .insert({
      user_id: userId,
      scenario_id: scenarioId,
      score,
      total_questions: totalQuestions,
    });

  if (attemptError) {
    return NextResponse.json(
      { error: attemptError.message },
      { status: 500 }
    );
  }

  // ----------------------------------------------------------
  // Existing progress
  // ----------------------------------------------------------

  const { data: existingProgress } = await supabase
    .from("user_progress")
    .select("*")
    .eq("user_id", userId)
    .eq("scenario_id", scenarioId)
    .maybeSingle();

  const attempts =
    (existingProgress?.attempts ?? 0) + 1;

  const completed =
    score === totalQuestions;

  const { error: progressError } = await supabase
    .from("user_progress")
    .upsert(
      {
        user_id: userId,
        scenario_id: scenarioId,
        status: completed
          ? "completed"
          : "in_progress",
        score,
        attempts,
        completed_at: completed
          ? new Date().toISOString()
          : null,
      },
      {
        onConflict: "user_id,scenario_id",
      }
    );

  if (progressError) {
    return NextResponse.json(
      { error: progressError.message },
      { status: 500 }
    );
  }

  // ----------------------------------------------------------
  // Get current XP
  // ----------------------------------------------------------

  const { data: profile, error: profileError } =
    await supabase
      .from("profiles")
      .select("xp, level")
      .eq("id", userId)
      .single();

  if (profileError || !profile) {
    return NextResponse.json(
      { error: "Profile not found" },
      { status: 404 }
    );
  }

  const newXP = profile.xp + xpEarned;

  const newLevel = calculateLevel(newXP);

  // ----------------------------------------------------------
  // Save XP transaction
  // ----------------------------------------------------------

  if (xpEarned > 0) {
    const { error: xpTransactionError } =
      await supabase
        .from("xp_transactions")
        .insert({
          user_id: userId,
          amount: xpEarned,
          reason: `Completed scenario ${scenarioId}`,
          reference_id: scenarioId,
        });

    if (xpTransactionError) {
      return NextResponse.json(
        { error: xpTransactionError.message },
        { status: 500 }
      );
    }
  }

  // ----------------------------------------------------------
  // Update profile
  // ----------------------------------------------------------

  const { error: profileUpdateError } =
    await supabase
      .from("profiles")
      .update({
        xp: newXP,
        level: newLevel,
        last_active_at: new Date().toISOString(),
      })
      .eq("id", userId);

  if (profileUpdateError) {
    return NextResponse.json(
      { error: profileUpdateError.message },
      { status: 500 }
    );
  }

  // Check and award badges
const badgesUnlocked =
  await checkAndAwardBadges(
    supabase,
    userId
  );

return NextResponse.json({
  score,
  total: totalQuestions,
  xpEarned,
  newXP,
  newLevel,
  completed,
  badgesUnlocked,
});

  // ----------------------------------------------------------
  // Response
  // ----------------------------------------------------------

  return NextResponse.json({
    score,
    total: totalQuestions,
    xpEarned,
    newXP,
    newLevel,
    completed,
  });
}