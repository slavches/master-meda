import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-transparent">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10 text-[var(--secondary)]">О нашей компании</h2>
        <p className="text-xl max-w-4xl mx-auto">
          Семейная пасека с 1995 года. Наши пасеки расположены в экологически чистых районах Алтайского края. 
          Мы предлагаем только натуральный мёд без добавок, каждая партия проходит лабораторный контроль.
        </p>
      </div>
    </section>
  );
};

export default About;