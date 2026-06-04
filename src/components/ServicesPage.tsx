/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES } from '../data';
import { 
  Palette, 
  Globe, 
  Share2, 
  Mail, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  Compass, 
  ArrowRight, 
  ChevronsDown, 
  Building2, 
  ShoppingBag, 
  Wand2, 
  Code,
  Radio,
  FileSpreadsheet
} from 'lucide-react';

interface ServicesPageProps {
  onNavigateToContact: () => void;
}

// Estimator options
interface EstimatorItem {
  id: string;
  name: string;
  category: string;
  weeks: number;
  weight: number;
  description: string;
}

const ESTIMATOR_OPTIONS: EstimatorItem[] = [
  { id: 'logo-crest', name: 'Bespoke Brand Crest & Emblem', category: 'Graphic Design', weeks: 2, weight: 1.2, description: 'Hand-crafted royal identity seals and custom logmarks.' },
  { id: 'foil-collateral', name: 'Gold-Foil Print Packaging Layouts', category: 'Graphic Design', weeks: 3, weight: 1.5, description: 'Bespoke tangible marketing and paper stationery design.' },
  { id: 'react-showroom', name: 'Interactive React-Vite Digital Flagship', category: 'Web Development', weeks: 6, weight: 3.5, description: 'A highly tuned web flagship built on high performance.' },
  { id: 'custom-webgl', name: 'Spatial Motion & WebGL Interactive Aura', category: 'Web Development', weeks: 4, weight: 2.5, description: 'Cinematic visual backdrops that react to client interaction.' },
  { id: 'grid-curation', name: 'Editorial Social Grid Curation System', category: 'Social Strategy', weeks: 3, weight: 1.8, description: '15-grid Instagram styling blueprints and high-contrast grids.' },
  { id: 'voice-copywriting', name: 'Elite Sovereign Copywriting Lexicon', category: 'Social Strategy', weeks: 2, weight: 1.2, description: 'A custom vocabulary rulesbook written in elite style.' },
  { id: 'vip-newsletter', name: 'Segmented VIP correspondence Pipelines', category: 'Email Marketing', weeks: 3, weight: 1.4, description: 'Automated newsletter cycles with premium converters.' }
];

const bentoContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    }
  }
};

const bentoCardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
  }
};

