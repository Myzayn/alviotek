import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, ArrowRight } from 'lucide-react';
import { mockCompanyInfo } from '../mock';
// change #1
import { useForm, ValidationError } from '@formspree/react';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLiveChatOpen, setIsLiveChatOpen] = useState(false);
  // change #2
  const [state, handleFormSubmit] = useForm("mwpylyld"); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
 //change this
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

    //to this 
    const handleSubmit = (e) => {
  e.preventDefault();
  handleFormSubmit(e);  // Formspree submission

    // Instead of this also
    // Mock form submission
  //   setTimeout(() => {
  //     alert('Thank you for your inquiry! We will contact you within 24 hours.');
  //     setFormData({
  //       name: '',
  //       email: '',
  //       phone: '',
  //       company: '',
  //       service: '',
  //       message: ''
  //     });
  //     setIsSubmitting(false);
  //   }, 1500);
  };

  const toggleLiveChat = () => {
    setIsLiveChatOpen(!isLiveChatOpen);
  };

  return (
    <section id="contact" className="dark-container py-20">
      <div className="dark-content-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="display-large mb-6">Get In Touch</h2>
          <p className="body-large max-w-3xl mx-auto text-gray-300">
            Ready to transform your IT infrastructure? Contact alviotek today for a free 
            consultation and discover how we can elevate your business technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-12">
            {/* Company Info */}
            <div>
              <h3 className="heading-1 mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} style={{ color: 'var(--brand-primary)' }} />
                  </div>
                  <div>
                    <h4 className="heading-3 mb-2">Office Address</h4>
                    <p className="body-medium text-gray-300">{mockCompanyInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={24} style={{ color: 'var(--brand-primary)' }} />
                  </div>
                  <div>
                    <h4 className="heading-3 mb-2">Phone Number</h4>
                    <a 
                      href={`tel:${mockCompanyInfo.phone}`}
                      className="body-medium text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      {mockCompanyInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={24} style={{ color: 'var(--brand-primary)' }} />
                  </div>
                  <div>
                    <h4 className="heading-3 mb-2">Email Address</h4>
                    <a 
                      href={`mailto:${mockCompanyInfo.email}`}
                      className="body-medium text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      {mockCompanyInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                    <Clock size={24} style={{ color: 'var(--brand-primary)' }} />
                  </div>
                  <div>
                    <h4 className="heading-3 mb-2">Business Hours</h4>
                    <div className="body-medium text-gray-300">
                      <p>Sunday - Thursday: 8:00 AM - 6:00 PM</p>
                      <p>Friday: 1:00 PM - 6:00 PM</p>
                      <p>24/7 Emergency Support Available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gray-900/50 p-8 border border-gray-800">
              <h4 className="heading-2 mb-6">Quick Actions</h4>
              <div className="space-y-4">
                <button 
                  onClick={toggleLiveChat}
                  className="w-full btn-secondary text-left justify-start"
                >
                  <MessageCircle size={20} />
                  Start Live Chat Support
                </button>
                <a 
                  href="tel:0567894358"
                  className="w-full btn-primary text-left justify-start"
                >
                  <Phone size={20} />
                  Schedule Emergency Call
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900/50 p-8 border border-gray-800">
            <h3 className="heading-1 mb-8">Request a Quote</h3>
            {/* success message */}
              {/* Success message */}
  {state.succeeded && (
    <p className="text-green-500 mb-4">
      Thank you! Your request has been sent successfully.
    </p>
  )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block body-small text-gray-300 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black/50 border border-gray-700 px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="Enter your full name"
                  />
                   <ValidationError prefix="Name" field="name" errors={state.errors} />

                </div>
                <div>
                  <label className="block body-small text-gray-300 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black/50 border border-gray-700 px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="your.email@company.com"
                  />
                   <ValidationError prefix="Email" field="email" errors={state.errors} />

                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block body-small text-gray-300 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-black/50 border border-gray-700 px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="+966 XX XXX XXXX"
                  />
                  <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                </div>
                <div>
                  <label className="block body-small text-gray-300 mb-2">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full bg-black/50 border border-gray-700 px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="Your company name"
                  />
                  <ValidationError prefix="Company" field="company" errors={state.errors} />
                </div>
              </div>

              <div>
                <label className="block body-small text-gray-300 mb-2">Service Required *</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-black/50 border border-gray-700 px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="networking">Networking Solutions</option>
                  <option value="wifi">WiFi Infrastructure</option>
                  <option value="hardware-software">Hardware & Software</option>
                  <option value="cctv">CCTV Systems</option>
                  <option value="consultation">Free Consultation</option>
                  <option value="emergency">Emergency Support</option>
                </select>
              </div>

              <div>
                <label className="block body-small text-gray-300 mb-2">Project Details</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full bg-black/50 border border-gray-700 px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your IT infrastructure needs, current setup, and project requirements..."
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
{/* instead of this: button */}
              {/* <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary justify-center group"
              >
                {isSubmitting ? 'Sending Request...' : 'Send Request'}
                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
              </button> */}
              {/* Use this */}
              <button 
             type="submit"
              disabled={state.submitting}
            className="w-full btn-primary justify-center group"
>
  {state.submitting ? 'Sending Request...' : 'Send Request'}
  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
</button>
            </form>
          </div>
        </div>
          
          

        {/* Live Chat Widget */}
        {isLiveChatOpen && (
          <div className="fixed bottom-6 right-6 w-80 bg-gray-900 border border-gray-700 shadow-2xl z-50">
            <div className="bg-cyan-500 px-4 py-3 flex items-center justify-between">
              <h4 className="font-semibold text-black">Live Support</h4>
              <button 
                onClick={toggleLiveChat}
                className="text-black hover:text-gray-700"
              >
                ×
              </button>
            </div>
            <div className="p-4">
              <p className="text-gray-300 mb-4">
                Hello! How can we help you with your IT infrastructure today?
              </p>
              <div className="space-y-2">
                <button className="w-full text-left p-2 hover:bg-gray-800 text-sm transition-colors">
                  I need a network assessment
                </button>
                <button className="w-full text-left p-2 hover:bg-gray-800 text-sm transition-colors">
                  CCTV installation quote
                </button>
                <button className="w-full text-left p-2 hover:bg-gray-800 text-sm transition-colors">
                  Emergency IT support
                </button>
                <button className="w-full text-left p-2 hover:bg-gray-800 text-sm transition-colors">
                  Speak with a technician
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;