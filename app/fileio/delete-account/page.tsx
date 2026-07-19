import Link from "next/link";
import { createPageMetadata } from "@/lib/siteMetadata";

const contactEmail = "support@jonnylab.app";
const deletionSubject = "Fileio Account Deletion Request";

export const metadata = createPageMetadata({
  title: "Fileio Account Deletion Request",
  description: "Request deletion of your Fileio account and associated data.",
  path: "/fileio/delete-account",
});

const faqs = [
  {
    q: "What data will be deleted?",
    a: "Account-related information, authentication records, and associated Fileio account data.",
  },
  {
    q: "What data may be retained?",
    a: "Subscription, billing, fraud prevention, security, and legally required records.",
  },
  {
    q: "Do I need the app installed?",
    a: "No. Requests can be submitted directly through the website.",
  },
];

export default function FileioDeleteAccountPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <div className="mb-2">
        <Link
          href="/fileio"
          className="text-sm text-zinc-500 hover:text-zinc-950 transition-colors"
        >
          ← Fileio
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-zinc-950 mt-6 mb-2 tracking-tight">
        Delete Your Fileio Account
      </h1>
      <p className="text-sm text-zinc-500 mb-12">
        Account deletion request page for Fileio by JonnyLab.
      </p>

      <div className="space-y-10">
        <section>
          <h2 className="text-base font-semibold text-zinc-950 mb-2">Overview</h2>
          <div className="space-y-4 text-zinc-600 leading-relaxed">
            <p>
              Fileio users can request deletion of accounts created with Google
              Sign-In, Apple Sign-In, or Dropbox-connected accounts by emailing
              JonnyLab at{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="text-indigo-600 hover:text-indigo-500 transition-colors"
              >
                {contactEmail}
              </a>
              .
            </p>
            <p>
              Deleting an account will remove account-related data stored by
              Fileio where applicable. Some transaction, subscription, fraud
              prevention, security, or legally required records may be retained
              for compliance purposes.
            </p>
            <p>
              Subscription management is handled by Apple App Store or Google
              Play. Deleting your Fileio account does not automatically cancel an
              active subscription managed by those stores.
            </p>
          </div>
        </section>

        <section className="bg-white border border-zinc-200 shadow-sm rounded-2xl p-8">
          <h2 className="text-lg font-bold text-zinc-950 mb-4">
            How to Request Account Deletion
          </h2>
          <ol className="list-decimal pl-5 space-y-3 text-zinc-600 leading-relaxed">
            <li>
              Send an email to{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="text-indigo-600 hover:text-indigo-500 transition-colors"
              >
                {contactEmail}
              </a>
              .
            </li>
            <li>
              Use subject line:{" "}
              <span className="font-medium text-zinc-950">{deletionSubject}</span>
            </li>
            <li>
              Include the email address associated with the account and the
              sign-in provider: Google, Apple, or Dropbox.
            </li>
            <li>We will verify ownership and process the request.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-base font-semibold text-zinc-950 mb-2">
            Request Details
          </h2>
          <dl className="grid grid-cols-1 gap-3 text-sm">
            <div className="bg-white border border-zinc-200 shadow-sm rounded-xl p-5">
              <dt className="text-zinc-500 mb-1">App name</dt>
              <dd className="font-medium text-zinc-950">Fileio</dd>
            </div>
            <div className="bg-white border border-zinc-200 shadow-sm rounded-xl p-5">
              <dt className="text-zinc-500 mb-1">Developer</dt>
              <dd className="font-medium text-zinc-950">JonnyLab</dd>
            </div>
            <div className="bg-white border border-zinc-200 shadow-sm rounded-xl p-5">
              <dt className="text-zinc-500 mb-1">Contact email</dt>
              <dd>
                <a
                  href={`mailto:${contactEmail}`}
                  className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
                >
                  {contactEmail}
                </a>
              </dd>
            </div>
            <div className="bg-white border border-zinc-200 shadow-sm rounded-xl p-5">
              <dt className="text-zinc-500 mb-1">Expected response time</dt>
              <dd className="font-medium text-zinc-950">
                We typically process deletion requests within 30 days.
              </dd>
            </div>
          </dl>
        </section>

        <section>
          <h2 className="text-base font-semibold text-zinc-950 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((item) => (
              <div
                key={item.q}
                className="bg-white border border-zinc-200 shadow-sm rounded-xl p-5"
              >
                <p className="font-semibold text-zinc-950 mb-2">{item.q}</p>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-base font-semibold text-zinc-950 mb-2">
            Related Links
          </h2>
          <Link
            href="/fileio/privacy"
            className="text-indigo-600 hover:text-indigo-500 transition-colors"
          >
            Privacy Policy
          </Link>
        </section>
      </div>
    </main>
  );
}