export default function ServicesPage({ onNavigateToContact }: ServicesPageProps) {
  const [selectedEstimatorIds, setSelectedEstimatorIds] = useState<string[]>(['logo-crest', 'react-showroom']);
  const [tiltElements, setTiltElements] = useState<Record<string, { rotateX: number; rotateY: number }>>({});
  const [ripples, setRipples] = useState<Array<{ id: string; cardId: string; x: number; y: number; size: number }>>([]);

  // Tactile ripple click handler
  const handleCardClick = (cardId: string, e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const size = Math.max(rect.width, rect.height) * 2;
    const newRipple = {
      id: `${cardId}-${Date.now()}-${Math.random()}`,
      cardId,
      x,
      y,
      size
    };
    setRipples(prev => [...prev, newRipple]);
  };

  // Card Mouse Tilt Interaction
  const handleCardMouseMove = (id: string, e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Subtle rotation parameters
    const rotateX = (centerY - y) / 12;
    const rotateY = (x - centerX) / 12;

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

  // Toggle estimator selections
  const toggleEstimatorItem = (id: string) => {
    setSelectedEstimatorIds(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  // Live scope metrics formulation
  const calculateMetrics = () => {
    const selectedItems = ESTIMATOR_OPTIONS.filter(opt => selectedEstimatorIds.includes(opt.id));
    if (selectedItems.length === 0) {
      return { weeks: 0, weightScore: 0, tier: 'Zero Scope', rating: 'Select options below' };
    }
    
    const peakWeeks = Math.max(...selectedItems.map(item => item.weeks));
    const incrementalWeeks = selectedItems.length > 1 
      ? (selectedItems.reduce((acc, current) => acc + current.weeks, 0) - peakWeeks) * 0.35
      : 0;
    const finalWeeksCount = Math.round(peakWeeks + incrementalWeeks);
    const totalWeight = parseFloat(selectedItems.reduce((acc, current) => acc + current.weight, 0).toFixed(1));

    let tier = 'Boutique Prestige';
    let rating = 'Focused identity and refined flagship presence.';
    if (totalWeight >= 7.0) {
      tier = 'Dynastic Legacy Domain';
      rating = 'Full-spectrum visual empire with maximum digital conquest.';
    } else if (totalWeight >= 4.0) {
      tier = 'Sovereign Hegemony';
      rating = 'Substantial presence establishing high executive industry confidence.';
    }

    return {
      weeks: finalWeeksCount,
      weightScore: totalWeight,
      tier,
      rating
    };
  };

  const metrics = calculateMetrics();

  // Scroll downwards action helper
  const scrollToCapabilities = () => {
    const el = document.getElementById('capabilities-start');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full relative min-h-screen pt-20 pb-16 overflow-x-hidden">
      
      {/* 1. Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center items-center px-6 md:px-12 text-center bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.08),_transparent_65%)] relative">
        <div className="max-w-4xl space-y-8 z-10">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-sans text-xs md:text-sm text-royal-gold font-bold tracking-[0.25em] h-fit block uppercase py-1"
          >
            The Digital Arsenal
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-display text-4xl sm:text-5xl md:text-6.5xl lg:text-7.5xl font-black text-gray-950 dark:text-gilded-ivory leading-tight"
          >
            Creative Services for the <span className="text-royal-gold italic font-serif">Digital Elite.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-sans text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            We engineer visual narratives and technical architectures that command authority. From boutique branding to enterprise-grade headless development.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
          >
            <button 
              onClick={scrollToCapabilities}
              className="bg-royal-gold text-deep-violet border border-royal-gold px-8 py-4.5 rounded-2xl font-sans text-xs font-bold uppercase tracking-wider hover:shadow-lg hover:shadow-royal-gold/20 active:scale-95 transition-all cursor-pointer"
            >
              Explore Capabilities
            </button>
            <button 
              onClick={() => {
                const estimatorEl = document.getElementById('deliverables-estimator');
                if (estimatorEl) estimatorEl.scrollIntoView({ behavior: 'smooth' });
              }}
              className="border border-royal-gold/40 text-royal-gold px-8 py-4.5 rounded-2xl font-sans text-xs font-bold uppercase tracking-wider backdrop-blur-sm hover:bg-royal-gold/5 transition-all active:scale-95 cursor-pointer"
            >
              Configure Scope Scope
            </button>
          </motion.div>
        </div>

        {/* Floating scroll indicator */}
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          onClick={scrollToCapabilities}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer text-royal-gold/70 hover:text-royal-gold flex flex-col items-center gap-2"
          title="Scroll downwards"
        >
          <span className="font-sans text-[9px] uppercase tracking-[0.2em] font-bold">Discover</span>
          <ChevronsDown className="w-5 h-5" />
        </motion.div>
      </section>

      {/* Capabilities Anchor Tag */}
      <div id="capabilities-start" className="scroll-mt-24" />

      {/* 2. Graphic Design & Branding (Identity & Visual Strategy) */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-150px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="py-28 px-6 md:px-12 bg-gray-100/30 dark:bg-midnight-royal/40 border-y border-royal-gold/10"
      >
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl text-left">
              <span className="text-royal-gold text-xs font-bold uppercase tracking-widest block mb-2">Graphic Design &amp; Branding</span>
              <h2 className="font-display text-3xl md:text-5xl font-black text-gray-950 dark:text-gilded-ivory leading-tight">
                Identity &amp; Visual Strategy
              </h2>
              <p className="font-sans text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-2">
                We don't just design logos; we build legacy. Our aesthetic is rooted in minimal luxury, classical Swiss grid alignments, and functional elegance.
              </p>
            </div>
            <div className="font-display text-4xl font-black text-royal-gold/10 uppercase tracking-widest hidden md:block select-none">
              DESIGN
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card 1: Logo & Visual Systems */}
            <motion.div 
              onMouseMove={(e) => handleCardMouseMove('logo-sys', e)}
              onMouseLeave={() => handleCardMouseLeave('logo-sys')}
              style={{
                transform: `perspective(1000px) rotateX(${tiltElements['logo-sys']?.rotateX || 0}deg) rotateY(${tiltElements['logo-sys']?.rotateY || 0}deg)`,
                transformStyle: 'preserve-3d',
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.15, ease: 'easeOut' }
              }}
              className="group relative aspect-square rounded-3xl overflow-hidden shadow-2xl border border-royal-gold/15 bg-zinc-950 cursor-pointer text-left"
            >
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPhI1-CKe2n7AcU7YSQTg8UAZSqOmiApiP3O19R8fvzd1AkUMl4NqtAG7TCDwzVAsurMGjbvw0-O2Aqox5UlO-hic14GV8bZdMrgniDkYT-CisBmlI-huz-IpelPJGPhWfJMk5Na8ZF1fUHl8f8pn957Nq2gF3YxzCjax3S9VVB9eGIPGMaI0SunU2vJwq2K1W4aQYVeSHLfb4vPyTkD-AvgLT1iLQd7wm8wVzcxqgV4pOniBVzkic8HfuBmNT-bOc5PuDgZMa4xo" 
                alt="Luxurious minimalist logo black paper" 
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-95 transition-all duration-750"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-royal/90 via-midnight-royal/30 to-transparent z-10" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 translate-y-6 group-hover:translate-y-0 transition-all duration-300 space-y-3">
                <span className="bg-royal-gold text-deep-violet px-3 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest inline-block shadow">
                  CORE SERVICE
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-black text-gilded-ivory">
                  Logo &amp; Visual Systems
                </h3>
                <p className="font-sans text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Scalable, future-proof identity systems and hand-stamped vector crests for visionary enterprises.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Investor Pitch Decks */}
            <motion.div 
              onMouseMove={(e) => handleCardMouseMove('pitch-decks', e)}
              onMouseLeave={() => handleCardMouseLeave('pitch-decks')}
              style={{
                transform: `perspective(1000px) rotateX(${tiltElements['pitch-decks']?.rotateX || 0}deg) rotateY(${tiltElements['pitch-decks']?.rotateY || 0}deg)`,
                transformStyle: 'preserve-3d',
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.15, ease: 'easeOut' }
              }}
              className="group relative aspect-square rounded-3xl overflow-hidden shadow-2xl border border-royal-gold/15 bg-zinc-950 cursor-pointer text-left"
            >
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxE9UydXtNadgDFTvkYJj82YSjgrjCPOU8uHUwPmfcWT1vnO1oO7TMfy_G9Q95p7wcs__y6VyLQCO0kyjytRSdQgRXp-Pi_3Zxhxch51rRWKTqvhrDkvcCIhI7H06ub6J45PmC4oBK93eE5iQQazVqsYC3ZFORPFYhw7x8GHPrNTdb3u3poGs59aU2kIGvwjNQbE05VDDKlOn2y-DVE6g2o86Gm8d3JvRU4k0TgLY7-sNRPxcI8s_NM3gryhbWo8OFq4u5JAanJyc" 
                alt="Elegant investor pitch deck layout tablet" 
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-95 transition-all duration-750"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-royal/90 via-midnight-royal/30 to-transparent z-10" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 translate-y-6 group-hover:translate-y-0 transition-all duration-300 space-y-3">
                <span className="bg-royal-gold text-deep-violet px-3 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest inline-block shadow">
                  STRATEGY
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-black text-gilded-ivory">
                  Investor Pitch Decks
                </h3>
                <p className="font-sans text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Sovereign strategy representations and high-stakes financial visualizations calibrated to close eight-figure rounds.
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </motion.section>

      {/* 3. Web Development Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-150px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="py-28 px-6 md:px-12 bg-white dark:bg-zinc-950 relative overflow-hidden text-gray-900 dark:text-gilded-ivory text-left border-b border-royal-gold/10"
      >
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-royal-gold/5 to-transparent pointer-events-none z-0" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="w-16 h-0.5 bg-royal-gold" />
              <div className="space-y-3">
                <span className="text-royal-gold font-sans text-xs font-bold uppercase tracking-widest block">Web Development</span>
                <h2 className="font-display text-4xl sm:text-5xl font-black leading-tight">
                  Architectural <br/>
                  <span className="text-royal-gold italic font-serif">Development</span>
                </h2>
              </div>
              <p className="font-sans text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                We build digital cathedrals. High-performance, SEO-fortified, and visually arresting web flagships engineered on elite bleeding-edge headless React stacks to yield zero visual latency.
              </p>

              {/* Modular Features List */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50/50 dark:bg-white/5 border border-royal-gold/10 hover:border-royal-gold transition-colors block">
                  <div className="p-2.5 bg-royal-gold/10 rounded-xl text-royal-gold shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-sans text-xs md:text-sm font-bold text-gray-950 dark:text-gilded-ivory">Corporate Ecosystems</h4>
                    <p className="font-sans text-xs text-gray-500 dark:text-gray-450">Professional digital hubs and secure parameters for institutional trust.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50/50 dark:bg-white/5 border border-royal-gold/10 hover:border-royal-gold transition-colors block">
                  <div className="p-2.5 bg-royal-gold/10 rounded-xl text-royal-gold shrink-0">
                    <ShoppingBag className="w-5 h-5 opacity-85" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-sans text-xs md:text-sm font-bold text-gray-950 dark:text-gilded-ivory">E-Commerce Luxury</h4>
                    <p className="font-sans text-xs text-gray-500 dark:text-gray-450">Highly calibrated storefront experiences for elite premier brands.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50/50 dark:bg-white/5 border border-royal-gold/10 hover:border-royal-gold transition-colors block">
                  <div className="p-2.5 bg-royal-gold/10 rounded-xl text-royal-gold shrink-0">
                    <Wand2 className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-sans text-xs md:text-sm font-bold text-gray-950 dark:text-gilded-ivory">Digital Revamps</h4>
                    <p className="font-sans text-xs text-gray-500 dark:text-gray-450">Modernizing aging operations and code bases with clean, rich editorial layouts.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Interactive code display */}
            <div className="lg:col-span-7">
              <div className="relative group select-none">
                <div className="absolute -inset-1 bg-gradient-to-r from-royal-gold to-deep-violet rounded-[32px] blur opacity-20 group-hover:opacity-35 transition duration-1000" />
                <div className="relative bg-[#020202] rounded-[28px] border border-royal-gold/25 overflow-hidden aspect-video shadow-2xl">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5JbWErJq9YLIC2QVFLlSF2haX99YpsNCJaSrKeGQl168qbahqm0ek989N5rorce3scTxFiuFeDyB6PSp9zdHOzc-8aJQyQAsqLXTOysBSTJyaRep08pvvNXaWVtMcyyAYMQgxlty-SWqEjML8ka0GkuAqn9cPoNMouYJWWBdrgY16yp_sXG1tSQ37_g-W9Q4ajenGr8tq5LNMfSLfh-OQibhshPFkWfhNHHI-Q4N-y8taL-RCi5li8-zN1aZHOGQbDUq2roIIE_w" 
                    alt="Cinematic dual monitor code display" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover opacity-50 scale-102 hover:scale-100 transition-all duration-750"
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <motion.div 
                      animate={{ scale: [1, 1.1, 1], rotate: [0, 360] }}
                      transition={{ 
                        scale: { repeat: Infinity, duration: 3, ease: 'easeInOut' },
                        rotate: { repeat: Infinity, duration: 15, ease: 'linear' }
                      }}
                      className="p-8 bg-zinc-950/90 border border-royal-gold text-royal-gold rounded-full shadow-2xl"
                    >
                      <Code className="w-8 h-8" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </motion.section>

      {/* 4. Social & Video (Content Kineticism) */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-150px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="py-28 px-6 md:px-12 bg-gray-100/30 dark:bg-[#070708] border-b border-royal-gold/10"
      >
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 space-y-4 max-w-2xl mx-auto">
            <span className="font-sans text-xs text-royal-gold font-semibold uppercase tracking-widest block">Video &amp; Social</span>
            <h2 className="font-display text-3xl md:text-5xl font-black text-gray-950 dark:text-gilded-ivory">
              Content Kineticism
            </h2>
            <p className="font-sans text-xs md:text-sm text-gray-500 dark:text-gray-400">
              Stop the scroll and drive absolute brand sovereignty with highly paced, cinematic short-form assets and premium voice-over structures.
            </p>
          </div>

          {/* Bento Grid layout */}
          <motion.div 
            variants={bentoContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch"
          >
            
            {/* Bento Card 1: Wide top left card */}
            <motion.div 
              variants={bentoCardVariants}
              onClick={(e) => handleCardClick('bento-vid-1', e)}
              onMouseMove={(e) => handleCardMouseMove('bento-vid-1', e)}
              onMouseLeave={() => handleCardMouseLeave('bento-vid-1')}
              style={{
                transform: `perspective(1000px) rotateX(${tiltElements['bento-vid-1']?.rotateX || 0}deg) rotateY(${tiltElements['bento-vid-1']?.rotateY || 0}deg)`,
                transformStyle: 'preserve-3d',
              }}
              whileHover={{ 
                scale: 1.025,
                transition: { duration: 0.15, ease: 'easeOut' }
              }}
              className="md:col-span-8 rounded-3xl overflow-hidden relative group border border-royal-gold/15 bg-zinc-950 shadow-xl cursor-pointer min-h-[280px] text-left flex flex-col justify-end"
            >
              <motion.img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEE0F_AeSsY6sLFXw8INsl-1N9029DouP9VUxFdO71GSNKdujj9asNFOBmJ2tlpMZ6WVcklOSWJ6La0Xfw1Qco2sQlt62cmk4bO6oT8vuRfrSRvf9CYGdmZsoahj2n1gpheygfXtyIzzvKVR8RiLXOHahmud6FdaFC9KHU78-tVwS5Tt8GX70A9jGri2avwfqzoAod4h_ANJ6JDT1EJglj9AVgFlK0Q77qtYSiJGV5wgVhNYoLrYBB3VK54j7u2fBnEtzzeDxY2vk" 
                alt="Video editing timeline suite" 
                referrerPolicy="no-referrer"
                animate={{
                  x: (tiltElements['bento-vid-1']?.rotateY || 0) * 0.85,
                  y: (tiltElements['bento-vid-1']?.rotateX || 0) * -0.85,
                }}
                transition={{ type: "spring", stiffness: 150, damping: 20 }}
                className="absolute inset-0 w-full h-full object-cover opacity-45 scale-112 origin-center" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-royal/95 via-midnight-royal/40 to-transparent z-10 pointer-events-none" />
              
              {/* Dynamic gold ripple overlay */}
              <AnimatePresence>
                {ripples.filter(r => r.cardId === 'bento-vid-1').map(r => (
                  <motion.span
                    key={r.id}
                    initial={{ scale: 0, opacity: 0.65 }}
                    animate={{ scale: 1, opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    onAnimationComplete={() => {
                      setRipples(prev => prev.filter(item => item.id !== r.id));
                    }}
                    className="absolute bg-royal-gold/30 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-30"
                    style={{
                      left: r.x,
                      top: r.y,
                      width: r.size,
                      height: r.size,
                    }}
                  />
                ))}
              </AnimatePresence>
              
              <div className="relative z-20 p-8 space-y-2 pointer-events-none select-none">
                <span className="font-sans text-[10px] text-royal-gold font-bold uppercase tracking-widest block">CREATIVE MOTION</span>
                <h3 className="font-display text-2xl font-black text-gilded-ivory">Reels &amp; Short Form</h3>
                <p className="font-sans text-xs text-gray-300 max-w-md">
                  Viral-optimized, highly curated narrative pacing that secures instant client capture and retention metrics.
                </p>
              </div>
            </motion.div>
 
            {/* Bento Card 2: Tall right card */}
            <motion.div 
              variants={bentoCardVariants}
              onClick={(e) => handleCardClick('bento-vid-2', e)}
              onMouseMove={(e) => handleCardMouseMove('bento-vid-2', e)}
              onMouseLeave={() => handleCardMouseLeave('bento-vid-2')}
              style={{
                transform: `perspective(1000px) rotateX(${tiltElements['bento-vid-2']?.rotateX || 0}deg) rotateY(${tiltElements['bento-vid-2']?.rotateY || 0}deg)`,
                transformStyle: 'preserve-3d',
              }}
              whileHover={{ 
                scale: 1.025,
                transition: { duration: 0.15, ease: 'easeOut' }
              }}
              className="md:col-span-4 md:row-span-2 rounded-3xl overflow-hidden relative group border border-royal-gold/15 bg-zinc-950 shadow-xl cursor-pointer min-h-[350px] text-left flex flex-col justify-end"
            >
              <motion.img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzqcfeau3L7RdKMW2gSf9W6XHKCeTIZH1u5Lv4TuCWFLJvPDgQFpAh101gWKMidkpalk2wHckMq2zMizQA_CJ2j9zDlleZbCl_q012c7bhY9nGH6D8nLSvcBtkgjixWxo1dEb6ji8P-UIGW7nuTH9-ZaKlXM3Kyqwcrdudb8T5iqp7YybRzGbVztnUPk9a6x4AOBxYh2DTvbXwQznLg5zgTyJ77tXAmJ95DLCOMA_Yi3gg_ZPgmHhzTaVuiBkIRU3yLP3dh_FhxJQ" 
                alt="Voice-over studio microphone" 
                referrerPolicy="no-referrer"
                animate={{
                  x: (tiltElements['bento-vid-2']?.rotateY || 0) * 0.85,
                  y: (tiltElements['bento-vid-2']?.rotateX || 0) * -0.85,
                }}
                transition={{ type: "spring", stiffness: 150, damping: 20 }}
                className="absolute inset-0 w-full h-full object-cover opacity-45 scale-112 origin-center" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-royal/95 via-midnight-royal/40 to-transparent z-10 pointer-events-none" />
              
              {/* Dynamic gold ripple overlay */}
              <AnimatePresence>
                {ripples.filter(r => r.cardId === 'bento-vid-2').map(r => (
                  <motion.span
                    key={r.id}
                    initial={{ scale: 0, opacity: 0.65 }}
                    animate={{ scale: 1, opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    onAnimationComplete={() => {
                      setRipples(prev => prev.filter(item => item.id !== r.id));
                    }}
                    className="absolute bg-royal-gold/30 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-30"
                    style={{
                      left: r.x,
                      top: r.y,
                      width: r.size,
                      height: r.size,
                    }}
                  />
                ))}
              </AnimatePresence>
              
              <div className="relative z-20 p-8 space-y-2 pointer-events-none select-none">
                <span className="font-sans text-[10px] text-royal-gold font-bold uppercase tracking-widest block">AUDITORY ART</span>
                <h3 className="font-display text-2xl font-black text-gilded-ivory">Voice-Over Production</h3>
                <p className="font-sans text-xs text-gray-300">
                  Commanding, authoritative vocal narratives delivered by prestige speakers to guide global legacy campaigns.
                </p>
              </div>
            </motion.div>
 
            {/* Bento Card 3: Wide bottom left card */}
            <motion.div 
              variants={bentoCardVariants}
              onClick={(e) => handleCardClick('bento-vid-3', e)}
              onMouseMove={(e) => handleCardMouseMove('bento-vid-3', e)}
              onMouseLeave={() => handleCardMouseLeave('bento-vid-3')}
              style={{
                transform: `perspective(1000px) rotateX(${tiltElements['bento-vid-3']?.rotateX || 0}deg) rotateY(${tiltElements['bento-vid-3']?.rotateY || 0}deg)`,
                transformStyle: 'preserve-3d',
              }}
              whileHover={{ 
                scale: 1.025,
                transition: { duration: 0.15, ease: 'easeOut' }
              }}
              className="md:col-span-8 rounded-3xl overflow-hidden relative group border border-royal-gold/15 bg-zinc-950 shadow-xl cursor-pointer min-h-[280px] text-left flex flex-col justify-end"
            >
              <motion.img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCw_U7tUEm9ZvyX1Wajjr_qxQr35eMmsRYNH7tH5cHsD7uwguO6we7b8xtwa14x1UXqPs7jAi0QJpnm8dHfmFTF5Js0WRWdVfeOTj4DY2dGB38ToIEoV9DBSV0yhAQXbwvDYCE7FzXVliOMyZa8Gaw2QqdfFMQ5jsSIqFpOYBFGQfY_pRcU_2_yTZs5-L27_iLeIzx3M-vWMzIdI_G2q1qVAkST70cqvjX3DXSh4FW16roujKKTW9DF1e2Z4UX8_NSzDl5-oC8Vzto" 
                alt="Social glass notifications render" 
                referrerPolicy="no-referrer"
                animate={{
                  x: (tiltElements['bento-vid-3']?.rotateY || 0) * 0.85,
                  y: (tiltElements['bento-vid-3']?.rotateX || 0) * -0.85,
                }}
                transition={{ type: "spring", stiffness: 150, damping: 20 }}
                className="absolute inset-0 w-full h-full object-cover opacity-45 scale-112 origin-center" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-royal/95 via-midnight-royal/40 to-transparent z-10 pointer-events-none" />
              
              {/* Dynamic gold ripple overlay */}
              <AnimatePresence>
                {ripples.filter(r => r.cardId === 'bento-vid-3').map(r => (
                  <motion.span
                    key={r.id}
                    initial={{ scale: 0, opacity: 0.65 }}
                    animate={{ scale: 1, opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    onAnimationComplete={() => {
                      setRipples(prev => prev.filter(item => item.id !== r.id));
                    }}
                    className="absolute bg-royal-gold/30 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-30"
                    style={{
                      left: r.x,
                      top: r.y,
                      width: r.size,
                      height: r.size,
                    }}
                  />
                ))}
              </AnimatePresence>
              
              <div className="relative z-20 p-8 space-y-2 pointer-events-none select-none">
                <span className="font-sans text-[10px] text-royal-gold font-bold uppercase tracking-widest block">ENGAGEMENT ARCHITECTURE</span>
                <h3 className="font-display text-2xl font-black text-gilded-ivory">Social Architecture</h3>
                <p className="font-sans text-xs text-gray-300 max-w-md">
                  Formulating high-concept editorial profiles and systematic algorithm optimizations to sustain high executive presence.
                </p>
              </div>
            </motion.div>
 
          </motion.div>

        </div>
      </motion.section>

      {/* 5. Email Marketing */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-150px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="py-28 px-6 md:px-12 bg-white dark:bg-zinc-950 text-gray-900 dark:text-gilded-ivory text-left border-b border-royal-gold/10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* Left Graphics Card */}
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-royal-gold/5 rounded-full blur-3xl" />
              
              <div className="p-8 md:p-12 relative z-10 bg-gray-50/50 dark:bg-zinc-950 rounded-3xl border border-royal-gold/20 shadow-xl space-y-8">
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-royal-gold/10 text-royal-gold flex items-center justify-center border border-royal-gold/15 shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold">Automation Mastery</h3>
                    <span className="font-sans text-[10px] text-gray-550 block">Managed Lifecycle Flows</span>
                  </div>
                </div>

                {/* Simulated stats indicators mockup */}
                <div className="space-y-4">
                  <div className="h-2 bg-gray-200 dark:bg-zinc-800 rounded-full w-full" />
                  <div className="h-2 bg-royal-gold/40 rounded-full w-3/4" />
                  <div className="h-2 bg-gray-200 dark:bg-zinc-800 rounded-full w-5/6" />
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="p-4 bg-royal-gold text-deep-violet rounded-2xl text-center space-y-1">
                    <strong className="text-2xl md:text-3xl font-display font-black block leading-none">99.9%</strong>
                    <span className="font-sans text-[10px] uppercase font-bold tracking-widest block opacity-90">Deliverability</span>
                  </div>
                  <div className="p-4 border border-royal-gold/15 dark:bg-black/20 rounded-2xl text-center space-y-1">
                    <strong className="text-2xl md:text-3xl font-display font-black text-royal-gold block leading-none">34%</strong>
                    <span className="font-sans text-[10px] uppercase font-bold tracking-widest block text-gray-400">Avg. Open Rate</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Text */}
            <div className="order-1 lg:order-2 space-y-8">
              <span className="text-royal-gold font-sans text-xs font-bold uppercase tracking-widest block">The Direct Channel</span>
              <h2 className="font-display text-4xl sm:text-5xl font-black leading-tight">
                Revenue via <br/>
                <span className="text-royal-gold italic font-serif">Precision Mailing.</span>
              </h2>
              <p className="font-sans text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                Email is not dead; it's simply evolved. We author customized automated lifecycles that convert prospects into loyal brand patrons without introducing visual compromises or low-key styling noise.
              </p>

              <ul className="space-y-4 text-xs md:text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-royal-gold shrink-0" />
                  <span>Hyper-segmented corporate audience arrays.</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-royal-gold shrink-0" />
                  <span>A/B metric splits for absolute maximum conversion.</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-royal-gold shrink-0" />
                  <span>Custom-coded clean HTML layouts mirroring editorial proportions.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </motion.section>

      {/* 6. Sovereign Deliverables Estimator Panel */}
      <motion.section 
        id="deliverables-estimator"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-150px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-6 md:px-12 w-full my-24 scroll-mt-24"
      >
        <div className="bg-white/90 dark:bg-zinc-950/40 border border-royal-gold/25 rounded-[36px] xl:p-12 p-6 md:p-8 shadow-2xl space-y-10 text-left">
          
          <div className="max-w-2xl text-left pb-6 border-b border-royal-gold/10">
            <span className="font-sans text-xs text-royal-gold font-semibold uppercase tracking-[0.2em] block mb-2">
              Sovereign Utility Suite
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-gray-900 dark:text-gilded-ivory">
              The Deliverables Scope Estimator
            </h2>
            <p className="font-sans text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-2">
              Select or deselect specialized elements from our arsenal list below to dynamically update project length indexes and legacy stature values in real-time.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left selectors list */}
            <div className="lg:col-span-7 space-y-3.5">
              <span className="font-sans text-xs font-bold text-royal-gold uppercase tracking-widest pl-1">
                Customize Deliverables Blueprint
              </span>
              <div className="space-y-3 mt-1">
                {ESTIMATOR_OPTIONS.map((opt) => {
                  const isChecked = selectedEstimatorIds.includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => toggleEstimatorItem(opt.id)}
                      className={`w-full p-4 md:p-5 rounded-2xl border text-left flex items-start gap-4 transition-all duration-300 cursor-pointer ${
                        isChecked 
                          ? 'bg-royal-gold/5 dark:bg-royal-gold/5 border-royal-gold/50 shadow-sm' 
                          : 'bg-transparent border-gray-150 dark:border-royal-gold/10 hover:border-royal-gold/35'
                      }`}
                    >
                      <div className="pt-0.5">
                        <input 
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => {}} // Manage via button click only
                          className="w-4.5 h-4.5 text-royal-gold accent-royal-gold focus:ring-royal-gold-25 rounded bg-transparent border-royal-gold/30 cursor-pointer" 
                        />
                      </div>
                      <div className="space-y-1 text-left">
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="font-sans text-xs md:text-sm font-bold text-gray-950 dark:text-gilded-ivory">
                            {opt.name}
                          </h4>
                          <span className="font-sans text-[8px] md:text-[9px] bg-royal-gold/15 text-royal-gold px-2.5 py-0.5 rounded-full border border-royal-gold/10 uppercase tracking-widest font-semibold leading-tight">
                            {opt.category}
                          </span>
                        </div>
                        <p className="font-sans text-[11px] md:text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                          {opt.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right calculation cards summary metrics panel */}
            <div className="lg:col-span-5 sticky top-28 bg-[#fafaf9] dark:bg-zinc-950 p-8 rounded-[28px] border border-royal-gold/20 flex flex-col justify-between min-h-[420px]">
              
              <div className="space-y-8 text-left">
                <div className="flex items-center gap-2 text-royal-gold pb-4 border-b border-royal-gold/10">
                  <Sparkles className="w-5 h-5" />
                  <span className="font-sans text-xs font-bold uppercase tracking-widest flex items-center gap-1.5">
                    Live Formulation Metrics
                  </span>
                </div>

                <div className="space-y-6">
                  <div>
                    <span className="font-sans text-[10px] text-gray-400 uppercase tracking-wider block">
                      Legacy Stature Tier
                    </span>
                    <strong className="font-display text-2xl font-black text-royal-gold block mt-1 leading-none">
                      {metrics.tier}
                    </strong>
                    <p className="font-sans text-[11px] md:text-xs text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
                      {metrics.rating}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-5 border-t border-royal-gold/10">
                    <div>
                      <span className="font-sans text-[10px] text-gray-400 uppercase tracking-wider block">
                        Estimated Scope
                      </span>
                      <strong className="font-sans text-xl md:text-2xl font-bold text-gray-950 dark:text-gilded-ivory block mt-1">
                        ~{metrics.weeks} Weeks
                      </strong>
                    </div>
                    <div>
                      <span className="font-sans text-[10px] text-gray-400 uppercase tracking-wider block">
                        Valuation Weight
                      </span>
                      <strong className="font-sans text-xl md:text-2xl font-bold text-gray-950 dark:text-gilded-ivory block mt-1">
                        {metrics.weightScore}x IDx
                      </strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <button
                  onClick={onNavigateToContact}
                  disabled={selectedEstimatorIds.length === 0}
                  className="w-full py-4.5 bg-royal-gold border border-royal-gold text-deep-violet disabled:opacity-40 font-sans text-xs font-bold uppercase tracking-wider rounded-2xl shadow-xl hover:scale-[1.01] active:scale-95 transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Transmit Est blueprints</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <span className="font-sans text-[9px] text-center block text-gray-500">
                  Formulation is calculated dynamically based on peak overlapping strategic dependencies.
                </span>
              </div>

            </div>

          </div>

        </div>
      </motion.section>

      {/* 7. Beautiful CTA Consultation Shield */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-150px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="py-12 px-6 md:px-12 max-w-7xl mx-auto w-full"
      >
        <div className="relative rounded-[40px] overflow-hidden bg-zinc-950 p-12 md:p-24 text-center border border-royal-gold/25 shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.1)_0%,_transparent_65%)] pointer-events-none z-0" />
          
          <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
            <span className="font-sans text-xs text-royal-gold font-semibold uppercase tracking-widest block">
              Direct Engagement Gateway
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-black text-gilded-ivory leading-tight">
              Ready to weaponize your brand?
            </h2>
            <p className="font-sans text-xs md:text-sm text-gray-300 leading-relaxed max-w-xl mx-auto">
              Join the ranks of elite digital leaders and visionary enterprises powered in absolute authority by Rayoba Creatives.
            </p>
            <div className="pt-4">
              <button 
                onClick={onNavigateToContact}
                className="bg-royal-gold border border-royal-gold text-deep-violet px-10 py-5 rounded-full font-sans text-xs font-bold uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-2xl shadow-royal-gold/15 active:scale-95 cursor-pointer"
              >
                Secure Your Consultation
              </button>
            </div>
          </div>
        </div>
      </motion.section>

    </div>
  );
}

