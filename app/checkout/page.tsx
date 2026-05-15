"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const PLANS: Record<string, { name: string; price: number }> = {
  bloom: { name: "Bloom", price: 1200 },
  blossom: { name: "Blossom", price: 2400 },
  "full-bloom": { name: "Full Bloom", price: 4500 },
};

function CheckoutInner() {
  const params = useSearchParams();
  const planId = params.get("plan") ?? "blossom";
  const plan = PLANS[planId] ?? PLANS.blossom;
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  return (
    <main className="bg-cream py-32 pt-40">
      <div className="container-page mx-auto max-w-2xl">
        <p className="eyebrow text-wine">Checkout · Demo</p>
        <h1 className="display mt-4 text-6xl text-wine md:text-7xl">
          {done ? "You're in." : `Subscribe to ${plan.name}`}
        </h1>

        {done ? (
          <div className="mt-10 rounded-3xl bg-wine p-10 text-cream">
            <p className="eyebrow text-chartreuse">Thank you</p>
            <h2 className="display mt-4 text-4xl text-chartreuse">
              Welcome to {plan.name}.
            </h2>
            <p className="mt-4 text-cream/80">
              In a real build this would create a Stripe Subscription and
              send a welcome email. Next step: pick a kickoff slot →
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/book" className="btn-chartreuse">
                Book kickoff call →
              </Link>
              <Link
                href="/"
                className="btn border border-chartreuse text-chartreuse hover:bg-chartreuse hover:text-wine"
              >
                Back home
              </Link>
            </div>
          </div>
        ) : (
          <form
            className="mt-10 space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitting(true);
              setTimeout(() => {
                setSubmitting(false);
                setDone(true);
              }, 800);
            }}
          >
            <div className="rounded-2xl bg-wine p-6 text-cream">
              <div className="flex items-center justify-between">
                <span>{plan.name} subscription</span>
                <span className="display text-3xl text-chartreuse">
                  ${plan.price}/mo
                </span>
              </div>
              <p className="mt-2 text-xs text-cream/70">
                Billed monthly. Cancel anytime.
              </p>
            </div>

            <Field label="Full name" type="text" required />
            <Field label="Work email" type="email" required />
            <Field label="Company" type="text" />
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Card number (demo)" type="text" placeholder="4242 4242 4242 4242" />
              <Field label="Exp / CVC" type="text" placeholder="12/29 · 123" />
            </div>

            <button type="submit" className="btn-wine w-full" disabled={submitting}>
              {submitting ? "Processing…" : `Pay $${plan.price} & start subscription`}
            </button>

            <p className="text-xs text-espresso/60">
              This is a mocked checkout for local demo. No real card is charged.
              Drop in Stripe Checkout (see README) to make it live.
            </p>
          </form>
        )}
      </div>
    </main>
  );
}

function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="eyebrow text-wine">{label}</span>
      <input
        {...props}
        className="mt-2 w-full rounded-xl border border-wine/20 bg-white px-4 py-3 text-espresso outline-none focus:border-wine"
      />
    </label>
  );
}

export default function CheckoutPage() {
  return (
    <>
      <Nav />
      <Suspense fallback={null}>
        <CheckoutInner />
      </Suspense>
      <Footer />
    </>
  );
}
