import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Flower from "@/components/Flower";

export default function BookPage() {
  const calendlyUrl =
    process.env.NEXT_PUBLIC_CALENDLY_URL ||
    "https://calendly.com/your-handle/30min";

  return (
    <>
      <Nav />
      <main className="bg-cream pt-32">
        <section className="container-page py-16">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="eyebrow text-wine">Book a call</p>
              <h1 className="display mt-4 text-6xl text-wine md:text-8xl">
                Let&apos;s
                <br />
                <span className="text-chartreuse bg-wine px-4 inline-block rounded-2xl">
                  talk soon.
                </span>
              </h1>
              <p className="mt-8 max-w-md text-espresso/80">
                Pick a 30-minute slot below. No prep needed — just bring your
                brand, a coffee, and the questions you&apos;ve been holding on
                to. We&apos;ll do the rest.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-espresso/80">
                <li className="flex items-start gap-2">
                  <span className="text-wine">✺</span>
                  Free, no obligation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-wine">✺</span>
                  We&apos;ll prep a quick audit of your current socials
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-wine">✺</span>
                  Walk away with a clear next step (subscribe or not)
                </li>
              </ul>
            </div>
            <div className="relative aspect-square">
              <Flower className="absolute inset-0" />
            </div>
          </div>
        </section>

        <section className="border-t border-wine/15 bg-wine">
          <div className="container-page py-16">
            <p className="eyebrow text-chartreuse">Schedule</p>
            <h2 className="display mt-4 text-4xl text-chartreuse">
              Pick a time.
            </h2>
            <div className="mt-8 overflow-hidden rounded-3xl bg-cream">
              <iframe
                src={calendlyUrl}
                title="Schedule with Socially Elisa"
                className="h-[720px] w-full"
              />
            </div>
            <p className="mt-4 text-xs text-cream/60">
              Set <code className="text-chartreuse">NEXT_PUBLIC_CALENDLY_URL</code> in{" "}
              <code className="text-chartreuse">.env.local</code> to use your real Calendly link.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
