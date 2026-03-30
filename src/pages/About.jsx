import { Code2, Zap, Rocket, BarChart3, CheckCircle2 } from 'lucide-react';
import { IoFlash } from 'react-icons/io5';

const About = () => {
    const stats = [
        { label: 'PROJECTS', value: '30+' },
        { label: 'YEARS', value: '3+' },
        { label: 'SPEED', value: '90+' },
        { label: 'SATISFACTION', value: '100%' },
    ];

    const services = [
        { icon: <Code2 size={20} />, title: 'Custom Dev', desc: 'WordPress & React' },
        { icon: <Zap size={20} />, title: 'Automation', desc: 'GHL & AI Systems' },
        { icon: <Rocket size={20} />, title: 'Speed Ops', desc: '90+ Core Web Vitals' },
        { icon: <BarChart3 size={20} />, title: 'Conversion', desc: 'Data-driven UI/UX' },
    ];

    const tags = ['WORDPRESS', 'GHL', 'REACT', 'TAILWIND', 'AI AUTOMATION', 'E-COMMERCE', 'SHOPIFY', 'SEO'];

    return (
        <section id="about" className="relative py-20 md:py-32 bg-transparent overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 md:px-16">

                {/* 1. Top Delivering Info */}
                <div className="flex flex-col items-center mb-20 px-4">
                    <p className="text-[10px] font-black tracking-[0.4em] text-gray-500 uppercase mb-10 text-center">
                        Delivering Elite Infrastructure For
                    </p>

                    <div className="flex flex-wrap justify-center items-center gap-y-6 gap-x-10 md:gap-x-20">

                        {/* Item 1: Medical Clinics */}
                        <div className="flex items-center gap-3 text-white/60 font-bold text-[13px] md:text-sm hover:text-white transition-colors duration-300">
                            <div className="text-blue-500/80">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" /></svg>
                            </div>
                            <span className="tracking-tight italic">Medical Clinics</span>
                        </div>

                        {/* Item 2: SaaS Startups */}
                        <div className="flex items-center gap-3 text-white/60 font-bold text-[13px] md:text-sm hover:text-white transition-colors duration-300">
                            <div className="text-blue-500/80">
                                <IoFlash size={18} />
                            </div>
                            <span className="tracking-tight italic">SaaS Startups</span>
                        </div>

                        {/* Item 3: E-Commerce Brands */}
                        <div className="flex items-center gap-3 text-white/60 font-bold text-[13px] md:text-sm hover:text-white transition-colors duration-300">
                            <div className="text-blue-500/80">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
                            </div>
                            <span className="tracking-tight italic">E-Commerce Brands</span>
                        </div>

                    </div>
                </div>

                {/* 2. Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-32">
                    {stats.map((stat) => (
                        <div key={stat.label} className="group p-8 md:p-12 rounded-[32px] bg-white/[0.02] border border-white/[0.05] flex flex-col items-center justify-center hover:bg-white/[0.04] transition-all duration-500">
                            <h3 className="text-4xl md:text-6xl font-[900] text-white mb-2 tracking-tighter">{stat.value}</h3>
                            <p className="text-[10px] md:text-[11px] font-black tracking-[0.3em] text-gray-500 uppercase">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* 3. Content & Bento Layout */}
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">

                    {/* Left Side: Text & Services */}
                    <div className="lg:col-span-7">
                        <h2 className="text-4xl md:text-6xl font-[900] text-white tracking-tighter leading-[1.1] mb-8">
                            Not Just A Developer.<br />
                            A Growth Partner.
                        </h2>
                        <p className="text-lg text-gray-400 font-medium leading-relaxed mb-12 max-w-xl">
                            I specialize in crafting high-end digital solutions that don't just look pretty—they perform.
                            By combining technical expertise with business acumen, I deliver systems optimized for scale and revenue.
                        </p>

                        {/* Mini Service Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                            {services.map((s) => (
                                <div key={s.title} className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/10 transition-all">
                                    <div className="w-10 h-10 rounded-xl bg-white/[0.03] flex items-center justify-center text-blue-400 mb-4 italic">
                                        {s.icon}
                                    </div>
                                    <h4 className="text-white font-bold text-sm mb-1">{s.title}</h4>
                                    <p className="text-gray-500 text-xs font-medium">{s.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            {tags.map(tag => (
                                <span key={tag} className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.05] text-[9px] font-black tracking-widest text-gray-500">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Elite Tier Card */}
                    <div className="lg:col-span-5 h-full">
                        <div className="p-8 md:p-12 rounded-[40px] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.08] h-full flex flex-col backdrop-blur-sm">
                            <div className="w-12 h-12 rounded-2xl bg-blue-600/20 flex items-center justify-center text-blue-400 mb-8 italic">
                                <Rocket size={24} />
                            </div>
                            <h3 className="text-3xl font-[900] text-white tracking-tighter mb-6">Elite Tier<br />Execution</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-10 font-medium">
                                Every project is treated as a premium investment. Clean code, flawless design, and infrastructure built to handle aggressive growth.
                            </p>

                            <div className="space-y-5">
                                {[
                                    '100% In-house Development',
                                    'Strategic UI/UX Implementation',
                                    'Post-Launch Growth Support'
                                ].map(item => (
                                    <div key={item} className="flex items-center gap-4 group">
                                        <CheckCircle2 size={18} className="text-blue-500" />
                                        <span className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;