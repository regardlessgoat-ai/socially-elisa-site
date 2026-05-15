import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Flower from "@/components/Flower";

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="bg-cream pt-32">
        <section className="container-page py-16">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="eyebrow text-wine">Contact</p>
              <h1 className="display mt-4 text-6xl text-wine md:text-8xl">
                Say hi.
              </h1>
              <p className="mt-6 max-w-md text-espresso/80">
                Drop us a line. We reply within one business day, usually
                faster — unless we&apos;re on a shoot.
              </p>

              <div className="mt-10 space-y-3 text-espresso">
                <p>
                  <span className="eyebrow text-wine">Email</span>
                  <br />
                  hello@sociallyelisa.com
                </p>
                <p>
                  <span className="eyebrow text-wine">Instagram</span>
                  <br />
                  @sociallyelisa
                </p>
              </div>

              <Link href="/book" className="btn-wine mt-10">
                Or book a call →
              </Link>
            </div>

            <form className="space-y-5 rounded-3xl bg-wine p-8 text-cream">
              <Field label="Name" type="text" />
              <Field label="Email" type="email" />
              <Field label="Company" type="text" />
              <label className="block">
                <span className="eyebrow text-chartreuse">What can we help with?</span>
                <textarea
                  rows={5}
                  className="mt-2 w-full rounded-xl border border-cream/20 bg-cream/10 px-4 py-3 text-cream outline-none placeholder:text-cream/40 focus:border-chartreuse"
                  placeholder="Tell us about your brand"
                />
              </label>
              <button type="button" className="btn-chartreuse w-full">
                Send →
              </button>
              <p className="text-xs text-cream/60">
                Demo form — wire to your inbox / Resend later.
              </p>
            </form>
          </div>
        </section>

        <section className="bg-wine py-16 text-cream">
          <div className="container-page flex flex-wrap items-center justify-between gap-6">
            <Flower
              className="h-16 w-16"
              petal="#CAD183"
              center="#E1DED9"
              stroke="#CAD183"
            />
            <p className="display text-3xl text-chartreuse md:text-5xl">
              Creative · Authentic · Independent
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="eyebrow text-chartreuse">{label}</span>
      <input
        {...props}
        className="mt-2 w-full rounded-xl border border-cream/20 bg-cream/10 px-4 py-3 text-cream outline-none placeholder:text-cream/40 focus:border-chartreuse"
      />
    </label>
  );
}
