import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import ts from "typescript";

const require = createRequire(import.meta.url);
const source = readFileSync(new URL("../proxy.ts", import.meta.url), "utf8");
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
const proxyModule = { exports: {} };
new Function("require", "exports", "module", compiled)(require, proxyModule.exports, proxyModule);
const { proxy } = proxyModule.exports;
const { NextRequest } = require("next/server");

test("old automation host redirects to the canonical page with query intact", () => {
  const response = proxy(new NextRequest("https://automation.jonnylab.app/?source=demo"));
  assert.equal(response.status, 308);
  assert.equal(response.headers.get("location"), "https://jonnylab.app/automation?source=demo");
});

test("normal English and Korean pages keep their existing language behavior", () => {
  for (const [path, language] of [["/automation", "en"], ["/", "en"], ["/serenity/privacy/ko", "ko"], ["/reasontrace/ko", "ko"]]) {
    const response = proxy(new NextRequest(`https://jonnylab.app${path}`));
    assert.equal(response.headers.get("location"), null);
    assert.equal(response.headers.get("x-middleware-request-x-document-language"), language);
  }
});

test("automation source has English scope, explicit currency, sample disclaimer, and site discovery", () => {
  const page = readFileSync(new URL("../app/automation/page.tsx", import.meta.url), "utf8");
  assert.doesNotMatch(page, /[가-힣]/);
  for (const text of ["KRW 200,000–400,000", "KRW 150,000–250,000", "KRW 100,000–300,000", "not a client case study", "No automatic client reply."]) assert.ok(page.includes(text));
  assert.match(readFileSync(new URL("../app/sitemap.ts", import.meta.url), "utf8"), /"\/automation"/);
  assert.match(readFileSync(new URL("../components/Nav.tsx", import.meta.url), "utf8"), /href="\/automation"/);
});
