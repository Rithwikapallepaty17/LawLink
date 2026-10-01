"use client";

import { useEffect, useState } from "react";

export default function XPBar() {
  const [xp, setXp] = useState(820);

  useEffect(() => {
    const savedXP = localStorage.getItem("lawlink-xp");

    if (savedXP) {
      setXp(Number(savedXP));
    }
  }, []);

  const level = Math.floor(xp / 250) + 1;
  const currentLevelXP = xp % 250;
  const progress = (currentLevelXP / 250) * 100;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            Your Progress
          </p>

          <h3 className="text-xl font-bold text-slate-900">
            Level {level}
          </h3>
        </div>

        <div className="text-right">
          <p className="text-2xl font-bold text-blue-600">
            {xp} XP
          </p>

          <p className="text-xs text-slate-500">
            {250 - currentLevelXP} XP to next level
          </p>
        </div>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-blue-600 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}