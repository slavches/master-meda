import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../App';

const ProductsSection = () => {
  const { changeTheme } = useContext(ThemeContext);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Статические данные — всё здесь, без backend
  const products = [
    {
      id: 1,
      name: "Липовый мёд",
      description: "Светлый, нежный аромат, противовоспалительные свойства.",
      price: 500,
      image: "/images/lipoviy.jpg",
      theme: { primary: "#FFEB3B", secondary: "#FFA000" }
    },
    {
      id: 2,
      name: "Гречишный мёд",
      description: "Тёмный, насыщенный вкус, высокое содержание железа.",
      price: 550,
      image: "/images/grechishniy.jpg",
      theme: { primary: "#D2691E", secondary: "#8B4513" }
    },
    {
      id: 3,
      name: "Акациевый мёд",
      description: "Прозрачный, лёгкий, долго не кристаллизуется.",
      price: 600,
      image: "/images/akacievyy.jpg",
      theme: { primary: "#FFFF99", secondary: "#FFD700" }
    },
    {
      id: 4,
      name: "Подсолнечниковый мёд",
      description: "Яркий золотистый цвет, насыщенный солнечный вкус.",
      price: 480,
      image: "/images/podsolnechnikovyy.jpg",
      theme: { primary: "#FFCA28", secondary: "#FF6F00" }
    },
    {
      id: 5,
      name: "Разнотравье",
      description: "Сбор с луговых трав, сбалансированный вкус.",
      price: 520,
      image: "/images/raznotrave.jpg",
      theme: { primary: "#C6FF00", secondary: "#64DD17" }
    },
    {
      id: 6,
      name: "Кориандровый мёд",
      description: "Пряный аромат, бактерицидные свойства.",
      price: 650,
      image: "/images/koriandrovyi.jpg",
      theme: { primary: "#FF5722", secondary: "#D84315" }
    }
  ];

  return (
    <section id="products" className="py-20 bg-amber-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-amber-900">Наша продукция</h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className={`bg-white rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ${
                selectedProduct === product.id 
                  ? 'ring-4 ring-amber-500 shadow-2xl scale-105' 
                  : 'shadow-xl hover:scale-105 hover:shadow-2xl'
              }`}
              onClick={() => {
                changeTheme(product.theme);
                setSelectedProduct(product.id);
              }}
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-3 text-amber-900">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-2xl font-bold text-amber-700 mb-6">{product.price} ₽/кг (оптом)</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="gradient-hover w-full text-white font-bold py-3 rounded-lg transition"
                >
                  Оставить заявку на опт
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;