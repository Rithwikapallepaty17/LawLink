export function calculateLevel(xp: number): number {
  if (xp >= 2000) return 5;
  if (xp >= 1200) return 4;
  if (xp >= 700) return 3;
  if (xp >= 300) return 2;

  return 1;
}