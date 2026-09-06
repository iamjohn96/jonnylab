"use client";

import { useState } from "react";

export default function AutomationInquiry() {
  const [status, setStatus] = useState("");
  const [draft, setDraft] = useState("");

  function prepare(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const text = [
      "Hello JonnyLab,",
      "I would like to discuss a workflow automation project.",
      "",
      `Name/company: ${String(data.get("name")).trim()}`,
      `Reply email: ${String(data.get("email")).trim()}`,
      `Current tools: ${String(data.get("tools")).trim() || "To discuss"}`,
      "",
      "The repetitive task and the result I need:",
      String(data.get("workflow")).trim(),
    ].join("\n");
    setDraft(text);
    setStatus("Draft ready below. Nothing has been sent.");
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(draft);
      setStatus("Copied. Paste the draft into an email to support@jonnylab.app, review it, and send when ready.");
    } catch {
      setStatus("Copy was unavailable. Select the draft text below and copy it manually.");
    }
  }

  const field = "mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-base text-zinc-950 focus:border-indigo-600 focus:outline-2 focus:outline-indigo-600";

  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8">
      <form onSubmit={prepare} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="text-sm font-semibold">Name or company
            <input name="name" autoComplete="name" required maxLength={100} className={field} placeholder="Jane, Riverbend Studio" />
          </label>
          <label className="text-sm font-semibold">Your email
            <input name="email" type="email" autoComplete="email" required maxLength={254} className={field} placeholder="you@example.com" />
          </label>
        </div>
        <label className="block text-sm font-semibold">Tools you use today <span className="font-normal text-zinc-500">(optional)</span>
          <input name="tools" maxLength={200} className={field} placeholder="Gmail, Google Sheets, Telegram…" />
        </label>
        <label className="block text-sm font-semibold">What do you repeat, and what result do you need?
          <textarea name="workflow" required maxLength={1200} rows={4} className={field} placeholder="I copy incoming inquiries into a sheet. I would like each inquiry recorded and urgent requests flagged for me to review." />
        </label>
        <p className="text-sm leading-6 text-zinc-500">This form prepares a draft in your browser. It does not submit your details to JonnyLab. Do not include passwords, API keys, or sensitive customer data.</p>
        <button type="submit" className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600">Prepare inquiry draft</button>
      </form>
      <p role="status" aria-live="polite" className="mt-4 text-sm leading-6 text-indigo-800">{status}</p>
      {draft && (
        <div className="mt-4 border-t border-zinc-200 pt-5">
          <label className="block text-sm font-semibold">Your email draft
            <textarea readOnly value={draft} rows={10} className={field} onFocus={(event) => event.currentTarget.select()} />
          </label>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href={`mailto:support@jonnylab.app?subject=${encodeURIComponent("Automation project inquiry")}&body=${encodeURIComponent(draft)}`} className="rounded-xl bg-zinc-950 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-700">Open email draft</a>
            <button type="button" onClick={copy} className="rounded-xl border border-zinc-300 px-5 py-3 text-sm font-semibold hover:bg-zinc-50">Copy inquiry text</button>
          </div>
          <p className="mt-3 text-sm leading-6 text-zinc-500">Your email app opens when you choose “Open email draft”. Review and send it there. No email app? Copy the text into your webmail and send to support@jonnylab.app.</p>
        </div>
      )}
    </div>
  );
}
