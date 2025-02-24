"use client";

import Image from "next/image";
import Link from "next/link";
import Carousel from "./components/Carousel";
import AnimationIcons from "./components/AnimationIcons";
import { motion } from "framer-motion";

const portals = [
  {
    name: "Correo institucional",
    icon: <AnimationIcons type="mail" />,
    description: "Accede a tu correo institucional",
    link: "https://accounts.google.com/AccountChooser/signinchooser?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F",
  },
  {
    name: "Syscolegios",
    icon: <AnimationIcons type="register" />,
    description: "Sistema de gestión académica",
    link: "https://www.syscolegios.com/",
  },
];

const HomePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section con Carrusel */}
      <section className="relative">
        <Carousel />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-center">
          <motion.div 
            className="text-center text-white p-8 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
          </motion.div>
        </div>
      </section>

      {/* Portales Section */}
      <motion.section 
        className="py-16 px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 relative"
            variants={itemVariants}
          >
            <span className="relative">
              Portales de interés
              <span className="absolute bottom-0 left-0 w-full h-1 bg-secondary transform -translate-y-2"></span>
            </span>
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            variants={containerVariants}
          >
            {portals.map((portal) => (
              <motion.div
                key={portal.name}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="p-8">
                  <div className="flex items-center space-x-6">
                    <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-secondary/10 rounded-full group-hover:bg-secondary/20 transition-colors">
                      {portal.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{portal.name}</h3>
                      <p className="text-gray-600 mb-4">{portal.description}</p>
                      <Link
                        href={portal.link}
                        target="_blank"
                        className="inline-flex items-center px-6 py-3 bg-secondary text-white rounded-full hover:bg-tertiary transition-colors duration-300"
                      >
                        Acceder
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Proyectos Section */}
      <motion.section 
        className="py-16 px-4 bg-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 relative"
            variants={itemVariants}
          >
            <span className="relative">
              Proyectos Institucionales
              <span className="absolute bottom-0 left-0 w-full h-1 bg-secondary transform -translate-y-2"></span>
            </span>
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
          >
            {/* Margarita Card */}
            <motion.div
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              variants={itemVariants}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/margarita.png"
                  alt="Proyecto Margarita"
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 w-full p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Margarita</h3>
                <p className="text-white/90 mb-4">Descubre nuestro proyecto insignia</p>
                <Link
                  href="/"
                  className="inline-flex items-center px-6 py-3 bg-white text-secondary rounded-full hover:bg-gray-100 transition-colors duration-300"
                >
                  Ver más
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Voces Card */}
            <motion.div
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              variants={itemVariants}
            >
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 w-full p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Voces</h3>
                <p className="text-white/90 mb-4">Explora nuestras voces</p>
                <Link
                  href="/"
                  className="inline-flex items-center px-6 py-3 bg-white text-secondary rounded-full hover:bg-gray-100 transition-colors duration-300"
                >
                  Ver más
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Novedades Section */}
      <motion.section 
        className="py-16 px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 relative"
            variants={itemVariants}
          >
            <span className="relative">
              Últimas Novedades
              <span className="absolute bottom-0 left-0 w-full h-1 bg-secondary transform -translate-y-2"></span>
            </span>
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {/* Noticias Card */}
            <motion.div
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              variants={itemVariants}
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex justify-center mb-6">
                  <AnimationIcons type="blog" size={80} />
                </div>
                <h3 className="text-xl font-bold mb-3">Noticias Margaritas</h3>
                <p className="text-gray-600 mb-6 flex-grow">Entérate de los últimos eventos y noticias de nuestra comunidad</p>
                <Link
                  href="/noticias"
                  className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-white rounded-full hover:bg-tertiary transition-colors duration-300 w-full"
                >
                  Ver noticias
                </Link>
              </div>
            </motion.div>

            {/* Boletines Card */}
            <motion.div
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              variants={itemVariants}
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex justify-center mb-6">
                  <AnimationIcons type="newspaper" size={80} />
                </div>
                <h3 className="text-xl font-bold mb-3">Boletines Informativos</h3>
                <p className="text-gray-600 mb-6 flex-grow">Accede a nuestros boletines mensuales con información relevante</p>
                <Link
                  href="/boletines"
                  className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-white rounded-full hover:bg-tertiary transition-colors duration-300 w-full"
                >
                  Ver boletines
                </Link>
              </div>
            </motion.div>

            {/* Consulta Correo Card */}
            <motion.div
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              variants={itemVariants}
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex justify-center mb-6">
                  <AnimationIcons type="search" size={80} />
                </div>
                <h3 className="text-xl font-bold mb-3">Consulta tu Correo</h3>
                <p className="text-gray-600 mb-6 flex-grow">Encuentra fácilmente tu correo institucional asignado</p>
                <Link
                  href="https://script.google.com/a/macros/alianzaeducativa.edu.co/s/AKfycbx5lYbQZ1cqTcrk8QP7mVw5EwizzpprCLwysqFKpG9uNOqOE9Xc6W8FLOyKmgwp_K9Ldg/exec"
                  target="_blank"
                  className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-white rounded-full hover:bg-tertiary transition-colors duration-300 w-full"
                >
                  Consultar correo
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;
