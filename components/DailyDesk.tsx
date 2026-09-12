"use client";

import { FormEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";
import styles from "@/components/daily-desk.module.css";

type Mode = "local" | "assisted" | "human";
type Cadence = "daily" | "weekdays" | "monthly";
type Status = "pending" | "done" | "skipped";

type Routine = {
  id: string;
  title: string;
  description: string;
  mode: Mode;
  cadence: Cadence;
  weekdays: number[];
  enabled: boolean;
};

type Entry = Routine & { status: Status; note: string; updatedAt: string | null };
type Day = { date: string; note: string; closedAt: string | null; entries: Entry[] };
type DeskState = { routines: Routine[]; days: Record<string, Day> };
type StorageState = { phase: "connecting" | "ready" | "saving" | "error" | "conflict" };

const modeLabel: Record<Mode, string> = {
  local: "로컬 자동화",
  assisted: "자동화 + 내 판단",
  human: "내가 하는 일",
};

const weekdayNames = ["일", "월", "화", "수", "목", "금", "토"];

const starterRoutines: Routine[] = [
  { id: "direction", title: "오늘의 방향 정하기", description: "작업 상태를 보고 오늘 집중할 한 가지를 정해요.", mode: "human", cadence: "daily", weekdays: [], enabled: true },
  { id: "signals", title: "고객·운영 신호 확인", description: "새 문의, 리뷰, 기다리던 답변에 변화가 있는지 확인해요.", mode: "assisted", cadence: "daily", weekdays: [], enabled: true },
  { id: "build", title: "제품 개발에 집중", description: "진행 중인 제품에서 의미 있는 한 구간을 이어가요.", mode: "assisted", cadence: "daily", weekdays: [], enabled: true },
  { id: "review", title: "결과 검토와 결정", description: "구현 결과와 검증 근거를 읽고 필요한 결정을 내려요.", mode: "human", cadence: "daily", weekdays: [], enabled: true },
  { id: "distribution", title: "제품 알리기", description: "고객에게 닿는 글과 데모, 유통 채널을 살펴봐요.", mode: "assisted", cadence: "daily", weekdays: [], enabled: true },
  { id: "learning", title: "학습과 영어 연습", description: "관심 주제를 이해하고, 읽거나 말하며 직접 연습해요.", mode: "human", cadence: "daily", weekdays: [], enabled: true },
  { id: "closing", title: "기록하고 하루 마무리", description: "한 줄을 남기고 오늘의 일을 내려놓아요.", mode: "local", cadence: "daily", weekdays: [], enabled: true },
];

function seoulDate(now = new Date()) {
  return new Intl.DateTimeFormat("sv-SE", { timeZone: "Asia/Seoul", year: "numeric", month: "2-digit", day: "2-digit" }).format(now);
}

function shiftDate(date: string, amount: number) {
  const next = new Date(`${date}T12:00:00Z`);
  next.setUTCDate(next.getUTCDate() + amount);
  return next.toISOString().slice(0, 10);
}

function dateParts(date: string) {
  return new Date(`${date}T12:00:00Z`);
}

function displayDate(date: string, long = false) {
  return new Intl.DateTimeFormat("ko-KR", {
    timeZone: "UTC", year: long ? "numeric" : undefined, month: "long", day: "numeric", weekday: long ? "long" : undefined,
  }).format(dateParts(date));
}

function isDue(routine: Routine, date: string) {
  const day = dateParts(date);
  return routine.enabled && (
    routine.cadence === "daily" ||
    (routine.cadence === "weekdays" && routine.weekdays.includes(day.getUTCDay())) ||
    (routine.cadence === "monthly" && day.getUTCDate() === 1)
  );
}

function makeDay(routines: Routine[], date: string): Day {
  return {
    date,
    note: "",
    closedAt: null,
    entries: routines.filter((routine) => isDue(routine, date)).map((routine) => ({ ...routine, weekdays: [...routine.weekdays], status: "pending", note: "", updatedAt: null })),
  };
}

function dayFor(state: DeskState, date: string) {
  return state.days[date] ?? makeDay(state.routines, date);
}

function counts(day: Day) {
  return day.entries.reduce((result, entry) => ({ ...result, [entry.status]: result[entry.status] + 1 }), { pending: 0, done: 0, skipped: 0 } as Record<Status, number>);
}

function cadenceLabel(routine: Routine) {
  if (routine.cadence === "daily") return "매일";
  if (routine.cadence === "monthly") return "매월 1일";
  return `${routine.weekdays.map((day) => weekdayNames[day]).join("·")}요일`;
}

function blankRoutine(): Routine {
  return { id: "", title: "", description: "", mode: "human", cadence: "daily", weekdays: [1, 2, 3, 4, 5], enabled: true };
}

function initialDesk(): DeskState {
  return { routines: starterRoutines.map((routine) => ({ ...routine, weekdays: [...routine.weekdays] })), days: {} };
}

function isDeskState(value: unknown): value is DeskState {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;
  const candidate = value as Partial<DeskState>;
  return Array.isArray(candidate.routines) && Boolean(candidate.days) && typeof candidate.days === "object" && !Array.isArray(candidate.days);
}

export default function DailyDesk() {
  const today = useMemo(() => seoulDate(), []);
  const [desk, setDesk] = useState<DeskState>(initialDesk);
  const [selectedDate, setSelectedDate] = useState(today);
  const [view, setView] = useState<"today" | "history" | "routines">("today");
  const [activeId, setActiveId] = useState<string | null>(null);
  const [editing, setEditing] = useState<Routine | null | undefined>(undefined);
  const [showExport, setShowExport] = useState(false);
  const [storage, setStorage] = useState<StorageState>({ phase: "connecting" });
  const revisionRef = useRef(0);
  const lastSavedRef = useRef("");
  const pendingDeskRef = useRef(desk);
  const hydratedRef = useRef(false);
  const savingRef = useRef(false);

  const loadState = useCallback(async () => {
    hydratedRef.current = false;
    try {
      const response = await fetch("/daily-desk/api/state", { credentials: "same-origin", cache: "no-store" });
      if (!response.ok) throw new Error(`load failed: ${response.status}`);
      const payload = await response.json() as { revision?: unknown; state?: unknown };
      if (!Number.isSafeInteger(payload.revision) || (payload.state !== null && !isDeskState(payload.state))) throw new Error("invalid stored state");

      const next = payload.state === null ? initialDesk() : payload.state as DeskState;
      revisionRef.current = payload.revision as number;
      lastSavedRef.current = JSON.stringify(next);
      pendingDeskRef.current = next;
      setDesk(next);
      hydratedRef.current = true;
      setStorage({ phase: "ready" });
    } catch {
      setStorage({ phase: "error" });
    }
  }, []);

  const saveState = useCallback(async () => {
    if (!hydratedRef.current || savingRef.current) return;
    const snapshot = pendingDeskRef.current;
    const serialized = JSON.stringify(snapshot);
    if (serialized === lastSavedRef.current) return;

    savingRef.current = true;
    setStorage({ phase: "saving" });
    try {
      const response = await fetch("/daily-desk/api/state", {
        method: "PUT",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ revision: revisionRef.current, state: snapshot }),
      });
      if (response.status === 409) {
        setStorage({ phase: "conflict" });
        return;
      }
      if (!response.ok) throw new Error(`save failed: ${response.status}`);
      const payload = await response.json() as { revision?: unknown };
      if (!Number.isSafeInteger(payload.revision)) throw new Error("invalid save response");
      revisionRef.current = payload.revision as number;
      lastSavedRef.current = serialized;
      setStorage({ phase: "ready" });
    } catch {
      setStorage({ phase: "error" });
    } finally {
      savingRef.current = false;
    }
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => { void loadState(); }, 0);
    return () => window.clearTimeout(timer);
  }, [loadState]);

  useEffect(() => {
    pendingDeskRef.current = desk;
    if (!hydratedRef.current || storage.phase !== "ready" || JSON.stringify(desk) === lastSavedRef.current) return;
    const timer = window.setTimeout(() => { void saveState(); }, 650);
    return () => window.clearTimeout(timer);
  }, [desk, saveState, storage.phase]);

  const day = dayFor(desk, selectedDate);
  const storageLocked = storage.phase === "connecting" || storage.phase === "error" || storage.phase === "conflict";
  const locked = Boolean(day.closedAt) || selectedDate > today || storageLocked;
  const pendingEntry = day.entries.find((entry) => entry.status === "pending");
  const activeEntry = day.entries.find((entry) => entry.id === activeId) ?? pendingEntry ?? day.entries[0];

  const updateDay = (update: (current: Day) => Day) => {
    setDesk((current) => {
      const currentDay = dayFor(current, selectedDate);
      return { ...current, days: { ...current.days, [selectedDate]: update(currentDay) } };
    });
  };

  const updateStatus = (id: string, status: Status, advance = false) => {
    if (locked) return;
    const now = new Date().toISOString();
    const nextEntries = day.entries.map((entry) => entry.id === id ? { ...entry, status, updatedAt: now } : entry);
    updateDay((current) => ({ ...current, entries: current.entries.map((entry) => entry.id === id ? { ...entry, status, updatedAt: now } : entry) }));
    if (advance) setActiveId(nextEntries.find((entry) => entry.status === "pending")?.id ?? id);
  };

  const changeDate = (date: string) => {
    if (!/^20\d{2}-\d{2}-\d{2}$/.test(date)) return;
    setSelectedDate(date);
    setActiveId(null);
    setView("today");
  };

  const exportPayload = JSON.stringify({
    format: "daily-desk-export-v1",
    createdAt: new Date().toISOString(),
    timeZone: "Asia/Seoul",
    persistence: "private account storage; this file is a separate backup",
    ...desk,
  }, null, 2);
  const downloadExport = () => {
    const url = URL.createObjectURL(new Blob([exportPayload], { type: "application/json" }));
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `daily-desk-${today}.json`;
    anchor.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 0);
  };

  return (
    <main className={styles.page}>
      <a className={styles.skipLink} href="#daily-desk-main">본문으로 이동</a>
      <header className={styles.header}>
        <div className={styles.brand}><span aria-hidden="true" className={styles.brandMark}>J</span><span>JonnyLab<small>PERSONAL WORKSPACE</small></span></div>
        <div className={styles.headerStatus}><span className={styles.dot} aria-hidden="true" />{storage.phase === "connecting" ? "보호된 저장소 연결 중" : storage.phase === "saving" ? "보호된 저장소에 저장 중" : storage.phase === "error" ? "저장소 연결 실패" : storage.phase === "conflict" ? "다른 기록과 충돌" : "보호된 저장소 · 한국 시간"}</div>
        <button type="button" className={styles.exportButton} onClick={() => setShowExport(true)}>JSON 백업</button>
      </header>

      <div className={styles.notice} role="status" aria-live="polite"><span>{storage.phase === "connecting" ? <><strong>보호된 기록을 불러오는 중입니다.</strong> 연결이 끝나면 기록을 시작할 수 있어요.</> : storage.phase === "saving" ? <><strong>변경 내용을 저장하고 있습니다.</strong> 잠시 후 자동으로 완료됩니다.</> : storage.phase === "error" ? <><strong>보호된 저장소에 연결하지 못했습니다.</strong> 현재 화면의 변경은 저장되지 않았을 수 있어요.</> : storage.phase === "conflict" ? <><strong>다른 탭에서 기록이 변경되었습니다.</strong> JSON 백업이 필요하면 먼저 저장한 뒤 최신 기록을 다시 불러오세요.</> : <><strong>Access로 보호된 개인 기록입니다.</strong> 로그인한 이메일별로 분리되어 저장됩니다.</>}</span>{storage.phase === "error" && <button type="button" className={styles.noticeAction} onClick={() => { if (hydratedRef.current) setStorage({ phase: "ready" }); else { setStorage({ phase: "connecting" }); void loadState(); } }}>다시 시도</button>}{storage.phase === "conflict" && <button type="button" className={styles.noticeAction} onClick={() => { setStorage({ phase: "connecting" }); void loadState(); }}>최신 기록 불러오기</button>}</div>

      <div className={styles.shell}>
        <nav className={styles.nav} aria-label="Daily Desk">
          {([ ["today", "오늘"], ["history", "지난 기록"], ["routines", "루틴·자동화"] ] as const).map(([target, label]) => (
            <button key={target} type="button" className={view === target ? styles.navActive : styles.navButton} onClick={() => setView(target)} aria-current={view === target ? "page" : undefined}>{label}</button>
          ))}
        </nav>

        <section id="daily-desk-main" className={styles.content} tabIndex={-1}>
          {view === "today" && <TodayView
            date={selectedDate} today={today} day={day} locked={locked} active={activeEntry}
            onDate={changeDate} onStatus={updateStatus} onSelect={setActiveId}
            onDayNote={(note) => updateDay((current) => ({ ...current, note }))}
            onEntryNote={(id, note) => updateDay((current) => ({ ...current, entries: current.entries.map((entry) => entry.id === id ? { ...entry, note, updatedAt: new Date().toISOString() } : entry) }))}
            onClose={() => updateDay((current) => ({ ...current, closedAt: new Date().toISOString() }))}
            onReopen={() => updateDay((current) => ({ ...current, closedAt: null }))}
          />}
          {view === "history" && <HistoryView days={desk.days} onOpen={(date) => changeDate(date)} />}
          {view === "routines" && <RoutineView routines={desk.routines} onEdit={setEditing} onToggle={(id) => setDesk((current) => ({ ...current, routines: current.routines.map((routine) => routine.id === id ? { ...routine, enabled: !routine.enabled } : routine) }))} />}
        </section>
      </div>

      {editing !== undefined && <RoutineEditor routine={editing} onClose={() => setEditing(undefined)} onSave={(routine) => {
        setDesk((current) => ({ ...current, routines: editing ? current.routines.map((item) => item.id === routine.id ? routine : item) : [...current.routines, routine] }));
        setEditing(undefined);
      }} />}

      {showExport && <section className={styles.modalBackdrop} role="presentation"><div className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="export-title">
        <div className={styles.modalHeader}><div><p className={styles.eyebrow}>PRIVATE BACKUP</p><h2 id="export-title">현재 기록 내보내기</h2></div><button type="button" className={styles.textButton} onClick={() => setShowExport(false)}>닫기</button></div>
        <p>이 파일은 현재 개인 기록의 별도 백업입니다. 내보내기 과정에서 추가 전송은 발생하지 않으며, 이 화면은 파일을 다시 불러오는 기능을 아직 제공하지 않습니다.</p>
        <textarea className={styles.exportText} value={exportPayload} readOnly aria-label="백업 JSON" onFocus={(event) => event.currentTarget.select()} />
        <div className={styles.modalActions}><button type="button" className={styles.primaryButton} onClick={downloadExport}>JSON 파일 저장</button><button type="button" className={styles.secondaryButton} onClick={() => navigator.clipboard?.writeText(exportPayload)}>전체 복사</button></div>
      </div></section>}
    </main>
  );
}

