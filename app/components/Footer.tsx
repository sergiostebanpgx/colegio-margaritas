import Link from "next/link";
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
          
          {/* Logo y descripción */}
          <div className="md:w-1/3 text-center md:text-left">
            <Image
              src="/logo-blanco.webp"
              alt="Colegio Las Margaritas"
              width={200}
              height={40}
            />
            <p className="text-sm text-gray-300 mt-3 max-w-xs">
              “Comprometidos con la excelencia construimos una sociedad en paz, equitativa e incluyente retando los desafíos del futuro”
            </p>
          </div>

          {/* Información de Contacto */}
          <div className="md:w-1/3 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-3">Contacto</h3>
            <p className="text-gray-300">📞 (601) 743-9658</p>
            <p className="text-gray-300">✉️ <Link href="mailto:collasmargaritas8@educacionbogobta.edu.co" className="hover:text-secondary transition-colors">collasmargaritas8@educacionbogobta.edu.co</Link></p>
            <p className="text-gray-300">📍 Carrera 88C # 43-53 Sur, Bogotá, Colombia</p>
          </div>

          {/* Redes Sociales */}
          <div className="md:w-1/3 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-3">Síguenos</h3>
            <div className="flex justify-center md:justify-start space-x-5">
              <Link href="https://www.facebook.com/AlianzaEducativaOficial/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                <FaFacebook size={28} />
              </Link>
              <Link href="https://x.com/AAE_Colombia" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                <FaXTwitter size={28} />
              </Link>
              <Link href="https://www.instagram.com/alianzaeducativa/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                <FaInstagram size={28} />
              </Link>
              <Link href="https://www.youtube.com/channel/UCTCwDZTeiKAo6gIUC-Ng1Og?view_as=subscriber" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                <FaYoutube size={28} />
              </Link>
              <Link href="https://co.linkedin.com/company/alianzaeducativacolombia" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                <FaLinkedinIn size={28} />
              </Link>
            </div>
          </div>
        </div>

        {/* Línea de separación y derechos reservados */}
        <div className="border-t-2 border-green-500 mt-8 pt-4 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Colegio Las Margaritas. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
