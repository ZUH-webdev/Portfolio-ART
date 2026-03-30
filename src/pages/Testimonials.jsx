import { Star } from "lucide-react";

const testimonials = [
  {
    text: `"Ali delivered our Shopify site exactly how we envisioned. The custom headless build took our site speed from a 42 to a 98, increasing our conversion rate by 34% in month one."`,
    name: "Bagreng Team",
    role: "E-COMMERCE BRAND",
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    text: `"The automation he set up saves us 15 hours a week. It's an absolute machine. Leads are immediately entered into our pipeline and scheduled without us lifting a finger."`,
    name: "SmartSun Power",
    role: "SOLAR ENERGY PROVIDER",
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    text: `"Professional, responsive, and incredibly skilled. The UI/UX overhaul of our WordPress site elevated our brand from looking like a local clinic to an international authority."`,
    name: "Cabo Plastic Surgery",
    role: "MEDICAL CLINIC",
    image: "https://i.pravatar.cc/100?img=3",
  },
];

export default function Testimonials() {
  return (
    <section className="glow-section bg-linear-to-b from-[#0B1220] to-[#0A0F1C] py-20 px-6 relative overflow-hidden">
      {/* Subtle radial glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.08),transparent_50%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="card-stagger group bg-[#0B1220]/80 border border-white/10 rounded-2xl p-8 backdrop-blur-md hover:border-white/20 hover:shadow-glow-md transition-all duration-300 cursor-pointer overflow-hidden relative"
              style={{ "--index": index }}
            >
              {/* Hover Background Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Content */}
              <div className="relative z-20">
                {/* Stars */}
                <div className="flex gap-1 mb-6 text-white/80 group-hover:text-white transition-colors duration-300">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      fill="white" 
                      stroke="none"
                      className="group-hover:scale-110 transition-transform duration-300"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-white/70 leading-relaxed text-[15px] mb-8 group-hover:text-white/85 transition-colors duration-300">
                  {item.text}
                </p>

                {/* Divider */}
                <div className="border-t border-white/10 group-hover:border-white/20 mb-6 transition-colors duration-300" />

                {/* Profile */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:shadow-glow-sm"
                  />

                  <div>
                    <p className="text-white font-medium text-sm group-hover:text-white transition-colors duration-300">
                      {item.name}
                    </p>
                    <p className="text-white/50 text-xs tracking-widest group-hover:text-white/70 transition-colors duration-300">
                      {item.role}
                    </p>
                  </div>
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