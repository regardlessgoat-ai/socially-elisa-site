import Link from "next/link";

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-chartreuse/15 bg-wine/85 backdrop-blur-md">
      <div className="container-page flex items-center justify-between py-4 md:py-5">
        <Link
          href="/"
          aria-label="Home"
          className="display text-chartreuse text-xl md:text-2xl"
        >
          home
        </Link>
        <Link
          href="/book"
          className="text-base font-medium tracking-wide text-chartreuse transition hover:text-cream"
        >
          Book a call →
        </Link>
      </div>
    </header>
  );
}
