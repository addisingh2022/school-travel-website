import ContactForm from '../../components/ContactForm';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

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
              <span className="font-semibold text-slate-900">Address:</span>{' '}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Beyond4walls+Education+Block+1+Mini+Market+Opposite+Moti+Nagar+Metro+Station+New+Delhi+Delhi+110015"
                target="_blank"
                rel="noopener noreferrer"
              >
                Beyond4walls Education, Block 1, Mini Market, Opposite Moti Nagar Metro Station, New Delhi, Delhi, 110015
              </a>
            </p>
            <p>
              <span className="font-semibold text-slate-900">Email:</span>{' '}
              <a href="mailto:info@beyond4walls.in">info@beyond4walls.in</a>
            </p>

            <p>
              <span className="font-semibold text-slate-900">Call Us :</span>{' '}
              <a href="tel:+917303371236">+91 7303371236</a>
            </p>
          </div>

          <div className="flex items-center gap-5 pt-2">
            <a
              href="https://www.instagram.com/beyond4walls_education?igsh=NXJqcjYxeWxiMWZp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-black transition hover:opacity-60"
            >
              <FaInstagram size={26} />
            </a>
            <a
              href="https://www.linkedin.com/company/beyond4wallseducation/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-black transition hover:opacity-60"
            >
              <FaLinkedin size={26} />
            </a>
            <a
              href="https://wa.me/917303371236"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-black transition hover:opacity-60"
            >
              <FaWhatsapp size={26} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}