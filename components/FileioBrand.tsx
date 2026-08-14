import Image from "next/image";
import Link from "next/link";

type FileioBrandProps = {
  compact?: boolean;
};

export default function FileioBrand({ compact = false }: FileioBrandProps) {
  return (
    <Link
      href="/fileio"
      className="group inline-flex items-center gap-3"
      aria-label="Fileio home"
    >
      <Image
        src="/apps/fileio-icon.png"
        alt="Fileio app icon"
        width={compact ? 36 : 48}
        height={compact ? 36 : 48}
        className={`${compact ? "h-9 w-9 rounded-xl" : "h-12 w-12 rounded-xl"} shrink-0`}
      />
      <span>
        <span className="block font-bold tracking-tight text-zinc-950 group-hover:text-indigo-700">
          Fileio
        </span>
        {!compact ? (
          <span className="block text-sm text-zinc-500">
            File Manager &amp; Document Scanner
          </span>
        ) : null}
      </span>
    </Link>
  );
}
