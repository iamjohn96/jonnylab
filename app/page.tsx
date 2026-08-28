import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "JonnyLab — Simple Tools for Everyday Problems",
  description:
    "JonnyLab builds small, focused products that solve real everyday problems with simple software and useful AI.",
  alternates: { canonical: "https://jonnylab.app" },
  openGraph: {
    title: "JonnyLab — Simple Tools for Everyday Problems",
    description:
      "Small tools for real problems. AI when useful, local when possible, and simple always.",
    url: "https://jonnylab.app",
    siteName: "JonnyLab",
    type: "website",
  },
  robots: { index: true, follow: true },
};

type App = {
  icon?: string;
  iconBg?: string;
  iconSrc?: string;
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
    icon: "D",
    iconBg: "bg-gradient-to-br from-indigo-600 to-amber-500 text-white font-bold",
    name: "Deadline Lens",
    tagline: "Find dates and actions in documents on-device, then save them as deadlines with local reminders",
    tags: ["Android", "Productivity", "On-Device OCR", "No Ads"],
    href: "/deadline-lens",
    external: false,
    status: "Coming soon",
    statusGreen: false,
    ctaLabel: "Explore Deadline Lens",
    secondaryStatus: "Android release preparation",
  },
  {
    iconSrc: "/apps/serenity-icon.png",
    name: "Serenity",
    tagline: "Sleep sounds, white noise, and a five-channel sound mixer",
    tags: ["Android", "Sleep", "Relaxation", "White Noise"],
    href: "/serenity",
    external: false,
    status: "Android: Available",
    statusGreen: true,
    ctaLabel: "Explore Serenity",
    secondaryStatus: "iOS: In App Review",
  },
  {
    iconSrc: "/apps/clearspace-icon.png",
    name: "ClearSpace",
    tagline: "Fast screenshot cleanup with review tools for duplicates, similar photos, quality issues, and storage-heavy media",
    tags: ["Android", "Screenshot Cleanup", "Photo Review", "On-Device"],
    href: "/clearspace",
    external: false,
    status: "Android: Available",
    statusGreen: true,
    ctaLabel: "Explore ClearSpace",
    secondaryStatus: "iOS: In App Review",
  },
  {
    icon: "P",
    iconBg: "bg-gradient-to-br from-indigo-500 to-teal-500 text-white font-bold",
    name: "Privune",
    tagline:
      "Protect private details in photos on-device, review redaction areas, and create a sanitized Safe Copy",
    tags: ["iOS", "Android", "Privacy", "On-Device", "Photo Redaction"],
    href: "/privune",
    external: false,
    status: "iOS: In App Review",
    statusGreen: false,
    ctaLabel: "Explore Privune",
    secondaryStatus: "Android: Closed testing",
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
    iconSrc: "/apps/fileio-icon.png",
    name: "Fileio",
    tagline: "Scan, edit, merge, split, protect, and privately store PDFs on your Android device",
    tags: ["Android", "PDF Tools", "Private Vault", "On-Device"],
    href: "/fileio",
    external: false,
    status: "Live on Android",
    statusGreen: true,
    ctaLabel: "Explore Fileio",
    secondaryStatus: "iOS in development",
  },
];

