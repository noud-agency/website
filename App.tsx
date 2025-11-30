import React, { useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Services from './components/Services';
import Deliverables from './components/Deliverables';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Booking from './components/Booking';

import AnimatedBackground from './components/AnimatedBackground';

// ... (DigitalRain component can be removed or kept if we want to mix, but plan said replace. I will remove it to be clean)

const App: React.FC = () => {
  // Smooth scroll behavior implementation for anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="w-full min-h-screen relative selection:bg-primary selection:text-black">
      {/* New Animated Background */}
      <AnimatedBackground />

      <Navbar onOpenBooking={scrollToBooking} />

      <div className="relative z-10 flex flex-col gap-0">
        <Hero onOpenBooking={scrollToBooking} />
        <Partners />
        <Services />
        <Deliverables />
        <About />
        <Testimonials />
        <Booking />
        <Footer onOpenBooking={scrollToBooking} />
      </div>
    </main>
  );
};

export default App;