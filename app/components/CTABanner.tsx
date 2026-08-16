export default function CTABanner() {
  return (
    <section className="py-14 sm:py-20 bg-primary relative overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)", backgroundSize: "30px 30px" }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-3 sm:mb-4 text-white font-[family-name:var(--font-heading)]">
          Ready to transform
          <br />
          <span className="text-white/80 italic">your property?</span>
        </h2>
        <p className="text-white/80 text-base sm:text-lg max-w-xl mx-auto mb-8 sm:mb-10">
          Free estimates. Quality work. No surprises. Reach out today and
          we&apos;ll respond within one business day.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-cta hover:bg-cta-dark text-white font-semibold px-6 sm:px-8 py-4 rounded-lg text-base sm:text-lg transition-all duration-200 hover:scale-[1.02] shadow-lg min-h-[52px]"
          >
            Get a Free Quote
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="mailto:support@cadi67.com"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-medium px-6 sm:px-8 py-4 rounded-lg text-base sm:text-lg transition-all duration-200 min-h-[52px]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}
