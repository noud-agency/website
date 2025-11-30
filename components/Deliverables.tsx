
import React from 'react';
import { FileText, GitMerge, Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

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

const Deliverables: React.FC = () => {
    return (
        <section id="system" className="py-32 px-6 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 bg-black/80 z-0"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-900/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto relative z-10">

                <div className="flex flex-col items-center text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-block px-4 py-2 rounded-full border border-orange-500/20 bg-orange-500/10 backdrop-blur-sm mb-6"
                    >
                        <span className="text-xs font-mono text-orange-400 tracking-widest uppercase">What we Deliver</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-6xl font-sans font-bold text-white tracking-tight"
                    >
                        What you get is clear <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">ROI</span>
                    </motion.h2>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {/* Card 1 */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{ y: -10 }}
                        className="group relative"
                    >
                        <div className="absolute inset-0 bg-zinc-900/40 backdrop-blur-xl rounded-2xl border border-white/5 transition-all duration-300 group-hover:border-orange-500/30 group-hover:bg-zinc-900/60 group-hover:shadow-[0_0_30px_rgba(249,115,22,0.1)]"></div>

                        <div className="relative p-8 h-full flex flex-col">
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">Complete AI Opportunity Report</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    A clear breakdown of your business processes showing exactly where AI can bring the strongest and fastest ROI.
                                </p>
                            </div>

                            <div className="bg-black/40 rounded-xl p-4 border border-white/5 mb-6 group-hover:border-orange-500/20 transition-colors">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-zinc-800 rounded flex items-center justify-center">
                                            <FileText size={16} className="text-zinc-400" />
                                        </div>
                                        <span className="text-sm font-medium text-white">Map all Workflows</span>
                                    </div>
                                    <span className="text-[10px] bg-orange-500/20 text-orange-300 px-1.5 py-0.5 rounded border border-orange-500/30">NEW</span>
                                </div>
                                <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "75%" }}
                                        transition={{ duration: 1.5, delay: 0.5 }}
                                        className="h-full bg-gradient-to-r from-orange-500 to-yellow-500"
                                    ></motion.div>
                                </div>
                                <p className="text-xs text-zinc-500 mt-2 flex justify-between">
                                    <span>Analysis in progress...</span>
                                    <span className="text-orange-400">75%</span>
                                </p>
                            </div>

                            <div className="mt-auto flex items-center text-sm font-medium text-white group-hover:text-orange-400 transition-colors cursor-pointer">
                                View Sample Report <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{ y: -10 }}
                        className="group relative"
                    >
                        <div className="absolute inset-0 bg-zinc-900/40 backdrop-blur-xl rounded-2xl border border-white/5 transition-all duration-300 group-hover:border-orange-500/30 group-hover:bg-zinc-900/60 group-hover:shadow-[0_0_30px_rgba(249,115,22,0.1)]"></div>

                        <div className="relative p-8 h-full flex flex-col">
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">Adoption Blueprint</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    A practical roadmap that outlines how AI fits into your workflows and helps your team embrace it with ease.
                                </p>
                            </div>

                            <div className="bg-black/40 rounded-xl p-6 border border-white/5 mb-6 group-hover:border-orange-500/20 transition-colors relative overflow-hidden">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-[10px] bg-zinc-800/80 text-zinc-300 px-2 py-1 rounded border border-white/5">Align Team</span>
                                    <span className="text-[10px] bg-zinc-800/80 text-zinc-300 px-2 py-1 rounded border border-white/5">Design Flow</span>
                                </div>
                                <div className="flex justify-center items-center gap-2 relative">
                                    {/* Animated Line */}
                                    <div className="absolute top-1/2 left-0 w-full h-px bg-zinc-800 -z-10"></div>

                                    <div className="w-2 h-2 rounded-full bg-zinc-600"></div>
                                    <div className="w-10 h-10 rounded-full border border-orange-500/50 flex items-center justify-center bg-orange-500/10 z-10 shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                                        <GitMerge size={16} className="text-orange-400" />
                                    </div>
                                    <div className="w-2 h-2 rounded-full bg-zinc-600"></div>
                                </div>
                                <div className="mt-4 text-center">
                                    <span className="text-[10px] text-zinc-500 border border-zinc-800 rounded-full px-3 py-1 bg-zinc-900">Continuous Improvement</span>
                                </div>
                            </div>

                            <div className="mt-auto flex items-center text-sm font-medium text-white group-hover:text-orange-400 transition-colors cursor-pointer">
                                Start Roadmap <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{ y: -10 }}
                        className="group relative"
                    >
                        <div className="absolute inset-0 bg-zinc-900/40 backdrop-blur-xl rounded-2xl border border-white/5 transition-all duration-300 group-hover:border-orange-500/30 group-hover:bg-zinc-900/60 group-hover:shadow-[0_0_30px_rgba(249,115,22,0.1)]"></div>

                        <div className="relative p-8 h-full flex flex-col">
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">Custom Built AI Solutions</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    Tailored systems designed around your existing tools that scale effortlessly and deliver measurable business results.
                                </p>
                            </div>

                            <div className="bg-black/40 rounded-xl p-4 border border-white/5 mb-6 group-hover:border-orange-500/20 transition-colors flex items-center justify-center min-h-[140px]">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-orange-500 blur-[30px] opacity-20 animate-pulse"></div>
                                    <div className="w-20 h-20 bg-black border border-white/10 rounded-2xl flex items-center justify-center relative z-10 shadow-2xl">
                                        <div className="grid grid-cols-3 gap-1.5">
                                            {[...Array(9)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0.3 }}
                                                    animate={{ opacity: [0.3, 1, 0.3] }}
                                                    transition={{ duration: 2, delay: i * 0.1, repeat: Infinity }}
                                                    className={`w-1.5 h-1.5 rounded-full ${i % 2 === 0 ? 'bg-white' : 'bg-orange-500'}`}
                                                ></motion.div>
                                            ))}
                                        </div>
                                    </div>
                                    {/* Connecting Nodes */}
                                    <motion.div
                                        animate={{ y: [0, -5, 0] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute -top-6 -right-8 w-10 h-10 bg-zinc-900 rounded-full border border-zinc-700 flex items-center justify-center shadow-lg"
                                    >
                                        <Cpu size={14} className="text-orange-400" />
                                    </motion.div>
                                    <motion.div
                                        animate={{ y: [0, 5, 0] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute -bottom-4 -left-8 w-10 h-10 bg-zinc-900 rounded-full border border-zinc-700 flex items-center justify-center shadow-lg"
                                    >
                                        <span className="text-[10px] font-bold text-zinc-400">API</span>
                                    </motion.div>
                                </div>
                            </div>

                            <div className="mt-auto flex items-center text-sm font-medium text-white group-hover:text-orange-400 transition-colors cursor-pointer">
                                Explore Solutions <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Deliverables;
