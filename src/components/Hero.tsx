/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Crown, ArrowRight, ArrowDown } from 'lucide-react';

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
  onOpenPlanner: () => void;
}

export default function Hero({ onScrollToSection, onOpenPlanner }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [orbPosition, setOrbPosition] = useState({ x: 0, y: 0 });

  // Mouse trajectory tracker for the luminous interactive orb
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      setMousePosition({ x: x * 0.12, y: y * 0.12 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Soft elastic lerp animation for the background sovereign orb
  useEffect(() => {
    let animationFrameId: number;
    const updateOrb = () => {
      setOrbPosition((prev) => {
        const dx = mousePosition.x - prev.x;
        const dy = mousePosition.y - prev.y;
        return {
          x: prev.x + dx * 0.04,
          y: prev.y + dy * 0.04,
        };
      });
      animationFrameId = requestAnimationFrame(updateOrb);
    };
    updateOrb();
    return () => cancelAnimationFrame(animationFrameId);
  }, [mousePosition]);

  return (
    <section
      ref={containerRef}
      style={{ id: 'hero-section' }}
      className="relative min-h-[95vh] flex flex-col items-center justify-center pt-32 overflow-hidden px-6 md:px-12 text-center"
    >
      {/* Film Grain background accent */}
      <div className="film-grain absolute inset-0 z-0 opacity-[0.03] pointer-events-none" />

      {/* Luminous Interactive Sovereign Orb */}
      <div 
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none mix-blend-multiply dark:mix-blend-screen opacity-15 dark:opacity-40"
      >
        <motion.div
          animate={{
            scale: [1, 1.05, 0.95, 1],
            borderRadius: ["50%", "45% 55% 50% 50%", "50% 50% 45% 55%", "50%"]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            transform: `translate(${orbPosition.x}px, ${orbPosition.y}px)`,
            background: 'radial-gradient(circle at 35% 35%, #D4AF37 0%, #735c00 45%, #2E1065 100%)',
          }}
          className="w-[280px] h-[280px] md:w-[450px] md:h-[450px] blur-[60px] md:blur-[100px] transition-transform duration-100 ease-out"
          id="royal-glow-orb"
          // Gilded gradient reflecting royal light
          css-gradient=""
        />
      </div>

      {/* Content grid */}
      <div className="relative z-10 max-w-4xl mx-auto space-y-8 flex flex-col items-center">
        {/* Compact Coat of Arms rotating badge/card at the very top */}
        <motion.div
          initial={{ opacity: 0, scale: 0.93 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-[420px] sm:max-w-[500px] w-full rounded-[36px] p-8 bg-white/40 dark:bg-zinc-950/35 backdrop-blur-md border border-royal-gold/15 shadow-2xl flex flex-col items-center justify-center text-center overflow-hidden group mb-6"
          id="hero-coat-of-arms-badge"
        >
          {/* Subtle gold glow aura inside card */}
          <div className="absolute inset-0 bg-gradient-to-tr from-royal-gold/5 via-transparent to-deep-violet/5 opacity-50 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

          {/* Animated/moving circle structure - Enlarged */}
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center z-10">
            {/* Elegant outer rotating dashed path */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-dashed border-royal-gold/50 rounded-full"
            />
            {/* Elegant outer rotating solid ring offset */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[4px] border border-royal-gold/15 rounded-full"
            />
            {/* Styled inner orb containment container */}
            <div className="absolute inset-[8px] rounded-full bg-zinc-100/60 dark:bg-zinc-900/70 border border-royal-gold/15 flex items-center justify-center overflow-hidden shadow-inner">
              <img
                src="/src/assets/images/regenerated_image_1780485140000.png"
                alt="Rayoba Royal Crown Shield"
                referrerPolicy="no-referrer"
                className="w-24 h-24 sm:w-30 sm:h-30 object-contain drop-shadow-xl select-none group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-display text-4xl sm:text-5xl md:text-7xl leading-tight font-black tracking-tight text-gray-900 dark:text-gilded-ivory"
          id="hero-header"
        >
          The Light of a King.
          <br />
          <span className="text-royal-gold relative block mt-2">
            Where Your Presence Meets Royalty.
          </span>
        </motion.h1>

        {/* Premium Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-sans text-base md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
          id="hero-summary"
        >
          Strategy and creative direction for brands that refuse to be ignored. We craft visual identities that command respect and digital experiences that resonate with authority.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 w-full max-w-md sm:max-w-none px-4"
        >
          {/* Main CTAs */}
          <button
            onClick={onOpenPlanner}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-royal-gold text-deep-violet font-bold text-sm tracking-wide uppercase hover:shadow-xl hover:shadow-royal-gold/20 hover:-translate-y-1 active:translate-y-0 transition-all cursor-pointer flex items-center justify-center gap-2 group"
            id="hero-cta-button-master"
          >
            Illuminate Your Brand
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => onScrollToSection('portfolio')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl border border-royal-gold/40 text-royal-gold font-medium text-sm tracking-wide uppercase hover:bg-royal-gold/5 active:bg-royal-gold/10 transition-colors cursor-pointer"
            id="hero-nav-portfolio-btn"
          >
            View Portfolio
          </button>
        </motion.div>
      </div>

      {/* Bounce scroll down tip */}
      <motion.button
        animate={{
          y: [0, 10, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        onClick={() => onScrollToSection('origin-story')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 cursor-pointer p-3 rounded-full hover:bg-royal-gold/10 text-royal-gold/60 hover:text-royal-gold transition-all"
        title="Scroll Down"
        id="hero-scroll-trigger"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.button>
    </section>
  );
}
