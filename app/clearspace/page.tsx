import Image from "next/image";
import Link from "next/link";
import TrustSection from "@/components/TrustSection";
import { createPageMetadata } from "@/lib/siteMetadata";

const googlePlayUrl =
  "https://play.google.com/store/apps/details?id=com.jonnylab.clearspace";

export const metadata = createPageMetadata({
  title: "ClearSpace — Your Screenshot Inbox for Android",
  description:
    "Work through old screenshots in focused sessions on your Android device. Pass what you want to keep and choose deletion separately.",
  path: "/clearspace",
});

const featureGroups = [
  {
    title: "Screenshot Inbox",
    description:
      "Open a dedicated backlog of screenshots instead of starting with a broad photo-library scan.",
    accent: "bg-violet-500",
  },
  {
    title: "Oldest-first progress",
    description:
      "Start with older screenshots and use age filters to make a large backlog feel manageable.",
    accent: "bg-amber-500",
  },
  {
    title: "Focused Review",
    description:
      "Work through up to 25 of the oldest screenshots in one bounded review session.",
    accent: "bg-indigo-500",
  },
  {
    title: "Separate keep and delete",
    description:
      "Swiping passes a screenshot. Deletion is a separate, explicit choice rather than a gesture shortcut.",
    accent: "bg-emerald-500",
  },
  {
    title: "More cleanup tools",
    description:
      "Open duplicates, similar photos, quality issues, and large media only when you want them.",
    accent: "bg-sky-500",
  },
];

const reviewTools = [
  "Screenshot Inbox is the primary home and review workspace",
  "Oldest-first sorting and filters for 30 days, 6 months, or 1 year",
  "Focused Review uses bounded sessions of up to 25 screenshots",
  "Horizontal swipes pass items; Delete remains an explicit action",
  "Android Trash confirmation and restore support",
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
  "Full Screenshot Inbox and results review",
  "Focused Review for screenshots",
  "Move up to 50 selected items per month to trash",
];

const proFeatures = [
  "Unlimited deletion allowance",
  "Full-library Quick Review tools",
  "Duplicate and similar-photo groups",
  "Quality analysis",
  "Large and old media review",
];

function AppPreview() {
  return (
    <div className="mx-auto w-full max-w-sm rounded-[2rem] border border-zinc-800 bg-zinc-950 p-3 shadow-2xl shadow-zinc-950/20">
      <div className="rounded-[1.5rem] bg-zinc-100 p-4">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-zinc-500">ClearSpace</p>
            <p className="text-lg font-bold text-zinc-950">Screenshot Inbox</p>
          </div>
          <div className="rounded-full bg-violet-600 px-3 py-1 text-xs font-semibold text-white">
            Oldest first
          </div>
        </div>

        <div className="mb-4 grid grid-cols-3 gap-2">
          {["30 days", "6 months", "1 year"].map((label, index) => (
            <div
              key={label}
              className="rounded-lg border border-zinc-200 bg-white p-2"
            >
              <div
                className={[
                  "mb-2 h-10 rounded-md",
                  index === 0
                    ? "bg-violet-100"
                    : index === 1
                      ? "bg-cyan-100"
                      : "bg-sky-100",
                ].join(" ")}
              />
              <p className="truncate text-[11px] font-semibold text-zinc-700">
                {label}
              </p>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          {[
            ["Screenshot backlog", "201 total", "bg-violet-500"],
            ["Focused Review", "25 oldest", "bg-indigo-500"],
            ["More cleanup tools", "Optional", "bg-sky-500"],
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
              <span className="text-sm font-semibold text-zinc-400">Open</span>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-xl bg-zinc-950 p-3 text-white">
          <div className="flex items-center justify-between gap-3 text-xs">
            <span className="font-semibold">Pass to keep</span>
            <span className="rounded-md bg-white px-2.5 py-1 font-semibold text-zinc-950">Choose Delete</span>
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
              <Image src="/apps/clearspace-icon.png" alt="ClearSpace app icon" width={48} height={48} priority className="h-12 w-12 shrink-0 rounded-xl" />
              <div>
                <p className="text-sm font-semibold text-zinc-500">
                  ClearSpace · Screenshot Inbox
                </p>
                <p className="text-sm text-zinc-500">Android · Available now</p>
              </div>
            </div>

            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-zinc-950 sm:text-6xl">
              Your screenshot backlog, one small session at a time.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
              Open your Screenshot Inbox, begin with the oldest items, and work
              through a focused set of up to 25. Pass what you want to keep and
              choose deletion separately. Nothing is removed automatically.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={googlePlayUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-800"
              >
                Get it on Google Play
              </a>
              <Link
                href="/clearspace/support"
                className="rounded-lg border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:border-zinc-500"
              >
                Support
              </Link>
              <span className="inline-flex items-center rounded-lg border border-sky-200 bg-sky-50 px-4 py-3 text-sm font-semibold text-sky-700">
                iOS: In App Review
              </span>
              <a
                href="https://sellwithboost.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg border border-zinc-200 bg-white px-3 py-2 transition-colors hover:border-zinc-400"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://sellwithboost.com/badge/listing.svg"
                  alt="Listed on Sell With boost"
                  style={{ height: "40px", width: "auto" }}
                />
              </a>
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
              Screenshot Inbox
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-950">
              Decisions and progress—not automatic cleanup
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
              You decide what gets cleaned
            </h2>
            <p className="mt-4 leading-7 text-zinc-600">
              ClearSpace keeps passing and deletion separate. A swipe moves the
              review forward without selecting an item for deletion. When you
              deliberately choose items to remove, Android shows its Trash
              confirmation, and supported items can be restored from Trash.
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

      <TrustSection
        title="Your media stays on your device"
        description="ClearSpace analyzes the photos and videos you choose through Android media permissions. It is not an all-files cleaner and does not request Android All files access."
        points={privacyPoints}
        privacyHref="/clearspace/privacy"
        termsHref="/clearspace/terms"
        supportHref="/clearspace/support"
      />

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
            Built for larger backlogs
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
              Available purchase options and prices are shown in the app before
              checkout.
            </p>
          </article>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="text-zinc-600">
            Support, privacy, and terms for ClearSpace.
          </p>
          <div className="flex flex-wrap gap-5">
            <a
              href={googlePlayUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-zinc-950 transition-colors hover:text-emerald-700"
            >
              Google Play
            </a>
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
