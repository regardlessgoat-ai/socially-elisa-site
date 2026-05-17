import Link from "next/link";
import Image from "next/image";
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
              className="pointer-events-none absolute bottom-4 left-4 z-0 hidden h-28 w-28 opacity-95 md:bottom-6 md:left-8 md:block md:h-36 md:w-36 lg:bottom-8 lg:left-12 lg:h-44 lg:w-44"
              petal="#66033C"
              center="#CAD183"
              stroke="#CAD183"
            />
            <div className="relative z-10 md:pl-48 lg:pl-72 xl:pl-96">
              <h1 className="sr-only">Socially Elisa</h1>
              <Image
                src="/logo.png"
                alt="Socially Elisa"
                width={434}
                height={301}
                priority
                className="h-auto w-[70vw] max-w-[480px] md:w-[26rem] lg:w-[34rem] xl:w-[40rem]"
              />
              <div className="mt-12 grid items-end gap-8 md:grid-cols-2">
                <p className="max-w-xl text-lg text-cream/85">
                  A social-first studio that goes beyond the obvious. We build
                  brands that feel like a flower — imposing, delicate, and
                  impossible to scroll past.
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

        {/* CTA */}
        <section className="relative overflow-hidden bg-wine py-32 text-cream">
          <Image
            src="/mascot.png"
            alt=""
            aria-hidden
            width={1000}
            height={1498}
            className="pointer-events-none absolute left-4 bottom-0 z-0 hidden h-auto w-24 select-none md:left-12 md:block md:w-32 lg:left-20 lg:w-40"
          />
          <Image
            src="/mascot.png"
            alt=""
            aria-hidden
            width={1000}
            height={1498}
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
