import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "JonnyLab — Solve Real Everyday Problems with Useful AI",
  description: "JonnyLab builds simple, useful, private, and human-controlled products that help people understand, decide, and act.",
  alternates: { canonical: "https://jonnylab.app" },
  openGraph: {
    title: "JonnyLab — Solve Real Everyday Problems with Useful AI",
    description: "Focused products for real problems. Understand, decide, and act—with people in control.",
    url: "https://jonnylab.app",
    siteName: "JonnyLab",
    type: "website",
  },
  robots: { index: true, follow: true },
};

type Product = {
  name: string;
  summary: string;
  journey: [string, string, string];
  tags: string[];
  status: string;
  tone: "green" | "blue" | "neutral";
  href?: string;
  external?: boolean;
  iconSrc?: string;
  icon?: string;
  iconClass?: string;
};

const products: Product[] = [
  {
    name: "ClearSpace",
    summary: "Turn a growing screenshot backlog into small, focused review sessions—then choose what moves to Android Trash.",
    journey: ["Open the inbox", "Review oldest first", "Choose what moves"],
    tags: ["Android", "Screenshot Inbox", "On-device review"],
    status: "Android available · iOS in review",
    tone: "green",
    href: "/clearspace",
    iconSrc: "/apps/clearspace-icon.png",
  },
  {
    name: "Deadline Lens",
    summary: "Find dates and related actions in documents on-device, review them, and save local deadline reminders.",
    journey: ["Read the document", "Review the deadline", "Set a reminder"],
    tags: ["Android", "Productivity", "On-device OCR"],
    status: "Preparing for release",
    tone: "blue",
    href: "/deadline-lens",
    icon: "D",
    iconClass: "from-indigo-600 to-violet-500",
  },
  {
    name: "Fileio",
    summary: "Scan, organize, edit, and privately manage documents and PDFs on iPhone, iPad, and Android.",
    journey: ["Bring files together", "Choose the right tool", "Finish the document"],
    tags: ["iOS", "Android", "PDF workspace"],
    status: "Latest updates live on iOS & Android",
    tone: "green",
    href: "/fileio",
    iconSrc: "/apps/fileio-icon.png",
  },
  {
    name: "Serenity",
    summary: "Mix sleep sounds and white noise, save the combination, and keep calm audio playing in the background.",
    journey: ["Choose a sound", "Shape the mix", "Start a calm session"],
    tags: ["iOS", "Android", "Sleep & focus"],
    status: "Available on iOS & Android",
    tone: "green",
    href: "/serenity",
    iconSrc: "/apps/serenity-icon.png",
  },
  {
    name: "Privune",
    summary: "Detect private details in photos on-device, review every redaction, and create a sanitized Safe Copy.",
    journey: ["Find sensitive details", "Review every mask", "Create a Safe Copy"],
    tags: ["iOS", "Android", "Photo redaction"],
    status: "iOS in review · Android testing",
    tone: "blue",
    href: "/privune",
    icon: "P",
    iconClass: "from-teal-500 to-indigo-500",
  },
  {
    name: "SafeUnfollow",
    summary: "Understand an Instagram Data ZIP without Instagram login, OAuth, or direct account connection.",
    journey: ["Open your export", "Compare connections", "Export your result"],
    tags: ["Web", "Local ZIP analysis", "No OAuth"],
    status: "Live web app",
    tone: "green",
    href: "https://safeunfollow.com",
    external: true,
    icon: "◎",
    iconClass: "from-fuchsia-600 to-purple-500",
  },
];

