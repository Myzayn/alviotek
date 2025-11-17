import React from 'react';
import { Star, Quote } from 'lucide-react';
import { mockTestimonials } from '../mock';

const Testimonials = () => {
  return (
    <section id="testimonials" className="dark-container py-20">
      <div className="dark-content-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="display-large mb-6">What Our Clients Say</h2>
          <p className="body-large max-w-3xl mx-auto text-gray-300">
            Don't just take our word for it. Here's what some of our satisfied clients 
            across Saudi Arabia have to say about our IT solutions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {mockTestimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="bg-gray-900/50 p-8 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 dark-hover"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote size={32} style={{ color: 'var(--brand-primary)' }} />
              </div>

              {/* Testimonial Content */}
              <p className="body-medium text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star 
                    key={starIndex} 
                    size={16} 
                    className="fill-current" 
                    style={{ color: 'var(--brand-primary)' }} 
                  />
                ))}
              </div>

              {/* Client Info */}
              <div className="border-t border-gray-800 pt-6">
                <h4 className="heading-3 mb-1">{testimonial.name}</h4>
                <p className="body-small text-cyan-400 mb-1">{testimonial.role}</p>
                <p className="body-small text-gray-400">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gray-900/50 p-12 border border-gray-800">
          <h3 className="heading-1 text-center mb-12">Trusted by Leading Organizations</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[
              "Riyadh Tech Solutions",
              "Saudi Innovation Hub", 
              "Digital Horizons LLC",
              "King Faisal Medical Center"
            ].map((client, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-cyan-500/10 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold" style={{ color: 'var(--brand-primary)' }}>
                    {client.split(' ').map(word => word[0]).join('')}
                  </span>
                </div>
                <p className="body-small text-gray-400">{client}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="heading-1 mb-6">Ready to Join Our Success Stories?</h3>
          <p className="body-medium text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us help you transform your IT infrastructure and achieve the same level of success. 
            Contact us today for a free consultation.
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="btn-primary dark-button-animate"
          >
            Start Your Success Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;