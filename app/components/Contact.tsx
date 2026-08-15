"use client";

import { useState, type FormEvent } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: wire up to email service / form backend
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <span className="inline-block text-cta text-sm font-semibold tracking-widest uppercase mb-3">
              Get In Touch
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 font-[family-name:var(--font-heading)] text-foreground">
              Request a Free Estimate
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-10">
              Tell us about your property and project needs. We&apos;ll respond
              within one business day with a detailed estimate.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <span className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </span>
                <div>
                  <div className="font-bold mb-0.5 font-[family-name:var(--font-heading)]">Email</div>
                  <a href="mailto:support@cadi67.com" className="text-muted hover:text-primary transition-colors">
                    support@cadi67.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <span className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </span>
                <div>
                  <div className="font-bold mb-0.5 font-[family-name:var(--font-heading)]">Phone</div>
                  <span className="text-muted">Coming soon</span>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <span className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </span>
                <div>
                  <div className="font-bold mb-0.5 font-[family-name:var(--font-heading)]">Address</div>
                  <span className="text-muted">
                    5409 108th St, Apt 1A
                    <br />
                    Corona, NY 11368
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white border border-border rounded-2xl p-8 shadow-sm">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2 font-[family-name:var(--font-heading)]">Thank You!</h3>
                <p className="text-muted">
                  We&apos;ve received your message and will get back to you
                  within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="John Smith"
                      className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-accent focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-accent focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="(555) 123-4567"
                    className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-accent focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                  >
                    <option value="">Select a service...</option>
                    <option value="renovation">Renovation &amp; Remodeling</option>
                    <option value="construction">Construction &amp; Builds</option>
                    <option value="painting">Painting Services</option>
                    <option value="flooring">Flooring Installation</option>
                    <option value="maintenance">Property Maintenance</option>
                    <option value="tree-removal">Tree Removal &amp; Exterior</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell us about your project — property type, scope, timeline..."
                    className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-accent focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-cta hover:bg-cta-dark text-white font-bold py-3.5 rounded-lg transition-all duration-200 hover:scale-[1.01] text-base shadow-md shadow-cta/20"
                >
                  Send Request
                </button>

                <p className="text-xs text-muted text-center">
                  We&apos;ll never share your info. Response within 1 business day.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
