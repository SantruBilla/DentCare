import React, { useState } from 'react';

const images = [
  '/gallery/img1.jpg',
  '/gallery/img2.jpg',
  '/gallery/img3.jpg',
  '/gallery/img4.jpg',
  '/gallery/img5.jpg',
  '/gallery/img6.jpg',
  '/gallery/img7.jpg',
  '/gallery/img8.jpg',
];

const GallerySection: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const prevImage = () => setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  const nextImage = () => setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));

  return (
    <section id="gallery" className="py-16 bg-dental-dark">
      <div className="max-w-5xl mx-auto text-center mb-8">
        <h2 className="text-4xl font-script text-white mb-2">Gallery</h2>
        <p className="text-gray-300">A glimpse of our clinic and happy smiles!</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-full max-w-4xl flex items-center justify-center bg-black/60 rounded-2xl overflow-hidden shadow-2xl min-h-[350px]" style={{minHeight: 350}}>
          <img
            src={images[current]}
            alt={`Clinic Gallery ${current + 1}`}
            className="max-h-[600px] max-w-full object-contain mx-auto transition-all duration-500 bg-black"
            style={{ background: '#222' }}
          />
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-dental-teal/90 hover:bg-dental-teal text-white rounded-full p-4 shadow-xl focus:outline-none text-2xl"
            aria-label="Previous image"
          >
            &#8592;
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-dental-teal/90 hover:bg-dental-teal text-white rounded-full p-4 shadow-xl focus:outline-none text-2xl"
            aria-label="Next image"
          >
            &#8594;
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`w-3 h-3 rounded-full border-2 border-white ${idx === current ? 'bg-dental-teal' : 'bg-white/30'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection; 