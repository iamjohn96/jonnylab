import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Instrument_Serif, JetBrains_Mono } from "next/font/google";
import HomeEffects from "@/components/HomeEffects";
import styles from "@/components/home.module.css";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

const ogImage = {
  url: "https://jonnylab.app/og-image.png",
  width: 1200,
  height: 630,
  alt: "JonnyLab — Small apps for everyday tasks.",
};

const pageTitle = "JonnyLab — Small Apps for Everyday Tasks";
const pageDescription =
  "Independent software from JonnyLab: SafeUnfollow for Instagram data exports, ClearSpace for screenshot backlogs, Fileio for private PDF work, and Privune for on-device photo redaction.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "https://jonnylab.app" },
  openGraph: {
    title: pageTitle,
    description: "Four focused apps and a two-project lab from an independent studio in Seoul.",
    url: "https://jonnylab.app",
    siteName: "JonnyLab",
    type: "website",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: "Four focused apps and a two-project lab from an independent studio in Seoul.",
    images: [ogImage.url],
  },
  robots: { index: true, follow: true },
};

type StoreLink = { label: string; href: string };

type Product = {
  id: string;
  name: string;
  category: string;
  summary: string;
  facts: string[];
  platforms: string[];
  accent: string;
  icon: string;
  detailHref?: string;
  links: StoreLink[];
  schemaType: "SoftwareApplication" | "WebApplication";
  operatingSystem: string;
};

const products: Product[] = [
  {
    id: "safeunfollow",
    name: "SafeUnfollow",
    category: "Instagram data analyzer",
    summary:
      "Understand your Instagram Data ZIP in the browser — mutuals, accounts that don't follow back, and changes between snapshots — without Instagram login or OAuth.",
    facts: ["No Instagram login", "Export parsed in your browser", "Lifetime Access, one-time"],
    platforms: ["Web"],
    accent: "#e2336b",
    icon: "/apps/safeunfollow-icon.png",
    links: [{ label: "Open web app", href: "https://safeunfollow.com" }],
    schemaType: "WebApplication",
    operatingSystem: "Web browser",
  },
  {
    id: "clearspace",
    name: "ClearSpace",
    category: "Screenshot inbox",
    summary:
      "Work through a growing screenshot backlog in small, oldest-first sets. Pass what you keep and choose deletion separately — nothing is removed automatically.",
    facts: ["Oldest-first review sets", "Explicit delete confirmation", "On-device analysis"],
    platforms: ["iPhone", "iPad", "Android"],
    accent: "#2f9c93",
    icon: "/apps/clearspace-icon.png",
    detailHref: "/clearspace",
    links: [
      { label: "App Store", href: "https://apps.apple.com/app/id6773198726" },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.jonnylab.clearspace&utm_source=jonnylab_website&utm_campaign=homepage_index",
      },
    ],
    schemaType: "SoftwareApplication",
    operatingSystem: "iOS, Android",
  },
  {
    id: "fileio",
    name: "Fileio",
    category: "Private PDF workspace",
    summary:
      "Scan paper, turn photos into PDFs, then edit, merge, split, or password-protect copies — with an encrypted Private Vault, processed on your device.",
    facts: ["Scan & Images to PDF", "Merge · Split · Protect", "Encrypted Private Vault"],
    platforms: ["iPhone", "iPad", "Android"],
    accent: "#1f6ff2",
    icon: "/apps/fileio-icon.png",
    detailHref: "/fileio",
    links: [
      { label: "App Store", href: "https://apps.apple.com/app/id6766760955" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.jonnylab.fileio" },
    ],
    schemaType: "SoftwareApplication",
    operatingSystem: "iOS, iPadOS, Android",
  },
  {
    id: "privune",
    name: "Privune",
    category: "On-device photo redaction",
    summary:
      "Find private details in photos on your device, review every mask, and share a sanitized Safe Copy. The original photo is never modified.",
    facts: ["On-device detection", "Solid, pixel, or blur masks", "Original stays unchanged"],
    platforms: ["iPhone", "Android"],
    accent: "#4338ca",
    icon: "/apps/privune-icon.png",
    detailHref: "/privune",
    links: [
      { label: "App Store", href: "https://apps.apple.com/app/id6793817371" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.jonnylab.privune" },
    ],
    schemaType: "SoftwareApplication",
    operatingSystem: "iOS, Android",
  },
];

type LabProject = {
  id: string;
  plate: string;
  name: string;
  summary: string;
  status: string;
  tags: string[];
  ink: string;
  links: StoreLink[];
};

const labProjects: LabProject[] = [
  {
    id: "agent-receipt",
    plate: "Plate A · Fluoro pink",
    name: "Agent Receipt",
    summary:
      "See what a coding agent actually changed — including files touched through Bash — and restore them one file at a time.",
    status: "Open source · npm 0.0.4",
    tags: ["CLI", "Claude Code hooks"],
    ink: "#ff3d9a",
    links: [
      { label: "GitHub", href: "https://github.com/iamjohn96/agent-receipt" },
      { label: "npm", href: "https://www.npmjs.com/package/@jonnylab/agent-receipt" },
    ],
  },
  {
    id: "fixshot",
    plate: "Plate B · Aqua",
    name: "FixShot",
    summary:
      "A Mac troubleshooter: review what gets masked on-device, approve the exact payload, then get a cautious diagnosis and a first useful step.",
    status: "macOS · TestFlight beta",
    tags: ["macOS", "Visual troubleshooting"],
    ink: "#00a3b4",
    links: [],
  },
];

const buildSteps = [
  ["Confirm", "The person reviews and approves the important action."],
  ["Verify", "The product checks and clearly reports the result."],
  ["Recover", "Mistakes have a safe, understandable path back."],
];

const principles = ["Simple", "Useful", "Private", "Human-controlled"];

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
          "@type": product.schemaType,
          name: product.name,
          url: product.detailHref ? `https://jonnylab.app${product.detailHref}` : product.links[0].href,
          description: product.summary,
          operatingSystem: product.operatingSystem,
          publisher: { "@id": "https://jonnylab.app/#organization" },
          ...(product.detailHref ? { sameAs: product.links.map((link) => link.href.split("&")[0]) } : {}),
        },
      })),
    },
  ],
};

