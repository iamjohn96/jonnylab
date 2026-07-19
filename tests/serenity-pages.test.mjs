import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

function read(file) {
  return readFileSync(file, "utf8");
}

test("Serenity web pages reflect the current Android release", () => {
  const main = read("app/serenity/page.tsx");
  const privacyEn = read("app/serenity/privacy/page.tsx");
  const privacyKo = read("app/serenity/privacy/ko/page.tsx");
  const termsEn = read("app/serenity/terms/page.tsx");
  const termsKo = read("app/serenity/terms/ko/page.tsx");

  assert.match(main, /Live on Android/);
  assert.match(main, /Get it on Google Play/);
  assert.match(main, /play\.google\.com\/store\/apps\/details\?id=com\.jonnylab\.serenity/);
  assert.match(main, /iOS in development/i);
  assert.doesNotMatch(main, /App Store|priority access to new sounds|continuous content updates/i);

  assert.match(privacyEn, /analytics or advertising tracking SDKs/i);
  assert.match(privacyKo, /분석·광고 추적 SDK/);
  assert.match(privacyEn, /local/i);
  assert.match(privacyKo, /로컬/);
  assert.match(privacyEn, /RevenueCat/);
  assert.match(privacyKo, /RevenueCat/);

  assert.match(termsEn, /Google Play/);
  assert.match(termsKo, /Google Play/);
  assert.match(termsEn, /Apple App Store/);
  assert.match(termsKo, /Apple App Store/);
  assert.match(termsEn, /RevenueCat/);
  assert.match(termsKo, /RevenueCat/);
  assert.doesNotMatch(termsEn, /priority access to new sounds|continuous content updates/i);
  assert.doesNotMatch(termsKo, /우선 제공|지속적인 콘텐츠 업데이트/);
});
