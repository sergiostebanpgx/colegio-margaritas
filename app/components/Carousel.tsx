"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  "/images/carousel/1.webp",
  "/images/carousel/2.webp",
  "/images/carousel/3.webp",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Función para avanzar al siguiente slide
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, []);

  // Función para retroceder al slide anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Auto-slide cada 5 segundos
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="max-w-7xl mx-auto my-4 md:my-8 relative rounded-xl md:rounded-2xl shadow-2xl overflow-hidden"
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}>
      <div className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((src, index) => (
          <div key={index} className="w-full flex-shrink-0 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] relative">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Texto superpuesto con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center pb-8 md:pb-20">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center px-4 drop-shadow-lg">
          Bienvenidos al Colegio Las Margaritas
        </h1>
      </div>

      {/* Botones de navegación con animación de aparición */}
      <button
        className={`absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 md:p-3 rounded-full 
        hover:bg-white/40 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        onClick={prevSlide}
      >
        <FaChevronLeft size={20} className="md:w-6 md:h-6" />
      </button>
      <button
        className={`absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 md:p-3 rounded-full 
        hover:bg-white/40 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        onClick={nextSlide}
      >
        <FaChevronRight size={20} className="md:w-6 md:h-6" />
      </button>

      {/* Indicadores modernos */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 
            ${currentIndex === index 
              ? "bg-white w-6 md:w-8" 
              : "bg-white/50 hover:bg-white/70"}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
