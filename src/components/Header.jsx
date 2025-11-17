import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="dark-header">
      {/* Logo */}
      <div className="dark-logo">
        <div className="display-medium" style={{ color: 'var(--brand-primary)' }}>
          alviotek
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="dark-nav hidden md:flex">
        <button 
          onClick={() => scrollToSection('home')}
          className="dark-nav-link hover:text-white transition-colors"
        >
          Home
        </button>
        <button 
          onClick={() => scrollToSection('services')}
          className="dark-nav-link hover:text-white transition-colors"
        >
          Services
        </button>
        <button 
          onClick={() => scrollToSection('about')}
          className="dark-nav-link hover:text-white transition-colors"
        >
          About
        </button>
        <button 
          onClick={() => scrollToSection('portfolio')}
          className="dark-nav-link hover:text-white transition-colors"
        >
          Portfolio
        </button>
        <button 
          onClick={() => scrollToSection('testimonials')}
          className="dark-nav-link hover:text-white transition-colors"
        >
          Testimonials
        </button>
        <button 
          onClick={() => scrollToSection('contact')}
          className="dark-nav-link hover:text-white transition-colors"
        >
          Contact
        </button>
      </nav>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black border-t border-gray-800 md:hidden">
          <nav className="flex flex-col p-4">
            <button 
              onClick={() => scrollToSection('home')}
              className="dark-nav-link py-2 hover:text-white transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="dark-nav-link py-2 hover:text-white transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="dark-nav-link py-2 hover:text-white transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="dark-nav-link py-2 hover:text-white transition-colors"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="dark-nav-link py-2 hover:text-white transition-colors"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="dark-nav-link py-2 hover:text-white transition-colors"
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;