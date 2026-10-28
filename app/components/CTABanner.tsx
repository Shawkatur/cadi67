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
            href="tel:+19294565089"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-medium px-6 sm:px-8 py-4 rounded-lg text-base sm:text-lg transition-all duration-200 min-h-[52px]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            (929) 456-5089
          </a>
        </div>
      </div>
    </section>
  );
}
