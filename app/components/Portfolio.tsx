"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const ReactCompareSlider = dynamic(
  () => import("react-compare-slider").then((m) => m.ReactCompareSlider),
  { ssr: false }
);
const ReactCompareSliderImage = dynamic(
  () => import("react-compare-slider").then((m) => m.ReactCompareSliderImage),
  { ssr: false }
);
const ReactCompareSliderHandle = dynamic(
  () => import("react-compare-slider").then((m) => m.ReactCompareSliderHandle),
  { ssr: false }
);

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const projects = [
  {
    before: "/images/projects/tree-before-1.jpeg",
    after: "/images/projects/tree-after-1.jpeg",
    title: "Tree Removal & Yard Cleanup",
    desc: "Storm-damaged tree removed from fence line, debris cleared, yard fully restored.",
  },
  {
    before: "/images/projects/cabinet-before-1.jpeg",
    after: "/images/projects/cabinet-after-1.jpeg",
    title: "Kitchen Cabinet Repair",
    desc: "Damaged cabinet door replaced, drawer restored, hardware refit.",
  },
];

const galleryImages = [
  { src: "/images/projects/tree-after-2.jpeg", alt: "Tree removal — clean yard", tag: "Tree Removal" },
  { src: "/images/projects/tree-after-5.jpeg", alt: "Tree removal — completed", tag: "Exterior" },
  { src: "/images/projects/cabinet-after-2.jpeg", alt: "Cabinet work — completed", tag: "Cabinet Work" },
  { src: "/images/projects/tree-after-7.jpeg", alt: "Tree removal — debris cleared", tag: "Cleanup" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white">
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
            Our Work
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 font-[family-name:var(--font-heading)] text-foreground">
            Project Portfolio
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Real projects, real results. Drag the slider to see the transformation.
          </p>
        </motion.div>

        {/* Before/After Compare Sliders */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={fadeUp}>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-border">
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src={project.before}
                      alt={`${project.title} — before`}
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src={project.after}
                      alt={`${project.title} — after`}
                    />
                  }
                  handle={
                    <ReactCompareSliderHandle
                      buttonStyle={{
                        backdropFilter: undefined,
                        WebkitBackdropFilter: undefined,
                        background: "#065F46",
                        border: "3px solid white",
                        color: "white",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
                        width: 40,
                        height: 40,
                      }}
                      linesStyle={{
                        width: 3,
                        color: "white",
                      }}
                    />
                  }
                  style={{ aspectRatio: "4/3" }}
                  className="w-full"
                />
                {/* Labels */}
                <div className="absolute bottom-3 left-3 bg-red-600/90 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10 pointer-events-none">
                  Before
                </div>
                <div className="absolute bottom-3 right-3 bg-primary/90 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10 pointer-events-none">
                  After
                </div>
              </div>
              <h4 className="mt-4 font-bold text-lg font-[family-name:var(--font-heading)]">
                {project.title}
              </h4>
              <p className="text-muted text-sm">{project.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Gallery grid with hover animations */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {galleryImages.map((img) => (
            <motion.div
              key={img.src}
              variants={fadeUp}
              className="group relative aspect-square rounded-xl overflow-hidden shadow-md cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute top-3 left-3 bg-white/90 text-foreground text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
                {img.tag}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
