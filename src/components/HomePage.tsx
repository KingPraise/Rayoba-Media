/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import Hero from './Hero';
import OriginalOriginStory from './OriginStory';
import { SERVICES, PROJECTS } from '../data';
import { Palette, Globe, Share2, Mail, ArrowRight, Shield, Sparkles, Award } from 'lucide-react';
import LegacyPlanner from './LegacyPlanner';
import TestimonialSection from './TestimonialSection';
import TrustedByMarquee from './TrustedByMarquee';

interface HomePageProps {
  onNavigateToPage: (page: 'home' | 'about' | 'services' | 'portfolio' | 'creative-design-gallery' | 'book-design-gallery' | 'social-media-gallery' | 'contact') => void;
}

const ICON_MAP: Record<string, any> = {
  Palette,
  Globe,
  Share2,
  Mail
};

export default function HomePage({ onNavigateToPage }: HomePageProps) {

  const handleScrollToSection = (id: string) => {
    // If we want to scroll to sections on the homepage
    if (id === 'portfolio') {
      onNavigateToPage('portfolio');
    } else if (id === 'builder-section') {
      const el = document.getElementById('builder-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (id === 'origin-story') {
      onNavigateToPage('about');
    }
  };

  const handleOpenPlanner = () => {
    onNavigateToPage('contact');
  };

  return (
    <div className="w-full">
      {/* Immersive interactive hero background */}
      <Hero
        onScrollToSection={handleScrollToSection}
        onOpenPlanner={handleOpenPlanner}
      />

      {/* Elegant Quick Bio summary banner */}
      <motion.section
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="py-20 bg-gray-100/40 dark:bg-black/20 border-y border-royal-gold/10 text-left"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="font-sans text-xs text-royal-gold font-semibold uppercase tracking-widest">Our Vision</span>
              <h2 className="font-display text-2xl md:text-3.5xl font-black text-gray-950 dark:text-gilded-ivory max-w-2xl leading-tight">
                Derived from absolute light & sovereign authority, we help your brand rise.
              </h2>
              <p className="font-sans text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-xl">
                We believe that premium services require uncompromised visual systems. Every custom digital showroom, crest, and grid we assemble is geared for high-performance scale and undeniable prestige.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onNavigateToPage('about')}
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-royal-gold text-royal-gold text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-royal-gold/5 active:bg-royal-gold/10 transition-all cursor-pointer group"
              >
                <span>Read Our Legend</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Featured Service Departments Cards Grid teaser */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 text-left">
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-sans text-xs text-royal-gold font-semibold uppercase tracking-widest">Bespoke Offerings</span>
            <h2 className="font-display text-3xl md:text-4.5xl font-black text-gray-950 dark:text-gilded-ivory mt-2">
              The Departments of Rayoba
            </h2>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onClick={() => onNavigateToPage('services')}
            className="inline-flex items-center gap-1 text-royal-gold text-xs md:text-sm font-bold uppercase tracking-wider hover:underline"
          >
            <span>Explore All Departments</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.slice(0, 4).map((srv, index) => {
            const IconComp = ICON_MAP[srv.icon] || Palette;
            return (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                whileHover={{ scale: 1.03, y: -4 }}
                onClick={() => onNavigateToPage('services')}
                className="p-6 rounded-2xl border border-royal-gold/15 bg-white/40 dark:bg-zinc-950/20 hover:border-royal-gold/40 transition-all duration-300 group cursor-pointer flex flex-col justify-between min-h-[220px]"
              >
                <div className="space-y-4">
                  <div className="p-3 bg-royal-gold/10 text-royal-gold rounded-xl w-fit group-hover:bg-royal-gold group-hover:text-deep-violet transition-colors">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-gray-950 dark:text-gilded-ivory group-hover:text-royal-gold transition-colors">
                    {srv.title}
                  </h3>
                  <p className="font-sans text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3">
                    {srv.description}
                  </p>
                </div>
                <div className="pt-4 flex items-center gap-1.5 text-[10px] uppercase font-bold text-royal-gold opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Open Spec</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Selected Case Studies showcase preview */}
      <section className="py-24 bg-gray-100/40 dark:bg-black/20 border-y border-royal-gold/10 text-left">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-sans text-xs text-royal-gold font-semibold uppercase tracking-widest">Select Chronicles</span>
              <h2 className="font-display text-3xl md:text-4.5xl font-black text-gray-950 dark:text-gilded-ivory mt-2">
                Featured Case Studies
              </h2>
            </motion.div>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onClick={() => onNavigateToPage('portfolio')}
              className="inline-flex items-center gap-1 text-royal-gold text-xs md:text-sm font-bold uppercase tracking-wider hover:underline"
            >
              <span>Browse Full Archives</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {PROJECTS.slice(0, 2).map((proj, idx) => (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                whileHover={{ scale: 1.015 }}
                onClick={() => onNavigateToPage('portfolio')}
                className="group rounded-3xl border border-royal-gold/10 bg-white dark:bg-midnight-royal/90 overflow-hidden cursor-pointer shadow-xl max-w-full transition-all duration-300"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight-royal/50 to-transparent opacity-80" />
                </div>
                <div className="p-8 space-y-3">
                  <span className="font-sans text-[10px] text-royal-gold font-bold uppercase tracking-wider">
                    {proj.category}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-black text-gray-950 dark:text-gilded-ivory group-hover:text-royal-gold transition-colors">
                    {proj.title}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
                    {proj.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Block */}
      <TestimonialSection />

      <TrustedByMarquee />

      {/* The majestic interactive Custom stature builder/Legacy planner */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8 }}
        className="py-24"
        id="builder-section"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <LegacyPlanner />
        </div>
      </motion.section>

    </div>
  );
}
