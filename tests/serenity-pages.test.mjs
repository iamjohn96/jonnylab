import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

function read(file) {
  return readFileSync(file, "utf8");
}

test("Serenity web pages use the updated Android-only copy", () => {
  const main = read("app/serenity/page.tsx");
  const privacyEn = read("app/serenity/privacy/page.tsx");
  const privacyKo = read("app/serenity/privacy/ko/page.tsx");
  const termsEn = read("app/serenity/terms/page.tsx");
  const termsKo = read("app/serenity/terms/ko/page.tsx");

  assert.match(main, /Coming Soon on Google Play/);
  assert.match(main, /Android-only/i);
  assert.doesNotMatch(main, /iOS|App Store|priority access to new sounds|continuous content updates/i);

  assert.match(privacyEn, /analytics, advertising, or tracking SDKs/i);
  assert.match(privacyKo, /분석/);
  assert.doesNotMatch(privacyEn, /crash logs|device model/i);
  assert.doesNotMatch(privacyKo, /오류 로그|기기 모델/);
  assert.match(privacyEn, /local/i);
  assert.match(privacyKo, /로컬/);

  assert.doesNotMatch(termsEn, /App Store|iOS|priority access to new sounds|continuous content updates/i);
  assert.doesNotMatch(termsKo, /App Store|iOS|우선 제공|지속적인 콘텐츠 업데이트/);
  assert.match(termsEn, /Google Play/);
  assert.match(termsKo, /Google Play/);
});
