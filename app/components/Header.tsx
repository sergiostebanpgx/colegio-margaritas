"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo-blanco.webp"
            alt="Colegio Las Margaritas"
            width={160}
            height={40}
            className="cursor-pointer"
          />
        </Link>

        {/* Navegación Desktop */}
        <nav className="hidden md:flex flex-grow justify-center space-x-6 text-lg">
          <Link href="/" className="hover:text-secondary transition-colors">
            Inicio
          </Link>
          <Link href="/noticias" className="hover:text-secondary transition-colors">
            Noticias
          </Link>
          <Link href="/boletines" className="hover:text-secondary transition-colors">
            Boletines
          </Link>
          <Link href="/eventos" className="hover:text-secondary transition-colors">
            Eventos
          </Link>
        </nav>

        {/* Botón del menú móvil */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <FaTimes className="w-6 h-6 text-white transition-transform transform rotate-180" />
          ) : (
            <FaBars className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {/* Menú móvil con animación */}
      <div
        className={`md:hidden bg-tertiary overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col py-4 space-y-2">
          <Link href="/" className="block px-4 py-2 hover:bg-secondary transition-colors">
            Inicio
          </Link>
          <Link href="/noticias" className="block px-4 py-2 hover:bg-secondary transition-colors">
            Noticias
          </Link>
          <Link href="/boletines" className="block px-4 py-2 hover:bg-secondary transition-colors">
            Boletines
          </Link>
          <Link href="/eventos" className="block px-4 py-2 hover:bg-secondary transition-colors">
            Eventos
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
