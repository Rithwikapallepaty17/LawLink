import Link from "next/link";

export default function RightToInformationPage() {
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
          Right to
          <br />
          <span className="text-[#c9a64a]">Information</span>
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-[#b7b2a6]">
          The Right to Information framework allows eligible people to seek
          information from public authorities, subject to applicable rules
          and exemptions.
        </p>

      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20 md:px-10">

        <div className="rounded-3xl border border-[#37342c] bg-[#191814] p-8 md:p-10">

          <h2 className="font-serif text-3xl">
            In simple terms
          </h2>

          <div className="mt-6 space-y-4 text-[#b7b2a6]">
            <p>• You can seek certain information from public authorities.</p>
            <p>• Requests generally follow a prescribed process.</p>
            <p>• Some information may be protected by legal exemptions.</p>
            <p>• Keep a copy of your request and related records.</p>
          </div>

        </div>

      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20 md:px-10">

        <div className="rounded-3xl border border-[#c9a64a] bg-[#211f19] p-8 md:p-10">

          <p className="text-sm uppercase tracking-[0.3em] text-[#c9a64a]">
            NEXT STEP
          </p>

          <h2 className="mt-4 font-serif text-4xl md:text-5xl">
            Want to learn
            <br />
            <span className="text-[#c9a64a]">more?</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-[#b7b2a6]">
            Explore Legal Learning for more detailed information and
            educational content.
          </p>

          <Link
            href="/learn"
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