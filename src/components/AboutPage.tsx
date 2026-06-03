/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Crown, Sun, Target, Lightbulb, Compass, Award, Quote, Users, ArrowRight, Shield, Eye } from 'lucide-react';

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<'none' | 'ray' | 'oba'>('none');
  const [summonEmail, setSummonEmail] = useState('');
  const [summonSuccess, setSummonSuccess] = useState(false);

  const logoUrl = 'https://lh3.googleusercontent.com/aida-public/AB6AXuACnOZOoW6wmJpLQmCWkN3BBRPXLkOm0qm0XlxCox0gUZpexlFDizTA1Z4OceMxj7UfLF98cSLs94cnQ3kgdc3ADrREcOzrZ8NucGUIzRgcGUlPOhdea4N8eydmmiNlYfyzRwoV1nOpIiz55fIAb3gkj0Jhb-oBNlaWSduyD52MWbscqTlbH0qEawlBHV7Jj6vBeeSRf1rqwPtFsG7APAkGjX-yYyyWYcAVtYX98GhfHia8t49STrpcgxGhF21hAVAkj1D_muZUHn8';

  const philosophies = [
    {
      icon: Compass,
      title: 'Aura of Authority',
      description: 'We reject standard trend-following in design. Everything we construct is engineered to establish immediate commanding trust, allowing our clients to sustain high-tier luxury pricing.'
    },
    {
      icon: Crown,
      title: 'Classical Proportion',
      description: 'Built on the eternal concepts of the golden ratio and strict Swiss grid systems. We merge high art and contemporary visual design to ensure your asset is immune to temporary visual style changes.'
    },
    {
      icon: Eye,
      title: 'Cinematic Pacing',
      description: 'Whether cutting corporate movies or staging digital flags, we currate visual movement with meticulous direction and pristine speed, capturing absolute user and investor attention.'
    },
    {
      icon: Shield,
      title: 'Heritage Stewardship',
      description: 'Every great brand is an institution. We help organize your current corporate goals and stories, translating them into digital systems that protect and amplify your legacy for generations.'
    }
  ];

  const team = [
    {
      name: 'Alexander Rayoba',
      role: 'Principal Creative Sovereign',
      bio: 'Alumnus of premium editorial salons in London and Milan. Pioneer of cinematic design theory, dedicated to shaping sovereign visual prestige.',
      quote: 'Prestige is not loud. It is the uncompromised resonance of quiet authority.'
    },
    {
      name: 'Dr. Evelyn Sato',
      role: 'Director of Brand Strategy',
      bio: 'Ph.D. in Behavioral Semiotics with a decade of global advisory. Curates narrative grids that translate technical dominance into client reverence.',
      quote: 'Great strategy translates raw performance into historical credibility.'
    },
    {
      name: 'Marcus Sterling',
      role: 'Lead Media Architect',
      bio: 'Master of minimalist digital structures and headless engine systems. Bridges exquisite WebGL graphics with enterprise performance.',
      quote: 'Elegant code should be imperceptible, leaving only pure, responsive fluid art.'
    }
  ];

  return (
    <div className="w-full relative min-h-screen pt-28 pb-16 flex flex-col justify-between">
      
      {/* Editorial Header */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-6 md:px-12 w-full mt-8 md:mt-16 mb-20 text-left"
      >
        <span className="font-sans text-xs md:text-sm text-royal-gold font-semibold tracking-[0.2em] mb-4 block uppercase p-1">
          Our Heritage
        </span>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-gilded-ivory leading-tight mb-6 max-w-4xl">
          An Editorial Quest for Cinematic Authority and Brand Dominion
        </h1>
        <p className="font-sans text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
          Rayoba Media stands as a boutique sanctuary for brands that demand elite, uncompromised presence. We do not design options; we curate solutions for commercial excellence and historical stature.
        </p>
      </motion.section>

      {/* Origin Story Section (Embedded and Enhanced) */}
      <section className="w-full py-16 bg-gray-100/40 dark:bg-black/20 border-y border-royal-gold/10 overflow-hidden mb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Block: Interactive 3D Brand Mark Frame */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.025 }}
                className="relative w-full max-w-md aspect-square rounded-3xl p-6 md:p-8 bg-white dark:bg-midnight-royal/90 border border-royal-gold/15 shadow-2xl flex flex-col justify-center items-center overflow-hidden group"
                id="brand-mark-card-outer"
              >
                {/* Soft ambient aura */}
                <div className="absolute inset-0 bg-gradient-to-tr from-royal-gold/5 via-transparent to-deep-violet/5 opacity-60 group-hover:opacity-100 transition-opacity" />
                
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
                    alt="Rayoba Media Royal Sovereign Seal"
                    referrerPolicy="no-referrer"
                    className="max-h-[220px] md:max-h-[260px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                    id="origin-logo-img"
                  />
                </div>

                {/* Decorative brand foundation note */}
                <div className="absolute bottom-4 left-0 right-0 text-center z-10">
                  <span className="font-sans text-[10px] md:text-xs text-gray-400 dark:text-gray-400 font-medium uppercase tracking-widest bg-gray-100/80 dark:bg-gray-800/80 px-3 py-1 rounded-full border border-royal-gold/10">
                    Rayoba Sovereign Emblem
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Right Block: Narrative and Text Details */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-8 text-left">
              <div className="inline-flex self-start px-4 py-1.5 rounded-full bg-royal-gold/10 border border-royal-gold/20">
                <span className="font-sans text-xs text-royal-gold font-semibold tracking-widest uppercase">
                  The Etymology
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-black text-gray-900 dark:text-gilded-ivory">
                The Birth of Rayoba
              </h2>

              <div className="space-y-6 text-base text-gray-600 dark:text-gray-300 leading-relaxed font-sans">
                <p>
                  Derived from the convergence of{' '}
                  <button
                    onClick={() => setActiveTab(activeTab === 'ray' ? 'none' : 'ray')}
                    className="font-bold text-royal-gold border-b border-dashed border-royal-gold/50 hover:bg-royal-gold/10 px-1 rounded transition-colors cursor-pointer"
                    title="Click to reveal Light significance"
                  >
                    Ray (Light)
                  </button>{' '}
                  and{' '}
                  <button
                    onClick={() => setActiveTab(activeTab === 'oba' ? 'none' : 'oba')}
                    className="font-bold text-royal-gold border-b border-dashed border-royal-gold/50 hover:bg-royal-gold/10 px-1 rounded transition-colors cursor-pointer"
                    title="Click to reveal King significance"
                  >
                    Oba (King in Yoruba)
                  </button>
                  , Rayoba Media represents the divine clarity and sovereign authority every brand deserves.
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
                    className="p-5 rounded-2xl bg-royal-gold/10 border border-royal-gold/25 relative overflow-hidden text-left"
                  >
                    {activeTab === 'ray' ? (
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-royal-gold font-bold font-display text-sm md:text-base">
                          <Sun className="w-5 h-5 text-royal-gold" />
                          <span>Ray — The Principle of Absolute Clarity</span>
                        </div>
                        <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                          In branding, 'Ray' is the ultimate spotlight. It represents cutting through noise, highlighting unique core competencies, and guiding potential high-tier customers out of dark markets into absolute clarity. We do not hide; we illuminate.
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-royal-gold font-bold font-display text-sm md:text-base">
                          <Crown className="w-5 h-5 text-royal-gold" />
                          <span>Oba — The Standard of Sovereign Dominance</span>
                        </div>
                        <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                          'Oba' is a King or Ruler in Yoruba culture, commanding absolute respect, heritage, and administrative stewardship. We treat your organization as a sovereign institution, crafting designs that don't plea for attention, but naturally command respect.
                        </p>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex items-center gap-4 text-royal-gold">
                <span className="h-px w-12 bg-royal-gold"></span>
                <span className="font-sans text-xs font-semibold tracking-widest uppercase">
                  Est. 2024 • Editorial Stature
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Philosophies (The Pillars) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 w-full mb-28">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-xs text-royal-gold font-semibold uppercase tracking-widest block mb-4">
            Our Blueprint
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-black text-gray-900 dark:text-gilded-ivory">
            The Pillars of Prestige
          </h2>
          <p className="font-sans text-sm md:text-base text-gray-500 dark:text-gray-400 mt-4 leading-relaxed">
            Four structural philosophies that drive our planning, photography direction, and server assemblies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {philosophies.map((phil, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -5, scale: 1.015 }}
              className="p-8 rounded-3xl border border-royal-gold/15 bg-white/40 dark:bg-zinc-950/20 hover:border-royal-gold/40 transition-all duration-300 shadow-sm flex flex-col md:flex-row gap-6 cursor-default"
            >
              <div className="p-4 bg-royal-gold/10 text-royal-gold rounded-2xl h-fit w-fit flex items-center justify-center">
                <phil.icon className="w-6 h-6 stroke-[1.5]" />
              </div>
              <div className="space-y-3">
                <h3 className="font-display text-lg md:text-xl font-bold text-gray-950 dark:text-gilded-ivory">
                  {phil.title}
                </h3>
                <p className="font-sans text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {phil.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* The Sovereign Court (Meet the Team) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 w-full mb-12">
        <div className="text-left max-w-2xl mb-16">
          <span className="font-sans text-xs text-royal-gold font-semibold uppercase tracking-widest block mb-4">
            The Sovereign Court
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-black text-gray-900 dark:text-gilded-ivory">
            The Minds Overseeing Your Legacy
          </h2>
          <p className="font-sans text-sm md:text-base text-gray-600 dark:text-gray-400 mt-4">
            Our multi-disciplinary coordinators unite classical graphics art, advanced computer code, and elite strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
          {team.map((member, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 35, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-8 rounded-3xl border border-royal-gold/10 bg-white dark:bg-midnight-royal/90 shadow-2xl shadow-secondary/5 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-display text-xl font-bold text-gray-900 dark:text-gilded-ivory">
                      {member.name}
                    </h3>
                    <p className="font-sans text-xs font-semibold text-royal-gold uppercase tracking-wider mt-1">
                      {member.role}
                    </p>
                  </div>
                  <div className="h-10 w-10 bg-royal-gold/10 rounded-full flex items-center justify-center text-royal-gold font-display text-sm font-bold border border-royal-gold/20">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>

                <p className="font-sans text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {member.bio}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-royal-gold/15 space-y-3">
                <Quote className="w-5 h-5 text-royal-gold/40" />
                <p className="font-serif italic text-xs md:text-sm text-gray-800 dark:text-gray-300 leading-relaxed">
                  "{member.quote}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 3: The Majesty Method (Vertical / Horizontal Stepper) */}
      <section className="bg-zinc-950 border-y border-royal-gold/10 py-32 px-6 md:px-12 text-gilded-ivory overflow-hidden relative w-full mt-24">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <span className="font-sans text-xs text-royal-gold font-semibold uppercase tracking-[0.2em] mb-3 block">
              Our Sovereign Journey
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-royal-gold mb-6">
              The Majesty Method
            </h2>
            <p className="font-sans text-sm md:text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
              Our proven, meticulously configured progression to deliver absolute brand sovereignty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connective Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-royal-gold/40 to-transparent z-0" />

            {/* Step 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative z-10 text-center space-y-4"
            >
              <div className="relative mb-8 flex justify-center">
                <div className="h-24 w-24 rounded-full bg-zinc-950 border-2 border-royal-gold flex items-center justify-center text-royal-gold font-display text-3xl font-bold transition-transform duration-500 group-hover:scale-110">
                  01
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-32 bg-royal-gold/10 blur-xl rounded-full -z-10" />
              </div>
              <h3 className="font-display text-2xl font-black text-gilded-ivory">Immersion</h3>
              <p className="font-sans text-xs md:text-sm text-gray-400 leading-relaxed max-w-xs mx-auto">
                Deep dive into your brand's DNA, uncovering hidden strengths and market voids through meticulous strategic audit.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="group relative z-10 text-center space-y-4"
            >
              <div className="relative mb-8 flex justify-center">
                <div className="h-24 w-24 rounded-full bg-zinc-950 border-2 border-royal-gold flex items-center justify-center text-royal-gold font-display text-3xl font-bold transition-transform duration-500 group-hover:scale-110">
                  02
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-32 bg-royal-gold/10 blur-xl rounded-full -z-10" />
              </div>
              <h3 className="font-display text-2xl font-black text-gilded-ivory">Manifestation</h3>
              <p className="font-sans text-xs md:text-sm text-gray-400 leading-relaxed max-w-xs mx-auto">
                Artisanal execution of creative assets. From cinematic video to architectural web design, we bring the vision to tangible life.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group relative z-10 text-center space-y-4"
            >
              <div className="relative mb-8 flex justify-center">
                <div className="h-24 w-24 rounded-full bg-zinc-950 border-2 border-royal-gold flex items-center justify-center text-royal-gold font-display text-3xl font-bold transition-transform duration-500 group-hover:scale-110">
                  03
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-32 bg-royal-gold/10 blur-xl rounded-full -z-10" />
              </div>
              <h3 className="font-display text-2xl font-black text-gilded-ivory">Ascension</h3>
              <p className="font-sans text-xs md:text-sm text-gray-400 leading-relaxed max-w-xs mx-auto">
                Scaling the sovereign brand. Data-driven optimization and cross-platform growth strategies to ensure long-term dominance.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Decorative Text */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-[0.03] select-none pointer-events-none hidden lg:block">
          <span className="font-display text-[160px] font-black uppercase tracking-widest text-royal-gold">
            EXCELLENCE
          </span>
        </div>
      </section>

      {/* Section 4: Team/Values Bento Grid */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="text-left mb-16 max-w-2xl">
          <span className="font-sans text-xs text-royal-gold font-semibold uppercase tracking-widest block mb-4">
            Our Core Tenets
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-black text-gray-900 dark:text-gilded-ivory">
            The Alignment of Creative Command
          </h2>
          <p className="font-sans text-sm text-gray-500 dark:text-gray-400 mt-2">
            Prestige isn't simply curated styling—it requires an elite configuration of vision and action metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Large image card */}
          <div className="md:col-span-8 bg-gray-50 dark:bg-zinc-900/50 p-8 md:p-12 rounded-[32px] md:min-h-[400px] flex flex-col justify-end relative overflow-hidden group border border-royal-gold/10">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJO8t_wCArPGFBWHQ-zzIXb07eqvn7WuXa9ng_i9cycq0AyKlZ1W-vrWp0KDy9LGmcmdfdYAcvU5koNsRNxOrJtrbic_HPYsLolu2dZeymiKEiu_3-thOXUYdgF4pHuJ8OVVcREz8AUzsEcvhzQ8HmogCqdx79jA_cvrmfFJws-Hk6V-YBZlcvDJuRmSM16oY24zdtCCH0ni3xZ9KZGRC2AN6-zYMRMR8hse6Ryao0XW3j0J7jZdzSG8ywzDtJXIeCMYPyhQQH1sY" 
              alt="Editorial team collaborating" 
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover opacity-15 group-hover:opacity-25 transition-opacity duration-700"
            />
            <div className="relative z-10 text-left space-y-4">
              <h3 className="font-display text-2xl md:text-3xl font-black text-gray-950 dark:text-gilded-ivory">
                Creativity Meets Strategy
              </h3>
              <p className="font-sans text-xs md:text-sm text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed">
                We don't just make things look beautiful. We make them perform at a level that disrupts the status quo, carving out uncontested market share with pristine visual grids.
              </p>
            </div>
          </div>

          {/* Card 2: Royal Blue Background Card */}
          <div className="md:col-span-4 bg-deep-violet dark:bg-violet-950 p-8 md:p-12 rounded-[32px] flex flex-col justify-between text-left text-gilded-ivory relative overflow-hidden group border border-royal-gold/20 shadow-2xl">
            <div className="p-3 bg-royal-gold/10 border border-royal-gold/15 text-royal-gold rounded-2xl w-fit">
              <Users className="w-6 h-6 stroke-[1.5]" />
            </div>
            <div className="space-y-4 mt-8 md:mt-16">
              <h3 className="font-display text-2xl font-bold">Client-Centric</h3>
              <p className="font-sans text-xs md:text-xs text-gray-200 leading-relaxed">
                You are the sovereign; we are your royal counsel. Your organizational trajectory becomes the primary blueprints of our creative execution.
              </p>
            </div>
          </div>

          {/* Card 3: Minimalist Border outline card */}
          <div className="md:col-span-4 border border-royal-gold/15 bg-white/40 dark:bg-black/10 p-8 md:p-12 rounded-[32px] flex flex-col justify-between text-left hover:border-royal-gold/40 transition-colors duration-300">
            <div className="p-3 bg-royal-gold/10 text-royal-gold rounded-2xl w-fit">
              <Target className="w-6 h-6 stroke-[1.5]" />
            </div>
            <div className="space-y-3 mt-8 md:mt-16">
              <h3 className="font-display text-xl font-bold text-gray-950 dark:text-gilded-ivory">
                Precision Mastery
              </h3>
              <p className="font-sans text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                Meticulous attention to detail in every frame orientation, color grade parameter, and line of headless React code.
              </p>
            </div>
          </div>

          {/* Card 4: Join the Royal Lineage full block CTA highlight */}
          <div className="md:col-span-8 bg-royal-gold p-8 md:p-12 rounded-[32px] flex flex-col md:flex-row items-center justify-between gap-8 border border-royal-gold">
            <div className="text-left text-deep-violet space-y-3 max-w-xl">
              <h3 className="font-display text-2xl md:text-3xl font-black">
                Join the Royal Lineage
              </h3>
              <p className="font-sans text-xs md:text-sm text-deep-violet/85 leading-relaxed font-semibold">
                Partner with our multi-disciplinary specialists to establish classical design proportion, pristine performance speeds, and command immediate digital authority.
              </p>
            </div>
            
            {/* Pulsing visual action button */}
            <motion.div
              animate={{ scale: [0.97, 1.03, 0.97] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
              onClick={() => {
                const element = document.getElementById('project-inquiry-box');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="h-20 w-20 rounded-full bg-deep-violet text-royal-gold hover:bg-zinc-950 transition-colors duration-300 flex items-center justify-center shrink-0 cursor-pointer shadow-xl"
            >
              <ArrowRight className="w-6 h-6" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5: CTA Editorial Invitation Form */}
      <section 
        id="project-inquiry-box"
        className="pb-28 px-6 md:px-12 max-w-7xl mx-auto w-full scroll-mt-24"
      >
        <div className="relative rounded-[36px] overflow-hidden bg-zinc-950 p-12 md:p-24 text-center border border-royal-gold/25 shadow-2xl">
          <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,#D4AF37_0%,transparent_50%)]" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <span className="text-royal-gold font-sans text-xs md:text-sm font-bold tracking-[0.3em] uppercase block">
              Project Inquiry
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-gilded-ivory leading-tight">
              Manifest Your Majesty.
            </h2>
            <p className="font-sans text-xs md:text-sm text-gray-300 leading-relaxed">
              Are you ready to claim your position of uncompromised authority in the digital realm? Submit your coordinates, and let us illuminate the path forward together.
            </p>

            {/* Managed interactive state for prompt inquiry */}
            <AnimatePresence mode="wait">
              {!summonSuccess ? (
                <motion.form 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (summonEmail.trim()) {
                      setSummonSuccess(true);
                    }
                  }}
                  className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto pt-6"
                >
                  <input 
                    type="email"
                    required
                    value={summonEmail}
                    onChange={(e) => setSummonEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-grow bg-white/5 border border-white/20 rounded-2xl px-6 py-4.5 text-gilded-ivory placeholder-gray-500 font-sans text-xs focus:outline-none focus:border-royal-gold transition-colors text-left"
                  />
                  <button 
                    type="submit"
                    className="bg-royal-gold hover:bg-yellow-500 text-deep-violet font-sans text-xs font-bold uppercase tracking-widest px-8 py-4.5 rounded-2xl whitespace-nowrap active:scale-95 transition-all shadow-lg shadow-royal-gold/15 hover:shadow-royal-gold/30 cursor-pointer"
                  >
                    Summon Us
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-royal-gold/10 border border-royal-gold/25 text-left max-w-xl mx-auto space-y-3"
                >
                  <div className="flex items-center gap-3 text-royal-gold font-display font-black text-lg">
                    <Sparkles className="w-6 h-6 text-royal-gold" />
                    <span>Summoning Received</span>
                  </div>
                  <p className="font-sans text-xs text-gray-200 leading-relaxed">
                    Success! We have recorded your coordinates (<strong className="text-royal-gold">{summonEmail}</strong>). Our principal coordinates coordinators will analyze your market parameters and send transmission guidelines in 24 hours.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

    </div>
  );
}