function TodayView({ date, today, day, locked, active, onDate, onStatus, onSelect, onDayNote, onEntryNote, onClose, onReopen }: {
  date: string; today: string; day: Day; locked: boolean; active: Entry | undefined;
  onDate: (date: string) => void; onStatus: (id: string, status: Status, advance?: boolean) => void; onSelect: (id: string) => void;
  onDayNote: (note: string) => void; onEntryNote: (id: string, note: string) => void; onClose: () => void; onReopen: () => void;
}) {
  const summary = counts(day);
  return <>
    <div className={styles.intro}><div><p className={styles.eyebrow}>{date === today ? "TODAY · SEOUL" : displayDate(date, true)}</p><h1>{date === today ? "오늘도, 하나씩." : `${displayDate(date)}의 흐름`}</h1><p>확인하고, 짧게 기록하고, 다음으로 넘어가요.</p></div>
      <div className={styles.dateControls}><button type="button" aria-label="이전 날짜" onClick={() => onDate(shiftDate(date, -1))}>←</button><input type="date" value={date} aria-label="기록 날짜" onChange={(event) => onDate(event.target.value)} /><button type="button" aria-label="다음 날짜" onClick={() => onDate(shiftDate(date, 1))}>→</button><button type="button" className={styles.textButton} onClick={() => onDate(today)}>오늘</button></div>
    </div>
    <div className={styles.weekStrip} aria-label="날짜 선택">
      {Array.from({ length: 7 }, (_, index) => shiftDate(date, index - 3)).map((item) => <button key={item} type="button" className={item === date ? styles.daySelected : styles.dayButton} onClick={() => onDate(item)} aria-pressed={item === date}><span>{item === today ? "오늘" : weekdayNames[dateParts(item).getUTCDay()]}</span><strong>{dateParts(item).getUTCDate()}</strong><i className={day.date === item ? styles.dayDot : styles.dayDotMuted} /></button>)}
    </div>
    {day.closedAt && <div className={styles.closed}><span>하루를 마쳤어요 · 완료 {summary.done} · 건너뜀 {summary.skipped} · 미완료 {summary.pending}</span><button type="button" className={styles.textButton} onClick={onReopen}>기록 다시 열기</button></div>}
    {date > today && <div className={styles.future}>다가오는 날의 루틴을 미리 보는 중입니다. 실제 기록은 그날부터 남길 수 있어요.</div>}
    <div className={styles.workspace}>
      <section className={styles.listPane} aria-label="하루의 루틴"><div className={styles.sectionHead}><div><p className={styles.eyebrow}>DAY FLOW</p><h2>하루의 루틴</h2></div><span>완료 {summary.done} / {day.entries.length}</span></div><progress className={styles.progress} max={Math.max(1, day.entries.length)} value={summary.done}>완료 {summary.done}</progress>
        <ol className={styles.routineList}>{day.entries.map((entry, index) => <li className={active?.id === entry.id ? styles.selectedEntry : styles.entry} key={entry.id}><button type="button" className={`${styles.check} ${entry.status === "done" ? styles.done : entry.status === "skipped" ? styles.skipped : ""}`} disabled={locked} onClick={() => onStatus(entry.id, entry.status === "done" ? "pending" : "done")} aria-label={`${entry.title}: ${entry.status === "done" ? "완료 취소" : "완료로 표시"}`}>{entry.status === "done" ? "✓" : entry.status === "skipped" ? "–" : ""}</button><button type="button" className={styles.entryBody} onClick={() => onSelect(entry.id)}><strong>{entry.title}</strong><span>{modeLabel[entry.mode]}{entry.note ? " · 메모 있음" : ""}</span></button><em>{String(index + 1).padStart(2, "0")}</em></li>)}</ol>
        <div className={styles.closeRow}><p>{summary.pending ? `${summary.pending}개가 남아 있어요. 마감해도 남은 항목은 완료 처리되지 않아요.` : "오늘의 항목을 모두 확인했어요."}</p><button type="button" className={styles.secondaryButton} disabled={locked} onClick={onClose}>오늘 기록 마치기</button></div>
      </section>
      {active && <section className={styles.focusPane} aria-label="선택한 루틴 기록"><p className={styles.eyebrow}>{active.status === "pending" ? "ONE NEXT STEP" : `기록 · ${active.status === "done" ? "완료" : "건너뜀"}`}</p><span className={styles.mode}>{modeLabel[active.mode]}</span><h2>{active.title}</h2><p className={styles.description}>{active.description}</p><label className={styles.label}>무엇을 확인했나요?<span>선택 · 상세 할 일 대신 짧은 기록</span><textarea disabled={locked} value={active.note} maxLength={2000} onChange={(event) => onEntryNote(active.id, event.target.value)} placeholder="진행한 것, 결정한 것, 특별한 변화가 없었다는 한 줄도 좋아요." /></label><div className={styles.focusActions}><button type="button" className={styles.primaryButton} disabled={locked} onClick={() => onStatus(active.id, "done", true)}>{active.status === "pending" ? "완료하고 다음으로" : "완료로 기록"}</button><button type="button" className={styles.textButton} disabled={locked} onClick={() => onStatus(active.id, "skipped", true)}>건너뛰기</button>{active.status !== "pending" && !locked && <button type="button" className={styles.textButton} onClick={() => onStatus(active.id, "pending")}>아직으로 되돌리기</button>}</div><p className={styles.helper}>체크는 내가 한 확인의 기록입니다. 자동화 실행 결과를 대신하지 않습니다.</p></section>}
    </div>
    <section className={styles.dayNote}><label className={styles.label}>오늘 남길 한 줄<span>선택 · 나중의 나에게</span><textarea disabled={locked} value={day.note} maxLength={4000} onChange={(event) => onDayNote(event.target.value)} placeholder="오늘 기억할 것, 느낀 점, 이어갈 방향. 짧게 남겨도 충분해요." /></label></section>
    <p className={styles.footnote}>루틴은 시작 제안입니다. 실제 매일 수행한 사실을 뜻하지 않으며, 루틴·자동화에서 바꿀 수 있어요.</p>
  </>;
}