const labProjects: Product[] = [
  {
    name: "ReasonTrace",
    summary: "A private iPhone and iPad decision journal for recording why a choice was made, then reviewing how the real outcome compared with the original judgment.",
    journey: ["Capture the reasoning", "Commit to a decision", "Review the outcome"],
    tags: ["iPhone & iPad", "Decision journal", "Local-first"],
    status: "Preparing for App Store",
    tone: "neutral",
    icon: "RT",
    iconClass: "from-rose-500 to-indigo-600",
    href: "/reasontrace",
  },
  {
    name: "FixShot",
    summary: "A Mac troubleshooter that lets people review sensitive details before AI analyzes a sanitized screenshot and suggests cautious next steps.",
    journey: ["Understand the screen", "Assess likely causes", "Try verified steps"],
    tags: ["macOS", "Visual troubleshooting", "External beta"],
    status: "Beta validation",
    tone: "blue",
    icon: "F",
    iconClass: "from-sky-500 to-indigo-600",
  },
  {
    name: "FilingCue",
    summary: "A Korean-first Android product that explains official company disclosures as fact, meaning, uncertainty, what to check next, and source.",
    journey: ["Understand the filing", "Judge the event", "Track what matters"],
    tags: ["Android", "Korean market", "Internal test"],
    status: "Internal test · infrastructure pilot",
    tone: "neutral",
    icon: "FC",
    iconClass: "from-amber-500 to-orange-600",
  },
  {
    name: "Doran",
    summary: "A Korean-first companion that helps older adults inspect suspicious messages and complete a safer next action one step at a time.",
    journey: ["Understand the message", "Choose a safe response", "Complete the next step"],
    tags: ["Android", "Senior usability", "Korean-first"],
    status: "Experimental MVP",
    tone: "neutral",
    href: "/doran",
    icon: "도",
    iconClass: "from-amber-400 to-orange-600",
  },
  {
    name: "Agent Permission Guard",
    summary: "A local gateway for AI-agent tool calls with deterministic policy decisions, one-time human approval, a local audit trail, and a native macOS companion preview.",
    journey: ["Inspect the request", "Approve or deny", "Verify the outcome"],
    tags: ["Open source", "MCP gateway", "Developer alpha"],
    status: "Developer alpha",
    tone: "neutral",
    href: "https://github.com/iamjohn96/agent-permission-guard",
    external: true,
    icon: "APG",
    iconClass: "from-zinc-700 to-zinc-950",
  },
];

const principles = [
  ["Simple", "Clear enough to use without a manual. Narrow enough to do one job well."],
  ["Useful", "Measured by time, money, or effort saved—not by how impressive the AI looks."],
  ["Private", "Minimize data, process locally when practical, limit purpose and retention, and make deletion clear."],
  ["Human-controlled", "People keep final authority when an action can meaningfully affect their data, device, money, or work."],
];

