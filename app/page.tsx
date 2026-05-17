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

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-wine text-cream">
          <div className="container-page relative pb-24 pt-40 md:pb-32 md:pt-48">
            {/* Decorative flowers — pointer-events-none + z-0 so they
                never block clicks or sit on top of text. */}
            <Flower
              aria-hidden
              className="pointer-events-none absolute right-4 top-20 z-0 hidden h-32 w-32 opacity-95 md:right-8 md:top-24 md:block md:h-40 md:w-40 lg:right-12 lg:top-28 lg:h-48 lg:w-48"
            />
            <Flower
              aria-hidden
              className="pointer-events-none absolute bottom-4 left-4 z-0 hidden h-28 w-28 opacity-95 md:bottom-6 md:left-8 md:block md:h-36 md:w-36 lg:bottom-8 lg:left-12 lg:h-44 lg:w-44"
              petal="#66033C"
              center="#CAD183"
              stroke="#CAD183"
            />
            <div className="relative z-10 md:pl-32 lg:pl-44 xl:pl-64">
              <p className="eyebrow text-chartreuse">
                Marketing · Branding · Social Media
              </p>
              <h1 className="display mt-6 text-[13vw] leading-[0.82] text-chartreuse md:text-[8.5rem] lg:text-[10rem]">
                socially
                <br />
                elisa
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

        {/* ABOUT PREVIEW */}
        <section className="bg-chartreuse py-28 text-wine">
          <div className="container-page grid items-center gap-16 md:grid-cols-2">
            <div>
              <p className="eyebrow">About</p>
              <h2 className="display mt-4 text-6xl md:text-7xl">
                Meet Elisa.
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
              <Link href="/book" className="btn-wine mt-10">
                Book a call with Elisa →
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
