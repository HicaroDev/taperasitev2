import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#início">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2 cursor-pointer"
                    >
                        <img src={logo} alt="Tapera Burguer" className="h-12 md:h-16 drop-shadow-lg" />
                        <span className="hidden md:block font-display text-xl text-white tracking-widest uppercase">Tapera<span className="text-brand-red">Burguer</span></span>
                    </motion.div>
                </a>

                <ul className="hidden md:flex gap-8">
                    {['Início', 'Cardápio', 'A Tapera', 'Contato'].map((item) => (
                        <li key={item}>
                            <a href={`#${item.toLowerCase()}`} className="font-display text-lg uppercase tracking-wide hover:text-brand-gold transition-colors relative group">
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all group-hover:w-full"></span>
                            </a>
                        </li>
                    ))}
                </ul>

                <button className="bg-brand-red text-white font-display uppercase tracking-wider px-6 py-2 rounded-sm hover:bg-red-700 transition-colors border border-transparent hover:border-brand-gold">
                    Pedir Agora
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
