/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Crown, Instagram, Linkedin, Twitter, Sparkles, ArrowRight } from 'lucide-react';

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  return (
    <footer id="contact-footer" className="bg-zinc-950 text-gilded-ivory w-full relative pt-24 pb-8 overflow-hidden select-none border-t border-royal-gold/15">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-royal-gold/5 via-zinc-950/20 to-zinc-950 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-royal-gold/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Pre-Footer CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-20 border-b border-royal-gold/15">
          <div className="max-w-xl text-left">
            <h2 className="font-display text-4xl sm:text-5xl font-black text-white leading-tight mb-4 tracking-tight">
              Ready to construct <br className="hidden sm:block" /> your <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-gold to-yellow-600">sovereign</span> brand?
            </h2>
            <p className="font-sans text-sm md:text-base text-gray-400 leading-relaxed">
              Step into the light. Our team is ready to architect your brand's royal narrative and elevate you to the absolute pinnacle of your industry.
            </p>
          </div>
          <div>
            <button
              onClick={() => onScrollToSection('contact')}
              className="group inline-flex items-center justify-center bg-royal-gold hover:bg-white text-zinc-950 font-black px-10 py-5 rounded-full shadow-2xl hover:shadow-royal-gold/20 hover:scale-105 active:scale-95 transition-all duration-300 font-sans text-sm uppercase tracking-wider gap-3 shrink-0 cursor-pointer"
            >
              <Sparkles className="w-5 h-5 text-zinc-900 group-hover:text-royal-gold transition-colors duration-300" />
              <span>Get Started</span>
            </button>
          </div>
        </div>

        {/* Master Directory details */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 py-16 border-b border-royal-gold/15 text-left">
          
          {/* Brand block */}
          <div className="md:col-span-5 space-y-6 md:pr-12">
            <button 
              onClick={() => onScrollToSection('hero')}
              className="flex items-center gap-3 group"
            >
              <div className="w-12 h-12 rounded-xl bg-royal-gold/10 border border-royal-gold/20 flex items-center justify-center text-royal-gold group-hover:scale-110 transition-transform duration-500">
                <Crown className="w-6 h-6" />
              </div>
              <span className="font-display text-3xl font-bold text-white tracking-tight">
                Rayoba<span className="text-royal-gold">.</span>
              </span>
            </button>
            <p className="font-sans text-sm text-gray-400 max-w-sm leading-relaxed">
              Synthesizing light and sovereignty into uncompromised visual systems. We sculpt digital legacies for elite organizations across the globe.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="#" className="w-10 h-10 rounded-full border border-royal-gold/20 flex items-center justify-center text-gray-400 hover:text-royal-gold hover:border-royal-gold hover:bg-royal-gold/5 transition-all duration-300" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-royal-gold/20 flex items-center justify-center text-gray-400 hover:text-royal-gold hover:border-royal-gold hover:bg-royal-gold/5 transition-all duration-300" aria-label="TikTok">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.86 4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-2.91-1.09 4.77 4.77 0 0 1-1.13-3.43h5v-.01z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-royal-gold/20 flex items-center justify-center text-gray-400 hover:text-royal-gold hover:border-royal-gold hover:bg-royal-gold/5 transition-all duration-300" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-royal-gold/20 flex items-center justify-center text-gray-400 hover:text-royal-gold hover:border-royal-gold hover:bg-royal-gold/5 transition-all duration-300" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-royal-gold/20 flex items-center justify-center text-gray-400 hover:text-royal-gold hover:border-royal-gold hover:bg-royal-gold/5 transition-all duration-300" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-6">
            <h4 className="font-display text-sm font-bold text-royal-gold uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-4 font-sans text-sm text-gray-400">
              <li>
                <button onClick={() => onScrollToSection('services-section')} className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-royal-gold/0 group-hover:bg-royal-gold transition-colors"></span>
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('portfolio')} className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-royal-gold/0 group-hover:bg-royal-gold transition-colors"></span>
                  Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('contact')} className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-royal-gold/0 group-hover:bg-royal-gold transition-colors"></span>
                  Consulting
                </button>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-2 space-y-6">
            <h4 className="font-display text-sm font-bold text-royal-gold uppercase tracking-widest">Legal</h4>
            <ul className="space-y-4 font-sans text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-royal-gold/0 group-hover:bg-royal-gold transition-colors"></span>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-royal-gold/0 group-hover:bg-royal-gold transition-colors"></span>
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-royal-gold/0 group-hover:bg-royal-gold transition-colors"></span>
                  Client Agreement
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / The Brief */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-widest">The Royal Brief</h4>
            <p className="font-sans text-xs md:text-sm text-gray-400 leading-relaxed">
              Exclusive insights on luxury branding, architectural design, and digital supremacy sent to your inbox.
            </p>
            <form className="relative mt-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full bg-white/5 border border-royal-gold/20 rounded-xl px-4 py-3.5 font-sans text-sm text-white placeholder-gray-500 focus:outline-none focus:border-royal-gold focus:ring-1 focus:ring-royal-gold transition-all"
              />
              <button 
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-royal-gold text-zinc-950 rounded-lg font-bold hover:scale-105 active:scale-95 transition-all text-xs"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

        {/* Large Decorative Text & Copyright */}
        <div className="pt-16 pb-4 flex flex-col items-center">
          <div className="w-full overflow-hidden flex justify-center py-6 select-none pointer-events-none opacity-[0.02] dark:opacity-[0.03]">
            <h1 className="font-display text-[22vw] leading-[0.75] font-black text-white whitespace-nowrap tracking-tighter">
              RAYOBA
            </h1>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center w-full text-xs font-sans text-gray-500 pt-8 gap-4">
            <p>© {new Date().getFullYear()} Rayoba Creatives. Sovereign Digital Systems.</p>
            <p className="flex items-center">
              Crafted with <span className="text-royal-gold px-1.5 font-mono">absolute</span> conviction.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}

