const steps = [
  {
    number: "01",
    title: "Discovery",
    desc: "Deep dive into your business model, goals, and technical requirements.",
  },
  {
    number: "02",
    title: "Design",
    desc: "Architecting wireframes and high-fidelity prototypes optimized for conversion.",
  },
  {
    number: "03",
    title: "Development",
    desc: "Writing clean, scalable code with elite performance and speed.",
  },
  {
    number: "04",
    title: "Launch & Grow",
    desc: "Deploying the system and setting up growth-tracking analytics.",
  },
];

export default function Process() {
  return (
    <section className="glow-section bg-[#020617] px-6 py-28 relative overflow-hidden" data-glow>
      {/* Subtle radial glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.08),transparent_50%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <h2 className="text-center text-white font-semibold text-[40px] md:text-[56px] tracking-tight mb-20">
          My <span className="text-white/80">Process.</span>
        </h2>

        {/* Line */}
        <div className="absolute left-0 right-0 top-[55%] h-px bg-white/10 hidden lg:block" />

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">

          {steps.map((step, i) => (
            <div
              key={i}
              className="card-stagger group relative bg-linear-to-b from-[#0B1220] to-[#0A0F1C] border border-white/10 rounded-2xl p-8 h-64 flex flex-col justify-end backdrop-blur-md hover:border-white/20 hover:shadow-glow-md cursor-pointer transition-all duration-300 overflow-hidden"
              style={{ "--index": i }}
            >
              {/* Hover Lift Effect */}
              <div className="absolute inset-0 pointer-events-none group-hover:bg-white/5 transition-colors duration-300" />

              {/* Background glow on hover */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Big Number */}
              <span className="absolute top-6 left-8 text-[64px] font-semibold text-white/10 group-hover:text-white/20 transition-colors duration-300">
                {step.number}
              </span>

              {/* Content */}
              <div className="relative z-20">
                <h3 className="text-white font-medium text-lg mb-3 group-hover:text-white transition-colors duration-300">
                  {step.title}
                </h3>

                <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                  {step.desc}
                </p>
              </div>

              {/* Hover Lift Transform */}
              <div className="absolute inset-0 pointer-events-none group-hover:-translate-y-1 transition-transform duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}