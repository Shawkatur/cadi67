"use client";

import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const services = [
  {
    num: "01",
    title: "Renovation & Remodeling",
    desc: "Complete kitchen, bathroom, and basement renovations. We transform outdated spaces into modern, functional living areas.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Construction & Builds",
    desc: "New construction, additions, framing, drywall, and structural work. From foundation to finish, built to code and built to last.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Painting Services",
    desc: "Interior and exterior painting with premium finishes. Clean lines, thorough prep, and lasting results every time.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Flooring Installation",
    desc: "Hardwood, LVP, tile, and laminate flooring. Expert installation from subfloor prep to final polish.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Property Maintenance",
    desc: "Routine upkeep, repairs, HVAC filters, plumbing fixes, and seasonal maintenance to keep your property in top shape.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Tree Removal & Exterior",
    desc: "Tree removal, landscaping, cleanup, and exterior maintenance. Keep your property safe and looking its best year-round.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 20h12M12 20v-4m0 0l-4-4h2l-3-4h2.5L12 4l2.5 4H17l-3 4h2l-4 4z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block text-cta text-xs sm:text-sm font-semibold tracking-widest uppercase mb-2 sm:mb-3">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-3 sm:mb-4 font-[family-name:var(--font-heading)] text-foreground">
            Comprehensive Property Services
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto">
            A single source for every stage of property care, from routine
            maintenance to complete transformation.
          </p>
        </motion.div>

        {/* Grid — 1 col mobile, 2 col tablet, 3 col desktop */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {services.map((s) => (
            <motion.div
              key={s.num}
              variants={fadeUp}
              className="group relative bg-surface border border-border rounded-xl sm:rounded-2xl p-5 sm:p-7 hover:border-primary/30 hover:shadow-lg transition-all duration-300 active:scale-[0.98] sm:hover:-translate-y-1"
            >
              <span className="absolute top-4 right-4 sm:top-6 sm:right-6 text-4xl sm:text-5xl font-extrabold text-border/60 group-hover:text-primary/10 transition-colors font-[family-name:var(--font-heading)]">
                {s.num}
              </span>
              <div className="w-11 h-11 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 sm:mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                {s.icon}
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-1.5 sm:mb-2 font-[family-name:var(--font-heading)]">{s.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