function HistoryView({ days, onOpen }: { days: Record<string, Day>; onOpen: (date: string) => void }) {
  const dates = Object.keys(days).sort().reverse();
  return <><div className={styles.intro}><div><p className={styles.eyebrow}>WORK JOURNAL</p><h1>지난 기록</h1><p>완료한 일도, 잠시 건너뛴 일도 있는 그대로.</p></div></div>{dates.length === 0 ? <section className={styles.empty}><h2>아직 남긴 기록이 없어요.</h2><p>오늘의 루틴을 확인하면 보호된 첫 기록이 시작됩니다.</p></section> : <div className={styles.historyList}>{dates.map((date) => { const day = days[date]; const summary = counts(day); return <article className={styles.historyItem} key={date}><div><p className={styles.eyebrow}>{day.closedAt ? "DAY CLOSED" : "IN PROGRESS"}</p><h2>{displayDate(date, true)}</h2><p>완료 {summary.done} · 건너뜀 {summary.skipped} · 미완료 {summary.pending}</p>{day.note && <p className={styles.historyNote}>{day.note}</p>}</div><button type="button" className={styles.secondaryButton} onClick={() => onOpen(date)}>기록 보기</button><details><summary>항목별 기록</summary><ul>{day.entries.map((entry) => <li key={entry.id}>{entry.status === "done" ? "완료" : entry.status === "skipped" ? "건너뜀" : "미완료"} · {entry.title}{entry.note ? ` — ${entry.note}` : ""}</li>)}</ul></details></article>; })}</div>}</>;
}

