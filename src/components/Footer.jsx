export default function Footer() {
  return (
    <footer className="bg-[#020617] text-white px-6 pt-24 pb-12 relative overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto">

        {/* Top Divider */}
        <div className="border-t border-white/5 mb-20" />

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

          {/* Column 1 - Branding */}
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-white tracking-tight hover:text-white/70 transition-colors duration-300 cursor-default">
              ALI.
            </h2>
            
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Premium full-stack development, delivering revenue-generating digital
              systems for forward-thinking brands.
            </p>

            {/* Social Icons */}
            <div className="flex gap-2 pt-2">
              {/* GitHub */}
              <a 
                href="#" 
                className="footer-icon-btn"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.48v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.12-1.52-1.12-1.52-.92-.64.07-.63.07-.63 1.02.07 1.56 1.08 1.56 1.08.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.32.1-2.76 0 0 .84-.27 2.75 1.05a9.2 9.2 0 012.5-.34c.85 0 1.7.12 2.5.34 1.9-1.32 2.75-1.05 2.75-1.05.55 1.44.2 2.5.1 2.76.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.06.36.32.67.94.67 1.9v2.82c0 .27.18.59.69.48A10.26 10.26 0 0022 12.26C22 6.58 17.52 2 12 2z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a 
                href="#" 
                className="footer-icon-btn"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4v-12h4v2"/>
                  <circle cx="4" cy="4" r="2"/>
                  <path d="M2 9h4v12H2z"/>
                </svg>
              </a>

              {/* Twitter */}
              <a 
                href="#" 
                className="footer-icon-btn"
                aria-label="Twitter"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 4s-.7 2-2 3c1.6 10-11 13-18 7 2.2.1 4-.6 5-2-4 0-6-4-4-7 2 2 5 3 8 3-.5-2 1-4 3-4 1 0 2 .5 3 1 1-.2 2-.7 2-.7z"/>
                </svg>
              </a>

              {/* Email */}
              <a 
                href="mailto:alirazzatariq@gmail.com" 
                className="footer-icon-btn"
                aria-label="Email"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16v16H4z"/>
                  <path d="M22 6l-10 7L2 6"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h3 className="text-xs font-semibold text-white/70 tracking-widest uppercase">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-sm text-white/60 hover:text-white transition-colors duration-300 inline-block">
                  About
                </a>
              </li>
              <li>
                <a href="#work" className="text-sm text-white/60 hover:text-white transition-colors duration-300 inline-block">
                  Featured Work
                </a>
              </li>
              <li>
                <a href="#process" className="text-sm text-white/60 hover:text-white transition-colors duration-300 inline-block">
                  Process
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-sm text-white/60 hover:text-white transition-colors duration-300 inline-block">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-white/60 hover:text-white transition-colors duration-300 inline-block">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xs font-semibold text-white/70 tracking-widest uppercase">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-white/60 hover:text-white transition-colors duration-300 inline-block">
                  Custom WordPress Dev
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/60 hover:text-white transition-colors duration-300 inline-block">
                  GHL Automation
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/60 hover:text-white transition-colors duration-300 inline-block">
                  High-Performance Shopify
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/60 hover:text-white transition-colors duration-300 inline-block">
                  Speed Optimization
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/60 hover:text-white transition-colors duration-300 inline-block">
                  Technical SEO
                </a>
              </li>
            </ul>
          </div>

          {/* Availability */}
          <div className="space-y-6">
            <h3 className="text-xs font-semibold text-white/70 tracking-widest uppercase">Availability</h3>

            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-white/60 hover:text-white/80 transition-colors duration-300">
                <span className="flex-shrink-0 text-base leading-6">📍</span>
                <span>Based in Pakistan (GMT+5). Partnering globally.</span>
              </li>

              <li className="flex gap-3 text-sm text-white/60 hover:text-white/80 transition-colors duration-300">
                <span className="flex-shrink-0 text-base leading-6">🌐</span>
                <span>Accepting 2 remote elite engagements.</span>
              </li>

              <li className="flex gap-3 text-sm text-white/60 hover:text-white/80 transition-colors duration-300 cursor-pointer group">
                <span className="flex-shrink-0 text-base leading-6 group-hover:scale-110 transition-transform duration-300 origin-left">
                  📞
                </span>
                <a href="https://wa.me/923197570090" target="_blank" rel="noopener noreferrer" className="underline group-hover:no-underline transition-all duration-300">
                  Chat via WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="border-t border-white/5 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-4">
          <p className="text-xs text-white/40 tracking-wider">
            © 2026 ALI. ALL RIGHTS RESERVED.
          </p>

          <div className="flex gap-8">
            <a href="#" className="text-xs text-white/40 hover:text-white/80 transition-colors duration-300 tracking-wider">
              PRIVACY POLICY
            </a>
            <a href="#" className="text-xs text-white/40 hover:text-white/80 transition-colors duration-300 tracking-wider">
              TERMS OF SERVICE
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
