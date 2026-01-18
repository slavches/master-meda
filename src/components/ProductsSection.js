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
  <div className="h-64 sm:h-72 overflow-hidden">
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
    />
  </div>
  <div className="p-6 sm:p-8 text-center">
    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-amber-900">{product.name}</h3>
    <p className="text-sm sm:text-base text-gray-600 mb-4">{product.description}</p>
    <p className="text-xl sm:text-2xl font-bold text-amber-700 mb-6">{product.price} ₽/кг (оптом)</p>
    <button
      onClick={(e) => {
        e.stopPropagation();
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }}
      className="gradient-hover w-full text-white font-bold py-3 px-6 rounded-lg transition text-sm sm:text-base"
    >
      Оставить заявку на опт
    </button>
  </div>
</div>