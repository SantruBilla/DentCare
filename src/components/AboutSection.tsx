
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-dental-darker relative overflow-hidden">
      {/* Background Animation */}
      <div className="bg-shapes">
        <div className="floating-element top-10 right-10 text-3xl text-dental-grey/10 animate-floating-shapes" style={{ animationDelay: '1s' }}>
          🦷
        </div>
        <div className="floating-element bottom-20 left-10 text-2xl text-dental-grey/10 animate-floating-shapes" style={{ animationDelay: '3s' }}>
          ✨
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/image2.jpg"
                alt="Modern dental clinic interior"
                className="w-full h-96 object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-white rounded-lg p-4 shadow-lg">
                <div className="text-3xl font-bold text-dental-dark mb-1">5+</div>
                <div className="text-dental-grey text-sm">Years Experience</div>
                <div className="mt-2"></div>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-dental-grey-light">🦷</span>
                <span className="text-dental-grey-light text-sm uppercase tracking-wider font-semibold">About Our Clinic</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-script text-white mb-6">
                Crafting Perfect Smiles
              </h2>
              <div className="w-16 h-1 bg-dental-grey-light mb-8"></div>
            </div>

            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
              “Welcome to Dent Care Clinic — a place where your smile truly matters. 
              With over 5 years of experience, I’m dedicated to providing gentle, honest, and thorough dental care for every patient who walks through my door.
              </p>
              
              <p>
              I know visiting the dentist can feel stressful — that’s why I take time to listen, explain, and make sure you feel comfortable at every step. 
              My goal is simple: to help you keep a healthy, confident smile for years to come."
              </p>

              <div className="bg-dental-dark/50 p-6 rounded-lg border-l-4 border-dental-grey-light">
                <p className="text-xl font-script text-dental-grey-light italic mb-2">
                  "Every smile tells a story, and we're here to make yours extraordinary."
                </p>
                <p className="text-sm text-gray-400">- Dr. Ayman Khan, Chief Dentist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
