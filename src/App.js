import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Components
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

// Footer Component
const Footer = () => {
  return (
    <footer className="dark-container py-12 border-t border-gray-800">
      <div className="dark-content-container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="display-medium mb-4" style={{ color: 'var(--brand-primary)' }}>
              alviotek
            </div>
            <p className="body-small text-gray-400 mb-4">
              From zero to full ready IT infrastructure solution in Saudi Arabia.
            </p>
            <div className="space-y-2">
              <a href="tel:0567894358" className="block body-small text-gray-400 hover:text-white transition-colors">
                📞 0567894358
              </a>
              <a href="mailto:zain@eutech.com" className="block body-small text-gray-400 hover:text-white transition-colors">
                ✉️ zain@alviotek.com
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="heading-3 mb-4">Services</h4>
            <div className="space-y-2">
              <p className="body-small text-gray-400">Networking Solutions</p>
              <p className="body-small text-gray-400">WiFi Infrastructure</p>
              <p className="body-small text-gray-400">Hardware & Software</p>
              <p className="body-small text-gray-400">CCTV Systems</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="heading-3 mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block body-small text-gray-400 hover:text-white transition-colors"
              >
                About Us
              </button>
              <button 
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="block body-small text-gray-400 hover:text-white transition-colors"
              >
                Portfolio
              </button>
              <button 
                onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
                className="block body-small text-gray-400 hover:text-white transition-colors"
              >
                Testimonials
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="block body-small text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="heading-3 mb-4">Location</h4>
            <p className="body-small text-gray-400 mb-4">
              alviotek HQ<br />
              King Faisal Tower<br />
              Central Riyadh, SA
            </p>
            <p className="body-small text-gray-400">
              24/7 Support Available
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="body-small text-gray-500">
            © 2025 alviotek. All rights reserved. Leading IT infrastructure solutions in Saudi Arabia.
          </p>
        </div>
      </div>
    </footer>
  );
};

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
