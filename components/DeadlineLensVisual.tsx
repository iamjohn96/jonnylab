export default function DeadlineLensVisual({ korean = false }: { korean?: boolean }) {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-md overflow-hidden rounded-[2rem] border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-amber-50 p-6 shadow-xl shadow-indigo-950/10 sm:p-8">
      <div className="absolute -right-16 -top-20 h-44 w-44 rounded-full bg-indigo-200/50 blur-3xl" />
      <div className="relative rounded-2xl border border-zinc-200 bg-white p-5 shadow-lg">
        <div className="mb-5 flex items-center justify-between">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-200" />
          </div>
          <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-indigo-700">
            {korean ? "기기 내 처리" : "On device"}
          </span>
        </div>
        <div className="space-y-3">
          <div className="h-2.5 w-4/5 rounded-full bg-zinc-200" />
          <div className="h-2.5 w-full rounded-full bg-zinc-100" />
          <div className="h-2.5 w-3/5 rounded-full bg-zinc-100" />
        </div>
        <div className="mt-6 rounded-xl border border-indigo-100 bg-indigo-50 p-4">
          <div className="mb-2 flex items-center justify-between gap-4">
            <p className="text-xs font-semibold text-indigo-950">{korean ? "제출 마감" : "Submission deadline"}</p>
            <span className="rounded-md bg-white px-2 py-1 text-xs font-bold text-indigo-700">SEP 18</span>
          </div>
          <div className="h-2 w-2/3 rounded-full bg-indigo-200" />
        </div>
      </div>
      <div className="relative -mt-3 ml-auto flex w-4/5 items-center gap-3 rounded-2xl border border-amber-200 bg-white p-4 shadow-lg">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-lg">●</div>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-bold text-zinc-950">{korean ? "마감일 알림" : "Deadline reminder"}</p>
          <p className="mt-1 text-[11px] text-zinc-500">{korean ? "기기에서 원하는 시간에" : "At the time you choose"}</p>
        </div>
      </div>
    </div>
  );
}
