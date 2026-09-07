import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/siteMetadata";

export const metadata: Metadata = createPageMetadata({
  title: "Website Privacy Notice | JonnyLab",
  description: "How JonnyLab measures traffic on its public website.",
  path: "/privacy",
});

export default function WebsitePrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <Link href="/" className="text-sm text-zinc-500 transition-colors hover:text-zinc-950">
        ← JonnyLab
      </Link>

      <header className="mt-8 border-b border-zinc-200 pb-10">
        <p className="text-sm font-semibold text-indigo-700">JonnyLab</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-950">
          Website Privacy Notice
        </h1>
        <p className="mt-4 text-sm text-zinc-500">Last updated: September 7, 2026</p>
        <p className="mt-6 leading-7 text-zinc-600">
          This notice applies to the public JonnyLab website, including
          {" "}<strong>jonnylab.app/storefront-watch</strong>. It does not change the
          privacy practices of JonnyLab&apos;s mobile apps; each app&apos;s policy applies to that app.
        </p>
      </header>

      <div className="space-y-10 py-10 text-zinc-600">
        <section>
          <h2 className="mb-3 text-xl font-semibold text-zinc-950">Website traffic measurement</h2>
          <p className="leading-7">
            We use Google Analytics 4 to understand basic page traffic, such as pages viewed,
            referring site, approximate region, device and browser category, and visit timing.
            We use this information to understand which public pages are useful and to improve them.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-zinc-950">Privacy-oriented configuration</h2>
          <p className="leading-7">
            The site&apos;s Google tag is configured with analytics and advertising storage denied,
            Google advertising signals disabled, and no advertising personalization. We do not
            send names, email addresses, account IDs, document contents, payment information, or
            other information that directly identifies you to Google Analytics.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-zinc-950">Google&apos;s processing</h2>
          <p className="leading-7">
            Google processes analytics data under its own terms and privacy practices. Learn more
            in Google&apos;s{" "}
            <a className="font-semibold text-indigo-700 hover:text-indigo-600" href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">
              explanation of how it uses information from partner sites
            </a>.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-zinc-950">Questions</h2>
          <p className="leading-7">
            For questions about this website notice, contact{" "}
            <a className="font-semibold text-indigo-700 hover:text-indigo-600" href="mailto:support@jonnylab.app">support@jonnylab.app</a>.
          </p>
        </section>
      </div>
    </main>
  );
}
