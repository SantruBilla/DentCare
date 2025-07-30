
import React from 'react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-dental-darker border-t border-dental-grey/20 relative overflow-hidden">
      {/* Background Animation */}
      <div className="bg-shapes">
        <div className="floating-element top-10 right-20 text-2xl text-dental-grey/10 animate-floating-shapes" style={{ animationDelay: '2s' }}>
          🦷
        </div>
        <div className="floating-element bottom-20 left-20 w-16 h-16 border border-dental-grey/5 rounded-full animate-drift" style={{ animationDelay: '6s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-dental-grey-light to-dental-grey rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">🦷</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-dental-white rounded-full animate-gentle-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-script text-white font-bold tracking-wide">
                  Dent Care
                </span>
                <span className="text-xs text-dental-grey-light uppercase tracking-widest">
                  Premium Clinic
                </span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
            Premium dental care focused on creating healthy, 
            confident smiles through advanced technology and a caring approach.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-dental-grey-light transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
              <img src="/Address.png" alt="Address" className="w-8 h-8 text-dental-teal" />
                <span>Shop no 17, Gr. floor, Bhoomi castle oppo. Goregaon sports club, link road, malad (W), Mumbai- 400064</span>
              </div>
              <div className="flex items-center space-x-2">
              <img src="/Address.png" alt="Address" className="w-8 h-8 text-dental-teal" />
                <span>Shop No 4, Siddhi Prabha Building, Opp Ravindra Natya Mandir, Sayani Road, Prabhadevi-400025</span>
              </div>
              <div className="flex items-center space-x-2">
              <img src="/phone.svg" alt="Phone" className="w-8 h-8 text-dental-teal" />
                <span>+91 9833044066</span>
              </div>
              <div className="flex items-center space-x-2">
              <img src="/email.svg" alt="Email" className="w-8 h-8 text-dental-teal" />
                <span>ayman.khan50@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-dental-grey/20 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Dent Care. All Rights Reserved. | Made with ❤️ for beautiful smiles
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
