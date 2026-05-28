import Link from "next/link";

const apps = [
  {
    icon: "🔒",
    iconBg: "bg-indigo-600",
    name: "ClearSpace",
    tagline: "Private photo cleaner for iOS & Android",
    tags: ["Utilities", "Privacy", "iOS", "Android"],
    href: "/clearspace",
    external: false,
    status: "Coming Soon",
    statusGreen: false,
  },
  {
    icon: "🐦",
    iconBg: "bg-indigo-600",
    name: "SafeUnfollow",
    tagline: "Track and manage your Twitter/X followers",
    tags: ["Web App", "Social"],
    href: "https://safeunfollow.com",
    external: true,
    status: "Live",
    statusGreen: true,
  },
  {
    icon: "📁",
    iconBg: "bg-indigo-600",
    name: "Fileio",
    tagline: "Smart file manager for iOS & Android",
    tags: ["iOS", "Android", "Productivity"],
    href: "/fileio",
    external: false,
    status: "Coming Soon",
    statusGreen: false,
  },
  {
    icon: "📚",
    iconBg: "bg-amber-500",
    name: "Hakki",
    tagline: "학생 플래너 — 시간표, 과제, 포모도로 타이머",
    tags: ["iOS", "Android", "Education", "Korean"],
    href: "/hakki",
    external: false,
    status: "Coming Soon",
    statusGreen: false,
  },
];

function AppCard({ app }: { app: (typeof apps)[number] }) {
  return (
    <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 hover:border-indigo-500/50 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 ${app.iconBg} rounded-xl flex items-center justify-center text-2xl`}>
          {app.icon}
        </div>
        <span
          className={`text-xs px-2.5 py-1 rounded-full font-medium ${
            app.statusGreen
              ? "bg-green-500/20 text-green-400"
              : "bg-zinc-700 text-zinc-400"
          }`}
        >
          {app.status}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-white mb-1">{app.name}</h3>
      <p className="text-sm text-zinc-400 mb-4">{app.tagline}</p>
      <div className="flex flex-wrap gap-2">
        {app.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs text-zinc-500 bg-zinc-800 px-2 py-0.5 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <section className="mb-20">
        <div className="mb-4">
          <span className="text-sm text-zinc-400 bg-zinc-800/60 px-3 py-1 rounded-full">
            Seoul, Korea 🇰🇷
          </span>
        </div>
        <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
          Jonny Lab
        </h1>
        <p className="text-xl text-zinc-400 max-w-lg leading-relaxed">
          Building privacy-first apps for people who care about their data.
        </p>
      </section>

      <section id="apps">
        <h2 className="text-2xl font-bold text-white mb-6">Apps</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {apps.map((app) =>
            app.external ? (
              <a
                key={app.name}
                href={app.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AppCard app={app} />
              </a>
            ) : (
              <Link key={app.name} href={app.href}>
                <AppCard app={app} />
              </Link>
            )
          )}
        </div>
      </section>

      <footer className="mt-24 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
        <p>© 2026 Jonny Lab · jonnylab.app</p>
        <a
          href="https://github.com/iamjohn96"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          GitHub
        </a>
      </footer>
    </main>
  );
}
