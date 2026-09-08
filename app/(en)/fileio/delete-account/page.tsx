import Link from "next/link";
import { createPageMetadata } from "@/lib/siteMetadata";

export const metadata = createPageMetadata({
  title: "Reset Fileio App Data | JonnyLab",
  description:
    "Learn how Fileio stores local files and metadata and what happens when you use Reset App Data.",
  path: "/fileio/delete-account",
});

export default function FileioDeleteAccountPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <Link href="/fileio" className="text-sm text-zinc-500 transition-colors hover:text-zinc-950">← Fileio</Link>
      <h1 className="mt-6 mb-2 text-3xl font-bold tracking-tight text-zinc-950">
        Reset Fileio App Data
      </h1>
      <p className="mb-12 text-sm text-zinc-500">
        Fileio does not create user accounts or store your files on JonnyLab servers.
      </p>

      <div className="space-y-10">
        <section>
          <h2 className="mb-3 text-base font-semibold text-zinc-950">No account to delete</h2>
          <div className="space-y-3 text-zinc-600 leading-relaxed">
            <p>
              Fileio has no login, OAuth connection, or server-side user account.
              There is therefore no Fileio account or cloud file store for JonnyLab
              to delete.
            </p>
            <p>
              Imported files, scanned PDFs, recent-file information, favorites,
              and settings are stored locally on your device.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
          <h2 className="mb-3 text-lg font-bold text-zinc-950">Before using Reset App Data</h2>
          <p className="leading-relaxed text-zinc-600">
            Reset App Data deletes files managed inside Fileio and the app&apos;s
            local metadata. Fileio does not provide data recovery or cloud backup,
            so save separate copies of important files before continuing.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-zinc-950">Uninstalling Fileio</h2>
          <p className="leading-relaxed text-zinc-600">
            Uninstalling the app may remove app-specific stored data according to
            Android and device behavior. Android backup is disabled for Fileio.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-zinc-950">Need help?</h2>
          <p className="leading-relaxed text-zinc-600">
            Contact JonnyLab at{" "}
            <a href="mailto:support@jonnylab.app" className="text-indigo-700 hover:text-indigo-600">
              support@jonnylab.app
            </a>
            .
          </p>
        </section>
      </div>

      <nav aria-label="Fileio legal links" className="mt-12 flex flex-wrap gap-5 border-t border-zinc-200 pt-6 text-sm">
        <Link href="/fileio/privacy" className="font-medium text-indigo-700 hover:text-indigo-600">Privacy Policy</Link>
        <Link href="/fileio/terms" className="font-medium text-indigo-700 hover:text-indigo-600">Terms of Service</Link>
        <Link href="/fileio/support" className="font-medium text-indigo-700 hover:text-indigo-600">Support</Link>
      </nav>
    </main>
  );
}
