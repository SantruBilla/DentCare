import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    treatment: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTreatmentChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      treatment: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = '919833044066'; // Owner's WhatsApp number (with country code, no +)
    const message = `Hello, I'm ${formData.name}.
Email: ${formData.email}
Phone: ${formData.phone}
Treatment: ${formData.treatment}
Message: ${formData.message}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, '_blank');

    setFormData({ name: '', email: '', phone: '', treatment: '', message: '' });
  };

  const treatments = [
    'General Consultation',
    'Teeth Cleaning',
    'Teeth Whitening',
    'Dental Braces',
    'Root Canal Treatment',
    'Dental Implants',
    'Cosmetic Dentistry',
    'Emergency Treatment'
  ];

  return (
    <section id="contact" className="section-padding bg-dental-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-dental-teal">📞</span>
            <span className="text-dental-teal text-sm uppercase tracking-wider font-semibold">Get In Touch</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-script text-white mb-6">
            Contact Us Today
          </h2>
          <div className="w-16 h-1 bg-dental-teal mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your journey to a perfect smile? Get in touch with us to schedule your consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Both Branches */}
          <div className="animate-on-scroll h-full flex flex-col gap-8 flex-1">
            {/* Malad Branch */}
            <Card className="bg-dental-darker border-dental-grey/20 h-full">
              <CardContent className="p-8 h-full flex flex-col">
                <h3 className="text-2xl font-semibold text-white mb-4">Malad Branch</h3>
                <p className="text-gray-300 mb-4">Shop no 17, Gr. floor, Bhoomi castle oppo. Goregaon sports club, link road, malad (W), Mumbai- 400064</p>
                <div className="w-full h-[250px] rounded-lg overflow-hidden mb-4 flex-shrink-0">
                  <iframe
                    title="Malad Clinic Location"
                    src="https://www.google.com/maps?q=Dent+Care+Elegance,+Shop+no+17,+Gr.+floor,+Bhoomi+castle+oppo.+Goregaon+sports+club,+link+road,+malad+(W),+Mumbai-+400064&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="mt-auto">
                  <a
                    href="https://maps.app.goo.gl/L425HgPNASnUQ9ii9?g_st=aw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 bg-dental-teal text-white font-semibold rounded-lg shadow hover:bg-dental-teal-dark transition-colors"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </CardContent>
            </Card>
            {/* Dadar Branch */}
            <Card className="bg-dental-darker border-dental-grey/20 h-full">
              <CardContent className="p-8 h-full flex flex-col">
                <h3 className="text-2xl font-semibold text-white mb-4">Dadar Branch</h3>
                <p className="text-gray-300 mb-4">Shop No 4, Siddhi Prabha Building, Opp Ravindra Natya Mandir, Sayani Road, Prabhadevi-400025</p>
                <div className="w-full h-[250px] rounded-lg overflow-hidden mb-4 flex-shrink-0">
                  <iframe
                    title="Dadar Clinic Location"
                    src="https://www.google.com/maps?q=Shop+No+4,+Siddhi+Prabha+Building,+Opp+Ravindra+Natya+Mandir,+Sayani+Road,+Prabhadevi-400025&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="mt-auto">
                  <a
                    href="https://maps.app.goo.gl/K8SW9EZKJpDBsxH87?g_st=aw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 bg-dental-teal text-white font-semibold rounded-lg shadow hover:bg-dental-teal-dark transition-colors"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right: Visit Our Clinic Section (flex column, timings at bottom) */}
          <div className="animate-on-scroll h-full flex flex-col flex-1">
            <Card className="bg-dental-darker border-dental-grey/20 h-full flex flex-col justify-between">
              <CardContent className="p-8 h-full flex flex-col flex-1">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-6">Visit Our Clinic</h3>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <img src="/Address.png" alt="Address" className="w-8 h-8 text-dental-teal" />
                      <div>
                        <h4 className="text-lg font-medium text-white mb-1">Malad Address</h4>
                        <p className="text-gray-300">Shop no 17, Gr. floor, Bhoomi castle oppo. Goregaon sports club, link road, malad (W), Mumbai- 400064</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <img src="/Address.png" alt="Address" className="w-8 h-8 text-dental-teal" />
                      <div>
                        <h4 className="text-lg font-medium text-white mb-1">Dadar Address</h4>
                        <p className="text-gray-300">Shop No 4, Siddhi Prabha Building, Opp Ravindra Natya Mandir, Sayani Road, Prabhadevi-400025</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <img src="/phone.svg" alt="Phone" className="w-8 h-8 text-dental-teal" />
                      <div>
                        <h4 className="text-lg font-medium text-white mb-1">Phone</h4>
                        <a href="tel:+919833044066" className="text-gray-300 hover:text-dental-teal transition-colors">+91 9833044066</a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <img src="/email.svg" alt="Email" className="w-8 h-8 text-dental-teal" />
                      <div>
                        <h4 className="text-lg font-medium text-white mb-1">Email</h4>
                        <a href="mailto:ayman.khan50@gmail.com" className="text-gray-300 hover:text-dental-teal transition-colors">ayman.khan50@gmail.com</a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <img src="/instagram.svg" alt="Instagram" className="w-8 h-8 text-dental-teal" />
                      <div>
                        <h4 className="text-lg font-medium text-white mb-1">Instagram</h4>
                        <a href="https://www.instagram.com/dent_care_dental_clinic/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-dental-teal transition-colors">@dentcareelegance</a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Clinic Timings Section at the bottom */}
                <div className="mt-8 pt-6 border-t border-dental-grey/20 text-center">
                  <div className="text-lg font-semibold text-white mb-2">⟡ Timings ⟡</div>
                  <div className="text-gray-300">
                    <div className="font-bold">Monday - Saturday</div>
                    <div>10:00AM - 02:00PM</div>
                    <div>04:30PM - 09:30PM</div>
                    <div className="text-sm mt-2">(Sunday's on appointments only)</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
