import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 flex justify-center bg-black">
      <div className="max-w-4xl text-center">
        <div className="inline-block px-3 py-1 border border-zinc-800 rounded-full bg-zinc-900/50 backdrop-blur mb-8">
          <span className="text-xs font-mono text-primary uppercase tracking-widest">Our Mission</span>
        </div>

        <h2 className="text-2xl md:text-4xl font-sans text-white mb-10 leading-tight">
          Engineering The Fully-Automated Enterprise<span className="text-zinc-500 italic"></span><br />

        </h2>

        <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed">
          Noud AI was founded on a singular mandate: to eliminate the operational drag caused by slow, expensive manual processes. We believe AI technology must empower teams and simplify complexity, not add to it. We are your dedicated partner in the definitive transition to a <span className="text-white border-b border-primary">fully-automated, future-proof business.</span>.
        </p>

        <div className="mt-16 flex justify-center gap-4">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-zinc-500 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default About;