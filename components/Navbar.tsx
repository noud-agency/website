
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const sections = ['services', 'system', 'about', 'impact'];
      let current = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is roughly in the middle of viewport
          if (rect.top <= 400 && rect.bottom >= 300) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'System', href: '#system' },
    { name: 'About', href: '#about' },
    { name: 'Impact', href: '#impact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 100; // Offset for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      setActiveSection(targetId);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto relative w-full max-w-[700px] bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 rounded-full pl-6 pr-1.5 py-1.5 flex items-center justify-between shadow-2xl transition-all duration-500 ${scrolled ? 'bg-black/90 shadow-black/50' : ''}`}
      >
        {/* Left: Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer group mr-4"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img
            src="/logo.png"
            alt="Noud AI Logo"
            className="w-8 h-8 object-contain"
          />
          <span className="font-sans text-sm font-bold text-white tracking-tight">NoudAI</span>
        </div>

        {/* Center: Text Links (Clean Style) */}
        <div className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`text-[13px] font-medium transition-colors duration-300 tracking-wide ${activeSection === item.href.substring(1)
                ? 'text-white'
                : 'text-zinc-500 hover:text-zinc-300'
                }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Right: Button */}
        <div className="flex items-center">
          <button
            onClick={onOpenBooking}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-[#1a1a1a] hover:bg-[#252525] hover:border-white/20 text-white text-[10px] font-sans font-semibold tracking-widest transition-all duration-300 group"
          >
            GET IN TOUCH
            <ArrowRight className="w-3 h-3 text-zinc-500 group-hover:text-white transition-colors" />
          </button>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
