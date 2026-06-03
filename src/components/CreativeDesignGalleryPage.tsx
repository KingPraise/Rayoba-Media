import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CREATIVE_DESIGN_IMAGES, createProjectFromGalleryImage } from '../data';
import { ArrowLeft } from 'lucide-react';
import { Project } from '../types';
import ProjectModal from './ProjectModal';

interface Props {
  onNavigateToPage: (page: 'home' | 'about' | 'services' | 'portfolio' | 'creative-design-gallery' | 'contact') => void;
}

export default function CreativeDesignGalleryPage({ onNavigateToPage }: Props) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="w-full relative min-h-screen pt-28 pb-16 flex flex-col justify-between">
      <section className="max-w-7xl mx-auto px-6 md:px-12 w-full mt-8 md:mt-16 text-center">
        <button 
          onClick={() => onNavigateToPage('portfolio')}
          className="inline-flex items-center gap-2 text-royal-gold hover:text-royal-gold/80 font-bold text-xs uppercase tracking-widest mb-8 cursor-pointer transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </button>

        <span className="font-sans text-xs md:text-sm text-royal-gold font-semibold tracking-[0.2em] mb-4 block uppercase p-1">
          Full Archive
        </span>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-7.5xl font-black text-gray-900 dark:text-gilded-ivory leading-tight mb-6">
          Creative <span className="text-royal-gold">Design</span>
        </h1>
        <p className="font-sans text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-16">
          Explore our complete collection of bespoke visual identities, luxury packaging, and editorial layouts.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CREATIVE_DESIGN_IMAGES.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group relative rounded-[28px] border border-royal-gold/15 bg-white/60 dark:bg-zinc-950/20 shadow-2xl overflow-hidden text-left flex flex-col justify-between aspect-video cursor-pointer"
              onClick={() => setSelectedProject(createProjectFromGalleryImage(img, idx))}
            >
              <div className="relative w-full h-full overflow-hidden select-none">
                <img 
                  src={img.url} 
                  alt="Creative Design Showcase"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
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
