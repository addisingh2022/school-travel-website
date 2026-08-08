export default function ContactForm() {
  return (
    <form action="/api/contact" method="post" className="grid gap-4 md:grid-cols-2">
      <label className="space-y-2 text-sm text-slate-700">
        <span>Name</span>
        <input name="name" type="text" required className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-accent/80 focus:ring-2 focus:ring-accent/10" />
      </label>
      <label className="space-y-2 text-sm text-slate-700">
        <span>School Name</span>
        <input name="school" type="text" required className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-accent/80 focus:ring-2 focus:ring-accent/10" />
      </label>
      <label className="space-y-2 text-sm text-slate-700">
        <span>Designation</span>
        <input name="designation" type="text" className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-accent/80 focus:ring-2 focus:ring-accent/10" />
      </label>
      <label className="space-y-2 text-sm text-slate-700">
        <span>City</span>
        <input name="city" type="text" className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-accent/80 focus:ring-2 focus:ring-accent/10" />
      </label>
      <label className="space-y-2 text-sm text-slate-700">
        <span>Phone</span>
        <input name="phone" type="tel" required className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-accent/80 focus:ring-2 focus:ring-accent/10" />
      </label>
      <label className="space-y-2 text-sm text-slate-700">
        <span>Email</span>
        <input name="email" type="email" required className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-accent/80 focus:ring-2 focus:ring-accent/10" />
      </label>
      <label className="space-y-2 text-sm text-slate-700 md:col-span-2">
        <span>Number of Students</span>
        <input name="students" type="number" min="1" className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-accent/80 focus:ring-2 focus:ring-accent/10" />
      </label>
      <label className="space-y-2 text-sm text-slate-700 md:col-span-2">
        <span>Class/Grade</span>
        <input name="grade" type="text" className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-accent/80 focus:ring-2 focus:ring-accent/10" />
      </label>
      <label className="space-y-2 text-sm text-slate-700 md:col-span-2">
        <span>Message</span>
        <textarea name="message" rows={5} className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-accent/80 focus:ring-2 focus:ring-accent/10" />
      </label>
      <button type="submit" className="md:col-span-2 inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-900">
        Send Enquiry
      </button>
    </form>
  );
}
