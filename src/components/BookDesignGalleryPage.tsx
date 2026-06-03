import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BOOK_DESIGN_IMAGES, createProjectFromBookImage } from '../data';
import { ArrowLeft } from 'lucide-react';
import { Project } from '../types';
import ProjectModal from './ProjectModal';

interface Props {
  onNavigateToPage: (page: 'home' | 'about' | 'services' | 'portfolio' | 'creative-design-gallery' | 'book-design-gallery' | 'contact') => void;
}

export default function BookDesignGalleryPage({ onNavigateToPage }: Props) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="w-full relative min-h-screen pt-28 pb-16 flex flex-col justify-between">
      <section className="max-w-7xl mx-auto px-6 md:px-12 w-full mt-8 md:mt-16 text-center">
        <button 
          onClick={() => onNavigateToPage('portfolio')}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-gray-700 dark:text-gray-300 font-sans text-xs md:text-sm font-bold uppercase tracking-wider transition-colors mb-12 border border-transparent dark:border-zinc-800"
        >
          <ArrowLeft className="w-4 h-4" />
          Return to Archives
        </button>
        
        <h1 className="font-display text-4xl md:text-6xl font-black text-gray-950 dark:text-gilded-ivory tracking-tight mb-6 leading-tight">
          Book Design <br className="hidden md:block" />
          <span className="text-royal-gold italic font-light">Complete Volumes</span>
        </h1>
        <p className="font-sans text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-16 leading-relaxed">
          The full collection of our authoritative publishing and editorial works. Each volume here embodies strict typographical doctrine and uncompromising aesthetic standards.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {BOOK_DESIGN_IMAGES.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group relative rounded-[28px] border border-royal-gold/15 bg-white/60 dark:bg-zinc-950/20 shadow-2xl overflow-hidden flex flex-col justify-between aspect-[3/4] cursor-pointer"
              onClick={() => setSelectedProject(createProjectFromBookImage(img, idx))}
            >
              <div className="relative w-full h-full overflow-hidden select-none">
                <img 
                  src={img.url} 
                  alt="Book Design Showcase"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="font-sans text-[9px] font-bold tracking-widest uppercase bg-midnight-royal text-royal-gold px-3 py-1.5 rounded-full border border-royal-gold/25 shadow-lg">
                    BOOK DESIGN
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
