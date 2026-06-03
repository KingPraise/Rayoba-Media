import { motion } from 'motion/react';

const PARTNERS = [
  "Vance Lux",
  "Sterling Academy",
  "Croft & Co.",
  "Arcadia Group",
  "Horizon Financial",
  "Aura Wellness",
  "Zeith Dynamics",
  "Onyx Creative",
  "Nexus Tech",
  "Astra Wealth"
];

export default function TrustedByMarquee() {
  return (
    <section className="py-12 bg-gray-100/50 dark:bg-[#070708] border-b border-royal-gold/10 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
        <h4 className="text-center font-sans text-[10px] md:text-xs font-bold text-gray-500 dark:text-gray-500 uppercase tracking-widest">
          Trusted By Sovereign Brands
        </h4>
      </div>
      
      <div className="relative flex overflow-hidden w-full group">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-100/50 dark:from-[#070708] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-100/50 dark:from-[#070708] to-transparent z-10 pointer-events-none" />
        
        <motion.div 
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap items-center flex-shrink-0"
        >
          {PARTNERS.map((partner, index) => (
            <span 
              key={`partner-1-${index}`} 
              className="mx-8 md:mx-16 font-display font-bold text-2xl md:text-3xl text-gray-400 dark:text-gray-600 opacity-50 hover:opacity-100 hover:text-royal-gold dark:hover:text-royal-gold transition-all duration-300 cursor-default"
            >
              {partner}
            </span>
          ))}
        </motion.div>
        
        <motion.div 
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap items-center flex-shrink-0"
        >
          {PARTNERS.map((partner, index) => (
            <span 
              key={`partner-2-${index}`} 
              className="mx-8 md:mx-16 font-display font-bold text-2xl md:text-3xl text-gray-400 dark:text-gray-600 opacity-50 hover:opacity-100 hover:text-royal-gold dark:hover:text-royal-gold transition-all duration-300 cursor-default"
            >
              {partner}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
