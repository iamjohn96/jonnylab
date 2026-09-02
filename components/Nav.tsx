import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-200 bg-white/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          aria-label="JonnyLab home"
          className="shrink-0"
        >
          <Image src="/brand/jonnylab-logo-with-words.png" alt="JonnyLab" width={139} height={50} priority className="h-8 w-auto" />
        </Link>
        <div className="flex items-center gap-4 sm:gap-6">
          <Link href="/#products" className="text-sm text-zinc-600 transition-colors hover:text-zinc-950">Products</Link>
          <Link href="/#how-we-build" className="hidden text-sm text-zinc-600 transition-colors hover:text-zinc-950 sm:block">How we build</Link>
          <Link href="/#lab" className="text-sm text-zinc-600 transition-colors hover:text-zinc-950">Lab</Link>
        </div>
      </div>
    </nav>
  );
}
