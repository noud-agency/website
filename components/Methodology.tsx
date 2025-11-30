import React from 'react';
import { motion } from 'framer-motion';
import { Search, GraduationCap, Code2, LayoutDashboard, Settings, MessageSquare, BarChart3, MoreHorizontal, Plus, Image as ImageIcon, Music, Mic } from 'lucide-react';

const steps = [
    {
        icon: Search,
        title: "Auditing & Identification",
        description: "Get started quickly with our user-friendly onboarding process that ensures you're up and running in no time.",
        active: false
    },
    {
        icon: GraduationCap,
        title: "Education & Strategy Alignment",
        description: "Experience the power of our advanced AI engine, providing you with actionable insights as they happen.",
        active: true
    },
    {
        icon: Code2,
        title: "Custom AI Development",
        description: "We're dedicated to your success with continuous support and feature enhancements to keep you ahead.",
        active: false
    }
];

const stats = [
    { value: "82%", label: "of companies discover new AI opportunities within the first audit." },
    { value: "41%", label: "savings on development spend through strategic AI due diligence." },
    { value: "4.7x", label: "higher ROI on AI projects built with our audit-first framework." }
];

const Methodology: React.FC = () => {
    return (
        <section className="py-32 px-6 relative overflow-hidden bg-black">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-900/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-[1600px] mx-auto relative z-10">

                {/* Header */}
                <div className="flex justify-center mb-24">
                    <div className="inline-block px-4 py-2 rounded-full border border-white/10 bg-zinc-900/50 backdrop-blur-sm">
                        <span className="text-xs font-mono text-zinc-400 tracking-widest uppercase">What is it we do?</span>
                    </div>
                </div>

                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-sans font-bold text-white leading-tight"
                    >
                        Our <span className="text-orange-500">Strategy First</span> approach broken down:
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">

                    {/* Left Column: Steps */}
                    <div className="lg:col-span-4 space-y-12 relative">
                        {/* Vertical Connecting Line */}
                        <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-zinc-800">
                            <motion.div
                                initial={{ height: 0 }}
                                whileInView={{ height: "50%" }}
                                transition={{ duration: 1.5, delay: 0.5 }}
                                className="w-full bg-gradient-to-b from-orange-500 to-transparent"
                            ></motion.div>
                        </div>

                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.2 }}
                                className={`relative pl-20 group ${step.active ? 'opacity-100' : 'opacity-60 hover:opacity-100 transition-opacity'}`}
                            >
                                {/* Icon Node */}
                                <div className={`absolute left-0 top-0 w-12 h-12 rounded-xl border flex items-center justify-center transition-all duration-300 z-10 ${step.active ? 'bg-zinc-900 border-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.3)]' : 'bg-black border-zinc-800 group-hover:border-zinc-700'}`}>
                                    <step.icon size={20} className={step.active ? 'text-orange-500' : 'text-zinc-500 group-hover:text-zinc-300'} />
                                </div>

                                <h3 className="text-lg font-bold text-white mb-2">{idx + 1}) {step.title}</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Column: Dashboard Mockup */}
                    <div className="lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="rounded-xl border border-zinc-800 bg-[#0a0a0a] overflow-hidden shadow-2xl relative"
                        >
                            {/* Window Controls */}
                            <div className="h-10 border-b border-zinc-800 flex items-center px-4 gap-2 bg-zinc-900/50">
                                <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                                <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                                <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                            </div>

                            <div className="flex h-[500px]">
                                {/* Sidebar */}
                                <div className="w-64 border-r border-zinc-800 p-4 hidden md:flex flex-col gap-6 bg-zinc-900/20">
                                    <div className="flex items-center gap-2 px-2">
                                        <div className="w-6 h-6 bg-orange-500 rounded-md"></div>
                                        <span className="text-xs font-bold text-zinc-400 tracking-widest">WORK@AIRA.COM</span>
                                    </div>

                                    <div className="space-y-1">
                                        <div className="flex items-center gap-3 px-3 py-2 bg-zinc-800/50 rounded-lg text-white text-sm">
                                            <LayoutDashboard size={16} /> Dashboard
                                        </div>
                                        <div className="flex items-center gap-3 px-3 py-2 text-zinc-500 hover:text-zinc-300 text-sm transition-colors">
                                            <Settings size={16} /> Settings
                                        </div>
                                        <div className="flex items-center gap-3 px-3 py-2 text-zinc-500 hover:text-zinc-300 text-sm transition-colors">
                                            <MessageSquare size={16} /> Schedule
                                        </div>
                                    </div>

                                    <div className="mt-auto">
                                        <div className="text-[10px] font-bold text-zinc-600 uppercase mb-2 px-2">Recent Chats</div>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 px-2 text-zinc-500 text-xs">
                                                <div className="w-2 h-2 border border-zinc-600 rounded-sm"></div> Learning about AI...
                                            </div>
                                            <div className="flex items-center gap-2 px-2 text-zinc-500 text-xs">
                                                <div className="w-2 h-2 border border-zinc-600 rounded-sm"></div> Shaping SVGs with...
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Main Content */}
                                <div className="flex-1 p-8 overflow-hidden relative">
                                    {/* Header */}
                                    <div className="mb-8">
                                        <h3 className="text-xl font-medium text-white mb-1">Dashboard</h3>
                                    </div>

                                    {/* Top Cards */}
                                    <div className="grid grid-cols-3 gap-4 mb-8">
                                        <div className="bg-zinc-900/30 border border-zinc-800 rounded-lg p-4 flex items-center gap-4">
                                            <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center">
                                                <Plus size={18} className="text-zinc-400" />
                                            </div>
                                            <div>
                                                <div className="text-sm text-white font-medium">Create new asset</div>
                                                <div className="text-xs text-zinc-500">Upload or manage</div>
                                            </div>
                                        </div>
                                        <div className="bg-zinc-900/30 border border-zinc-800 rounded-lg p-4 flex items-center gap-4">
                                            <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center">
                                                <LayoutDashboard size={18} className="text-zinc-400" />
                                            </div>
                                            <div>
                                                <div className="text-sm text-white font-medium">Try latest model <span className="text-[9px] bg-purple-500/20 text-purple-400 px-1 rounded">NEW</span></div>
                                                <div className="text-xs text-zinc-500">Use our latest LLM</div>
                                            </div>
                                        </div>
                                        <div className="bg-zinc-900/30 border border-zinc-800 rounded-lg p-4 flex items-center gap-4">
                                            <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center">
                                                <Settings size={18} className="text-zinc-400" />
                                            </div>
                                            <div>
                                                <div className="text-sm text-white font-medium">Train new model</div>
                                                <div className="text-xs text-zinc-500">Personalise your AI</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Actions Grid */}
                                    <div className="mb-2 text-xs font-bold text-zinc-500 uppercase">Actions</div>
                                    <div className="grid grid-cols-4 gap-4 mb-8">
                                        <div className="bg-black border border-zinc-800 rounded-lg p-4">
                                            <div className="flex justify-between mb-4">
                                                <Mic size={16} className="text-zinc-500" />
                                                <span className="text-[9px] bg-green-500/20 text-green-400 px-1 rounded">NEW</span>
                                            </div>
                                            <div className="text-sm text-white mb-1">Audio-to-text</div>
                                            <div className="text-[10px] text-zinc-500">Quickly create transcript</div>
                                        </div>
                                        <div className="bg-black border border-zinc-800 rounded-lg p-4">
                                            <div className="flex justify-between mb-4">
                                                <Music size={16} className="text-zinc-500" />
                                                <span className="text-[9px] bg-orange-500/20 text-orange-400 px-1 rounded">UPDATED</span>
                                            </div>
                                            <div className="text-sm text-white mb-1">Text-to-audio</div>
                                            <div className="text-[10px] text-zinc-500">Create audio sample</div>
                                        </div>
                                        <div className="bg-black border border-zinc-800 rounded-lg p-4">
                                            <div className="flex justify-between mb-4">
                                                <ImageIcon size={16} className="text-zinc-500" />
                                            </div>
                                            <div className="text-sm text-white mb-1">Image-to-video</div>
                                            <div className="text-[10px] text-zinc-500">Make a 5-sec video</div>
                                        </div>
                                        <div className="bg-black border border-zinc-800 rounded-lg p-4">
                                            <div className="flex justify-between mb-4">
                                                <MoreHorizontal size={16} className="text-zinc-500" />
                                            </div>
                                            <div className="text-sm text-white mb-1">AI magic edit</div>
                                            <div className="text-[10px] text-zinc-500">Edit your images</div>
                                        </div>
                                    </div>

                                    {/* Analytics Graph */}
                                    <div className="mb-2 text-xs font-bold text-zinc-500 uppercase">Analytics</div>
                                    <div className="grid grid-cols-2 gap-4 h-40">
                                        <div className="bg-zinc-900/20 border border-zinc-800 rounded-lg p-4 relative overflow-hidden">
                                            <div className="text-xs text-zinc-500 mb-1">VIEW OF ASSETS</div>
                                            <div className="text-xl font-medium text-white mb-4">403 views <span className="text-green-500 text-sm">+13.2%</span></div>
                                            {/* Fake Graph Line */}
                                            <div className="absolute bottom-0 left-0 right-0 h-16 flex items-end px-2 gap-1 opacity-50">
                                                {[40, 60, 45, 70, 50, 80, 65, 90, 75, 100].map((h, i) => (
                                                    <div key={i} className="flex-1 bg-gradient-to-t from-zinc-700 to-transparent rounded-t-sm" style={{ height: `${h}%` }}></div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="bg-zinc-900/20 border border-zinc-800 rounded-lg p-4 relative overflow-hidden">
                                            <div className="text-xs text-zinc-500 mb-1">ENGAGEMENT RATE</div>
                                            <div className="text-xl font-medium text-white mb-4">318 impressions <span className="text-red-500 text-sm">-8.9%</span></div>
                                            {/* Fake Graph Line */}
                                            <div className="absolute bottom-0 left-0 right-0 h-16 flex items-end px-2 gap-1 opacity-50">
                                                {[80, 70, 90, 60, 75, 50, 65, 40, 55, 45].map((h, i) => (
                                                    <div key={i} className="flex-1 bg-gradient-to-t from-zinc-700 to-transparent rounded-t-sm" style={{ height: `${h}%` }}></div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-12">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.8 + (idx * 0.1) }}
                            className="flex gap-4 items-start"
                        >
                            <div className="text-4xl font-bold text-white">{stat.value}</div>
                            <div className="text-sm text-zinc-500 leading-relaxed pt-1 max-w-[200px]">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Methodology;
// Force HMR update