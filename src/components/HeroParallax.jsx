import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import hero01 from '../assets/hero01.png';
import hero02 from '../assets/hero02.jpg';
import hero03 from '../assets/hero03.jpg';

const images = [hero01, hero02, hero03];

const HeroParallax = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const ref = useRef(null);

    // Configuração do Scroll Parallax
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scaleText = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

    // Loop automático das imagens a cada 12 segundos
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 12000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="início" ref={ref} className="relative h-screen w-full overflow-hidden bg-brand-dark">
            {/* Background Images with Crossfade and Parallax */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2 }}
                        style={{ y: yBackground }}
                        className="absolute inset-0 h-full w-full"
                    >
                        <div
                            style={{
                                backgroundImage: `url(${images[currentImageIndex]})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover'
                            }}
                            className="h-full w-full"
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Dark Overlay with Gradient */}
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/30 to-brand-dark"></div>
            </div>

            {/* Content Context */}
            <motion.div
                style={{ opacity: opacityText, scale: scaleText }}
                className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center"
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
                    <a href="#cardápio" className="bg-brand-red px-10 py-4 font-display text-xl uppercase tracking-widest text-white transition-all hover:bg-brand-red/80 hover:scale-105">
                        Ver Cardápio
                    </a>
                    <a href="#contato" className="border border-white px-10 py-4 font-display text-xl uppercase tracking-widest text-white transition-all hover:bg-white hover:text-brand-dark">
                        Onde Estamos
                    </a>
                </motion.div>

                {/* Progress Indicators for Slider */}
                <div className="absolute bottom-20 left-1/2 flex -translate-x-1/2 gap-3">
                    {images.map((_, i) => (
                        <div
                            key={i}
                            className={`h-1.5 transition-all duration-500 rounded-full ${i === currentImageIndex ? 'w-8 bg-brand-red' : 'w-2 bg-white/30'}`}
                        />
                    ))}
                </div>

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
