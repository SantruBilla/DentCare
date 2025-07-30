
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: "Is the treatment painful?",
      answer: "We use modern anesthesia techniques and pain management methods to ensure your comfort. Most patients experience minimal to no discomfort during procedures. We also offer sedation options for anxious patients."
    },
    {
      question: "What age should children start visiting the dentist?",
      answer: "It's recommended that children have their first dental visit by their first birthday or when their first tooth appears. Early visits help monitor growth and build good dental habits."
    },
    {
      question: "How do I book an appointment?",
      answer: "You can book an appointment by calling at +91 9833044066, filling out our contact form, or clicking the WhatsApp button to message us directly. We'll get back to you within 24 hours to confirm your appointment."
    },
    {
      question: "What should I expect during my first visit?",
      answer: "Your first visit includes a comprehensive examination, X-rays if needed, and a discussion of your dental health goals. We'll create a personalized treatment plan and answer all your questions about recommended procedures."
    },
    {
      question: "How often should I visit the dentist?",
      answer: "We recommend regular check-ups and cleanings every 6 months. However, some patients may need more frequent visits based on their individual oral health needs. We'll create a schedule that's right for you."
    },
    {
      question: "Do you offer emergency dental services?",
      answer: "Yes, we provide emergency dental services for urgent situations like severe pain, broken teeth, or dental trauma. Contact us immediately, and we'll arrange to see you as soon as possible."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-dental-dark relative overflow-hidden">
      {/* Background Animation */}
      <div className="bg-shapes">
        <div className="floating-element top-20 right-20 text-2xl text-dental-grey/10 animate-floating-shapes" style={{ animationDelay: '2s' }}>
          ❓
        </div>
        <div className="floating-element bottom-32 left-16 text-xl text-dental-grey/10 animate-floating-shapes" style={{ animationDelay: '4s' }}>
          💬
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-dental-grey-light text-sm uppercase tracking-wider font-semibold">Common Questions ❓</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-script text-white mb-6">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-dental-grey-light mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          image.pngWe've answered the most common questions our patients ask to help you feel confident about your dental care.
          </p>
        </div>

        <div className="animate-on-scroll">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-dental-darker border border-dental-grey/20 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-lg font-medium text-white hover:text-dental-grey-light py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
