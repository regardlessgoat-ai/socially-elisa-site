# Socially Elisa — mock site

Local-runnable marketing site for **Socially Elisa**, a marketing/branding/social media agency. Built with Next.js 14 + Tailwind. Uses the brand identity from `sociallyelisa_id.pdf`.

## Brand

| Token       | Hex      | Role                                    |
|-------------|----------|-----------------------------------------|
| `cream`     | #E1DED9  | background, soft surfaces               |
| `chartreuse`| #CAD183  | accent + display lock-ups               |
| `wine`      | #66033C  | primary brand color, CTA backgrounds    |
| `espresso`  | #311507  | text, deep accents                      |

Display font: **Bagel Fat One** (Google Fonts) — a close, free stand-in for the brand's "Coolvetica"-style chunky display.
Body font: **DM Sans**.

## Run it locally

```bash
cd /home/regardlessgoat/socially-elisa-site
npm install
npm run dev
```

Then open <http://localhost:3000>.

## Pages

| Route        | Purpose                                                      |
|--------------|--------------------------------------------------------------|
| `/`          | Home — hero, services, work, about preview, testimonial, CTA |
| `/work`      | Portfolio grid                                               |
| `/services`  | Services + 3-tier subscription pricing + FAQ                 |
| `/book`      | Calendly embed (inline iframe)                               |
| `/checkout`  | Mocked subscription checkout (`?plan=bloom|blossom|full-bloom`) |
| `/about`     | About Elisa, values, stats                                   |
| `/contact`   | Contact form + alt contact methods                           |

## Wiring up the real services (later)

This is a **mock** so the demo runs with zero accounts. Two integrations to do for production:

### 1. Calendly

Set in `.env.local`:

```
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-handle/30min
```

The `/book` page already reads this. No code change needed.

### 2. Stripe Subscriptions (recurring payments)

`/checkout` is mocked — it shows the flow but doesn't charge. To make it real:

1. `npm install stripe @stripe/stripe-js`
2. Create 3 recurring products + prices in Stripe Dashboard. Note the price IDs.
3. Add to `.env.local`:
   ```
   STRIPE_SECRET_KEY=sk_live_...
   STRIPE_PRICE_BLOOM=price_...
   STRIPE_PRICE_BLOSSOM=price_...
   STRIPE_PRICE_FULL_BLOOM=price_...
   NEXT_PUBLIC_SITE_URL=https://sociallyelisa.com
   ```
4. Replace the mock submit in `app/checkout/page.tsx` with a server action that calls `stripe.checkout.sessions.create({ mode: 'subscription', line_items: [{ price, quantity: 1 }], success_url, cancel_url })`, then redirect to the returned `url`.
5. Add a webhook handler at `app/api/stripe/webhook/route.ts` to listen for `customer.subscription.*` events.
6. Add a "Manage subscription" link to a Stripe Customer Portal session for logged-in users.

Estimated effort: ~1 day of focused work once you have the Stripe account ready.

## Timeline (real build, not mock)

| Phase                                  | Time          |
|----------------------------------------|---------------|
| This mock (already done)               | —             |
| Real content + copy from Elisa         | 1–2 days      |
| Stripe Subscriptions wire-up           | 1 day         |
| Real Calendly + form → Resend email    | 0.5 day       |
| Portfolio case studies (per project)   | 0.5 day each  |
| Polish, mobile QA, deploy to Vercel    | 1 day         |
| **Total realistic**                    | **~1 week**   |
