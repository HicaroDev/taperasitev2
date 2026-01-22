import React from 'react';
import Navbar from './components/Navbar';
import { Component as HeroInteractor } from './components/connoisseur-stack-interactor';
import MenuGrid from './components/MenuGrid';
import About from './components/About';
import Footer from './components/Footer';

function App() {
    return (
        <div className="bg-brand-dark min-h-screen">
            <Navbar />
            <HeroInteractor />
            <MenuGrid />
            <About />
            <Footer />
        </div>
    );
}

export default App;
