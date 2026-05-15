import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Flower from "@/components/Flower";

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="relative overflow-hidden bg-chartreuse pb-24 pt-40 text-wine">
          <Flower
            className="absolute -right-12 top-20 hidden h-72 w-72 spin-slow md:block"
            petal="#66033C"
            center="#CAD183"
            stroke="#66033C"
          />
          <div className="container-page">
            <p className="eyebrow">About</p>
            <h1 className="display mt-6 text-7xl md:text-9xl">
              Hi, I&apos;m
              <br />
              <span className="bg-wine px-4 inline-block rounded-2xl text-chartreuse">
                Elisa.
              </span>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-espresso/80">
              I started Socially Elisa because the marketing world needed more
              softness — and a lot less stock photography. We help brands show
              up on social like real humans, with strategy that actually moves
              numbers.
            </p>
          </div>
        </section>

        <section className="bg-cream py-24">
          <div className="container-page grid gap-16 md:grid-cols-[1fr_2fr]">
            <p className="eyebrow text-wine">Values</p>
            <div className="space-y-12">
              {[
                ["Creative", "Beautiful work, always. We don't ship safe."],
                ["Authentic", "Your voice, just sharper. We don't ghostwrite you into someone else."],
                ["Independent", "Owned by a creative, not by a holdco. We answer to the work."],
              ].map(([title, copy]) => (
                <div key={title} className="border-t border-wine/20 pt-6">
                  <h3 className="display text-5xl text-wine">{title}</h3>
                  <p className="mt-3 max-w-xl text-espresso/80">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-wine py-24 text-cream">
          <div className="container-page grid gap-12 md:grid-cols-3">
            {[
              ["50+", "brands launched"],
              ["3M+", "impressions / mo"],
              ["98%", "client retention"],
            ].map(([stat, label]) => (
              <div key={label} className="border-t border-cream/20 pt-6">
                <p className="display text-7xl text-chartreuse">{stat}</p>
                <p className="mt-2 eyebrow">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-espresso py-32 text-cream text-center">
          <div className="container-page">
            <h2 className="display text-5xl text-chartreuse md:text-7xl">
              Want to work together?
            </h2>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/book" className="btn-chartreuse">
                Book a call →
              </Link>
              <Link href="/services" className="btn border border-chartreuse text-chartreuse hover:bg-chartreuse hover:text-wine">
                See plans
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
