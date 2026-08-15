const projects = [
  {
    title: "Kitchen Renovation — Complete",
    tag: "Renovation",
    emoji: "🏠",
    gradient: "from-amber-500/20 to-transparent",
    featured: true,
  },
  {
    title: "Bathroom Remodel",
    tag: "Remodeling",
    emoji: "🚿",
    gradient: "from-blue-500/20 to-transparent",
  },
  {
    title: "Flooring Installation — LVP",
    tag: "Flooring",
    emoji: "🪵",
    gradient: "from-orange-500/20 to-transparent",
  },
  {
    title: "Interior Painting — Fresh Coat",
    tag: "Painting",
    emoji: "🎨",
    gradient: "from-purple-500/20 to-transparent",
  },
  {
    title: "Deck Construction",
    tag: "Construction",
    emoji: "🔨",
    gradient: "from-green-500/20 to-transparent",
  },
  {
    title: "Property Maintenance",
    tag: "Maintenance",
    emoji: "🔧",
    gradient: "from-red-500/20 to-transparent",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            Our Work
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Project Portfolio
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Real projects, real results. Browse our latest renovations,
            builds, and transformations — documented with before &amp; after
            photos.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <div
              key={p.title}
              className={`group relative bg-surface border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 ${
                p.featured ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Image placeholder */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${p.gradient} flex items-center justify-center`}
                >
                  <span className="text-7xl group-hover:scale-110 transition-transform duration-300">
                    {p.emoji}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <span className="absolute top-4 left-4 bg-black/70 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {p.tag}
                </span>
              </div>

              {/* Info */}
              <div className="p-5">
                <h4 className="font-semibold text-lg">{p.title}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-muted text-sm mt-10">
          📸 Before &amp; after project photos coming soon — we document every
          transformation.
        </p>
      </div>
    </section>
  );
}
