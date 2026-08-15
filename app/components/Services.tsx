"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
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
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
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
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <span className="inline-block text-cta text-sm font-semibold tracking-widest uppercase mb-3">
            What We Do
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 font-[family-name:var(--font-heading)] text-foreground">
            Comprehensive Property Services
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            A single source for every stage of property care — from routine
            maintenance to complete transformation.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((s) => (
            <motion.div
              key={s.num}
              variants={fadeUp}
              className="group relative bg-surface border border-border rounded-2xl p-7 hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <span className="absolute top-6 right-6 text-5xl font-extrabold text-border/60 group-hover:text-primary/10 transition-colors font-[family-name:var(--font-heading)]">
                {s.num}
              </span>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                {s.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 font-[family-name:var(--font-heading)]">{s.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
