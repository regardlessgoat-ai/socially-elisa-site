import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Flower from "@/components/Flower";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";

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
    title: "Websites",
    desc: "Sites that look as intentional as your brand. Designed, built, and handed off — no plugin soup, no compromises.",
    items: ["Custom design", "Webflow / Shopify", "Launch & handoff"],
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
              className="pointer-events-none absolute right-4 top-20 z-0 hidden h-28 w-28 opacity-95 md:right-8 md:top-24 md:block md:h-32 md:w-32 lg:right-12 lg:top-28 lg:h-36 lg:w-36"
            />
            <Flower
              aria-hidden
              className="pointer-events-none absolute bottom-4 left-4 z-0 hidden h-28 w-28 opacity-95 md:bottom-6 md:left-2 md:block md:h-36 md:w-36 lg:bottom-8 lg:left-2 lg:h-44 lg:w-44"
              petal="#66033C"
              center="#CAD183"
              stroke="#CAD183"
            />
            <div className="relative z-10">
              <h1 className="sr-only">Socially Elisa</h1>
              <img
                src="/logo.svg"
                alt="Socially Elisa"
                className="mx-auto block h-auto w-[82vw] max-w-[560px] md:w-[30rem] lg:w-[40rem] xl:w-[46rem]"
              />
              <div className="mt-12 grid items-end gap-8 md:grid-cols-[1fr_auto] md:pl-24 lg:pl-36 xl:pl-48">
                <p className="max-w-2xl text-lg text-cream/85">
                  Socially Elisa is an agency that goes beyond the obvious, like
                  a flower, imposing yet delicate. Its focus is not only on
                  helping companies achieve excellence in social media, but also
                  on bringing a human side with social events for female
                  interaction and networking. The entire creative process was
                  designed to combine a fun, modern aesthetic with a visually
                  appealing design that evokes genuine interest, almost like a
                  hug.
                </p>
                <div className="flex flex-wrap gap-4 md:justify-end">
                  <Link href="/book" className="btn-chartreuse">
                    Book a call →
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
            <Reveal className="reveal-cards mt-16 grid gap-6 md:grid-cols-3">
              {services.map((s, i) => (
                <article
                  key={s.title}
                  className={`relative rounded-3xl p-8 ${
                    i === 1
                      ? "bg-wine text-chartreuse"
                      : "bg-chartreuse text-wine"
                  }`}
                >
                  {i === 2 && (
                    /* static mushroom perched on the top-right corner of the Websites card */
                    <img
                      src="/mushroom-maroon.svg"
                      alt=""
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-4 -top-[52px] z-10 h-24 w-auto select-none md:-top-[120px] md:h-[136px]"
                    />
                  )}
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
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-wine py-32 text-cream">
          <img
            src="/mascot.svg"
            alt=""
            aria-hidden
            className="pointer-events-none absolute left-4 bottom-0 z-0 hidden h-auto w-24 select-none md:left-12 md:block md:w-32 lg:left-20 lg:w-40"
          />
          <img
            src="/mascot.svg"
            alt=""
            aria-hidden
            className="pointer-events-none absolute right-4 bottom-0 z-0 hidden h-auto w-24 -scale-x-100 select-none md:right-12 md:block md:w-32 lg:right-20 lg:w-40"
          />
          <div className="container-page relative z-10 text-center">
            <p className="eyebrow text-chartreuse">Ready when you are</p>
            <h2 className="display mt-6 text-6xl text-cream md:text-8xl">
              Let&apos;s build
              <br />
              <span className="text-chartreuse">something pretty.</span>
            </h2>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <Link href="/book" className="btn-chartreuse">
                Book a call →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
