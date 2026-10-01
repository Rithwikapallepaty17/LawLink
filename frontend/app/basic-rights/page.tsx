import Link from "next/link";

const rights = [
  {
    number: "01",
    title: "Consumer Rights",
    description:
      "Consumers have rights relating to safety, information, choice, and fair treatment when purchasing goods and services.",
    link: "/basic-rights/consumer-rights",
   },
  {
    number: "02",
    title: "Right to Information",
    description:
      "Citizens can use the Right to Information framework to seek information from public authorities, subject to applicable rules and exemptions.",
    link: "/basic-rights/right-to-information",
  },
  {
    number: "03",
    title: "Rights at the Workplace",
    description:
      "Employees have various legal protections concerning wages, working conditions, safety, and workplace treatment.",
    link: "/basic-rights/student-workplace",
  },
  {
    number: "04",
    title: "Digital & Online Rights",
    description:
      "Online users have legal protections relating to personal information, digital transactions, cybercrime, and online safety.",
    link: "/basic-rights/cyber-safety",
  },
  {
    number: "05",
    title: "Rights During Police Interaction",
    description:
      "People have important procedural rights when interacting with law-enforcement authorities. Specific rights depend on the situation and applicable law.",
    link: "/basic-rights/police-interaction",
  },
  {
    number: "06",
    title: "Road & Driving Rights",
    description:
      "Drivers and road users have responsibilities as well as legal protections under applicable traffic and motor-vehicle laws.",
    link: "/basic-rights/road-laws",
  },
];

export default function BasicRightsPage() {
  return (
    <main className="min-h-screen bg-[#0b0b09] text-[#f0ede3]">

      {/* Header */}
      <header className="border-b border-[#37342c]">
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

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">

        <p className="text-sm uppercase tracking-[0.3em] text-[#c9a64a]">
          KNOW YOUR RIGHTS
        </p>

        <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-tight md:text-7xl">
          The basics everyone
          <br />
          should <span className="text-[#c9a64a]">know.</span>
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-[#b7b2a6]">
          Explore common areas of everyday law through simple explanations
          designed to help you understand your rights and responsibilities.
        </p>

      </section>

      {/* Rights Grid */}
      <section className="mx-auto max-w-6xl px-6 pb-20 md:px-10">

        <div className="grid gap-5 md:grid-cols-2">

          {rights.map((right) => (
            <Link
              key={right.number}
              href={right.link || "#"}
              className="group rounded-3xl border border-[#37342c] bg-[#191814] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#c9a64a] hover:bg-[#211f19] md:p-8"
            >

              <div className="flex items-center justify-between">

                <span className="text-3xl text-[#c9a64a]">
                  §
                </span>

                <span className="text-sm tracking-widest text-[#817d73]">
                  {right.number}
                </span>

              </div>

              <h2 className="mt-10 font-serif text-3xl">
                {right.title}
              </h2>

              <p className="mt-4 leading-7 text-[#b7b2a6]">
                {right.description}
              </p>

              <div className="mt-7 text-sm font-semibold text-[#c9a64a]">
                Learn more →
              </div>

            </Link>
          ))}

        </div>

      </section>

      {/* AI CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-20 md:px-10">

        <div className="rounded-3xl border border-[#c9a64a] bg-[#211f19] p-8 md:p-12">

          <div className="grid gap-8 md:grid-cols-2 md:items-center">

            <div>

              <p className="text-sm uppercase tracking-[0.3em] text-[#c9a64a]">
                NOT SURE WHERE TO START?
              </p>

              <h2 className="mt-4 font-serif text-4xl md:text-5xl">
                Ask the
                <br />
                <span className="text-[#c9a64a]">
                  LawLink Assistant.
                </span>
              </h2>

            </div>

            <div>

              <p className="leading-7 text-[#b7b2a6]">
                Describe your situation in everyday language and explore
                legal-awareness information and possible next steps.
              </p>

              <Link
                href="/ai-help"
                className="mt-7 inline-block rounded-full bg-[#c9a64a] px-7 py-3 font-semibold text-[#0b0b09] transition hover:bg-[#d8b65a]"
              >
                Ask AI →
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* Disclaimer */}
      <section className="border-t border-[#37342c]">

        <div className="mx-auto max-w-6xl px-6 py-10 md:px-10">

          <p className="max-w-4xl text-xs leading-6 text-[#817d73]">
            LawLink provides general legal information for educational and
            awareness purposes. Laws and procedures can vary depending on the
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
            Legal technology for everyone.
          </span>

        </div>

      </footer>

    </main>
  );
}