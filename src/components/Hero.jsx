import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Phone, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="dark-container min-h-screen flex items-center">
      <div className="dark-content-container w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="display-huge">
                From zero to full ready{' '}
                <span style={{ color: 'var(--brand-primary)' }}>IT infrastructure</span>{' '}
                solution
              </h1>
              
              <p className="body-large max-w-lg">
                Leading IT support company in Saudi Arabia providing comprehensive technology solutions. 
                Networking, WiFi, Hardware, Software, and CCTV installation and maintenance.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-primary dark-button-animate group"
              >
                Get Free Quote
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => scrollToSection('services')}
                className="btn-secondary dark-button-animate"
              >
                View Services
              </button>
            </div>

            {/* Quick Contact */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="tel:0567894358" 
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <Phone size={18} />
                <span className="body-small">0567894358</span>
              </a>
              <a 
                href="mailto:zain@eutech.com" 
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={18} />
                <span className="body-small">zain@alviotek.com</span>
              </a>
            </div>
          </div>

          {/* Right Content - 3D Animation */}
          <div className="relative flex justify-center items-center">
            <div 
              className="w-full max-w-[700px] h-[700px] relative"
              style={{ overflow: 'visible' }}
            >
              <Spline 
                scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;