/* The torn seam of the entrance cover, top to bottom, as x-percent values. */
const seamX = [50.2, 48.7, 51.4, 49.1, 50.9, 47.9, 51.8, 49.6, 50.3, 48.4, 51.2, 49.3, 50.7, 48.8, 51.5, 50.1];
const seamPoints = seamX.map((x, index) => [x, (index / (seamX.length - 1)) * 100] as const);
const leftClip = `polygon(0 0, ${seamPoints.map(([x, y]) => `${x}% ${y.toFixed(2)}%`).join(", ")}, 0 100%)`;
const rightClip = `polygon(${[...seamPoints].reverse().map(([x, y]) => `${x}% ${y.toFixed(2)}%`).join(", ")}, 100% 0, 100% 100%)`;

const gateScript = `(function(){var d=document.documentElement;try{var bot=/bot|crawl|spider|slurp|lighthouse|headless/i.test(navigator.userAgent)||navigator.webdriver;var seen=sessionStorage.getItem('jl-gate')==='open';d.dataset.gate=(bot||seen||location.hash||/[?&]enter\\b/.test(location.search))?'open':'closed';}catch(e){d.dataset.gate='open';}})();`;

function Arrow({ external = false }: { external?: boolean }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={styles.arrow}>
      {external ? (
        <path d="M6 14 14 6M8 6h6v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M4 10h11M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}

function RegistrationMark({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="5.5" fill="none" stroke="currentColor" strokeWidth="1" />
      <path d="M12 1v22M1 12h22" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

function GateFace() {
  return (
    <div className={styles.gateFace}>
      <div className={styles.gateMeta}>
        <span>JonnyLab</span>
        <span>Studio index · 2026</span>
        <span>Seoul, KR</span>
      </div>
      <div className={styles.gateCenter}>
        <p className={styles.gateKicker}>Independent software studio</p>
        <p className={styles.gateTitle}>
          Jonny<em>Lab</em>
        </p>
        <p className={styles.gateLine}>Small apps for everyday tasks.</p>
      </div>
      <div className={styles.gateMeta}>
        <span>04 products</span>
        <span>02 in the lab</span>
        <span>Handle with care</span>
      </div>
    </div>
  );
}

function Gate() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: gateScript }} />
      <div className={styles.gate} role="dialog" aria-modal="true" aria-label="JonnyLab entrance">
        <div className={`${styles.gateHalf} ${styles.gateLeft}`} style={{ clipPath: leftClip }}>
          <GateFace />
        </div>
        <div className={`${styles.gateHalf} ${styles.gateRight}`} style={{ clipPath: rightClip }} aria-hidden="true">
          <GateFace />
        </div>
        <svg className={styles.gateSeam} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <polyline points={seamPoints.map(([x, y]) => `${x},${y}`).join(" ")} />
        </svg>
        <button type="button" className={styles.gateButton} data-gate-open>
          <span className={styles.gateRing} aria-hidden="true" />
          <span className={styles.gateButtonLabel}>Open</span>
        </button>
        <p className={styles.gateHint}>Press Open to enter</p>
      </div>
    </>
  );
}

function Cabinet() {
  const drawerCards = products.map((product) => ({
    id: product.id,
    label: product.name,
    accent: product.accent,
    icon: product.icon,
  }));

  return (
    <div className={styles.cabinetScene} data-parallax aria-hidden="true">
      <div className={styles.cabinet}>
        <div className={`${styles.face} ${styles.faceBottom}`} />
        <div className={`${styles.face} ${styles.faceBack}`} />
        <div className={`${styles.face} ${styles.faceLeft}`} />
        <div className={`${styles.face} ${styles.faceRight}`} />
        {drawerCards.map((card, index) => (
          <a
            key={card.id}
            href={`#${card.id}`}
            tabIndex={-1}
            className={styles.drawerCard}
            style={{ "--i": index, "--accent": card.accent } as CSSProperties}
          >
            <span className={styles.drawerTab}>
              {String(index + 1).padStart(2, "0")} · {card.label}
            </span>
            <span className={styles.drawerCardBody}>
              <Image src={card.icon} alt="" width={40} height={40} />
              <span className={styles.drawerLines} />
            </span>
          </a>
        ))}
        <div className={`${styles.face} ${styles.faceFront}`}>
          <span className={styles.plate}>
            <span>A — Z</span>
            <strong>JonnyLab Index</strong>
          </span>
          <span className={styles.handle} />
        </div>
      </div>
      <div className={styles.cabinetShadow} />
    </div>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <div className={styles.cardSlot} data-reveal style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}>
      <article
        id={product.id}
        className={styles.indexCard}
        data-tilt="7"
        style={{ "--accent": product.accent } as CSSProperties}
        aria-labelledby={`${product.id}-name`}
      >
        <span className={styles.cardTab}>
          {String(index + 1).padStart(2, "0")} — {product.category}
        </span>
        <div className={styles.cardFace}>
          <header className={styles.cardHeader}>
            <Image src={product.icon} alt="" width={64} height={64} className={styles.cardIcon} />
            <div>
              <h3 id={`${product.id}-name`} className={styles.cardName}>
                {product.detailHref ? <Link href={product.detailHref}>{product.name}</Link> : product.name}
              </h3>
              <p className={styles.cardPlatforms}>{product.platforms.join(" · ")}</p>
            </div>
            <span className={styles.stamp}>Live</span>
          </header>
          <p className={styles.cardSummary}>{product.summary}</p>
          <ul className={styles.cardFacts}>
            {product.facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
          <div className={styles.cardActions}>
            {product.links.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className={styles.storeLink}>
                {link.label} <Arrow external />
              </a>
            ))}
            {product.detailHref ? (
              <Link href={product.detailHref} className={styles.detailLink}>
                Details <Arrow />
              </Link>
            ) : null}
          </div>
        </div>
        <span className={styles.glare} aria-hidden="true" />
      </article>
    </div>
  );
}

