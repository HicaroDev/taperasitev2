import React from 'react';
import Navbar from './components/Navbar';
import HeroParallax from './components/HeroParallax';
import MenuGrid from './components/MenuGrid';
import About from './components/About';
import Footer from './components/Footer';

function App() {
    return (
        <div className="bg-brand-dark min-h-screen">
            <Navbar />
            <HeroParallax />
            <MenuGrid />
            <About />
            <Footer />
        </div>
    );
}

export default App;
