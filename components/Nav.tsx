import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/#products", label: "Products", className: "" },
  { href: "/#lab", label: "Lab", className: "" },
  { href: "/#how-we-build", label: "How we build", className: "hidden sm:block" },
];

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#1d1b18]/10 bg-[#f1ece2]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1248px] items-center justify-between px-5 py-3.5 sm:px-6">
        <Link href="/" aria-label="JonnyLab home" className="shrink-0">
          <Image src="/brand/jonnylab-logo-with-words.png" alt="JonnyLab" width={139} height={50} priority className="h-8 w-auto mix-blend-multiply" />
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${link.className} rounded-full px-3 py-1.5 text-sm text-[#5a544a] transition-colors hover:bg-[#1d1b18]/5 hover:text-[#1d1b18]`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
