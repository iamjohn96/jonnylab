import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import test from "node:test";
import ts from "typescript";

const require = createRequire(import.meta.url);

function loadTypeScriptModule(file, dependencies = {}) {
  const source = readFileSync(new URL(`../${file}`, import.meta.url), "utf8");
  const compiled = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2017 },
  }).outputText;
  const compiledModule = { exports: {} };
  new Function("require", "exports", "module", compiled)(
    (request) => dependencies[request] ?? require(request),
    compiledModule.exports,
    compiledModule,
  );
  return compiledModule.exports;
}

const answers = loadTypeScriptModule("lib/signalAnswers.ts");
const { findSignalAnswers } = loadTypeScriptModule("lib/signalSearch.ts", {
  "@/lib/signalAnswers": answers,
});

test("signal search matches English queries", () => {
  assert.equal(findSignalAnswers("OpenAI isn't working")[0].id, "service-or-device");
});

test("signal search matches Korean queries with particles", () => {
  assert.equal(findSignalAnswers("OpenAI가 안 돼요")[0].id, "service-or-device");
});

test("signal search returns no answer for empty or unrelated queries", () => {
  assert.deepEqual(findSignalAnswers(""), []);
  assert.deepEqual(findSignalAnswers("내 양말이 와이파이에 연결되지 않아요"), []);
  assert.deepEqual(findSignalAnswers("이 서비스는 어떻게 쓰나요"), []);
});

test("signal search permits a precise single curated keyword", () => {
  assert.equal(findSignalAnswers("outage")[0].id, "service-or-device");
});

test("signal search returns the highest-scoring result first", () => {
  const results = findSignalAnswers("browser virus infected popup");
  assert.equal(results[0].id, "browser-virus-warning");
});

test("signal answers keep review dates in sortable ISO format", () => {
  for (const answer of answers.signalAnswers) assert.match(answer.reviewedAt, /^\d{4}-\d{2}-\d{2}$/);
});

test("analytics event never includes the raw query", () => {
  const component = readFileSync(new URL("../components/SignalSearch.tsx", import.meta.url), "utf8");
  const eventBlock = component.match(/window\.gtag\?\.\("event", "signal_search_submitted", \{([\s\S]*?)\}\);/);
  assert.ok(eventBlock);
  assert.doesNotMatch(eventBlock[1], /query|draft|submittedQuery/i);
  assert.match(component, /trackSearch\(matches\.length > 0 \? 1 : 0\)/);
});
