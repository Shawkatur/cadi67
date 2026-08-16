"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay: i * 0.12 },
  }),
};

const trustBadges = [
  {
    label: "Licensed & Insured",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-primary flex-shrink-0">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    label: "Photo-Verified Work",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-primary flex-shrink-0">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
      </svg>
    ),
  },
  {
    label: "Free Estimates",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-primary flex-shrink-0">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden bg-surface">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #065F46 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16 sm:pt-28 sm:pb-20 w-full">
        {/* Mobile: single column. Desktop: two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Copy — always first on mobile */}
          <div>
            <motion.span
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 rounded-full mb-4 sm:mb-6"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Serving Corona, NY &amp; Surrounding Areas
            </motion.span>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.08] tracking-tight mb-4 sm:mb-6 font-[family-name:var(--font-heading)] text-foreground"
            >
              Building &amp;
              <br />
              <span className="text-primary italic">Transforming</span>
              <br />
              Properties.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-base sm:text-lg text-muted max-w-lg mb-6 sm:mb-8 leading-relaxed"
            >
              From full renovations and new construction to painting, flooring, and
              ongoing maintenance, CADI67 is your single source for professional
              property services in Queens and beyond.
            </motion.p>

            {/* CTAs — stacked on very small, side by side on sm+ */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-cta hover:bg-cta-dark text-white font-semibold px-6 sm:px-7 py-3.5 rounded-lg text-base transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-cta/20 min-h-[48px]"
              >
                Request a Free Estimate
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary/40 hover:border-primary hover:bg-primary/5 text-primary font-bold px-6 sm:px-7 py-3.5 rounded-lg text-base transition-all duration-200 min-h-[48px]"
              >
                Our Services
              </a>
            </motion.div>

            {/* Trust pills */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="flex flex-wrap gap-2 sm:gap-3"
            >
              {trustBadges.map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-foreground/70 bg-white border border-border px-3 py-2 rounded-full shadow-sm min-h-0 min-w-0"
                >
                  {badge.icon}
                  {badge.label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Photo grid — shows on mobile as 2-col, expands on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" as const }}
            className="relative mt-4 lg:mt-0"
          >
            <div className="relative">
              {/* Stat chips — hidden on mobile to save space */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="hidden sm:block absolute -top-4 -left-4 z-20 bg-white border border-border rounded-xl px-4 py-3 shadow-lg"
              >
                <div className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">100+</div>
                <div className="text-xs text-muted">Projects Done</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="hidden sm:block absolute -bottom-4 -right-4 z-20 bg-white border border-border rounded-xl px-4 py-3 shadow-lg"
              >
                <div className="text-2xl font-bold text-cta font-[family-name:var(--font-heading)]">NYC</div>
                <div className="text-xs text-muted">Metro Area</div>
              </motion.div>

              {/* 2-col photo grid on all screens */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <div className="space-y-2 sm:space-y-3">
                  <div className="group relative aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                    <Image src="/images/projects/tree-before-1.jpeg" alt="Tree removal, before" fill sizes="(max-width: 768px) 45vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 bg-white/90 text-foreground text-[10px] sm:text-xs font-semibold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded shadow-sm">
                      Before
                    </div>
                  </div>
                  <div className="group relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                    <Image src="/images/projects/cabinet-before-1.jpeg" alt="Cabinet work, before" fill sizes="(max-width: 768px) 45vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                </div>
                <div className="space-y-2 sm:space-y-3 pt-6 sm:pt-8">
                  <div className="group relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                    <Image src="/images/projects/tree-after-1.jpeg" alt="Tree removal, after" fill sizes="(max-width: 768px) 45vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 bg-primary/90 text-white text-[10px] sm:text-xs font-semibold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded shadow-sm">
                      After ✓
                    </div>
                  </div>
                  <div className="group relative aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                    <Image src="/images/projects/cabinet-after-1.jpeg" alt="Cabinet work, after" fill sizes="(max-width: 768px) 45vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 bg-primary/90 text-white text-[10px] sm:text-xs font-semibold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded shadow-sm">
                      Complete ✓
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint — hidden on mobile, they know to scroll */}
      <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-muted text-xs tracking-widest uppercase">
        <span>Scroll</span>
        <div className="w-px h-8 bg-border overflow-hidden">
          <div className="w-full h-full bg-primary" style={{ animation: "scroll-line 2s ease-in-out infinite" }} />
        </div>
      </div>
    </section>
  );
}