function LabPlate({ project, index }: { project: LabProject; index: number }) {
  return (
    <article
      id={project.id}
      className={styles.plateCard}
      data-reveal
      style={{ "--ink": project.ink, "--reveal-delay": `${index * 120}ms` } as CSSProperties}
      aria-labelledby={`${project.id}-name`}
    >
      <RegistrationMark className={`${styles.reg} ${styles.regTl}`} />
      <RegistrationMark className={`${styles.reg} ${styles.regTr}`} />
      <RegistrationMark className={`${styles.reg} ${styles.regBl}`} />
      <RegistrationMark className={`${styles.reg} ${styles.regBr}`} />
      <div className={styles.halftone} aria-hidden="true" />
      <div className={styles.plateInner}>
        <p className={styles.plateLabel}>
          <span>{project.plate}</span>
          <span>{project.status}</span>
        </p>
        <h3 id={`${project.id}-name`} className={styles.plateName}>
          {project.name}
        </h3>
        {project.id === "agent-receipt" ? (
          <div className={styles.receipt} aria-label="Illustrative sample receipt">
            <p className={styles.receiptHead}>Session receipt · sample</p>
            <p><span>created</span><span>3</span></p>
            <p><span>modified</span><span>7</span></p>
            <p><span>deleted via Bash</span><span>1</span></p>
            <p className={styles.receiptRestore}><span>restore src/app.ts</span><span>✓</span></p>
          </div>
        ) : (
          <div className={styles.shot} aria-label="Illustrative screenshot with masked details">
            <span className={styles.shotBar} />
            <span className={styles.shotRow}><i /><b /></span>
            <span className={styles.shotRow}><i /><b className={styles.masked} /></span>
            <span className={styles.shotRow}><i /><b /></span>
            <span className={styles.shotNote}>Masked on-device · approve before sending</span>
          </div>
        )}
        <p className={styles.plateSummary}>{project.summary}</p>
        <div className={styles.plateFooter}>
          <div className={styles.plateTags}>
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <div className={styles.plateLinks}>
            {project.links.length ? (
              project.links.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label} <Arrow external />
                </a>
              ))
            ) : (
              <span>No public build yet</span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className={`${styles.page} ${serif.variable} ${mono.variable}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Gate />
      <HomeEffects />

      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.shell}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy} data-reveal>
              <p className={styles.eyebrow}>JonnyLab · Independent software studio · Seoul</p>
              <h1 id="hero-title" className={styles.heroTitle}>
                Small apps for <em>everyday</em> tasks.
              </h1>
              <p className={styles.heroIntro}>
                Screenshot backlogs, PDFs, private photos, Instagram exports. Each product does one job,
                keeps your data close, and leaves the important decisions with you.
              </p>
              <p className={styles.ledger}>
                <span>4 products live</span>
                <span>App Store · Google Play · Web</span>
                <span>2 in the lab</span>
              </p>
            </div>
            <Cabinet />
          </div>

          <nav className={styles.rooms} aria-label="Choose a room">
            <a href="#products" className={`${styles.room} ${styles.roomProducts}`} data-tilt="6" data-reveal>
              <span className={styles.roomNumber}>Room 01</span>
              <span className={styles.roomTitle}>Products</span>
              <span className={styles.roomCopy}>Four apps you can use today, on your phone or in the browser.</span>
              <span className={styles.roomIcons} aria-hidden="true">
                {products.map((product) => (
                  <Image key={product.id} src={product.icon} alt="" width={36} height={36} />
                ))}
              </span>
              <span className={styles.roomEnter}>
                Enter <Arrow />
              </span>
              <span className={styles.glare} aria-hidden="true" />
            </a>
            <a href="#lab" className={`${styles.room} ${styles.roomLab}`} data-tilt="6" data-reveal style={{ "--reveal-delay": "120ms" } as CSSProperties}>
              <span className={styles.roomNumber}>Room 02</span>
              <span className={styles.roomTitle}>Product Lab</span>
              <span className={styles.roomCopy}>Two experiments, printed in two inks. Scope changes as evidence arrives.</span>
              <span className={styles.roomDots} aria-hidden="true" />
              <span className={styles.roomEnter}>
                Enter <Arrow />
              </span>
              <span className={styles.glare} aria-hidden="true" />
            </a>
          </nav>
        </div>
      </section>

      <section id="products" className={styles.products} aria-labelledby="products-title">
        <div className={styles.shell}>
          <div className={styles.sectionHead} data-reveal>
            <p className={styles.eyebrow}>Room 01 · The index</p>
            <h2 id="products-title" className={styles.sectionTitle}>
              Four products. <em>One clear job each.</em>
            </h2>
            <p className={styles.sectionCopy}>
              Every card is a live product. Pick the store you use, or read the details first.
            </p>
          </div>
          <div className={styles.cardGrid}>
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="lab" className={styles.lab} aria-labelledby="lab-title">
        <div className={styles.shell}>
          <div className={styles.labHead} data-reveal>
            <div>
              <p className={styles.eyebrow}>Room 02 · Product lab</p>
              <h2 id="lab-title" className={styles.sectionTitle}>
                Two plates <em>only.</em>
              </h2>
            </div>
            <p className={styles.sectionCopy}>
              Active experiments, not general-release promises. Each one earns its next step through real use.
            </p>
          </div>
          <div className={styles.plateGrid}>
            {labProjects.map((project, index) => (
              <LabPlate key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="how-we-build" className={styles.build} aria-labelledby="build-title">
        <div className={styles.shell}>
          <div className={styles.buildGrid}>
            <div data-reveal>
              <p className={styles.eyebrow}>How we build</p>
              <h2 id="build-title" className={styles.sectionTitle}>
                AI recommends. <em>You decide.</em>
              </h2>
              <p className={styles.sectionCopy}>
                When an action touches your files, photos, money, or accounts, the product keeps the decision visible,
                checks what happened, and leaves a way back.
              </p>
              <ul className={styles.principles}>
                {principles.map((principle) => (
                  <li key={principle}>{principle}</li>
                ))}
              </ul>
            </div>
            <ol className={styles.notes}>
              {buildSteps.map(([title, copy], index) => (
                <li key={title} className={styles.note} data-reveal style={{ "--reveal-delay": `${index * 110}ms`, "--n": index } as CSSProperties}>
                  <span className={styles.tape} aria-hidden="true" />
                  <span className={styles.noteNumber}>0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className={styles.closing} data-reveal>
            <div>
              <h2 className={styles.closingTitle}>
                Start narrow. <em>Merge only after evidence.</em>
              </h2>
              <p className={styles.sectionCopy}>
                Privacy is how we build, not what we sell: data minimization, local processing when practical, and clear
                deletion are product requirements.
              </p>
            </div>
            <a href="mailto:support@jonnylab.app" className={styles.contact}>
              Talk to JonnyLab <Arrow />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
