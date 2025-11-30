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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-6xl bg-[#0f0f0f] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row h-[90vh] md:h-[750px]"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-zinc-900/80 backdrop-blur rounded-full text-zinc-400 hover:text-white transition-colors border border-white/10 shadow-lg"
        >
          <X size={18} />
        </button>

        {/* Left Column: Service Info - Branding */}
        <div className="hidden md:flex w-full md:w-1/3 bg-[#161616] p-8 border-r border-white/5 flex-col">
          <div className="mb-8">
            <span className="text-xl font-bold font-sans text-white tracking-tight">Noud AI</span>
          </div>

          <div className="flex-grow">
            <h3 className="text-2xl text-white font-medium mb-2">Free Automation Audit</h3>
            <div className="flex items-center gap-2 text-zinc-500 text-sm font-mono mb-6">
              <Clock size={14} /> 60 min
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Sesi konsultasi mendalam untuk menganalisis workflow bisnis Anda saat ini. Kami akan mengidentifikasi peluang efisiensi dan potensi implementasi AI Agent.
            </p>

            <div className="flex items-start gap-3 text-zinc-400 text-sm mb-4">
              <Video size={16} className="mt-1 shrink-0 text-primary" />
              <span>Google Meet video conference details provided upon confirmation.</span>
            </div>
          </div>

          <div className="mt-auto pt-6 border-t border-white/5">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-mono text-zinc-500 uppercase">Live Calendar System</span>
            </div>
          </div>
        </div>

        {/* Right Column: Google Calendar Embed */}
        <div className="w-full md:w-2/3 bg-white relative h-full">
          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0L1PeA3fW56Cu_n5xJ7mE4RWwxxHgsmxAbKUFps0_9bQcRg_sfMII2fkXC_GJckOWb9f2cnMHe?gv=true"
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