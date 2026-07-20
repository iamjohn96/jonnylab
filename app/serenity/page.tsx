import TrustSection from "@/components/TrustSection";
import { createPageMetadata } from "@/lib/siteMetadata";

const googlePlayUrl =
  "https://play.google.com/store/apps/details?id=com.serenity.sleep";

export const metadata = createPageMetadata({
  title: "Serenity — Sleep Sounds and Sound Mixer",
  description:
    "Serenity is available on Android with 30 sounds, five-channel mixing, saved mixes, and a sleep timer. An iOS version is in development.",
  path: "/serenity",
});

const features = [
  {
    icon: "🌧",
    title: "30 Sound Library",
    description:
      "Mix rain, ocean, forest, fireplace, city ambience, brown noise, and white noise into your own sleep scene.",
  },
  {
    icon: "🎚",
    title: "5-Channel Mixer",
    description:
      "Blend up to five sounds at once and tune each channel individually for the exact balance you want.",
  },
  {
    icon: "💾",
    title: "Presets",
    description:
      "Save your favorite mixes and come back to the same setup whenever you need it.",
  },
  {
    icon: "⏳",
    title: "Sleep Timer",
    description:
      "Set a timer and let Serenity fade out gradually when it is time to sleep.",
  },
  {
    icon: "📱",
    title: "Background Playback",
    description:
      "Keep audio playing while the screen is off or while you are using other Android apps.",
  },
  {
    icon: "🌐",
    title: "Korean and English",
    description:
      "Serenity ships with both Korean and English UI copy so the core experience stays easy to use.",
  },
];

const freeHighlights = [
  "15 sounds available for free",
  "2 saved presets on the free tier",
  "Core mixer and timer features",
];

const proHighlights = [
  "Full 30-sound library",
  "Expanded preset saving",
  "Built for uninterrupted nightly use",
];

const workflow = [
  "Choose the sounds that fit your routine.",
  "Mix up to five channels and save the blend you like.",
  "Set the timer, start playback, and let the mix fade out gently.",
];

const trustPoints = [
  "Settings and presets stay on your device",
  "No account required",
  "No ads",
  "No analytics or advertising tracking SDKs",
];

export default function SerenityPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <section className="relative overflow-hidden rounded-[2rem] bg-[#08111F] px-6 py-16 text-white shadow-[0_30px_120px_rgba(8,17,31,0.35)] sm:px-10 lg:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.24),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.2),_transparent_38%)]" />
        <div className="relative">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex rounded-full border border-sky-400/30 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">
              Live on Android
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-sky-100/80">
              iOS in development
            </span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-sky-200/80">
                Sleep sounds and white noise
              </p>
              <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Serenity for Android. Calm audio that stays out of the way.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-sky-100/80">
                Serenity combines 30 sounds, a 5-channel mixer, presets, and a
                sleep timer so you can build the exact background sound you
                want for sleep, focus, or quiet downtime.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "30 sounds",
                  "5-channel mixing",
                  "Presets",
                  "Sleep timer",
                  "Korean + English",
                  "Local data only",
                ].map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-white/12 bg-white/6 px-3 py-1 text-sm text-sky-50/90"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <a
                href={googlePlayUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-sky-400"
              >
                Get it on Google Play
              </a>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/8 p-6 backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-200/80">
                Built for a simple nightly flow
              </p>
              <div className="mt-6 space-y-4">
                {workflow.map((step, index) => (
                  <div
                    key={step}
                    className="flex gap-4 rounded-2xl border border-white/8 bg-slate-950/30 p-4"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-400 text-sm font-semibold text-slate-950">
                      {index + 1}
                    </div>
                    <p className="text-sm leading-6 text-sky-50/90">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="flex max-w-2xl flex-col gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
            What you get
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Everything is focused on sound, not accounts or tracking.
          </h2>
          <p className="text-base leading-7 text-slate-600">
            Serenity keeps settings and presets on the device. There is no
            account, no ads, and no analytics or crash reporting SDK in the app
            build.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)]"
            >
              <div className="text-2xl">{feature.icon}</div>
              <h3 className="mt-4 text-lg font-semibold text-slate-950">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <article className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
            Free tier
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-950">
            Enough to build a reliable bedtime mix.
          </h2>
          <ul className="mt-6 space-y-3">
            {freeHighlights.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700">
                <span className="mt-1 text-sky-600">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-[1.75rem] border border-sky-200 bg-sky-600 p-8 text-white shadow-[0_24px_80px_rgba(2,132,199,0.24)]">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-100/80">
            Serenity Pro
          </p>
          <h2 className="mt-3 text-2xl font-semibold">
            Unlock the full sound library and save more mixes.
          </h2>
          <ul className="mt-6 space-y-3">
            {proHighlights.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-sky-50">
                <span className="mt-1 text-sky-200">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <div className="mt-16 overflow-hidden rounded-[1.75rem]">
        <TrustSection
          title="Local by default."
          description="Settings, presets, and playback preferences stay on the device. Serenity does not require an account to use the app."
          points={trustPoints}
          privacyHref="/serenity/privacy"
          termsHref="/serenity/terms"
          supportHref="/serenity/support"
        />
      </div>
    </main>
  );
}
