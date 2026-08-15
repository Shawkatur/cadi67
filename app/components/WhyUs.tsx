const reasons = [
  "Real-time photo verification of all project work",
  "Transparent pricing — no hidden fees or surprise charges",
  "Licensed & insured professionals on every job",
  "Single point of contact for all your property needs",
  "Fast turnaround — residential & commercial",
];

const stats = [
  { num: "100+", label: "Projects Completed" },
  { num: "6+", label: "Core Services" },
  { num: "NYC", label: "Metro Coverage" },
  { num: "24/7", label: "Availability" },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-3">
              Why Choose Us
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Your Trusted Property Partner
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-8">
              We work directly with homeowners, property managers, and investors
              who need reliable, documented, quality-driven crews. Our team
              communicates in real time — sending progress photos, repair
              estimates, and status updates so you&apos;re always in the loop.
            </p>

            <ul className="space-y-4 mb-10">
              {reasons.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="text-foreground">{r}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-black font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 hover:scale-[1.02]"
            >
              Partner With Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-5">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-background border border-border rounded-2xl p-8 text-center hover:border-primary/30 transition-colors"
              >
                <div className="text-4xl font-bold text-primary mb-2">{s.num}</div>
                <div className="text-sm text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
