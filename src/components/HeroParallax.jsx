import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroImage from '../assets/Screenshot_1.png';

const HeroParallax = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scaleText = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

    return (
        <section ref={ref} className="relative h-screen w-full overflow-hidden bg-brand-dark">
            {/* Background Image with Parallax */}
            <motion.div
                style={{
                    y: yBackground,
                    backgroundImage: `url(${heroImage})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}
                className="absolute inset-0 z-0 h-full w-full"
            >
                {/* Dark Overlay with Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-brand-dark"></div>
            </motion.div>

            {/* Content Context */}
            <motion.div
                style={{ opacity: opacityText, scale: scaleText }}
                className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="mb-4 inline-block font-hand text-3xl text-brand-gold md:text-5xl">
                        O Verdadeiro Sabor da Brasa
                    </span>
                    <h1 className="mb-6 font-anton text-7xl uppercase leading-[0.9] text-white md:text-[120px] tracking-tighter">
                        TAPERA <br />
                        <span className="text-brand-red">BURGUER</span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="flex flex-col gap-4 md:flex-row"
                >
                    <button className="bg-brand-red px-10 py-4 font-display text-xl uppercase tracking-widest text-white transition-all hover:bg-brand-red/80 hover:scale-105">
                        Ver Cardápio
                    </button>
                    <button className="border border-white px-10 py-4 font-display text-xl uppercase tracking-widest text-white transition-all hover:bg-white hover:text-brand-dark">
                        Onde Estamos
                    </button>
                </motion.div>

                {/* Animated Scroll Down Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                >
                    <div className="h-12 w-1 rounded-full bg-gradient-to-b from-brand-red to-transparent"></div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeroParallax;
