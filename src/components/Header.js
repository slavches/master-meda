import React from 'react';

const Header = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Логотип по центру слева */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center"
        >
          <img
            src="/images/logo.png"
            alt="Мастер Мёда"
            className="h-12 w-auto"
          />
        </button>

        {/* Навигация справа */}
        <nav className="space-x-10 text-lg">
          <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-amber-600 transition">
            О нас
          </button>
          <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-amber-600 transition">
            Продукция
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-amber-600 transition">
            Контакты
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;