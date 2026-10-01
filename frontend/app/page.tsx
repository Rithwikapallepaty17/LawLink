"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0b09] text-[#f0ede3]">

      {/* Hero */}
      <section className="px-6 py-16 md:px-16 lg:px-24">

        {/* Brand */}
        <div className="mb-20">
          <div className="text-2xl font-bold tracking-[0.2em] text-[#c9a64a]">
            § LAWLINK
          </div>
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}
          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#c9a64a]">
              Legal Technology
            </p>

            <h1 className="max-w-3xl font-serif text-5xl leading-tight md:text-7xl">
              Know your rights.
              <br />
              <span className="text-[#c9a64a]">
                Know your next step.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#b7b2a6]">
              LawLink makes legal information easier to understand,
              helping you discover your basic rights and find the
              right next step.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/basic-rights"
                className="rounded-full bg-[#c9a64a] px-7 py-3 font-semibold text-[#0b0b09] transition hover:bg-[#d8b65a]"
              >
                Explore Your Rights
              </Link>

              <Link
                href="/ai-help"
                className="rounded-full border border-[#c9a64a] px-7 py-3 font-semibold text-[#c9a64a] transition hover:bg-[#c9a64a] hover:text-[#0b0b09]"
              >
                Ask AI
              </Link>
            </div>
          </div>

          {/* Case Card */}
          <div className="relative">
            <div className="rounded-3xl border border-[#37342c] bg-[#191814] p-8 shadow-2xl">

              <div className="mb-10 flex items-center justify-between">
                <span className="text-sm uppercase tracking-[0.25em] text-[#b7b2a6]">
                  LAWLINK
                </span>

                <span className="rounded-full border border-[#c9a64a] px-3 py-1 text-xs text-[#c9a64a]">
                  OPEN
                </span>
              </div>

              <div className="border-t border-[#37342c] pt-8">
                <p className="text-sm uppercase tracking-[0.2em] text-[#b7b2a6]">
                  Legal Access
                </p>

                <h2 className="mt-4 font-serif text-4xl">
                  Justice should be
                  <br />
                  easier to understand.
                </h2>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-4 border-t border-[#37342c] pt-6 text-sm">
                <div>
                  <p className="text-[#b7b2a6]">01</p>
                  <p className="mt-1">Rights</p>
                </div>

                <div>
                  <p className="text-[#b7b2a6]">02</p>
                  <p className="mt-1">AI Help</p>
                </div>

                <div>
                  <p className="text-[#b7b2a6]">03</p>
                  <p className="mt-1">Learning</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Main Options */}
      <section className="border-t border-[#37342c] px-6 py-20 md:px-16 lg:px-24">

        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-[#c9a64a]">
            Choose your path
          </p>

          <h2 className="mt-4 font-serif text-4xl md:text-5xl">
            Start where you need help.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">

          {/* Basic Rights */}
          <Link
            href="/basic-rights"
            className="group rounded-3xl border border-[#37342c] bg-[#191814] p-8 transition duration-300 hover:-translate-y-2 hover:border-[#c9a64a]"
          >
            <div className="flex items-center justify-between">
              <span className="text-4xl text-[#c9a64a]">§</span>
              <span className="text-sm text-[#b7b2a6]">01</span>
            </div>

            <h3 className="mt-12 font-serif text-3xl">
              Basic Rights
            </h3>

            <p className="mt-4 leading-7 text-[#b7b2a6]">
              Understand everyday legal rights in simple,
              accessible language.
            </p>

            <div className="mt-8 text-sm font-semibold text-[#c9a64a]">
              Explore Rights →
            </div>
          </Link>

          {/* AI Legal Assistant */}
          <Link
            href="/ai-help"
            className="group rounded-3xl border border-[#c9a64a] bg-[#211f19] p-8 transition duration-300 hover:-translate-y-2"
          >
            <div className="flex items-center justify-between">
              <span className="text-4xl text-[#c9a64a]">✦</span>
              <span className="rounded-full bg-[#c9a64a] px-3 py-1 text-xs font-bold text-[#0b0b09]">
                AI
              </span>
            </div>

            <h3 className="mt-12 font-serif text-3xl">
              AI Legal Assistant
            </h3>

            <p className="mt-4 leading-7 text-[#b7b2a6]">
              Describe your legal question and get clear,
              easy-to-understand guidance.
            </p>

            <div className="mt-8 text-sm font-semibold text-[#c9a64a]">
              Ask a Question →
            </div>
          </Link>

          {/* Legal Learning */}
          <Link
            href="/learn"
            className="group rounded-3xl border border-[#37342c] bg-[#191814] p-8 transition duration-300 hover:-translate-y-2 hover:border-[#c9a64a]"
          >
            <div className="flex items-center justify-between">
              <span className="text-4xl text-[#c9a64a]">◈</span>
              <span className="text-sm text-[#b7b2a6]">03</span>
            </div>

            <h3 className="mt-12 font-serif text-3xl">
              Legal Learning
            </h3>

            <p className="mt-4 leading-7 text-[#b7b2a6]">
              Learn important legal concepts through simple
              explanations and useful examples.
            </p>

            <div className="mt-8 text-sm font-semibold text-[#c9a64a]">
              Start Learning →
            </div>
          </Link>

        </div>
      </section>

      {/* AI Section */}
      <section className="px-6 pb-20 md:px-16 lg:px-24">

        <div className="rounded-3xl border border-[#37342c] bg-[#12120f] p-8 md:p-12">

          <div className="grid gap-10 md:grid-cols-2 md:items-center">

            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#c9a64a]">
                Your legal companion
              </p>

              <h2 className="mt-5 font-serif text-4xl md:text-5xl">
                Have a question?
                <br />
                <span className="text-[#c9a64a]">
                  Start here.
                </span>
              </h2>
            </div>

            <div>
              <p className="leading-8 text-[#b7b2a6]">
                LawLink's AI assistant helps turn complicated
                legal questions into understandable information,
                so you can better understand your situation and
                explore possible next steps.
              </p>

              <Link
                href="/ai-help"
                className="mt-7 inline-block rounded-full bg-[#c9a64a] px-7 py-3 font-semibold text-[#0b0b09]"
              >
                AI Legal Assistant
              </Link>
            </div>

          </div>
        </div>

      </section>

      {/* Disclaimer */}
      <section className="border-t border-[#37342c] px-6 py-10 md:px-16 lg:px-24">

        <p className="max-w-4xl text-sm leading-7 text-[#817d73]">
          LawLink provides general legal information for educational
          purposes. It is not a substitute for advice from a qualified
          legal professional.
        </p>

      </section>

      {/* Footer */}
      <footer className="border-t border-[#37342c] px-6 py-8 md:px-16 lg:px-24">

        <div className="flex flex-col justify-between gap-4 md:flex-row">

          <span className="font-semibold tracking-[0.15em] text-[#c9a64a]">
            § LAWLINK
          </span>

          <span className="text-sm text-[#817d73]">
            Legal technology for everyone.
          </span>

        </div>

      </footer>

    </main>
  );
}