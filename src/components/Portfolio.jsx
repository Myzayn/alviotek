import React from 'react';
import { ExternalLink, Calendar, Users, CheckCircle } from 'lucide-react';
import { mockPortfolio } from '../mock';

const Portfolio = () => {
  return (
    <section id="portfolio" className="dark-container py-20 bg-gray-900/30">
      <div className="dark-content-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="display-large mb-6">Our Portfolio</h2>
          <p className="body-large max-w-3xl mx-auto text-gray-300">
            Explore our successful IT infrastructure projects across Saudi Arabia. 
            From small businesses to large enterprises, we deliver results that matter.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {mockPortfolio.map((project, index) => (
            <div 
              key={project.id}
              className="bg-black/50 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 dark-hover group"
            >
              {/* Project Header */}
              <div className="p-6 border-b border-gray-800">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="heading-2">{project.title}</h3>
                  <ExternalLink 
                    size={20} 
                    className="text-gray-400 group-hover:text-cyan-400 transition-colors" 
                  />
                </div>
                <p className="body-small text-cyan-400 mb-2">{project.client}</p>
                <p className="body-small text-gray-400">{project.description}</p>
              </div>

              {/* Technologies */}
              <div className="p-6 border-b border-gray-800">
                <h4 className="heading-3 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-sm border border-cyan-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <div className="flex items-center gap-3 text-gray-400">
                  <Calendar size={16} />
                  <span className="body-small">Completed: {project.completion}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <h3 className="heading-1 text-center mb-12">Our Project Process</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Initial assessment of your IT needs and current infrastructure"
              },
              {
                step: "02", 
                title: "Planning",
                description: "Detailed project planning with timeline and technology roadmap"
              },
              {
                step: "03",
                title: "Implementation",
                description: "Professional installation and configuration by certified engineers"
              },
              {
                step: "04",
                title: "Support",
                description: "Ongoing maintenance and 24/7 support for optimal performance"
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div 
                  className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl font-bold border-2 border-cyan-500"
                  style={{ color: 'var(--brand-primary)' }}
                >
                  {process.step}
                </div>
                <h4 className="heading-3 mb-3">{process.title}</h4>
                <p className="body-small text-gray-400">{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mt-20 bg-gray-900/50 p-12 border border-gray-800">
          <h3 className="heading-1 text-center mb-12">Project Success Metrics</h3>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <CheckCircle size={48} className="mx-auto mb-4" style={{ color: 'var(--brand-primary)' }} />
              <div className="display-medium mb-2" style={{ color: 'var(--brand-primary)' }}>
                100%
              </div>
              <p className="body-small text-gray-400">Project Completion Rate</p>
            </div>
            
            <div className="text-center">
              <Users size={48} className="mx-auto mb-4" style={{ color: 'var(--brand-primary)' }} />
              <div className="display-medium mb-2" style={{ color: 'var(--brand-primary)' }}>
                98%
              </div>
              <p className="body-small text-gray-400">Client Satisfaction Rate</p>
            </div>

            <div className="text-center">
              <Calendar size={48} className="mx-auto mb-4" style={{ color: 'var(--brand-primary)' }} />
              <div className="display-medium mb-2" style={{ color: 'var(--brand-primary)' }}>
                95%
              </div>
              <p className="body-small text-gray-400">On-Time Delivery Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;