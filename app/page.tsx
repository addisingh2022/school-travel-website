import Link from 'next/link';
import SectionHeading from '../components/SectionHeading';
import ExperienceCard from '../components/ExperienceCard';
import JourneyCard from '../components/JourneyCard';

const cards = [
  { title: 'Learn by Exploring', description: 'Real places, real questions and learning that comes from discovery.' },
  { title: 'Connect Curriculum to Reality', description: 'Journeys built to reinforce classroom concepts through hands-on experiences.' },
  { title: 'Build Confidence & Curiosity', description: 'Students gain independence, empathy and real-world perspective.' },
  { title: 'Create Lasting Memories', description: 'Meaningful trips that stay with students long after the journey ends.' },
];

const experiences = [
  { title: 'Heritage & Culture', description: 'Explore Indian heritage sites, museums and cultural stories.', href: '/experiences#heritage', image: '/images/experience-heritage.svg' },
  { title: 'Science & Innovation', description: 'Visit labs, innovation hubs and technology centres.', href: '/experiences#science', image: '/images/experience-science.svg' },
  { title: 'Business & Entrepreneurship', description: 'Learn from startups, industry leaders and business classrooms.', href: '/experiences#business', image: '/images/experience-business.svg' },
  { title: 'Environment & Sustainability', description: 'Engage with conservation, ecology and sustainable learning.', href: '/experiences#environment', image: '/images/experience-environment.svg' },
  { title: 'Leadership & Life Skills', description: 'Build resilient, confident students through guided activities.', href: '/experiences#leadership', image: '/images/experience-leadership.svg' },
  { title: 'Industry & Career Exposure', description: 'Connect students to career pathways and future-ready skills.', href: '/experiences#industry', image: '/images/experience-industry.svg' },
];

const journeys = [
  { title: 'Delhi: History Beyond Textbooks', ageGroup: 'Class 6–10', duration: '4 days', theme: 'Heritage, history, civic learning' },
  { title: 'Jaipur: Culture, Architecture & Heritage', ageGroup: 'Class 7–11', duration: '3 days', theme: 'Culture, crafts, architecture' },
  { title: 'Bengaluru: Innovation & Future Careers', ageGroup: 'Class 9–12', duration: '4 days', theme: 'Innovation, careers, technology' },
];

export default function HomePage() {
  return (
    <div className="space-y-24">
      <section className="relative overflow-hidden bg-white">
        <div className="container mx-auto grid gap-10 items-center py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">Learning Beyond the Classroom</p>
            <div className="max-w-3xl space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
                Learning Begins Beyond the Four Walls.
              </h1>
              <p className="text-lg leading-8 text-slate-600">
                Curriculum-connected journeys that turn the real world into a classroom.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/experiences" className="inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-900">
                Explore Experiences
              </Link>
              <Link href="/for-schools" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-navy transition hover:border-accent hover:text-accent">
                Partner With Us
              </Link>
            </div>
          </div>

          <div className="rounded-[3rem] bg-slate-100 p-6 shadow-soft sm:p-8">
            <img src="/images/hero.svg" alt="Students exploring together on an educational field trip" className="h-full w-full rounded-[2rem] object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="bg-soft py-20">
        <div className="container mx-auto space-y-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Education, Outside the Classroom.</p>
            <p className="mt-4 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              We create meaningful learning experiences where students discover, question, explore and connect classroom concepts with the real world.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {cards.map((card) => (
              <article key={card.title} className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-soft">
                <p className="text-lg font-semibold text-navy">{card.title}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto space-y-12">
        <SectionHeading title="Experiences" description="Experiences That Stay With Students" />
        <div className="grid gap-6 md:grid-cols-3">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.title} title={experience.title} description={experience.description} href={experience.href} image={experience.image} />
          ))}
        </div>
      </section>

      <section className="bg-soft py-20">
        <div className="container mx-auto grid gap-10 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">From Classroom to Real World</p>
            <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              From Classroom to Real World
            </h2>
            <p className="text-base leading-7 text-slate-600">
              Every journey is designed with clear learning goals, strong support and reflection built in.
            </p>
          </div>
          <div className="grid gap-4">
            {['Understand the Learning Goal', 'Design the Experience', 'Execute the Journey', 'Reflect & Learn'].map((step, index) => (
              <div key={step} className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-soft">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-sm font-semibold text-white">
                    {`0${index + 1}`}
                  </div>
                  <p className="text-lg font-semibold text-navy">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto space-y-10">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Your School. Your Curriculum. Your Journey.</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              Your school, curriculum and learning goals are at the heart of every journey.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              Beyond4Walls works with educators to design safe, structured and learning-focused journeys aligned to age group, curriculum and objectives.
            </p>
            <Link href="/for-schools" className="mt-8 inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-900">
              Design a Journey With Us
            </Link>
          </div>
          <div className="rounded-[2.5rem] bg-slate-100 p-8 shadow-soft">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-500">For Schools</p>
            <p className="mt-4 text-xl font-semibold text-navy">Support for principals, teachers and school leadership throughout every stage.</p>
          </div>
        </div>
      </section>

      <section className="bg-soft py-20">
        <div className="container mx-auto space-y-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Featured Journeys</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              Journeys that balance learning, exploration and real-world connection.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {journeys.map((journey) => (
              <JourneyCard key={journey.title} title={journey.title} ageGroup={journey.ageGroup} duration={journey.duration} theme={journey.theme} />
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto space-y-10">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Learning With Responsibility</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              Learning with responsibility, structure and clarity.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              Every journey includes structured itineraries, experienced leaders, strong school coordination, student safety protocols and age-appropriate experiences.
            </p>
          </div>
          <ul className="grid gap-4 text-slate-700">
            {[
              'Structured itineraries',
              'Experienced trip leaders',
              'School coordination',
              'Student safety protocols',
              'Age-appropriate experiences',
              'Clear communication with schools and parents',
            ].map((item) => (
              <li key={item} className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-soft">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-navy py-20 text-white">
        <div className="container mx-auto grid gap-8 md:grid-cols-[1.2fr_0.8fr] items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-200">Where will your students learn next?</p>
            <p className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Tell us what your students need to learn. We’ll help create the experience.
            </p>
          </div>
          <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy transition hover:bg-slate-100">
            Plan a Journey
          </Link>
        </div>
      </section>
    </div>
  );
}
