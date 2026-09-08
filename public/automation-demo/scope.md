# JonnyLab — Inquiry intake setup

Service outline · 8 September 2026 · Final scope confirmed by email

## The result

Turn submissions from one agreed inquiry form into organized Google Sheets records and an internal notification for the person who handles the inquiry.

## Scope

- One input form with a stable submission ID.
- One Google Sheets spreadsheet and one destination tab.
- Up to six agreed fields, with required-field checks and mapping.
- Duplicate handling using the agreed submission ID.
- One internal notification destination.
- Visible failed-processing status and a documented retry procedure.
- Testing with agreed synthetic or anonymized examples.
- A short operating guide and one minor adjustment within seven days of delivery.

Your team reviews inquiries and sends customer replies in its existing tools. Custom AI classification, CRM migration, a shared inbox, additional sources, ongoing monitoring and managed response operations are separate scopes.

## Price and delivery

One-time setup fee for the scope above: **US$500 (USD)**.

Proposed payment milestones: **US$250 after the written scope is accepted; US$250 after the agreed acceptance checks pass and handover is complete.** Payment details are confirmed in the customer-specific quote before work starts.

Proposed delivery: **4–7 business days** after scope, required access and sample inputs are agreed. This is a draft estimate, not a confirmed order. External software subscriptions, hosting and API usage are separate and must be agreed before they incur costs.

Before sending a binding quote, JonnyLab will confirm the customer, supported form provider, notification destination, taxes included or excluded, USD payment method, payment milestones and start date in writing. These details are not assumed in this draft. No deposit or payment is requested by this document.

## Acceptance

| Case | Required result |
| --- | --- |
| Valid submission | Correct fields in one row; one internal notification |
| Required field missing | Visible validation result; no misleading completed record |
| Same submission received again | No duplicate row or duplicate notification |
| Same ID with conflicting content | Exception shown for review; no silent overwrite |
| Record destination unavailable | Failure visible; notification does not claim successful recording |
| Notification unavailable after row write | Row retained; notification pending; retry without duplicating row |

Final acceptance uses the agreed real integration environment and representative inputs. The local demonstration included here validates sample processing rules only. It does not prove Google Sheets, n8n, mailbox integration, production durability, concurrent submission handling or automatic recovery after a server restart.

## How we work

We can agree scope, inspect anonymized examples and hand over the result by email. Customer-owned accounts are preferred. We document what to do when a connection stops working and who owns ongoing maintenance.


There is no recurring JonnyLab fee in this setup offer. Ongoing monitoring, maintenance and new workflows require a separate agreed scope. We work with English-speaking service businesses and can complete discovery, updates and handover by email; a phone call is not required.
