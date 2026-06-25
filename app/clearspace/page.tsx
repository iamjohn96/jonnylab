import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ClearSpace - Photo Cleaner for Android",
  description:
    "Find duplicate photos, similar shots, screenshots, chat media, blurry photos, and large or old videos with private on-device analysis.",
};

const featureGroups = [
  {
    title: "Duplicates",
    description:
      "Group exact duplicates and near-duplicates using hashing and perceptual comparison.",
    accent: "bg-emerald-500",
  },
  {
    title: "Similar Photos",
    description:
      "Review repeated shots, edited versions, and burst-style photo groups together.",
    accent: "bg-cyan-500",
  },
  {
    title: "Quality",
    description:
      "Find photos that may be blurry, dark, overexposed, noisy, or otherwise low quality.",
    accent: "bg-amber-500",
  },
  {
    title: "Screenshots",
    description:
      "Detect screenshots from filename, path, and image heuristics visible in your media library.",
    accent: "bg-violet-500",
  },
  {
    title: "Chat Media",
    description:
      "Find visible media from common chat folders such as WhatsApp, Telegram, and KakaoTalk.",
    accent: "bg-rose-500",
  },
  {
    title: "Large Videos",
    description:
      "Surface large and old videos available through Android media permissions.",
    accent: "bg-sky-500",
  },
];

const reviewTools = [
  "Results tabs by cleanup category",
  "Side-by-side comparison for duplicate and similar groups",
  "Swipe review with a Finish action for partial sessions",
  "Batch selection before moving items to trash",
  "Five-second undo window before Android confirmation",
];

const privacyPoints = [
  "No photo or video uploads",
  "No cloud processing for scans",
  "No accounts",
  "No ads",
  "No analytics or tracking SDKs in the current Android-native build",
  "Scoped media permissions, not All files access",
];

const freeFeatures = [
  "Unlimited scanning",
  "Full results review",
  "Manual review",
  "Move up to 50 selected items per month to trash",
];

const proFeatures = [
  "Unlimited deletion allowance",
  "Swipe review mode and faster review tools",
  "Similar and burst groups",
  "Advanced quality analysis and chat media detection",
  "Large and old video cleanup",
  "Home screen widget, advanced filters, and priority support",
];

