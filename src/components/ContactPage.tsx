/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Award, Send, MapPin, Mail, Phone, Users, CheckCircle, Loader2 } from 'lucide-react';

export default function ContactPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [selectedEssences, setSelectedEssences] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Mouse move tracker for magnetic effect backoffs
  const [magneticOffsets, setMagneticOffsets] = useState<Record<string, { x: number; y: number }>>({});

  const toggleEssence = (essence: string) => {
    setSelectedEssences(prev => 
      prev.includes(essence) 
        ? prev.filter(e => e !== essence)
        : [...prev, essence]
    );
  };

  const handleMouseMove = (id: string, e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 768) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMagneticOffsets(prev => ({
      ...prev,
      [id]: { x: x * 0.05, y: y * 0.1 }
    }));
  };

  const handleMouseLeave = (id: string) => {
    setMagneticOffsets(prev => ({
      ...prev,
      [id]: { x: 0, y: 0 }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) {
      alert('Please fill out your name and email so we can verify the legacy.');
      return;
    }

    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset after brief notification
      setTimeout(() => {
        setFullName('');
        setEmail('');
        setDescription('');
        setSelectedEssences([]);
        setIsSubmitted(false);
      }, 3500);
    }, 1500);
  };

  const essenceOptions = [
    'Video Production',
    'Brand Strategy',
    'Digital Design',
    'Public Relations'
  ];

  return (
    <div className="w-full relative min-h-screen pt-28 pb-12 flex flex-col justify-between">
      {/* Hero Header Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 w-full mt-8 md:mt-16 mb-20 z-10" id="contact-hero-sect">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start justify-between">
          <div className="w-full md:w-1/2 text-left" id="contact-title-group">
            <span className="font-sans text-xs md:text-sm text-royal-gold font-semibold tracking-[0.2em] mb-4 block uppercase p-1">
              Royal Entry
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-gilded-ivory leading-tight mb-6">
              Begin Your Royal Journey
            </h1>
            <p className="font-sans text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-md leading-relaxed">
              The first step to brand dominance begins with a conversation. Let us curate your legacy with technical precision and cinematic flair.
            </p>
          </div>
          <div className="w-full md:w-1/2 relative h-[300px] md:h-[350px] rounded-3xl overflow-hidden shadow-2xl group border border-royal-gold/10">
            <img 
              alt="Rayoba Creatives Studio Office" 
              className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJsOZYuQtwBX85gPMViaf-iYPBUlbcGXpRr36q-bVBcQU3VR2CHdNVOn4CEX1vJsf8KG4W2r6Uua9caRAixwTGshq-7cpTw17tZWaOW-84M8YOsQo_C-RpHABaLbIZ7dwHSdgr65mFd5Hat0FpkeNMoRtNT8GOMY784X6SqWgvx5jGDF-l2dY7FOjMjhBqSiO-UM7uYE0S8Q6uW2ZDQxbQ7b0IIdCBP3TijjRlDxUf1zzKWlyM7AHzgndAdNLvDTfmQSY5uk00q1I"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight-royal/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 w-full mb-24 z-10">
        <div className="bg-white/80 dark:bg-black/40 xl:p-16 p-8 md:p-12 rounded-[40px] border border-royal-gold/20 backdrop-blur-xl shadow-2xl shadow-secondary/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start text-left">
            
            {/* Left side details */}
            <div className="lg:col-span-4 space-y-8">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-black text-gray-900 dark:text-gilded-ivory mb-4" id="inquiry-heading">
                  The Inquiry Form
                </h2>
                <p className="font-sans text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  Share the vision of your project. Our consultants review each inquiry with meticulous attention to detail.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 p-5 bg-off-white dark:bg-midnight-royal/60 rounded-2xl border border-royal-gold/10 hover:border-royal-gold/30 hover:scale-[1.03] transition-all group shadow-sm">
                  <div className="p-3 bg-royal-gold/10 text-royal-gold rounded-xl group-hover:bg-royal-gold/20 transition-colors">
                    <Sparkles className="w-5 h-5 text-royal-gold animate-pulse" />
                  </div>
                  <div>
                    <p className="font-sans text-sm font-semibold text-gray-900 dark:text-gilded-ivory">Priority Response</p>
                    <p className="font-sans text-xs text-gray-500 dark:text-gray-400">Under 24 Hours</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-5 bg-off-white dark:bg-midnight-royal/60 rounded-2xl border border-royal-gold/10 hover:border-royal-gold/30 hover:scale-[1.03] transition-all group shadow-sm">
                  <div className="p-3 bg-royal-gold/10 text-royal-gold rounded-xl group-hover:bg-royal-gold/20 transition-colors">
                    <Award className="w-5 h-5 text-royal-gold" />
                  </div>
                  <div>
                    <p className="font-sans text-sm font-semibold text-gray-900 dark:text-gilded-ivory">Certified Quality</p>
                    <p className="font-sans text-xs text-gray-500 dark:text-gray-400">Award Winning Craft</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side form */}
            <div className="lg:col-span-8">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8" id="inquiryForm">
                
                {/* Full name input */}
                <div 
                  className="space-y-2 group transition-all duration-300"
                  onMouseMove={(e) => handleMouseMove('fullName', e)}
                  onMouseLeave={() => handleMouseLeave('fullName')}
                  style={{
                    transform: magneticOffsets['fullName'] 
                      ? `translate(${magneticOffsets['fullName'].x}px, ${magneticOffsets['fullName'].y}px)` 
                      : 'translate(0, 0)'
                  }}
                >
                  <label className="font-sans text-xs font-semibold uppercase tracking-wider text-gray-500 group-focus-within:text-royal-gold transition-colors">
                    Your Full Name
                  </label>
                  <input 
                    required
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-transparent border-b border-gray-300 dark:border-gray-800 text-gray-800 dark:text-gilded-ivory focus:border-royal-gold dark:focus:border-royal-gold text-base md:text-lg py-3 outline-none transition-all focus:ring-0" 
                    placeholder="e.g. Alexander Rayoba" 
                  />
                </div>

                {/* Email input */}
                <div 
                  className="space-y-2 group transition-all duration-300"
                  onMouseMove={(e) => handleMouseMove('email', e)}
                  onMouseLeave={() => handleMouseLeave('email')}
                  style={{
                    transform: magneticOffsets['email'] 
                      ? `translate(${magneticOffsets['email'].x}px, ${magneticOffsets['email'].y}px)` 
                      : 'translate(0, 0)'
                  }}
                >
                  <label className="font-sans text-xs font-semibold uppercase tracking-wider text-gray-500 group-focus-within:text-royal-gold transition-colors">
                    Professional Email
                  </label>
                  <input 
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent border-b border-gray-300 dark:border-gray-800 text-gray-800 dark:text-gilded-ivory focus:border-royal-gold dark:focus:border-royal-gold text-base md:text-lg py-3 outline-none transition-all focus:ring-0" 
                    placeholder="name@company.com" 
                  />
                </div>

                {/* Essence filter button selection */}
                <div className="space-y-2 md:col-span-2 group text-left">
                  <label className="font-sans text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Project Essence
                  </label>
                  <div className="flex flex-wrap gap-3 mt-3">
                    {essenceOptions.map((essence) => {
                      const isActive = selectedEssences.includes(essence);
                      return (
                        <button
                          key={essence}
                          type="button"
                          onClick={() => toggleEssence(essence)}
                          className={`px-5 py-2.5 rounded-full border text-xs font-medium uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                            isActive 
                              ? 'bg-royal-gold text-deep-violet border-royal-gold shadow-md' 
                              : 'bg-transparent text-gray-600 dark:text-gray-300 border-gray-300 dark:border-royal-gold/20 hover:border-royal-gold'
                          }`}
                        >
                          {essence}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Description Textarea */}
                <div className="space-y-2 md:col-span-2 group">
                  <label className="font-sans text-xs font-semibold uppercase tracking-wider text-gray-500 group-focus-within:text-royal-gold transition-colors">
                    Brief Description
                  </label>
                  <textarea 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full bg-transparent border-b border-gray-300 dark:border-gray-800 text-gray-800 dark:text-gilded-ivory focus:border-royal-gold dark:focus:border-royal-gold text-base md:text-lg py-3 outline-none transition-all resize-none focus:ring-0" 
                    placeholder="Tell us about your brand goals..." 
                    rows={4}
                  />
                </div>

                {/* Button container */}
                <div className="md:col-span-2 pt-6">
                  <AnimatePresence mode="wait">
                    {!isSubmitted ? (
                      <motion.button 
                        key="submit-btn"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full md:w-auto px-10 py-4.5 bg-royal-gold hover:bg-royal-gold/95 text-deep-violet font-semibold uppercase tracking-wider text-xs rounded-2xl shadow-lg hover:shadow-royal-gold/15 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-80"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin text-deep-violet" />
                            <span>Processing...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Inquiry</span>
                            <Send className="w-3.5 h-3.5" />
                          </>
                        )}
                      </motion.button>
                    ) : (
                      <motion.div 
                        key="success-message"
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        className="w-full md:w-auto p-4 bg-emerald-600 text-white font-semibold uppercase tracking-wider text-xs rounded-xl flex items-center justify-center gap-3 shadow-lg"
                      >
                        <CheckCircle className="w-5 h-5 text-white" />
                        <span>Inquiry Received. Thank you.</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </form>
            </div>

          </div>
        </div>
      </section>

      {/* The Sanctum Map/Location block */}
      <section className="mb-24 w-full relative z-10" id="sanctum-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-left mb-10">
          <h2 className="font-display text-3xl sm:text-4xl font-black text-gray-900 dark:text-gilded-ivory mb-2">
            The Sanctum
          </h2>
          <p className="font-sans text-sm md:text-base text-gray-600 dark:text-gray-400">
            Our creative headquarters in the heart of the metropolis.
          </p>
        </div>

        {/* Dynamic Abstract Map representation with visual buildings details */}
        <div className="relative w-full h-[450px] overflow-hidden group border-y border-royal-gold/10 bg-gray-100/40 dark:bg-black/20">
          <div className="absolute inset-0 bg-midnight-royal/5 pointer-events-none z-10" />
          
          <div className="absolute inset-0 opacity-40 dark:opacity-20 bg-[radial-gradient(circle_at_center,_var(--color-royal-gold)_0%,_transparent_60%)] filter blur-3xl pointer-events-none" />
          
          {/* Animated location beacon */}
          <div className="flex items-center justify-center h-full z-20 relative">
            <div className="relative p-8 md:p-12 rounded-full border-2 border-royal-gold/30 bg-white/60 dark:bg-midnight-royal/60 backdrop-blur-md anim-pulse shadow-2xl flex items-center justify-center text-royal-gold">
              
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-midnight-royal dark:bg-royal-gold text-gilded-ivory dark:text-midnight-royal px-5 py-2.5 rounded-xl font-sans text-xs font-semibold tracking-wider whitespace-nowrap uppercase shadow-xl border border-royal-gold/20">
                487 Royal Plaza, New York
              </div>

              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              >
                <MapPin className="w-12 h-12 text-royal-gold fill-royal-gold/20" />
              </motion.div>
            </div>
          </div>

          {/* Aesthetic grid alignments and background building frames */}
          <div className="absolute bottom-0 left-0 right-0 h-40 flex justify-around items-end opacity-[0.08] dark:opacity-[0.04] pointer-events-none">
            <div className="w-16 h-48 bg-royal-gold rounded-t-2xl" />
            <div className="w-24 h-64 bg-royal-gold rounded-t-2xl" />
            <div className="w-32 h-80 bg-royal-gold rounded-t-2xl" />
            <div className="w-12 h-36 bg-royal-gold rounded-t-2xl" />
            <div className="w-28 h-72 bg-royal-gold rounded-t-2xl" />
            <div className="w-20 h-56 bg-royal-gold rounded-t-2xl" />
            <div className="w-36 h-96 bg-royal-gold rounded-t-2xl" />
          </div>
        </div>
      </section>

      {/* Direct Communication Lines */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 w-full mb-16 z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          
          {/* Box 1 */}
          <div className="p-8 pb-10 rounded-3xl border border-royal-gold/15 bg-white/40 dark:bg-black/20 hover:border-royal-gold transition-all duration-500 backdrop-blur-md group shadow-sm">
            <Mail className="w-8 h-8 text-royal-gold mb-6 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="font-display text-xl md:text-2xl font-black text-gray-900 dark:text-gilded-ivory mb-2">
              Editorial
            </h3>
            <p className="font-sans text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
              For press, literature submissions, and creative showcase inquiries.
            </p>
            <a 
              className="font-sans text-xs md:text-sm font-semibold text-royal-gold hover:text-royal-gold/80 transition-colors uppercase tracking-wider relative group/link inline-block" 
              href="mailto:editorial@rayoba.media"
            >
              editorial@rayoba.media
              <span className="absolute bottom-[-2px] left-0 w-full h-[1px] bg-royal-gold scale-x-100 group-hover/link:scale-x-0 origin-right transition-transform" />
            </a>
          </div>

          {/* Box 2 */}
          <div className="p-8 pb-10 rounded-3xl border border-royal-gold/15 bg-white/40 dark:bg-black/20 hover:border-royal-gold transition-all duration-500 backdrop-blur-md group shadow-sm">
            <Phone className="w-8 h-8 text-royal-gold mb-6 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="font-display text-xl md:text-2xl font-black text-gray-900 dark:text-gilded-ivory mb-2">
              The Concierge
            </h3>
            <p className="font-sans text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
              Direct voice guidance with our master creative partners and strategists.
            </p>
            <a 
              className="font-sans text-xs md:text-sm font-semibold text-royal-gold hover:text-royal-gold/80 transition-colors uppercase tracking-wider relative group/link inline-block" 
              href="tel:+12125550198"
            >
              +1 (212) 555-0198
              <span className="absolute bottom-[-2px] left-0 w-full h-[1px] bg-royal-gold scale-x-100 group-hover/link:scale-x-0 origin-right transition-transform" />
            </a>
          </div>

          {/* Box 3 */}
          <div className="p-8 pb-10 rounded-3xl border border-royal-gold/15 bg-white/40 dark:bg-black/20 hover:border-royal-gold transition-all duration-500 backdrop-blur-md group shadow-sm">
            <Users className="w-8 h-8 text-royal-gold mb-6 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="font-display text-xl md:text-2xl font-black text-gray-900 dark:text-gilded-ivory mb-2">
              Partnerships
            </h3>
            <p className="font-sans text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
              Strategic brand collaborations, multi-venture alliances, and market growth.
            </p>
            <a 
              className="font-sans text-xs md:text-sm font-semibold text-royal-gold hover:text-royal-gold/80 transition-colors uppercase tracking-wider relative group/link inline-block" 
              href="#"
              onClick={(e) => { e.preventDefault(); alert('Our comprehensive Partnership Prospectus is preparing for delivery. Please write to the Concierge for early review.'); }}
            >
              View Prospectus
              <span className="absolute bottom-[-2px] left-0 w-full h-[1px] bg-royal-gold scale-x-100 group-hover/link:scale-x-0 origin-right transition-transform" />
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}

