import AutomationInquiry from "@/components/AutomationInquiry";
import { createPageMetadata } from "@/lib/siteMetadata";

export const metadata = createPageMetadata({
  title: "JonnyLab Automation — Practical n8n Workflows for Small Teams",
  description: "Founder-run workflow automation for solo consultants and small teams. Connect inquiries, Google Sheets, and notifications with a clear scope and human review.",
  path: "/automation",
});

const services = [
  {
    name: "Inquiry intake", label: "Start here", price: "KRW 200,000–400,000", delivery: "4–7 business days",
    description: "Turn incoming inquiries into organized records, with a notification so you know what needs a reply.",
    input: "Email inquiries or form submissions",
    output: "Google Sheets records and a notification",
    includes: "Input review, field mapping, agreed classification rules, notification setup, and initial testing.",
  },
  {
    name: "Monitoring brief", label: "When updates matter", price: "KRW 150,000–250,000", delivery: "3–5 business days",
    description: "Bring relevant updates from agreed sources into one concise, scheduled brief.",
    input: "News feeds and accessible public pages",
    output: "A brief by email or Telegram",
    includes: "Source selection, duplicate filtering, scheduled runs, one delivery channel, and initial testing.",
  },
  {
    name: "Files and reports", label: "For recurring admin", price: "KRW 100,000–300,000", delivery: "2–5 business days",
    description: "Reduce repetitive renaming, merging, and formatting of files with a consistent output.",
    input: "Agreed CSV, Excel, or PDF formats",
    output: "Organized files, a report, and a completion alert",
    includes: "File structure review, processing rules, output format, and initial testing. Feasibility depends on sample files.",
  },
];

const questions = [
  ["Which workflow should I start with?", "Choose a task you repeat often, with a clear input, a consistent rule, and an output you can check. Share an anonymized example; we will confirm what is feasible before quoting."],
  ["Do I have to replace my current tools?", "Usually the aim is to connect tools you already use. Available APIs, account permissions, subscription plans, and sample data determine what can actually be connected."],
  ["Will it send replies or make decisions for me?", "The starter inquiry workflow records information and notifies you. You review and send the reply. Important decisions, approvals, and exceptions remain with a person."],
  ["What happens when AI or an integration gets something wrong?", "We agree on validation rules, test with representative samples, and define how failures and uncertain results are surfaced. AI summaries and classifications still need appropriate review."],
  ["What is included after delivery?", "One minor adjustment within 7 days of delivery, within the agreed scope. New inputs, integrations, outputs, and ongoing maintenance are quoted separately. This is a custom setup service, not a continuously managed SaaS subscription."],
  ["How do pricing and payment work?", "The ranges are indicative one-time setup prices in South Korean won (KRW). Final scope, payment currency, payment method, and delivery dates are agreed in writing before work begins. External software subscriptions, hosting, and API usage are not included."],
  ["How do we work across time zones?", "JonnyLab is based in South Korea and works remotely with English-speaking clients. Start by email; scope, examples, feedback, and handover can be shared asynchronously. Any calls or response expectations are agreed for the project."],
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "JonnyLab Automation",
  serviceType: "Custom workflow automation",
  url: "https://jonnylab.app/automation",
  description: "Fixed-scope n8n automation for inquiry intake, monitoring briefs, and recurring file workflows.",
  provider: { "@type": "Organization", name: "JonnyLab", url: "https://jonnylab.app", email: "support@jonnylab.app" },
};

const section = "mx-auto max-w-6xl px-6 py-16 sm:py-24";
const eyebrow = "text-xs font-bold uppercase tracking-[0.18em] text-indigo-700";
const heading = "mt-4 text-3xl font-bold tracking-tight sm:text-4xl";

