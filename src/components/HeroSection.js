import React, { useEffect, useMemo } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const HeroSection = () => {
  const [init, setInit] = React.useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" }, // Отталкивание от курсора
          resize: true,
        },
        modes: {
          repulse: { distance: 100, duration: 0.4 },
        },
      },
      particles: {
        color: { value: ["#FFA000", "#FFCA28", "#DAA520"] },
        move: {
          direction: "bottom",
          enable: true,
          outModes: "out",
          random: true,
          speed: { min: 0.8, max: 2.5 },
          straight: false,
        },
        number: { value: 15 },
        opacity: { value: { min: 0.5, max: 0.9 }, random: true },
        size: { value: { min: 10, max: 40 }, random: true },
        trail: { enable: true, length: 12, fill: { color: "#FFA00080" } },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-100">
      
      {/* Движущиеся капли мёда */}
      {init && <Particles id="honey-canvas" options={options} className="absolute inset-0 z-0 pointer-events-none" />}

      {/* Фоновая картинка */}
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/images/honey-background.jpg')" }} />
      
      {/* Контент */}
      <div className="relative z-10 container mx-auto px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-amber-900">
          Мастер Мёда
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-800">
          Натуральный мёд оптом · Гарантия качества
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