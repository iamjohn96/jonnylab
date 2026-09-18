import Image from "next/image";
import Link from "next/link";

const productLinks = [
  { href: "/clearspace", label: "ClearSpace" },
  { href: "/fileio", label: "Fileio" },
  { href: "/privune", label: "Privune" },
];

const externalLinks = [
  { href: "https://safeunfollow.com", label: "SafeUnfollow" },
  { href: "https://github.com/iamjohn96/agent-receipt", label: "Agent Receipt" },
];

const legalLinks = [
  { href: "/privacy", label: "Website Privacy" },
  { href: "/clearspace/privacy", label: "ClearSpace Privacy" },
  { href: "/fileio/privacy", label: "Fileio Privacy" },
  { href: "/privune/privacy", label: "Privune Privacy" },
  { href: "/reasontrace/privacy", label: "ReasonTrace Privacy" },
  { href: "/serenity/privacy", label: "Serenity Privacy" },
  { href: "/deadline-lens/privacy", label: "Deadline Lens Privacy" },
  { href: "/filingcue/privacy", label: "FilingCue Privacy" },
];

function ChevronIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-3.5 w-3.5">
      <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-[1248px] flex-col gap-8 px-5 py-10 text-sm text-zinc-600 sm:px-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-xs">
          <Link href="/" aria-label="JonnyLab home" className="inline-block">
            <Image src="/brand/jonnylab-logo-with-words.png" alt="JonnyLab" width={125} height={45} className="h-7 w-auto" />
          </Link>
          <p className="mt-3 leading-6">Solve real everyday problems with useful AI.</p>
        </div>

        <nav aria-label="Footer" className="flex flex-col flex-wrap gap-6 sm:flex-row sm:items-start">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            {productLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-zinc-950">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            {externalLinks.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-zinc-950">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <div className="group relative">
              <button
                type="button"
                className="inline-flex items-center gap-1 text-zinc-600 transition-colors hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600"
              >
                Legal
                <ChevronIcon />
              </button>
              <div
                className="absolute left-0 top-full z-20 mt-2 w-56 origin-top-left translate-y-1 rounded-2xl border border-zinc-200 bg-white p-2 opacity-0 shadow-[0_18px_40px_rgba(39,39,42,0.12)] transition duration-150 pointer-events-none group-hover:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100 group-focus-within:pointer-events-auto"
              >
                {legalLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-lg px-3 py-2 text-sm text-zinc-600 transition-colors hover:bg-zinc-50 hover:text-zinc-950"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/media-kit" className="transition-colors hover:text-zinc-950">
              Media Kit
            </Link>
            <a href="mailto:support@jonnylab.app" className="transition-colors hover:text-zinc-950">
              Support
            </a>
            <a href="https://github.com/iamjohn96" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-zinc-950">
              GitHub
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
}
