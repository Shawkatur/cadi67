export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#0d0d1a]" />
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Copy */}
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Serving Corona, NY &amp; Surrounding Areas
            </span>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
              Building &amp;
              <br />
              <span className="text-primary italic">Transforming</span>
              <br />
              Properties.
            </h1>

            <p className="text-lg text-muted max-w-lg mb-8 leading-relaxed">
              From full renovations and new construction to painting, flooring, and
              ongoing maintenance — CADI67 is your single source for professional
              property services in Queens and beyond.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-black font-semibold px-7 py-3.5 rounded-lg text-base transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-primary/20"
              >
                Request a Free Estimate
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
                href="#services"
                className="inline-flex items-center gap-2 border border-border hover:border-foreground/30 text-foreground font-medium px-7 py-3.5 rounded-lg text-base transition-all duration-200"
              >
                Our Services
              </a>
            </div>

            {/* Trust pills */}
            <div className="flex flex-wrap gap-3">
              {["Licensed & Insured", "Photo-Verified Work", "Free Estimates"].map(
                (item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 text-sm text-muted bg-surface-light border border-border px-3 py-1.5 rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right — Visual */}
          <div className="relative hidden lg:block animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Stat chips */}
              <div className="absolute -top-4 -left-4 z-20 bg-surface border border-border rounded-xl px-4 py-3 shadow-xl">
                <div className="text-2xl font-bold text-primary">100+</div>
                <div className="text-xs text-muted">Projects Done</div>
              </div>
              <div className="absolute -bottom-4 -right-4 z-20 bg-surface border border-border rounded-xl px-4 py-3 shadow-xl">
                <div className="text-2xl font-bold text-primary">NYC</div>
                <div className="text-xs text-muted">Metro Area</div>
              </div>

              {/* Photo grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-3">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-surface-light border border-border">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center">
                      <span className="text-6xl">🏗️</span>
                    </div>
                    <div className="absolute bottom-3 left-3 bg-black/70 text-white text-xs font-semibold px-2.5 py-1 rounded">
                      Renovation
                    </div>
                  </div>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-surface-light border border-border">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent flex items-center justify-center">
                      <span className="text-5xl">🔨</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3 pt-8">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-surface-light border border-border">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent flex items-center justify-center">
                      <span className="text-5xl">🎨</span>
                    </div>
                  </div>
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-surface-light border border-border">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent flex items-center justify-center">
                      <span className="text-6xl">🏠</span>
                    </div>
                    <div className="absolute bottom-3 left-3 bg-black/70 text-white text-xs font-semibold px-2.5 py-1 rounded">
                      Complete
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted text-xs tracking-widest uppercase">
        <span>Scroll</span>
        <div className="w-px h-8 bg-border overflow-hidden">
          <div className="w-full h-full bg-primary" style={{ animation: "scroll-line 2s ease-in-out infinite" }} />
        </div>
      </div>
    </section>
  );
}
