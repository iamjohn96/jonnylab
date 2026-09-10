import Image from "next/image";
import Link from "next/link";
import MediaKitActions from "@/components/MediaKitActions";
import { createPageMetadata } from "@/lib/siteMetadata";

export const metadata = createPageMetadata({
  title: "JonnyLab Media Kit — Product Facts & Brand Assets",
  description: "Official JonnyLab company facts, product descriptions, store links, brand assets, and contact information for writers and creators.",
  path: "/media-kit",
});

const products = [
  {
    name: "ClearSpace",
    status: "Available on Android",
    platform: "Android · Productivity",
    description: "ClearSpace turns a growing screenshot backlog into small, focused review sessions, then lets each person choose what moves to Android Trash.",
    href: "https://jonnylab.app/clearspace",
    icon: "/apps/clearspace-icon.png",
    stores: [
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.jonnylab.clearspace&utm_source=jonnylab_media_kit&utm_campaign=creator_coverage" },
    ],
  },
  {
    name: "Fileio",
    status: "Available on iOS & Android",
    platform: "iPhone, iPad & Android · Productivity",
    description: "Fileio is a private document and PDF workspace for scanning, organizing, editing, protecting, and sharing files from iPhone, iPad, and Android.",
    href: "https://jonnylab.app/fileio",
    icon: "/apps/fileio-icon.png",
    stores: [
      { label: "App Store", href: "https://apps.apple.com/app/id6766760955" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.jonnylab.fileio" },
    ],
  },
  {
    name: "Serenity",
    status: "Available on iOS & Android",
    platform: "iPhone, iPad & Android · Health & Fitness",
    description: "Serenity is a sleep-sound and white-noise mixer with 30 sounds, five-channel mixing, saved presets, background playback, and a sleep timer.",
    href: "https://jonnylab.app/serenity",
    icon: "/apps/serenity-icon.png",
    stores: [
      { label: "App Store", href: "https://apps.apple.com/app/id6791929590" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.serenity.sleep" },
    ],
  },
  {
    name: "SafeUnfollow",
    status: "Live web app",
    platform: "Web · Social tools",
    description: "SafeUnfollow helps people understand an Instagram Data ZIP locally without Instagram login, OAuth, or a direct account connection.",
    href: "https://safeunfollow.com",
    icon: null,
    stores: [{ label: "Open web app", href: "https://safeunfollow.com" }],
  },
] as const;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "JonnyLab Media Kit",
  url: "https://jonnylab.app/media-kit",
  description: "Official company facts, product descriptions, store links, and brand assets for JonnyLab.",
  about: {
    "@type": "Organization",
    name: "JonnyLab",
    url: "https://jonnylab.app",
    logo: "https://jonnylab.app/brand/jonnylab-logo.png",
    slogan: "Solve real everyday problems with useful AI.",
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: product.href,
      name: product.name,
      description: product.description,
    })),
  },
};

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4 w-4">
      <path d="M4 10h11M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function MediaKitPage() {
  return (
    <main className="bg-[#fafafa]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-700">Media kit · JonnyLab</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-[0.98] tracking-[-0.045em] text-zinc-950 sm:text-7xl">
              Useful products.<br /><span className="text-indigo-600">Clear facts.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-600">
              Official descriptions, product links, and brand assets for writers, creators, reviewers, and partners. Link to the product page so availability and policy details stay current.
            </p>
          </div>
          <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 sm:p-7">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">JonnyLab in one sentence</p>
            <p className="mt-4 text-xl font-bold leading-8 tracking-tight text-zinc-950">JonnyLab is an independent software studio that solves real everyday problems with focused, useful products.</p>
            <p className="mt-4 text-sm leading-6 text-zinc-600">Based in Seoul, South Korea · Updated 10 September 2026</p>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-200 bg-zinc-950 text-white">
        <div className="mx-auto grid max-w-6xl gap-px bg-white/10 sm:grid-cols-3">
          {[
            ["Mission", "Solve real everyday problems with useful AI."],
            ["Product loop", "Understand → Decide → Act"],
            ["Trust boundary", "AI recommends. Human controls."],
          ].map(([label, value]) => (
            <div key={label} className="bg-zinc-950 px-6 py-8 sm:px-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-300">{label}</p>
              <p className="mt-3 text-lg font-semibold leading-7">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-700">Product fact sheets</p>
          <h2 className="mt-3 text-4xl font-bold tracking-[-0.03em] text-zinc-950 sm:text-5xl">Ready to quote and share.</h2>
          <p className="mt-5 text-lg leading-8 text-zinc-600">These short descriptions cover products that people can obtain or use now. Product pages remain the source of truth.</p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {products.map((product) => (
            <article key={product.name} className="flex flex-col rounded-3xl border border-zinc-200 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.03)] sm:p-7">
              <div className="flex items-start gap-4">
                {product.icon ? (
                  <Image src={product.icon} alt="" width={52} height={52} className="h-13 w-13 rounded-2xl" />
                ) : (
                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-600 to-purple-500 text-lg font-bold text-white">◎</div>
                )}
                <div className="min-w-0 flex-1">
                  <h3 className="text-xl font-bold tracking-tight text-zinc-950">{product.name}</h3>
                  <p className="mt-1 text-xs font-semibold text-indigo-700">{product.status}</p>
                </div>
              </div>
              <p className="mt-5 flex-1 text-base leading-7 text-zinc-700">{product.description}</p>
              <p className="mt-4 text-xs font-medium text-zinc-500">{product.platform}</p>
              <MediaKitActions name={product.name} description={product.description} url={product.href} />
              <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-zinc-100 pt-5 text-sm font-semibold">
                <a href={product.href} target={product.href.startsWith("https://jonnylab.app") ? undefined : "_blank"} rel={product.href.startsWith("https://jonnylab.app") ? undefined : "noopener noreferrer"} className="inline-flex items-center gap-1 text-indigo-700 hover:text-indigo-600">Product page <ArrowIcon /></a>
                {product.stores.map((store) => <a key={store.label} href={store.href} target="_blank" rel="noopener noreferrer" className="text-zinc-700 hover:text-indigo-700">{store.label}</a>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:py-24 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-700">Brand assets</p>
            <h2 className="mt-3 text-4xl font-bold tracking-[-0.03em] text-zinc-950">Official marks, ready to use.</h2>
            <p className="mt-5 leading-7 text-zinc-600">Keep the original proportions and provide clear space around the mark. Using an asset does not imply a partnership or endorsement.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: "JonnyLab wordmark", src: "/brand/jonnylab-logo-with-words.png", width: 278, height: 100 },
              { title: "JonnyLab symbol", src: "/brand/jonnylab-logo.png", width: 120, height: 120 },
            ].map((asset) => (
              <div key={asset.title} className="flex min-h-64 flex-col rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
                <div className="flex flex-1 items-center justify-center rounded-2xl border border-zinc-200 bg-white p-8">
                  <Image src={asset.src} alt={asset.title} width={asset.width} height={asset.height} className="max-h-20 w-auto object-contain" />
                </div>
                <div className="mt-5 flex items-center justify-between gap-3">
                  <p className="font-semibold text-zinc-950">{asset.title}</p>
                  <a href={asset.src} download className="text-sm font-semibold text-indigo-700 hover:text-indigo-600">Download PNG</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="rounded-[2rem] bg-indigo-600 px-7 py-12 text-white sm:px-12 sm:py-14">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-200">Questions or coverage</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-[-0.03em]">Need a current product detail or a different asset?</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-indigo-100">Contact JonnyLab through the official support address. We will confirm facts or point you to the right product page.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="mailto:support@jonnylab.app?subject=JonnyLab%20media%20inquiry" className="rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50">Contact JonnyLab</a>
            <Link href="/" className="rounded-xl border border-white/30 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">Explore all products</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
