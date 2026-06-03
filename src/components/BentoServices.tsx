/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Palette, Globe, Share2, Mail, Brush, Send, ArrowRight, Sparkles, CheckCircle2, Clock, Map } from 'lucide-react';
import { Service } from '../types';
import { SERVICES } from '../data';

export default function BentoServices() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const getIcon = (name: string, className = "w-8 h-8") => {
    switch (name) {
      case 'Palette': return <Palette className={className} />;
      case 'Globe': return <Globe className={className} />;
      case 'Share2': return <Share2 className={className} />;
      case 'Mail': return <Mail className={className} />;
      default: return <Palette className={className} />;
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-12 bg-white dark:bg-midnight-royal">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex px-4 py-1.5 rounded-full bg-royal-gold/10 border border-royal-gold/25 text-royal-gold text-[10px] md:text-xs font-semibold uppercase tracking-widest"
          >
            Digital Armament
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl sm:text-5xl font-black text-gray-900 dark:text-gilded-ivory"
            id="services-header"
          >
            The Royal Arsenal
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans text-base max-w-xl mx-auto text-gray-600 dark:text-gray-400"
            id="services-desc"
          >
            Comprehensive digital solutions designed to elevate your market position and solidify your dominance.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto md:auto-rows-[280px]">
          
          {/* Card 1: Graphic Design - 8 Cols */}
          <motion.button
            whileHover={{ y: -6 }}
            onClick={() => setSelectedService(SERVICES[0])}
            className="text-left md:col-span-8 rounded-3xl p-8 border border-royal-gold/25 bg-gilded-ivory dark:bg-midnight-royal/40 relative overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
            id="service-card-graphics"
          >
            <div className="relative z-10 h-full flex flex-col justify-between space-y-8 md:space-y-0 text-left">
              <div className="p-3 bg-royal-gold/10 rounded-2xl w-fit text-royal-gold">
                {getIcon('Palette', 'w-8 h-8')}
              </div>
              <div className="space-y-2 mt-4">
                <span className="font-sans text-[10px] uppercase font-bold text-royal-gold tracking-widest">{SERVICES[0].badge}</span>
                <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-gilded-ivory">{SERVICES[0].title}</h3>
                <p className="font-sans text-sm text-gray-600 dark:text-gray-400 max-w-md">{SERVICES[0].description}</p>
              </div>
            </div>
            {/* Massive background drawing brush icon */}
            <div className="absolute top-2 right-2 p-8 opacity-[0.03] dark:opacity-[0.05] group-hover:opacity-10 dark:group-hover:opacity-[0.14] transition-opacity duration-300 text-royal-gold pointer-events-none">
              <Brush className="w-56 h-56" />
            </div>
          </motion.button>

          {/* Card 2: Web Dev - 4 Cols (Deep Violet layout) */}
          <motion.button
            whileHover={{ y: -6 }}
            onClick={() => setSelectedService(SERVICES[1])}
            className="text-left md:col-span-4 rounded-3xl p-8 border border-royal-gold/20 bg-deep-violet/95 dark:bg-deep-violet text-gilded-ivory relative overflow-hidden group cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300"
            id="service-card-web"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10 opacity-60" />
            <div className="relative z-10 h-full flex flex-col justify-between space-y-8 md:space-y-0 text-left">
              <div className="p-3 bg-royal-gold/20 rounded-2xl w-fit text-royal-gold">
                {getIcon('Globe', 'w-8 h-8 text-royal-gold')}
              </div>
              <div className="space-y-2">
                <span className="font-sans text-[10px] uppercase font-bold text-royal-gold tracking-widest">{SERVICES[1].badge}</span>
                <h3 className="font-display text-2xl font-bold text-gilded-ivory">{SERVICES[1].title}</h3>
                <p className="font-sans text-sm text-gilded-ivory/80">{SERVICES[1].description}</p>
              </div>
            </div>
          </motion.button>

          {/* Card 3: Social - 4 Cols (Sleek light gray / Dark subtle) */}
          <motion.button
            whileHover={{ y: -6 }}
            onClick={() => setSelectedService(SERVICES[2])}
            className="text-left md:col-span-4 rounded-3xl p-8 border border-royal-gold/20 bg-gray-50 dark:bg-white/5 relative overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
            id="service-card-social"
          >
            <div className="relative z-10 h-full flex flex-col justify-between space-y-8 md:space-y-0 text-left">
              <div className="p-3 bg-royal-gold/10 rounded-2xl w-fit text-royal-gold">
                {getIcon('Share2', 'w-8 h-8')}
              </div>
              <div className="space-y-2">
                <span className="font-sans text-[10px] uppercase font-bold text-royal-gold tracking-widest">{SERVICES[2].badge}</span>
                <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-gilded-ivory">{SERVICES[2].title}</h3>
                <p className="font-sans text-sm text-gray-600 dark:text-gray-400">{SERVICES[2].description}</p>
              </div>
            </div>
          </motion.button>

          {/* Card 4: Email Marketing - 8 Cols (Royal Gold, Deep Violet text) */}
          <motion.button
            whileHover={{ y: -6 }}
            onClick={() => setSelectedService(SERVICES[3])}
            className="text-left md:col-span-8 rounded-3xl p-8 border border-royal-gold/20 bg-royal-gold text-deep-violet relative overflow-hidden group cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300"
            id="service-card-email"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-black/5 via-transparent to-white/10 opacity-40 animate-pulse pointer-events-none" />
            <div className="relative z-10 h-full flex flex-col justify-between space-y-8 md:space-y-0 text-left">
              <div className="p-3 bg-deep-violet/10 rounded-2xl w-fit text-deep-violet">
                {getIcon('Mail', 'w-8 h-8')}
              </div>
              <div className="space-y-2 mt-4">
                <span className="font-sans text-[10px] uppercase font-bold text-deep-violet/80 tracking-widest">{SERVICES[3].badge}</span>
                <h3 className="font-display text-2xl font-black text-deep-violet">{SERVICES[3].title}</h3>
                <p className="font-sans text-sm text-deep-violet/90 max-w-md font-medium">{SERVICES[3].description}</p>
              </div>
            </div>
            {/* Massive background send airplane icon */}
            <div className="absolute -bottom-10 -right-10 opacity-15 group-hover:scale-110 group-hover:translate-x-1 duration-700 transition-all text-deep-violet pointer-events-none">
              <Send className="w-56 h-56" />
            </div>
          </motion.button>

        </div>

        {/* Detailed Slider Overlay when selected */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="w-full max-w-2xl rounded-3xl bg-white dark:bg-midnight-royal p-6 md:p-8 border border-royal-gold/40 shadow-full relative max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 cursor-pointer"
                  id="bento-modal-close"
                >
                  ✕
                </button>

                {/* Badge & Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-royal-gold/15 rounded-xl text-royal-gold">
                    {getIcon(selectedService.icon, "w-6 h-6")}
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-black text-royal-gold tracking-widest">{selectedService.badge}</span>
                    <h3 className="font-display text-3xl font-black text-gray-900 dark:text-gilded-ivory">{selectedService.title}</h3>
                  </div>
                </div>

                {/* Sub-description */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 text-base leading-relaxed font-sans">
                  {selectedService.longDescription}
                </p>

                {/* Deliverables Matrix */}
                <div className="space-y-4 mb-6">
                  <h4 className="font-display text-lg font-bold text-royal-gold flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-royal-gold" />
                    Sovereign Deliverables
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedService.deliverables.map((item, idx) => (
                      <div key={idx} className="flex gap-2.5 items-start p-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-royal-gold/10">
                        <CheckCircle2 className="w-4.5 h-4.5 text-royal-gold shrink-0 mt-0.5" />
                        <span className="text-xs text-gray-700 dark:text-gray-300 leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Method & Timeline footer in modal */}
                <div className="pt-6 border-t border-royal-gold/20 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-sans">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-royal-gold" />
                    <div>
                      <span className="text-[10px] uppercase tracking-wider block text-gray-400">Timeline expectation</span>
                      <strong className="text-gray-900 dark:text-gilded-ivory">{selectedService.timeline}</strong>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Map className="w-5 h-5 text-royal-gold" />
                    <div>
                      <span className="text-[10px] uppercase tracking-wider block text-gray-400">Artisan Methodology</span>
                      <p className="text-xs font-semibold text-gray-900 dark:text-gilded-ivory leading-tight">{selectedService.methodology}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
