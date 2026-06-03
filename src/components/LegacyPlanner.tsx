/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Crown, Sparkles, Send, CheckSquare, Square, Lightbulb, TrendingUp, CheckCircle, RefreshCw, FileText } from 'lucide-react';

export default function LegacyPlanner() {
  const [brandName, setBrandName] = useState('');
  const [email, setEmail] = useState('');
  const [stature, setStature] = useState<'hidden' | 'scaling' | 'legacy'>('scaling');
  const [selectedChannels, setSelectedChannels] = useState<string[]>([
    'Graphic Design & Branding Crest',
    'Immersive Web Showroom'
  ]);
  const [vision, setVision] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [computedReport, setComputedReport] = useState<any>(null);

  const channelsList = [
    'Graphic Design & Branding Crest',
    'Immersive Web Showroom',
    'Social Narrative & Curation Styling',
    'Private VIP Newsletter Automations',
  ];

  const toggleChannel = (channel: string) => {
    if (selectedChannels.includes(channel)) {
      setSelectedChannels(selectedChannels.filter(c => c !== channel));
    } else {
      setSelectedChannels([...selectedChannels, channel]);
    }
  };

  const handleCompute = (e: React.FormEvent) => {
    e.preventDefault();
    if (!brandName || !email) {
      alert('Please provide your brand name and email so we can properly register your legacy inquiry.');
      return;
    }

    // Dynamic calculations based on user selections
    let recommendedStyle = 'Luxury Editorial / Playfair Modern';
    let duration = '4 - 6 Weeks';
    let primaryVibe = 'High-contrast Gilded minimalist framework with spacious negative margins.';
    let complexityFactor = selectedChannels.length;

    if (stature === 'hidden') {
      recommendedStyle = 'Classic Renaissance & Crisp Typography';
      duration = `${2 + complexityFactor * 1.5} Weeks`;
      primaryVibe = 'Rich warm ivory backgrounds, elegant logmarks, establishing authority fast.';
    } else if (stature === 'legacy') {
      recommendedStyle = 'Imperial Midnight Slate & Royal Gold Gloss';
      duration = `${4 + complexityFactor * 2} Weeks`;
      primaryVibe = 'Ultra premium blackish grays, rich golden crests, honoring heritage while modernizing assets.';
    } else {
      duration = `${3 + complexityFactor * 1.8} Weeks`;
    }

    const report = {
      trackingId: `RYB-${Math.floor(100000 + Math.random() * 900000)}`,
      recommendedStyle,
      duration,
      primaryVibe,
      channelsCount: complexityFactor,
      assetList: [
        'Sovereign Vector Iconography Framework',
        ...selectedChannels.map(c => `Bespoke, hand-crafted detail guidelines for ${c}`),
        'Atmospheric design standards document'
      ]
    };

    setComputedReport(report);
  };

  const handleSubmitFinal = () => {
    setSubmitted(true);
  };

  const resetForm = () => {
    setBrandName('');
    setEmail('');
    setStature('scaling');
    setSelectedChannels(['Graphic Design & Branding Crest', 'Immersive Web Showroom']);
    setVision('');
    setSubmitted(false);
    setComputedReport(null);
  };

  return (
    <section id="builder-section" className="py-24 md:py-32 bg-white dark:bg-midnight-royal px-6 md:px-12 border-t border-royal-gold/15">
      <div className="max-w-4xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-12 space-y-3">
          <span className="text-royal-gold font-sans font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2">
            <Crown className="w-4.5 h-4.5 text-royal-gold" />
            Brand Consultation Tool
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-gray-900 dark:text-gilded-ivory">
            The Legacy Builder
          </h2>
          <p className="font-sans text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Design your brand's sovereign path. Input your current stature and channels to calculate a recommended strategy blueprint.
          </p>
        </div>

        {/* Form panel */}
        <div className="bg-gilded-ivory dark:bg-white/5 border border-royal-gold/25 rounded-3xl p-6 md:p-10 shadow-xl relative overflow-hidden">
          <div className="film-grain absolute inset-0 z-0 opacity-5 pointer-events-none" />
          
          <AnimatePresence mode="wait">
            {!computedReport ? (
              // STEP 1 & 2: INPUT FORM
              <motion.form
                key="planner-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleCompute}
                className="space-y-6 relative z-10 text-left"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Brand Name */}
                  <div className="space-y-2">
                    <label className="block text-xs uppercase font-black tracking-widest text-gray-800 dark:text-gray-200">
                      Brand or Royal House Name <span className="text-royal-gold">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={brandName}
                      onChange={(e) => setBrandName(e.target.value)}
                      placeholder="e.g. Windsor & Co."
                      className="w-full px-4 py-3 rounded-xl border border-royal-gold/20 bg-white dark:bg-black/20 text-gray-900 dark:text-white focus:outline-none focus:border-royal-gold font-sans placeholder-gray-400"
                    />
                  </div>

                  {/* Representative email */}
                  <div className="space-y-2">
                    <label className="block text-xs uppercase font-black tracking-widest text-gray-800 dark:text-gray-200">
                      Discerning Representative Email <span className="text-royal-gold">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. lead@windsor.com"
                      className="w-full px-4 py-3 rounded-xl border border-royal-gold/20 bg-white dark:bg-black/20 text-gray-900 dark:text-white focus:outline-none focus:border-royal-gold font-sans placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Stature (Stature Selection) */}
                <div className="space-y-3">
                  <label className="block text-xs uppercase font-black tracking-widest text-gray-800 dark:text-gray-200">
                    Current Palace Brand Stature
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    
                    <button
                      type="button"
                      onClick={() => setStature('hidden')}
                      className={`p-4 rounded-xl border text-left transition-all ${
                        stature === 'hidden'
                          ? 'border-royal-gold bg-royal-gold/10'
                          : 'border-royal-gold/15 bg-white/50 dark:bg-transparent hover:border-royal-gold/40'
                      }`}
                    >
                      <span className="font-display font-bold block text-sm text-royal-gold">The Hidden Gem</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 block">Brilliant substance, pre-prestige status. Ready for instant ignition.</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setStature('scaling')}
                      className={`p-4 rounded-xl border text-left transition-all ${
                        stature === 'scaling'
                          ? 'border-royal-gold bg-royal-gold/10'
                          : 'border-royal-gold/15 bg-white/50 dark:bg-transparent hover:border-royal-gold/40'
                      }`}
                    >
                      <span className="font-display font-bold block text-sm text-royal-gold">Scaling Sovereign</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 block">Experiencing high growth. Ready to dominate sector spaces.</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setStature('legacy')}
                      className={`p-4 rounded-xl border text-left transition-all ${
                        stature === 'legacy'
                          ? 'border-royal-gold bg-royal-gold/10'
                          : 'border-royal-gold/15 bg-white/50 dark:bg-transparent hover:border-royal-gold/40'
                      }`}
                    >
                      <span className="font-display font-bold block text-sm text-royal-gold">Established Court</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 block">Dominant presence. Ready to modernise visual code while honoring roots.</span>
                    </button>

                  </div>
                </div>

                {/* Channels Grid Selection */}
                <div className="space-y-3">
                  <label className="block text-xs uppercase font-black tracking-widest text-gray-800 dark:text-gray-200">
                    Desired Royal Armaments (Select to bundle)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {channelsList.map((channel) => {
                      const isSelected = selectedChannels.includes(channel);
                      return (
                        <button
                          key={channel}
                          type="button"
                          onClick={() => toggleChannel(channel)}
                          className={`flex items-center gap-3 p-3.5 rounded-xl border text-left transition-colors cursor-pointer ${
                            isSelected
                              ? 'border-royal-gold bg-royal-gold/5 text-royal-gold'
                              : 'border-royal-gold/15 bg-white/30 dark:bg-transparent text-gray-700 dark:text-gray-300'
                          }`}
                        >
                          {isSelected ? (
                            <CheckSquare className="w-5 h-5 text-royal-gold shrink-0" />
                          ) : (
                            <Square className="w-5 h-5 text-gray-400 shrink-0" />
                          )}
                          <span className="text-xs md:text-sm font-semibold">{channel}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Grand Vision */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase font-black tracking-widest text-gray-800 dark:text-gray-200">
                    Describe Your Grand Vision (Optional)
                  </label>
                  <textarea
                    value={vision}
                    onChange={(e) => setVision(e.target.value)}
                    placeholder="E.g. We seek an uncompromised design that positions our boutique investment house as the ultimate luxury family office..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-royal-gold/20 bg-white dark:bg-black/20 text-gray-900 dark:text-white focus:outline-none focus:border-royal-gold font-sans placeholder-gray-400 text-sm"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-royal-gold hover:bg-royal-gold/90 text-deep-violet font-black px-6 py-4 rounded-xl text-sm uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    Compute Sovereign Strategy Blueprint
                  </button>
                </div>
              </motion.form>
            ) : !submitted ? (
              // STEP 3: COMPUTED INTERACTIVE BLUEPRINT SUMMARY
              <motion.div
                key="strategy-report"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6 text-left relative z-10"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-royal-gold/25 pb-4 gap-4">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-gray-400">TRACKING: {computedReport.trackingId}</span>
                    <h3 className="font-display text-2xl font-black text-gray-900 dark:text-gilded-ivory">Legacy Formula: {brandName}</h3>
                  </div>
                  <button
                    onClick={resetForm}
                    className="flex items-center gap-1.5 text-xs font-bold text-royal-gold p-1.5 hover:bg-royal-gold/10 rounded-lg"
                  >
                    <RefreshCw className="w-3.5 h-3.5" /> Re-Draft Inquiry
                  </button>
                </div>

                {/* Interactive insights cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-royal-gold/10 border border-royal-gold/20 flex gap-3 items-start">
                    <Lightbulb className="w-5 h-5 text-royal-gold shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[9px] uppercase font-black text-royal-gold tracking-widest block">Aesthetic Prescription</span>
                      <strong className="text-gray-900 dark:text-gilded-ivory text-sm block mt-1">{computedReport.recommendedStyle}</strong>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{computedReport.primaryVibe}</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-royal-gold/15 border border-royal-gold/20 flex gap-3 items-start">
                    <TrendingUp className="w-5 h-5 text-royal-gold shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[9px] uppercase font-black text-smart-gold tracking-widest block">Projected Ramp Duration</span>
                      <strong className="text-gray-900 dark:text-gilded-ivory text-sm block mt-1">{computedReport.duration}</strong>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Reflects parallel scheduling of {computedReport.channelsCount} royal strategic channels.</p>
                    </div>
                  </div>
                </div>

                {/* Action steps based on calculations */}
                <div className="space-y-3">
                  <h4 className="font-display font-bold text-lg text-royal-gold flex items-center gap-2">
                    <FileText className="w-4.5 h-4.5" /> Recommended Deliverables Package
                  </h4>
                  <div className="space-y-2 max-h-[160px] overflow-y-auto pr-2">
                    {computedReport.assetList.map((asset: string, i: number) => (
                      <div key={i} className="flex gap-2.5 items-center p-2.5 rounded-lg bg-white dark:bg-black/20 border border-royal-gold/10 text-xs text-gray-700 dark:text-gray-300">
                        <CheckCircle className="w-4 h-4 text-royal-gold" />
                        <span>{asset}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Submit Final Action Button */}
                <div className="pt-4">
                  <button
                    onClick={handleSubmitFinal}
                    className="w-full bg-royal-gold hover:bg-royal-gold/90 text-deep-violet font-black px-6 py-4 rounded-xl text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" /> Submit Core Strategy of {brandName}
                  </button>
                </div>
              </motion.div>
            ) : (
              // STEP 4: FINAL SUCCESS CARD
              <motion.div
                key="final-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-6 relative z-10"
              >
                <div className="w-16 h-16 bg-royal-gold/20 rounded-full flex items-center justify-center mx-auto border border-royal-gold text-royal-gold">
                  <Crown className="w-8 h-8" />
                </div>
                
                <h3 className="font-display text-3xl font-black text-gray-900 dark:text-gilded-ivory">Legacy Request Authorized</h3>
                <p className="font-sans text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-lg mx-auto leading-relaxed">
                  Thank you, representative of <strong>{brandName}</strong>. Your customized formulary tracking record <strong>{computedReport.trackingId}</strong> is securely cataloged. Our Royal Court of Design strategists will connect via <strong>{email}</strong> within 12 standard business hours.
                </p>

                <div className="pt-6">
                  <button
                    onClick={resetForm}
                    className="px-6 py-2.5 rounded-xl border border-royal-gold/40 text-royal-gold font-bold text-xs uppercase tracking-widest hover:bg-royal-gold/10 transition-colors cursor-pointer"
                  >
                    Plan Another House
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
