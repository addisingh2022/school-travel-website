import SectionHeading from '../../components/SectionHeading';

export default function AboutPage() {
  return (
    <div className="space-y-20 bg-soft py-20">
      <section className="container mx-auto space-y-6">
        <SectionHeading title="About" description="Why We Exist" />
        <p className="max-w-3xl text-base leading-8 text-slate-600">
          Beyond4Walls was created with a simple belief: some of the most powerful lessons cannot be taught inside a classroom. We bring students closer to the places, people, ideas and experiences that make learning real.
        </p>
      </section>

      <section className="container mx-auto grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-center">
        <div className="rounded-3xl bg-white p-10 shadow-soft">
          <h2 className="text-3xl font-semibold text-navy">A modern education brand for real-world learning</h2>
          <p className="mt-5 text-base leading-7 text-slate-600">
            We design experiential journeys for schools that are built around learning outcomes, student engagement and long-term impact. Each program supports classroom goals while helping young learners connect with history, science, culture, industry and community.
          </p>
        </div>

        <div className="rounded-[2.5rem] bg-slate-100 p-10 shadow-soft">
          <div className="space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-accent">We believe in</p>
              <h3 className="mt-3 text-2xl font-semibold text-navy">Learning beyond the four walls of a classroom.</h3>
            </div>
            <ul className="space-y-4 text-slate-700">
              {[
                'Meaningful journeys that connect learning with the real world.',
                'Safe, structured experiences for every age group.',
                'Programs that are easy for schools to plan and manage.',
                'Memorable learning that supports confidence and curiosity.',
              ].map((item) => (
                <li key={item} className="rounded-3xl border border-slate-200/80 bg-white p-5">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
