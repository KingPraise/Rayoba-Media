/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import PortfolioPage from './components/PortfolioPage';
import CreativeDesignGalleryPage from './components/CreativeDesignGalleryPage';
import ContactPage from './components/ContactPage';

import BookDesignGalleryPage from './components/BookDesignGalleryPage';
import SocialMediaGalleryPage from './components/SocialMediaGalleryPage';
import Footer from './components/Footer';

type PageState = 'home' | 'about' | 'services' | 'portfolio' | 'creative-design-gallery' | 'book-design-gallery' | 'social-media-gallery' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageState>('home');

  // Automatic scroll back to top of viewport upon route shifts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [currentPage]);

  // Synchronized footer action events
  const handleFooterNavigation = (targetId: string) => {
    if (targetId === 'hero') {
      setCurrentPage('home');
    } else if (targetId === 'portfolio') {
      setCurrentPage('portfolio');
    } else if (targetId === 'builder-section') {
      setCurrentPage('home');
      setTimeout(() => {
        const el = document.getElementById('builder-section');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
    }
  };

  const renderActivePage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <motion.div
            key="home-viewport"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.45 }}
          >
            <HomePage onNavigateToPage={setCurrentPage} />
          </motion.div>
        );
      case 'about':
        return (
          <motion.div
            key="about-viewport"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.45 }}
          >
            <AboutPage />
          </motion.div>
        );
      case 'services':
        return (
          <motion.div
            key="services-viewport"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.45 }}
          >
            <ServicesPage onNavigateToContact={() => setCurrentPage('contact')} />
          </motion.div>
        );
      case 'portfolio':
        return (
          <motion.div
            key="portfolio-viewport"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.45 }}
          >
            <PortfolioPage onNavigateToPage={setCurrentPage} />
          </motion.div>
        );
      case 'creative-design-gallery':
        return (
          <motion.div
            key="creative-design-gallery-viewport"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.45 }}
          >
            <CreativeDesignGalleryPage onNavigateToPage={setCurrentPage} />
          </motion.div>
        );
      case 'book-design-gallery':
        return (
          <motion.div
            key="book-design-gallery-viewport"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.45 }}
          >
            <BookDesignGalleryPage onNavigateToPage={setCurrentPage} />
          </motion.div>
        );
      case 'social-media-gallery':
        return (
          <motion.div
            key="social-media-gallery-viewport"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.45 }}
          >
            <SocialMediaGalleryPage onNavigateToPage={setCurrentPage} />
          </motion.div>
        );
      case 'contact':
        return (
          <motion.div
            key="contact-viewport"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.45 }}
          >
            <ContactPage />
          </motion.div>
        );
      default:
        return <HomePage onNavigateToPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-off-white dark:bg-zinc-950 text-gray-800 dark:text-gilded-ivory selection:bg-royal-gold/35 transition-colors duration-500 relative flex flex-col font-sans">
      {/* Upper radial gold glow effect */}
      <div className="absolute top-0 inset-x-0 h-[650px] pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[550px] md:w-[850px] h-[350px] bg-[radial-gradient(circle_at_center,_var(--color-royal-gold)_0%,_transparent_65%)] opacity-35 filter blur-[120px] rounded-full" />
      </div>

      {/* Cinematic Film Grain Overlay */}
      <div className="film-grain fixed inset-0 z-[100] opacity-[0.02] dark:opacity-[0.035] pointer-events-none" />

      {/* Synchronized Navigation Bar Header */}
      <Navbar 
        activePage={currentPage}
        onNavigateToPage={setCurrentPage}
        onOpenPlanner={() => setCurrentPage('contact')}
      />

      {/* Active page viewport container */}
      <main className="relative flex-grow min-h-screen z-10">
        <AnimatePresence mode="wait">
          {renderActivePage()}
        </AnimatePresence>
      </main>

      {/* Master footer block alignment */}
      <Footer onScrollToSection={handleFooterNavigation} />
    </div>
  );
}
