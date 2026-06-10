import Link from "next/link";

const features = [
  {
    icon: "🔍",
    title: "Find Duplicates",
    description: "Detect near-duplicate photos using on-device hashing",
  },
  {
    icon: "📸",
    title: "Remove Low Quality",
    description: "Auto-detect blurry, dark, and overexposed shots",
  },
  {
    icon: "🗂",
    title: "Clean Storage",
    description: "Find large files and old videos taking up space",
  },
];

export default function ClearSpacePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <section className="text-center mb-16">
        <div className="mx-auto mb-6 w-24 h-24 bg-indigo-600 rounded-3xl flex items-center justify-center text-3xl font-bold text-white select-none">
          C✓
        </div>
        <h1 className="text-4xl font-bold text-zinc-950 mb-3 tracking-tight">
          ClearSpace
        </h1>
        <p className="text-xl text-zinc-600 mb-6">
          Private Photo Cleaner for iOS &amp; Android
        </p>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {["100% On-Device", "No Account", "No Ads"].map((badge) => (
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

      <section className="bg-white border border-zinc-200 rounded-2xl p-8 mb-10 shadow-sm">
        <h2 className="text-xl font-bold text-zinc-950 mb-3">Privacy by Design</h2>
        <p className="text-zinc-600 mb-6 leading-relaxed">
          Your photos never leave your device. No cloud processing, no data
          collection, no account required. Ever.
        </p>
        <ul className="space-y-2">
          {["Zero data collection", "No cloud uploads", "No account needed"].map(
            (item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm text-zinc-700"
              >
                <span className="text-green-600 font-bold">✓</span>
                {item}
              </li>
            )
          )}
        </ul>
      </section>

      <div className="flex gap-6 text-sm">
        <Link
          href="/clearspace/privacy"
          className="text-indigo-600 hover:text-indigo-500 transition-colors"
        >
          Privacy Policy
        </Link>
        <Link
          href="/clearspace/terms"
          className="text-indigo-600 hover:text-indigo-500 transition-colors"
        >
          Terms of Use
        </Link>
        <Link
          href="/clearspace/support"
          className="text-indigo-600 hover:text-indigo-500 transition-colors"
        >
          Support
        </Link>
      </div>
    </main>
  );
}
