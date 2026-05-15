import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const projects = [
  { name: "Nami", tag: "Branding", color: "bg-wine text-chartreuse" },
  { name: "Le Date", tag: "Social", color: "bg-chartreuse text-wine" },
  { name: "Organifi", tag: "Campaign", color: "bg-espresso text-chartreuse" },
  { name: "Solara Avenue", tag: "Identity", color: "bg-wine text-cream" },
  { name: "Bred", tag: "Launch", color: "bg-chartreuse text-espresso" },
  { name: "Volt", tag: "Social", color: "bg-espresso text-cream" },
  { name: "Omna", tag: "Branding", color: "bg-wine text-chartreuse" },
  { name: "Greenergy", tag: "Campaign", color: "bg-chartreuse text-wine" },
  { name: "Daughters of Ra", tag: "Identity", color: "bg-espresso text-chartreuse" },
];

export default function WorkPage() {
  return (
    <>
      <Nav />
      <main className="bg-cream pt-32">
        <section className="container-page py-16">
          <p className="eyebrow text-wine">Selected work</p>
          <h1 className="display mt-4 text-6xl text-wine md:text-9xl">
            Brands we love.
          </h1>
          <p className="mt-6 max-w-2xl text-espresso/80">
            A peek at recent collaborations. Want yours here next? Book a call.
          </p>
        </section>

        <section className="container-page pb-32">
          <div className="grid gap-4 md:grid-cols-3">
            {projects.map((p) => (
              <div
                key={p.name}
                className={`group relative aspect-[4/5] overflow-hidden rounded-2xl ${p.color} p-6`}
              >
                <p className="eyebrow">{p.tag}</p>
                <h3 className="display absolute bottom-6 left-6 right-6 text-5xl">
                  {p.name}
                </h3>
              </div>
            ))}
          </div>

          <div className="mt-20 rounded-3xl bg-wine p-12 text-center text-cream">
            <h2 className="display text-4xl text-chartreuse md:text-6xl">
              Your brand, here.
            </h2>
            <Link href="/book" className="btn-chartreuse mt-8">
              Book a call →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
