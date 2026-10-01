"use client";

import { useState } from "react";
import Link from "next/link";

const options = [
  {
    id: "A",
    text: "Keep responding even after clearly asking the person to stop.",
  },
  {
    id: "B",
    text: "Preserve relevant messages or screenshots, use available safety or reporting tools, and seek support if needed.",
  },
  {
    id: "C",
    text: "Share the person's private information publicly.",
  },
  {
    id: "D",
    text: "Delete every message immediately so there is no record.",
  },
];

export default function UnwantedContactScenario() {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const correctAnswer = "B";
  const isCorrect = selectedAnswer === correctAnswer;

  const handleSubmit = () => {
    if (!selectedAnswer) return;

    setSubmitted(true);

    if (selectedAnswer === correctAnswer) {
      const currentXP = Number(localStorage.getItem("lawlink-xp")) || 820;
      localStorage.setItem("lawlink-xp", String(currentXP + 50));
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0b09] text-[#f0ede3]">
      {/* Header */}
      <header className="border-b border-[#37342c] bg-[#0b0b09]">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link
            href="/learn/womens-safety"
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c9a64a] text-xl text-[#c9a64a]">
              §
            </div>

            <div>
              <p className="text-lg font-bold tracking-[0.2em] text-[#f0ede3]">
                LAWLINK
              </p>

              <p className="text-[10px] uppercase tracking-[0.2em] text-[#b7b2a6]">
                Legal Awareness
              </p>
            </div>
          </Link>

          <Link
            href="/learn/womens-safety"
            className="text-sm font-medium text-[#c9a64a] transition hover:text-[#d8b65a]"
          >
            ← Back to Women&apos;s Safety
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-10">
        {/* Page Heading */}
        <div className="mb-8">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#37342c] bg-[#191814] text-2xl">
              🛡️
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a64a]">
                Women&apos;s Safety
              </p>

              <h1 className="mt-1 text-3xl font-bold text-[#f0ede3]">
                Harassment &amp; Unwanted Contact
              </h1>
            </div>
          </div>
        </div>

        {/* Scenario */}
        <section className="rounded-3xl border border-[#37342c] bg-[#191814] p-6 shadow-2xl md:p-8">
          <div className="mb-6 rounded-2xl border border-[#37342c] bg-[#211f19] p-5">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#c9a64a]">
              Real-life scenario
            </p>

            <p className="leading-7 text-[#b7b2a6]">
              Someone keeps sending you unwanted messages after you have made
              it clear that you do not want further contact. You are concerned
              about the situation and want to keep a record of what happened.
            </p>

            <p className="mt-4 font-semibold text-[#f0ede3]">
              What is a sensible next step?
            </p>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {options.map((option) => {
              const isSelected = selectedAnswer === option.id;

              return (
                <button
                  key={option.id}
                  onClick={() =>
                    !submitted && setSelectedAnswer(option.id)
                  }
                  disabled={submitted}
                  className={`flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition ${
                    isSelected
                      ? "border-[#c9a64a] bg-[#211f19] ring-2 ring-[#9d7c2f]/30"
                      : "border-[#37342c] bg-[#12120f] hover:border-[#9d7c2f] hover:bg-[#211f19]"
                  } ${
                    submitted
                      ? "cursor-default"
                      : "cursor-pointer"
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-bold ${
                      isSelected
                        ? "bg-[#c9a64a] text-[#0b0b09]"
                        : "bg-[#211f19] text-[#b7b2a6]"
                    }`}
                  >
                    {option.id}
                  </span>

                  <span className="pt-1 text-sm leading-6 text-[#b7b2a6]">
                    {option.text}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Submit */}
          {!submitted && (
            <button
              onClick={handleSubmit}
              disabled={!selectedAnswer}
              className="mt-6 w-full rounded-2xl bg-[#c9a64a] px-5 py-3 font-semibold text-[#0b0b09] transition hover:bg-[#d8b65a] disabled:cursor-not-allowed disabled:bg-[#37342c] disabled:text-[#77736a]"
            >
              Check Answer
            </button>
          )}

          {/* Result */}
          {submitted && (
            <div
              className={`mt-6 rounded-2xl border p-5 ${
                isCorrect
                  ? "border-[#9d7c2f] bg-[#211f19]"
                  : "border-[#37342c] bg-[#12120f]"
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="text-2xl">
                  {isCorrect ? "🎉" : "💡"}
                </div>

                <div>
                  <h2
                    className={`font-bold ${
                      isCorrect
                        ? "text-[#d8b65a]"
                        : "text-[#c9a64a]"
                    }`}
                  >
                    {isCorrect ? "Correct!" : "Not quite!"}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-[#b7b2a6]">
                    {isCorrect
                      ? "Keeping relevant records can help preserve a clear account of what happened. Depending on the situation, available platform reporting tools, trusted support people, or appropriate authorities may also be relevant."
                      : "Consider preserving relevant records and using appropriate safety or reporting options. If the situation feels threatening or unsafe, seeking support can also be important."}
                  </p>

                  {isCorrect && (
                    <p className="mt-3 font-bold text-[#d8b65a]">
                      +50 XP ⭐
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Continue */}
          {submitted && (
            <Link
              href="/learn/womens-safety"
              className="mt-6 block w-full rounded-2xl border border-[#c9a64a] bg-[#c9a64a] px-5 py-3 text-center font-semibold text-[#0b0b09] transition hover:bg-[#d8b65a]"
            >
              Back to Women&apos;s Safety
            </Link>
          )}
        </section>

        {/* Disclaimer */}
        <p className="mt-8 text-center text-xs leading-5 text-[#77736a]">
          LawLink provides legal awareness and educational information only.
          It is not a substitute for professional legal advice. If someone is
          in immediate danger, contact appropriate local emergency services or
          a trusted person.
        </p>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#37342c] px-6 py-6">
        <p className="text-center text-xs uppercase tracking-[0.18em] text-[#77736a]">
          § LAWLINK — Learn your rights. Understand your options.
        </p>
      </footer>
    </div>
  );
}