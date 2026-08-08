import Link from 'next/link';
import SectionHeading from '../../components/SectionHeading';

export default function ForSchoolsPage() {
  return (
    <div className="space-y-20 bg-soft py-20">
      <section className="container mx-auto space-y-6">
        <SectionHeading title="For Schools" description="Your School. Your Curriculum. Your Journey." />
        <p className="max-w-2xl text-base leading-7 text-slate-600">
          Beyond4Walls designs safe, structured journeys that support learning outcomes and school objectives. We work closely with principals, coordinators and teachers to keep every program aligned to curriculum goals.
        </p>
      </section>

      <section className="container mx-auto grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8 rounded-3xl bg-white p-8 shadow-soft">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold text-navy">A clear process for every journey</h2>
            <p className="text-base leading-7 text-slate-600">
              From initial planning to post-journey reflection, each program is created for safety, learning impact and seamless coordination with your school.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              'Curriculum alignment and learning outcome mapping',
              'Comprehensive risk assessment and student safety systems',
              'Experienced leaders and local education guides',
              'Transparent communication with parents and school management',
            ].map((point) => (
              <div key={point} className="rounded-3xl border border-slate-200/80 p-6">
                <p className="text-base text-slate-700">{point}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-navy p-8 text-white shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-200">School Partnership</p>
          <h3 className="mt-4 text-3xl font-semibold">Design journeys that support students, teachers and leadership.</h3>
          <p className="mt-5 leading-7 text-slate-200">
            We partner with schools to make every journey purposeful, safe and easy to coordinate. Our plans adapt to your age group, board and subject focus.
          </p>
          <Link href="/contact" className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy transition hover:bg-slate-100">
            Design a Journey With Us
          </Link>
        </div>
      </section>
    </div>
  );
}
