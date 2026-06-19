# Serenity Web Pages Design

Date: 2026-06-19

## Goal

Update the existing Serenity product and legal pages so they accurately represent the current Android-only app and provide a consistent, launch-ready presentation.

## Scope

Update these existing routes:

- `/serenity`
- `/serenity/privacy`
- `/serenity/privacy/ko`
- `/serenity/terms`
- `/serenity/terms/ko`

The support page and other JonnyLab product pages are outside this change.

## Product Positioning

Serenity is an Android sleep, focus, and relaxation sound app. The pages will describe only functionality confirmed in the Android implementation:

- 30 built-in ambient sounds
- Up to five simultaneous sound channels
- Per-channel and master volume controls
- Saved mix presets
- Sleep timer with fade-out
- Background playback and notification controls
- Free and Pro feature limits
- Korean and English support

The product is not yet publicly released. The main call to action will remain disabled and read `Coming Soon on Google Play`. The pages will not mention iOS or the App Store.

## Main Page

The main page will retain the established JonnyLab product-page structure while receiving a Serenity-specific visual and content refresh.

### Visual Direction

- Dark nighttime hero using indigo, violet, and deep navy
- Calm, restrained typography and spacing
- Simple symbolic icons without adding new image assets
- Responsive cards that match the existing Tailwind-based site
- Clear links to Privacy Policy, Terms of Use, and Support

### Content Structure

1. Hero with product name, Android positioning, core promise, feature badges, and disabled Google Play CTA
2. Feature grid covering sounds, five-channel mixing, presets, timer, background playback, and bilingual support
3. Simple workflow explaining choose, mix, save, and sleep
4. Privacy-focused section stating that settings and presets remain on-device and that the app contains no analytics, advertising, or tracking SDKs
5. Free and Pro comparison using only confirmed limits
6. Legal and support links

The page will avoid unverified promises such as future content priority or continuous sound updates.

## Privacy Policy

English and Korean versions will contain equivalent policy meaning.

The policy will state:

- No account is required
- Serenity does not collect personal information, usage analytics, advertising identifiers, location, health data, contacts, photos, files, or microphone recordings
- Serenity does not include analytics, advertising, or tracking SDKs
- App settings, mixer state, and presets are stored locally on the device
- Local data can be removed through the in-app reset function, Android app-data controls, or uninstalling the app
- Google Play processes purchases and payment details; JonnyLab does not receive card details
- Billing communication with Google Play is limited to product, purchase, restore, and entitlement handling
- Data is not sold or shared by JonnyLab
- The app is intended for users aged 13 and older
- Questions can be sent to `support@jonnylab.app`

The effective date will be June 19, 2026.

## Terms of Use

English and Korean versions will contain equivalent terms.

The terms will cover:

- Acceptance of terms
- Serenity's purpose and feature scope
- General wellness status and medical disclaimer
- Safe listening and prohibition on unsafe use while driving, cycling, or operating machinery
- Monthly, yearly, and lifetime Pro purchase options
- Google Play management of billing, cancellation, and refunds
- Free and Pro feature availability
- Limited personal-use license and restrictions on redistribution or misuse
- No guarantee of uninterrupted playback or specific sleep, focus, or health outcomes
- Feature, sound, pricing, and terms changes
- Contact at `support@jonnylab.app`

The effective date will be June 19, 2026.

## Architecture

The routes remain static React Server Components in the Next.js App Router. Each page will continue exporting static `Metadata` and using `next/link` for internal navigation, consistent with the installed Next.js 16 documentation.

No API routes, client state, external data, new dependencies, or image assets are required.

## Error Handling and Accessibility

Because all content is static, runtime data errors are not expected. Implementation will use semantic headings, sections, lists, links, readable contrast, visible hover states, and responsive layouts. The disabled launch CTA will remain a non-interactive button with clear disabled styling.

## Verification

- Run ESLint
- Run the production Next.js build
- Confirm all five routes compile
- Review English and Korean legal pages for matching meaning
- Confirm no iOS or App Store references remain in Serenity pages
- Confirm no unsupported analytics or data-collection claims remain
- Confirm the existing untracked `APP_SUMMARY.md` is not modified or committed
