import React, { createContext, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState({
    primary: '#FFA000',
    secondary: '#4E342E',
    bgGradient: 'from-amber-50 to-yellow-100'
  });

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error('Ошибка загрузки продуктов:', err));
  }, []);

  const changeTheme = (newTheme) => {
    const gradients = {
      '#FFEB3B': 'from-yellow-50 to-amber-100',
      '#D2691E': 'from-orange-50 to-amber-100',
      '#FFFF99': 'from-yellow-50 to-lime-100',
      '#FFCA28': 'from-amber-50 to-yellow-100',
      '#C6FF00': 'from-lime-50 to-yellow-100',
      '#FF5722': 'from-orange-100 to-amber-100',
    };

    const bgGradient = gradients[newTheme.primary] || 'from-amber-50 to-yellow-100';

    setTheme({
      primary: newTheme.primary,
      secondary: newTheme.secondary,
      bgGradient
    });

    document.documentElement.style.setProperty('--primary', newTheme.primary);
    document.documentElement.style.setProperty('--secondary', newTheme.secondary);
  };

  return (
    <ThemeContext.Provider value={{ changeTheme, theme }}>
      <motion.div
        className={`min-h-screen bg-gradient-to-br ${theme.bgGradient} transition-all duration-1000 ease-in-out`}
      >
        <Header />
        <HeroSection />
        <ProductsSection products={products} />
        <About />
        <Contact />
        <Footer />
      </motion.div>
    </ThemeContext.Provider>
  );
}

export default App;