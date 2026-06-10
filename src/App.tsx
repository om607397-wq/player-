import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { AppProvider } from './context';
import { CustomCursor } from './components/CustomCursor';
import { Loading } from './components/Loading';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Quote } from './components/Quote';
import { About } from './components/About';
import { Timeline } from './components/Timeline';
import { Highlights } from './components/Highlights';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

const AppContent = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <CustomCursor />
      
      <AnimatePresence mode="wait">
        {isLoading && <Loading key="loading" onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      
      {!isLoading && (
        <div className="min-h-screen font-sans">
          <Header />
          <main>
            <Hero />
            <Quote />
            <About />
            <Timeline />
            <Highlights />
            <Gallery />
            <Contact />
            <CTA />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
