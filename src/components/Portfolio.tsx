/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Calendar, ArrowUpRight, Trophy, Compass, Check, ArrowRight } from 'lucide-react';
import { Project, GalleryImage } from '../types';
import { PROJECTS, CREATIVE_DESIGN_IMAGES, BOOK_DESIGN_IMAGES, SOCIAL_MEDIA_IMAGES, createProjectFromGalleryImage, createProjectFromBookImage, createProjectFromSocialImage } from '../data';
import ProjectModal from './ProjectModal';

export default function Portfolio() {
  const [filter, setFilter] = useState<'All' | 'Branding' | 'Digital Creative' | 'Creative Design' | 'Book Designs' | 'Social Media Designs'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Creative Design', 'Book Designs', 'Social Media Designs'] as const;

  return (
    <section id="portfolio" className="relative py-24 md:py-32 bg-gray-50 dark:bg-black/30 border-t border-royal-gold/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header Block with Floating Elements */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 text-left">
            <span className="text-royal-gold font-sans font-semibold tracking-widest text-xs uppercase block">
              FEATURED PROJECTS
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-gray-900 dark:text-gilded-ivory" id="portfolio-heading">
              Legacy of Light
            </h2>
          </div>

          {/* Luxury Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all cursor-pointer border ${filter === cat
                    ? 'bg-royal-gold border-royal-gold text-deep-violet shadow-md'
                    : 'bg-white dark:bg-midnight-royal/60 border-royal-gold/15 text-gray-700 dark:text-gray-300 hover:border-royal-gold/40'
                  }`}
                id={`portfolio-filter-${cat.replace(/\s+/g, '-').toLowerCase()}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project List / Grid representation with Grayscale & Tilt animation logic */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">


          {(filter === 'All' || filter === 'Creative Design') && CREATIVE_DESIGN_IMAGES.slice(0, 4).map((img, idx) => {
            const proj = createProjectFromGalleryImage(img, idx);
            return (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                className="group flex flex-col space-y-6 cursor-pointer"
                onClick={() => setSelectedProject(proj)}
              >
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl border border-royal-gold/15 bg-gray-200 dark:bg-white/5">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="font-sans text-[9px] font-bold tracking-widest uppercase bg-midnight-royal/80 text-royal-gold px-3 py-1.5 rounded-full border border-royal-gold/25 shadow-lg backdrop-blur-sm">
                      {proj.tag}
                    </span>
                  </div>
                </div>

                {/* Text Block mimicking main projects */}
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="font-sans text-[10px] text-royal-gold font-bold uppercase tracking-widest">
                        {proj.category}
                      </span>
                      <h3 className="font-display text-2xl font-black text-gray-900 dark:text-gilded-ivory mt-1">
                        {proj.title}
                      </h3>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-royal-gold transition-colors" />
                  </div>

                  <p className="font-sans text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                    {proj.description}
                  </p>

                  <div className="flex gap-4 pt-4 mt-4 border-t border-royal-gold/10 text-[10px] font-sans">
                    <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
                      <span className="font-bold text-royal-gold/80 uppercase">Client:</span> {proj.client}
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
                      <span className="font-bold text-royal-gold/80 uppercase">Year:</span> {proj.year}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}

          {(filter === 'All' || filter === 'Book Designs') && BOOK_DESIGN_IMAGES.slice(0, 4).map((img, idx) => {
            const proj = createProjectFromBookImage(img, idx);
            return (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                className="group flex flex-col space-y-6 cursor-pointer"
                onClick={() => setSelectedProject(proj)}
              >
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl border border-royal-gold/15 bg-gray-200 dark:bg-white/5">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="font-sans text-[9px] font-bold tracking-widest uppercase bg-midnight-royal/80 text-royal-gold px-3 py-1.5 rounded-full border border-royal-gold/25 shadow-lg backdrop-blur-sm">
                      {proj.tag}
                    </span>
                  </div>
                </div>

                {/* Text Block mimicking main projects */}
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="font-sans text-[10px] text-royal-gold font-bold uppercase tracking-widest">
                        {proj.category}
                      </span>
                      <h3 className="font-display text-2xl font-black text-gray-900 dark:text-gilded-ivory mt-1">
                        {proj.title}
                      </h3>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-royal-gold transition-colors" />
                  </div>

                  <p className="font-sans text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                    {proj.description}
                  </p>

                  <div className="flex gap-4 pt-4 mt-4 border-t border-royal-gold/10 text-[10px] font-sans">
                    <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
                      <span className="font-bold text-royal-gold/80 uppercase">Client:</span> {proj.client}
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
                      <span className="font-bold text-royal-gold/80 uppercase">Year:</span> {proj.year}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}

          {(filter === 'All' || filter === 'Social Media Designs') && SOCIAL_MEDIA_IMAGES.slice(0, 4).map((img, idx) => {
            const proj = createProjectFromSocialImage(img, idx);
            return (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                className="group flex flex-col space-y-6 cursor-pointer"
                onClick={() => setSelectedProject(proj)}
              >
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl border border-royal-gold/15 bg-gray-200 dark:bg-white/5">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="font-sans text-[9px] font-bold tracking-widest uppercase bg-midnight-royal/80 text-royal-gold px-3 py-1.5 rounded-full border border-royal-gold/25 shadow-lg backdrop-blur-sm">
                      {proj.tag}
                    </span>
                  </div>
                </div>

                {/* Text Block mimicking main projects */}
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="font-sans text-[10px] text-royal-gold font-bold uppercase tracking-widest">
                        {proj.category}
                      </span>
                      <h3 className="font-display text-2xl font-black text-gray-900 dark:text-gilded-ivory mt-1">
                        {proj.title}
                      </h3>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-royal-gold transition-colors" />
                  </div>

                  <p className="font-sans text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                    {proj.description}
                  </p>

                  <div className="flex gap-4 pt-4 mt-4 border-t border-royal-gold/10 text-[10px] font-sans">
                    <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
                      <span className="font-bold text-royal-gold/80 uppercase">Client:</span> {proj.client}
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
                      <span className="font-bold text-royal-gold/80 uppercase">Year:</span> {proj.year}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Master Case Study Overlay Modal */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
