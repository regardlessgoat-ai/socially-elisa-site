import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Flower from "@/components/Flower";
import Marquee from "@/components/Marquee";

const services = [
  {
    title: "Social Media",
    desc: "Strategy, content, scheduling, community. We grow the channels that grow your brand.",
    items: ["Content planning", "Reels & TikTok", "Community management"],
  },
  {
    title: "Branding",
    desc: "Identity that feels like a hug — and like a brand people can't stop screenshotting.",
    items: ["Visual identity", "Brand voice", "Guidelines & assets"],
  },
  {
    title: "Marketing",
    desc: "Paid social, partnerships, launches. Strategy first, taste forever.",
    items: ["Paid social", "Campaign launches", "Influencer + UGC"],
  },
];

const work = [
  { name: "Nami", tag: "Branding", color: "bg-wine text-chartreuse" },
  { name: "Le Date", tag: "Social", color: "bg-chartreuse text-wine" },
  { name: "Organifi", tag: "Campaign", color: "bg-espresso text-chartreuse" },
  { name: "Solara", tag: "Identity", color: "bg-wine text-cream" },
  { name: "Bred", tag: "Launch", color: "bg-chartreuse text-espresso" },
  { name: "Volt", tag: "Social", color: "bg-espresso text-cream" },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-wine text-cream">
          <div className="container-page relative pb-24 pt-40 md:pb-32 md:pt-48">
            <Flower className="absolute -right-12 top-24 hidden h-72 w-72 spin-slow md:block" />
            <Flower
              className="absolute -left-16 bottom-16 hidden h-56 w-56 spin-slow md:block"
              petal="#66033C"
              center="#CAD183"
              stroke="#CAD183"
            />
            <p className="eyebrow text-chartreuse">
              Marketing · Branding · Social Media
            </p>
            <h1 className="display mt-6 text-[15vw] leading-[0.8] text-chartreuse md:text-[10rem]">
              socially
              <br />
              <span className="text-cream">elisa</span>
            </h1>
            <div className="mt-12 grid items-end gap-8 md:grid-cols-2">
              <p className="max-w-xl text-lg text-cream/85">
                A social-first studio that goes beyond the obvious. We build
                brands that feel like a flower — imposing, delicate, and
                impossible to scroll past.
              </p>
              <div className="flex flex-wrap gap-4 md:justify-end">
                <Link href="/services#pricing" className="btn-chartreuse">
                  See plans →
                </Link>
                <Link
                  href="/book"
                  className="btn border border-chartreuse text-chartreuse hover:bg-chartreuse hover:text-wine"
                >
                  Book a call
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <Marquee
          items={[
            "creative",
            "authentic",
            "independent",
            "marketing",
            "branding",
            "social media",
          ]}
        />

        {/* SERVICES */}
        <section id="services" className="bg-cream py-28">
          <div className="container-page">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="eyebrow text-wine">What we do</p>
                <h2 className="display mt-4 text-6xl text-wine md:text-7xl">
                  Three things.
                  <br />
                  Done with taste.
                </h2>
              </div>
              <p className="max-w-md text-espresso/70">
                Pick a subscription, stop juggling freelancers, and let us run
                the parts of your brand that move the needle.
              </p>
            </div>
            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {services.map((s, i) => (
                <article
                  key={s.title}
                  className={`rounded-3xl p-8 ${
                    i === 1
                      ? "bg-wine text-chartreuse"
                      : "bg-chartreuse text-wine"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <p className="eyebrow">0{i + 1}</p>
                    <Flower
                      className="h-12 w-12"
                      petal={i === 1 ? "#CAD183" : "#66033C"}
                      center={i === 1 ? "#66033C" : "#CAD183"}
                      stroke={i === 1 ? "#CAD183" : "#66033C"}
                    />
                  </div>
                  <h3 className="display mt-6 text-5xl">{s.title}</h3>
                  <p className="mt-4 text-sm">{s.desc}</p>
                  <ul className="mt-6 space-y-2 text-sm">
                    {s.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 border-t border-current/20 pt-2"
                      >
                        <span>✺</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WORK */}
        <section className="bg-espresso py-28 text-cream">
          <div className="container-page">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="eyebrow text-chartreuse">Selected work</p>
                <h2 className="display mt-4 text-6xl text-cream md:text-7xl">
                  Clients we love.
                </h2>
              </div>
              <Link href="/work" className="btn-chartreuse">
                See all →
              </Link>
            </div>
            <div className="mt-16 grid gap-4 md:grid-cols-3">
              {work.map((w) => (
                <div
                  key={w.name}
                  className={`group relative aspect-[4/5] overflow-hidden rounded-2xl ${w.color}`}
                >
                  <div className="absolute left-6 top-6">
                    <p className="eyebrow">{w.tag}</p>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                    <h3 className="display text-5xl">{w.name}</h3>
                    <span className="text-xs">→</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT PREVIEW */}
        <section className="bg-chartreuse py-28 text-wine">
          <div className="container-page grid items-center gap-16 md:grid-cols-2">
            <div>
              <p className="eyebrow">About</p>
              <h2 className="display mt-4 text-6xl md:text-7xl">
                A flower in
                <br /> a world of weeds.
              </h2>
              <p className="mt-6 max-w-md text-espresso/80">
                Socially Elisa is a marketing agency built by a creative who
                got tired of brands that sound the same. We mix sharp
                strategy with a softer, more human way of showing up — for
                companies, and for the women building them.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-wine px-4 py-1 text-xs uppercase tracking-[0.25em]">
                  Creative
                </span>
                <span className="rounded-full border border-wine px-4 py-1 text-xs uppercase tracking-[0.25em]">
                  Authentic
                </span>
                <span className="rounded-full border border-wine px-4 py-1 text-xs uppercase tracking-[0.25em]">
                  Independent
                </span>
              </div>
              <Link href="/about" className="btn-wine mt-10">
                Meet Elisa →
              </Link>
            </div>
            <div className="relative aspect-square w-full max-w-lg justify-self-end">
              <Flower className="absolute inset-0" />
              <Flower
                className="absolute right-10 top-10 h-32 w-32"
                petal="#311507"
                center="#CAD183"
                stroke="#311507"
              />
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="bg-cream py-28">
          <div className="container-page">
            <div className="mx-auto max-w-3xl text-center">
              <Flower className="mx-auto h-16 w-16" />
              <p className="display mt-8 text-3xl text-wine md:text-4xl">
                “Working with Elisa was the first time a marketing agency
                actually felt like part of our team. The content looks
                incredible — and the numbers backed it up.”
              </p>
              <p className="mt-8 eyebrow text-espresso">
                — A future happy client
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-wine py-32 text-cream">
          <div className="container-page text-center">
            <p className="eyebrow text-chartreuse">Ready when you are</p>
            <h2 className="display mt-6 text-6xl text-cream md:text-8xl">
              Let&apos;s build
              <br />
              <span className="text-chartreuse">something pretty.</span>
            </h2>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <Link href="/services#pricing" className="btn-chartreuse">
                View subscription plans
              </Link>
              <Link
                href="/book"
                className="btn border border-chartreuse text-chartreuse hover:bg-chartreuse hover:text-wine"
              >
                Book a call
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
