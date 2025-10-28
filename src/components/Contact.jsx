import { Phone, Mail, MapPin, Check } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    // In a real app, send to backend. For now, just simulate success.
    console.log('Lead submitted:', data);
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative py-20 sm:py-24 bg-neutral-950">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(34,197,94,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Ready to elevate your home?</h2>
            <p className="mt-3 text-neutral-300">Share a few details and our team will reach out within one business day to schedule your free consultation.</p>

            <ul className="mt-6 space-y-3 text-neutral-200">
              {[
                'Licensed, bonded, and insured',
                'Premium materials and transparent pricing',
                'Dedicated project management from start to finish',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid sm:grid-cols-3 gap-4 text-sm">
              <a href="tel:+15555550123" className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 transition">
                <Phone className="h-4 w-4" /> (555) 555-0123
              </a>
              <a href="mailto:hello@novaremodel.com" className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 transition">
                <Mail className="h-4 w-4" /> hello@novaremodel.com
              </a>
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <MapPin className="h-4 w-4" /> Los Angeles, CA
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
              {!submitted ? (
                <>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-neutral-300">Full name</label>
                      <input name="name" required className="mt-1 w-full rounded-xl bg-neutral-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/50" placeholder="Jane Smith" />
                    </div>
                    <div>
                      <label className="text-sm text-neutral-300">Email</label>
                      <input type="email" name="email" required className="mt-1 w-full rounded-xl bg-neutral-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/50" placeholder="jane@email.com" />
                    </div>
                    <div>
                      <label className="text-sm text-neutral-300">Phone</label>
                      <input name="phone" required className="mt-1 w-full rounded-xl bg-neutral-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/50" placeholder="(555) 000-0000" />
                    </div>
                    <div>
                      <label className="text-sm text-neutral-300">Project type</label>
                      <select name="type" className="mt-1 w-full rounded-xl bg-neutral-900/60 border border-white/10 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400/50">
                        <option>Kitchen</option>
                        <option>Bathroom</option>
                        <option>Full Home</option>
                        <option>Addition / ADU</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="text-sm text-neutral-300">Project details</label>
                      <textarea name="details" rows={4} className="mt-1 w-full rounded-xl bg-neutral-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/50" placeholder="Tell us about your space, style, and timeline..." />
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <p className="text-xs text-neutral-400">By submitting, you agree to our terms and privacy policy.</p>
                    <button type="submit" className="inline-flex rounded-full bg-white text-neutral-900 px-6 py-3 font-medium hover:bg-neutral-200 transition">Get My Free Quote</button>
                  </div>
                </>
              ) : (
                <div className="text-center py-10">
                  <div className="mx-auto h-12 w-12 rounded-full bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center">
                    <Check className="h-6 w-6 text-emerald-400" />
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold">Thank you!</h3>
                  <p className="mt-2 text-neutral-300">Your request has been received. Our team will contact you shortly.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-6 inline-flex rounded-full bg-white text-neutral-900 px-6 py-3 font-medium hover:bg-neutral-200 transition">Submit another</button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
