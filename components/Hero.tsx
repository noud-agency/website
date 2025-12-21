
import React, { useMemo, useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenBooking: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  // Detect mobile device
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Generate random floating particles - reduced count for mobile
  const particles = useMemo(() => {
    const count = isMobile ? 8 : 30; // 8 for mobile, 30 for desktop
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
    }));
  }, [isMobile]);

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center px-6 pt-20 pb-20 overflow-hidden border-b border-white/5">

      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0">
        {/* Animated Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* Floating Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-orange-500/20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Large Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Animated Scan Lines */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent h-[200px]"
          animate={{
            y: ['-100%', '200%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-[1600px] mx-auto w-full flex flex-col items-center justify-center relative z-10">

        {/* Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/20 backdrop-blur-sm shadow-[0_0_30px_rgba(249,115,22,0.2)]"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Sparkles size={14} className="text-orange-400" />
          </motion.div>
          <span className="text-xs font-mono text-orange-300 uppercase tracking-widest font-bold">Noud AI Automation</span>
        </motion.div>

        {/* Centered Content */}
        <div className="flex flex-col items-center text-center max-w-7xl">

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-20 font-sans font-bold leading-[0.9] tracking-tighter mb-10"
          >
            {/* Text Container */}
            <span className="block text-4xl md:text-6xl lg:text-[7rem] text-white">
              Guaranteed Growth Certain Efficiency <br />
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 drop-shadow-[0_0_35px_rgba(249,115,22,0.5)] lg:text-[3rem]">
                  Unlock Growth With Smart AI Agents
                </span>
                {/* Animated underline */}
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                />
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-zinc-400 text-base md:text-lg max-w-3xl mb-12 leading-relaxed"
          >
            At Noud AI, we begin by listening. We audit your workflows and core business challenges first. <span className="text-white font-medium">We don't make assumptions</span> — we engineer solutions that integrate seamlessly into how your business already operates.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center gap-6 w-full"
          >
            {/* Primary CTA Button */}
            <motion.button
              onClick={onOpenBooking}
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(249, 115, 22, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-12 py-5 font-mono text-sm font-bold uppercase tracking-widest transition-all flex items-center gap-3 rounded-full overflow-hidden group"
            >
              {/* Animated shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{
                  x: ['-200%', '200%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <span className="relative z-10">Let's Partner Up</span>
              <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            {/* Secondary info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-2 text-xs text-zinc-500"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 border-2 border-black" />
                ))}
              </div>
              <span>Trusted by 50+ companies worldwide</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Corner Elements */}
      <motion.div
        className="absolute top-20 left-10 text-orange-500/20 text-6xl font-bold hidden md:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        +
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-yellow-500/20 text-6xl font-bold hidden md:block"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        +
      </motion.div>

      {/* Bottom Label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-8 font-mono text-xs text-zinc-600 tracking-widest uppercase hidden md:flex items-center gap-2"
      >
        <motion.div
          className="w-2 h-2 rounded-full bg-orange-500"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        View Showreel (01:20)
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-zinc-600 uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-0.5 h-8 bg-gradient-to-b from-orange-500 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
