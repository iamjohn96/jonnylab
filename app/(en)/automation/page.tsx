import AutomationInquiry from "@/components/AutomationInquiry";
import { WorkflowIcon } from "@/components/MarketingScene";
import styles from "@/components/marketing.module.css";
import { createPageMetadata } from "@/lib/siteMetadata";

export const metadata = createPageMetadata({
  title: "JonnyLab Automation — Practical n8n Workflows for Small Teams",
  description: "Founder-run workflow automation for solo consultants and small teams. Connect inquiries, Google Sheets, and notifications with a clear scope and human review.",
  path: "/automation",
});

const services = [
  {
    name: "Inquiry Intake Setup", label: "Start here", price: "US$500 · one-time", delivery: "4–7 business days",
    description: "Turn incoming inquiries into organized records, with a notification so you know what needs a reply.",
    input: "One form with a stable submission ID; up to six agreed fields",
    output: "One Google Sheets tab and one internal notification destination",
    includes: "Field mapping, required-field checks, duplicate handling, visible failures, a retry guide, acceptance testing, and handover.",
  },
  {
    name: "Monitoring brief", label: "When updates matter", price: "Custom USD quote", delivery: "3–5 business days",
    description: "Bring relevant updates from agreed sources into one concise, scheduled brief.",
    input: "News feeds and accessible public pages",
    output: "A brief by email or Telegram",
    includes: "Source selection, duplicate filtering, scheduled runs, one delivery channel, and initial testing.",
  },
  {
    name: "Files and reports", label: "For recurring admin", price: "Custom USD quote", delivery: "2–5 business days",
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
  ["How do pricing and payment work?", "Inquiry Intake Setup is US$500 (USD) for one agreed form, up to six fields, one Google Sheets tab, and one internal notification destination. Proposed milestones are US$250 to start and US$250 after acceptance and handover. Final scope, applicable taxes, payment method, and delivery dates are confirmed in writing. External software costs and other workflows are quoted separately."],
  ["How do we work across time zones?", "JonnyLab is based in South Korea and works remotely with English-speaking clients. Start by email; scope, examples, feedback, and handover can be shared asynchronously. Any calls or response expectations are agreed for the project."],
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "JonnyLab Automation",
  serviceType: "Custom workflow automation",
  url: "https://jonnylab.app/automation",
  description: "Fixed-scope n8n automation for inquiry intake, monitoring briefs, and recurring file workflows.",
  provider: { "@type": "Organization", name: "JonnyLab", url: "https://jonnylab.app", email: "jonny@jonnylab.app" },
};

const section = styles.shell;
const eyebrow = styles.eyebrow;
const heading = styles.heading;

export default function AutomationPage() {
  return (
    <main id="top" className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <section className={`${section} ${styles.hero}`}>
        <div>
          <p className={eyebrow}>JonnyLab Automation · Founder-run</p>
          <h1 className={styles.heroTitle}>Less copy-paste.<br /><span>More time for your clients.</span></h1>
          <p className={styles.intro}>Practical n8n automations for solo consultants and small teams. Turn incoming inquiries, recurring updates, and files into organized records and useful notifications.</p>
          <div className={styles.actions}>
            <a href="#contact" className={styles.primary}>Discuss your workflow →</a>
            <a href="/automation-demo/index.html" className={styles.secondary}>Try the intake demo</a>
          </div>
          <p className={styles.caption}>Based in South Korea. Working remotely with English-speaking clients.</p>
        </div>
        <div className={styles.workflow}>
          <p className={eyebrow}>A focused first project</p>
          <ol className={styles.workflowSteps}>
            {[["01", "An inquiry arrives", "One agreed form is the starting point."], ["02", "The details are organized", "Key fields become a row in Google Sheets."], ["03", "You know what needs attention", "A notification helps you review and follow up."]].map(([number, title, body], index) => (
              <li key={number}>
                <div className={styles.workflowStepTop}><WorkflowIcon step={index} /><span className={styles.stepNumber}>{number}</span></div>
                <h2>{title}</h2><p>{body}</p>
              </li>
            ))}
          </ol>
          <p className={styles.caption}>Illustrative workflow · sample data, not a client case study.</p>
        </div>
        <ul className={styles.assurances}>
          <li>✓ One clear workflow, not a full rebuild</li>
          <li>✓ Scope, delivery time, and a fixed quote agreed first</li>
          <li>✓ Human review where decisions matter</li>
        </ul>
      </section>

      <nav aria-label="Automation page sections" className={styles.sectionNav}>
        <div>
          <a href="#services">Services</a><a href="#demo">Sample workflow</a><a href="#process">How it works</a><a href="#faq">FAQ</a><a href="#contact" className="text-indigo-700">Get in touch</a>
        </div>
      </nav>

      <section id="services" className={`${section} scroll-mt-24`}>
        <div className={styles.splitHeading}>
          <div><p className={eyebrow}>Clear scope. Useful output.</p><h2 className={heading}>Start with one repetitive task.</h2></div>
          <p>Inquiry intake is a practical starting point. Monitoring and file workflows are available when they better match the task you repeat.</p>
        </div>
        <div className={styles.services}>
          {services.map((service, index) => (
            <article key={service.name} className={styles.service}>
              <div className={styles.serviceTop}><p className={eyebrow}>{service.label}</p><WorkflowIcon step={index} /></div>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <dl>
                {[["Input", service.input], ["Output", service.output], ["Included", service.includes]].map(([key, value]) => <div key={key}><dt>{key}</dt><dd>{value}</dd></div>)}
              </dl>
              <div className={styles.price}><p>{service.price}</p><p>Usually {service.delivery}</p><a href="#contact" className={index === 0 ? styles.primary : styles.secondary}>Discuss this workflow →</a></div>
            </article>
          ))}
        </div>
        <p className={styles.terms}>Inquiry Intake Setup is US$500 (USD), with no recurring JonnyLab fee. Its 4–7 business day estimate starts after scope and access are agreed. US$250 to start; US$250 after acceptance and handover. Final taxes and payment details are confirmed in writing. One minor adjustment within 7 days is included. External software costs, expanded scope, and ongoing maintenance are separate. Other workflows receive a custom USD quote.</p>
      </section>

      <section id="demo" className={styles.softSection}>
        <div className={section}>
          <p className={eyebrow}>Sample workflow</p><h2 className={heading}>A new inquiry, ready for a human reply.</h2>
          <p className={styles.caption}>Illustrative example · sample data, not a client case study or a live integration.</p><a href="/automation-demo/index.html" className={styles.textLink}>Try duplicate handling and failure scenarios →</a>
          <div className={styles.demoGrid}>
            <div className={styles.demoCard}><p className={eyebrow}>01 · Form submission</p><h3>New website project</h3><p>“Hi, we need a new website for our studio. Could you send an estimate and let us know what you need from us?”</p><p>From: Alex · Riverbend Studio (sample)</p></div>
            <div className={styles.demoCard}><p className={eyebrow}>02 · Google Sheets record</p><dl>{[["Contact", "Alex"], ["Company", "Riverbend Studio"], ["Type", "Quote request"], ["Status", "Needs review"]].map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></div>
            <div className={styles.demoCard}><p className={eyebrow}>03 · Notification</p><h3>An inquiry needs your review.</h3><p>Alex from Riverbend Studio requested a quote. The details are in your sheet. Review the request and decide how to reply.</p><p className={styles.reviewNote}>No automatic client reply.</p></div>
          </div>
        </div>
      </section>

      <section id="process" className={`${section} scroll-mt-24`}>
        <p className={eyebrow}>How it works</p><h2 className={heading}>Understand first. Build second.</h2>
        <ol className={styles.process}>{[["Describe", "Send the task, tools, and desired result by email. An anonymized example helps."], ["Agree", "Confirm inputs, outputs, human checks, price, timing, and acceptance criteria in writing."], ["Build & test", "Test the agreed workflow with representative samples before connecting approved real accounts."], ["Hand over", "Receive the workflow and operating notes, plus one minor adjustment within 7 days."]].map(([title, copy], index) => <li key={title}><p className={eyebrow}>0{index + 1}</p><h3>{title}</h3><p>{copy}</p></li>)}</ol>
        <div className={styles.trustNote}><h3>Your accounts. Clear rules. Visible exceptions.</h3><p>Customer-owned accounts are preferred. Access is limited to the work we agree on. We define error alerts and review steps before launch, and keep important approvals with you. No unverified integrations or guaranteed time savings.</p></div>
      </section>

      <section id="faq" className={styles.softSection}><div className={`${section} ${styles.faq}`}><div><p className={eyebrow}>Before you get in touch</p><h2 className={heading}>A few useful answers.</h2></div><div className={styles.faqList}>{questions.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>

      <section id="contact" className={`${section} ${styles.contact}`}>
        <div><p className={eyebrow}>Start with a short email</p><h2 className={heading}>What do you repeat every week?</h2><p>Tell me what comes in, what you do with it, and what you want to happen. We will agree on a realistic first workflow before any work begins.</p><a href="mailto:jonny@jonnylab.app" className={styles.textLink}>jonny@jonnylab.app</a><p>Remote, email-first collaboration in English. No account or booking required.</p></div>
        <AutomationInquiry />
      </section>
    </main>
  );
}
