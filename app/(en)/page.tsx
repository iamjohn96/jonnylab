import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MarketingScene from "@/components/MarketingScene";
import styles from "@/components/marketing.module.css";

const ogImage = {
  url: "https://jonnylab.app/og-image.png",
  width: 1200,
  height: 630,
  alt: "JonnyLab — Small apps for everyday tasks.",
};

export const metadata: Metadata = {
  title: "JonnyLab — Small Apps for Everyday Tasks",
  description: "Review screenshots with ClearSpace, work with PDFs in Fileio, and understand your Instagram connections with SafeUnfollow. Independent software from JonnyLab.",
  alternates: { canonical: "https://jonnylab.app" },
  openGraph: {
    title: "JonnyLab — Small Apps for Everyday Tasks",
    description: "Screenshot review, PDF tools, and private Instagram analysis. Explore focused apps from JonnyLab.",
    url: "https://jonnylab.app",
    siteName: "JonnyLab",
    type: "website",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "JonnyLab — Small Apps for Everyday Tasks",
    description: "Screenshot review, PDF tools, and private Instagram analysis. Explore focused apps from JonnyLab.",
    images: [ogImage.url],
  },
  robots: { index: true, follow: true },
};

type Product = {
  name: string;
  summary: string;
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
    tags: ["Android", "iOS", "Screenshot Inbox"],
    status: "Android available · iOS in App Review",
    tone: "green",
    href: "/clearspace",
    iconSrc: "/apps/clearspace-icon.png",
  },
  {
    name: "Fileio",
    summary: "Scan, organize, edit, and privately manage documents and PDFs on iPhone, iPad, and Android.",
    tags: ["iOS", "Android", "PDF workspace"],
    status: "Available on iOS & Android",
    tone: "green",
    href: "/fileio",
    iconSrc: "/apps/fileio-icon.png",
  },
  {
    name: "SafeUnfollow",
    summary: "Understand an Instagram Data ZIP without Instagram login, OAuth, or direct account connection.",
    tags: ["Web", "Local ZIP analysis", "No OAuth"],
    status: "Live web app",
    tone: "green",
    href: "https://safeunfollow.com",
    external: true,
    iconSrc: "/apps/safeunfollow-icon.png",
  },
];

