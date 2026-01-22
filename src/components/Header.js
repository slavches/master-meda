import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Иконки бургер и крестик

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false); // Закрываем меню после клика
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Логотип — кликабельный, скроллит наверх */}
          <button
            onClick={scrollToTop}
            className="flex items-center focus:outline-none"
          >
            <img
              src="/images/logo.png"
              alt="Мастер Мёда"
              className="h-10 sm:h-12 w-auto hover:opacity-80 transition-opacity"
            />
          </button>

          {/* Кнопка меню на мобильных */}
          <button
            className="md:hidden text-amber-800 text-2xl focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Десктопное меню */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-amber-600 transition">О нас</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-amber-600 transition">Услуги</button>
              <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-amber-600 transition">Продукция</button>
              <button onClick={() => scrollToSection('partners')} className="text-gray-700 hover:text-amber-600 transition">Партнёры</button>
              <button onClick={() => scrollToSection('clients')} className="text-gray-700 hover:text-amber-600 transition">Клиенты</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-amber-600 transition">Контакты</button>
            </nav>
        </div>

        {/* Мобильное выпадающее меню */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <nav className="flex flex-col items-center py-4 space-y-4">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-amber-600 transition">О нас</button>
              <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-amber-600 transition">Продукция</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-amber-600 transition">Контакты</button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;