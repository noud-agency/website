import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

// Fungsi untuk menampilkan bintang rating
const StarRating = ({ rating = 5 }) => (
  <div className="flex space-x-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: i * 0.1, duration: 0.3 }}
        className={`text-lg ${i < rating ? 'text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]' : 'text-zinc-700'
          }`}
      >
        <Star className="w-5 h-5 fill-current" />
      </motion.span>
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

const Testimonials: React.FC = () => {
  return (
    <section id="impact" className="py-32 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/90 z-0"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-sans font-bold text-white tracking-tight leading-tight">
              Success stories <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                from our Users
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <p className="text-zinc-400 text-lg max-w-md text-right">
              Join hundreds of companies transforming their operations with Noud AI.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative"
            >
              {/* Card Background with Glassmorphism */}
              <div className="absolute inset-0 bg-zinc-900/40 backdrop-blur-xl rounded-2xl border border-white/5 transition-all duration-300 group-hover:border-yellow-500/30 group-hover:bg-zinc-900/60 group-hover:shadow-[0_0_30px_rgba(234,179,8,0.1)]"></div>

              <div className="relative p-8 h-full flex flex-col">
                {/* Header Stat */}
                <div className="mb-6 pb-6 border-b border-white/5 group-hover:border-yellow-500/20 transition-colors">
                  <motion.p
                    className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mb-2"
                    whileHover={{ scale: 1.05, originX: 0 }}
                  >
                    {item.stat}
                  </motion.p>
                  <StarRating rating={item.rating} />
                </div>

                {/* Quote Icon */}
                <div className="absolute top-8 right-8 text-yellow-500/10 group-hover:text-yellow-500/20 transition-colors transform group-hover:scale-110 duration-500">
                  <Quote size={64} />
                </div>

                {/* Quote Text */}
                <div className="flex-grow mb-8 relative z-10">
                  <p className="text-lg text-zinc-300 font-medium leading-relaxed italic">
                    "{item.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center space-x-4 mt-auto">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-zinc-800 group-hover:border-yellow-500/50 transition-colors">
                      <img
                        src={getAvatarUrl(item.author)}
                        alt={item.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-yellow-500 text-black text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                      PRO
                    </div>
                  </div>

                  <div>
                    <p className="text-white font-bold text-lg group-hover:text-yellow-400 transition-colors">{item.author}</p>
                    <p className="text-zinc-500 text-sm group-hover:text-zinc-400 transition-colors">{item.title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;