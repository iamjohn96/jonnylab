import Image from "next/image";
import Link from "next/link";

const productLinks = [
  { href: "/reasontrace", label: "ReasonTrace" },
  { href: "/serenity", label: "Serenity" },
  { href: "/clearspace", label: "ClearSpace" },
  { href: "/deadline-lens", label: "Deadline Lens" },
  { href: "/privune", label: "Privune" },
  { href: "/fileio", label: "Fileio" },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto grid max-w-[1248px] gap-8 px-5 py-12 text-xs leading-6 text-zinc-600 sm:px-6 lg:grid-cols-[1fr_2fr]">
        <div>
          <Link href="/" aria-label="JonnyLab home" className="inline-block">
            <Image src="/brand/jonnylab-logo-with-words.png" alt="JonnyLab" width={125} height={45} className="h-7 w-auto" />
          </Link>
          <p className="mt-1">Solve real everyday problems with useful AI.</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2">
          {productLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-zinc-950"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/reasontrace/privacy"
            className="transition-colors hover:text-zinc-950"
          >
            ReasonTrace Privacy
          </Link>
          <Link
            href="/deadline-lens/privacy"
            className="transition-colors hover:text-zinc-950"
          >
            Deadline Lens Privacy
          </Link>
          <Link
            href="/filingcue/privacy"
            className="transition-colors hover:text-zinc-950"
          >
            FilingCue Privacy
          </Link>
          <Link
            href="/media-kit"
            className="transition-colors hover:text-zinc-950"
          >
            Media Kit
          </Link>
          <Link
            href="/privacy"
            className="transition-colors hover:text-zinc-950"
          >
            Website Privacy
          </Link>
          <a
            href="https://safeunfollow.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-zinc-950"
          >
            SafeUnfollow
          </a>
          <a
            href="mailto:support@jonnylab.app"
            className="transition-colors hover:text-zinc-950"
          >
            Support
          </a>
          <a
            href="https://github.com/iamjohn96"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-zinc-950"
          >
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  );
}
