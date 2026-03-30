export default function CTASection() {
  return (
    <section className="glow-section bg-[#020617] px-6 py-24 relative overflow-hidden">
      {/* Subtle radial glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Container */}
        <div className="shadow-[0_0_80px_rgba(59,130,246,0.15)] relative rounded-4xl border border-white/10 bg-linear-to-br from-[#0B1220] via-[#0A0F1C] to-[#0B1220] px-10 py-20 text-center overflow-hidden hover:shadow-glow-lg transition-shadow duration-300">

          {/* Soft Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)] pointer-events-none" />

          {/* Hover Glow Effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)] opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto">

            {/* Heading */}
            <h2 className="text-white font-semibold tracking-tight text-[42px] md:text-[56px] leading-[1.1]">
              Ready to Build Something{" "}
              <span className="text-white/80">Extraordinary?</span>
            </h2>

            {/* Subtext */}
            <p className="mt-6 text-white/60 text-[16px] leading-relaxed">
              Let's discuss your project. I'm available for premium engagements,
              building revenue machines tailored to your business goals.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

              {/* WhatsApp Button */}
              <button className="group relative flex items-center gap-2 px-8 py-4 rounded-full text-white text-sm font-medium bg-linear-to-r from-indigo-500 to-purple-600 hover:shadow-glow-purple-lg transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden">
                {/* Glow layer */}
                <div className="absolute inset-0 bg-linear-to-r from-indigo-400 to-purple-500 opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-xl" />
                
                <span className="relative text-lg">💬</span>
                <span className="relative">Contact via WhatsApp</span>
              </button>

              {/* Email Button */}
              <button className="group relative flex items-center gap-2 px-8 py-4 rounded-full text-white/80 text-sm font-medium border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300 hover:shadow-glow-sm">
                <span className="relative">Send an Email</span>
                <span className="relative text-lg group-hover:translate-x-2 transition-transform duration-300">→</span>
              </button>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}