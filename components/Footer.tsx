import Link from 'next/link';

const links = [
  { label: 'Experiences', href: '/experiences' },
  { label: 'For Schools', href: '/for-schools' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white py-14 text-slate-700">
      <div className="container mx-auto grid gap-10 md:grid-cols-[1.5fr_1fr]">
        <div>
          <p className="text-2xl font-semibold text-navy">Beyond4Walls</p>
          <p className="mt-3 max-w-xl text-sm leading-7">
            Learning Beyond the Classroom.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Explore</p>
          <div className="mt-5 flex flex-col gap-3 text-sm">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-navy">
                {link.label}
              </Link>
            ))}
            <Link href="/privacy" className="transition hover:text-navy">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
