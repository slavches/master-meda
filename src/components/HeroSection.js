import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-100">
      
      {/* Эффект текучего мёда (если оставляете) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="honey-flow"></div>
      </div>

      {/* Фоновая картинка */}
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/images/honey-background.jpg')" }} />
      
      {/* Основной контент */}
      <div className="relative z-10 container mx-auto px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-amber-900">
          Мастер Мёда
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-800">
          Натуральный мёд оптом от пасечников Алтайского края · Гарантия качества
        </p>
        <button
          onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
          className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 sm:py-4 sm:px-10 rounded-lg text-lg sm:text-xl transition"
        >
          Посмотреть продукцию
        </button>
      </div>
    </section>
  );
};

export default HeroSection;