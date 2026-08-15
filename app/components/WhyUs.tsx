"use client";

import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const reasons = [
  "Real-time photo verification of all project work",
  "Transparent pricing with no hidden fees or surprise charges",
  "Licensed & insured professionals on every job",
  "Single point of contact for all your property needs",
  "Fast turnaround for residential & commercial jobs",
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
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.span variants={fadeUp} className="inline-block text-cta text-sm font-semibold tracking-widest uppercase mb-3">
              Why Choose Us
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 font-[family-name:var(--font-heading)] text-foreground">
              Your Trusted Property Partner
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted text-lg leading-relaxed mb-8">
              We work directly with homeowners, property managers, and investors
              who need reliable, documented, quality-driven crews. Our team
              communicates in real time, sending progress photos, repair
              estimates, and status updates so you&apos;re always in the loop.
            </motion.p>

            <motion.ul variants={stagger} className="space-y-4 mb-10">
              {reasons.map((r) => (
                <motion.li key={r} variants={fadeUp} className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="text-foreground">{r}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.a
              variants={fadeUp}
              href="#contact"
              className="inline-flex items-center gap-2 bg-cta hover:bg-cta-dark text-white font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 hover:scale-[1.02] shadow-md shadow-cta/20"
            >
              Partner With Us
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                className="bg-white border border-border rounded-2xl p-8 text-center hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <div className="text-4xl font-extrabold text-primary mb-2 font-[family-name:var(--font-heading)]">{s.num}</div>
                <div className="text-sm text-muted font-medium">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
