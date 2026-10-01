"use client";

import { useState } from "react";
import Link from "next/link";

const options = [
  {
    id: "A",
    text: "Ignore the problem and keep using the product.",
  },
  {
    id: "B",
    text: "Keep the bill and other proof, contact the seller, and ask about the appropriate remedy.",
  },
  {
    id: "C",
    text: "Delete the receipt because it is no longer useful.",
  },
  {
    id: "D",
    text: "Post the seller's private information online.",
  },
];

export default function ConsumerRefundScenario() {
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
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 md:px-10">
          <Link
            href="/learn/consumer-rights"
            className="flex items-center gap-3"
          >
            <span className="text-2xl text-[#c9a64a]">§</span>

            <span className="text-sm font-semibold tracking-[0.25em] text-[#f0ede3]">
              LAWLINK
            </span>
          </Link>

          <Link
            href="/learn/consumer-rights"
            className="text-sm font-medium text-[#b7b2a6] transition hover:text-[#d8b65a]"
          >
            ← Back to Consumer Rights
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-10 md:px-10 md:py-14">
        {/* Page Intro */}
        <div className="mb-8">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#37342c] bg-[#191814] text-2xl">
              🛒
            </div>

            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-[#c9a64a]">
                CONSUMER RIGHTS
              </p>

              <h1 className="mt-1 font-serif text-3xl text-[#f0ede3] md:text-4xl">
                Refunds & Replacements
              </h1>
            </div>
          </div>
        </div>

        {/* Scenario */}
        <section className="rounded-3xl border border-[#37342c] bg-[#191814] p-6 shadow-2xl md:p-8">
          {/* Scenario Description */}
          <div className="mb-7 rounded-2xl border border-[#9d7c2f] bg-[#211f19] p-5 md:p-6">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#c9a64a]">
              Real-life scenario
            </p>

            <p className="leading-7 text-[#b7b2a6]">
              You purchase an electronic product online. When it arrives, you
              discover that it does not work properly. You still have your
              invoice and payment details.
            </p>

            <p className="mt-5 font-semibold leading-7 text-[#f0ede3]">
              What would be the most sensible first step?
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
                      ? "border-[#c9a64a] bg-[#211f19] ring-1 ring-[#c9a64a]"
                      : "border-[#37342c] bg-[#12120f] hover:border-[#9d7c2f] hover:bg-[#211f19]"
                  } ${
                    submitted
                      ? "cursor-default"
                      : "cursor-pointer"
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-bold ${
                      isSelected
                        ? "bg-[#c9a64a] text-[#0b0b09]"
                        : "border border-[#37342c] bg-[#191814] text-[#b7b2a6]"
                    }`}
                  >
                    {option.id}
                  </span>

                  <span
                    className={`pt-1 text-sm leading-6 ${
                      isSelected
                        ? "text-[#f0ede3]"
                        : "text-[#b7b2a6]"
                    }`}
                  >
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
              className="mt-7 w-full rounded-2xl bg-[#c9a64a] px-5 py-3.5 font-semibold text-[#0b0b09] transition hover:bg-[#d8b65a] disabled:cursor-not-allowed disabled:bg-[#37342c] disabled:text-[#817d73]"
            >
              Check Answer
            </button>
          )}

          {/* Result */}
          {submitted && (
            <div
              className={`mt-7 rounded-2xl border p-5 md:p-6 ${
                isCorrect
                  ? "border-[#9d7c2f] bg-[#211f19]"
                  : "border-[#37342c] bg-[#12120f]"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="text-2xl">
                  {isCorrect ? "🎉" : "💡"}
                </div>

                <div>
                  <h2
                    className={`font-bold ${
                      isCorrect
                        ? "text-[#d8b65a]"
                        : "text-[#f0ede3]"
                    }`}
                  >
                    {isCorrect ? "Correct!" : "Not quite!"}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-[#b7b2a6]">
                    {isCorrect
                      ? "Keeping your invoice and payment records gives you useful evidence when contacting the seller. The appropriate remedy can depend on the product, seller, and applicable consumer-protection rules."
                      : "A better first step is to keep your proof of purchase and contact the seller through an appropriate channel. The remedy can depend on the product, seller, and applicable consumer-protection rules."}
                  </p>

                  {isCorrect && (
                    <p className="mt-4 font-bold text-[#c9a64a]">
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
              href="/learn/consumer-rights"
              className="mt-6 block w-full rounded-2xl border border-[#c9a64a] bg-[#c9a64a] px-5 py-3.5 text-center font-semibold text-[#0b0b09] transition hover:bg-[#d8b65a]"
            >
              Back to Consumer Rights
            </Link>
          )}
        </section>

        {/* Disclaimer */}
        <p className="mt-8 text-center text-xs leading-5 text-[#817d73]">
          LawLink provides legal awareness and educational information only.
          It is not a substitute for professional legal advice.
        </p>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#37342c] bg-[#0b0b09]">
        <div className="mx-auto max-w-5xl px-6 py-7 text-center md:px-10">
          <p className="text-xs tracking-[0.15em] text-[#817d73]">
            § LAWLINK — Learn your rights. Understand your options.
          </p>
        </div>
      </footer>
    </div>
  );
}