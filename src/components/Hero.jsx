import React from 'react';
import { motion } from 'framer-motion';
import heroBurger from '../assets/hero-burger.png';

const Hero = () => {
    return (
        <section id="início" className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0a0a0a]">
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 opacity-20 pointer-events-none"
                style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/dark-matter.png")' }}></div>

            {/* Cinematic Lighting */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-brand-red/20 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-4 items-center relative z-10">

                {/* Burger Image (Left Side like in screenshot) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: -50 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative flex justify-center md:justify-start order-2 md:order-1"
                >
                    <div className="relative group max-w-[550px]">
                        <img
                            src={heroBurger}
                            alt="Tapera Burger"
                            className="w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)] relative z-10"
                        />

                        {/* Floating Badge (Similar to T.T. Burger badge) */}
                        <motion.button
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            initial={{ scale: 0, rotate: -45 }}
                            animate={{ scale: 1, rotate: -10 }}
                            transition={{ delay: 0.8, type: "spring" }}
                            className="absolute bottom-[10%] right-[10%] z-20 bg-brand-gold text-brand-dark w-24 h-24 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center border-4 border-white/20 shadow-2xl group"
                        >
                            <span className="font-anton text-[10px] md:text-sm uppercase leading-none">Fazer</span>
                            <span className="font-anton text-lg md:text-2xl uppercase leading-none">Pedido</span>
                            <span className="font-hand text-[10px] md:text-xs">Clique aqui</span>
                        </motion.button>

                        {/* Wood Base Shadow (Optional polish) */}
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-8 bg-black/60 blur-xl rounded-[100%]"></div>
                    </div>
                </motion.div>

                {/* Text Content (Right Side like in screenshot) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-center md:text-left order-1 md:order-2 flex flex-col items-center md:items-start"
                >
                    <h1 className="font-anton text-[50px] md:text-[85px] leading-[0.9] text-white uppercase tracking-tighter mb-4">
                        ORIGINALMENTE <br />
                        <span className="text-brand-red">TAPERA</span>
                    </h1>

                    <div className="relative mt-2">
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            className="font-hand text-white/80 text-3xl md:text-5xl -rotate-3 ml-12 md:ml-20 tracking-widest whitespace-nowrap"
                        >
                            Tapera Burguer
                        </motion.p>
                        {/* Fake underline like a signature */}
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ delay: 1.2, duration: 1 }}
                            className="h-[2px] bg-white/20 mt-1"
                        ></motion.div>
                    </div>

                    <div className="hidden md:flex flex-wrap gap-4 mt-12 opacity-50">
                        {['SMASHED', 'ARTESANAL', 'LEGÍTIMO'].map(tag => (
                            <span key={tag} className="border border-white/40 px-3 py-1 text-[10px] tracking-[0.2em]">{tag}</span>
                        ))}
                    </div>
                </motion.div>

            </div>

            {/* Hero Fade End */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-dark to-transparent"></div>
        </section>
    );
};

export default Hero;
