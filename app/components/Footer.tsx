import Link from "next/link";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import AnimationIcons from "../components/AnimationIcons";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          {/* Logo y descripción */}
          <div className="w-full md:w-1/3 text-center md:text-left">
            <Image
              src="/logo-blanco.webp"
              alt="Colegio Las Margaritas"
              width={200}
              height={40}
              className="mx-auto md:mx-0"
            />
            <p className="text-sm text-gray-300 mt-3 max-w-xs mx-auto md:mx-0">
              “Comprometidos con la excelencia construimos una sociedad en paz,
              equitativa e incluyente retando los desafíos del futuro”
            </p>
          </div>

          {/* Información de Contacto */}
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-3">Contacto</h3>

            <div className="flex justify-center md:justify-start items-center gap-x-2 text-gray-300">
              <AnimationIcons type="call" size={30} />
              <p>(601) 743-9658</p>
            </div>

            <div className="flex justify-center md:justify-start items-center gap-x-2 text-gray-300 mt-2">
              <AnimationIcons type="mail" size={30} />
              <Link
                href="mailto:collasmargaritas8@educacionbogobta.edu.co"
                className="hover:text-secondary transition-colors"
              >
                collasmargaritas8@educacionbogota.edu.co
              </Link>
            </div>

            <div className="flex justify-center md:justify-start items-center gap-x-2 text-gray-300 mt-2">
              <AnimationIcons type="location" size={30} />
              <p>Carrera 88C # 43-53 Sur, Bogotá, Colombia</p>
            </div>
          </div>

          {/* Redes Sociales */}
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-3">Síguenos</h3>
            <div className="flex justify-center md:justify-start space-x-5">
              <Link
                href="https://www.facebook.com/AlianzaEducativaOficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                <FaFacebook size={28} />
              </Link>
              <Link
                href="https://x.com/AAE_Colombia"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                <FaXTwitter size={28} />
              </Link>
              <Link
                href="https://www.instagram.com/alianzaeducativa/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                <FaInstagram size={28} />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCTCwDZTeiKAo6gIUC-Ng1Og?view_as=subscriber"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                <FaYoutube size={28} />
              </Link>
              <Link
                href="https://co.linkedin.com/company/alianzaeducativacolombia"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                <FaLinkedinIn size={28} />
              </Link>
            </div>
          </div>
        </div>

        {/* Línea de separación y derechos reservados */}
        <div className="border-t-2 border-green-500 mt-8 pt-4 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Colegio Las Margaritas. Todos los
          derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
