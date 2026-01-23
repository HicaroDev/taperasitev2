import React from 'react';
import { motion } from 'framer-motion';
import ownerImage from '../assets/Founder.jfif'; // Using the founder image
import ketchupIcon from '../assets/logo.png'; // Using logo as a decorative element

const History = () => {
    return (
        <section className="relative overflow-hidden bg-white py-24 pb-32">
            {/* Background Decorative Element (Ketchup Bottle/Logo style) */}
            <div className="pointer-events-none absolute left-1/2 top-10 w-64 -translate-x-1/2 opacity-[0.03] rotate-12">
                <img src={ketchupIcon} alt="" className="w-full grayscale" />
            </div>

            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center justify-between gap-16 md:flex-row">

                    {/* Left Side: Text Content */}
                    <div className="flex w-full flex-col items-center text-center md:w-1/2 md:items-start md:text-left">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-8 font-anton text-5xl uppercase tracking-tighter text-brand-dark md:text-6xl"
                        >
                            NOSSA <br />
                            <span className="text-black">HISTÓRIA</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="mb-10 max-w-md font-body text-lg italic leading-relaxed text-zinc-700"
                        >
                            "Com sua primeira chapa ligada em 2018, a Tapera Burguer nasceu com um propósito simples: resgatar a essência do hambúrguer artesanal. Somos pioneiros no conceito de brasa rústica na região, trazendo um cardápio totalmente focado na qualidade extrema da carne e no frescor dos ingredientes."
                        </motion.p>

                        <motion.button
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="group relative bg-[#968369] px-10 py-3 font-anton text-xl uppercase tracking-widest text-white transition-all hover:bg-[#857258] shadow-[4px_4px_0px_#4a3f33]"
                        >
                            SAIBA MAIS
                        </motion.button>
                    </div>

                    {/* Right Side: Specialized Image Layout */}
                    <div className="relative w-full md:w-1/2 flex justify-center md:justify-end">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 3 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10 w-full max-w-[400px] border-[12px] border-white bg-white p-1 shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
                        >
                            <img
                                src={ownerImage}
                                alt="History of Tapera"
                                className="h-full w-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-500"
                            />

                            {/* Artist/Owner Caption Style */}
                            <div className="absolute -bottom-16 -left-10 hidden md:block">
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.8 }}
                                    className="flex flex-col items-center"
                                >
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="rotate-[120deg] mb-2 opacity-40">
                                        <path d="M10 10C15 25 30 25 35 35" stroke="black" strokeWidth="2" strokeLinecap="round" />
                                        <path d="M28 35H35V28" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span className="font-anton text-sm uppercase tracking-widest text-zinc-400">TAPERA <br /> FOUNDER</span>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Background subtle offset shape */}
                        <div className="absolute -right-4 -top-4 -z-0 h-full w-full border border-zinc-100 bg-zinc-50/50"></div>
                    </div>

                </div>
            </div>

            {/* Bottom transition gradient to cardápio */}
            <div className="absolute bottom-0 h-32 w-full bg-gradient-to-t from-zinc-50 to-transparent"></div>
        </section>
    );
};

export default History;
