"use client";

import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.04 } },
};

const states = [
  "Alabama",
  "Arizona",
  "California",
  "Colorado",
  "Florida",
  "Georgia",
  "Illinois",
  "Indiana",
  "Kentucky",
  "Missouri",
  "Nevada",
  "New York",
];

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="inline-block text-cta text-xs sm:text-sm font-semibold tracking-widest uppercase mb-2 sm:mb-3">
            Where We Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-3 sm:mb-4 font-[family-name:var(--font-heading)] text-foreground">
            Service Areas
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto">
            We proudly serve clients across {states.length} states. Contact us to discuss your project.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto"
        >
          {states.map((state) => (
            <motion.div
              key={state}
              variants={fadeUp}
              className="group flex items-center gap-3 bg-surface border border-border rounded-xl px-4 py-3.5 sm:px-5 sm:py-4 hover:border-primary/30 hover:shadow-md transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.75"
                stroke="currentColor"
                className="w-5 h-5 text-primary flex-shrink-0"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span className="font-semibold text-sm sm:text-base text-foreground">{state}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-10 sm:mt-14 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-surface border border-border rounded-xl sm:rounded-2xl px-5 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </span>
              <a href="tel:+19294565089" className="font-bold text-foreground hover:text-primary transition-colors text-sm sm:text-base">
                (929) 456-5089
              </a>
            </div>
            <div className="hidden sm:block w-px h-6 bg-border" />
            <div className="block sm:hidden w-full h-px bg-border" />
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </span>
              <a href="mailto:support@cadi67.com" className="font-bold text-foreground hover:text-primary transition-colors text-sm sm:text-base break-all sm:break-normal">
                support@cadi67.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
