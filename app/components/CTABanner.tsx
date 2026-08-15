export default function CTABanner() {
  return (
    <section className="py-20 bg-surface relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          Ready to transform
          <br />
          <span className="text-primary italic">your property?</span>
        </h2>
        <p className="text-muted text-lg max-w-xl mx-auto mb-10">
          Free estimates. Quality work. No surprises. Reach out today and
          we&apos;ll respond within one business day.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-black font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-primary/20"
          >
            Get a Free Quote
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
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
          <a
            href="mailto:support@cadi67.com"
            className="inline-flex items-center gap-2 border border-border hover:border-foreground/30 text-foreground font-medium px-8 py-4 rounded-lg text-lg transition-all duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}
