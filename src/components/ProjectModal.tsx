import React from 'react';
import { motion } from 'motion/react';
import { X, Target, Landmark, CheckCircle, TrendingUp, Sparkles } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.95, y: 15 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 15 }}
        transition={{ duration: 0.4 }}
        className="bg-white dark:bg-zinc-950 border border-royal-gold/25 rounded-[36px] w-full max-w-4xl overflow-hidden shadow-2xl max-h-[85vh] overflow-y-auto flex flex-col text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cover Image Frame */}
        <div className="relative aspect-video w-full select-none shrink-0 group">
          <img 
            src={project.image} 
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover grayscale-[0.1] group-hover:grayscale-0 transition-all duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight-royal/70 via-transparent to-transparent pointer-events-none" />
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-midnight-royal/80 hover:bg-midnight-royal text-royal-gold border border-royal-gold/25 hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-lg"
            title="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-6 left-6 right-6">
            <span className="font-sans text-[10px] text-royal-gold font-bold uppercase tracking-[0.2em] bg-midnight-royal/85 px-3 py-1.5 rounded-full border border-royal-gold/20 inline-block shadow">
              {project.tag || 'CASE STUDY'}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-gilded-ivory tracking-tight mt-3">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Core Contents Grid */}
        <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Left side details */}
          <div className="md:col-span-8 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-royal-gold">
                <Target className="w-4 h-4 stroke-[1.5]" />
                <span className="font-sans text-xs font-bold uppercase tracking-wider">Project Narrative</span>
              </div>
              <p className="font-sans text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Objectives list */}
            {project.objectives && project.objectives.length > 0 && (
              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-2 text-royal-gold">
                  <Landmark className="w-4 h-4 stroke-[1.5]" />
                  <span className="font-sans text-xs font-bold uppercase tracking-wider">The Strategic Mandate</span>
                </div>
                <div className="space-y-3">
                  {project.objectives.map((obj, idx) => (
                    <div key={idx} className="flex items-start gap-3.5 text-xs md:text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircle className="w-4.5 h-4.5 text-royal-gold shrink-0 mt-0.5" />
                      <span>{obj}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right side metadata facts list */}
          <div className="md:col-span-4 space-y-8 bg-off-white dark:bg-midnight-royal/60 p-6 md:p-8 border border-royal-gold/15 rounded-3xl h-fit">
            
            {/* Basic Credentials Metadata */}
            <div className="space-y-5">
              <h3 className="font-sans text-xs font-bold text-royal-gold uppercase tracking-widest pb-3 border-b border-royal-gold/10">
                Credentials
              </h3>
              <div className="space-y-4 text-xs font-sans text-gray-600 dark:text-gray-400 text-left">
                <div className="flex justify-between items-center gap-2">
                  <span>Client</span>
                  <strong className="text-gray-900 dark:text-gilded-ivory">{project.client || 'Rayoba Partner'}</strong>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <span>Year</span>
                  <strong className="text-gray-900 dark:text-gilded-ivory">{project.year || '2025'}</strong>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <span>Domain</span>
                  <strong className="text-gray-900 dark:text-gilded-ivory">{project.category}</strong>
                </div>
              </div>
            </div>

            {/* Metrics Deliverables */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="space-y-4 pt-4 border-t border-royal-gold/10">
                <h3 className="font-sans text-xs font-bold text-royal-gold uppercase tracking-widest inline-flex items-center gap-1.5 pb-1">
                  <TrendingUp className="w-3.5 h-3.5" /> Key Benchmarks
                </h3>
                <ul className="space-y-3 text-xs md:text-xs text-gray-700 dark:text-gray-300">
                  {project.metrics.map((met, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-royal-gold mt-1">•</span>
                      <span className="leading-relaxed">{met}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.deliverables && project.deliverables.length > 0 && (
              <div className="space-y-4 pt-4 border-t border-royal-gold/10">
                <h3 className="font-sans text-xs font-bold text-royal-gold uppercase tracking-widest inline-flex items-center gap-1.5 pb-1">
                  <Sparkles className="w-3.5 h-3.5" /> Deliverables
                </h3>
                <div className="flex flex-col gap-2.5">
                  {project.deliverables.map((del, idx) => (
                    <span key={idx} className="text-xs text-gray-800 dark:text-gray-200 font-medium px-3 py-2 bg-royal-gold/5 border border-royal-gold/10 rounded-lg">
                      {del}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
