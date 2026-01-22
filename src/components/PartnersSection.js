import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  "/images/partners/partner-x5logistic.png",
  "/images/partners/kit.png",
  "/images/partners/gaybnic.png",
];

const PartnersSection = () => {
  return (
    <section id="partners" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 md:mb-16 text-amber-900">
          Наши партнёры
        </h2>

        <div className="grid grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="aspect-square bg-white rounded-xl shadow-md overflow-hidden flex items-center justify-center hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={partner}
                alt={`Партнёр ${index + 1}`}
                className="w-4/5 h-4/5 object-contain grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;