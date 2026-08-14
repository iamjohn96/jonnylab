import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-200 bg-white/85 backdrop-blur-sm">
      <div className="mx-auto max-w-4xl flex items-center justify-between px-6 py-4">
        <Link
          href="/"
          aria-label="JonnyLab home"
          className="shrink-0"
        >
          <Image src="/brand/jonnylab-logo-with-words.png" alt="JonnyLab" width={139} height={50} priority className="h-8 w-auto" />
        </Link>
        <Link
          href="/#apps"
          className="text-sm text-zinc-600 hover:text-zinc-950 transition-colors"
        >
          Apps
        </Link>
      </div>
    </nav>
  );
}
