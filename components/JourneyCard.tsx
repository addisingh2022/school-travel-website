type JourneyCardProps = {
  title: string;
  ageGroup: string;
  duration: string;
  theme: string;
};

export default function JourneyCard({ title, ageGroup, duration, theme }: JourneyCardProps) {
  return (
    <article className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-soft">
      <h3 className="text-xl font-semibold text-navy">{title}</h3>
      <div className="mt-4 space-y-3 text-sm text-slate-600">
        <p>
          <span className="font-semibold text-slate-900">Age Group:</span> {ageGroup}
        </p>
        <p>
          <span className="font-semibold text-slate-900">Duration:</span> {duration}
        </p>
        <p>
          <span className="font-semibold text-slate-900">Themes:</span> {theme}
        </p>
      </div>
      <button className="mt-6 inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-5 py-2 text-sm font-semibold text-navy transition hover:border-accent hover:text-accent">
        View Journey
      </button>
    </article>
  );
}
