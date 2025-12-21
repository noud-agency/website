
import React from 'react';
import { Clock, Video, CalendarCheck, CheckCircle2 } from 'lucide-react';

const Booking: React.FC = () => {
  return (
    <section id="booking" className="py-16 md:py-20 lg:py-24 px-4 md:px-6 bg-black relative border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row bg-[#0f0f0f] border border-white/10 rounded-xl md:rounded-2xl overflow-hidden shadow-2xl">

          {/* Left Column: Info */}
          <div className="w-full lg:w-2/5 xl:w-1/3 bg-[#161616] p-6 md:p-8 lg:p-10 xl:p-12 border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 md:px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6 md:mb-8">
                <CalendarCheck size={14} className="text-primary" />
                <span className="text-xs font-mono text-primary uppercase tracking-widest">Free Audit Session</span>
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-sans text-white font-medium mb-4 md:mb-6 leading-tight">
                Ready to Automate Your <span className="text-zinc-500">Business Growth?</span>
              </h2>

              <div className="flex flex-wrap items-center gap-2 md:gap-3 text-zinc-400 font-mono text-xs md:text-sm mb-6 md:mb-8">
                <div className="flex items-center gap-2 bg-zinc-900/50 px-2.5 md:px-3 py-1.5 rounded border border-white/5">
                  <Clock size={14} /> 30 min
                </div>
                <div className="flex items-center gap-2 bg-zinc-900/50 px-2.5 md:px-3 py-1.5 rounded border border-white/5">
                  <Video size={14} /> Google Meet
                </div>
              </div>

              <div className="space-y-4 text-zinc-400 mb-6 md:mb-8">
                <p className="leading-relaxed text-sm md:text-base">
                  Schedule your free, 30-minute Strategy Audit with our expert team. Zero commitment, only pure, actionable strategy.
                </p>
                <ul className="space-y-3 mt-4">
                  <li className="flex items-start gap-2.5 md:gap-3">
                    <CheckCircle2 size={16} className="text-primary mt-0.5 md:mt-1 shrink-0" />
                    <span className="text-xs md:text-sm">In-depth analysis of your current core workflows.</span>
                  </li>
                  <li className="flex items-start gap-2.5 md:gap-3">
                    <CheckCircle2 size={16} className="text-primary mt-0.5 md:mt-1 shrink-0" />
                    <span className="text-xs md:text-sm">Precise identification of all operational bottlenecks & hidden inefficiencies.</span>
                  </li>
                  <li className="flex items-start gap-2.5 md:gap-3">
                    <CheckCircle2 size={16} className="text-primary mt-0.5 md:mt-1 shrink-0" />
                    <span className="text-xs md:text-sm">A bespoke custom automation strategy blueprint.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6 md:pt-8 border-t border-white/5">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-2.5 md:w-3 h-2.5 md:h-3 bg-green-500 rounded-full"></div>
                  <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
                </div>
                <span className="text-xs md:text-sm font-mono text-zinc-400">Slots Available for This Week</span>
              </div>
            </div>
          </div>

          {/* Right Column: Calendar */}
          <div className="w-full lg:w-3/5 xl:w-2/3 bg-white h-[600px] md:h-[650px] lg:h-auto lg:min-h-[600px]">
            <iframe
              src="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2tCdg06ddphpsMZfP39Zi5UgMcI2o-enILwTQ2QIwYFtBBfT2d-xc6nlbmwSn2qRQsdewrjvSa"
              style={{ border: 0 }}
              width="100%"
              height="100%"
              frameBorder="0"
              title="Google Calendar Appointment Scheduling"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Booking;
