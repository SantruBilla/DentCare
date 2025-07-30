
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Riya Sharma',
      rating: 5,
      text: 'I was scared of dentists, but Dent Care made me feel at ease. Painless, clear treatment and great results.',
      treatment: 'Root Canal Treatment'
    },
    {
      name: 'Amit Verma',
      rating: 5,
      text: 'Professional and caring experience. My cleaning and fillings were smooth, painless and I got clear aftercare advice.',
      treatment: 'Dental Cleaning & Fillings'
    },
    {
      name: 'Neha Patil',
      rating: 5,
      text: 'Got my teeth whitening done here. The process was smooth, painless and I’m very happy with the results.',
      treatment: 'Teeth Whitening'
    }
  ];
  
  

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="section-padding bg-dental-darker relative overflow-hidden">
      {/* Background Animation */}
      <div className="bg-shapes">
        <div className="floating-element top-10 left-1/4 text-2xl text-dental-grey/10 animate-floating-shapes" style={{ animationDelay: '0s' }}>
          💬
        </div>
        <div className="floating-element bottom-10 right-1/4 text-3xl text-dental-grey/10 animate-floating-shapes" style={{ animationDelay: '4s' }}>
          ⭐
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-dental-grey-light">💬</span>
            <span className="text-dental-grey-light text-sm uppercase tracking-wider font-semibold">Patient Reviews</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-script text-white mb-6">
            What Our Patients Say
          </h2>
          <div className="w-16 h-1 bg-dental-grey-light mx-auto"></div>
        </div>

        <div className="relative">
          <Card className="bg-dental-dark border-dental-grey/20 shadow-2xl animate-fade-in">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="mb-8">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-2xl text-dental-grey-light">⭐</span>
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl text-gray-200 italic leading-relaxed mb-8">
                  "{testimonials[currentIndex].text}"
                </blockquote>
                <div className="space-y-2">
                  <div className="text-lg font-semibold text-dental-grey-light">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-sm text-gray-400">
                    {testimonials[currentIndex].treatment}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-dental-grey-light scale-125' 
                    : 'bg-dental-grey hover:bg-dental-grey-light/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
