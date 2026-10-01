import Link from "next/link";

const topics = [
  {
    id: "cyber-safety",
    icon: "🔐",
    title: "Cyber Safety",
    description:
      "Learn how to recognize online scams, protect your accounts and respond to cyber incidents.",
    lessons: 5,
    progress: 80,
    level: "Beginner",
  },
  {
    id: "consumer-rights",
    icon: "🛒",
    title: "Consumer Rights",
    description:
      "Understand your basic rights when buying products and services online or offline.",
    lessons: 5,
    progress: 45,
    level: "Beginner",
  },
  {
    id: "road-laws",
    icon: "🚗",
    title: "Road Laws",
    description:
      "Learn essential road-safety awareness and what to do in common traffic situations.",
    lessons: 5,
    progress: 20,
    level: "Beginner",
  },
  {
    id: "womens-safety",
    icon: "🛡️",
    title: "Women's Safety",
    description:
      "Explore safety awareness, support resources and practical steps for difficult situations.",
    lessons: 5,
    progress: 10,
    level: "Beginner",
  },
  {
    id: "student-workplace",
    icon: "🎓",
    title: "Student & Workplace Rights",
    description:
      "Learn basic rights and responsibilities relevant to students, internships and workplaces.",
    lessons: 5,
    progress: 0,
    level: "Beginner",
  },
];

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-[#0b0b09] text-[#f0ede3]">

      {/* Header */}
      <header className="border-b border-[#37342c] bg-[#0b0b09]">
        <div className="mx-auto max-w-7xl px-6 py-6 md:px-10">

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
              href="/"
              className="rounded-full border border-[#37342c] px-5 py-2 text-sm font-medium text-[#b7b2a6] transition hover:border-[#c9a64a] hover:text-[#c9a64a]"
            >
              ← Back Home
            </Link>
          </div>

          <div className="mt-12 max-w-3xl">

            <p className="text-sm font-semibold tracking-[0.2em] text-[#c9a64a]">
              LEARNING HUB
            </p>

            <h1 className="mt-4 font-serif text-5xl leading-tight tracking-tight md:text-6xl">
              What do you want
              <br />
              <span className="text-[#c9a64a]">to learn?</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#b7b2a6] md:text-lg">
              Explore everyday legal-awareness topics through simple
              explanations, real-world scenarios and interactive quizzes.
            </p>

          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-14">

        {/* Recommended */}
        <section className="overflow-hidden rounded-[2rem] border border-[#37342c] bg-[#191814]">

          <div className="p-7 md:p-10">

            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">

              <div className="max-w-2xl">

                <div className="inline-flex rounded-full border border-[#6d592c] bg-[#211f19] px-4 py-2 text-xs font-semibold tracking-wide text-[#d8b65a]">
                  ★ RECOMMENDED FOR YOU
                </div>

                <h2 className="mt-5 font-serif text-3xl leading-tight md:text-4xl">
                  Continue with Cyber Safety
                </h2>

                <p className="mt-4 leading-7 text-[#b7b2a6]">
                  You are 80% through this topic. Complete the next
                  scenario to continue your learning streak.
                </p>

                <div className="mt-6 max-w-md">

                  <div className="flex justify-between text-xs text-[#b7b2a6]">
                    <span>Progress</span>
                    <span className="font-semibold text-[#d8b65a]">
                      80%
                    </span>
                  </div>

                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#37342c]">
                    <div className="h-full w-[80%] rounded-full bg-[#c9a64a]" />
                  </div>

                </div>

              </div>

              <Link
                href="/learn/cyber-safety"
                className="whitespace-nowrap rounded-full bg-[#c9a64a] px-7 py-3.5 text-center font-semibold text-[#0b0b09] transition hover:bg-[#d8b65a]"
              >
                Continue learning →
              </Link>

            </div>

          </div>
        </section>

        {/* Topics */}
        <section className="mt-14">

          <div className="flex items-end justify-between">

            <div>
              <p className="text-sm font-semibold tracking-[0.18em] text-[#c9a64a]">
                ALL TOPICS
              </p>

              <h2 className="mt-2 font-serif text-3xl md:text-4xl">
                Explore legal awareness
              </h2>
            </div>

            <span className="hidden text-sm text-[#8f8a80] sm:block">
              5 topics
            </span>

          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {topics.map((topic) => (
              <div
                key={topic.id}
                className="group overflow-hidden rounded-[1.7rem] border border-[#37342c] bg-[#191814] transition duration-300 hover:-translate-y-1 hover:border-[#6d592c] hover:bg-[#211f19]"
              >

                {/* Card Top */}
                <div className="border-b border-[#37342c] p-6">

                  <div className="flex items-start justify-between">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#37342c] bg-[#211f19] text-2xl">
                      {topic.icon}
                    </div>

                    <span className="rounded-full border border-[#6d592c] bg-[#211f19] px-3 py-1 text-xs font-semibold text-[#c9a64a]">
                      {topic.level}
                    </span>

                  </div>

                  <h3 className="mt-6 font-serif text-2xl">
                    {topic.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#a9a498]">
                    {topic.description}
                  </p>

                </div>

                {/* Card Bottom */}
                <div className="p-6">

                  <div className="flex justify-between text-sm">

                    <span className="text-[#8f8a80]">
                      {topic.lessons} lessons
                    </span>

                    <span className="font-semibold text-[#c9a64a]">
                      {topic.progress}%
                    </span>

                  </div>

                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#37342c]">

                    <div
                      className="h-full rounded-full bg-[#c9a64a]"
                      style={{ width: `${topic.progress}%` }}
                    />

                  </div>

                  <Link
                    href={`/learn/${topic.id}`}
                    className="mt-6 block w-full rounded-full border border-[#c9a64a] py-3 text-center text-sm font-semibold text-[#c9a64a] transition hover:bg-[#c9a64a] hover:text-[#0b0b09]"
                  >
                    {topic.progress > 0
                      ? "Continue"
                      : "Start learning"}
                  </Link>

                </div>

              </div>
            ))}

          </div>
        </section>

        {/* Learning Tip */}
        <section className="mt-12 rounded-[1.7rem] border border-[#37342c] bg-[#191814] p-6 md:p-7">

          <div className="flex gap-4">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#6d592c] bg-[#211f19] text-xl">
              💡
            </div>

            <div>

              <h3 className="font-serif text-xl">
                Learning tip
              </h3>

              <p className="mt-2 text-sm leading-7 text-[#a9a498]">
                You don't need to memorize legal sections. Focus on
                understanding the situation, your possible options and
                where to find reliable help.
              </p>

            </div>

          </div>

        </section>

        {/* Disclaimer */}
        <div className="mt-8 rounded-[1.5rem] border border-[#6d592c] bg-[#211f19] p-5">

          <p className="text-sm leading-6 text-[#c8c1b2]">
            <span className="mr-2 text-[#c9a64a]">⚠️</span>

            <strong className="text-[#d8b65a]">
              Legal awareness only:
            </strong>{" "}

            LawLink provides educational information and is not a
            substitute for professional legal advice.
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