export default function AutomationPage() {
  return (
    <main id="top">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <section className={`${section} grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center`}>
        <div>
          <p className={eyebrow}>JonnyLab Automation · Founder-run</p>
          <h1 className="mt-5 max-w-3xl text-5xl font-bold leading-[1.08] tracking-[-0.045em] sm:text-6xl">Less copy-paste.<br /><span className="text-indigo-600">More time</span> for your clients.</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">Practical n8n automations for solo consultants and small teams. Turn incoming inquiries, recurring updates, and files into organized records and useful notifications.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="rounded-xl bg-zinc-950 px-5 py-3.5 text-sm font-semibold text-white hover:bg-indigo-700">Discuss your workflow →</a>
            <a href="#demo" className="rounded-xl border border-zinc-300 bg-white px-5 py-3.5 text-sm font-semibold hover:border-indigo-600">See a sample workflow</a>
          </div>
          <p className="mt-5 text-sm leading-6 text-zinc-500">Based in South Korea. Working remotely with English-speaking clients.</p>
          <ul className="mt-7 space-y-3 text-sm text-zinc-700">
            <li>✓ One clear workflow, not a full rebuild</li>
            <li>✓ Scope, delivery time, and a fixed quote agreed first</li>
            <li>✓ Human review where decisions matter</li>
          </ul>
        </div>
        <div className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-[0_20px_70px_rgba(39,39,42,0.07)] sm:p-8">
          <p className={eyebrow}>A focused first project</p>
          <ol className="mt-6 space-y-3">
            {[["01", "An inquiry arrives", "An agreed email or form is the starting point."], ["02", "The details are organized", "Key fields become a row in Google Sheets."], ["03", "You know what needs attention", "A notification helps you review and follow up."]].map(([number, title, body]) => (
              <li key={number} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                <p className="text-xs font-bold text-indigo-600">{number}</p><h2 className="mt-2 font-bold">{title}</h2><p className="mt-2 text-sm leading-6 text-zinc-600">{body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-5 text-xs leading-5 text-zinc-500">Illustrative workflow · sample data, not a client case study.</p>
        </div>
      </section>

      <nav aria-label="Automation page sections" className="border-y border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-x-7 gap-y-3 px-6 py-5 text-sm font-medium text-zinc-600">
          <a href="#services">Services</a><a href="#demo">Sample workflow</a><a href="#process">How it works</a><a href="#faq">FAQ</a><a href="#contact" className="text-indigo-700">Get in touch</a>
        </div>
      </nav>

      <section id="services" className={`${section} scroll-mt-24`}>
        <p className={eyebrow}>Clear scope. Useful output.</p>
        <h2 className={heading}>Start with one repetitive task.</h2>
        <p className="mt-4 max-w-2xl leading-7 text-zinc-600">Inquiry intake is a practical starting point. Monitoring and file workflows are available when they better match the task you repeat.</p>
        <div className="mt-9 grid gap-5 lg:grid-cols-3">
          {services.map((service, index) => (
            <article key={service.name} className={`flex flex-col rounded-3xl border bg-white p-6 sm:p-7 ${index === 0 ? "border-indigo-300 ring-1 ring-indigo-100" : "border-zinc-200"}`}>
              <p className={eyebrow}>{service.label}</p><h3 className="mt-4 text-2xl font-bold">{service.name}</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-600">{service.description}</p>
              <dl className="mt-6 space-y-4 text-sm">
                {[["Input", service.input], ["Output", service.output], ["Included", service.includes]].map(([key, value]) => <div key={key}><dt className="font-semibold">{key}</dt><dd className="mt-1 leading-6 text-zinc-600">{value}</dd></div>)}
              </dl>
              <div className="mt-auto pt-7"><p className="text-lg font-bold">{service.price}</p><p className="mt-2 text-sm text-zinc-500">Usually {service.delivery}</p><a href="#contact" className="mt-5 inline-block text-sm font-semibold text-indigo-700 hover:underline">Discuss this workflow →</a></div>
            </article>
          ))}
        </div>
        <p className="mt-6 max-w-4xl text-sm leading-7 text-zinc-500">Indicative one-time setup prices in South Korean won (KRW), not a subscription. Final scope, currency, payment method, and dates are agreed before work begins. One minor revision within 7 days of delivery is included. External subscriptions, hosting, API usage, expanded scope, and ongoing maintenance are separate.</p>
      </section>

      <section id="demo" className="scroll-mt-24 border-y border-zinc-200 bg-white">
        <div className={section}>
          <p className={eyebrow}>Sample workflow</p><h2 className={heading}>A new inquiry, ready for a human reply.</h2>
          <p className="mt-4 text-sm text-zinc-500">Illustrative example · sample data, not a client case study or a live integration.</p>
          <div className="mt-9 grid gap-5 lg:grid-cols-3">
            <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6"><p className={eyebrow}>01 · Incoming email</p><h3 className="mt-5 font-bold">New website project</h3><p className="mt-3 text-sm leading-7 text-zinc-600">“Hi, we need a new website for our studio. Could you send an estimate and let us know what you need from us?”</p><p className="mt-5 text-xs text-zinc-500">From: Alex · Riverbend Studio (sample)</p></div>
            <div className="rounded-3xl border border-zinc-200 p-6"><p className={eyebrow}>02 · Google Sheets record</p><dl className="mt-5 divide-y divide-zinc-100 text-sm">{[["Contact", "Alex"], ["Company", "Riverbend Studio"], ["Type", "Quote request"], ["Status", "Needs review"]].map(([label, value]) => <div key={label} className="flex flex-wrap justify-between gap-2 py-3"><dt className="text-zinc-500">{label}</dt><dd className="font-medium">{value}</dd></div>)}</dl></div>
            <div className="rounded-3xl border border-indigo-200 bg-indigo-50 p-6"><p className={eyebrow}>03 · Notification</p><h3 className="mt-5 font-bold">An inquiry needs your review.</h3><p className="mt-3 text-sm leading-7 text-zinc-700">Alex from Riverbend Studio requested a quote. The details are in your sheet. Review the request and decide how to reply.</p><p className="mt-5 rounded-xl bg-white p-3 text-sm font-semibold text-indigo-800">No automatic client reply.</p></div>
          </div>
        </div>
      </section>

      <section id="process" className={`${section} scroll-mt-24`}>
        <p className={eyebrow}>How it works</p><h2 className={heading}>Understand first. Build second.</h2>
        <ol className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{[["Describe", "Send the task, tools, and desired result by email. An anonymized example helps."], ["Agree", "Confirm inputs, outputs, human checks, price, timing, and acceptance criteria in writing."], ["Build & test", "Test the agreed workflow with representative samples before connecting approved real accounts."], ["Hand over", "Receive the workflow and operating notes, plus one minor adjustment within 7 days."]].map(([title, copy], index) => <li key={title} className="border-t border-zinc-300 pt-5"><p className={eyebrow}>0{index + 1}</p><h3 className="mt-4 text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-7 text-zinc-600">{copy}</p></li>)}</ol>
        <div className="mt-12 rounded-3xl bg-zinc-950 p-7 text-white sm:p-10"><h3 className="text-2xl font-bold">Your accounts. Clear rules. Visible exceptions.</h3><p className="mt-4 max-w-3xl leading-7 text-zinc-300">Customer-owned accounts are preferred. Access is limited to the work we agree on. We define error alerts and review steps before launch, and keep important approvals with you. No unverified integrations or guaranteed time savings.</p></div>
      </section>

      <section id="faq" className="scroll-mt-24 border-y border-zinc-200 bg-white"><div className={section}><p className={eyebrow}>Before you get in touch</p><h2 className={heading}>A few useful answers.</h2><div className="mt-8 divide-y divide-zinc-200">{questions.map(([question, answer]) => <details key={question} className="group py-5"><summary className="cursor-pointer text-base font-semibold focus-visible:outline-2 focus-visible:outline-indigo-600">{question}</summary><p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-600">{answer}</p></details>)}</div></div></section>

      <section id="contact" className={`${section} scroll-mt-24 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]`}>
        <div><p className={eyebrow}>Start with a short email</p><h2 className={heading}>What do you repeat every week?</h2><p className="mt-5 leading-8 text-zinc-600">Tell me what comes in, what you do with it, and what you want to happen. We will agree on a realistic first workflow before any work begins.</p><a href="mailto:support@jonnylab.app" className="mt-6 inline-block break-all text-lg font-semibold text-indigo-700 hover:underline">support@jonnylab.app</a><p className="mt-4 text-sm leading-7 text-zinc-500">Remote, email-first collaboration in English. No account or booking required.</p></div>
        <AutomationInquiry />
      </section>
    </main>
  );
}
