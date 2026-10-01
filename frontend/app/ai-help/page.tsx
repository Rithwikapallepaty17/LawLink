"use client";

import { useState } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const suggestedQuestions = [
  "I got scammed through UPI. What should I do?",
  "What are my basic consumer rights?",
  "Someone keeps sending me unwanted messages. What can I do?",
  "What documents should I keep for driving?",
];

export default function AIHelpPage() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSuggestion = (question: string) => {
    setMessage(question);
  };

  const handleAsk = async () => {
    if (!message.trim() || isLoading) return;

    setIsLoading(true);
    setResponse(null);

      try {
        const res = await fetch("/api/chat", {        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });
      if (!res.ok) {
        const errorData = await res.json().catch(() => null);
        throw new Error(errorData?.error || `Server error: ${res.statusText}`);
      }

      const data = await res.json();
      setResponse(data.answer || data.reply || "No response received.");
    } catch (error: any) {
      console.error("Failed to fetch response:", error);
      setResponse(error.message || "Sorry, something went wrong while getting an answer.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0b09] text-[#f0ede3]">

      {/* Top Brand */}
      <header className="border-b border-[#37342c] bg-[#0b0b09]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">

          <Link
            href="/"
            className="text-xl font-bold tracking-[0.2em] text-[#c9a64a]"
          >
            § LAWLINK
          </Link>

          <Link
            href="/"
            className="rounded-full border border-[#37342c] px-5 py-2 text-sm text-[#b7b2a6] transition hover:border-[#c9a64a] hover:text-[#c9a64a]"
          >
            ← Back to Home
          </Link>

        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-6xl px-6 py-12 md:px-10 md:py-16">

        {/* Page Heading */}
        <section className="mb-10">

          <p className="text-sm uppercase tracking-[0.3em] text-[#c9a64a]">
            LAWLINK ASSISTANT
          </p>

          <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-tight md:text-6xl">
            Ask about your
            <br />
            <span className="text-[#c9a64a]">
              rights.
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#b7b2a6]">
            Describe your situation in everyday language and explore
            legal-awareness information and possible next steps.
          </p>

        </section>

        {/* AI Introduction */}
        <section className="relative overflow-hidden rounded-3xl border border-[#37342c] bg-[#191814] p-8 md:p-10">

          {/* Decorative element */}
          <div className="absolute right-[-50px] top-[-50px] h-40 w-40 rounded-full border border-[#9d7c2f]/30" />

          <div className="relative flex flex-col gap-6 md:flex-row md:items-start">

            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[#c9a64a] bg-[#211f19] text-3xl text-[#c9a64a]">
              ✦
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#c9a64a]">
                AI LEGAL ASSISTANT
              </p>

              <h2 className="mt-2 font-serif text-3xl md:text-4xl">
                Meet the LawLink Assistant
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-[#b7b2a6]">
                Get simple legal-awareness information and practical
                next steps for everyday situations.
              </p>
            </div>

          </div>

        </section>

        {/* Chat Area */}
        <section className="mt-6 overflow-hidden rounded-3xl border border-[#37342c] bg-[#12120f]">

          {/* Assistant Message */}
          <div className="border-b border-[#37342c] p-7 md:p-8">

            <div className="flex gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#9d7c2f] bg-[#211f19] text-lg text-[#c9a64a]">
                ✦
              </div>

              <div className="max-w-3xl">

                <p className="font-semibold text-[#f0ede3]">
                  LawLink Assistant
                </p>

                <p className="mt-2 leading-7 text-[#b7b2a6]">
                  Hi! I can help you understand everyday legal situations.
                  Tell me what happened, and I&apos;ll explain possible next
                  steps in simple language.
                </p>

              </div>

            </div>

          </div>

          {/* Suggested Questions */}
          <div className="p-7 md:p-8">

            <div className="mb-5 flex items-center justify-between">

              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#c9a64a]">
                Try asking
              </p>

              <span className="text-xs text-[#817d73]">
                SUGGESTED QUESTIONS
              </span>

            </div>

            <div className="grid gap-3 md:grid-cols-2">

              {suggestedQuestions.map((question) => (
                <button
                  key={question}
                  onClick={() => handleSuggestion(question)}
                  className="group rounded-2xl border border-[#37342c] bg-[#191814] p-5 text-left text-sm leading-6 text-[#b7b2a6] transition duration-200 hover:-translate-y-1 hover:border-[#c9a64a] hover:bg-[#211f19] hover:text-[#f0ede3]"
                >
                  <span className="mr-2 text-[#c9a64a] transition group-hover:text-[#d8b65a]">
                    →
                  </span>

                  {question}
                </button>
              ))}

            </div>

          </div>

          {/* Input */}
          <div className="border-t border-[#37342c] p-7 md:p-8">

            <p className="mb-3 text-sm text-[#817d73]">
              Describe your situation
            </p>

            <div className="flex flex-col gap-3 md:flex-row">

              <input
                type="text"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleAsk();
                }}
                disabled={isLoading}
                placeholder="Type your legal question..."
                className="flex-1 rounded-2xl border border-[#37342c] bg-[#191814] px-5 py-4 text-sm text-[#f0ede3] placeholder-[#817d73] outline-none transition focus:border-[#c9a64a] focus:ring-1 focus:ring-[#c9a64a] disabled:opacity-50"
              />

              <button
                type="button"
                onClick={handleAsk}
                disabled={!message.trim() || isLoading}
                className="rounded-2xl bg-[#c9a64a] px-7 py-4 font-semibold text-[#0b0b09] transition hover:bg-[#d8b65a] disabled:cursor-not-allowed disabled:bg-[#37342c] disabled:text-[#817d73]"
              >
                {isLoading ? "Thinking..." : "Ask Assistant →"}
              </button>

            </div>

            {/* Response Display */}
            {(isLoading || response) && (
              <div className="mt-6 rounded-2xl border border-[#37342c] bg-[#191814] p-6 text-sm leading-7">
                <p className="font-semibold text-[#c9a64a] mb-3">LawLink Assistant Response:</p>
                {isLoading ? (
                  <p className="text-[#817d73] animate-pulse">Analyzing your query...</p>
                ) : (
                  <div className="space-y-4 text-sm leading-relaxed text-[#b7b2a6] [&_h1]:font-serif [&_h1]:text-xl [&_h1]:font-semibold [&_h1]:text-[#c9a64a] [&_h2]:font-serif [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-[#c9a64a] [&_h3]:font-serif [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-[#c9a64a] [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-1 [&_strong]:text-[#f0ede3] [&_strong]:font-semibold [&_a]:text-[#c9a64a] [&_a]:underline [&_hr]:border-[#37342c]">
                    <ReactMarkdown>{response}</ReactMarkdown>
                  </div>
                )}
              </div>
            )}

            <p className="mt-4 text-xs leading-5 text-[#817d73]">
              LawLink provides legal-awareness information, not professional
              legal advice. For urgent or serious matters, consider contacting
              an appropriate qualified professional or official authority.
            </p>

          </div>

        </section>

        {/* How It Works */}
        <section className="mt-12">

          <div className="mb-7">

            <p className="text-sm uppercase tracking-[0.3em] text-[#c9a64a]">
              HOW IT WORKS
            </p>

            <h2 className="mt-3 font-serif text-3xl md:text-4xl">
              From question to next step.
            </h2>

          </div>

          <div className="grid gap-4 md:grid-cols-3">

            {/* Step 1 */}
            <div className="rounded-2xl border border-[#37342c] bg-[#191814] p-6 transition hover:border-[#c9a64a]">

              <div className="flex items-center justify-between">
                <span className="text-2xl text-[#c9a64a]">
                  💬
                </span>

                <span className="text-xs text-[#817d73]">
                  01
                </span>
              </div>

              <h3 className="mt-7 font-serif text-2xl">
                Ask naturally
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#b7b2a6]">
                Describe your situation using everyday language.
              </p>

            </div>

            {/* Step 2 */}
            <div className="rounded-2xl border border-[#37342c] bg-[#191814] p-6 transition hover:border-[#c9a64a]">

              <div className="flex items-center justify-between">
                <span className="text-2xl text-[#c9a64a]">
                  ◈
                </span>

                <span className="text-xs text-[#817d73]">
                  02
                </span>
              </div>

              <h3 className="mt-7 font-serif text-2xl">
                Learn the basics
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#b7b2a6]">
                Understand relevant legal concepts in simpler language.
              </p>

            </div>

            {/* Step 3 */}
            <div className="rounded-2xl border border-[#37342c] bg-[#191814] p-6 transition hover:border-[#c9a64a]">

              <div className="flex items-center justify-between">
                <span className="text-2xl text-[#c9a64a]">
                  → 
                </span>

                <span className="text-xs text-[#817d73]">
                  03
                </span>
              </div>

              <h3 className="mt-7 font-serif text-2xl">
                Find next steps
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#b7b2a6]">
                Explore possible actions and official resources.
              </p>

            </div>

          </div>

        </section>

        {/* Disclaimer */}
        <section className="mt-12 border-t border-[#37342c] pt-8">

          <p className="mx-auto max-w-3xl text-center text-xs leading-6 text-[#817d73]">
            LawLink is an educational legal-awareness platform. AI-generated
            information may be incomplete or inaccurate and should not be
            treated as professional legal advice.
          </p>

        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-[#37342c]">

        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 px-6 py-8 md:flex-row md:px-10">

          <span className="font-semibold tracking-[0.15em] text-[#c9a64a]">
            § LAWLINK
          </span>

          <span className="text-sm text-[#817d73]">
            Legal technology for everyone.
          </span>

        </div>

      </footer>

    </div>
  );
}