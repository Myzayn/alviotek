import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { mockFAQ } from '../mock';

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set([1])); // First item open by default

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="dark-container py-20 bg-gray-900/30">
      <div className="dark-content-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="display-large mb-6">Frequently Asked Questions</h2>
          <p className="body-large max-w-3xl mx-auto text-gray-300">
            Got questions about our IT services? We've got answers. Find the most common 
            questions our Saudi clients ask about our infrastructure solutions.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {mockFAQ.map((faq) => (
              <div 
                key={faq.id} 
                className="bg-black/50 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-900/30 transition-colors"
                >
                  <h3 className="heading-3 pr-4">{faq.question}</h3>
                  <ChevronDown 
                    size={24} 
                    className={`text-cyan-400 transition-transform duration-300 ${
                      openItems.has(faq.id) ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openItems.has(faq.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 border-t border-gray-800">
                    <p className="body-medium text-gray-300 pt-4 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Support */}
        <div className="mt-16 text-center bg-gray-900/50 p-12 border border-gray-800">
          <HelpCircle size={48} className="mx-auto mb-6" style={{ color: 'var(--brand-primary)' }} />
          <h3 className="heading-1 mb-4">Still Have Questions?</h3>
          <p className="body-medium text-gray-300 mb-8 max-w-2xl mx-auto">
            Our technical support team is available 24/7 to answer any specific questions 
            about your IT infrastructure needs. Don't hesitate to reach out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:0567894358"
              className="btn-primary dark-button-animate"
            >
              Call Us: 0567894358
            </a>
            <a 
              href="mailto:zain@eutech.com"
              className="btn-secondary dark-button-animate"
            >
              Email Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;