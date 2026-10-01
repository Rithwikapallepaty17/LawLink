"use client";

import { useState } from "react";
import Link from "next/link";

const options = [
  {
    id: "A",
    text: "Ignore the request and continue driving without addressing the issue.",
  },
  {
    id: "B",
    text: "Keep the legally required documents available and follow the appropriate verification process.",
  },
  {
    id: "C",
    text: "Post the officer's personal information online.",
  },
  {
    id: "D",
    text: "Give your documents to a stranger who offers to handle the matter for you.",
  },
];

export default function RoadDocumentsScenario() {
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
        <div className="mx-auto max-w-5xl px-6 py-5">

          <div className="flex items-center justify-between">

            <Link
              href="/learn/road-laws"
              className="text-sm font-medium text-[#b7b2a6] transition hover:text-[#c9a64a]"
            >
              ← Back to Road Laws
            </Link>

            <div className="flex items-center gap-3">

              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c9a64a] text-lg text-[#c9a64a]">
                §
              </div>

              <span className="font-bold tracking-wide">
                LAWLINK
              </span>

            </div>

          </div>

        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-3xl px-6 py-10 md:py-14">

        {/* Page Heading */}
        <div className="mb-8">

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#6d592c] bg-[#211f19] text-2xl">
              🚗
            </div>

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c9a64a]">
                ROAD LAWS
              </p>

              <h1 className="mt-1 font-serif text-3xl md:text-4xl">
                Documents & Vehicle Rules
              </h1>

            </div>

          </div>

        </div>

        {/* Scenario Card */}
        <section className="relative overflow-hidden rounded-[2rem] border border-[#6d592c] bg-[#191814] p-6 md:p-8">

          {/* Gold Glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#c9a64a]/10 blur-3xl" />

          <div className="relative">

            {/* Scenario */}
            <div className="mb-6 rounded-[1.5rem] border border-[#37342c] bg-[#12120f] p-5">

              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#c9a64a]">
                Real-life scenario
              </p>

              <p className="leading-7 text-[#b7b2a6]">
                You are stopped during a traffic check. The officer asks you
                to provide the documents required for the vehicle and driver
                verification. You have the required documents available.
              </p>

              <p className="mt-5 font-semibold text-[#f0ede3]">
                What is the most appropriate response?
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
                        ? "border-[#c9a64a] bg-[#211f19] ring-1 ring-[#c9a64a]/40"
                        : "border-[#37342c] bg-[#12120f] hover:border-[#6d592c] hover:bg-[#211f19]"
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
                          : "border border-[#37342c] bg-[#211f19] text-[#b7b2a6]"
                      }`}
                    >
                      {option.id}
                    </span>

                    <span className="pt-1 text-sm leading-6 text-[#d2cec3]">
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
                className="mt-6 w-full rounded-full bg-[#c9a64a] px-5 py-3.5 font-semibold text-[#0b0b09] transition hover:bg-[#d8b65a] disabled:cursor-not-allowed disabled:bg-[#37342c] disabled:text-[#6f6a60]"
              >
                Check Answer
              </button>
            )}

            {/* Result */}
            {submitted && (
              <div
                className={`mt-6 rounded-[1.5rem] border p-5 ${
                  isCorrect
                    ? "border-[#6d592c] bg-[#211f19]"
                    : "border-[#6d592c] bg-[#191814]"
                }`}
              >

                <div className="flex items-start gap-3">

                  <div className="text-2xl">
                    {isCorrect ? "🎉" : "💡"}
                  </div>

                  <div>

                    <h2 className="font-serif text-2xl">
                      {isCorrect ? "Correct!" : "Not quite!"}
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-[#b7b2a6]">
                      {isCorrect
                        ? "Keeping the documents required by the applicable rules available and following the proper verification process is the appropriate approach. The exact documents and procedures can vary by jurisdiction and situation."
                        : "The safer approach is to keep the documents required by the applicable rules available and follow the proper verification process. Requirements can vary by jurisdiction and situation."}
                    </p>

                    {isCorrect && (
                      <p className="mt-4 font-bold text-[#d8b65a]">
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
                href="/learn/road-laws"
                className="mt-6 block w-full rounded-full bg-[#c9a64a] px-5 py-3.5 text-center font-semibold text-[#0b0b09] transition hover:bg-[#d8b65a]"
              >
                Back to Road Laws
              </Link>
            )}

          </div>
        </section>

        {/* Disclaimer */}
        <div className="mt-8 rounded-[1.5rem] border border-[#37342c] bg-[#12120f] p-5">

          <p className="text-center text-xs leading-6 text-[#777269]">
            <span className="mr-1 text-[#c9a64a]">⚠️</span>
            LawLink provides legal awareness and educational information only.
            It is not a substitute for professional legal advice. Rules may
            vary by jurisdiction and can change over time.
          </p>

        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-[#37342c] px-6 py-7 text-center">

        <p className="text-xs text-[#777269]">
          § LAWLINK — Learn your rights. Understand your options.
        </p>

      </footer>

    </div>
  );
}