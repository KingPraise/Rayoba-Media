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

// Motion showcase reels data
interface MotionReel {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

const MOTION_REELS: MotionReel[] = [
  {
    id: 'watch-reel',
    title: 'Precision Horology',
    description: 'A close-up cinematic capture of a custom luxury timepiece assembly by our master artisan colleagues in Switzerland.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuqpF1lo9-L-ZSKnOmW5b_Dx2HKVZkf36uVUWBTjGfhK29mNEeqEHQQAAabrPfww421r7ftdYg-WiXJtFJBQCqPLa0W4yWmaYRNs8FHG97RQkWPE56TitxjIDaloewHPiZJubd4IsHQOSf56Yfq9msWrfTCaqQxeljAcVkASIjEGtz_XxIWYtoPOKTNfapb9OO3dOcLOWtyV_BtUMP3rAO72KMJ0kK-ZOssWegx0jLGszEkWJpNs0MdLLdOSefH383fsTyL3SM6EU',
    category: 'Watch Reel'
  },
  {
    id: 'studio-reel',
    title: 'The Production Sanctuary',
    description: 'An immersive view inside our professional photography/film studios depicting our advanced gimbal rigs and soft lighting layouts.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjvzJt1y1NFdY7_8GDcNZJBG6RFvYH-EyClp6-8mfVDov1SRJ49EM7BqRkb5bwisQjyXHQZ4ZxM-wFfrPzXW0LUpuPxGqIWxaxYPcC5bzXgFzAM6YRQkbxz2Wd3HaSHK84oITB7ieVdnYOzI8Xf20waLJdQ8UnfSE0btFKJqcZMPyx-V-fDjYzqjuGb5MZ0bkhLOjaJeWdQRwAp8MDW42Jmh_i8bwLNA4K3wKt_tSDjI5b7fLlzICTx6wg-f11up7khtY4Cf6-zWc',
    category: 'Production Reel'
  },
  {
    id: 'cinema-reel',
    title: 'The Gilded Projector',
    description: 'A wide-angle cinema setup depicting standard editorial screening rays highlighting dust particles in dramatic twilight atmosphere.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHByxcoTEUaRKmheh3t_FlVtjXLC4gdjx6MR-w7vST2oBGfWW-oRLBEjlTbq1nUlrfJpPtykWE80iAUNnYGW9fFAQghNbtAC5kNv61L0DiG3WcbTA1rKSCLQl7w_lLFkhFFb-Mr7NfxU56iXs224ofbzbSWtCyWOftlfAqyStELSNZKocWolmAP3SsgQYSuOP5kegiIxmmauvdAokJ4FvEbJVsY2GVvwZgQPyajQHd_NmhLgZwKhoWTsrlSce8AhLDkYUVWcL3fGw',
    category: 'Cinema Reel'
  },
  {
    id: 'villa-reel',
    title: 'The High-Prestige Domain',
    description: 'A wide aerial drone capture of a desert architectural villa glowing dynamically against a deep cosmic dusk canvas.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6e44GMLlYFNNLHyHTx1PJIiKJxNOK93qD6DybC3Z6BVIK94LhJhNgEtmaO4j1RUV4SMAmYaNid5ZxRNJqUVMa5hzgv5O-ZJOaehRaSoV5MTdx4sWb9svF7wksoMj-9mTDxVWgFOnpqnwpENNAE9jgKRCe20gsHfwnjDVWDzXP9joCsDAIrHBnm1ZE7l6ORpIEhAD3pkppC_uBD3vNp9WWtUGaqTfUuphenVIY3rshF4gTpv_SempJU8DhtrrBwadBUsKe8eHwnyA',
    category: 'Lifestyle'
  }
];


interface Props {
  onNavigateToPage: (page: 'home' | 'about' | 'services' | 'portfolio' | 'creative-design-gallery' | 'book-design-gallery' | 'social-media-gallery' | 'contact') => void;
}

export default function PortfolioPage({ onNavigateToPage }: Props) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeReel, setActiveReel] = useState<MotionReel | null>(null);

  const categories = ['All', 'Branding', 'Digital Creative', 'Creative Design', 'Book Designs', 'Social Media Designs', 'Editorial', 'Cinematography', 'Strategy'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  // Mouse tilt offsets for interactive cards
  const [tiltElements, setTiltElements] = useState<Record<string, { rotateX: number; rotateY: number }>>({});

  const handleCardMouseMove = (id: string, e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Limits degrees range
    const rotateX = (centerY - y) / 15;
    const rotateY = (x - centerX) / 15;

    setTiltElements(prev => ({
      ...prev,
      [id]: { rotateX, rotateY }
    }));
  };

  const handleCardMouseLeave = (id: string) => {
    setTiltElements(prev => ({
      ...prev,
      [id]: { rotateX: 0, rotateY: 0 }
    }));
  };

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
            {activeCategory !== 'Creative Design' && activeCategory !== 'Book Designs' && activeCategory !== 'Social Media Designs' &&
              filteredProjects.map((proj) => {
                const tilt = tiltElements[proj.id] || { rotateX: 0, rotateY: 0 };
                return (
                  <motion.div
                    layout
                    key={proj.id}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    onMouseMove={(e) => handleCardMouseMove(proj.id, e)}
                    onMouseLeave={() => handleCardMouseLeave(proj.id)}
                    style={{
                      transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
                      transformStyle: 'preserve-3d',
                      transition: 'transform 0.15s ease-out'
                    }}
                    className="group relative rounded-[28px] border border-royal-gold/15 bg-white/60 dark:bg-zinc-950/20 shadow-2xl overflow-hidden cursor-pointer text-left flex flex-col justify-between"
                    onClick={() => setSelectedProject(proj)}
                  >
                    {/* Visual Image container */}
                    <div className="relative aspect-video w-full overflow-hidden select-none">
                      <img
                        src={proj.image}
                        alt={proj.title}
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-midnight-royal/60 via-transparent to-transparent opacity-85 group-hover:opacity-70 transition-opacity" />

                      {/* Absolute positioning tags */}
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="font-sans text-[9px] font-bold tracking-widest uppercase bg-midnight-royal text-royal-gold px-3 py-1.5 rounded-full border border-royal-gold/25 shadow-lg">
                          {proj.tag}
                        </span>
                      </div>
                    </div>

                    {/* Info block */}
                    <div className="p-8 space-y-4">
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

                      <p className="font-sans text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
                        {proj.description}
                      </p>

                      <div className="flex justify-between items-center text-[10px] font-sans text-gray-400 pt-5 border-t border-royal-gold/10">
                        <span className="font-semibold text-royal-gold/80 uppercase tracking-wider">Client: {proj.client}</span>
                        <span>Year: {proj.year}</span>
                      </div>
                    </div>

                  </motion.div>
                );
              })
            }

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

      {/* Scrollytelling Case Study Teasers */}
      <section className="w-full relative py-12 overflow-hidden border-y border-royal-gold/10 bg-gray-100/40 dark:bg-black/20 mb-28">

        {/* Scrollytelling Section Intro Text */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-20">
          <span className="font-sans text-xs text-royal-gold font-semibold uppercase tracking-widest block mb-2">
            Dynamic Chronology
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-black text-gray-900 dark:text-gilded-ivory">
            The Scrollytelling Showcases
          </h2>
          <p className="font-sans text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-2">
            Two monolithic strategic studies built to illustrate absolute structural command.
          </p>
        </div>

        {/* Project A: Structural Excellence */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-16 min-h-screen py-12 relative z-10 border-b border-royal-gold/10">
          <div className="lg:col-span-6 text-left space-y-6">
            <span className="font-sans text-xs md:text-sm text-royal-gold font-bold uppercase tracking-widest">
              Case Study 01
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-gray-950 dark:text-gilded-ivory leading-tight">
              Structural Excellence
            </h2>
            <p className="font-sans text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-md">
              Redefining corporate identity through architectural design thinking, premium grid alignment systems, and premium visual strategy.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setSelectedProject({
                    id: 'structural-excellence',
                    title: 'Structural Excellence',
                    category: 'Strategy',
                    tag: 'STRUCTURE ARCHIVE',
                    description: 'Redefining corporate identity through architectural design thinking and premium visual strategy.',
                    longDescription: 'Collaborating with avant-garde architects, Rayoba Creatives delivered a modular branding foundation representing physical stability and technical scale. We designed high-contrast grid lines, bespoke serif layout components, and custom printed stationary that project undeniable quiet authority.',
                    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQ_QqKzTLCBAK8iZ4HLEzu7SbcMVQkkEdnuN9QuFsbbtOLpXuYCC7cZaBm0MOx8bTPSqGGorgkIcTWARdwv3ACtGqEUV2fGSeWWc5vWNzHGrWRUdnjIY0Qo80ZuIY-I7CcUC6w_IZyrNkGSq2C66muevDoZk2zE7uuy_VeWcks8bK_jmXaaG5WBtW_gSnUheTPORbY89lej8aHC5FqY_6czdVcBR8av_Ha3HVPak0xU7hsUl888ZKwxGR5Bzt_zMbC5JXWvh4qs8E',
                    deliverables: ['Custom Grid Alignment Framework', 'Textured Paper stationary Curation', 'Spatial Interactive Showrooms'],
                    objectives: ['Command immediate corporate trust.', 'Represent longevity and solid structure visually.'],
                    metrics: ['Commendation from the European Graphic Guild', 'Uncompromised stakeholder authority'],
                    client: 'Monolith Holdings',
                    year: '2025'
                  });
                }}
                className="bg-royal-gold text-deep-violet px-8 py-4.5 rounded-2xl font-sans text-xs font-bold uppercase tracking-wider hover:shadow-lg hover:shadow-royal-gold/15 active:scale-95 transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <span>View Full Case</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative flex justify-center mt-8 lg:mt-0">
            {/* Background Minimalist Inset layout */}
            <div className="absolute inset-0 z-0 opacity-15 dark:opacity-25 rounded-[36px] overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQ_QqKzTLCBAK8iZ4HLEzu7SbcMVQkkEdnuN9QuFsbbtOLpXuYCC7cZaBm0MOx8bTPSqGGorgkIcTWARdwv3ACtGqEUV2fGSeWWc5vWNzHGrWRUdnjIY0Qo80ZuIY-I7CcUC6w_IZyrNkGSq2C66muevDoZk2zE7uuy_VeWcks8bK_jmXaaG5WBtW_gSnUheTPORbY89lej8aHC5FqY_6czdVcBR8av_Ha3HVPak0xU7hsUl888ZKwxGR5Bzt_zMbC5JXWvh4qs8E"
                alt="Architectural structure"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover scale-105"
              />
            </div>

            {/* Foreground Inset Workspace Frame */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="w-4/5 aspect-[4/5] relative z-10 bg-white dark:bg-midnight-royal rounded-[32px] overflow-hidden shadow-2xl border border-royal-gold/25 select-none"
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBHbAR0o2zNQClAHciLoru2cYWWYeG_Lm0qrisR3p3h3-tGkiXRYFFJUdeQUp3XUClmSx5TGmkK_6C8PfNkrrKPCl3bv-0gGGTHhN7LiZ5R0elOI6z81jhZtTyI2ao_7auondTanq-kc89NDNIXdX1v3YXglCQ40pBsO8DesKub3B5Uwcg__BG3keow-Ycv8oTXdLi2ye6wzMugcGUfX03NqP_u7SUnEWUNVW-jDt9hyrC6zh1cLZ7SobP0PnBEZBa0a_cUSNiGuo"
                alt="Office Minimalist Workspace"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale-[0.1] hover:grayscale-0 transition-colors duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-royal/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-left">
                <span className="font-sans text-[9px] font-bold text-royal-gold uppercase tracking-widest bg-midnight-royal/85 px-3 py-1.5 rounded-full border border-royal-gold/20 inline-block shadow">
                  Case Detail 01
                </span>
                <p className="font-sans text-xs text-gilded-ivory mt-2 font-semibold">
                  Workspace Alignment for Pristine Strategic Delivery.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Project B: Digital Fortress */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-16 min-h-screen py-12 relative z-10">
          <div className="lg:col-span-6 lg:order-2 text-left lg:text-right space-y-6">
            <span className="font-sans text-xs md:text-sm text-royal-gold font-bold uppercase tracking-widest">
              Case Study 02
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-gray-950 dark:text-gilded-ivory leading-tight">
              Digital Fortress
            </h2>
            <p className="font-sans text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-md lg:ml-auto">
              Protecting the integrity and sovereign parameters of digital assets through iron-clad headless security, optimized speed metrics, and high-fidelity interface layouts.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setSelectedProject({
                    id: 'digital-fortress',
                    title: 'Digital Fortress',
                    category: 'Strategy',
                    tag: 'SECURITY ARCHIVE',
                    description: 'Protecting the integrity of brands through iron-clad security and high-fidelity design.',
                    longDescription: ' Commissioned by an international security cooperative, this flagship deployment integrates highly audited code stacks with sleek WebGL interaction overlays. Rayoba Creatives curated a dark obsidian design scheme paired with custom golden particles tracking interactive paths.',
                    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxX5sgoc8aqZ9MqdDkEZHM1ZwUg_IfA40q-JaU_2ZRfEa9FRsjebccJ5ygbIUVCNVnZkx7E479239q9uuT_2mL1x27BfKae5YDcNPJHlYMPYdbIjTBctTAF2l5MgS-j56EPcYu6cZwu8yMIfL_6DtLGEk90RCihl4P9_ncD4F1J8V8_ObMZVSwWyPD3GBLU8d1IIpi4M6DkeqSp3bdIQsUB33USBCB3TOeauAiY1ATL11SFLq5gu48Ze4I1TowREtpM4eLxSDFGqg',
                    deliverables: ['Headless React Security Layer', 'WebGL Particle Animation Engine', 'Client Access Encryption Keys'],
                    objectives: ['Defend asset parameters from brand dilution.', 'Build an elite virtual fortress containing zero latency.'],
                    metrics: ['0% Downtime under heavy international scales', 'Average client access response times: <120ms'],
                    client: 'Fortress Core Cooperative',
                    year: '2026'
                  });
                }}
                className="bg-royal-gold text-deep-violet px-8 py-4.5 rounded-2xl font-sans text-xs font-bold uppercase tracking-wider hover:shadow-lg hover:shadow-royal-gold/15 active:scale-95 transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <span>Explore Strategy</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 lg:order-1 relative flex justify-center mt-8 lg:mt-0">
            {/* Background Cyber Security Inset layout */}
            <div className="absolute inset-0 z-0 opacity-15 dark:opacity-25 rounded-[36px] overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxX5sgoc8aqZ9MqdDkEZHM1ZwUg_IfA40q-JaU_2ZRfEa9FRsjebccJ5ygbIUVCNVnZkx7E479239q9uuT_2mL1x27BfKae5YDcNPJHlYMPYdbIjTBctTAF2l5MgS-j56EPcYu6cZwu8yMIfL_6DtLGEk90RCihl4P9_ncD4F1J8V8_ObMZVSwWyPD3GBLU8d1IIpi4M6DkeqSp3bdIQsUB33USBCB3TOeauAiY1ATL11SFLq5gu48Ze4I1TowREtpM4eLxSDFGqg"
                alt="Cybersecurity Fortress"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover scale-105"
              />
            </div>

            {/* Foreground Inset Star Planet Frame */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="w-4/5 aspect-[4/5] relative z-10 bg-white/10 dark:bg-midnight-royal/60 backdrop-blur-md rounded-[32px] overflow-hidden shadow-2xl border border-royal-gold/20 select-none"
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxeQrC8j863JfMEN_h20bB_YcLtQylcEJx6yR_ODB1PkiE3ieX8hXY-Z8QmCglcqFmNp_Ia7_vE5dKu_M__01VYRp_7wABo9nwd0qs0AMK1fmPgsTFTFN0KXY_VYmejJuGCUiJrz2iomFV89-F8yPtTUTQ-4UvnCvKyuz-5QuFFwr3ArLiI6cYRXQ9t2JcZtDV6X0PlBB_x2gz3AenmFTr0xniJ2CxzxrrM_iFlR3xtYSAfkpzNJ0yhXm_zxeEGQ7kObi9cApFYaU"
                alt="Gold Network Particle Planet Node"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale-[0.1] hover:grayscale-0 transition-colors duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-royal/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-left">
                <span className="font-sans text-[9px] font-bold text-royal-gold uppercase tracking-widest bg-midnight-royal/85 px-3 py-1.5 rounded-full border border-royal-gold/20 inline-block shadow">
                  Case Detail 02
                </span>
                <p className="font-sans text-xs text-gilded-ivory mt-2 font-semibold">
                  Connected Sovereign Particle Structures and Secured Assets.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

      </section>

      {/* Video Showcase (Masonry Video Reels Grid) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 w-full mb-16 text-left">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <span className="font-sans text-xs text-royal-gold font-semibold uppercase tracking-widest block mb-2">
            Cinematic Motion Gallery
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-black text-gray-900 dark:text-gilded-ivory">
            Works in <span className="text-royal-gold italic font-serif">Motion</span>
          </h2>
          <p className="font-sans text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-2">
            Capturing the pulse and sovereign momentum of luxury properties through precise speed direction. Click any reel to summon active cinematic narration.
          </p>
        </div>

        {/* Masonry-like dynamic columns styling */}
        <div className="columns-1 md:columns-2 lg:columns-4 gap-6 space-y-6">
          {MOTION_REELS.map((reel) => (
            <div
              key={reel.id}
              onClick={() => setActiveReel(reel)}
              className="break-inside-avoid relative rounded-3xl overflow-hidden border border-royal-gold/15 group cursor-pointer shadow-xl bg-white dark:bg-zinc-950 transition-all duration-300 hover:scale-[1.02] hover:border-royal-gold/40 flex flex-col justify-end min-h-[300px]"
            >
              {/* Image element */}
              <div className="absolute inset-0 select-none">
                <img
                  src={reel.image}
                  alt={reel.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-royal/90 via-midnight-royal/30 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />
              </div>

              {/* Cover overlay indicators */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-midnight-royal/40 backdrop-blur-[2px] z-10">
                <div className="p-4 bg-royal-gold text-deep-violet rounded-full shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-300">
                  <Play className="w-6 h-6 fill-deep-violet text-deep-violet" />
                </div>
              </div>

              {/* Informational overlay tags */}
              <div className="relative z-10 p-6 space-y-2 mt-auto text-left">
                <span className="font-sans text-[9px] font-bold text-royal-gold uppercase tracking-widest block">
                  {reel.category}
                </span>
                <h4 className="font-display text-lg font-black text-gilded-ivory">
                  {reel.title}
                </h4>
                <p className="font-sans text-[11px] text-gray-300 leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {reel.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies Detailed Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>

      {/* Cinematic Playback Lightup Modal */}
      <AnimatePresence>
        {activeReel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[100] flex items-center justify-center p-4 md:p-8"
            onClick={() => setActiveReel(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ duration: 0.4 }}
              className="bg-zinc-950 border border-royal-gold/25 rounded-[32px] w-full max-w-4xl overflow-hidden shadow-2xl relative flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Backstop Frame mimicking video playback */}
              <div className="relative aspect-video w-full overflow-hidden select-none bg-black">
                <img
                  src={activeReel.image}
                  alt={activeReel.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-60 filter blur-sm absolute inset-0 scale-102"
                />

                {/* Foreground visual frame */}
                <div className="w-full h-full flex items-center justify-center p-6 relative z-10">
                  <div className="relative w-full h-full max-w-2xl max-h-[350px] rounded-2xl overflow-hidden border border-royal-gold/20 shadow-2xl">
                    <img
                      src={activeReel.image}
                      alt={activeReel.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />

                    {/* Pulsing play icon indicator in simulated player */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 bg-[gradient-to-t_from-black/30_to-transparent] z-10">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ repeat: Infinity, duration: 2.5 }}
                        className="p-5 rounded-full bg-royal-gold text-deep-violet shadow-2xl flex items-center justify-center cursor-pointer"
                        onClick={() => alert('Streaming source link in high fidelity. Our master production assets are calibrated dynamically.')}
                      >
                        <Play className="w-6 h-6 fill-deep-violet text-deep-violet" />
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Close modal */}
                <button
                  onClick={() => setActiveReel(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-midnight-royal/80 hover:bg-midnight-royal text-royal-gold border border-royal-gold/25 hover:scale-105 active:scale-95 transition-all cursor-pointer z-20 shadow-lg"
                  title="Close Showroom"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Informational description fields */}
              <div className="p-8 space-y-4 text-left bg-midnight-royal">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="font-sans text-[10px] text-royal-gold font-bold uppercase tracking-widest bg-royal-gold/10 px-2.5 py-1 rounded-full border border-royal-gold/10 inline-block">
                      {activeReel.category}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl font-black text-gilded-ivory">
                      {activeReel.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <Film className="w-4 h-4 text-royal-gold" />
                    <span>Resolution: 4K Cinematic Master</span>
                  </div>
                </div>

                <p className="font-sans text-xs md:text-sm text-gray-300 leading-relaxed max-w-2xl">
                  {activeReel.description}
                </p>

                <div className="pt-4 border-t border-royal-gold/10 flex items-center justify-between text-[11px] font-sans text-gray-500">
                  <span className="italic flex items-center gap-1 text-royal-gold font-medium">
                    <Sparkles className="w-3.5 h-3.5" /> High Direction and Speed Scoring
                  </span>
                  <span>Est. Duration: Real-time loop</span>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