const criteria = [
  ["01", "Single JTBD", "One exact problem worth solving"],
  ["02", "Frequency", "How often the problem returns"],
  ["03", "Error cost", "What happens when the product is wrong"],
  ["04", "Data sensitivity", "What information the product touches"],
  ["05", "Action feasibility", "Whether it can enable the real next step"],
  ["06", "Distribution", "How the right people will find it"],
  ["07", "2-week validation", "A fast way to test genuine demand"],
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
      slogan: "Solve real everyday problems with useful AI.",
    },
    {
      "@type": "ItemList",
      "@id": "https://jonnylab.app/#products",
      name: "JonnyLab products",
      itemListElement: products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": product.name === "SafeUnfollow" ? "WebApplication" : "SoftwareApplication",
          name: product.name,
          url: product.href?.startsWith("http") ? product.href : `https://jonnylab.app${product.href}`,
          description: product.summary,
        },
      })),
    },
  ],
};

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4 w-4">
      <path d="M4 10h11M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ProductCard({ product }: { product: Product }) {
  const statusClass = product.tone === "green"
    ? "bg-emerald-50 text-emerald-700 ring-emerald-600/15"
    : product.tone === "blue"
      ? "bg-indigo-50 text-indigo-700 ring-indigo-600/15"
      : "bg-zinc-100 text-zinc-600 ring-zinc-600/10";

  const content = (
    <article className="group flex h-full flex-col rounded-3xl border border-zinc-200 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_18px_50px_rgba(39,39,42,0.08)] sm:p-7">
      <div className="flex items-start justify-between gap-4">
        {product.iconSrc ? (
          <Image src={product.iconSrc} alt="" width={52} height={52} className="h-13 w-13 rounded-2xl" />
        ) : (
          <div className={`flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br text-sm font-bold tracking-tight text-white ${product.iconClass}`}>
            {product.icon}
          </div>
        )}
        <span className={`rounded-full px-3 py-1.5 text-right text-xs font-semibold ring-1 ring-inset ${statusClass}`}>{product.status}</span>
      </div>
      <h3 className="mt-6 text-xl font-bold tracking-tight text-zinc-950">{product.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-zinc-600">{product.summary}</p>
      <div className="mt-6 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2 border-y border-zinc-100 py-4 text-center text-[11px] font-medium leading-4 text-zinc-600">
        <span>{product.journey[0]}</span><span className="text-zinc-300">→</span>
        <span>{product.journey[1]}</span><span className="text-zinc-300">→</span>
        <span>{product.journey[2]}</span>
      </div>
      <div className="mt-5 flex flex-wrap items-center gap-2">
        {product.tags.map((tag) => <span key={tag} className="rounded-md bg-zinc-100 px-2 py-1 text-[11px] font-medium text-zinc-600">{tag}</span>)}
        {product.href ? <span className="ml-auto inline-flex items-center gap-1 text-xs font-semibold text-indigo-700">Explore <ArrowIcon /></span> : null}
      </div>
    </article>
  );

  if (!product.href) return content;
  if (product.external) return <a href={product.href} target="_blank" rel="noopener noreferrer" className="block h-full">{content}</a>;
  return <Link href={product.href} className="block h-full">{content}</Link>;
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#fafafa]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section id="vision" className="relative border-b border-zinc-200 bg-white">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -right-40 -top-48 h-[34rem] w-[34rem] rounded-full bg-indigo-100/60 blur-3xl" />
          <div className="absolute -left-52 bottom-[-18rem] h-[30rem] w-[30rem] rounded-full bg-amber-100/60 blur-3xl" />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-14 px-6 py-20 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-36">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-700">JonnyLab · Seoul</p>
            <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[0.98] tracking-[-0.045em] text-zinc-950 sm:text-7xl lg:text-[5.25rem]">
              Solve real everyday problems <span className="text-indigo-600">with useful AI.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-600 sm:text-xl">We build focused products that turn confusing or tedious moments into clear, useful next actions. AI is a tool—not the destination.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#products" className="inline-flex items-center gap-2 rounded-xl bg-zinc-950 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-indigo-700">Explore products <ArrowIcon /></a>
              <a href="#how-we-build" className="rounded-xl border border-zinc-300 bg-white px-5 py-3.5 text-sm font-semibold text-zinc-800 transition hover:border-zinc-500">How we build</a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-zinc-200 bg-white/85 p-5 shadow-[0_28px_80px_rgba(39,39,42,0.10)] backdrop-blur sm:p-7">
            <p className="px-2 text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">The product loop</p>
            <div className="mt-5 space-y-3">
              {[
                ["01", "Understand", "Make the situation clear"],
                ["02", "Decide", "Structure facts, uncertainty, and options"],
                ["03", "Act", "Make the next step easier to complete"],
              ].map(([number, title, copy], index) => (
                <div key={title} className={`rounded-2xl border p-5 ${index === 2 ? "border-indigo-200 bg-indigo-600 text-white" : "border-zinc-200 bg-white"}`}>
                  <div className="flex items-center gap-4">
                    <span className={`text-xs font-bold ${index === 2 ? "text-indigo-200" : "text-indigo-600"}`}>{number}</span>
                    <div><p className="text-lg font-bold">{title}</p><p className={`mt-1 text-sm ${index === 2 ? "text-indigo-100" : "text-zinc-500"}`}>{copy}</p></div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5 px-2 text-sm leading-6 text-zinc-500">If AI does not materially improve understanding, judgment, or action, we use simpler software.</p>
          </div>
        </div>
      </section>

      <section id="products" className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-700">Focused products</p>
          <h2 className="mt-3 text-4xl font-bold tracking-[-0.03em] text-zinc-950 sm:text-5xl">One clear problem at a time.</h2>
          <p className="mt-5 text-lg leading-8 text-zinc-600">Each product starts narrow, earns its place through real use, and helps people move from understanding to a concrete outcome.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{products.map((product) => <ProductCard key={product.name} product={product} />)}</div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-3xl border border-indigo-200 bg-indigo-50 p-7 sm:p-10">
          <p className="text-sm font-bold text-indigo-700">JonnyLab Automation · Services</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">Less copy-paste. More time for your clients.</h2>
          <p className="mt-4 max-w-2xl leading-7 text-zinc-600">Fixed-scope n8n workflows for small teams: organize incoming inquiries, record them in Google Sheets, and know what needs your attention.</p>
          <Link href="/automation" className="mt-6 inline-flex rounded-xl bg-zinc-950 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-700">Explore automation services →</Link>
        </div>
      </section>

      <section id="how-we-build" className="bg-zinc-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-300">When actions matter</p>
              <h2 className="mt-4 text-4xl font-bold tracking-[-0.03em] sm:text-5xl">AI recommends.<br />Human controls.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-zinc-300">For actions with meaningful consequences, intelligence is only one part of the system. The product must keep the decision visible, verify what happened, and provide a recovery path when possible.</p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              ["Confirm", "The person reviews and approves the important action."],
              ["Verify", "The product checks and clearly reports the result."],
              ["Recover", "Failures and mistakes have a safe, understandable path back."],
            ].map(([title, copy], index) => (
              <div key={title} className="relative rounded-3xl border border-white/10 bg-white/[0.055] p-7">
                <p className="text-xs font-bold text-indigo-300">0{index + 1}</p>
                <h3 className="mt-8 text-2xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-zinc-400">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="principles" className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-700">Product principles</p>
          <h2 className="mt-3 max-w-4xl text-4xl font-bold tracking-[-0.03em] text-zinc-950 sm:text-5xl">Simple · Useful · Private · Human-controlled</h2>
          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {principles.map(([title, copy], index) => (
              <div key={title} className="border-t border-zinc-200 pt-6">
                <div className="flex items-baseline gap-4"><span className="text-xs font-bold text-indigo-600">0{index + 1}</span><h3 className="text-2xl font-bold text-zinc-950">{title}</h3></div>
                <p className="mt-3 max-w-lg leading-7 text-zinc-600">{copy}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 rounded-3xl border border-emerald-200 bg-emerald-50 p-7 sm:p-9">
            <p className="text-sm font-bold text-emerald-800">Privacy is how we build, not what we sell.</p>
            <p className="mt-3 max-w-4xl text-lg leading-8 text-emerald-950">Data minimization, local processing when practical, purpose limitation, intentional retention, user control, and clear deletion are concrete product requirements—not a category label.</p>
          </div>
        </div>
      </section>

      <section id="lab" className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-700">Product lab</p>
            <h2 className="mt-3 text-4xl font-bold tracking-[-0.03em] text-zinc-950 sm:text-5xl">Learning in public, carefully.</h2>
            <p className="mt-5 text-lg leading-8 text-zinc-600">These projects are active tests, betas, or prototypes. Their scope can change as evidence becomes clearer.</p>
          </div>
          <p className="shrink-0 rounded-full bg-zinc-200 px-4 py-2 text-xs font-semibold text-zinc-700">Not general-release promises</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">{labProjects.map((product) => <ProductCard key={product.name} product={product} />)}</div>
      </section>

      <section className="border-y border-zinc-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:py-28 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-700">Before we build</p>
            <h2 className="mt-3 text-4xl font-bold tracking-[-0.03em] text-zinc-950">Seven questions, before more features.</h2>
            <p className="mt-5 leading-7 text-zinc-600">A useful idea needs more than a compelling demo. We look for a clear job, manageable risk, a realistic path to action, and evidence that people want it.</p>
          </div>
          <ol className="grid gap-px overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-200 sm:grid-cols-2">
            {criteria.map(([number, title, copy]) => (
              <li key={number} className="bg-white p-5 sm:p-6">
                <div className="flex gap-4"><span className="text-xs font-bold text-indigo-600">{number}</span><div><h3 className="font-bold text-zinc-950">{title}</h3><p className="mt-1 text-sm leading-6 text-zinc-500">{copy}</p></div></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="relative overflow-hidden rounded-[2rem] bg-indigo-600 px-7 py-12 text-white sm:px-12 sm:py-16">
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border-[48px] border-white/10" aria-hidden="true" />
          <div className="relative max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-200">Our product strategy</p>
            <h2 className="mt-4 text-4xl font-bold tracking-[-0.03em] sm:text-5xl">Start narrow. Merge only after evidence.</h2>
            <p className="mt-5 text-lg leading-8 text-indigo-100">We do not begin with a super app. Products come together only when the same input, the same moment, and the same desired outcome repeatedly prove that they belong together.</p>
            <a href="mailto:support@jonnylab.app" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50">Talk to JonnyLab <ArrowIcon /></a>
          </div>
        </div>
      </section>
    </main>
  );
}
