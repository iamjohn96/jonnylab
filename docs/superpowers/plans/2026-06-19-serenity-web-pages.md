# Serenity Web Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refresh the Serenity landing page and legal pages so they match the Android-only product, the Google Play launch state, and the confirmed privacy/terms posture.

**Architecture:** Keep the implementation as static App Router pages with shared route-local content arrays. Update the main page copy and calls to action, then rewrite the English/Korean privacy and terms routes so they reflect only the data the app actually handles. Finish with source-level content checks and a production build.

**Tech Stack:** Next.js App Router, React Server Components, TypeScript, Tailwind CSS, Node.js test runner

---

### Task 1: Lock the expected Serenity copy in a source-level test

**Files:**
- Create: `tests/serenity-pages.test.mjs`

- [ ] **Step 1: Write the failing test**

```javascript
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const main = readFileSync("app/serenity/page.tsx", "utf8");
assert.match(main, /Coming Soon on Google Play/);
assert.doesNotMatch(main, /iOS|App Store|analytics|crash logs/i);
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/serenity-pages.test.mjs`
Expected: FAIL because the current Serenity page still uses the old landing-page copy.

- [ ] **Step 3: Write minimal implementation**

No production code yet. Update the Serenity page copy only after the red test is confirmed.

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test tests/serenity-pages.test.mjs`
Expected: PASS after the landing page copy is updated.

- [ ] **Step 5: Commit**

```bash
git add tests/serenity-pages.test.mjs app/serenity/page.tsx
git commit -m "feat: refresh serenity landing copy"
```

### Task 2: Update the Serenity landing page

**Files:**
- Modify: `app/serenity/page.tsx`

- [ ] **Step 1: Write the failing test**

```javascript
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const main = readFileSync("app/serenity/page.tsx", "utf8");
assert.match(main, /30 sounds/i);
assert.match(main, /5-channel/i);
assert.match(main, /Coming Soon on Google Play/);
assert.doesNotMatch(main, /iOS|App Store|analytics|crash logs|priority access to new sounds|continuous content updates/i);
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/serenity-pages.test.mjs`
Expected: FAIL until the copy is rewritten to match the Android-only product and launch state.

- [ ] **Step 3: Write minimal implementation**

Replace the current hero, feature cards, and Pro section copy so the page:
- states Android-only positioning,
- uses `Coming Soon on Google Play`,
- describes the confirmed features only,
- keeps the legal/support links.

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test tests/serenity-pages.test.mjs`
Expected: PASS once the content reflects the new product language.

- [ ] **Step 5: Commit**

```bash
git add app/serenity/page.tsx tests/serenity-pages.test.mjs
git commit -m "feat: refresh serenity landing page"
```

### Task 3: Rewrite the Serenity privacy pages

**Files:**
- Modify: `app/serenity/privacy/page.tsx`
- Modify: `app/serenity/privacy/ko/page.tsx`

- [ ] **Step 1: Write the failing test**

```javascript
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const privacyEn = readFileSync("app/serenity/privacy/page.tsx", "utf8");
const privacyKo = readFileSync("app/serenity/privacy/ko/page.tsx", "utf8");

assert.doesNotMatch(privacyEn, /analytics|crash logs|device model/i);
assert.doesNotMatch(privacyKo, /분석|오류 로그|기기 모델/);
assert.match(privacyEn, /local/i);
assert.match(privacyKo, /로컬/);
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/serenity-pages.test.mjs`
Expected: FAIL because the current privacy copy still claims analytics and diagnostics collection.

- [ ] **Step 3: Write minimal implementation**

Rewrite both privacy pages so they say:
- the app uses no analytics, ads, or tracking SDKs,
- settings and presets stay on-device,
- no account is required,
- Google Play handles billing,
- deletion is handled through app-data reset or uninstall,
- contact information stays the same.

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test tests/serenity-pages.test.mjs`
Expected: PASS once both privacy pages match the no-tracking posture.

- [ ] **Step 5: Commit**

```bash
git add app/serenity/privacy/page.tsx app/serenity/privacy/ko/page.tsx tests/serenity-pages.test.mjs
git commit -m "feat: update serenity privacy policy"
```

### Task 4: Rewrite the Serenity terms pages

**Files:**
- Modify: `app/serenity/terms/page.tsx`
- Modify: `app/serenity/terms/ko/page.tsx`

- [ ] **Step 1: Write the failing test**

```javascript
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const termsEn = readFileSync("app/serenity/terms/page.tsx", "utf8");
const termsKo = readFileSync("app/serenity/terms/ko/page.tsx", "utf8");

assert.doesNotMatch(termsEn, /App Store|iOS|priority access to new sounds|continuous content updates/i);
assert.doesNotMatch(termsKo, /App Store|iOS|우선 제공|지속적인 콘텐츠 업데이트/);
assert.match(termsEn, /Google Play/);
assert.match(termsKo, /Google Play/);
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/serenity-pages.test.mjs`
Expected: FAIL because the current terms copy is still broader than the Android-only scope.

- [ ] **Step 3: Write minimal implementation**

Rewrite both terms pages so they cover:
- acceptance and product scope,
- wellness/non-medical use,
- safe listening,
- monthly/yearly/lifetime Pro options,
- Google Play billing/cancellation/refunds,
- license restrictions,
- availability and liability limits,
- support contact.

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test tests/serenity-pages.test.mjs`
Expected: PASS once the terms copy matches the confirmed product scope.

- [ ] **Step 5: Commit**

```bash
git add app/serenity/terms/page.tsx app/serenity/terms/ko/page.tsx tests/serenity-pages.test.mjs
git commit -m "feat: update serenity terms of use"
```

### Task 5: Verify the route set end-to-end

**Files:**
- Modify: none

- [ ] **Step 1: Run the repository lint check**

Run: `npm run lint`
Expected: PASS with no new lint errors in the Serenity routes.

- [ ] **Step 2: Run a production build**

Run: `npm run build`
Expected: PASS and the Serenity routes compile successfully.

- [ ] **Step 3: Check the route source one more time**

Run: `node --test tests/serenity-pages.test.mjs`
Expected: PASS and the copy checks still hold after the build.

- [ ] **Step 4: Commit**

```bash
git add app/serenity tests/serenity-pages.test.mjs
git commit -m "feat: complete serenity web page refresh"
```

### Self-Review

- Spec coverage:
  - Main page update: Task 2.
  - Privacy EN/KO rewrite: Task 3.
  - Terms EN/KO rewrite: Task 4.
  - Android-only, Google Play, and no iOS mentions: Tasks 2 through 4.
  - Verification: Task 5.

- Placeholder scan:
  - No TBD/TODO placeholders.
  - Every task includes exact files, commands, and expected outcomes.

- Type consistency:
  - The test file name and route paths are consistent across all tasks.
  - The same content checks are reused throughout the plan, so the implementation target remains stable.

