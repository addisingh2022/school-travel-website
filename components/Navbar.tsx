import Link from 'next/link';

const menu = [
  { label: 'Home', href: '/' },
  { label: 'Experiences', href: '/experiences' },
  { label: 'For Schools', href: '/for-schools' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  return (
    <header className="border-b border-slate-200/80 bg-white/95 backdrop-blur-xl sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-5">
        <Link href="/" className="text-xl font-semibold tracking-tight text-navy">
          Beyond4Walls
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
          {menu.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-navy">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-orange-500"
        >
          Plan a Journey
        </Link>
      </div>
    </header>
  );
}
