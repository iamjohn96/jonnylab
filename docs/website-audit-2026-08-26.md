# JonnyLab website audit — 2026-08-26

This is a product and technical consistency review, not legal advice.

## Brand audit

| Area | Classification | Finding | Action |
| --- | --- | --- | --- |
| Homepage title, hero, root metadata | REWRITE | Defined JonnyLab as a privacy-first apps company. | Reframed around everyday problem-solving. |
| Footer | REWRITE | Repeated the old company category. | Replaced with problem-first language. |
| Product privacy sections | KEEP | Privacy belongs at product and trust level. | Retained. |
| Product status model | REWRITE | Released, coming-soon, and development work shared one undifferentiated grid. | Added an explicitly separate product-lab section. |
| SafeUnfollow | VERIFY | Externally hosted and not part of this repository's app implementation evidence. | Retained existing live claim; recheck availability periodically. |

## Product accuracy

| Product | Evidence reviewed | Website decision | Verification still needed |
| --- | --- | --- | --- |
| ClearSpace | Android repository documents on-device duplicate, quality, screenshot, chat-media, and video scanning; an iOS repository exists. | Keep Android as available and iOS as in development. | Store listing disclosures, billing SDK behavior, iOS release scope. |
| Privune | iOS repository documents local OCR/redaction, no account/backend/analytics, and an unchanged original; Android repository exists but its release scope was not documented. | Keep as coming soon; retain privacy-led positioning. | Reconcile homepage iPhone status with product-page “Android & iPhone” claims before release. |
| Serenity | Android repository documents local storage, bundled audio, and RevenueCat/Google Play; iOS repository exists. | Keep Android as available and iOS as in development. | Confirm current App Store scope and that both apps still exclude analytics/crash SDKs. |
| Fileio | Android 2.0 repository is active and describes a migration with an older Expo fallback; site says Android live and iOS in development. | Keep for now; do not mark discontinued without a product decision. | Confirm which Android build is publicly served, iOS status, and current RevenueCat configuration. |
| Doran | Android mock vertical slice exists; cloud/Gemini integration follows a future validation gate. | Add only as Experimental in the product-lab section. | Do not claim live AI until the provider integration ships. |
| FixShot | A dedicated macOS repository exists and is described as a privacy-first visual troubleshooter. | Add as In development, macOS first. | Verify the final analysis path and data flow before publishing detailed privacy claims. |
| EventLens | No dedicated connected repository found. | Do not list. | Revisit when a build repository or validated prototype exists. |
| Agent Permission Guard | Planning artifact only in the current project context. | Do not list. | Consider a developer-tools/experiments area only after implementation exists. |
| Other named ideas | Idea-stage context only. | Do not list. | Promote only after meeting the status rules. |

## Privacy and terms consistency

- KEEP: Separate product privacy and terms routes, bilingual variants, support links, and explicit RevenueCat/store processing where documented.
- VERIFY: Privune's site makes mature Android-and-iPhone, metadata-removal, detection coverage, and purchase claims that exceed the iOS README milestone evidence reviewed here.
- VERIFY: Fileio's current policy describes both platforms, RevenueCat, encrypted Private Vault behavior, and removed cloud integrations. Recheck these against the shipping Android fallback and the native 2.0 migration before the next policy date change.
- VERIFY: ClearSpace policy and terms predate the newer product pages and should be compared with current Pro billing, reminders, widget behavior, permissions, and both platform implementations.
- VERIFY: Serenity policy says no analytics, advertising, cloud sync, or user-content uploads while documenting RevenueCat and store processing. Recheck release dependencies before each store submission.
- KEEP: `support@jonnylab.app` is consistent throughout the reviewed routes.
- Legal review recommended: jurisdiction-specific consumer subscription wording, limitation-of-liability language, children's privacy thresholds, and whether one operator/company identity section is sufficient across markets.

No legal text was changed in this brand pass because the reviewed policies are product-specific and changing them without completing the implementation/store-disclosure checks could create new inaccuracies. Brand-only changes also do not justify changing their effective dates.

## Information architecture

1. Hero and mission
2. Available and release-ready products
3. In-development / experimental product lab
4. Product principles
5. Product-specific privacy, terms, and support from each product page
6. Shared support and GitHub links in the footer

## Core copy change

- Before: “Privacy-first apps and tools for iPhone, Android, and the web.”
- After: “Small tools for real everyday problems.”
- Supporting line: “We build focused software that makes useful tasks simpler. AI is used where it genuinely helps; privacy and simplicity are built into the product.”
