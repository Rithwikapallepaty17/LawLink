export function calculateQuizXP(
  score: number,
  totalQuestions: number,
  baseXP: number
): number {
  if (totalQuestions <= 0) {
    return 0;
  }

  const percentage = score / totalQuestions;

  if (percentage >= 0.8) {
    return baseXP;
  }

  if (percentage >= 0.5) {
    return Math.floor(baseXP * 0.5);
  }

  return Math.floor(baseXP * 0.25);
}