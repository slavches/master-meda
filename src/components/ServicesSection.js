import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Оптовая продажа мёда",
    description: "Прямые поставки от 10 кг, гибкие объёмы, индивидуальные цены для постоянных клиентов.",
    icon: "📦"
  },
  {
    title: "Лабораторный контроль качества",
    description: "Каждая партия проходит проверку на соответствие ГОСТ и отсутствие добавок.",
    icon: "🔬"
  },
  {
    title: "Доставка по России",
    description: "Быстрая и надёжная логистика — от Алтая до любого региона.",
    icon: "🚚"
  },
  {
    title: "Персональный менеджер",
    description: "Сопровождение заказа от заявки до получения товара.",
    icon: "👤"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-amber-900">Наши услуги</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-amber-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-amber-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;