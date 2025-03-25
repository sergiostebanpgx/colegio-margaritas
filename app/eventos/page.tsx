"use client";

import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import esLocale from "@fullcalendar/core/locales/es";
import { EventApi } from "@fullcalendar/core";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { CalendarIcon, ClockIcon, MapPinIcon } from "@heroicons/react/24/solid";

const EventosPage = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventApi | null>(null);

  const events = [
    {
      title: "🎭 Feria Cultural",
      start: new Date(2025, 1, 10, 9, 0),
      end: new Date(2025, 1, 10, 12, 0),
      extendedProps: {
        description: "Evento cultural con presentaciones de estudiantes",
      },
    },
    {
      title: "🗳 Elecciones de personero",
      start: new Date(2025, 1, 10, 9, 0),
      end: new Date(2025, 1, 10, 17, 0),
      extendedProps: {
        description: "Jornada electoral para elegir el personero estudiantil",
      },
    },
    {
      title: "🎉 Día del Estudiante",
      start: new Date(2025, 1, 15, 10, 0),
      end: new Date(2025, 1, 15, 13, 0),
      extendedProps: {
        description: "Actividades y conferencias para los estudiantes",
      },
    },
    {
      title: "👨‍👩‍👧‍👦 Reunión de Padres",
      start: new Date(2025, 1, 20, 17, 0),
      end: new Date(2025, 1, 20, 19, 0),
      extendedProps: {
        description: "Encuentro con padres para tratar temas del colegio",
      },
    },
    {
      title: "⚽ Competencia Deportiva",
      start: new Date(2025, 1, 25, 14, 0),
      end: new Date(2025, 1, 25, 18, 0),
      extendedProps: {
        description: "Torneo intercolegial de fútbol y baloncesto",
      },
    },
    {
      title: "⚽ Inauguración de lo juegos intercursos",
      start: new Date(2025, 2, 28, 14, 0),
      end: new Date(2025, 2, 28, 18, 0),
      extendedProps: {
        description: "Torneo intercolegial de fútbol y baloncesto",
      },
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto px-4 py-8 md:py-12"
    >
      <motion.h1
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center text-primary"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Calendario de Eventos
      </motion.h1>

      <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-6 border border-gray-200 backdrop-blur-sm bg-opacity-90">
        <div className="calendar-custom">
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
            aspectRatio={1.5}
            contentHeight="auto"
            dayMaxEventRows={3}
            eventClick={(info) => setSelectedEvent(info.event)}
            eventContent={(eventInfo) => (
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-primary text-white px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm"
              >
                {eventInfo.event.title}
              </motion.div>
            )}
            eventDisplay="block"
            slotMinWidth={60}
            slotEventOverlap={false}
            editable={false}
            selectable={true}
          />
        </div>
      </div>

      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white p-6 rounded-2xl shadow-2xl max-w-md w-full sm:max-w-lg border border-gray-200"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-primary">
                  {selectedEvent?.title || "Evento sin título"}
                </h2>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="text-gray-500 hover:text-gray-800 transition-colors"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <CalendarIcon className="w-5 h-5 text-primary" />
                  <span>{selectedEvent?.start?.toLocaleDateString()}</span>
                </div>

                <div className="flex items-center gap-3 text-gray-600">
                  <ClockIcon className="w-5 h-5 text-primary" />
                  <span>
                    {selectedEvent?.start?.toLocaleTimeString()} -{" "}
                    {selectedEvent?.end?.toLocaleTimeString()}
                  </span>
                </div>

                <div className="flex items-start gap-3 text-gray-800">
                  <MapPinIcon className="w-5 h-5 text-primary mt-1" />
                  <p className="leading-relaxed">
                    {selectedEvent?.extendedProps?.description ||
                      "Sin descripción"}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default EventosPage;
