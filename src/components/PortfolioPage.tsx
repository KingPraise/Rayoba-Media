/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS, CREATIVE_DESIGN_IMAGES, BOOK_DESIGN_IMAGES, SOCIAL_MEDIA_IMAGES, createProjectFromGalleryImage, createProjectFromBookImage, createProjectFromSocialImage } from '../data';
import { Project, GalleryImage } from '../types';
import { Filter, X, ArrowUpRight, TrendingUp, Sparkles, Star, Target, Landmark, CheckCircle, Play, Film, Award, Clock } from 'lucide-react';
import ProjectModal from './ProjectModal';


interface Props {
  onNavigateToPage: (page: 'home' | 'about' | 'services' | 'portfolio' | 'creative-design-gallery' | 'book-design-gallery' | 'social-media-gallery' | 'contact') => void;
}

export default function PortfolioPage({ onNavigateToPage }: Props) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const categories = ['All', 'Creative Design', 'Book Designs', 'Social Media Designs'];

  return (
    <div className="w-full relative min-h-screen pt-28 pb-16 flex flex-col justify-between">

      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 w-full mt-8 md:mt-16 text-center">
        <span className="font-sans text-xs md:text-sm text-royal-gold font-semibold tracking-[0.2em] mb-4 block uppercase p-1">
          Case Studies
        </span>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-7.5xl font-black text-gray-900 dark:text-gilded-ivory leading-tight mb-6">
          Curated <span className="text-royal-gold">Masterpieces</span>
        </h1>
        <p className="font-sans text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Our work speaks for itself. We merge editorial luxury with technical precision to build digital experiences that define industry standards.
        </p>

        {/* Scroll To Explore indicator */}
        <div className="flex justify-center items-center space-x-6 mt-12 mb-16">
          <div className="h-[1px] w-12 bg-royal-gold/40 dark:bg-royal-gold/25" />
          <span className="font-sans text-xs tracking-[0.2em] uppercase text-royal-gold font-semibold">Scroll to Explore</span>
          <div className="h-[1px] w-12 bg-royal-gold/40 dark:bg-royal-gold/25" />
        </div>
      </section>

      {/* Categories Filter Block */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 w-full mb-12">
        <div className="flex flex-wrap items-center justify-center gap-3 border-b border-royal-gold/10 pb-8 text-center">
          <div className="flex items-center gap-2 text-royal-gold mr-3">
            <Filter className="w-4 h-4 stroke-[1.5]" />
            <span className="font-sans text-xs font-bold uppercase tracking-widest">Filter Archives</span>
          </div>
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${isActive
                    ? 'bg-royal-gold text-deep-violet border-royal-gold shadow-md'
                    : 'bg-white/40 dark:bg-black/10 border border-gray-200 dark:border-royal-gold/10 text-gray-600 dark:text-gray-400 hover:border-royal-gold'
                  }`}
              >
                {cat === 'All' ? 'All Works' : cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* Grid Cases */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 w-full mb-28">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">

            {(activeCategory === 'All' || activeCategory === 'Creative Design') && (
              <>
                {CREATIVE_DESIGN_IMAGES.slice(0, 5).map((img, idx) => {
                  const proj = createProjectFromGalleryImage(img, idx);
                  return (
                    <motion.div
                      layout
                      key={img.id}
                      initial={{ opacity: 0, y: 25 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                      className="group relative rounded-[28px] border border-royal-gold/15 bg-white/60 dark:bg-zinc-950/20 shadow-2xl overflow-hidden cursor-pointer text-left flex flex-col justify-between"
                      onClick={() => setSelectedProject(proj)}
                    >
                      <div className="relative aspect-video w-full overflow-hidden select-none shrink-0">
                        <img
                          src={proj.image}
                          alt={proj.title}
                          referrerPolicy="no-referrer"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-midnight-royal/60 via-transparent to-transparent opacity-85 group-hover:opacity-70 transition-opacity" />

                        <div className="absolute top-4 left-4 flex gap-2">
                          <span className="font-sans text-[9px] font-bold tracking-widest uppercase bg-midnight-royal text-royal-gold px-3 py-1.5 rounded-full border border-royal-gold/25 shadow-lg">
                            {proj.tag}
                          </span>
                        </div>
                      </div>

                      {/* Info block */}
                      <div className="p-8 space-y-4 flex-grow flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start gap-3">
                            <div>
                              <span className="font-sans text-[10px] text-royal-gold font-bold uppercase tracking-wider block">
                                {proj.category}
                              </span>
                              <h3 className="font-display text-2xl font-black text-gray-950 dark:text-gilded-ivory mt-1 group-hover:text-royal-gold transition-colors">
                                {proj.title}
                              </h3>
                            </div>
                            <div className="p-2.5 bg-royal-gold/10 rounded-full text-royal-gold group-hover:bg-royal-gold group-hover:text-deep-violet transition-colors duration-300 shrink-0">
                              <ArrowUpRight className="w-4 h-4" />
                            </div>
                          </div>

                          <p className="font-sans text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2 mt-4">
                            {proj.description}
                          </p>
                        </div>

                        <div className="flex justify-between items-center text-[10px] font-sans text-gray-400 pt-5 border-t border-royal-gold/10 mt-auto">
                          <span className="font-semibold text-royal-gold/80 uppercase tracking-wider">Client: {proj.client}</span>
                          <span>Year: {proj.year}</span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}

                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-1 md:col-span-2 lg:col-span-3 mt-8 flex justify-center"
                >
                  <button
                    onClick={() => onNavigateToPage('creative-design-gallery')}
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-midnight-royal/5 dark:bg-white/5 hover:bg-royal-gold hover:text-deep-violet border border-royal-gold/20 text-gray-900 dark:text-gilded-ivory font-sans text-sm font-bold uppercase tracking-widest transition-all duration-300 shadow-lg"
                  >
                    View All 36 Designs <ArrowUpRight className="w-4 h-4" />
                  </button>
                </motion.div>
              </>
            )}

            {(activeCategory === 'All' || activeCategory === 'Book Designs') && (
              <>
                {BOOK_DESIGN_IMAGES.slice(0, 5).map((img, idx) => {
                  const proj = createProjectFromBookImage(img, idx);
                  return (
                    <motion.div
                      layout
                      key={img.id}
                      initial={{ opacity: 0, y: 25 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                      className="group relative rounded-[28px] border border-royal-gold/15 bg-white/60 dark:bg-zinc-950/20 shadow-2xl overflow-hidden cursor-pointer text-left flex flex-col justify-between"
                      onClick={() => setSelectedProject(proj)}
                    >
                      <div className="relative aspect-video w-full overflow-hidden select-none shrink-0">
                        <img
                          src={proj.image}
                          alt={proj.title}
                          referrerPolicy="no-referrer"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-midnight-royal/60 via-transparent to-transparent opacity-85 group-hover:opacity-70 transition-opacity" />

                        <div className="absolute top-4 left-4 flex gap-2">
                          <span className="font-sans text-[9px] font-bold tracking-widest uppercase bg-midnight-royal text-royal-gold px-3 py-1.5 rounded-full border border-royal-gold/25 shadow-lg">
                            {proj.tag}
                          </span>
                        </div>
                      </div>

                      {/* Info block */}
                      <div className="p-8 space-y-4 flex-grow flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start gap-3">
                            <div>
                              <span className="font-sans text-[10px] text-royal-gold font-bold uppercase tracking-wider block">
                                {proj.category}
                              </span>
                              <h3 className="font-display text-2xl font-black text-gray-950 dark:text-gilded-ivory mt-1 group-hover:text-royal-gold transition-colors">
                                {proj.title}
                              </h3>
                            </div>
                            <div className="p-2.5 bg-royal-gold/10 rounded-full text-royal-gold group-hover:bg-royal-gold group-hover:text-deep-violet transition-colors duration-300 shrink-0">
                              <ArrowUpRight className="w-4 h-4" />
                            </div>
                          </div>

                          <p className="font-sans text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2 mt-4">
                            {proj.description}
                          </p>
                        </div>

                        <div className="flex justify-between items-center text-[10px] font-sans text-gray-400 pt-5 border-t border-royal-gold/10 mt-auto">
                          <span className="font-semibold text-royal-gold/80 uppercase tracking-wider">Client: {proj.client}</span>
                          <span>Year: {proj.year}</span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}

                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-1 md:col-span-2 lg:col-span-3 mt-8 flex justify-center"
                >
                  <button
                    onClick={() => onNavigateToPage('book-design-gallery')}
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-midnight-royal/5 dark:bg-white/5 hover:bg-royal-gold hover:text-deep-violet border border-royal-gold/20 text-gray-900 dark:text-gilded-ivory font-sans text-sm font-bold uppercase tracking-widest transition-all duration-300 shadow-lg"
                  >
                    View All 11 Designs <ArrowUpRight className="w-4 h-4" />
                  </button>
                </motion.div>
              </>
            )}

            {(activeCategory === 'All' || activeCategory === 'Social Media Designs') && (
              <>
                {SOCIAL_MEDIA_IMAGES.slice(0, 5).map((img, idx) => {
                  const proj = createProjectFromSocialImage(img, idx);
                  return (
                    <motion.div
                      layout
                      key={img.id}
                      initial={{ opacity: 0, y: 25 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                      className="group relative rounded-[28px] border border-royal-gold/15 bg-white/60 dark:bg-zinc-950/20 shadow-2xl overflow-hidden cursor-pointer text-left flex flex-col justify-between"
                      onClick={() => setSelectedProject(proj)}
                    >
                      <div className="relative aspect-video w-full overflow-hidden select-none shrink-0">
                        <img
                          src={proj.image}
                          alt={proj.title}
                          referrerPolicy="no-referrer"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-midnight-royal/60 via-transparent to-transparent opacity-85 group-hover:opacity-70 transition-opacity" />

                        <div className="absolute top-4 left-4 flex gap-2">
                          <span className="font-sans text-[9px] font-bold tracking-widest uppercase bg-midnight-royal text-royal-gold px-3 py-1.5 rounded-full border border-royal-gold/25 shadow-lg">
                            {proj.tag}
                          </span>
                        </div>
                      </div>

                      {/* Info block */}
                      <div className="p-8 space-y-4 flex-grow flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start gap-3">
                            <div>
                              <span className="font-sans text-[10px] text-royal-gold font-bold uppercase tracking-wider block">
                                {proj.category}
                              </span>
                              <h3 className="font-display text-2xl font-black text-gray-950 dark:text-gilded-ivory mt-1 group-hover:text-royal-gold transition-colors">
                                {proj.title}
                              </h3>
                            </div>
                            <div className="p-2.5 bg-royal-gold/10 rounded-full text-royal-gold group-hover:bg-royal-gold group-hover:text-deep-violet transition-colors duration-300 shrink-0">
                              <ArrowUpRight className="w-4 h-4" />
                            </div>
                          </div>

                          <p className="font-sans text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2 mt-4">
                            {proj.description}
                          </p>
                        </div>

                        <div className="flex justify-between items-center text-[10px] font-sans text-gray-400 pt-5 border-t border-royal-gold/10 mt-auto">
                          <span className="font-semibold text-royal-gold/80 uppercase tracking-wider">Client: {proj.client}</span>
                          <span>Year: {proj.year}</span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}

                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-1 md:col-span-2 lg:col-span-3 mt-8 flex justify-center"
                >
                  <button
                    onClick={() => onNavigateToPage('social-media-gallery')}
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-midnight-royal/5 dark:bg-white/5 hover:bg-royal-gold hover:text-deep-violet border border-royal-gold/20 text-gray-900 dark:text-gilded-ivory font-sans text-sm font-bold uppercase tracking-widest transition-all duration-300 shadow-lg"
                  >
                    View All 11 Designs <ArrowUpRight className="w-4 h-4" />
                  </button>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </motion.div>
      </section>

    </div>
  );
}
