import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Flower from "@/components/Flower";

const plans = [
  {
    id: "bloom",
    name: "Bloom",
    price: 1200,
    blurb: "For brands getting serious about showing up.",
    features: [
      "12 social posts / month",
      "1 platform managed",
      "Monthly content shoot day",
      "Caption writing & scheduling",
      "Monthly performance report",
    ],
    tone: "bg-cream text-wine",
    badge: null,
  },
  {
    id: "blossom",
    name: "Blossom",
    price: 2400,
    blurb: "Most-loved plan. Full social presence, on autopilot.",
    features: [
      "20 social posts / month",
      "2 platforms managed",
      "Bi-weekly reels / TikToks",
      "Community management",
      "Light paid ads ($500 included)",
      "Brand voice & strategy refresh",
    ],
    tone: "bg-wine text-chartreuse",
    badge: "Most popular",
  },
  {
    id: "full-bloom",
    name: "Full Bloom",
    price: 4500,
    blurb: "Branding, social, ads, the whole studio.",
    features: [
      "Unlimited posts (within reason)",
      "All major platforms",
      "Weekly content production",
      "Paid social management ($1.5k incl.)",
      "Brand identity refresh",
      "Quarterly strategy intensive",
    ],
    tone: "bg-chartreuse text-wine",
    badge: null,
  },
];

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-wine pb-20 pt-40 text-cream">
          <Flower className="absolute -right-10 -top-10 h-72 w-72 opacity-60" />
          <div className="container-page">
            <p className="eyebrow text-chartreuse">Services & Pricing</p>
            <h1 className="display mt-6 text-7xl text-chartreuse md:text-9xl">
              Subscriptions
              <br />
              <span className="text-cream">not surprises.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-cream/80">
              No 40-page contracts. No “quote on request.” Just a flat monthly
              fee, a clear scope, and a team that already feels like yours.
              Cancel anytime — though you won&apos;t want to.
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="bg-cream py-24">
          <div className="container-page">
            <div className="grid gap-6 lg:grid-cols-3">
              {plans.map((plan) => (
                <article
                  key={plan.id}
                  className={`relative flex flex-col rounded-3xl p-8 ${plan.tone}`}
                >
                  {plan.badge && (
                    <span className="absolute -top-3 left-8 rounded-full bg-chartreuse px-4 py-1 text-xs uppercase tracking-[0.25em] text-wine">
                      {plan.badge}
                    </span>
                  )}
                  <p className="eyebrow">{plan.name}</p>
                  <p className="mt-6 display text-7xl">
                    ${plan.price.toLocaleString()}
                    <span className="display text-2xl opacity-70">/mo</span>
                  </p>
                  <p className="mt-4 text-sm opacity-80">{plan.blurb}</p>
                  <ul className="mt-8 space-y-3 text-sm">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 border-t border-current/20 pt-3"
                      >
                        <span>✺</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-10">
                    <Link
                      href={`/checkout?plan=${plan.id}`}
                      className={
                        plan.id === "blossom"
                          ? "btn-chartreuse w-full"
                          : "btn-wine w-full"
                      }
                    >
                      Subscribe to {plan.name} →
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-10 text-center text-sm text-espresso/70">
              All plans are month-to-month. Billing is mocked in this demo —
              swap in Stripe when you&apos;re ready.
            </p>
          </div>
        </section>

        {/* What's included */}
        <section className="bg-espresso py-24 text-cream">
          <div className="container-page grid gap-12 md:grid-cols-2">
            <div>
              <p className="eyebrow text-chartreuse">Always included</p>
              <h2 className="display mt-6 text-5xl text-cream md:text-6xl">
                The fine print
                <br />
                isn&apos;t fine.
              </h2>
            </div>
            <ul className="space-y-4 text-cream/85">
              {[
                "Dedicated Slack / WhatsApp channel — same-day replies",
                "Monthly strategy call (more if you want)",
                "Shared content calendar in Notion",
                "Performance review every 30 days",
                "Pause your subscription for up to 60 days",
                "Cancel any time, keep everything we made",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 border-t border-cream/20 pt-4">
                  <span className="text-chartreuse">✺</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-chartreuse py-24 text-wine">
          <div className="container-page">
            <p className="eyebrow">FAQ</p>
            <h2 className="display mt-6 text-5xl md:text-6xl">Questions, asked.</h2>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {[
                ["How does billing work?", "Flat monthly fee, charged on the day you subscribe. Cancel anytime in your Stripe portal."],
                ["Can I switch plans?", "Yes — upgrade or downgrade at the start of the next cycle. We pro-rate fairly."],
                ["What if I need a one-off project?", "We do those too, but subscribers get priority and 20% off."],
                ["Where are you based?", "Miami-adjacent. We work remote with clients across the US."],
              ].map(([q, a]) => (
                <div key={q} className="border-t border-wine/30 pt-4">
                  <p className="font-medium">{q}</p>
                  <p className="mt-2 text-sm text-wine/80">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
