import { FaFilePdf } from "react-icons/fa";

const boletinesData: Record<string, { titulo: string; archivo: string }> = {
  "1": { titulo: "Boletín Informativo Enero 2024", archivo: "/pdf/boletin_202401.pdf" },
  "2": { titulo: "Boletín Informativo Febrero 2024", archivo: "/pdf/boletin_202402.pdf" },
};

const BoletinDetalle = ({ params }: { params: { id: string } }) => {
  const boletin = boletinesData[params.id];

  if (!boletin) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4 text-red-500">Boletín no encontrado</h1>
        <p className="text-gray-600">El boletín que buscas no existe.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 title-decoration">{boletin.titulo}</h1>
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <p className="mb-4">
          Este boletín contiene información importante sobre las actividades y eventos del mes en el Colegio Las Margaritas.
        </p>
        <a
          href={boletin.archivo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-tertiary text-white px-4 py-2 rounded hover:bg-secondary transition-colors"
        >
          <FaFilePdf className="mr-2" />
          Descargar PDF
        </a>
      </div>
    </div>
  );
};

export default BoletinDetalle;
