import React from 'react';
import { X, Clock, Video } from 'lucide-react';
import { motion } from 'framer-motion';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-[95vw] md:max-w-5xl lg:max-w-6xl bg-[#0f0f0f] border border-white/10 rounded-xl md:rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[95vh] md:h-[600px] lg:h-[700px]"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 md:top-4 md:right-4 z-20 p-1.5 md:p-2 bg-zinc-900/80 backdrop-blur rounded-full text-zinc-400 hover:text-white transition-colors border border-white/10 shadow-lg"
        >
          <X size={16} className="md:w-[18px] md:h-[18px]" />
        </button>

        {/* Left Column: Service Info - Branding */}
        <div className="hidden md:flex w-full md:w-2/5 lg:w-1/3 bg-[#161616] p-6 lg:p-8 border-r border-white/5 flex-col">
          <div className="mb-6 lg:mb-8">
            <span className="text-lg lg:text-xl font-bold font-sans text-white tracking-tight">Noud AI</span>
          </div>

          <div className="flex-grow">
            <h3 className="text-xl lg:text-2xl text-white font-medium mb-2">Free Automation Audit</h3>
            <div className="flex items-center gap-2 text-zinc-500 text-xs lg:text-sm font-mono mb-4 lg:mb-6">
              <Clock size={14} /> 60 min
            </div>

            <p className="text-zinc-400 text-xs lg:text-sm leading-relaxed mb-4 lg:mb-6">
              Sesi konsultasi mendalam untuk menganalisis workflow bisnis Anda saat ini. Kami akan mengidentifikasi peluang efisiensi dan potensi implementasi AI Agent.
            </p>

            <div className="flex items-start gap-3 text-zinc-400 text-xs lg:text-sm mb-4">
              <Video size={14} className="mt-1 shrink-0 text-primary" />
              <span>Google Meet video conference details provided upon confirmation.</span>
            </div>
          </div>

          <div className="mt-auto pt-4 lg:pt-6 border-t border-white/5">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-mono text-zinc-500 uppercase">Live Calendar System</span>
            </div>
          </div>
        </div>

        {/* Right Column: Google Calendar Embed */}
        <div className="w-full md:w-3/5 lg:w-2/3 bg-white relative flex-1 min-h-[500px] md:min-h-0">
          <iframe
            src="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2tCdg06ddphpsMZfP39Zi5UgMcI2o-enILwTQ2QIwYFtBBfT2d-xc6nlbmwSn2qRQsdewrjvSa"
            style={{ border: 0 }}
            width="100%"
            height="100%"
            frameBorder="0"
            title="Google Calendar Appointment Scheduling"
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
};

export default BookingModal;