import Link from "next/link";

const lessons = [
  {
    number: 1,
    icon: "🎣",
    title: "Recognizing Phishing",
    description: "Learn how to identify suspicious messages and links.",
    status: "completed",
  },
  {
    number: 2,
    icon: "💳",
    title: "Online & UPI Fraud",
    description: "Understand what to do when a digital payment goes wrong.",
    status: "completed",
  },
  {
    number: 3,
    icon: "🔐",
    title: "Protecting Your Accounts",
    description: "Learn basic steps to keep your online accounts secure.",
    status: "completed",
  },
  {
    number: 4,
    icon: "🚨",
    title: "Reporting Cybercrime",
    description:
      "Understand what information to preserve and where to seek help.",
    status: "current",
  },
  {
    number: 5,
    icon: "🛡️",
    title: "Online Harassment & Safety",
    description:
      "Learn about practical safety steps and support resources.",
    status: "locked",
  },
];

export default function CyberSafetyPage() {
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
              href="/learn"
              className="rounded-full border border-[#37342c] px-5 py-2.5 text-sm font-medium text-[#b7b2a6] transition hover:border-[#c9a64a] hover:text-[#c9a64a]"
            >
              ← Learning Hub
            </Link>

          </div>

        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-5xl px-6 py-10 md:px-10 md:py-14">

        {/* Hero */}
        <section className="relative overflow-hidden rounded-[2rem] border border-[#6d592c] bg-[#191814] p-8 md:p-10">

          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#c9a64a]/10 blur-3xl" />

          <div className="relative">

            <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">

              <div className="flex items-center gap-5">

                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-[#6d592c] bg-[#211f19] text-4xl">
                  🔐
                </div>

                <div>

                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c9a64a]">
                    LEGAL AWARENESS
                  </p>

                  <h1 className="mt-2 font-serif text-4xl md:text-5xl">
                    Cyber Safety
                  </h1>

                  <p className="mt-3 text-[#b7b2a6]">
                    Learn how to stay safer in the digital world.
                  </p>

                </div>

              </div>

              {/* Progress badge */}
              <div className="rounded-2xl border border-[#6d592c] bg-[#211f19] px-6 py-5">

                <p className="text-xs font-medium tracking-wider text-[#a9a498]">
                  YOUR PROGRESS
                </p>

                <p className="mt-1 font-serif text-3xl text-[#c9a64a]">
                  80%
                </p>

              </div>

            </div>

          </div>
        </section>

        {/* Progress */}
        <section className="mt-8 rounded-[1.5rem] border border-[#37342c] bg-[#191814] p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="font-semibold text-[#f0ede3]">
                Your learning progress
              </p>

              <p className="mt-1 text-sm text-[#8f8a80]">
                4 of 5 lessons completed
              </p>

            </div>

            <span className="font-semibold text-[#c9a64a]">
              80%
            </span>

          </div>

          <div className="mt-4 h-3 overflow-hidden rounded-full bg-[#37342c]">

            <div className="h-full w-[80%] rounded-full bg-[#c9a64a]" />

          </div>

        </section>

        {/* Learning Path */}
        <section className="mt-14">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c9a64a]">
            YOUR LEARNING PATH
          </p>

          <h2 className="mt-2 font-serif text-3xl md:text-4xl">
            Become a Cyber Guardian
          </h2>

          <p className="mt-3 text-[#8f8a80]">
            Complete each lesson to build your digital-safety knowledge.
          </p>

          <div className="relative mt-8">

            {/* Vertical gold line */}
            <div className="absolute left-7 top-7 h-[calc(100%-60px)] w-px bg-[#37342c]" />

            <div className="space-y-5">

              {lessons.map((lesson) => (

                <div
                  key={lesson.number}
                  className={`relative flex gap-5 rounded-[1.5rem] border p-5 md:p-6 transition ${
                    lesson.status === "current"
                      ? "border-[#c9a64a] bg-[#211f19] shadow-[0_0_0_1px_rgba(201,166,74,0.12)]"
                      : lesson.status === "completed"
                        ? "border-[#37342c] bg-[#191814]"
                        : "border-[#37342c] bg-[#12120f] opacity-60"
                  }`}
                >

                  {/* Number */}
                  <div
                    className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-xl ${
                      lesson.status === "completed"
                        ? "border border-[#6d592c] bg-[#211f19] text-[#c9a64a]"
                        : lesson.status === "current"
                          ? "bg-[#c9a64a] text-[#0b0b09]"
                          : "border border-[#37342c] bg-[#211f19] text-[#6f6a60]"
                    }`}
                  >
                    {lesson.status === "completed"
                      ? "✓"
                      : lesson.status === "locked"
                        ? "🔒"
                        : lesson.number}
                  </div>

                  {/* Content */}
                  <div className="flex-1">

                    <div className="flex flex-col justify-between gap-3 sm:flex-row">

                      <div>

                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#777269]">
                          Lesson {lesson.number}
                        </p>

                        <h3 className="mt-2 font-serif text-xl">
                          {lesson.icon} {lesson.title}
                        </h3>

                        <p className="mt-2 text-sm leading-7 text-[#a9a498]">
                          {lesson.description}
                        </p>

                      </div>

                      {lesson.status === "completed" && (
                        <span className="h-fit rounded-full border border-[#6d592c] bg-[#211f19] px-3 py-1 text-xs font-semibold text-[#c9a64a]">
                          Completed
                        </span>
                      )}

                      {lesson.status === "current" && (
                        <span className="h-fit rounded-full bg-[#c9a64a] px-3 py-1 text-xs font-semibold text-[#0b0b09]">
                          Current
                        </span>
                      )}

                    </div>

                    {lesson.status === "current" && (

                      <Link
                        href="/scenario/cybercrime-reporting"
                        className="mt-5 inline-flex rounded-full bg-[#c9a64a] px-6 py-2.5 text-sm font-semibold text-[#0b0b09] transition hover:bg-[#d8b65a]"
                      >
                        Start scenario →
                      </Link>

                    )}

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* Reward */}
        <section className="relative mt-12 overflow-hidden rounded-[2rem] border border-[#6d592c] bg-[#211f19] p-7 md:p-8">

          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#c9a64a]/10 blur-3xl" />

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c9a64a]">
                YOUR REWARD
              </p>

              <h2 className="mt-2 font-serif text-3xl">
                🛡️ Cyber Guardian
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-[#a9a498]">
                Complete all five lessons to unlock this badge and
                earn additional XP.
              </p>

            </div>

            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-[#6d592c] bg-[#191814] text-4xl">
              🛡️
            </div>

          </div>

        </section>

        {/* Disclaimer */}
        <div className="mt-8 rounded-[1.5rem] border border-[#37342c] bg-[#12120f] p-5">

          <p className="text-center text-xs leading-6 text-[#777269]">

            <span className="mr-1 text-[#c9a64a]">
              ⚠️
            </span>

            <strong className="text-[#b7b2a6]">
              Legal awareness only:
            </strong>{" "}

            This content is educational and does not constitute professional
            legal advice.

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