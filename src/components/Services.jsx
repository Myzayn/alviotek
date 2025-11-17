import React from 'react';
import { Network, Wifi, HardDrive, Camera, ArrowRight, Check } from 'lucide-react';
import { mockServices } from '../mock';

const iconMap = {
  Network: Network,
  Wifi: Wifi, 
  HardDrive: HardDrive,
  Camera: Camera
};

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="dark-container py-20">
      <div className="dark-content-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="display-large mb-6">Our Services</h2>
          <p className="body-large max-w-3xl mx-auto text-gray-300">
            Comprehensive IT solutions tailored for Saudi Arabian businesses. 
            From network infrastructure to security systems, we handle it all.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {mockServices.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div 
                key={service.id}
                className="group bg-gray-900/50 p-8 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 dark-hover"
              >
                {/* Service Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-cyan-500/10 flex items-center justify-center mb-4">
                    <IconComponent size={32} style={{ color: 'var(--brand-primary)' }} />
                  </div>
                  <h3 className="heading-2 mb-3">{service.title}</h3>
                  <p className="body-small text-gray-400 mb-6">{service.description}</p>
                </div>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check size={16} style={{ color: 'var(--brand-primary)' }} />
                      <span className="body-small text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button 
            onClick={scrollToContact}
            className="btn-primary dark-button-animate group"
          >
            Request Service Quote
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;