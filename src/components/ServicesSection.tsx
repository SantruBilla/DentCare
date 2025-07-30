
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      image: 'teeth-whitening.jpg',
      title: 'Teeth Whitening',
      description: 'Professional whitening treatments for a brighter, more confident smile.'
    },
    {
      image: 'Dental-implants.jpg',
      title: 'Dental Implants',
      description: 'Permanent solution for missing teeth with natural-looking results.'
    },
    {
      image: 'braces-orthodontics.jpg',
      title: 'Braces & Orthodontics',
      description: 'Straighten your teeth with modern braces and clear aligners.'
    },
    {
      image: 'root-Canal.jpg',
      title: 'Root Canal Treatment',
      description: 'Pain-free root canal therapy to save your natural teeth.'
    },
    {
      image: 'oral-hygiene.jpeg',
      title: 'Oral Hygiene',
      description: 'Professional cleaning and preventive care for optimal oral health.'
    },
    {
      image: 'cosmetic-dentistry.jpg',
      title: 'Cosmetic Dentistry',
      description: 'Enhance your smile with veneers, bonding, and smile makeovers.'
    }
  ];

  return (
    <section id="services" className="section-padding bg-dental-dark relative overflow-hidden">
      {/* Background Animation */}
      <div className="bg-shapes">
        <div className="floating-element top-20 left-20 w-32 h-32 border border-dental-grey/5 rounded-full animate-drift" style={{ animationDelay: '2s' }}></div>
        <div className="floating-element bottom-20 right-20 w-24 h-24 bg-dental-grey/5 rounded-lg rotate-45 animate-drift" style={{ animationDelay: '8s' }}></div>
        <div className="floating-element top-1/2 left-10 text-4xl text-dental-grey/10 animate-floating-shapes" style={{ animationDelay: '1s' }}>
          🦷
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-dental-grey-light">⚕️</span>
            <span className="text-dental-grey-light text-sm uppercase tracking-wider font-semibold">Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-script text-white mb-6">
            Comprehensive Dental Care
          </h2>
          <div className="w-16 h-1 bg-dental-grey-light mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          “From routine cleanings to advanced cosmetic treatments, a full range of dental services is available to keep your smile healthy and confident.”
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-dental-darker border-dental-grey/20 hover:border-dental-grey-light/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <img 
                    src={`/${service.image}`}
                    alt={service.title}
                    className="w-20 h-20 object-contain rounded-full shadow-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-dental-grey-light transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 w-full h-1 bg-dental-grey/20 rounded-full overflow-hidden">
                  <div className="h-full bg-dental-grey-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
