import Link from "next/link";

const features = [
  {
    icon: "📁",
    title: "All Files in One Place",
    description: "Access local files, Google Drive, and iCloud from a single app",
  },
  {
    icon: "🔒",
    title: "Secure & Private",
    description: "Your files stay yours. No unnecessary data collection.",
  },
  {
    icon: "⚡",
    title: "Fast & Lightweight",
    description: "Optimized for smooth performance on any device",
  },
];

export default function FileioPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <section className="text-center mb-16">
        <div className="mx-auto mb-6 w-24 h-24 bg-indigo-600 rounded-3xl flex items-center justify-center text-4xl select-none">
          📁
        </div>
        <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">
          Fileio
        </h1>
        <p className="text-xl text-zinc-400 mb-6">
          Smart File Manager for iOS &amp; Android
        </p>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {["Google Drive", "iCloud", "Local Files"].map((badge) => (
            <span
              key={badge}
              className="text-xs font-medium bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 px-3 py-1 rounded-full"
            >
              {badge}
            </span>
          ))}
        </div>
        <button
          disabled
          className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium opacity-50 cursor-not-allowed"
        >
          Coming to App Store Soon
        </button>
      </section>

      <section className="mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-[#111111] border border-white/10 rounded-2xl p-5"
            >
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="font-semibold text-white mb-1">{f.title}</h3>
              <p className="text-sm text-zinc-400">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="flex gap-6 text-sm">
        <Link
          href="/fileio/privacy"
          className="text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          Privacy Policy
        </Link>
        <Link
          href="/fileio/support"
          className="text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          Support
        </Link>
      </div>
    </main>
  );
}
