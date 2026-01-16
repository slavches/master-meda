import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../App';

const ProductsSection = ({ products }) => {
  const { changeTheme } = useContext(ThemeContext);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section id="products" className="py-20 bg-amber-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-amber-900">Наша продукция</h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {products.map((product) => (
            <div
              key={product._id || product.name}
              className={`bg-white rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ${
                selectedProduct === (product._id || product.name)
                  ? 'ring-4 ring-amber-500 shadow-2xl scale-105'
                  : 'shadow-xl hover:scale-105 hover:shadow-2xl'
              }`}
              onClick={() => {
                changeTheme(product.theme);
                setSelectedProduct(product._id || product.name);
              }}
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={product.image || '/images/placeholder.jpg'}
                  alt={`Оптовая продажа ${product.name} от производителя`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-3 text-amber-900">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-2xl font-bold text-amber-700 mb-6">{product.price} ₽/кг (оптом)</p>

                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Чтобы клик по кнопке не менял тему карточки
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