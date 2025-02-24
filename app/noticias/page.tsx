import Image from "next/image";
import Link from "next/link";
import AnimatedTitle from "@/components/ui/AnimatedTitle";

const noticias = [
  {
    id: 1,
    titulo: "🎭 Inauguración de la Feria Cultural",
    descripcion:
      "Un evento lleno de arte, música y cultura para toda la comunidad educativa.",
    imagen: "/logo-color.webp",
    contenido:
      "La feria cultural 2025 reúne a artistas, músicos y estudiantes en un evento único...",
  },
  {
    id: 2,
    titulo: "📚 Nuevos Programas Académicos",
    descripcion:
      "Explora las nuevas oportunidades de aprendizaje disponibles este año.",
    imagen: "/logo-color.webp",
    contenido:
      "El colegio ha implementado nuevos programas académicos para el año 2025...",
  },
  {
    id: 3,
    titulo: "🎉 Celebración del Día del Estudiante",
    descripcion:
      "Disfrutamos de un día lleno de actividades recreativas y educativas.",
    imagen: "/logo-color.webp",
    contenido:
      "El Día del Estudiante fue una jornada llena de emociones y diversión...",
  },
];

const NoticiasPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <AnimatedTitle>Últimas Noticias</AnimatedTitle>
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {noticias.map((noticia) => (
          <div
            key={noticia.id}
            className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
          >
            <div className="relative overflow-hidden">
              <Image
                src={noticia.imagen}
                alt={noticia.titulo}
                width={500}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-primary transition-colors">
                {noticia.titulo}
              </h2>
              <p className="text-gray-600 mb-6 line-clamp-3">
                {noticia.descripcion}
              </p>
              <Link 
                href={`/noticias/${noticia.id}`}
                className="inline-flex items-center gap-2 text-white bg-primary px-6 py-3 rounded-full hover:bg-secondary transition-all duration-300 transform group-hover:scale-105"
              >
                <span>Leer más</span>
                <svg 
                  className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticiasPage;