function RoutineView({ routines, onEdit, onToggle }: { routines: Routine[]; onEdit: (routine: Routine | null) => void; onToggle: (id: string) => void }) {
  return <><div className={styles.intro}><div><p className={styles.eyebrow}>ROUTINES & AUTOMATION</p><h1>반복은 가볍게.</h1><p>변하지 않는 일의 유형만 두고, 빈도는 내 리듬에 맞춰요.</p></div><button type="button" className={styles.secondaryButton} onClick={() => onEdit(null)}>루틴 추가</button></div><div className={styles.automationGuide}><section><span>01</span><h2>로컬 자동화</h2><p>날짜 전환, 반복 항목과 집계처럼 이 화면 안에서만 처리되는 기능입니다.</p></section><section><span>02</span><h2>자동화 + 내 판단</h2><p>도구가 준비를 도울 수 있지만, 외부 실행이나 결정이 이 화면에서 일어나지는 않습니다.</p></section><section><span>03</span><h2>내가 하는 일</h2><p>우선순위, 수용, 학습은 직접 판단하고 수행하는 영역으로 남겨둡니다.</p></section></div><p className={styles.footnote}>라벨은 기능 평가일 뿐 외부 실행 증거가 아닙니다. 이 화면은 예약을 만들거나 바꾸지 않습니다. 변경은 새로 여는 날짜에만 반영되고 이미 기록된 날짜의 스냅샷은 바뀌지 않습니다.</p><ul className={styles.settings}>{routines.map((routine) => <li key={routine.id} className={!routine.enabled ? styles.disabledRoutine : ""}><div><p className={styles.eyebrow}>{cadenceLabel(routine)}{!routine.enabled ? " · 숨김" : ""}</p><h2>{routine.title}</h2><span className={styles.mode}>{modeLabel[routine.mode]}</span></div><p>{routine.description}</p><div className={styles.settingActions}><button type="button" className={styles.textButton} onClick={() => onEdit(routine)}>편집</button><button type="button" className={styles.textButton} onClick={() => onToggle(routine.id)}>{routine.enabled ? "숨기기" : "다시 표시"}</button></div></li>)}</ul></>;
}

