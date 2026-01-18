import React from 'react';

const Header = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Логотип или текст */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl sm:text-2xl font-bold text-amber-800 hover:text-amber-600 transition"
          >
            Мастер Мёда
          </button>

          {/* Навигация — на мобильных станет компактнее */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-amber-600 transition">О нас</button>
            <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-amber-600 transition">Продукция</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-amber-600 transition">Контакты</button>
          </nav>

          {/* На мобильных показываем кнопку меню (пока просто текст, можно добавить иконку позже) */}
          <div className="md:hidden text-gray-700 font-medium">Меню</div>
        </div>
      </div>
    </header>
  );
};

export default Header;