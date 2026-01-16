import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-amber-50/60">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10 text-[var(--secondary)]">Свяжитесь с нами</h2>
        <p className="text-xl mb-8">Телефон: +7 (123) 456-78-90</p>
        <p className="text-xl mb-8">Email: info@mastermeda.ru</p>
        <a
          href="mailto:info@mastermeda.ru"
          className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium py-4 px-10 rounded-lg text-xl transition"
        >
          Написать заявку
        </a>
      </div>
    </section>
  );
};

export default Contact;