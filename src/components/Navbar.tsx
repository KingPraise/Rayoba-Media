/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, Menu, X, Crown, Sparkles } from 'lucide-react';

interface NavbarProps {
  activePage: 'home' | 'about' | 'services' | 'portfolio' | 'contact';
  onNavigateToPage: (page: 'home' | 'about' | 'services' | 'portfolio' | 'contact') => void;
  onOpenPlanner?: () => void;
}

export default function Navbar({ activePage, onNavigateToPage, onOpenPlanner }: NavbarProps) {
  const [isDark, setIsDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Synchronize theme with html element
  useEffect(() => {
    const isDarkStored = localStorage.getItem('theme') === 'dark' || 
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    setIsDark(isDarkStored);
    if (isDarkStored) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navLinksList = [
    { name: 'Home', page: 'home' as const },
    { name: 'About', page: 'about' as const },
    { name: 'Services', page: 'services' as const },
    { name: 'Portfolio', page: 'portfolio' as const },
    { name: 'Contact', page: 'contact' as const }
  ];

  const handleLinkClick = (page: 'home' | 'about' | 'services' | 'portfolio' | 'contact') => {
    setMobileMenuOpen(false);
    onNavigateToPage(page);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{ id: 'app-navbar' }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] md:w-[calc(100%-64px)] max-w-7xl rounded-2xl border transition-all duration-300 z-50 px-6 py-4.5 ${
          scrolled 
            ? 'bg-off-white/85 dark:bg-midnight-royal/85 backdrop-blur-md shadow-2xl border-royal-gold/25' 
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button 
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2 font-display text-2xl md:text-3xl font-bold tracking-tight text-royal-gold hover:opacity-90 transition-opacity cursor-pointer text-left"
            id="brand-logo"
          >
            <Crown className="w-6 h-6 stroke-[1.5] text-royal-gold" />
            <span className="font-display tracking-tight text-royal-gold">Rayoba Media</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinksList.map((link) => {
              const isActive = link.page === activePage;
              return (
                <button
                  key={link.page}
                  onClick={() => handleLinkClick(link.page)}
                  className={`font-sans text-xs uppercase tracking-wider font-semibold transition-colors duration-300 cursor-pointer relative py-1 group/item ${
                    isActive 
                      ? 'text-royal-gold' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-royal-gold'
                  }`}
                  id={`nav-link-${link.page}`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-royal-gold transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover/item:w-full'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-zinc-900/40 dark:hover:bg-zinc-800/85 border border-transparent dark:border-royal-gold/15 text-royal-gold transition-colors cursor-pointer"
              title={isDark ? "Switch to Ivory Theme" : "Switch to Shadow Theme"}
              id="theme-toggle-btn"
            >
              {isDark ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}
            </motion.button>

            {/* Legacy CTA */}
            <button
              onClick={onOpenPlanner || (() => handleLinkClick('contact'))}
              className="hidden sm:inline-flex items-center justify-center bg-royal-gold hover:bg-royal-gold/90 text-deep-violet font-bold text-[10px] uppercase tracking-wider px-4.5 py-2.5 rounded-xl transition-all cursor-pointer shadow-md"
              id="nav-cta-btn"
            >
              Consult Legacy
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-zinc-900 text-royal-gold transition-colors cursor-pointer"
              id="mobile-menu-toggle-btn"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-24 left-4 right-4 bg-off-white dark:bg-midnight-royal border border-royal-gold/20 rounded-2xl z-40 p-6 shadow-2xl backdrop-blur-lg flex flex-col space-y-4 md:hidden"
            id="mobile-nav-panel"
          >
            <div className="flex flex-col space-y-3">
              {navLinksList.map((link, idx) => {
                const isActive = link.page === activePage;
                return (
                  <motion.button
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    key={link.page}
                    onClick={() => handleLinkClick(link.page)}
                    className={`w-full text-left py-2.5 font-sans text-sm font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                      isActive ? 'text-royal-gold' : 'text-gray-800 dark:text-gray-200 hover:text-royal-gold'
                    }`}
                  >
                    {link.name}
                  </motion.button>
                );
              })}
              
              <div className="pt-4 border-t border-gray-100 dark:border-zinc-900 flex flex-col space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleLinkClick('contact');
                  }}
                  className="w-full bg-royal-gold text-deep-violet font-bold text-center py-3.5 rounded-xl tracking-wider uppercase text-[10px]"
                >
                  Build Custom Legacy Planner
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