function RoutineEditor({ routine, onClose, onSave }: { routine: Routine | null; onClose: () => void; onSave: (routine: Routine) => void }) {
  const [draft, setDraft] = useState<Routine>(routine ?? blankRoutine());
  const [error, setError] = useState("");
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); if (!draft.title.trim() || !draft.description.trim()) return setError("루틴 이름과 짧은 설명을 입력해 주세요."); if (draft.cadence === "weekdays" && draft.weekdays.length === 0) return setError("반복할 요일을 하나 이상 선택해 주세요."); onSave({ ...draft, id: routine?.id ?? `routine-${Date.now()}`, title: draft.title.trim(), description: draft.description.trim() }); };
  const update = <K extends keyof Routine>(key: K, value: Routine[K]) => setDraft((current) => ({ ...current, [key]: value }));
  return <section className={styles.modalBackdrop} role="presentation"><form className={styles.modal} aria-labelledby="routine-title" onSubmit={submit}><div className={styles.modalHeader}><div><p className={styles.eyebrow}>ROUTINE SETTINGS</p><h2 id="routine-title">{routine ? "루틴 편집" : "루틴 추가"}</h2></div><button type="button" className={styles.textButton} onClick={onClose}>닫기</button></div><label className={styles.label}>루틴 이름<input value={draft.title} maxLength={100} onChange={(event) => update("title", event.target.value)} autoFocus /></label><label className={styles.label}>짧은 설명<input value={draft.description} maxLength={500} onChange={(event) => update("description", event.target.value)} /></label><div className={styles.formGrid}><label className={styles.label}>반복 주기<select value={draft.cadence} onChange={(event) => update("cadence", event.target.value as Cadence)}><option value="daily">매일</option><option value="weekdays">요일 선택</option><option value="monthly">매월 1일</option></select></label><label className={styles.label}>자동화 분류<select value={draft.mode} onChange={(event) => update("mode", event.target.value as Mode)}><option value="human">내가 하는 일</option><option value="assisted">자동화 + 내 판단</option><option value="local">로컬 자동화</option></select></label></div>{draft.cadence === "weekdays" && <fieldset className={styles.weekdays}><legend>반복할 요일</legend>{weekdayNames.map((name, day) => <label key={name}><input type="checkbox" checked={draft.weekdays.includes(day)} onChange={() => update("weekdays", draft.weekdays.includes(day) ? draft.weekdays.filter((item) => item !== day) : [...draft.weekdays, day])} />{name}</label>)}</fieldset>}{error && <p className={styles.error} role="alert">{error}</p>}<div className={styles.modalActions}><button className={styles.primaryButton} type="submit">루틴 저장</button><button type="button" className={styles.secondaryButton} onClick={onClose}>취소</button></div><p className={styles.helper}>이 변경은 보호된 저장소에 저장됩니다. 이미 기록된 날짜의 루틴 스냅샷은 바뀌지 않습니다.</p></form></section>;
}