const labProjects: Product[] = [
  {
    name: "Agent Receipt",
    summary: "See what your coding agent actually changed—including files touched by Bash—and restore them one file at a time.",
    tags: ["CLI", "Claude Code", "Open source"],
    status: "Pre-release · npm alpha",
    tone: "neutral",
    href: "https://github.com/iamjohn96/agent-receipt",
    external: true,
    icon: "AR",
    iconClass: "from-zinc-700 to-zinc-950",
  },
  {
    name: "FixShot",
    summary: "A Mac troubleshooter that lets people review sensitive details before AI analyzes a sanitized screenshot and suggests cautious next steps.",
    tags: ["macOS", "Visual troubleshooting"],
    status: "In development",
    tone: "neutral",
    iconSrc: "/apps/fixshot-icon.png",
  },
  {
    name: "Privune",
    summary: "Detect private details in photos on-device, review every redaction, and create a sanitized Safe Copy.",
    tags: ["iOS", "Android", "Photo redaction"],
    status: "Coming soon · iOS & Android",
    tone: "blue",
    href: "/privune",
    iconSrc: "/apps/privune-icon.png",
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
      slogan: "Small apps for everyday tasks.",
      sameAs: ["https://github.com/iamjohn96"],
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
  const content = (
    <article className={styles.productCard}>
      <div className={styles.productField} data-tone={product.tone}>
        <span className={styles.productGrain} aria-hidden="true" />
        {product.iconSrc ? (
          <Image src={product.iconSrc} alt="" width={52} height={52} className={styles.fieldIcon} />
        ) : (
          <div className={styles.fieldLetterIcon}>{product.icon}</div>
        )}
        <span className={styles.fieldStatus}>{product.status}</span>
      </div>
      <div className={styles.productBody}>
        <h3>{product.name}</h3>
        <p className={styles.productSummary}>{product.summary}</p>
        <div className={styles.tags}>
          {product.tags.map((tag) => <span key={tag}>{tag}</span>)}
          {product.href ? <span className={styles.explore}>Explore <ArrowIcon /></span> : null}
        </div>
      </div>
    </article>
  );

  if (!product.href) return content;
  if (product.external) return <a href={product.href} aria-label={`Explore ${product.name}`} target="_blank" rel="noopener noreferrer" className="block h-full">{content}</a>;
  return <Link href={product.href} aria-label={`Explore ${product.name}`} className="block h-full">{content}</Link>;
}

export default function Home() {
  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section id="vision" className={`${styles.shell} ${styles.hero}`}>
          <div>
            <p className={styles.eyebrow}>JonnyLab · Seoul</p>
            <h1 className={styles.heroTitle}>
              Small apps for<br /><span>everyday tasks.</span>
            </h1>
            <p className={styles.intro}>Review old screenshots, work with PDFs, and understand your Instagram connections. JonnyLab is an independent software studio building tools you can use in everyday life.</p>
            <div className={styles.actions}>
              <a href="#products" className={styles.primary}>Explore products <ArrowIcon /></a>
              <a href="#how-we-build" className={styles.secondary}>How we build</a>
            </div>
          </div>

          <div className={styles.launchpad}>
            <h2>What do you need to do?</h2>
            <div className={styles.launchGrid}>
              {[
                { name: "ClearSpace", task: "Review your screenshot backlog", detail: "Start with the oldest. Choose what to delete.", href: "/clearspace", icon: "/apps/clearspace-icon.png" },
                { name: "Fileio", task: "Finish a document or PDF", detail: "Scan, organize, edit, and share your files.", href: "/fileio", icon: "/apps/fileio-icon.png" },
                { name: "SafeUnfollow", task: "See who doesn't follow you back", detail: "Analyze your Instagram export, entirely offline.", href: "https://safeunfollow.com", icon: "/apps/safeunfollow-icon.png" },
              ].map((product) => (
                <Link key={product.name} href={product.href} className={styles.launchCard}>
                  <MarketingScene kind={product.name as "ClearSpace" | "Fileio" | "SafeUnfollow"} />
                  <div className={styles.launchCopy}>
                    <Image src={product.icon} alt="" width={34} height={34} />
                    <div><p className={styles.appName}>{product.name}</p><h3>{product.task}</h3><p>{product.detail}</p></div>
                    <span><ArrowIcon /></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
      </section>

      <section id="products" className={styles.shell}>
        <div className={styles.splitHeading}>
          <div><p className={styles.eyebrow}>Focused products</p><h2 className={styles.heading}>One clear problem at a time.</h2></div>
          <p>Each product starts narrow, earns its place through real use, and helps people move from understanding to a concrete outcome.</p>
        </div>
        <div className={styles.productGrid}>{products.map((product) => <ProductCard key={product.name} product={product} />)}</div>
      </section>

      <section id="how-we-build" className={styles.philosophy}>
        <div className={styles.shell}>
          <div className={styles.splitHeading}>
            <div>
              <p className={styles.eyebrow}>When actions matter</p>
              <h2 className={styles.heading}>AI recommends.<br />Human controls.</h2>
            </div>
            <p>For actions with meaningful consequences, intelligence is only one part of the system. The product must keep the decision visible, verify what happened, and provide a recovery path when possible.</p>
          </div>
          <ol className={styles.process}>
            {[
              ["Confirm", "The person reviews and approves the important action."],
              ["Verify", "The product checks and clearly reports the result."],
              ["Recover", "Failures and mistakes have a safe, understandable path back."],
            ].map(([title, copy], index) => (
              <li key={title}><p className={styles.eyebrow}>0{index + 1}</p><h3>{title}</h3><p>{copy}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <section id="principles">
        <div className={styles.shell}>
          <p className={styles.eyebrow}>Product principles</p>
          <h2 className={styles.heading}>Simple · Useful · Private · Human-controlled</h2>
          <div className={styles.principles}>
            {principles.map(([title, copy], index) => (
              <div key={title}>
                <p className={styles.eyebrow}>0{index + 1}</p><h3>{title}</h3><p>{copy}</p>
              </div>
            ))}
          </div>
          <div className={styles.trustNote}>
            <h3>Privacy is how we build, not what we sell.</h3>
            <p>Data minimization, local processing when practical, purpose limitation, intentional retention, user control, and clear deletion are concrete product requirements—not a category label.</p>
          </div>
        </div>
      </section>

      <section id="lab" className={styles.shell}>
        <div className={styles.labHeader}>
          <div className="max-w-3xl">
            <p className={styles.eyebrow}>Product lab</p>
            <h2 className={styles.heading}>Learning in public, carefully.</h2>
            <p className={styles.intro}>These projects are active tests, betas, or prototypes. Their scope can change as evidence becomes clearer.</p>
          </div>
          <p>Not general-release promises</p>
        </div>
        <div className={styles.labGrid}>{labProjects.map((product) => <ProductCard key={product.name} product={product} />)}</div>
      </section>

      <section className={styles.softSection}>
        <div className={`${styles.shell} ${styles.criteria}`}>
          <div>
            <p className={styles.eyebrow}>Before we build</p>
            <h2 className={styles.heading}>Seven questions, before more features.</h2>
            <p className={styles.intro}>A useful idea needs more than a compelling demo. We look for a clear job, manageable risk, a realistic path to action, and evidence that people want it.</p>
          </div>
          <ol>
            {criteria.map(([number, title, copy]) => (
              <li key={number}>
                <span className={styles.eyebrow}>{number}</span><div><h3>{title}</h3><p>{copy}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.shell}>
        <div className={styles.closing}>
            <p className={styles.eyebrow}>Our product strategy</p>
            <h2 className={styles.heading}>Start narrow. Merge only after evidence.</h2>
            <p className={styles.intro}>We do not begin with a super app. Products come together only when the same input, the same moment, and the same desired outcome repeatedly prove that they belong together.</p>
            <a href="mailto:support@jonnylab.app" className={`${styles.primary} mt-8`}>Talk to JonnyLab <ArrowIcon /></a>
        </div>
      </section>
    </main>
  );
}
