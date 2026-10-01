import Link from "next/link";

const topics = [
  {
    number: "01",
    title: "Protect Personal Information",
    description:
      "Be careful when sharing passwords, financial details, identification documents, and other personal information online.",
  },
  {
    number: "02",
    title: "Use Strong Passwords",
    description:
      "Use strong, unique passwords and avoid sharing them with other people.",
  },
  {
    number: "03",
    title: "Watch for Scams",
    description:
      "Be cautious of suspicious links, messages, websites, and requests for money or personal information.",
  },
  {
    number: "04",
    title: "Report Online Problems",
    description:
      "If you experience cybercrime or another serious online problem, keep relevant evidence and consider reporting it through the appropriate channel.",
  },
];

export default function BasicCyberSafetyPage() {
  return (
    <main className="min-h-screen bg-[#0b0b09] text-[#f0ede3]">

      {/* Header */}
      <header className="border-b border-[#37342c]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-10">

          <Link
            href="/basic-rights"
            className="text-xl font-bold tracking-[0.2em] text-[#c9a64a]"
          >
            § LAWLINK
          </Link>

          <Link
            href="/basic-rights"
            className="rounded-full border border-[#37342c] px-5 py-2 text-sm text-[#b7b2a6] transition hover:border-[#c9a64a] hover:text-[#c9a64a]"
          >
            ← Back
          </Link>

        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-20">

        <p className="text-sm uppercase tracking-[0.3em] text-[#c9a64a]">
          BASIC RIGHTS
        </p>

        <h1 className="mt-5 font-serif text-5xl leading-tight md:text-7xl">
          Digital &
          <br />
          <span className="text-[#c9a64a]">
            Online Safety.
          </span>
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-[#b7b2a6]">
          A quick introduction to protecting yourself and your information
          when using the internet and digital services.
        </p>

      </section>

      {/* Topics */}
      <section className="mx-auto max-w-5xl px-6 pb-20 md:px-10">

        <div className="grid gap-5 md:grid-cols-2">

          {topics.map((topic) => (
            <article
              key={topic.number}
              className="rounded-3xl border border-[#37342c] bg-[#191814] p-7 md:p-8"
            >

              <div className="flex items-center justify-between">

                <span className="text-3xl text-[#c9a64a]">
                  §
                </span>

                <span className="text-sm tracking-widest text-[#817d73]">
                  {topic.number}
                </span>

              </div>

              <h2 className="mt-8 font-serif text-3xl">
                {topic.title}
              </h2>

              <p className="mt-4 leading-7 text-[#b7b2a6]">
                {topic.description}
              </p>

            </article>
          ))}

        </div>

      </section>

      {/* Legal Learning Link */}
      <section className="mx-auto max-w-5xl px-6 pb-20 md:px-10">

        <div className="rounded-3xl border border-[#c9a64a] bg-[#211f19] p-8 md:p-10">

          <p className="text-sm uppercase tracking-[0.3em] text-[#c9a64a]">
            LEARN MORE
          </p>

          <h2 className="mt-4 font-serif text-4xl md:text-5xl">
            Explore detailed
            <br />
            <span className="text-[#c9a64a]">
              Legal Learning.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-[#b7b2a6]">
            Continue to Legal Learning for more detailed information about
            cyber safety and online risks.
          </p>

          <Link
            href="/learn/cyber-safety"
            className="mt-7 inline-block rounded-full bg-[#c9a64a] px-7 py-3 font-semibold text-[#0b0b09] transition hover:bg-[#d8b65a]"
          >
            Go to Legal Learning →
          </Link>

        </div>

      </section>

      {/* Disclaimer */}
      <section className="border-t border-[#37342c]">

        <div className="mx-auto max-w-5xl px-6 py-10 md:px-10">

          <p className="text-xs leading-6 text-[#817d73]">
            LawLink provides general legal information for educational and
            awareness purposes. Laws and procedures can vary depending on
            circumstances and jurisdiction. This information is not a
            substitute for advice from a qualified legal professional.
          </p>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-[#37342c]">

        <div className="mx-auto flex max-w-5xl justify-between px-6 py-8 md:px-10">

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