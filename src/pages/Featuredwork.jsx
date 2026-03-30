const projects = [
  {
    title: "Smart Sun Power",
    desc: "Custom-built conversion engine for a leading solar energy provider, complete with custom calculators and CRM integration.",
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
    tags: ["WORDPRESS", "SOLAR ENERGY", "HIGH-CONVERTING"],
  },
  {
    title: "Bagrena.co",
    desc: "High-performance headless Shopify store designed to optimize the checkout flow and maximize average order value.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    tags: ["SHOPIFY", "E-COMMERCE", "PERFORMANCE"],
  },
  {
    title: "Cabo Plastic Surgery",
    desc: "A premium authority platform for top-tier plastic surgeons, combining aesthetic elegance with compliant medical architecture.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    tags: ["MEDICAL", "AUTHORITY SITE", "SEO"],
  },
];

export default function FeaturedWork() {
  return (
    <section className="glow-section bg-[#020617] px-6 py-28 relative overflow-hidden">
      {/* Subtle radial glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.08),transparent_50%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="mb-16">
          <p className="text-white/40 text-xs tracking-[0.2em] mb-4">
            PORTFOLIO
          </p>

          <h2 className="text-white font-semibold text-[40px] md:text-[56px] tracking-tight">
            Featured <span className="text-white/80">Work.</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, i) => (
            <div
              key={i}
              className="card-stagger group bg-linear-to-b from-[#0B1220] to-[#0A0F1C] border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 hover:shadow-glow-md transition-all duration-300 cursor-pointer"
              style={{ "--index": i }}
            >
              {/* Image Container with Hover Effects */}
              <div className="relative h-56 overflow-hidden">
                {/* Hover Overlay Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 relative z-20">

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-3 py-1 rounded-full border border-white/10 text-white/60 tracking-wide group-hover:border-white/20 group-hover:text-white/80 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-white font-medium text-lg mb-2 group-hover:text-white transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed mb-6 group-hover:text-white/70 transition-colors duration-300">
                  {project.desc}
                </p>

                {/* CTA with Arrow Animation */}
                <div className="flex items-center gap-2 text-white/80 text-sm cursor-pointer group-hover:text-white transition-colors duration-300">
                  <span>View Project</span>
                  <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>

              </div>

              {/* Hover Lift Effect */}
              <div className="absolute inset-0 pointer-events-none group-hover:-translate-y-1 transition-transform duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}