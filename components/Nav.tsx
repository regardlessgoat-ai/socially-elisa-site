import Link from "next/link";

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-chartreuse/15 bg-wine/85 backdrop-blur-md">
      <div className="container-page flex items-center justify-between py-4 md:py-5">
        <Link
          href="/"
          aria-label="Socially Elisa — home"
          className="display leading-[0.78] text-chartreuse text-xl md:text-2xl"
        >
          socially
          <br />
          elisa
        </Link>
        <nav className="hidden items-center gap-10 md:flex">
          {[
            ["Work", "/work"],
            ["Services", "/services"],
            ["About", "/about"],
            ["Contact", "/contact"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="text-base font-medium tracking-wide text-chartreuse transition hover:text-cream"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
