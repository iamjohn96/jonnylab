import Link from "next/link";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0A0A0A]/80 backdrop-blur-sm">
      <div className="mx-auto max-w-4xl flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-white font-bold text-lg tracking-tight">
          Jonny Lab
        </Link>
        <Link
          href="/#apps"
          className="text-sm text-zinc-400 hover:text-white transition-colors"
        >
          Apps
        </Link>
      </div>
    </nav>
  );
}
