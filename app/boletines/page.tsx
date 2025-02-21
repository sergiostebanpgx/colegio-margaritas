"use client";

import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import AnimationIcons from "../components/AnimationIcons";

// Datos de los boletines con archivos PDF
const boletinesData = [
  { id: 1, titulo: "Boletín Enero 2025", fecha: "01/01/2025", archivo: "/pdf/boletin_202501.pdf" },
  { id: 2, titulo: "Boletín Febrero 2025", fecha: "01/02/2025", archivo: "/pdf/boletin_202502.pdf" },
];

const BoletinesPage = () => {
  const [selectedBoletin, setSelectedBoletin] = useState<{ id: number; titulo: string; fecha: string; archivo: string } | null>(null);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 title-decoration text-center">Boletines Informativos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {boletinesData.map((boletin) => (
          <div
            key={boletin.id}
            className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 text-center flex flex-col items-center"
          >
            <AnimationIcons type="pdf" />
            <h2 className="text-xl font-semibold">{boletin.titulo}</h2>
            <p className="text-gray-600 mb-4">Fecha de publicación: {boletin.fecha}</p>
            <button
              onClick={() => setSelectedBoletin(boletin)}
              className="bg-secondary text-white px-6 py-2 rounded-full hover:bg-tertiary transition-all duration-300"
            >
              Ver boletín
            </button>
          </div>
        ))}
      </div>

      {/* Modal para ver el PDF */}
      {selectedBoletin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">{selectedBoletin?.titulo || "Cargando..."}</h2>
              <button
                onClick={() => setSelectedBoletin(null)}
                className="text-gray-500 hover:text-gray-800"
              >
                <FaTimes size={24} />
              </button>
            </div>
            <iframe
              src={selectedBoletin?.archivo || ""}
              className="w-full h-[500px] rounded-lg border"
              title={selectedBoletin?.titulo || "Boletín"}
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default BoletinesPage;
