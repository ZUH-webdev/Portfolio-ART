import { useState, useEffect } from 'react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinks = ['ABOUT', 'WORK', 'PROCESS', 'TESTIMONIALS', 'CONTACT'];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    return (
        <header 
            className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
                isScrolled || isMenuOpen
                ? "bg-[#030712]/95 backdrop-blur-2xl border-b border-white/[0.05]" 
                : "bg-transparent"
            }`}
        >
            <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-3 flex items-center justify-between relative z-[120]">

                {/* Logo */}
                <div className="flex items-baseline cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} >
                    <span className="text-2xl font-[900] tracking-tighter text-white">ALI RAZA</span>
                    <span className="text-2xl font-[900] text-white ml-px">.</span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-12">
                    {navLinks.map((link) => (
                        <a 
                            key={link} 
                            href={`#${link.toLowerCase()}`} 
                            className="text-[11px] font-bold tracking-[0.2em] text-gray-400 hover:text-white transition-all duration-300 uppercase"
                        >
                            {link}
                        </a>
                    ))}
                </nav>

                {/* Action Area */}
                <div className="flex items-center gap-6">
                    <a 
                        href="#contact" 
                        className="hidden sm:flex px-8 py-3 border border-white/20 rounded-full text-[11px] font-[900] tracking-widest text-white hover:bg-white hover:text-black transition-all duration-500 uppercase"
                    >
                        START PROJECT
                    </a>

                    {/* Hamburger Button */}
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none"
                    >
                        <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                        <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></span>
                        <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`lg:hidden fixed inset-0 w-full h-screen bg-[#030712] transition-all duration-500 ease-in-out z-[110] ${
                isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 invisible"
            }`}>
                <nav className="flex flex-col items-center pt-32 pb-10 gap-10 h-full overflow-y-auto">
                    {navLinks.map((link) => (
                        <a 
                            key={link} 
                            href={`#${link.toLowerCase()}`} 
                            onClick={() => setIsMenuOpen(false)}
                            className="text-4xl font-[900] tracking-tighter text-white/50 hover:text-white transition-all uppercase"
                        >
                            {link}
                        </a>
                    ))}
                    
                    <a 
                        href="#contact" 
                        onClick={() => setIsMenuOpen(false)}
                        className="mt-4 px-12 py-4 border border-white/20 rounded-full text-xs font-black tracking-[0.2em] text-white uppercase hover:bg-white hover:text-black transition-all"
                    >
                        START PROJECT
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;