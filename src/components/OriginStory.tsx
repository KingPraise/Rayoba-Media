/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Shield, Sun, Sparkles, BookOpen, Quote, X, Crown } from 'lucide-react';

export default function OriginStory() {
  const [activeTab, setActiveTab] = useState<'none' | 'ray' | 'oba'>('none');

  const logoUrl = 'https://lh3.googleusercontent.com/aida-public/AB6AXuACnOZOoW6wmJpLQmCWkN3BBRPXLkOm0qm0XlxCox0gUZpexlFDizTA1Z4OceMxj7UfLF98cSLs94cnQ3kgdc3ADrREcOzrZ8NucGUIzRgcGUlPOhdea4N8eydmmiNlYfyzRwoV1nOpIiz55fIAb3gkj0Jhb-oBNlaWSduyD52MWbscqTlbH0qEawlBHV7Jj6vBeeSRf1rqwPtFsG7APAkGjX-yYyyWYcAVtYX98GhfHia8t49STrpcgxGhF21hAVAkj1D_muZUHn8';

  return (
    <section
      id="origin-story"
      className="relative py-24 md:py-32 bg-gray-50 dark:bg-black/40 border-y border-royal-gold/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Block: Interactive 3D Brand Mark Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative w-full max-w-md aspect-square rounded-3xl p-6 md:p-8 bg-white dark:bg-midnight-royal/90 border border-royal-gold/20 shadow-2xl flex flex-col justify-center items-center overflow-hidden group"
              id="brand-mark-card-outer"
            >
              {/* Soft ambient aura */}
              <div className="absolute inset-0 bg-gradient-to-tr from-royal-gold/5 via-transparent to-deep-violet/10 opacity-60 group-hover:opacity-100 transition-opacity" />
              
              {/* Spinning star accent in background */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                className="absolute -top-12 -right-12 text-royal-gold/10 pointer-events-none"
              >
                <Sparkles className="w-48 h-48" />
              </motion.div>

              {/* The majestic logo of Rayoba */}
              <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
                <img
                  src={logoUrl}
                  alt="Rayoba Creatives Royal Sovereign Seal"
                  referrerPolicy="no-referrer"
                  className="max-h-[220px] md:max-h-[260px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                  id="origin-logo-img"
                />
              </div>

              {/* Decorative brand foundation note */}
              <div className="absolute bottom-4 left-0 right-0 text-center z-10">
                <span className="font-sans text-[10px] md:text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-widest bg-gray-100/80 dark:bg-gray-800/80 px-3 py-1 rounded-full border border-royal-gold/10">
                  Rayoba Sovereign Emblem
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Block: Narrative and Text Details */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 text-left">
            <div className="inline-flex self-start px-4 py-1 rounded-full bg-royal-gold/10 border border-royal-gold/20">
              <span className="font-sans text-xs text-royal-gold font-semibold tracking-widest uppercase">
                ORIGIN STORY
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl font-black text-gray-900 dark:text-gilded-ivory" id="origin-heading">
              The Birth of Rayoba
            </h2>

            <div className="space-y-6 text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-sans">
              <p>
                Derived from the convergence of{' '}
                <button
                  onClick={() => setActiveTab(activeTab === 'ray' ? 'none' : 'ray')}
                  className="font-bold text-royal-gold border-b border-dashed border-royal-gold hover:bg-royal-gold/10 px-1 rounded transition-colors cursor-pointer"
                  title="Click to reveal Light significance"
                >
                  Ray (Light)
                </button>{' '}
                and{' '}
                <button
                  onClick={() => setActiveTab(activeTab === 'oba' ? 'none' : 'oba')}
                  className="font-bold text-royal-gold border-b border-dashed border-royal-gold hover:bg-royal-gold/10 px-1 rounded transition-colors cursor-pointer"
                  title="Click to reveal King significance"
                >
                  Oba (King in Yoruba)
                </button>
                , Rayoba Creatives represents the divine clarity and sovereign authority every brand deserves.
              </p>

              <p>
                We believe that marketing isn't just about visibility; it's about{' '}
                <span className="italic font-serif text-gray-900 dark:text-gilded-ivory">ascension</span>. 
                Our editorial-first approach ensures that your brand story is told with the precision of a master strategist and the flair of a royal court.
              </p>
            </div>

            {/* Interactive Badge Details */}
            <AnimatePresence mode="wait">
              {activeTab !== 'none' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-5 rounded-2xl bg-royal-gold/10 border border-royal-gold/25 relative overflow-hidden"
                >
                  <button
                    onClick={() => setActiveTab('none')}
                    className="absolute top-2 right-2 text-royal-gold hover:text-royal-gold/80"
                    title="Close info"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  
                  {activeTab === 'ray' ? (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-royal-gold font-bold font-display">
                        <Sun className="w-5 h-5 text-royal-gold" />
                        <span>Ray — The Principle of Absolute Clarity</span>
                      </div>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        In branding, 'Ray' is the ultimate spotlight. It represents cutting through noise, highlighting unique core competencies, and guiding potential high-tier customers out of dark markets into absolute clarity. We do not hide; we illuminate.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-royal-gold font-bold font-display">
                        <Crown className="w-5 h-5 text-royal-gold" />
                        <span>Oba — The Standard of Sovereign Dominance</span>
                      </div>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        'Oba' is a King or Ruler in Yoruba culture, commanding absolute respect, heritage, and administrative stewardship. We treat your organization as a sovereign institution, crafting designs that don't plea for attention, but naturally command respect.
                      </p>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex items-center gap-4 text-royal-gold">
              <span className="h-px w-12 bg-royal-gold"></span>
              <span className="font-sans text-xs md:text-sm font-semibold tracking-widest uppercase">
                ESTABLISHED IN EXCELLENCE
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

