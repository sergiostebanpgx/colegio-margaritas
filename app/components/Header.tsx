"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/noticias", label: "Noticias" },
    { href: "/boletines", label: "Boletines" },
    { href: "/eventos", label: "Eventos" },
  ];

  return (
    <header className="bg-primary text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="relative z-10">
          <Image
            src="/logo-blanco.webp"
            alt="Colegio Las Margaritas"
            width={160}
            height={40}
            className="cursor-pointer hover:opacity-90 transition-opacity"
          />
        </Link>

        {/* Navegación Desktop */}
        <nav className="hidden md:flex flex-grow justify-center space-x-8 text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative py-2 hover:text-secondary transition-colors group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
            </Link>
          ))}
        </nav>

        {/* Botón del menú móvil */}
        <button
          className="md:hidden relative z-10 p-2 hover:bg-secondary/20 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <FaTimes className="w-6 h-6 text-white transition-all duration-300" />
          ) : (
            <FaBars className="w-6 h-6 text-white transition-all duration-300" />
          )}
        </button>
      </div>

      {/* Menú móvil con animación mejorada */}
      <div
        className={`md:hidden fixed inset-0 bg-primary transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        }`}
        style={{ top: "76px" }}
      >
        <nav className="flex flex-col py-8 items-center space-y-6 text-xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="relative w-full text-center py-3 hover:bg-secondary/20 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
