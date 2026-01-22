import React from 'react';
import { motion } from 'framer-motion';
import heroBurger from '../assets/hero-burger.png';

const products = [
    { name: "O Clássico", desc: "Brioche, blend 180g, cheddar, cebola caramelizada.", price: "28,00" },
    { name: "Tapera Bacon", desc: "Bacon crocante, barbecue rústico, queijo prato.", price: "32,00" },
    { name: "Veggie Power", desc: "Grão de bico, cogumelos, maionese de ervas.", price: "26,00" },
    { name: "Double Smash", desc: "Dois smashes de 90g, cheddar duplo, picles.", price: "30,00" },
];

const MenuGrid = () => {
    return (
        <section id="cardápio" className="bg-brand-dark py-20 border-t border-gray-800">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="flex items-end gap-4 mb-16"
                >
                    <h2 className="font-display text-5xl md:text-6xl text-white">Nosso <br /><span className="text-brand-red">Cardápio</span></h2>
                    <div className="h-1 flex-grow bg-gray-800 mb-4 relative">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-brand-gold rounded-full"></div>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative border border-gray-800 hover:border-brand-gold transition-colors p-6 pt-12 mt-10"
                        >
                            {/* Floating Image */}
                            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 transition-transform group-hover:scale-110 group-hover:-rotate-6">
                                <img src={heroBurger} alt={item.name} className="drop-shadow-lg" />
                            </div>

                            <h3 className="font-display text-2xl text-white mb-2 text-center mt-4">{item.name}</h3>
                            <p className="font-body text-gray-400 text-center text-sm mb-6">{item.desc}</p>

                            <div className="flex justify-center">
                                <span className="font-display text-brand-gold text-2xl">R$ {item.price}</span>
                            </div>

                            <button className="w-full mt-6 border border-gray-700 text-white py-2 uppercase font-display text-sm tracking-widest hover:bg-white hover:text-brand-dark transition-colors">
                                Adicionar
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MenuGrid;
