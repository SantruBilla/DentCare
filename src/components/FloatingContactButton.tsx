
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const FloatingContactButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleWhatsApp = () => {
    window.open('https://wa.me/+919833044066?text=Hi! I would like to book an appointment at Dent Care clinic.', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+919833044066';
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isExpanded && (
        <div className="mb-4 space-y-3 animate-fade-in">
          <Button
            onClick={handleWhatsApp}
            className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center"
            title="WhatsApp"
          >
            <span className="text-2xl">💬</span>
          </Button>
          <Button
            onClick={handleCall}
            className="w-14 h-14 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center"
            title="Call Now"
          >
            <span className="text-2xl">📞</span>
          </Button>
        </div>
      )}
      
      <Button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-16 h-16 rounded-full bg-dental-grey-light hover:bg-dental-grey text-dental-dark shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center"
        title="Contact Us"
      >
        <span className="text-2xl">{isExpanded ? '✕' : '💬'}</span>
      </Button>
    </div>
  );
};

export default FloatingContactButton;
