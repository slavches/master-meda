import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  "/images/partners/partner-x5logistic.png",
  "/images/partners/partner2.png",
  "/images/partners/partner3.png",
  "/images/partners/partner4.png",
  "/images/partners/partner5.png",
  "/images/partners/partner6.png"
];

const PartnersSection = () => {
  return (
    <section id="partners" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-amber-900">Наши партнёры</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <motion.img
              key={index}
              src={partner}
              alt="Партнёр"
              className="w-full h-24 object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;