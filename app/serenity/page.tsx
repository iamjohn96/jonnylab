import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Serenity - Sleep & Relax",
  description:
    "Mix sleep sounds, white noise, rain, and nature sounds to create your perfect sleep environment.",
};

const features = [
  {
    icon: "🌧",
    title: "30+ Premium Sounds",
    description:
      "Choose from rain, ocean, forest, fireplace, urban ambience, and a full range of white noise.",
  },
  {
    icon: "🎚",
    title: "Personal Sound Mixer",
    description:
      "Play up to five sounds together, fine-tune each volume, and save your favorite combinations.",
  },
  {
    icon: "🌙",
    title: "Sleep Timer",
    description:
      "Set a custom timer and let gentle fade-out ease you into restful sleep.",
  },
  {
    icon: "▶",
    title: "Background Playback",
    description:
      "Keep your sounds playing reliably while using other apps or with the screen turned off.",
  },
  {
    icon: "◐",
    title: "Comfortable Themes",
    description:
      "Use the refined dark theme at night or switch to a light theme whenever you prefer.",
  },
  {
    icon: "✦",
    title: "Made for Your Routine",
    description:
      "Create a calmer setting for sleep, focus, meditation, yoga, or quiet moments.",
  },
];

const proBenefits = [
  "Full library of 30+ premium sounds",
  "Unlimited saved mix presets",
  "Priority access to new sounds",
  "Continuous content updates",
];

export default function SerenityPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <section className="relative overflow-hidden rounded-3xl bg-[#0A0E1A] px-6 py-16 text-center shadow-xl sm:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(108,99,255,0.35),_transparent_52%)]" />
        <div className="relative">
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-500 to-indigo-700 text-6xl text-white shadow-lg shadow-indigo-950/50 select-none">
            ☾
          </div>
          <p className="mb-3 text-sm font-medium tracking-[0.2em] text-indigo-300 uppercase">
            Sleep Sounds &amp; White Noise Mixer
          </p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Serenity - Sleep &amp; Relax
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-indigo-100/80">
            Mix calming sounds to create your perfect environment for restful
            sleep, deeper focus, and quiet relaxation.
          </p>
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {["30+ Sounds", "Custom Mixes", "Sleep Timer", "No Ads"].map(
              (badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-indigo-300/20 bg-white/10 px-3 py-1 text-xs font-medium text-indigo-100"
                >
                  {badge}
                </span>
              )
            )}
          </div>
          <button
            disabled
            className="cursor-not-allowed rounded-xl bg-indigo-500 px-6 py-3 font-medium text-white opacity-70"
          >
            Coming Soon to Google Play
          </button>
        </div>
      </section>

      <section className="py-16">
        <div className="mb-8 text-center">
          <h2 className="mb-3 text-2xl font-bold text-zinc-950">
            Your sound, your space
          </h2>
          <p className="mx-auto max-w-2xl leading-relaxed text-zinc-600">
            From a quiet rainfall to rich brown noise, Serenity gives you the
            tools to shape a soundscape that fits your routine.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
            >
              <div className="mb-3 text-2xl">{feature.icon}</div>
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

      <section className="mb-12 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
          <p className="mb-2 text-sm font-semibold text-indigo-600">
            Start free
          </p>
          <h2 className="mb-3 text-xl font-bold text-zinc-950">
            Find your calm at no cost
          </h2>
          <p className="leading-relaxed text-zinc-600">
            Enjoy 15 sounds and the core mixer for free. No account is required,
            and your settings and presets stay on your device.
          </p>
        </div>
        <div className="rounded-2xl bg-indigo-600 p-8 text-white shadow-sm">
          <p className="mb-2 text-sm font-semibold text-indigo-200">
            Serenity Pro
          </p>
          <h2 className="mb-4 text-xl font-bold">Unlock the full library</h2>
          <ul className="space-y-2">
            {proBenefits.map((benefit) => (
              <li key={benefit} className="flex gap-2 text-sm text-indigo-50">
                <span className="font-bold">✓</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="flex flex-wrap gap-6 text-sm">
        <Link
          href="/serenity/privacy"
          className="text-indigo-600 transition-colors hover:text-indigo-500"
        >
          Privacy Policy
        </Link>
        <Link
          href="/serenity/terms"
          className="text-indigo-600 transition-colors hover:text-indigo-500"
        >
          Terms of Use
        </Link>
        <Link
          href="/serenity/support"
          className="text-indigo-600 transition-colors hover:text-indigo-500"
        >
          Support
        </Link>
      </div>
    </main>
  );
}
