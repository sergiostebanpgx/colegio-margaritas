import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

// Datos de las noticias (deberían obtenerse de una API en un proyecto real)
const noticias = [
  {
    id: 1,
    titulo: "🎭 Inauguración de la Feria Cultural",
    descripcion: "Un evento lleno de arte, música y cultura para toda la comunidad educativa.",
    imagen: "/placeholder.svg?height=600&width=900",
    contenido: "La feria cultural 2025 reúne a artistas, músicos y estudiantes en un evento único. Durante la jornada, los asistentes pudieron disfrutar de exhibiciones de arte, conciertos en vivo y actividades interactivas que promovieron la creatividad y el talento local.",
  },
  {
    id: 2,
    titulo: "📚 Nuevos Programas Académicos",
    descripcion: "Explora las nuevas oportunidades de aprendizaje disponibles este año.",
    imagen: "/placeholder.svg?height=600&width=900",
    contenido: "El colegio ha implementado nuevos programas académicos para el año 2025, incluyendo cursos especializados en tecnología, arte y ciencias. Estos programas buscan potenciar el aprendizaje y preparar a los estudiantes para los desafíos del futuro.",
  },
  {
    id: 3,
    titulo: "🎉 Celebración del Día del Estudiante",
    descripcion: "Disfrutamos de un día lleno de actividades recreativas y educativas.",
    imagen: "/placeholder.svg?height=600&width=900",
    contenido: "El Día del Estudiante fue una jornada llena de emociones y diversión. Se organizaron eventos deportivos, concursos y presentaciones artísticas para que todos los estudiantes disfrutaran de un día especial en su honor.",
  },
];

const NoticiaPage = ({ params }: { params: { id: string } }) => {
  const noticia = noticias.find((n) => n.id === parseInt(params.id));

  if (!noticia) return notFound();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="relative h-[400px] md:h-[500px] mb-8 rounded-2xl overflow-hidden">
          <Image
            src={noticia.imagen}
            alt={noticia.titulo}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {noticia.titulo}
            </h1>
            <p className="text-lg md:text-xl text-gray-100">
              {noticia.descripcion}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed space-y-6">
              {noticia.contenido.split('.').map((parrafo, index) => (
                parrafo.trim() && (
                  <p key={index} className="text-lg">
                    {parrafo.trim()}.
                  </p>
                )
              ))}
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-gray-100">
            <Link 
              href="/noticias"
              className="inline-flex items-center gap-2 text-white bg-primary px-6 py-3 rounded-full hover:bg-secondary transition-all duration-300"
            >
              <svg 
                className="w-4 h-4 rotate-180" 
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
              <span>Volver a Noticias</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticiaPage;
