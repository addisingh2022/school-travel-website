import Link from 'next/link';

type ExperienceCardProps = {
  title: string;
  description: string;
  href: string;
  image: string;
};

export default function ExperienceCard({ title, description, href, image }: ExperienceCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-soft">
      <div className="h-48 bg-slate-100">
        <img src={image} alt={title} className="h-full w-full object-cover" loading="lazy" />
      </div>
      <div className="space-y-4 p-6">
        <h3 className="text-xl font-semibold text-navy">{title}</h3>
        <p className="text-sm leading-7 text-slate-600">{description}</p>
        <Link href={href} className="text-sm font-semibold text-accent transition hover:text-orange-500">
          Explore →
        </Link>
      </div>
    </article>
  );
}
