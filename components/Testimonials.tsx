import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowDown } from 'lucide-react';

// Fungsi untuk menampilkan bintang rating
const StarRating = ({ rating = 5 }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-zinc-700'
          }`}
      />
    ))}
  </div>
);

// Data dummy untuk gambar profil
const getAvatarUrl = (author: string) => {
  if (author.includes('CEO')) return 'https://i.pravatar.cc/150?img=11';
  if (author.includes('Direktur')) return 'https://i.pravatar.cc/150?img=5';
  if (author.includes('Founder')) return 'https://i.pravatar.cc/150?img=3';
  return 'https://i.pravatar.cc/150?img=8';
};

const testimonials = [
  {
    quote: "Sistem Noud AI menghemat 300 jam kerja admin bulanan kami. Skalabilitas yang kami impikan akhirnya tercapai.",
    author: "Fauzan R.",
    title: "CEO, FinTech Global",
    stat: "300 Jam/Bulan",
    rating: 5,
  },
  {
    quote: "Respon pelanggan kami sekarang instan. Konversi penjualan meningkat 40% dalam 30 hari pertama implementasi.",
    author: "Siti M.",
    title: "Direktur Operasional, Retail Chain",
    stat: "+40% Konversi",
    rating: 5,
  },
  {
    quote: "Kami mengira operasional kami sudah efisien, audit Noud AI membuktikan sebaliknya. Transformasi total.",
    author: "Bambang S.",
    title: "Founder, Logistics Startup",
    stat: "2x Kecepatan",
    rating: 5,
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="impact" className="py-20 md:py-28 lg:py-32 px-4 md:px-6 relative overflow-hidden bg-black">
      {/* Simplified Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-white tracking-tight leading-tight mb-4">
              Success stories <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                from our Users
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3"
          >
            <ArrowDown className="w-5 h-5 text-zinc-500 animate-bounce" />
            <p className="text-zinc-400 text-sm md:text-base max-w-md">
              Join hundreds of companies transforming their<br className="hidden lg:block" /> operations with Noud AI.
            </p>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group relative h-full"
            >
              {/* Modern Card with Subtle Border */}
              <div className="relative h-full bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-white/5 p-6 md:p-8 transition-all duration-300 hover:border-yellow-500/20 hover:bg-zinc-900/70">

                {/* Stat Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 mb-6">
                  <span className="text-sm md:text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                    {item.stat}
                  </span>
                </div>

                {/* Star Rating */}
                <div className="mb-6">
                  <StarRating rating={item.rating} />
                </div>

                {/* Quote */}
                <blockquote className="mb-8">
                  <p className="text-base md:text-lg text-zinc-300 leading-relaxed">
                    "{item.quote}"
                  </p>
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-3 mt-auto pt-6 border-t border-white/5">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-zinc-800 group-hover:border-yellow-500/30 transition-colors">
                      <img
                        src={getAvatarUrl(item.author)}
                        alt={item.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-yellow-500 text-black text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                      PRO
                    </div>
                  </div>

                  <div>
                    <p className="text-white font-semibold text-sm md:text-base">{item.author}</p>
                    <p className="text-zinc-500 text-xs md:text-sm">{item.title}</p>
                  </div>
                </div>

                {/* Subtle Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-500/0 to-orange-500/0 group-hover:from-yellow-500/5 group-hover:to-orange-500/5 transition-all duration-500 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;