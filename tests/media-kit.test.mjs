import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const page = readFileSync(new URL("../app/(en)/media-kit/page.tsx", import.meta.url), "utf8");
const actions = readFileSync(new URL("../components/MediaKitActions.tsx", import.meta.url), "utf8");

test("media kit exposes official product and store links", () => {
  for (const value of [
    "id6766760955",
    "id6791929590",
    "com.jonnylab.clearspace",
    "com.jonnylab.fileio",
    "com.serenity.sleep",
    "https://safeunfollow.com",
  ]) assert.match(page, new RegExp(value.replaceAll(".", "\\.")));
});

test("media kit is discoverable from sitemap, footer, and AI directory", () => {
  assert.match(readFileSync(new URL("../app/sitemap.ts", import.meta.url), "utf8"), /"\/media-kit"/);
  assert.match(readFileSync(new URL("../components/Footer.tsx", import.meta.url), "utf8"), /href="\/media-kit"/);
  assert.match(readFileSync(new URL("../public/llms.txt", import.meta.url), "utf8"), /https:\/\/jonnylab\.app\/media-kit/);
});

test("media kit analytics records actions without copied content", () => {
  const eventBlock = actions.match(/window\.gtag\?\.\("event", "media_kit_action", \{([\s\S]*?)\}\);/);
  assert.ok(eventBlock);
  assert.match(eventBlock[1], /product/);
  assert.match(eventBlock[1], /action/);
  assert.doesNotMatch(eventBlock[1], /description|url|text/);
});
