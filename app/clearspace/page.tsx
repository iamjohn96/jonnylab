import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Clearspace — Private Photo Cleaner for Android",
  description:
    "Find duplicates, blurry photos, screenshots, and large files eating your storage. 100% on-device.",
};

const features = [
  {
    icon: "◎",
    title: "Duplicates & Similar Photos",
    description:
      "Find exact matches, near-duplicates, burst shots, and repeated angles using perceptual hashing.",
  },
  {
    icon: "◫",
    title: "Quality Analysis",
    description:
      "Identify blurry, dark, noisy, and low-quality photos that are easy to overlook.",
  },
  {
    icon: "▦",
    title: "Screenshots & Chat Media",
    description:
      "Review old screenshots and media from apps such as WhatsApp and Telegram.",
  },
  {
    icon: "↔",
    title: "Fast Review Tools",
    description:
      "Swipe through suggestions, compare photos side-by-side, and make quick decisions.",
  },
  {
    icon: "↶",
    title: "Batch Delete with Undo",
    description:
      "Clean multiple items at once with a five-second undo window for peace of mind.",
  },
  {
    icon: "◔",
    title: "Storage Insights",
    description:
      "Find large files, understand storage usage, and track the space you have reclaimed.",
  },
];

const freeFeatures = [
  "Scan up to 500 photos",
  "Duplicates and screenshots detection",
  "Basic quality analysis",
];

const proFeatures = [
  "Unlimited photo scanning",
  "Similar and burst group detection",
  "Advanced quality and chat media analysis",
  "Storage breakdown and priority support",
];

const steps = [
  {
    number: "1",
    title: "Scan",
    description:
      "Tap Scan and let on-device analysis review your photo library.",
  },
  {
    number: "2",
    title: "Review",
    description:
      "Explore results organized into duplicates, similar photos, quality, screenshots, and storage.",
  },
  {
    number: "3",
    title: "Compare",
    description:
      "Swipe through suggestions or compare items side-by-side before deciding.",
  },
  {
    number: "4",
    title: "Clean",
    description:
      "Delete what you do not need, with a five-second undo window.",
  },
];

export default function ClearspacePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <section className="relative overflow-hidden rounded-3xl bg-zinc-950 px-6 py-16 text-center shadow-xl sm:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(20,184,166,0.3),_transparent_55%)]" />
        <div className="relative">
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-teal-400 to-blue-600 text-5xl font-bold text-white shadow-lg shadow-teal-950/50 select-none">
            C
          </div>
          <p className="mb-3 text-sm font-medium tracking-[0.2em] text-teal-300 uppercase">
            Private Photo Cleaner for Android
          </p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Clearspace
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-zinc-300">
            Find duplicates, blurry photos, old screenshots, chat media, and
            large files eating your storage. See clearly. Free space.
          </p>
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {["100% On-Device", "No Tracking", "No Cloud Uploads", "Android"].map(
              (badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-teal-300/20 bg-white/10 px-3 py-1 text-xs font-medium text-teal-50"
                >
                  {badge}
                </span>
              )
            )}
          </div>
          <button
            disabled
            className="cursor-not-allowed rounded-xl bg-teal-500 px-6 py-3 font-medium text-white opacity-70"
          >
            Coming Soon to Google Play
          </button>
        </div>
      </section>

      <section className="py-16">
        <div className="mb-8 text-center">
          <h2 className="mb-3 text-2xl font-bold text-zinc-950">
            Find what is filling your phone
          </h2>
          <p className="mx-auto max-w-2xl leading-relaxed text-zinc-600">
            Clearspace organizes cleanup suggestions by category so you can
            review carefully and reclaim storage in seconds.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
            >
              <div className="mb-3 text-2xl text-teal-600">{feature.icon}</div>
              <h3 className="mb-1 font-semibold text-zinc-950">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <div className="mb-8 text-center">
          <h2 className="mb-3 text-2xl font-bold text-zinc-950">
            A careful cleanup in four steps
          </h2>
          <p className="mx-auto max-w-2xl leading-relaxed text-zinc-600">
            Clearspace helps you move quickly without taking control away from
            you.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
            >
              <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-sm font-bold text-teal-800">
                {step.number}
              </div>
              <h3 className="mb-1 font-semibold text-zinc-950">{step.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16 rounded-2xl border border-teal-200 bg-teal-50 p-8">
        <p className="mb-2 text-sm font-semibold text-teal-700">
          Privacy by design
        </p>
        <h2 className="mb-3 text-xl font-bold text-zinc-950">
          Your photos never leave your phone
        </h2>
        <p className="max-w-2xl leading-relaxed text-zinc-700">
          Photo and video analysis runs entirely on your device. Clearspace
          does not collect your data, upload your media, or use analytics,
          advertising, or tracking SDKs.
        </p>
      </section>

      <section className="mb-16 rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
        <p className="mb-2 text-sm font-semibold text-teal-700">
          Built for Android
        </p>
        <h2 className="mb-3 text-xl font-bold text-zinc-950">
          Useful without getting in your way
        </h2>
        <p className="leading-relaxed text-zinc-600">
          Track space freed from a home screen widget, opt in to monthly cleanup
          reminders, and enjoy Material You dynamic color with dark and light
          themes.
        </p>
      </section>

      <section className="mb-12 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
          <p className="mb-2 text-sm font-semibold text-teal-700">Free</p>
          <h2 className="mb-4 text-xl font-bold text-zinc-950">
            Start cleaning at no cost
          </h2>
          <ul className="space-y-2">
            {freeFeatures.map((feature) => (
              <li key={feature} className="flex gap-2 text-sm text-zinc-700">
                <span className="font-bold text-teal-600">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl bg-teal-700 p-8 text-white shadow-sm">
          <p className="mb-2 text-sm font-semibold text-teal-200">
            Clearspace Pro
          </p>
          <h2 className="mb-4 text-xl font-bold">Unlock deeper cleanup</h2>
          <ul className="space-y-2">
            {proFeatures.map((feature) => (
              <li key={feature} className="flex gap-2 text-sm text-teal-50">
                <span className="font-bold">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="flex flex-wrap gap-6 text-sm">
        <Link
          href="/clearspace/privacy"
          className="text-teal-700 transition-colors hover:text-teal-600"
        >
          Privacy Policy
        </Link>
        <Link
          href="/clearspace/terms"
          className="text-teal-700 transition-colors hover:text-teal-600"
        >
          Terms of Use
        </Link>
        <Link
          href="/clearspace/support"
          className="text-teal-700 transition-colors hover:text-teal-600"
        >
          Support
        </Link>
      </div>
    </main>
  );
}
