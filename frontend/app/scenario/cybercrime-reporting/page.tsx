"use client";

import { useState } from "react";
import Link from "next/link";

const options = [
  {
    id: "a",
    text: "Ignore the transaction and wait to see what happens.",
  },
  {
    id: "b",
    text: "Contact the relevant bank/payment provider and preserve the transaction details.",
  },
  {
    id: "c",
    text: "Delete the transaction message so nobody can access it.",
  },
  {
    id: "d",
    text: "Share your account details with someone who promises to recover the money.",
  },
];

export default function CybercrimeScenario() {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const correctAnswer = "b";

  const isCorrect = selectedAnswer === correctAnswer;

  function handleSubmit() {
    if (!selectedAnswer) return;

    setSubmitted(true);

    if (selectedAnswer === correctAnswer) {
      const scenarioCompleted = localStorage.getItem(
        "cybercrime-reporting-completed"
      );

      if (!scenarioCompleted) {
        const currentXP = Number(
          localStorage.getItem("lawlink-xp") || "820"
        );

        const newXP = currentXP + 50;

        localStorage.setItem("lawlink-xp", String(newXP));

        localStorage.setItem(
          "cybercrime-reporting-completed",
          "true"
        );
      }
    }
  }

  return (
    <div className="min-h-screen bg-[#0b0b09] text-[#f0ede3]">

      {/* Header */}
      <header className="border-b border-[#37342c] bg-[#0b0b09]">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">

          <Link
            href="/learn/cyber-safety"
            className="text-sm font-medium text-[#b7b2a6] transition hover:text-[#c9a64a]"
          >
            ← Back to Cyber Safety
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
      </header>

      {/* Main */}
      <main className="mx-auto max-w-3xl px-6 py-10 md:py-14">

        {/* Progress */}
        <div>

          <div className="flex items-center justify-between text-sm">

            <span className="font-semibold tracking-wide text-[#c9a64a]">
              🔐 CYBER SAFETY
            </span>

            <span className="text-[#8f8a80]">
              Scenario 4 of 5
            </span>

          </div>

          <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#37342c]">
            <div className="h-full w-[80%] rounded-full bg-[#c9a64a]" />
          </div>

        </div>

        {/* Scenario Card */}
        <section className="relative mt-8 overflow-hidden rounded-[2rem] border border-[#6d592c] bg-[#191814] p-7 md:p-10">

          {/* Gold glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#c9a64a]/10 blur-3xl" />

          <div className="relative">

            {/* Scenario icon */}
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#6d592c] bg-[#211f19] text-3xl">
              🚨
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#c9a64a]">
              Something happened
            </p>

            <h1 className="mt-3 font-serif text-3xl leading-tight md:text-4xl">
              You notice an unauthorized transaction
            </h1>

            <p className="mt-5 text-base leading-8 text-[#b7b2a6]">
              You check your account and notice a transaction that you
              don&apos;t recognize. You still have access to your account,
              but you are concerned that someone may have used your
              payment information.
            </p>

            {/* Question */}
            <div className="mt-8 rounded-[1.5rem] border border-[#37342c] bg-[#12120f] p-6">

              <p className="font-semibold text-[#f0ede3]">
                What would be an appropriate immediate step?
              </p>

            </div>

            {/* Options */}
            <div className="mt-6 space-y-3">

              {options.map((option) => {

                const isSelected = selectedAnswer === option.id;

                let optionStyle =
                  "border-[#37342c] bg-[#12120f] hover:border-[#6d592c] hover:bg-[#211f19]";

                if (isSelected && !submitted) {
                  optionStyle =
                    "border-[#c9a64a] bg-[#211f19] ring-1 ring-[#c9a64a]/40";
                }

                if (submitted && option.id === correctAnswer) {
                  optionStyle =
                    "border-[#c9a64a] bg-[#211f19]";
                }

                if (
                  submitted &&
                  isSelected &&
                  option.id !== correctAnswer
                ) {
                  optionStyle =
                    "border-[#76504a] bg-[#241816]";
                }

                return (
                  <button
                    key={option.id}
                    onClick={() => {
                      if (!submitted) {
                        setSelectedAnswer(option.id);
                      }
                    }}
                    className={`flex w-full items-start gap-4 rounded-2xl border p-5 text-left transition ${optionStyle}`}
                  >

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                        isSelected
                          ? "bg-[#c9a64a] text-[#0b0b09]"
                          : "border border-[#37342c] bg-[#211f19] text-[#b7b2a6]"
                      }`}
                    >
                      {option.id.toUpperCase()}
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
                className={`mt-7 w-full rounded-full py-3.5 font-semibold transition ${
                  selectedAnswer
                    ? "bg-[#c9a64a] text-[#0b0b09] hover:bg-[#d8b65a]"
                    : "cursor-not-allowed bg-[#37342c] text-[#6f6a60]"
                }`}
              >
                Submit Answer
              </button>

            )}

            {/* Result */}
            {submitted && (

              <div
                className={`mt-7 rounded-[1.5rem] border p-6 ${
                  isCorrect
                    ? "border-[#6d592c] bg-[#211f19]"
                    : "border-[#6d592c] bg-[#191814]"
                }`}
              >

                <div className="flex items-start gap-4">

                  <div className="text-3xl">
                    {isCorrect ? "✅" : "💡"}
                  </div>

                  <div>

                    <h2 className="font-serif text-2xl">
                      {isCorrect
                        ? "Good choice!"
                        : "Let&apos;s understand this better."}
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-[#b7b2a6]">
                      A useful immediate step is to contact the relevant
                      bank or payment provider, preserve transaction
                      information and use the appropriate official
                      reporting or grievance channel where applicable.
                    </p>

                  </div>

                </div>

                {/* XP */}
                {isCorrect && (

                  <div className="mt-5 flex items-center justify-between rounded-xl border border-[#37342c] bg-[#12120f] p-4">

                    <span className="font-semibold text-[#f0ede3]">
                      Scenario completed
                    </span>

                    <span className="text-lg font-bold text-[#d8b65a]">
                      +50 XP ⭐
                    </span>

                  </div>

                )}

                {/* Next */}
                <Link
                  href="/learn/cyber-safety"
                  className="mt-5 block w-full rounded-full bg-[#c9a64a] py-3 text-center font-semibold text-[#0b0b09] transition hover:bg-[#d8b65a]"
                >
                  Continue learning →
                </Link>

              </div>

            )}

          </div>
        </section>

        {/* Disclaimer */}
        <div className="mt-6 rounded-[1.5rem] border border-[#37342c] bg-[#12120f] p-5">

          <p className="text-sm leading-6 text-[#8f8a80]">
            <span className="mr-1 text-[#c9a64a]">⚠️</span>
            <strong className="text-[#b7b2a6]">
              Legal awareness only:
            </strong>{" "}
            This scenario is educational. It does not constitute professional
            legal advice.
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