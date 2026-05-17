import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-wine text-cream">
      <div className="container-page py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              aria-label="Socially Elisa — home"
              className="display leading-[0.82] text-5xl text-chartreuse md:text-6xl"
            >
              socially
              <br />
              elisa
            </Link>
            <p className="mt-6 max-w-sm text-sm text-cream/70">
              Marketing · Branding · Social Media. Imposing yet delicate.
            </p>
          </div>
          <FooterCol
            title="Get in"
            links={[["Book a call", "/book"]]}
          />
          <FooterCol
            title="Follow"
            links={[
              ["Instagram", "https://instagram.com"],
              ["TikTok", "https://tiktok.com"],
              ["LinkedIn", "https://linkedin.com"],
            ]}
          />
        </div>
        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-cream/20 pt-8 text-xs uppercase tracking-[0.25em] text-cream/60 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Socially Elisa</p>
          <p>Creative · Authentic · Independent</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: [string, string][];
}) {
  return (
    <div>
      <p className="eyebrow text-chartreuse">{title}</p>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map(([label, href]) => (
          <li key={href}>
            <Link href={href} className="hover:text-chartreuse">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
