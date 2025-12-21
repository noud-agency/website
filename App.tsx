import React, { useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Deliverables from './components/Deliverables';
import About from './components/About';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

import AnimatedBackground from './components/AnimatedBackground';

// Lazy load heavy components
const Services = lazy(() => import('./components/Services'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Booking = lazy(() => import('./components/Booking'));

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
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
          <Services />
        </Suspense>
        <Deliverables />
        <About />
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
          <Booking />
        </Suspense>
        <Footer onOpenBooking={scrollToBooking} />
      </div>

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </main>
  );
};

export default App;