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
        <h1 className="text-4xl font-bold text-zinc-950 mb-3 tracking-tight">
          Fileio
        </h1>
        <p className="text-xl text-zinc-600 mb-6">
          Smart File Manager for iOS &amp; Android
        </p>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {["Google Drive", "iCloud", "Local Files"].map((badge) => (
            <span
              key={badge}
              className="text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-200 px-3 py-1 rounded-full"
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
              className="bg-white border border-zinc-200 rounded-2xl p-5 shadow-sm"
            >
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="font-semibold text-zinc-950 mb-1">{f.title}</h3>
              <p className="text-sm text-zinc-600">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="flex flex-wrap gap-6 text-sm">
        <Link
          href="/fileio/privacy"
          className="text-indigo-600 hover:text-indigo-500 transition-colors"
        >
          Privacy Policy
        </Link>
        <Link
          href="/fileio/support"
          className="text-indigo-600 hover:text-indigo-500 transition-colors"
        >
          Support
        </Link>
        <Link
          href="/fileio/delete-account"
          className="text-indigo-600 hover:text-indigo-500 transition-colors"
        >
          Delete Account
        </Link>
      </div>
    </main>
  );
}
