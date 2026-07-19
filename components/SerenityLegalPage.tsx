import Link from "next/link";
import { Children, cloneElement, isValidElement, type ReactNode } from "react";

type Section = {
  title: string;
  content: ReactNode;
};

type Props = {
  lang: "en" | "ko";
  title: string;
  updatedLabel: string;
  alternateHref: string;
  alternateLabel: string;
  sections: Section[];
  otherDocumentHref: string;
  otherDocumentLabel: string;
};

const siteOrigin = "https://jonnylab.app";

function isExternalHttpLink(href: string | undefined): boolean {
  if (!href) {
    return false;
  }

  try {
    const url = new URL(href, siteOrigin);
    return (
      (url.protocol === "http:" || url.protocol === "https:") &&
      url.hostname !== "jonnylab.app"
    );
  } catch {
    return false;
  }
}

function externalRel(rel: string | undefined): string {
  return Array.from(
    new Set([...(rel?.split(/\s+/).filter(Boolean) ?? []), "noopener", "noreferrer"]),
  ).join(" ");
}

function withSafeExternalLinks(node: ReactNode): ReactNode {
  return Children.map(node, (child) => {
    if (!isValidElement<{
      href?: string;
      children?: ReactNode;
      target?: string;
      rel?: string;
    }>(child)) {
      return child;
    }

    const children = withSafeExternalLinks(child.props.children);
    const isExternalLink =
      child.type === "a" && isExternalHttpLink(child.props.href);

    return cloneElement(
      child,
      isExternalLink
        ? { target: "_blank", rel: externalRel(child.props.rel) }
        : undefined,
      children,
    );
  });
}

export default function SerenityLegalPage({
  lang,
  title,
  updatedLabel,
  alternateHref,
  alternateLabel,
  sections,
  otherDocumentHref,
  otherDocumentLabel,
}: Props) {
  const isKo = lang === "ko";

  return (
    <main lang={lang} className="mx-auto max-w-3xl px-5 py-12 sm:px-6 sm:py-20">
      <nav aria-label={isKo ? "문서 링크" : "Document links"} className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
        <Link href="/" className="text-zinc-500 transition-colors hover:text-zinc-950">
          JonnyLab
        </Link>
        <span aria-hidden="true" className="text-zinc-300">/</span>
        <Link href="/serenity" className="text-zinc-500 transition-colors hover:text-zinc-950">
          Serenity
        </Link>
      </nav>

      <header className="mt-8 border-b border-zinc-200 pb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-600">
          Serenity: Sleep Sound Mixer
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">{title}</h1>
        <p className="mt-3 text-sm text-zinc-500">{updatedLabel}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href={alternateHref} hrefLang={isKo ? "en" : "ko"} className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-300 hover:text-zinc-950">
            {alternateLabel}
          </Link>
          <Link href={otherDocumentHref} className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-300 hover:text-zinc-950">
            {otherDocumentLabel}
          </Link>
        </div>
      </header>

      <article className="mt-10 space-y-10">
        {sections.map((section, index) => (
          <section key={section.title} aria-labelledby={`section-${index + 1}`}>
            <h2 id={`section-${index + 1}`} className="mb-3 text-lg font-semibold tracking-tight text-zinc-950 sm:text-xl">
              {index + 1}. {section.title}
            </h2>
            <div className="space-y-3 text-[0.98rem] leading-7 text-zinc-600 [&_a]:font-medium [&_a]:text-indigo-600 [&_a]:underline-offset-4 hover:[&_a]:underline [&_h3]:pt-2 [&_h3]:font-semibold [&_h3]:text-zinc-900 [&_li]:pl-1 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
              {withSafeExternalLinks(section.content)}
            </div>
          </section>
        ))}
      </article>

      <footer className="mt-14 border-t border-zinc-200 pt-7 text-sm leading-6 text-zinc-600">
        <p>JonnyLab · Serenity: Sleep Sound Mixer</p>
        <p>
          <a href="mailto:support@jonnylab.app" className="font-medium text-indigo-600 hover:underline">support@jonnylab.app</a>
        </p>
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
          <Link href="/">{isKo ? "JonnyLab 홈" : "JonnyLab Home"}</Link>
          <Link href={otherDocumentHref}>{otherDocumentLabel}</Link>
          <Link href="/serenity/support">{isKo ? "지원" : "Support"}</Link>
        </div>
      </footer>
    </main>
  );
}