const inDevelopment: App[] = [
  {
    icon: "F",
    iconBg: "bg-gradient-to-br from-sky-500 to-indigo-600 text-white font-bold",
    name: "FixShot",
    tagline: "Turn a screenshot of a Mac problem into a clear explanation and practical next steps",
    tags: ["macOS", "Visual Troubleshooting", "Privacy by Design"],
    href: "/doran",
    external: false,
    status: "In development",
    statusGreen: false,
    ctaLabel: "macOS first",
  },
  {
    icon: "도",
    iconBg: "bg-gradient-to-br from-amber-400 to-orange-600 text-white font-bold",
    name: "Doran",
    tagline: "A digital companion that helps older adults complete safer next steps when smartphone problems feel unclear",
    tags: ["Android first", "Senior usability", "Experimental"],
    href: "#principles",
    external: false,
    status: "Experimental",
    statusGreen: false,
    ctaLabel: "도란 살펴보기",
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
      logo: "https://jonnylab.app/brand/jonnylab-logo.png",
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
          name: "Deadline Lens",
          url: "https://jonnylab.app/deadline-lens",
          operatingSystem: "Android",
          applicationCategory: "ProductivityApplication",
          description: "An on-device document deadline organizer for Android with local reminders.",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "SoftwareApplication",
          name: "Serenity",
          url: "https://jonnylab.app/serenity",
          image: "https://jonnylab.app/apps/serenity-icon.png",
          operatingSystem: "Android",
          applicationCategory: "HealthApplication",
          description: "An ambient sound and sleep sound mixer available on Android, with the iOS version submitted for App Store review.",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "SoftwareApplication",
          name: "ClearSpace",
          url: "https://jonnylab.app/clearspace",
          image: "https://jonnylab.app/apps/clearspace-icon.png",
          operatingSystem: "Android",
          applicationCategory: "UtilitiesApplication",
          description: "A review-first screenshot and photo cleanup tool available on Android, with the iOS version in App Store review.",
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "SoftwareApplication",
          name: "Privune",
          url: "https://jonnylab.app/privune",
          operatingSystem: "iOS 17 or later",
          applicationCategory: "UtilitiesApplication",
          description: "An on-device photo redaction tool that creates sanitized Safe Copies without modifying the original.",
        },
      },
      {
        "@type": "ListItem",
        position: 5,
        item: {
          "@type": "SoftwareApplication",
          name: "Fileio",
          url: "https://jonnylab.app/fileio",
          image: "https://jonnylab.app/apps/fileio-icon.png",
          operatingSystem: "Android",
          applicationCategory: "UtilitiesApplication",
          description: "A private PDF workspace for Android with local scanning, page editing, merge and split tools, password-protected copies, and an encrypted Private Vault.",
        },
      },
      {
        "@type": "ListItem",
        position: 6,
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
        {app.iconSrc ? (
          <Image src={app.iconSrc} alt={`${app.name} app icon`} width={48} height={48} className="h-12 w-12 shrink-0 rounded-xl" />
        ) : (
          <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl text-white ${app.iconBg}`}>
            {app.icon}
          </div>
        )}
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
        <Image
          src="/brand/jonnylab-logo-with-words.png"
          alt="JonnyLab"
          width={330}
          height={120}
          priority
          className="mb-5 h-auto w-[260px] max-w-full sm:w-[330px]"
        />
        <p className="max-w-2xl text-xl leading-relaxed text-zinc-600">
          Small tools for real everyday problems.
        </p>
        <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600">
          We build focused software that makes useful tasks simpler. AI is used
          where it genuinely helps; privacy and simplicity are built into the product.
        </p>
      </section>

      <section id="products">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-indigo-700">Available and release-ready</p>
        <h2 className="mb-6 text-2xl font-bold text-zinc-950">Products</h2>
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

      <section className="mt-20" aria-labelledby="development-heading">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-indigo-700">Product lab</p>
        <h2 id="development-heading" className="mb-3 text-2xl font-bold text-zinc-950">In development</h2>
        <p className="mb-6 max-w-2xl leading-7 text-zinc-600">These are active experiments, not released products. Their scope and availability may change as we test what is genuinely useful.</p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {inDevelopment.map((app) => <AppCard key={app.name} app={app} />)}
        </div>
      </section>

      <section id="principles" className="mt-20 rounded-3xl bg-zinc-950 px-7 py-10 text-white sm:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-300">How we build</p>
        <h2 className="mt-3 text-2xl font-bold">Simple. Useful. Private.</h2>
        <p className="mt-4 max-w-2xl leading-7 text-zinc-300">We start with the problem, not the technology. We prefer clear value and a simple experience over forced subscriptions or unnecessary features. We collect as little data as practical and prefer local or on-device processing when it fits the product.</p>
        <p className="mt-4 text-sm text-zinc-400">Privacy is a product principle, not a product category.</p>
      </section>
    </main>
  );
}
