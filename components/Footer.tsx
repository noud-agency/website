import React from 'react';
import { Plus, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

interface FooterProps {
  onOpenBooking?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-black pt-20 md:pt-28 lg:pt-32 pb-8 md:pb-12 px-4 md:px-6 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto relative z-10">

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-sans text-white leading-tight mb-6">
            "The reason <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">most of AI projects fail</span> isn't technology or complexity: it's skipping the critical strategic audit, over-focusing on tools, and the poor integration that kills team adoption."
          </h2>
          <p className="text-zinc-500 text-xs md:text-sm">
            Noud AI Internal Data, "2024 Global Automation Failure Report."
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex justify-center mb-20 md:mb-28"
        >
          <button
            onClick={onOpenBooking}
            className="group flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-full bg-white text-black font-medium text-sm md:text-base hover:bg-zinc-100 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105"
          >
            <Plus size={18} className="group-hover:rotate-90 transition-transform duration-300" />
            Let's Partner Up
          </button>
        </motion.div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-8 md:mb-12">

          {/* Brand Column - Larger */}
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
                Noud<span className="text-orange-500">AI</span>
              </h3>
              <p className="text-zinc-400 text-sm md:text-base mb-4 md:mb-6 max-w-md leading-relaxed">
                Automate and simplify your workflow with ease. We build intelligent AI solutions that integrate seamlessly into your business.
              </p>
              <div className="flex items-center gap-3 text-xs text-zinc-600">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span>Operational</span>
                </div>
                <span>•</span>
                <span>Accepting Clients</span>
              </div>
            </motion.div>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-4 grid grid-cols-2 gap-6 md:gap-8">
            {/* Explore Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 }}
            >
              <h4 className="text-white font-semibold mb-3 md:mb-4 text-xs md:text-sm uppercase tracking-wider">Explore</h4>
              <ul className="space-y-2 md:space-y-3">
                {['Services', 'Features', 'About Us', 'Case Studies'].map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={`#${item.toLowerCase().replace(' ', '-')}`}
                      className="text-zinc-500 hover:text-orange-400 transition-colors text-xs md:text-sm inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-3 h-px bg-orange-400 transition-all duration-200"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h4 className="text-white font-semibold mb-3 md:mb-4 text-xs md:text-sm uppercase tracking-wider">Resources</h4>
              <ul className="space-y-2 md:space-y-3">
                {['Documentation', 'Blog', 'Support', 'Privacy'].map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-zinc-500 hover:text-orange-400 transition-colors text-xs md:text-sm inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-3 h-px bg-orange-400 transition-all duration-200"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Connect Column with CTA Buttons */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <h4 className="text-white font-semibold mb-3 md:mb-4 text-xs md:text-sm uppercase tracking-wider">Connect</h4>
            <div className="space-y-2 md:space-y-3">
              {/* WhatsApp */}
              <a
                href="https://wa.me/6285117305436"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-zinc-400 hover:text-white transition-all duration-200 group hover:translate-x-1"
              >
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:bg-green-500/10 group-hover:border-green-500/30 transition-all">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-zinc-500 group-hover:text-green-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <span className="text-xs md:text-sm font-medium">WhatsApp</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/noud-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-zinc-400 hover:text-white transition-all duration-200 group hover:translate-x-1"
              >
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all">
                  <Linkedin size={18} className="text-zinc-500 group-hover:text-blue-400 transition-colors md:w-5 md:h-5" />
                </div>
                <span className="text-xs md:text-sm font-medium">LinkedIn</span>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/noud.agency"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-zinc-400 hover:text-white transition-all duration-200 group hover:translate-x-1"
              >
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:bg-pink-500/10 group-hover:border-pink-500/30 transition-all">
                  <Instagram size={18} className="text-zinc-500 group-hover:text-pink-400 transition-colors md:w-5 md:h-5" />
                </div>
                <span className="text-xs md:text-sm font-medium">Instagram</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
            <p className="text-zinc-600 text-xs">
              © 2025 Noud AI. All rights reserved.
            </p>
            <div className="flex items-center gap-4 md:gap-6 text-xs text-zinc-600">
              <a href="#privacy" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-orange-400 transition-colors">Terms of Service</a>
              <a href="#cookies" className="hover:text-orange-400 transition-colors">Cookies</a>
            </div>
          </div>
        </div>

      </div>

      {/* Simplified Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-900/5 rounded-full blur-[100px] pointer-events-none"></div>
    </footer>
  );
};

export default Footer;