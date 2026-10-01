import Link from "next/link";

export default function BasicConsumerRightsPage() {
  return (
    <main className="min-h-screen bg-[#0b0b09] text-[#f0ede3]">

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
            className="rounded-full border border-[#37342c] px-5 py-2 text-sm text-[#b7b2a6] hover:border-[#c9a64a] hover:text-[#c9a64a]"
          >
            ← Back
          </Link>

        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-20 md:px-10">

        <p className="text-sm uppercase tracking-[0.3em] text-[#c9a64a]">
          BASIC RIGHTS
        </p>

        <h1 className="mt-5 font-serif text-5xl leading-tight md:text-7xl">
          Consumer
          <br />
          <span className="text-[#c9a64a]">Rights</span>
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-[#b7b2a6]">
          Consumer rights are protections that help people make informed
          choices and receive fair treatment when buying goods or services.
        </p>

      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20 md:px-10">

        <div className="rounded-3xl border border-[#37342c] bg-[#191814] p-8 md:p-10">

          <h2 className="font-serif text-3xl">
            In simple terms
          </h2>

          <p className="mt-5 leading-8 text-[#b7b2a6]">
            As a consumer, it is useful to know what you are buying,
            understand the terms of a purchase, keep your records, and
            know where to seek help if something goes wrong.
          </p>

          <div className="mt-8 space-y-4 text-[#b7b2a6]">
            <p>• Check important product or service information.</p>
            <p>• Keep your receipt or proof of purchase.</p>
            <p>• Understand return, replacement, or refund conditions.</p>
            <p>• Keep records if you need to raise a complaint.</p>
          </div>

        </div>

      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20 md:px-10">

        <div className="rounded-3xl border border-[#c9a64a] bg-[#211f19] p-8 md:p-10">

          <p className="text-sm uppercase tracking-[0.3em] text-[#c9a64a]">
            WANT TO GO DEEPER?
          </p>

          <h2 className="mt-4 font-serif text-4xl md:text-5xl">
            Learn about
            <br />
            <span className="text-[#c9a64a]">
              Consumer Rights.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-[#b7b2a6]">
            Explore the Legal Learning section for detailed lessons and
            practical examples.
          </p>

          <Link
            href="/learn/consumer-rights"
            className="mt-7 inline-block rounded-full bg-[#c9a64a] px-7 py-3 font-semibold text-[#0b0b09] hover:bg-[#d8b65a]"
          >
            Go to Legal Learning →
          </Link>

        </div>

      </section>

      <footer className="border-t border-[#37342c]">
        <div className="mx-auto flex max-w-6xl justify-between px-6 py-8 md:px-10">

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