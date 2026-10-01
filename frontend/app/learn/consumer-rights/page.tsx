import Link from "next/link";

const lessons = [
  {
    number: 1,
    title: "Know Your Consumer Rights",
    description:
      "Learn the basic rights you have when buying products and services.",
    status: "completed",
  },
  {
    number: 2,
    title: "Bills, Receipts & Proof",
    description:
      "Understand why receipts, invoices and payment records matter.",
    status: "completed",
  },
  {
    number: 3,
    title: "Refunds & Replacements",
    description:
      "Learn what to do when a product is defective or a service goes wrong.",
    status: "current",
    link: "/scenario/consumer-refund",
  },
  {
    number: 4,
    title: "Filing a Consumer Complaint",
    description:
      "Learn the basic steps involved in raising a consumer complaint.",
    status: "locked",
  },
  {
    number: 5,
    title: "Online Shopping Safety",
    description:
      "Recognize misleading listings, fake sellers and unsafe purchases.",
    status: "locked",
  },
];

export default function ConsumerRightsPage() {
  return (
    <div className="min-h-screen bg-[#0b0b09] text-[#f0ede3]">

      {/* Header */}
      <header className="border-b border-[#37342c] bg-[#0b0b09]">
        <div className="mx-auto max-w-6xl px-6 py-6 md:px-10">
          <div className="flex items-center justify-between">

            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c9a64a] text-xl text-[#c9a64a]">
                §
              </div>

              <span className="text-xl font-bold tracking-wide">
                LAWLINK
              </span>
            </Link>

            <Link
              href="/basic-rights"
              className="rounded-full border border-[#37342c] px-5 py-2.5 text-sm font-medium text-[#b7b2a6] transition hover:border-[#c9a64a] hover:text-[#c9a64a]"
            >
              ← Basic Rights
            </Link>

          </div>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-5xl px-6 py-10 md:px-10 md:py-14">

        {/* Hero */}
        <section className="relative overflow-hidden rounded-[2rem] border border-[#6d592c] bg-[#191814] p-8 md:p-10">

          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#c9a64a]/10 blur-3xl" />

          <div className="relative">

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#6d592c] bg-[#211f19] text-3xl">
              🛒
            </div>

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#c9a64a]">
              Consumer Rights
            </p>

            <h1 className="max-w-3xl font-serif text-4xl leading-tight md:text-5xl">
              Shop smarter.
              <br />
              <span className="text-[#c9a64a]">
                Know your rights.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#b7b2a6] md:text-lg">
              Learn how to protect yourself when buying products and services,
              and what steps you can take when something goes wrong.
            </p>

            {/* Progress */}
            <div className="mt-8 max-w-xl">

              <div className="mb-3 flex justify-between text-sm">
                <span className="text-[#a9a498]">
                  Learning progress
                </span>

                <span className="font-semibold text-[#d8b65a]">
                  45%
                </span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-[#37342c]">
                <div
                  className="h-full rounded-full bg-[#c9a64a]"
                  style={{ width: "45%" }}
                />
              </div>

            </div>

          </div>
        </section>

        {/* Learning Path */}
        <section className="mt-14">

          <div className="mb-7">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c9a64a]">
              Learning Path
            </p>

            <h2 className="mt-2 font-serif text-3xl md:text-4xl">
              Your Consumer Rights journey
            </h2>

            <p className="mt-3 text-[#8f8a80]">
              Complete each lesson to build your knowledge and earn XP.
            </p>

          </div>

          {/* Lessons */}
          <div className="space-y-4">

            {lessons.map((lesson) => {

              const isCompleted = lesson.status === "completed";
              const isCurrent = lesson.status === "current";
              const isLocked = lesson.status === "locked";

              return (
                <div
                  key={lesson.number}
                  className={`rounded-[1.5rem] border p-5 md:p-6 transition ${
                    isCurrent
                      ? "border-[#c9a64a] bg-[#211f19] shadow-[0_0_0_1px_rgba(201,166,74,0.15)]"
                      : "border-[#37342c] bg-[#191814] hover:border-[#514b3d]"
                  }`}
                >

                  <div className="flex items-start gap-4 md:gap-5">

                    {/* Number / Status */}
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg font-bold ${
                        isCompleted
                          ? "border border-[#6d592c] bg-[#211f19] text-[#c9a64a]"
                          : isCurrent
                            ? "bg-[#c9a64a] text-[#0b0b09]"
                            : "border border-[#37342c] bg-[#211f19] text-[#6f6a60]"
                      }`}
                    >
                      {isCompleted
                        ? "✓"
                        : isLocked
                          ? "🔒"
                          : lesson.number}
                    </div>

                    <div className="min-w-0 flex-1">

                      {/* Title + status */}
                      <div className="flex flex-wrap items-center gap-2">

                        <h3
                          className={`font-serif text-xl ${
                            isLocked
                              ? "text-[#777269]"
                              : "text-[#f0ede3]"
                          }`}
                        >
                          {lesson.title}
                        </h3>

                        {isCompleted && (
                          <span className="rounded-full border border-[#6d592c] bg-[#211f19] px-3 py-1 text-xs font-semibold text-[#c9a64a]">
                            Completed
                          </span>
                        )}

                        {isCurrent && (
                          <span className="rounded-full bg-[#c9a64a] px-3 py-1 text-xs font-semibold text-[#0b0b09]">
                            Continue
                          </span>
                        )}

                        {isLocked && (
                          <span className="rounded-full border border-[#37342c] bg-[#211f19] px-3 py-1 text-xs font-semibold text-[#777269]">
                            Locked
                          </span>
                        )}

                      </div>

                      {/* Description */}
                      <p
                        className={`mt-2 text-sm leading-7 ${
                          isLocked
                            ? "text-[#6f6a60]"
                            : "text-[#a9a498]"
                        }`}
                      >
                        {lesson.description}
                      </p>

                      {/* Current Lesson */}
                      {isCurrent && (
                        <Link
                          href="/scenario/consumer-refund"
                          className="mt-5 inline-flex rounded-full bg-[#c9a64a] px-6 py-2.5 text-sm font-semibold text-[#0b0b09] transition hover:bg-[#d8b65a]"
                        >
                          Start Scenario →
                        </Link>
                      )}

                      {/* Completed */}
                      {isCompleted && (
                        <p className="mt-3 text-sm font-medium text-[#c9a64a]">
                          ✓ Lesson completed
                        </p>
                      )}

                      {/* Locked */}
                      {isLocked && (
                        <p className="mt-3 text-sm text-[#6f6a60]">
                          Complete the previous lessons to unlock this.
                        </p>
                      )}

                    </div>
                  </div>
                </div>
              );
            })}

          </div>
        </section>

        {/* Reward */}
        <section className="mt-10 rounded-[1.5rem] border border-[#6d592c] bg-[#211f19] p-6 md:p-7">

          <div className="flex items-start gap-5">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#6d592c] bg-[#191814] text-2xl">
              🏆
            </div>

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c9a64a]">
                REWARD
              </p>

              <h3 className="mt-2 font-serif text-2xl">
                Consumer Champion
              </h3>

              <p className="mt-2 text-sm leading-7 text-[#a9a498]">
                Complete the Consumer Rights path to earn the Consumer
                Champion badge.
              </p>

              <p className="mt-4 text-sm font-semibold text-[#d8b65a]">
                Reward: +250 XP
              </p>

            </div>

          </div>

        </section>

        {/* Disclaimer */}
        <div className="mt-8 rounded-[1.5rem] border border-[#37342c] bg-[#12120f] p-5">

          <p className="text-center text-xs leading-6 text-[#777269]">
            <span className="mr-1 text-[#c9a64a]">⚠️</span>
            LawLink provides legal awareness and educational information only.
            It is not a substitute for professional legal advice.
          </p>

        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-[#37342c] px-6 py-8 text-center">

        <p className="text-xs text-[#777269]">
          § LAWLINK — Learn your rights. Understand your options.
        </p>

      </footer>

    </div>
  );
}