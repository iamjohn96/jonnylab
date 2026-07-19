import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "JonnyLab — Privacy-First Apps and Tools",
  description:
    "Explore JonnyLab products: Serenity, ClearSpace, and Fileio for Android, plus the SafeUnfollow privacy-first Instagram Data ZIP analyzer.",
  alternates: { canonical: "https://jonnylab.app" },
  openGraph: {
    title: "JonnyLab — Privacy-First Apps and Tools",
    description:
      "Android apps for sleep, photo cleanup, and file management, plus a privacy-first Instagram Data ZIP analyzer.",
    url: "https://jonnylab.app",
    siteName: "JonnyLab",
    type: "website",
  },
  robots: { index: true, follow: true },
};

type App = {
  icon: string;
  iconBg: string;
  name: string;
  tagline: string;
  tags: string[];
  href: string;
  external: boolean;
  status: string;
  statusGreen: boolean;
  ctaLabel: string;
  secondaryStatus?: string;
};

const apps: App[] = [
  {
    icon: "☾",
    iconBg: "bg-violet-600",
    name: "Serenity",
    tagline: "Sleep sounds, white noise, and a five-channel sound mixer",
    tags: ["Android", "Sleep", "Relaxation", "White Noise"],
    href: "/serenity",
    external: false,
    status: "Live on Android",
    statusGreen: true,
    ctaLabel: "Explore Serenity",
    secondaryStatus: "iOS in development",
  },
  {
    icon: "C",
    iconBg: "bg-teal-600 text-white font-bold",
    name: "ClearSpace",
    tagline: "Find duplicates, blurry photos, and forgotten screenshots",
    tags: ["Android", "Tools", "Photo Cleaner", "On-Device"],
    href: "/clearspace",
    external: false,
    status: "Live on Android",
    statusGreen: true,
    ctaLabel: "Explore ClearSpace",
    secondaryStatus: "iOS in development",
  },
  {
    icon: "◎",
    iconBg: "bg-fuchsia-600",
    name: "SafeUnfollow",
    tagline: "Analyze your Instagram Data ZIP without Instagram login, OAuth, or account connection",
    tags: ["Web App", "Instagram Data ZIP", "Privacy-First"],
    href: "https://safeunfollow.com",
    external: true,
    status: "Live Web App",
    statusGreen: true,
    ctaLabel: "Open SafeUnfollow",
  },
  {
    icon: "📁",
    iconBg: "bg-indigo-600",
    name: "Fileio",
    tagline: "Manage, view, and scan documents in one place",
    tags: ["Android", "Productivity", "Documents"],
    href: "/fileio",
    external: false,
    status: "Live on Android",
    statusGreen: true,
    ctaLabel: "Explore Fileio",
    secondaryStatus: "iOS in development",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://jonnylab.app/#organization",
      name: "JonnyLab",
      url: "https://jonnylab.app",
      email: "support@jonnylab.app",
    },
    {
      "@type": "ItemList",
      "@id": "https://jonnylab.app/#products",
      name: "JonnyLab products",
      itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "SoftwareApplication",
          name: "Serenity",
          url: "https://jonnylab.app/serenity",
          operatingSystem: "Android",
          applicationCategory: "HealthApplication",
          description: "An ambient sound and sleep sound mixer available on Android, with an iOS version in development.",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "SoftwareApplication",
          name: "ClearSpace",
          url: "https://jonnylab.app/clearspace",
          operatingSystem: "Android",
          applicationCategory: "UtilitiesApplication",
          description: "An on-device photo cleanup tool available on Android, with an iOS version in development.",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "SoftwareApplication",
          name: "Fileio",
          url: "https://jonnylab.app/fileio",
          operatingSystem: "Android",
          applicationCategory: "UtilitiesApplication",
          description: "A file manager, document viewer, and scanner available on Android, with an iOS version in development.",
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "WebApplication",
          name: "SafeUnfollow",
          url: "https://safeunfollow.com",
          applicationCategory: "UtilitiesApplication",
          description: "A privacy-first Instagram Data ZIP analyzer that does not use Instagram login, OAuth, or account connection.",
        },
      },
      ],
    },
  ],
};

function AppCard({ app }: { app: App }) {
  return (
    <div className="h-full rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:border-indigo-300 hover:shadow-md">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl text-white ${app.iconBg}`}>
          {app.icon}
        </div>
        <div className="flex flex-wrap justify-end gap-1.5">
          <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${app.statusGreen ? "bg-green-100 text-green-700" : "bg-zinc-100 text-zinc-600"}`}>
            {app.status}
          </span>
          {app.secondaryStatus ? (
            <span className="rounded-full bg-sky-50 px-2.5 py-1 text-xs font-medium text-sky-700">
              {app.secondaryStatus}
            </span>
          ) : null}
        </div>
      </div>
      <h3 className="mb-1 text-lg font-semibold text-zinc-950">{app.name}</h3>
      <p className="mb-4 text-sm leading-6 text-zinc-600">{app.tagline}</p>
      <div className="flex flex-wrap gap-2">
        {app.tags.map((tag) => (
          <span key={tag} className="rounded bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600">
            {tag}
          </span>
        ))}
      </div>
      <p className="mt-5 text-sm font-semibold text-indigo-700">
        {app.ctaLabel} <span aria-hidden="true">→</span>
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="mb-20">
        <div className="mb-4">
          <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm text-zinc-600 shadow-sm">
            Seoul, Korea 🇰🇷
          </span>
        </div>
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-zinc-950">
          JonnyLab
        </h1>
        <p className="max-w-2xl text-xl leading-relaxed text-zinc-600">
          Android apps for better sleep, cleaner photo libraries, and simpler
          file management—plus privacy-first web tools built to minimize data
          collection.
        </p>
      </section>

      <section id="apps">
        <h2 className="mb-6 text-2xl font-bold text-zinc-950">Apps</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {apps.map((app) =>
            app.external ? (
              <a key={app.name} href={app.href} target="_blank" rel="noopener noreferrer">
                <AppCard app={app} />
              </a>
            ) : (
              <Link key={app.name} href={app.href}>
                <AppCard app={app} />
              </Link>
            ),
          )}
        </div>
      </section>
    </main>
  );
}
