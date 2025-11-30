import React from 'react';

const Partners: React.FC = () => {
  return (
    <section className="bg-black py-24 px-6 border-b border-white/5 relative z-10">
      <div className="max-w-[1200px] mx-auto">
        <p className="text-center text-zinc-500 text-sm mb-16 font-mono tracking-wide">
          Supported by <span className="text-zinc-300">Clients & Partners</span> worldwide
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-20 items-center justify-items-center opacity-50 hover:opacity-100 transition-opacity duration-500">
            {/* Logo 1: EY Parthenon Style */}
            <div className="flex items-center gap-2 group cursor-default">
                <span className="font-bold text-2xl text-white font-sans tracking-tighter">EY</span>
                <span className="text-sm text-zinc-300 font-serif leading-tight">Parthenon</span>
            </div>

            {/* Logo 2: MIOYM Style */}
            <div className="text-2xl text-white font-sans font-extralight tracking-[0.2em] cursor-default">
                MIOYM
            </div>

            {/* Logo 3: SIP Abacus Style */}
            <div className="flex flex-col items-center leading-none cursor-default">
                <div className="flex items-center gap-1">
                    <span className="text-xl font-black text-zinc-300">SIP</span>
                    <span className="text-xl font-light text-zinc-500">abacus</span>
                </div>
                <span className="text-[8px] uppercase tracking-widest text-zinc-600">Success Assured</span>
            </div>

            {/* Logo 4: Cash Now Style */}
            <div className="flex items-center gap-2 cursor-default">
                <div className="w-8 h-8 rounded-full border-2 border-white/20 flex items-center justify-center">
                    <div className="w-4 h-4 bg-white/80 rounded-full"></div>
                </div>
                <div className="flex flex-col">
                    <span className="text-lg font-black text-white italic leading-none">CASH NOW</span>
                    <span className="text-[8px] text-zinc-500 uppercase tracking-wider">OFFER</span>
                </div>
            </div>

            {/* Logo 5: Majibu Africa Style */}
            <div className="flex items-center gap-2 cursor-default">
                <div className="flex flex-col gap-[2px]">
                    <div className="w-6 h-[2px] bg-zinc-400"></div>
                    <div className="w-6 h-[2px] bg-zinc-400"></div>
                    <div className="w-6 h-[2px] bg-zinc-400"></div>
                </div>
                <div className="flex flex-col">
                    <span className="text-sm font-bold text-white uppercase tracking-widest leading-none">MAJIBU</span>
                    <span className="text-[8px] text-zinc-500 uppercase tracking-widest">Africa</span>
                </div>
            </div>

            {/* Logo 6: Brock Tech Style */}
            <div className="font-mono text-xl text-white font-bold tracking-tighter cursor-default border-2 border-white/20 px-2 py-1 -skew-x-12">
                BROCK<span className="text-zinc-500">//</span>TECH
            </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;