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
      <span
        className={`${
          compact ? "h-9 w-9 rounded-xl" : "h-12 w-12 rounded-2xl"
        } relative flex shrink-0 items-center justify-center overflow-hidden bg-indigo-600 text-white shadow-sm ring-1 ring-indigo-700/20`}
        aria-hidden="true"
      >
        <span className="absolute -right-2 -top-3 h-7 w-7 rotate-45 rounded-sm bg-violet-400/80" />
        <span
          className={`${compact ? "text-xl" : "text-2xl"} relative font-black tracking-[-0.16em]`}
        >
          F
        </span>
      </span>
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
