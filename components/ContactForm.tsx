'use client';

import { FormEvent, useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to send enquiry');
      }

      setStatus('success');
      form.reset();
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus('error');
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 md:grid-cols-2"
    >
      <label className="space-y-2 text-sm text-slate-700">
        <span>Name</span>
        <input
          name="name"
          type="text"
          required
          className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-accent/80 focus:ring-2 focus:ring-accent/10"
        />
      </label>

      <label className="space-y-2 text-sm text-slate-700">
        <span>School Name</span>
        <input
          name="school"
          type="text"
          required
          className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-accent/80 focus:ring-2 focus:ring-accent/10"
        />
      </label>

      <label className="space-y-2 text-sm text-slate-700">
        <span>Designation</span>
        <input
          name="designation"
          type="text"
          className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-accent/80 focus:ring-2 focus:ring-accent/10"
        />
      </label>

      <label className="space-y-2 text-sm text-slate-700">
        <span>City</span>
        <input
          name="city"
          type="text"
          className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-accent/80 focus:ring-2 focus:ring-accent/10"
        />
      </label>

      <label className="space-y-2 text-sm text-slate-700">
        <span>Phone</span>
        <input
          name="phone"
          type="tel"
          required
          className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-accent/80 focus:ring-2 focus:ring-accent/10"
        />
      </label>

      <label className="space-y-2 text-sm text-slate-700">
        <span>Email</span>
        <input
          name="email"
          type="email"
          required
          className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-accent/80 focus:ring-2 focus:ring-accent/10"
        />
      </label>

      <label className="space-y-2 text-sm text-slate-700 md:col-span-2">
        <span>Message</span>
        <textarea
          name="message"
          rows={5}
          className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-accent/80 focus:ring-2 focus:ring-accent/10"
        />
      </label>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="md:col-span-2 inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending...' : 'Send Enquiry'}
      </button>

      {status === 'success' && (
        <div className="md:col-span-2 rounded-2xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
          ✓ Your enquiry has been sent successfully. We’ll get back to you soon.
        </div>
      )}

      {status === 'error' && (
        <div className="md:col-span-2 rounded-2xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          Something went wrong while sending your enquiry. Please try again.
        </div>
      )}
    </form>
  );
}