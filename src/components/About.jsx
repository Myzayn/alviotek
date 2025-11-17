import React from 'react';
import { Users, Award, Clock, Shield } from 'lucide-react';
import { mockStats, mockTeam } from '../mock';

const About = () => {
  return (
    <section id="about" className="dark-container py-20">
      <div className="dark-content-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="display-large mb-6">About alviotek</h2>
          <p className="body-large max-w-4xl mx-auto text-gray-300">
            With over 15 years of experience in the Saudi IT market, alviotek has established itself 
            as a trusted partner for businesses seeking comprehensive technology solutions. From our headquarters 
            in King Faisal Tower, Central Riyadh, we serve clients across the Kingdom.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {mockStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="display-medium mb-2" style={{ color: 'var(--brand-primary)' }}>
                {stat.value}
              </div>
              <p className="body-small text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Left Content */}
          <div>
            <h3 className="heading-1 mb-6">Why Choose alviotek?</h3>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                  <Award size={24} style={{ color: 'var(--brand-primary)' }} />
                </div>
                <div>
                  <h4 className="heading-3 mb-2">Saudi Market Expertise</h4>
                  <p className="body-small text-gray-400">
                    Deep understanding of local business requirements and regulatory compliance in Saudi Arabia.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                  <Clock size={24} style={{ color: 'var(--brand-primary)' }} />
                </div>
                <div>
                  <h4 className="heading-3 mb-2">24/7 Support</h4>
                  <p className="body-small text-gray-400">
                    Round-the-clock technical support to ensure your business operations never stop.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                  <Shield size={24} style={{ color: 'var(--brand-primary)' }} />
                </div>
                <div>
                  <h4 className="heading-3 mb-2">Enterprise Security</h4>
                  <p className="body-small text-gray-400">
                    Advanced security protocols and compliance with international IT security standards.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                  <Users size={24} style={{ color: 'var(--brand-primary)' }} />
                </div>
                <div>
                  <h4 className="heading-3 mb-2">Certified Professionals</h4>
                  <p className="body-small text-gray-400">
                    Team of certified engineers and technicians with extensive industry experience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Mission & Vision */}
          <div className="space-y-12">
            <div>
              <h3 className="heading-1 mb-6">Our Mission</h3>
              <p className="body-medium text-gray-300">
                To empower Saudi businesses with cutting-edge IT infrastructure solutions that drive growth, 
                enhance productivity, and secure digital assets. We are committed to delivering excellence 
                in every project, from initial consultation to ongoing support.
              </p>
            </div>

            <div>
              <h3 className="heading-1 mb-6">Our Vision</h3>
              <p className="body-medium text-gray-300">
                To be the leading IT infrastructure partner in Saudi Arabia, recognized for innovation, 
                reliability, and exceptional service quality. We envision a future where every business 
                has access to world-class technology solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h3 className="heading-1 text-center mb-12">Meet Our Leadership Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {mockTeam.map((member) => (
              <div key={member.id} className="bg-gray-900/50 p-6 border border-gray-800 text-center dark-hover">
                <div className="w-20 h-20 bg-cyan-500/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users size={32} style={{ color: 'var(--brand-primary)' }} />
                </div>
                <h4 className="heading-3 mb-2">{member.name}</h4>
                <p className="body-small text-cyan-400 mb-2">{member.role}</p>
                <p className="body-small text-gray-400 mb-2">{member.expertise}</p>
                <p className="body-small text-gray-500">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;