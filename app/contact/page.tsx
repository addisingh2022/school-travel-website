import ContactForm from '../../components/ContactForm';

export default function ContactPage() {
  return (
    <div className="space-y-20 bg-soft py-20">
      <section className="container mx-auto space-y-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Contact</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">Start a school journey enquiry</h1>
          <p className="mt-5 text-base leading-7 text-slate-600">
            Share your needs and we’ll help design a journey that connects your curriculum to the world.
          </p>
        </div>
      </section>

      <section className="container mx-auto grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl bg-white p-8 shadow-soft">
          <ContactForm />
        </div>

        <div className="space-y-8 rounded-3xl bg-white p-8 shadow-soft">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Contact details</p>
            <p className="mt-4 text-xl font-semibold text-navy">Reach the Beyond4Walls team</p>
          </div>
          <div className="space-y-4 text-slate-700">
            <p>
              <span className="font-semibold text-slate-900">Email:</span> Beyond4wallseducation@gmail.com
            </p>
            
            <p>
              <span className="font-semibold text-slate-900">WhatsApp:</span> +91 7303371236
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
