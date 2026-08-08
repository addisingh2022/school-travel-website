export default function SectionHeading({ title, description }: { title: string; description: string }) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">{title}</p>
      <p className="mt-4 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">{description}</p>
    </div>
  );
}
