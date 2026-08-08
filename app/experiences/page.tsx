import Link from 'next/link';
import SectionHeading from '../../components/SectionHeading';

const sections = [
  {
    id: 'heritage',
    title: 'Heritage & Culture',
    description: 'Guided school journeys through monuments, museums, craft clusters and cultural landmarks.',
  },
  {
    id: 'science',
    title: 'Science & Innovation',
    description: 'Visits to laboratories, innovation hubs, science centres and technology campuses.',
  },
  {
    id: 'business',
    title: 'Business & Entrepreneurship',
    description: 'Learning from startups, enterprises and leaders who shape modern business thinking.',
  },
  {
    id: 'environment',
    title: 'Environment & Sustainability',
    description: 'Hands-on learning with conservation projects, green campuses and sustainability education.',
  },
  {
    id: 'leadership',
    title: 'Leadership & Life Skills',
    description: 'Structured experiences that help young learners build confidence, communication and empathy.',
  },
  {
    id: 'industry',
    title: 'Industry & Career Exposure',
    description: 'Career-connected visits that help students understand future pathways and skills in demand.',
  },
];

export default function ExperiencesPage() {
  return (
    <div className="space-y-20 bg-soft py-20">
      <section className="container mx-auto space-y-6">
        <SectionHeading title="Experiences" description="Experiences That Stay With Students" />
        <p className="max-w-2xl text-base leading-7 text-slate-600">
          Beyond4Walls partners with schools to design journey experiences that are meaningful, safe and aligned with learning outcomes.
        </p>
      </section>

      <section className="container mx-auto grid gap-6">
        {sections.map((section) => (
          <article key={section.id} id={section.id} className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-soft">
            <div className="flex items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-semibold text-navy">{section.title}</h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">{section.description}</p>
              </div>
              <Link href="/contact" className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-navy transition hover:border-accent hover:text-accent">
                Explore
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
