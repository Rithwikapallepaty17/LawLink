import Link from "next/link";
import XPBar from "@/components/gamification/XPBar";

const topics = [
  {
    icon: "🔐",
    title: "Cyber Safety",
    description: "Protect yourself from online fraud and cyber threats.",
    progress: 80,
    color: "bg-blue-600",
    lightColor: "bg-blue-50",
  },
  {
    icon: "🛒",
    title: "Consumer Rights",
    description: "Understand your rights when buying products and services.",
    progress: 45,
    color: "bg-emerald-600",
    lightColor: "bg-emerald-50",
  },
  {
    icon: "🚗",
    title: "Road Laws",
    description: "Learn essential road safety and traffic awareness.",
    progress: 20,
    color: "bg-orange-500",
    lightColor: "bg-orange-50",
  },
  {
    icon: "🛡️",
    title: "Women's Safety",
    description: "Explore safety awareness and available support resources.",
    progress: 10,
    color: "bg-purple-600",
    lightColor: "bg-purple-50",
  },
];

const badges = [
  {
    icon: "🛡️",
    title: "Cyber Guardian",
    description: "Complete Cyber Safety",
    earned: true,
  },
  {
    icon: "🛒",
    title: "Smart Consumer",
    description: "Complete Consumer Rights",
    earned: false,
  },
  {
    icon: "🚦",
    title: "Road Ready",
    description: "Complete Road Laws",
    earned: false,
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* Sidebar */}
      <aside className="fixed hidden h-screen w-64 border-r border-slate-200 bg-white p-6 lg:block">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl text-white">
            ⚖️
          </div>

          <span className="text-xl font-bold">
            LawLink
          </span>
        </div>

        {/* Navigation */}
        <nav className="mt-10 space-y-2">

          <Link
            href="/dashboard"
            className="flex items-center gap-3 rounded-xl bg-blue-50 px-4 py-3 font-semibold text-blue-600"
          >
            🏠
            <span>Home</span>
          </Link>

          <Link
            href="/learn"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-600 transition hover:bg-slate-50"
          >
            📚
            <span>Learn</span>
          </Link>

          <Link
            href="/assistant"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-600 transition hover:bg-slate-50"
          >
            🤖
            <span>AI Help</span>
          </Link>

          <Link
            href="/resources"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-600 transition hover:bg-slate-50"
          >
            🔗
            <span>Resources</span>
          </Link>

          <Link
            href="/badges"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-600 transition hover:bg-slate-50"
          >
            🏆
            <span>Badges</span>
          </Link>

          <Link
            href="/profile"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-600 transition hover:bg-slate-50"
          >
            👤
            <span>Profile</span>
          </Link>

        </nav>

        {/* Disclaimer */}
        <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-slate-50 p-4">
          <p className="text-xs leading-5 text-slate-500">
            LawLink provides legal awareness only and is not a substitute
            for professional legal advice.
          </p>
        </div>

      </aside>


      {/* Main Content */}
      <main className="lg:ml-64">

        {/* Top bar */}
        <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-5 md:px-10">
          <XPBar />
          <div>
            <p className="text-sm text-slate-500">
              Your learning dashboard
            </p>

            <h1 className="mt-1 text-2xl font-bold md:text-3xl">
              Welcome back, Akshi 👋
            </h1>
          </div>

          <div className="flex items-center gap-3">

            <div className="hidden rounded-xl bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600 sm:block">
              🔥 5 day streak
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
              A
            </div>

          </div>

        </header>


        <div className="p-6 md:p-10">

          {/* Stats */}
          <section className="grid gap-5 md:grid-cols-3">

            {/* XP */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">
                    Current level
                  </p>

                  <h2 className="mt-1 text-2xl font-bold">
                    Level 4
                  </h2>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl">
                  ⭐
                </div>
              </div>

              <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-[82%] rounded-full bg-blue-600" />
              </div>

              <div className="mt-2 flex justify-between text-xs text-slate-500">
                <span>820 XP</span>
                <span>1000 XP</span>
              </div>

            </div>


            {/* Streak */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">
                    Learning streak
                  </p>

                  <h2 className="mt-1 text-2xl font-bold">
                    5 Days 🔥
                  </h2>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-xl">
                  🔥
                </div>
              </div>

              <div className="mt-5 flex gap-2">
                {["M", "T", "W", "T", "F", "S", "S"].map(
                  (day, index) => (
                    <div
                      key={`${day}-${index}`}
                      className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold ${
                        index < 5
                          ? "bg-orange-500 text-white"
                          : "bg-slate-100 text-slate-400"
                      }`}
                    >
                      {day}
                    </div>
                  ),
                )}
              </div>

            </div>


            {/* Completed */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">
                    Scenarios completed
                  </p>

                  <h2 className="mt-1 text-2xl font-bold">
                    12
                  </h2>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-xl">
                  ✅
                </div>
              </div>

              <p className="mt-5 text-sm text-emerald-600">
                Keep going! You're making progress.
              </p>

            </div>

          </section>


          {/* Learning */}
          <section className="mt-10">

            <div className="flex items-end justify-between">

              <div>
                <p className="text-sm font-semibold text-blue-600">
                  KEEP LEARNING
                </p>

                <h2 className="mt-1 text-2xl font-bold">
                  Continue your journey
                </h2>
              </div>

              <Link
                href="/learn"
                className="text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                View all →
              </Link>

            </div>


            <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-4">

              {topics.map((topic) => (
                <div
                  key={topic.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >

                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl text-2xl ${topic.lightColor}`}
                  >
                    {topic.icon}
                  </div>

                  <h3 className="mt-5 font-bold">
                    {topic.title}
                  </h3>

                  <p className="mt-2 min-h-12 text-sm leading-5 text-slate-500">
                    {topic.description}
                  </p>

                  <div className="mt-5">

                    <div className="flex justify-between text-xs">
                      <span className="text-slate-500">
                        Progress
                      </span>

                      <span className="font-semibold">
                        {topic.progress}%
                      </span>
                    </div>

                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className={`h-full rounded-full ${topic.color}`}
                        style={{ width: `${topic.progress}%` }}
                      />
                    </div>

                  </div>

                  <button className="mt-5 w-full rounded-xl bg-slate-900 py-2.5 text-sm font-semibold text-white transition group-hover:bg-blue-600">
                    Continue
                  </button>

                </div>
              ))}

            </div>

          </section>


          {/* Bottom section */}
          <section className="mt-10 grid gap-6 lg:grid-cols-2">

            {/* AI Assistant */}
            <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-7 text-white">

              <div className="flex items-start justify-between">

                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-2xl">
                    🤖
                  </div>

                  <h2 className="mt-5 text-2xl font-bold">
                    Need help understanding something?
                  </h2>

                  <p className="mt-3 max-w-md text-sm leading-6 text-blue-100">
                    Ask LawLink about a legal-awareness situation and
                    get simple explanations and relevant resources.
                  </p>
                </div>

              </div>

              <Link
                href="/ai-help"
                className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
              >
                Ask LawLink →
              </Link>

            </div>


            {/* Badges */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-sm font-semibold text-blue-600">
                    ACHIEVEMENTS
                  </p>

                  <h2 className="mt-1 text-2xl font-bold">
                    Your badges
                  </h2>
                </div>

                <Link
                  href="/badges"
                  className="text-sm font-semibold text-blue-600"
                >
                  View all →
                </Link>

              </div>


              <div className="mt-6 grid grid-cols-3 gap-3">

                {badges.map((badge) => (
                  <div
                    key={badge.title}
                    className={`rounded-xl p-4 text-center ${
                      badge.earned
                        ? "bg-blue-50"
                        : "bg-slate-50 opacity-50"
                    }`}
                  >

                    <div className="text-3xl">
                      {badge.earned ? badge.icon : "🔒"}
                    </div>

                    <p className="mt-2 text-xs font-bold">
                      {badge.title}
                    </p>

                    <p className="mt-1 text-[10px] text-slate-500">
                      {badge.earned ? "Earned" : "Locked"}
                    </p>

                  </div>
                ))}

              </div>

            </div>

          </section>


          {/* Disclaimer */}
          <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-5">

            <p className="text-sm leading-6 text-amber-800">
              ⚠️ <strong>Legal awareness only:</strong> LawLink provides
              educational information and is not a substitute for
              professional legal advice.
            </p>

          </div>

        </div>

      </main>

    </div>
  );
}