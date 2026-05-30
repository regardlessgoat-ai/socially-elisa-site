---
name: socially-elisa-ops
description: Use when working on Socially Elisa (social media agency) — Stripe payment links, client onboarding, pricing decisions, helper coordination (Rebeca/Jamilly), or website work. Handles currency conversion math (USD/BRL), margin protection, and the no-prices-on-website rule.
---

# Socially Elisa — Operations Skill

You are working on Socially Elisa, a service business (NOT a software product). The patterns are different from PicMenu or ForexBot.

## The business model

**Two service lines, all recurring monthly:**

### Social Media Profile Management (Jamilly, paid USD)
- The Launch — $600/mo
- The Growth — $800/mo
- The Peak — $1,000/mo

### Visual Identity / Branding (Rebeca, paid BRL)
- The Foundation — $1,500/mo
- The Full Brand — $2,000/mo
- The Full System — $2,500/mo

## Operational rules

### 1. NO PRICES ON THE WEBSITE — ever

The public site shows package names + features only, never dollar amounts. Get-a-Quote button instead. Custom Stripe Payment Link per client after discovery call.

If asked to add prices to the public site: push back hard. This is core positioning, not a preference.

### 2. Custom Stripe Payment Links per client

Each client gets a unique link built per their needs:
- Base tier (one of the six above)
- Plus add-ons if applicable
- Combo links allowed (Social Media + Branding on one link)

### 3. Currency math matters

Rebeca paid in BRL. Exchange rate fluctuates. Build 10-15% buffer into branding tier margins.

**Current reference (USD/BRL ≈ 5.00):**
- The Foundation: client $1,500, Rebeca ~R$1,500 ≈ $300, agency 20% ≈ $240, operator profit ≈ $960 (64% margin)
- The Full Brand: client $2,000, Rebeca ~R$2,500 ≈ $500, agency 20% ≈ $300, operator profit ≈ $1,200 (60%)
- The Full System: client $2,500, Rebeca ~R$3,500 ≈ $700, agency 20% ≈ $360, operator profit ≈ $1,440 (58%)

If USD/BRL drops below 4.50, recheck branding pricing. Margins shrink fast.

### 4. Helper respect

Rebeca and Jamilly are real people. Don't talk about them like resources or abstractions. They have lives, opinions, and other work. Communication patterns:
- Clear scope in writing (no surprise expansions)
- Turnaround times that match their availability
- Payment on time, in the currency they expect

### 5. Stripe Customer Portal

Activate it in the Stripe dashboard. Clients self-manage cards, invoices, cancellations. Saves hours of operator support email per month.

### 6. Live mode vs test mode

Stripe products are currently in test mode. Switching to live mode requires:
- Recreating all 6 products in live mode (test and live are separate)
- Updating any code that references test product IDs
- Verifying the Stripe webhook endpoint URL is live-mode compatible

## Anti-patterns — push back

- **Publishing prices** — destroys the consultative-quote positioning
- **Locking BRL rates without buffer** — currency moves cost margin
- **Promising turnaround Jamilly/Rebeca can't deliver** — burns helpers
- **Underpricing to land a deal** — better to lose than work break-even
- **Unlimited revisions** — set scope in writing, every time
- **DIY billing tools when Stripe handles it** — don't reinvent

## Operator workflow per new client

1. Discovery call → understand their goals + which tier(s) fit
2. Build the Stripe Payment Link in dashboard:
   - Stripe → Payment Links → New
   - Add base tier
   - Add add-ons if any
   - Combo (Social + Branding) on one link OK
3. Copy URL → send to client
4. Client pays → Stripe creates the subscription
5. Operator pays Rebeca (BRL) and/or Jamilly (USD) from the gross
6. Operator keeps the margin

## When Claude Code is involved

Most often for:
- The public website (no prices, Get-a-Quote funnel)
- Stripe API integration (if/when an admin UI is built beyond the dashboard)
- CRM/onboarding automation
- Invoice templates, client docs

Less often for:
- Anything Rebeca or Jamilly do directly (their work is human delivery)

## Open threads (operator to-do)

- Customer Portal — not yet activated in Stripe
- Add-on menu — not yet defined (what extras beyond base tiers?)
- Website — needs the Get-a-Quote funnel
- Live mode in Stripe — products still in test mode
- Discovery call funnel — Typeform / Calendly / custom?
