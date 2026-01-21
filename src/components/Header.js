import React from 'react';

const Header = () => {
  // Функция плавного скролла наверх
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // ← ключевой параметр для плавности
    });
  };

  // Функция скролла к секциям (если нужно)
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
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

          {/* Навигация */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-amber-600 transition">О нас</button>
            <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-amber-600 transition">Продукция</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-amber-600 transition">Контакты</button>
          </nav>

          {/* На мобильных можно добавить кнопку меню */}
          <div className="md:hidden text-gray-700 font-medium">Меню</div>
        </div>
      </div>
    </header>
  );
};

export default Header;