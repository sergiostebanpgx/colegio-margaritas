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
    <footer className="bg-primary text-white py-4 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo y descripción */}
          <div className="space-y-4 transform hover:scale-105 transition-transform duration-300">
            <Image
              src="/logo-blanco.webp"
              alt="Colegio Las Margaritas"
              width={180}
              height={36}
              className="mx-auto md:mx-0"
            />
            <p className="text-sm text-gray-300 max-w-xs leading-relaxed">
              "Comprometidos con la excelencia construimos una sociedad en paz,
              equitativa e incluyente retando los desafíos del futuro"
            </p>
          </div>

          {/* Información de Contacto */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4 relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-0.5 after:bg-secondary after:bottom-0 after:left-0">
              Contacto
            </h3>

            <div className="space-y-3">
              <div className="flex items-center gap-x-3 group hover:translate-x-2 transition-transform duration-300">
                <p className="text-gray-300 text-sm md:text-base">(601) 743-9658</p>
              </div>

              <div className="flex items-center gap-x-3 group hover:translate-x-2 transition-transform duration-300">
                <Link
                  href="mailto:collasmargaritas8@educacionbogobta.edu.co"
                  className="text-gray-300 hover:text-secondary transition-colors text-sm md:text-base break-all md:break-normal"
                >
                  collasmargaritas8@educacionbogota.edu.co
                </Link>
              </div>

              <div className="flex items-center gap-x-3 group hover:translate-x-2 transition-transform duration-300">
                <p className="text-gray-300 text-sm md:text-base">Carrera 88C # 43-53 Sur, Bogotá, Colombia</p>
              </div>
            </div>
          </div>

          {/* Redes Sociales */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4 relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-0.5 after:bg-secondary after:bottom-0 after:left-0">
              Síguenos
            </h3>
            <div className="flex justify-center md:justify-start gap-6">
              {[
                { Icon: FaFacebook, href: "https://www.facebook.com/AlianzaEducativaOficial/" },
                { Icon: FaXTwitter, href: "https://x.com/AAE_Colombia" },
                { Icon: FaInstagram, href: "https://www.instagram.com/alianzaeducativa/" },
                { Icon: FaYoutube, href: "https://www.youtube.com/channel/UCTCwDZTeiKAo6gIUC-Ng1Og" },
                { Icon: FaLinkedinIn, href: "https://co.linkedin.com/company/alianzaeducativacolombia" },
              ].map(({ Icon, href }, index) => (
                <Link
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transform hover:scale-125 transition-all duration-300"
                >
                  <Icon size={28} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Línea de separación y derechos reservados */}
        <div className="border-t border-green-500/30 pt-4 text-center text-gray-400 text-sm">
          <p className="hover:text-secondary transition-colors">
            &copy; {new Date().getFullYear()} Colegio Las Margaritas. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
