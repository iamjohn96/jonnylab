import Link from "next/link";
import FileioBrand from "@/components/FileioBrand";

const fileioLinks = [
  { href: "/fileio/privacy", label: "Privacy" },
  { href: "/fileio/terms", label: "Terms" },
  { href: "/fileio/support", label: "Support" },
];

export default function FileioLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
          <FileioBrand compact />
          <nav
            aria-label="Fileio"
            className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-zinc-600"
          >
            {fileioLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-indigo-700"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      {children}
    </>
  );
}
