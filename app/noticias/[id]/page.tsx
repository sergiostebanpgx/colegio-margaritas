import Image from "next/image";
import { notFound } from "next/navigation";

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
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 p-6">
        <Image
          src={noticia.imagen}
          alt={noticia.titulo}
          width={900}
          height={600}
          className="w-full h-auto rounded-lg"
        />
        <h1 className="text-3xl font-bold mt-6 mb-4">{noticia.titulo}</h1>
        <p className="text-gray-600 text-lg">{noticia.descripcion}</p>
        <div className="mt-6 border-t pt-4 text-gray-800 text-lg leading-relaxed">
          {noticia.contenido}
        </div>
      </div>
    </div>
  );
};

export default NoticiaPage;
