"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { motion, type Variants } from "framer-motion";

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

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger: Variants = {
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
  { src: "/images/projects/tree-after-2.jpeg", alt: "Tree removal, clean yard", tag: "Tree Removal" },
  { src: "/images/projects/tree-after-5.jpeg", alt: "Tree removal, completed", tag: "Exterior" },
  { src: "/images/projects/cabinet-after-2.jpeg", alt: "Cabinet work, completed", tag: "Cabinet Work" },
  { src: "/images/projects/tree-after-7.jpeg", alt: "Tree removal, debris cleared", tag: "Cleanup" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 sm:py-24 bg-white">
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
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-3 sm:mb-4 font-[family-name:var(--font-heading)] text-foreground">
            Project Portfolio
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto">
            Real projects, real results. Drag the slider to see the transformation.
          </p>
        </motion.div>

        {/* Before/After Compare Sliders — stacked on mobile */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={fadeUp}>
              <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-border">
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src={project.before}
                      alt={`${project.title}, before`}
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src={project.after}
                      alt={`${project.title}, after`}
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
                        width: 44,
                        height: 44,
                      }}
                      linesStyle={{
                        width: 3,
                        color: "white",
                      }}
                    />
                  }
                  style={{ aspectRatio: "4/3" }}
                  className="w-full touch-pan-y"
                />
              </div>
              <h4 className="mt-3 sm:mt-4 font-bold text-base sm:text-lg font-[family-name:var(--font-heading)]">
                {project.title}
              </h4>
              <p className="text-muted text-sm">{project.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Gallery grid — 2 col mobile, 4 col desktop */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          {galleryImages.map((img) => (
            <motion.div
              key={img.src}
              variants={fadeUp}
              className="group relative aspect-square rounded-lg sm:rounded-xl overflow-hidden shadow-md"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-white/90 text-foreground text-[10px] sm:text-xs font-semibold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full shadow-sm">
                {img.tag}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
