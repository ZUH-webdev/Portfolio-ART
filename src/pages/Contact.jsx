import React from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="glow-section bg-[#020617] px-6 py-24 relative overflow-hidden">
      {/* Subtle radial glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-white font-[900] tracking-tighter text-[42px] md:text-[56px] leading-[1.1] mb-6">
            Get in <span className="text-white/80">Touch.</span>
          </h2>
          <p className="text-white/60 text-[16px] leading-relaxed max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach out!
            I'm always open to discussing new projects and creative ideas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info Container */}
          <div className="space-y-6">
            <div className="shadow-[0_0_50px_rgba(59,130,246,0.1)] relative rounded-[32px] border border-white/10 bg-linear-to-br from-[#0B1220] via-[#0A0F1C] to-[#0B1220] p-10 hover:shadow-glow-sm transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_60%)] pointer-events-none" />
              
              <h3 className="relative z-10 text-[10px] font-black tracking-[0.3em] text-gray-500 uppercase mb-10">
                Contact Information
              </h3>

              <div className="relative z-10 space-y-8">
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-blue-400 group-hover:text-white group-hover:bg-blue-600/20 group-hover:border-blue-500/50 transition-all duration-500">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black tracking-widest text-gray-500 uppercase mb-1">Email Me At</p>
                    <p className="text-white font-bold text-lg">alirazzatariq@gmail.com</p>
                  </div>
                </div>

                <a 
                  href="https://wa.me/923197570090" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-green-400 group-hover:text-white group-hover:bg-green-600/20 group-hover:border-green-500/50 transition-all duration-500">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-black tracking-widest text-gray-500 uppercase mb-1">WhatsApp</p>
                    <p className="text-white font-bold text-lg">+92 319 7570090</p>
                  </div>
                </a>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-indigo-400 group-hover:text-white group-hover:bg-indigo-600/20 group-hover:border-indigo-500/50 transition-all duration-500">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black tracking-widest text-gray-500 uppercase mb-1">Location</p>
                    <p className="text-white font-bold text-lg">Remote / Worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Card */}
            <div className="p-10 rounded-[32px] border border-dashed border-white/10 bg-white/[0.02] relative overflow-hidden group">
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="relative z-10 text-white/50 italic text-lg leading-relaxed">
                "Design is not just what it looks like and feels like. Design is how it works."
              </p>
            </div>
          </div>

          {/* Contact Form Container */}
          <div className="shadow-[0_0_50px_rgba(59,130,246,0.1)] relative rounded-[32px] border border-white/10 bg-linear-to-br from-[#0B1220] via-[#0A0F1C] to-[#0B1220] p-10">
            <form className="relative z-10 space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[10px] font-black tracking-widest text-gray-500 uppercase ml-4">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white font-medium focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.05] transition-all placeholder:text-white/20"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black tracking-widest text-gray-500 uppercase ml-4">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white font-medium focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.05] transition-all placeholder:text-white/20"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black tracking-widest text-gray-500 uppercase ml-4">Subject</label>
                <input 
                  type="text" 
                  placeholder="Project Inquiry" 
                  className="w-full px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white font-medium focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.05] transition-all placeholder:text-white/20"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black tracking-widest text-gray-500 uppercase ml-4">Message</label>
                <textarea 
                  placeholder="How can I help you?" 
                  rows="5"
                  className="w-full px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white font-medium focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.05] transition-all resize-none placeholder:text-white/20"
                  required
                ></textarea>
              </div>
              <button 
                type="submit"
                className="group relative w-full h-[60px] rounded-2xl bg-linear-to-r from-blue-600 to-indigo-600 text-white font-bold tracking-widest text-xs uppercase overflow-hidden transition-all duration-500 hover:shadow-glow-blue-lg active:scale-[0.98]"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Send Message <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
