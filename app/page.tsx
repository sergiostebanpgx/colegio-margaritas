import Image from "next/image";
import Link from "next/link";
import { FaUsers, FaChalkboardUser } from "react-icons/fa6";
import { MdOutgoingMail } from "react-icons/md";
import Carousel from "./components/Carousel";

// Datos de los portales con íconos y enlaces
const portals = [
  {
    name: "Correo institucional",
    icon: <MdOutgoingMail className="text-5xl text-secondary" />,
    link: "https://accounts.google.com/AccountChooser/signinchooser?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F",
  },
  {
    name: "Syscolegios",
    icon: <FaChalkboardUser className="text-5xl text-secondary" />,
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
          <h2 className="text-3xl font-bold mb-8 title-decoration text-center">Portales de interés</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portals.map((portal) => (
              <div key={portal.name} className="bg-white rounded-xl shadow-lg p-8 text-center border border-gray-200">
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
          <h2 className="text-3xl font-bold mb-8 title-decoration text-center">Últimas Novedes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <Image
                  src={`/placeholder.svg?height=300&width=500`}
                  alt={'Noticias'}
                  width={500}
                  height={300}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Noticias Margaritas</h3>
                  <p className="text-gray-600 mb-4">Entérate de las últimos eventos</p>
                  <Link
                    href= {`/noticias`}
                    className="text-white bg-secondary px-4 py-2 rounded-full hover:bg-tertiary transition-all duration-300"
                  >
                    Ver más
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <Image
                  src={`/placeholder.svg?height=300&width=500`}
                  alt={'Boletines'}
                  width={500}
                  height={300}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Boletines Informativos</h3>
                  <p className="text-gray-600 mb-4">Descarga el boletín del mes</p>
                  <Link
                    href= {`/boletines`}
                    className="text-white bg-secondary px-4 py-2 rounded-full hover:bg-tertiary transition-all duration-300"
                  >
                    Ver más
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <Image
                  src={`/placeholder.svg?height=300&width=500`}
                  alt={'#'}
                  width={500}
                  height={300}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Consulta tu correo</h3>
                  <p className="text-gray-600 mb-4">Consulta tu correo institucional asignado</p>
                  <Link
                    href="https://script.google.com/a/macros/alianzaeducativa.edu.co/s/AKfycby09jFjBsNoGk9JAI6vR9dcngl2HTzwa0lq0cVJelAG67fp9-ddqp0dJEBqDT5ARz51Aw/exec"
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
