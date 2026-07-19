import Link from "next/link";

const productLinks = [
  { href: "/serenity", label: "Serenity" },
  { href: "/clearspace", label: "ClearSpace" },
  { href: "/fileio", label: "Fileio" },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-8 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link href="/" className="font-semibold text-zinc-950">
            JonnyLab
          </Link>
          <p className="mt-1">Privacy-first apps and tools from Seoul.</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-3">
          {productLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-zinc-950"
            >
              {link.label}
            </Link>
          ))}
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
