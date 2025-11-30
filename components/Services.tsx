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

const Services: React.FC = () => {
    return (
        <section id="services" className="py-32 px-6 relative overflow-hidden bg-black border-b border-white/5">
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
                    <div className="lg:col-span-4 space-y-8 relative">
                        {/* Vertical Connecting Line */}
                        <div className="absolute left-[22px] top-12 bottom-12 w-px bg-gradient-to-b from-orange-500/50 via-orange-500/20 to-transparent">
                            <motion.div
                                initial={{ height: 0 }}
                                whileInView={{ height: "100%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                                className="w-full bg-gradient-to-b from-orange-500 to-transparent"
                            ></motion.div>
                        </div>

                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.15 }}
                                className={`relative group ${step.active ? 'opacity-100' : 'opacity-70 hover:opacity-100 transition-opacity'}`}
                            >
                                {/* Icon Box with Glow */}
                                <div className="flex items-start gap-6">
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className={`relative w-12 h-12 rounded-xl border-2 flex items-center justify-center shrink-0 z-10 transition-all duration-300 ${step.active
                                            ? 'bg-gradient-to-br from-orange-500 to-yellow-500 border-orange-400 shadow-[0_0_30px_rgba(249,115,22,0.5)]'
                                            : 'bg-zinc-900 border-zinc-800 group-hover:border-orange-500/50 group-hover:bg-zinc-800'
                                            }`}
                                    >
                                        <step.icon
                                            size={22}
                                            className={step.active ? 'text-black' : 'text-zinc-500 group-hover:text-orange-400 transition-colors'}
                                        />

                                        {/* Pulse effect for active step */}
                                        {step.active && (
                                            <motion.div
                                                className="absolute inset-0 rounded-xl bg-orange-500"
                                                animate={{
                                                    scale: [1, 1.3, 1],
                                                    opacity: [0.5, 0, 0.5],
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                }}
                                            />
                                        )}
                                    </motion.div>

                                    <div className="flex-1 pt-1">
                                        <motion.h3
                                            className={`text-xl font-bold mb-3 ${step.active ? 'text-white' : 'text-zinc-300 group-hover:text-white transition-colors'}`}
                                            whileHover={{ x: 4 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {idx + 1}) {step.title}
                                        </motion.h3>
                                        <p className="text-zinc-500 text-sm leading-relaxed">
                                            {step.description}
                                        </p>

                                        {/* Progress indicator for active step */}
                                        {step.active && (
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: "60%" }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.5 }}
                                                className="h-1 bg-gradient-to-r from-orange-500 to-transparent rounded-full mt-4"
                                            />
                                        )}
                                    </div>
                                </div>
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
                                <motion.div
                                    className="w-3 h-3 rounded-full bg-red-500/80"
                                    whileHover={{ scale: 1.2 }}
                                    transition={{ duration: 0.2 }}
                                ></motion.div>
                                <motion.div
                                    className="w-3 h-3 rounded-full bg-yellow-500/80"
                                    whileHover={{ scale: 1.2 }}
                                    transition={{ duration: 0.2 }}
                                ></motion.div>
                                <motion.div
                                    className="w-3 h-3 rounded-full bg-green-500/80"
                                    whileHover={{ scale: 1.2 }}
                                    transition={{ duration: 0.2 }}
                                ></motion.div>
                            </div>

                            <div className="flex h-[500px]">
                                {/* Sidebar */}
                                <div className="w-64 border-r border-zinc-800 p-4 hidden md:flex flex-col gap-6 bg-zinc-900/20">
                                    <div className="flex items-center gap-2 px-2">
                                        <div className="w-6 h-6 bg-orange-500 rounded-md"></div>
                                        <span className="text-xs font-bold text-zinc-400 tracking-widest">Noud AI</span>
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
                                        {[
                                            { icon: Plus, title: "Create new asset", subtitle: "Upload or manage", badge: null },
                                            { icon: LayoutDashboard, title: "Try latest model", subtitle: "Use our latest LLM", badge: "NEW" },
                                            { icon: Settings, title: "Train new model", subtitle: "Personalise your AI", badge: null }
                                        ].map((card, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, delay: 0.1 + (idx * 0.1) }}
                                                whileHover={{ y: -2, borderColor: "rgba(249, 115, 22, 0.3)" }}
                                                className="bg-zinc-900/30 border border-zinc-800 rounded-lg p-4 flex items-center gap-4 cursor-pointer transition-colors"
                                            >
                                                <motion.div
                                                    className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center"
                                                    whileHover={{ scale: 1.1, backgroundColor: "rgba(249, 115, 22, 0.1)" }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <card.icon size={18} className="text-zinc-400" />
                                                </motion.div>
                                                <div>
                                                    <div className="text-sm text-white font-medium">
                                                        {card.title}
                                                        {card.badge && <span className="text-[9px] bg-purple-500/20 text-purple-400 px-1 rounded ml-1">{card.badge}</span>}
                                                    </div>
                                                    <div className="text-xs text-zinc-500">{card.subtitle}</div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Actions Grid */}
                                    <div className="mb-2 text-xs font-bold text-zinc-500 uppercase">Actions</div>
                                    <div className="grid grid-cols-4 gap-4 mb-8">
                                        {[
                                            { icon: Mic, title: "Audio-to-text", subtitle: "Quickly create transcript", badge: "NEW", badgeColor: "green" },
                                            { icon: Music, title: "Text-to-audio", subtitle: "Create audio sample", badge: "UPDATED", badgeColor: "orange" },
                                            { icon: ImageIcon, title: "Image-to-video", subtitle: "Make a 5-sec video", badge: null, badgeColor: null },
                                            { icon: MoreHorizontal, title: "AI magic edit", subtitle: "Edit your images", badge: null, badgeColor: null }
                                        ].map((action, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.3, delay: 0.3 + (idx * 0.05) }}
                                                whileHover={{
                                                    scale: 1.05,
                                                    borderColor: "rgba(249, 115, 22, 0.5)",
                                                    boxShadow: "0 0 20px rgba(249, 115, 22, 0.1)"
                                                }}
                                                className="bg-black border border-zinc-800 rounded-lg p-4 cursor-pointer"
                                            >
                                                <div className="flex justify-between mb-4">
                                                    <motion.div
                                                        whileHover={{ rotate: 360 }}
                                                        transition={{ duration: 0.5 }}
                                                    >
                                                        <action.icon size={16} className="text-zinc-500" />
                                                    </motion.div>
                                                    {action.badge && (
                                                        <motion.span
                                                            initial={{ scale: 0 }}
                                                            animate={{ scale: 1 }}
                                                            transition={{ delay: 0.5 + (idx * 0.05), type: "spring" }}
                                                            className={`text-[9px] bg-${action.badgeColor}-500/20 text-${action.badgeColor}-400 px-1 rounded`}
                                                        >
                                                            {action.badge}
                                                        </motion.span>
                                                    )}
                                                </div>
                                                <div className="text-sm text-white mb-1">{action.title}</div>
                                                <div className="text-[10px] text-zinc-500">{action.subtitle}</div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Analytics Graph */}
                                    <div className="mb-2 text-xs font-bold text-zinc-500 uppercase">Analytics</div>
                                    <div className="grid grid-cols-2 gap-4 h-40">
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.5 }}
                                            whileHover={{ borderColor: "rgba(34, 197, 94, 0.3)" }}
                                            className="bg-zinc-900/20 border border-zinc-800 rounded-lg p-4 relative overflow-hidden group cursor-pointer"
                                        >
                                            <div className="text-xs text-zinc-500 mb-1">VIEW OF ASSETS</div>
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.7 }}
                                                className="text-xl font-medium text-white mb-4"
                                            >
                                                403 views <motion.span
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ delay: 0.9, type: "spring" }}
                                                    className="text-green-500 text-sm"
                                                >+13.2%</motion.span>
                                            </motion.div>
                                            {/* Animated Graph Bars */}
                                            <div className="absolute bottom-0 left-0 right-0 h-16 flex items-end px-2 gap-1 opacity-50 group-hover:opacity-70 transition-opacity">
                                                {[40, 60, 45, 70, 50, 80, 65, 90, 75, 100].map((h, i) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ height: 0 }}
                                                        whileInView={{ height: `${h}%` }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 0.5, delay: 0.6 + (i * 0.05), ease: "easeOut" }}
                                                        whileHover={{ backgroundColor: "rgba(34, 197, 94, 0.5)" }}
                                                        className="flex-1 bg-gradient-to-t from-zinc-700 to-transparent rounded-t-sm"
                                                    ></motion.div>
                                                ))}
                                            </div>
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.5 }}
                                            whileHover={{ borderColor: "rgba(239, 68, 68, 0.3)" }}
                                            className="bg-zinc-900/20 border border-zinc-800 rounded-lg p-4 relative overflow-hidden group cursor-pointer"
                                        >
                                            <div className="text-xs text-zinc-500 mb-1">ENGAGEMENT RATE</div>
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.7 }}
                                                className="text-xl font-medium text-white mb-4"
                                            >
                                                318 impressions <motion.span
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ delay: 0.9, type: "spring" }}
                                                    className="text-red-500 text-sm"
                                                >-8.9%</motion.span>
                                            </motion.div>
                                            {/* Animated Graph Bars */}
                                            <div className="absolute bottom-0 left-0 right-0 h-16 flex items-end px-2 gap-1 opacity-50 group-hover:opacity-70 transition-opacity">
                                                {[80, 70, 90, 60, 75, 50, 65, 40, 55, 45].map((h, i) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ height: 0 }}
                                                        whileInView={{ height: `${h}%` }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 0.5, delay: 0.6 + (i * 0.05), ease: "easeOut" }}
                                                        whileHover={{ backgroundColor: "rgba(239, 68, 68, 0.5)" }}
                                                        className="flex-1 bg-gradient-to-t from-zinc-700 to-transparent rounded-t-sm"
                                                    ></motion.div>
                                                ))}
                                            </div>
                                        </motion.div>
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

export default Services;