function AppPreview() {
  return (
    <div className="mx-auto w-full max-w-sm rounded-[2rem] border border-zinc-800 bg-zinc-950 p-3 shadow-2xl shadow-zinc-950/20">
      <div className="rounded-[1.5rem] bg-zinc-100 p-4">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-zinc-500">ClearSpace</p>
            <p className="text-lg font-bold text-zinc-950">Scan Results</p>
          </div>
          <div className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white">
            2.8 GB
          </div>
        </div>

        <div className="mb-4 grid grid-cols-3 gap-2">
          {["Dupes", "Similar", "Video"].map((label, index) => (
            <div
              key={label}
              className="rounded-lg border border-zinc-200 bg-white p-2"
            >
              <div
                className={[
                  "mb-2 h-10 rounded-md",
                  index === 0
                    ? "bg-emerald-100"
                    : index === 1
                      ? "bg-cyan-100"
                      : "bg-sky-100",
                ].join(" ")}
              />
              <p className="text-[11px] font-semibold text-zinc-700">
                {label}
              </p>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          {[
            ["Duplicate group", "14 photos", "bg-emerald-500"],
            ["Blurry photos", "37 found", "bg-amber-500"],
            ["Chat media", "126 items", "bg-rose-500"],
          ].map(([title, detail, color]) => (
            <div
              key={title}
              className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-3"
            >
              <div className={`h-9 w-9 rounded-lg ${color}`} />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-zinc-950">
                  {title}
                </p>
                <p className="text-xs text-zinc-500">{detail}</p>
              </div>
              <span className="text-sm font-semibold text-zinc-400">Review</span>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-xl bg-zinc-950 p-3 text-white">
          <div className="mb-2 flex items-center justify-between text-xs">
            <span className="font-semibold">Undo available</span>
            <span className="text-zinc-300">5s</span>
          </div>
          <div className="h-1.5 rounded-full bg-zinc-700">
            <div className="h-1.5 w-2/3 rounded-full bg-emerald-400" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ClearspacePage() {
  return (
    <main>
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1fr_420px] lg:items-center lg:py-20">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-950 text-xl font-bold text-white">
                C
              </div>
              <div>
                <p className="text-sm font-semibold text-zinc-500">
                  ClearSpace - Photo Cleaner
                </p>
                <p className="text-sm text-zinc-500">Android by JonnyLab</p>
              </div>
            </div>

            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-zinc-950 sm:text-6xl">
              See clearly. Free space.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
              ClearSpace helps you find duplicate photos, similar shots,
              screenshots, chat media, low-quality images, and large or old
              videos, then review everything before moving unwanted media to
              trash.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                disabled
                className="cursor-not-allowed rounded-lg bg-zinc-950 px-5 py-3 text-sm font-semibold text-white opacity-70"
              >
                Coming soon to Google Play
              </button>
              <Link
                href="/clearspace/support"
                className="rounded-lg border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:border-zinc-500"
              >
                Support
              </Link>
            </div>

            <div className="mt-8 grid max-w-2xl gap-3 text-sm text-zinc-600 sm:grid-cols-2">
              <p className="rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3">
                On-device photo and video analysis
              </p>
              <p className="rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3">
                Uses Android media permissions only
              </p>
            </div>
          </div>

          <AppPreview />
        </div>
      </section>

      <section className="bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 max-w-2xl">
            <p className="mb-2 text-sm font-semibold text-emerald-700">
              Cleanup categories
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-950">
              Focus on the media that usually wastes space
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featureGroups.map((feature) => (
              <article
                key={feature.title}
                className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"
              >
                <div className={`mb-4 h-2 w-12 rounded-full ${feature.accent}`} />
                <h3 className="mb-2 font-semibold text-zinc-950">
                  {feature.title}
                </h3>
                <p className="text-sm leading-6 text-zinc-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-semibold text-cyan-700">
              Review-first deletion
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-950">
              Fast cleanup without silent deletion
            </h2>
            <p className="mt-4 leading-7 text-zinc-600">
              ClearSpace organizes scan results into focused tabs and gives you
              manual, batch, comparison, and swipe review tools. When you choose
              items to remove, the app shows an undo window before starting the
              Android trash flow.
            </p>
          </div>
          <div className="space-y-3">
            {reviewTools.map((tool) => (
              <div
                key={tool}
                className="flex gap-3 rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-700"
              >
                <span className="mt-0.5 h-2.5 w-2.5 rounded-full bg-zinc-950" />
                <span>{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-950 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <p className="mb-2 text-sm font-semibold text-emerald-300">
              Privacy by design
            </p>
            <h2 className="text-3xl font-bold tracking-tight">
              Your media stays on your device
            </h2>
            <p className="mt-4 leading-7 text-zinc-300">
              ClearSpace is a media cleaner, duplicate finder, and storage
              helper for photos and videos. It is not an all-files cleaner and
              does not request Android All files access.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {privacyPoints.map((point) => (
              <div
                key={point}
                className="rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-zinc-100"
              >
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-2">
          <article className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
            <p className="mb-2 text-sm font-semibold text-zinc-500">Free</p>
            <h2 className="mb-5 text-2xl font-bold text-zinc-950">
              Scan and review at no cost
            </h2>
            <ul className="space-y-3">
              {freeFeatures.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm text-zinc-700">
                  <span className="font-bold text-emerald-700">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-lg border border-zinc-800 bg-zinc-950 p-6 text-white shadow-sm">
            <p className="mb-2 text-sm font-semibold text-emerald-300">
              ClearSpace Pro
            </p>
            <h2 className="mb-5 text-2xl font-bold">
              Built for deeper cleanup
            </h2>
            <ul className="space-y-3">
              {proFeatures.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm text-zinc-100">
                  <span className="font-bold text-emerald-300">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs leading-5 text-zinc-400">
              Purchase availability depends on Google Play and RevenueCat
              production configuration.
            </p>
          </article>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="text-zinc-600">
            Support, privacy, and terms for ClearSpace - Photo Cleaner.
          </p>
          <div className="flex flex-wrap gap-5">
            <Link
              href="/clearspace/privacy"
              className="font-medium text-zinc-950 transition-colors hover:text-emerald-700"
            >
              Privacy Policy
            </Link>
            <Link
              href="/clearspace/terms"
              className="font-medium text-zinc-950 transition-colors hover:text-emerald-700"
            >
              Terms of Use
            </Link>
            <Link
              href="/clearspace/support"
              className="font-medium text-zinc-950 transition-colors hover:text-emerald-700"
            >
              Support
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
