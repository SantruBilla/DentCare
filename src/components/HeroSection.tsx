
import React from 'react';
import { Button } from '@/components/ui/button';
import GlassmorphismBackground from './GlassmorphismBackground.tsx';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-100 via-white to-white">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/image1.jpg")'
        }}
      />
      <div className="absolute inset-0 hero-gradient" />
      <GlassmorphismBackground />
      
      {/* Animated Background Elements */}
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-script text-white mb-6 animate-float">
            Smile Brighter Today
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Premium dental care, modern tools and genuine one-on-one attention all under one roof.
          </p>
          <p className="text-lg text-dental-grey-light mb-12 flex items-center justify-center gap-2">
            Your perfect smile is just an appointment away at Dent Care Clinic.
          </p>
          
          {/* Removed buttons and stats grid */}
        </div>
      </div>

      {/* Removed mouse icon at the bottom */}
    </section>
  );
};

export default HeroSection;
