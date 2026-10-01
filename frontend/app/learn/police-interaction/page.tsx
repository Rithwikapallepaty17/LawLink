import Link from "next/link";

const lessons = [
  {
    number: "01",
    title: "Stay Calm",
    description:
      "Stay calm and communicate respectfully during an interaction with police.",
  },
  {
    number: "02",
    title: "Understand the Situation",
    description:
      "Pay attention to what is happening and understand why you are being approached or questioned.",
  },
  {
    number: "03",
    title: "Keep Important Documents",
    description:
      "Keep relevant identification and important documents accessible when travelling or driving.",
  },
  {
    number: "04",
    title: "Seek Appropriate Help",
    description:
      "If you are unsure about your situation or need legal assistance, consider seeking appropriate help.",
  },
];

export default function PoliceInteractionPage() {
  return (
    <main className="min-h-screen bg-[#0b0b09] text-[#f0ede3]">

      {/* Header */}
      <header className="border-b border-[#37342c]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">

          <Link
            href="/learn"
            className="text-xl font-bold tracking-[0.2em] text-[#c9a64a]"
          >
            § LAWLINK
          </Link>

          <Link
            href="/learn"
            className="rounded-full border border-[#37342c] px-5 py-2 text-sm text-[#b7b2a6] transition hover:border-[#c9a64a] hover:text-[#c9a64a]"
          >
            ← Back to Legal Learning
          </Link>

        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">

        <p className="text-sm uppercase tracking-[0.3em] text-[#c9a64a]">
          LEGAL LEARNING
        </p>

        <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-tight md:text-7xl">
          Police
          <br />
          <span className="text-[#c9a64a]">Interaction.</span>
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-[#b7b2a6]">
          Learn the basics of how to approach and understand common situations
          involving police interaction.
        </p>

      </section>

      {/* Lessons */}
      <section className="mx-auto max-w-6xl px-6 pb-20 md:px-10">

        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.3em] text-[#c9a64a]">
            LEARNING PATH
          </p>

          <h2 className="mt-3 font-serif text-4xl md:text-5xl">
            Know the basics.
          </h2>
        </div>

        <div className="space-y-4">

          {lessons.map((lesson) => (
            <div
              key={lesson.number}
              className="rounded-3xl border border-[#37342c] bg-[#191814] p-7 md:p-8"
            >

              <div className="flex items-start gap-6">

                <span className="text-sm tracking-widest text-[#c9a64a]">
                  {lesson.number}
                </span>

                <div>
                  <h3 className="font-serif text-2xl md:text-3xl">
                    {lesson.title}
                  </h3>

                  <p className="mt-3 max-w-2xl leading-7 text-[#b7b2a6]">
                    {lesson.description}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* Disclaimer */}
      <section className="border-t border-[#37342c]">

        <div className="mx-auto max-w-6xl px-6 py-10 md:px-10">

          <p className="max-w-4xl text-xs leading-6 text-[#817d73]">
            LawLink provides general legal information for educational and
            awareness purposes. Laws and procedures can vary depending on
            circumstances and jurisdiction. This information is not a
            substitute for advice from a qualified legal professional.
          </p>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-[#37342c]">

        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 px-6 py-8 md:flex-row md:px-10">

          <span className="font-semibold tracking-[0.15em] text-[#c9a64a]">
            § LAWLINK
          </span>

          <span className="text-sm text-[#817d73]">
            Learn your rights. Understand your options.
          </span>

        </div>

      </footer>

    </main>
  );
}