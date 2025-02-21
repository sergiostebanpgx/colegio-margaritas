import Image from "next/image";
import Link from "next/link";
import Carousel from "./components/Carousel";
import AnimationIcons from "./components/AnimationIcons";

const portals = [
  {
    name: "Correo institucional",
    icon: <AnimationIcons type="mail" />,
    link: "https://accounts.google.com/AccountChooser/signinchooser?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F",
  },
  {
    name: "Syscolegios",
    icon: <AnimationIcons type="register" />,
    link: "https://www.syscolegios.com/",
  },
];

const HomePage = () => {
  return (
    <div>
      {/* Carrusel */}
      <Carousel />

      {/* Nuestros Portales */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 title-decoration text-center">
            Portales de interés
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portals.map((portal) => (
              <div
                key={portal.name}
                className="bg-white rounded-xl shadow-lg p-8 text-center border border-gray-200"
              >
                <div className="flex flex-col items-center">
                  {portal.icon}
                  <h3 className="text-xl font-semibold mt-4">{portal.name}</h3>
                  <Link
                    href={portal.link}
                    target="_blank"
                    className="mt-4 bg-secondary text-white px-6 py-2 rounded-full hover:bg-tertiary transition-all duration-300"
                  >
                    Acceder
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Novedades */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 title-decoration text-center">
            Últimas Novedades
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tarjeta 1: Noticias Margaritas */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="flex justify-center items-center w-full h-56 bg-gray-100">
                <AnimationIcons type="blog" size={120} />{" "}
                {/* Ícono de correo */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Noticias Margaritas
                </h3>
                <p className="text-gray-600 mb-4">
                  Entérate de los últimos eventos
                </p>
                <Link
                  href={`/noticias`}
                  className="text-white bg-secondary px-4 py-2 rounded-full hover:bg-tertiary transition-all duration-300"
                >
                  Ver más
                </Link>
              </div>
            </div>

            {/* Tarjeta 2: Boletines Informativos */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="flex justify-center items-center w-full h-56 bg-gray-100">
                <AnimationIcons type="newspaper" size={120} />{" "}
                {/* Ícono de PDF */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Boletines Informativos
                </h3>
                <p className="text-gray-600 mb-4">
                  Descarga el boletín del mes
                </p>
                <Link
                  href={`/boletines`}
                  className="text-white bg-secondary px-4 py-2 rounded-full hover:bg-tertiary transition-all duration-300"
                >
                  Ver más
                </Link>
              </div>
            </div>

            {/* Tarjeta 3: Consulta tu Correo */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="flex justify-center items-center w-full h-56 bg-gray-100">
                <AnimationIcons type="search" size={120} />{" "}
                {/* Ícono de registro */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Consulta tu correo
                </h3>
                <p className="text-gray-600 mb-4">
                  Consulta tu correo institucional asignado
                </p>
                <Link
                  href="https://script.google.com/a/macros/alianzaeducativa.edu.co/s/AKfycbx5lYbQZ1cqTcrk8QP7mVw5EwizzpprCLwysqFKpG9uNOqOE9Xc6W8FLOyKmgwp_K9Ldg/exec"
                  target="_blank"
                  className="text-white bg-secondary px-4 py-2 rounded-full hover:bg-tertiary transition-all duration-300"
                >
                  Consultar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
