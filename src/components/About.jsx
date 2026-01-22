import React from 'react';
import { motion } from 'framer-motion';
import shopImage from '../assets/local.png';

const About = () => {
    return (
        <section id="a tapera" className="bg-white text-brand-dark py-20">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="relative"
                >
                    <div className="aspect-[4/3] bg-gray-200 overflow-hidden relative shadow-2xl">
                        <div className="absolute inset-0 border-4 border-brand-dark m-4 z-10 pointer-events-none"></div>
                        <img
                            src={shopImage}
                            alt="Tapera Burguer Store"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                >
                    <span className="font-hand text-brand-red text-3xl mb-4 block">Desde 2018</span>
                    <h2 className="font-display text-6xl mb-8 leading-tight uppercase font-anton">Mais que fome, <br />uma experiência.</h2>
                    <p className="font-body text-gray-600 text-lg mb-6 leading-relaxed">
                        A Tapera nasceu da vontade de resgatar o hambúrguer de verdade. Nada de gourmetização exagerada, apenas pão de qualidade, carne fresca moída no dia e queijo de verdade.
                    </p>
                    <p className="font-body text-gray-600 text-lg mb-8 leading-relaxed">
                        Nosso ambiente é rústico, nossas receitas são de família e nosso atendimento é de amigo. Venha conhecer a nossa casa e sentir o sabor da verdadeira brasa.
                    </p>

                    <a href="#contato" className="inline-block border-b-2 border-brand-red text-brand-red font-display text-xl uppercase tracking-widest hover:text-brand-dark hover:border-brand-dark transition-colors pb-1">
                        Conheça o Espaço
                    </a>
                </motion.div>

            </div>
        </section>
    );
};

export default About;
