import React from 'react';
import { motion } from 'framer-motion';

const clients = [
  "Сеть супермаркетов «Магнит»",
  "«Ашан» и «Перекрёсток»",
  "Кондитерские фабрики Алтая",
  "Частные пекарни и кафе",
  "Экспортёры в СНГ",
  "Онлайн-магазины здорового питания"
];

const ClientsSection = () => {
  return (
    <section id="clients" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-amber-900">Наши клиенты</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-amber-50 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow"
            >
              <p className="text-lg font-medium text-amber-800">{client}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;