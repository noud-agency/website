import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-black">
            {/* Simplified version for mobile */}
            {isMobile ? (
                <>
                    {/* Single static gradient for mobile */}
                    <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-900/20 rounded-full blur-[120px] mix-blend-screen" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-blue-900/10 rounded-full blur-[150px] mix-blend-screen" />

                    {/* Vignette */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] opacity-90"></div>
                </>
            ) : (
                <>
                    {/* Full animated version for desktop */}
                    {/* 1. Ambience Light (Moving Orbs) */}
                    <motion.div
                        animate={{
                            x: [0, 100, 0],
                            y: [0, -50, 0],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-900/20 rounded-full blur-[120px] mix-blend-screen"
                    />

                    <motion.div
                        animate={{
                            x: [0, -100, 0],
                            y: [0, 100, 0],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 2
                        }}
                        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-blue-900/10 rounded-full blur-[150px] mix-blend-screen"
                    />

                    <motion.div
                        animate={{
                            x: [0, 50, -50, 0],
                            y: [0, 50, 50, 0],
                        }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute top-[40%] left-[30%] w-[30vw] h-[30vw] bg-orange-900/10 rounded-full blur-[100px] mix-blend-screen"
                    />

                    {/* 2. Glass Shapes (Floating Geometric Elements) */}
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 360],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute top-[20%] right-[20%] w-32 h-32 rounded-full border border-white/5 bg-white/[0.01] backdrop-blur-[1px]"
                    />

                    <motion.div
                        animate={{
                            y: [0, 30, 0],
                            x: [0, 20, 0],
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute bottom-[30%] left-[10%] w-48 h-48 rounded-full border border-white/5 bg-white/[0.01] backdrop-blur-[2px]"
                    />

                    <motion.div
                        animate={{
                            rotate: [45, 225],
                        }}
                        transition={{
                            duration: 40,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute top-[60%] right-[40%] w-24 h-24 border border-white/5 bg-white/[0.01] backdrop-blur-[1px]"
                    />

                    {/* 3. Grid Pattern (Subtle Texture) */}
                    <div className="absolute inset-0 bg-[size:50px_50px] bg-grid-pattern opacity-[0.02]"></div>

                    {/* 4. Outer Glow / Vignette */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] opacity-90"></div>

                    {/* Noise Texture */}
                    <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
                </>
            )}
        </div>
    );
};

export default AnimatedBackground;
