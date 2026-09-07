"use client";

import { FormEvent, useMemo, useState } from "react";
import { findSignalAnswers } from "@/lib/signalSearch";

const suggestions = [
  "OpenAI isn't working",
  "Is this renewal text a scam?",
  "사진 공유 전에 무엇을 확인해야 하나요?",
];

function SearchIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-5 w-5">
      <circle cx="8.5" cy="8.5" r="5.25" stroke="currentColor" strokeWidth="1.6" />
      <path d="m12.5 12.5 4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4 w-4">
      <path d="M6 14 14 6M7 6h7v7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function trackSearch(resultCount: number) {
  window.gtag?.("event", "signal_search_submitted", {
    result_state: resultCount > 0 ? "matched" : "empty",
    result_count: resultCount,
  });
}

function formatReviewedDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export default function SignalSearch() {
  const [draft, setDraft] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");
  const results = useMemo(() => findSignalAnswers(submittedQuery), [submittedQuery]);
  const hasSearched = Boolean(submittedQuery.trim());

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const query = draft.trim();
    if (!query) return;
    const matches = findSignalAnswers(query);
    setSubmittedQuery(query);
    trackSearch(matches.length > 0 ? 1 : 0);
  }

  function selectSuggestion(suggestion: string) {
    const matches = findSignalAnswers(suggestion);
    setDraft(suggestion);
    setSubmittedQuery(suggestion);
    trackSearch(matches.length > 0 ? 1 : 0);
  }

  return (
    <section aria-labelledby="signals-title" className="border-b border-zinc-200 bg-[#fafbff]">
      <div className="mx-auto max-w-6xl px-6 py-10 sm:py-12">
        <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-700">Small answers, real next steps</p>
            <h2 id="signals-title" className="mt-3 text-2xl font-bold tracking-[-0.03em] text-zinc-950 sm:text-3xl">
              What&apos;s happening in your digital life?
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Search a few reviewed answers for the moments that interrupt your day. We separate what is known, what is not, and what to try next.
            </p>
          </div>

          <div className="rounded-2xl border border-indigo-200 bg-white p-3 shadow-[0_12px_32px_rgba(79,70,229,0.08)] sm:p-4">
            <form role="search" onSubmit={submitSearch}>
              <label htmlFor="signal-search" className="sr-only">Describe the problem you are having</label>
              <div className="flex rounded-xl border border-zinc-300 bg-white p-1 shadow-sm transition focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-100">
                <div className="flex shrink-0 items-center px-2.5 text-zinc-500"><SearchIcon /></div>
                <input
                  id="signal-search"
                  value={draft}
                  onChange={(event) => setDraft(event.target.value)}
                  placeholder="For example: OpenAI isn't working"
                  className="min-w-0 flex-1 bg-transparent py-2 text-sm text-zinc-950 outline-none placeholder:text-zinc-400"
                  autoComplete="off"
                />
                <button type="submit" className="rounded-lg bg-zinc-950 px-3.5 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:px-4">
                  Search
                </button>
              </div>
            </form>

            <div className="mt-3 flex flex-wrap gap-1.5" aria-label="Suggested questions">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => selectSuggestion(suggestion)}
                  className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1.5 text-left text-xs font-semibold text-zinc-700 transition hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {suggestion}
                </button>
              ))}
            </div>

            <p className="mt-2 text-xs font-medium text-zinc-500">English and Korean queries work.</p>

            <p aria-live="polite" className="sr-only">
              {hasSearched ? (results.length ? "One reviewed answer found." : "No reviewed answer found.") : ""}
            </p>

            <div className="mt-3">
              {!hasSearched ? (
                <p className="border-t border-zinc-100 pt-3 text-xs leading-5 text-zinc-500">
                  This is a small, reviewed answer library—not live web search or an AI chat. If we do not have a reviewed answer, we&apos;ll say so.
                </p>
              ) : results.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 px-5 py-6">
                  <p className="font-semibold text-zinc-950">We don&apos;t have a reviewed answer for that yet.</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">Try a more specific description, or choose one of the suggested questions above. We won&apos;t invent an answer.</p>
                </div>
              ) : (
                <article className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 sm:p-6">
                  <h3 className="text-lg font-bold tracking-tight text-zinc-950">{results[0].title}</h3>
                  <p className="mt-2 leading-7 text-zinc-700">{results[0].summary}</p>
                  <dl className="mt-5 grid gap-4 border-t border-zinc-200 pt-5 text-sm leading-6 sm:grid-cols-3">
                    <div><dt className="font-bold text-emerald-800">Confirmed</dt><dd className="mt-1 text-zinc-600">{results[0].confirmed}</dd></div>
                    <div><dt className="font-bold text-amber-800">Still uncertain</dt><dd className="mt-1 text-zinc-600">{results[0].uncertain}</dd></div>
                    <div><dt className="font-bold text-indigo-800">Try now</dt><dd className="mt-1 text-zinc-600">{results[0].nextStep}</dd></div>
                  </dl>
                  <p className="mt-4 text-xs font-medium text-zinc-500">Reviewed {formatReviewedDate(results[0].reviewedAt)}</p>
                  <a href={results[0].source.href} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-700 transition hover:text-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    {results[0].source.label} <ArrowUpRightIcon />
                  </a>
                </article>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
