export default function PrivacyPage() {
  return (
    <div className="bg-soft py-20">
      <div className="container mx-auto space-y-8">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Privacy Policy</p>
          <h1 className="text-3xl font-semibold text-navy sm:text-4xl">Privacy and trust for Beyond4Walls visitors</h1>
          <p className="text-base leading-7 text-slate-600">
            Beyond4Walls is committed to protecting your information. This site collects only the details you provide through the enquiry form and uses them to support your request.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-soft">
          <div className="space-y-6 text-slate-700">
            <div>
              <h2 className="text-xl font-semibold text-navy">Information we collect</h2>
              <p className="mt-3 leading-7">We collect only the information you share in the contact form, including name, school, email and phone details.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-navy">How we use it</h2>
              <p className="mt-3 leading-7">Information is used to respond to your enquiry, plan a journey and support subsequent school coordination.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-navy">Security and trust</h2>
              <p className="mt-3 leading-7">We aim to keep your information safe and share it only with team members needed to respond to your enquiry.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
