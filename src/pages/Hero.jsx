import { ArrowRight, MessageCircleIcon } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-fit md:min-h-screen flex flex-col items-center justify-start md:justify-center text-center px-5 bg-transparent pt-32 md:pt-0 pb-20 md:pb-0">
      
      <div className="max-w-[1100px] mx-auto flex flex-col items-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/5 bg-[#0A0F1E]/50 mb-6 md:mb-10 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]"></span>
          <span className="text-[9px] md:text-[10px] font-black tracking-[0.2em] md:tracking-[0.3em] text-gray-500 uppercase">
            Accepting Elite Projects
          </span>
        </div>

        {/* Headline: Adjusted leading and sizes for mobile */}
        <h1 className="text-[38px] leading-[1.1] sm:text-5xl md:text-7xl lg:text-[90px] font-[900] tracking-[-0.04em] text-white md:leading-[0.95] mb-6 md:mb-8 drop-shadow-[0_0_25px_rgba(255,255,255,0.1)]">
          I Build Digital <br className="md:hidden" /> Experiences <br className="hidden md:block" />
          <span className="opacity-30">That Drive Growth.</span>
        </h1>

        <p className="max-w-[280px] sm:max-w-md md:max-w-2xl mx-auto text-sm md:text-[20px] text-gray-400 font-medium leading-relaxed mb-10 md:mb-14 tracking-tight">
          Architecting high-converting platforms, scalable infrastructure, and refined aesthetics.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-5 w-full sm:w-auto">
          
          <button className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 md:px-10 py-4 md:py-4.5 bg-[#2D1B69] text-white rounded-full font-bold text-[14px] shadow-[0_15px_40px_-10px_rgba(45,27,105,0.8)] border-t border-white/20 cursor-pointer">
            <MessageCircleIcon size={16}/>
            Discuss Your Project
          </button>

          <button className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 md:px-10 py-4 md:py-4.5 bg-white/[0.03] text-white rounded-full font-bold text-[14px] border border-white/5 backdrop-blur-md hover:bg-white/[0.08] transition-all shadow-xl cursor-pointer">
            View Portfolio
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;