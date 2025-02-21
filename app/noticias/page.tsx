import Image from "next/image";
import Link from "next/link";

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
      <h1 className="text-4xl font-bold mb-8 title-decoration text-center">
        Noticias
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {noticias.map((noticia) => (
          <div
            key={noticia.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transition-all hover:shadow-xl"
          >
            <Image
              src={noticia.imagen}
              alt={noticia.titulo}
              width={500}
              height={300}
              className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{noticia.titulo}</h2>
              <p className="text-gray-600 mb-4">{noticia.descripcion}</p>
              <Link href={`/noticias/${noticia.id}`}>
                <span className="text-white bg-secondary px-4 py-2 rounded-full hover:bg-tertiary transition-all duration-300">
                  Leer más
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticiasPage;
