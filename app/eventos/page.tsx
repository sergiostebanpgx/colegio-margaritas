"use client";

import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import esLocale from "@fullcalendar/core/locales/es";
import { EventApi } from "@fullcalendar/core";
import { FaTimes } from "react-icons/fa";

const EventosPage = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventApi | null>(null);

  const events = [
    {
      title: "🎭 Feria Cultural",
      start: new Date(2025, 1, 10, 9, 0),
      end: new Date(2025, 1, 10, 12, 0),
      extendedProps: { description: "Evento cultural con presentaciones de estudiantes" },
    },
    {
      title: "🗳 Elecciones de personero",
      start: new Date(2025, 1, 10, 9, 0),
      end: new Date(2025, 1, 10, 17, 0),
      extendedProps: { description: "Jornada electoral para elegir el personero estudiantil" },
    },
    {
      title: "🎉 Día del Estudiante",
      start: new Date(2025, 1, 15, 10, 0),
      end: new Date(2025, 1, 15, 13, 0),
      extendedProps: { description: "Actividades y conferencias para los estudiantes" },
    },
    {
      title: "👨‍👩‍👧‍👦 Reunión de Padres",
      start: new Date(2025, 1, 20, 17, 0),
      end: new Date(2025, 1, 20, 19, 0),
      extendedProps: { description: "Encuentro con padres para tratar temas del colegio" },
    },
    {
      title: "⚽ Competencia Deportiva",
      start: new Date(2025, 1, 25, 14, 0),
      end: new Date(2025, 1, 25, 18, 0),
      extendedProps: { description: "Torneo intercolegial de fútbol y baloncesto" },
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 title-decoration text-center">Calendario de Eventos</h1>
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-300">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          locale={esLocale}
          height="auto"
          aspectRatio={1.8}
          contentHeight="auto"
          dayMaxEventRows={2}
          eventClick={(info) => setSelectedEvent(info.event)}
          eventContent={(eventInfo) => (
            <div className="bg-secondary text-white px-2 py-1 rounded-lg text-sm">
              {eventInfo.event.title}
            </div>
          )}
          eventDisplay="block"
          slotMinWidth={60}
          slotEventOverlap={false}
          editable={false}
          selectable={true}
        />
      </div>

      {/* Modal para mostrar detalles del evento */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full sm:max-w-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">{selectedEvent?.title || "Evento sin título"}</h2>
              <button onClick={() => setSelectedEvent(null)} className="text-gray-500 hover:text-gray-800">
                <FaTimes size={24} />
              </button>
            </div>
            <p className="text-gray-600 mb-4">
              📅 {selectedEvent?.start?.toLocaleDateString()} - {selectedEvent?.end?.toLocaleTimeString()}
            </p>
            <p className="text-gray-800">{selectedEvent?.extendedProps?.description || "Sin descripción"}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventosPage;
