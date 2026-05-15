import Link from "next/link";

export default function Nav() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="container-page flex items-center justify-between py-6">
        <Link href="/" className="display text-3xl text-wine">
          socially<span className="text-chartreuse">.</span>elisa
        </Link>
        <nav className="hidden gap-8 md:flex">
          {[
            ["Work", "/work"],
            ["Services", "/services"],
            ["About", "/about"],
            ["Contact", "/contact"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="text-sm tracking-wide text-espresso hover:text-wine"
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link href="/book" className="btn-wine text-xs">
          Book a call →
        </Link>
      </div>
    </header>
  );
}
