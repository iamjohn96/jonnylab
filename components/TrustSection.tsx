import Link from "next/link";

type TrustSectionProps = {
  title: string;
  description: string;
  points: string[];
  privacyHref: string;
  supportHref: string;
  termsHref?: string;
};

export default function TrustSection({
  title,
  description,
  points,
  privacyHref,
  supportHref,
  termsHref,
}: TrustSectionProps) {
  return (
    <section className="border-y border-zinc-200 bg-zinc-950 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[0.8fr_1fr]">
        <div>
          <p className="mb-2 text-sm font-semibold text-emerald-300">
            Privacy and trust
          </p>
          <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
          <p className="mt-4 leading-7 text-zinc-300">{description}</p>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm">
            <Link
              href={privacyHref}
              className="font-medium text-white underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            {termsHref ? (
              <Link
                href={termsHref}
                className="font-medium text-white underline underline-offset-4"
              >
                Terms of Use
              </Link>
            ) : null}
            <Link
              href={supportHref}
              className="font-medium text-white underline underline-offset-4"
            >
              Support
            </Link>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {points.map((point) => (
            <div
              key={point}
              className="rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-zinc-100"
            >
              {point}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
