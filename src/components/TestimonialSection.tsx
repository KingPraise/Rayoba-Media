import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const TESTIMONIALS = [
  {
    id: 1,
    quote: "Rayoba Creatives did not just redesign our assets; they restructured our marketplace value. We went from chasing $500 sponsors to booking $10k retainer opportunities within 60 days.",
    name: "Sienna Sterling",
    role: "Co-founder, Sterling Academy",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    quote: "Working with Rayoba restored our brand's technical sovereignty. Their editorial grids completely transformed how our elite clientele interacts with our flagship publication.",
    name: "Elias Vance",
    role: "Director, Vance Lux",
    avatar: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    quote: "The digital showrooms created for our apparel line elevated our aesthetic positioning. They don't just build websites; they craft digital legacies.",
    name: "Amelia Croft",
    role: "CEO, Croft & Co.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
  }
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };


  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="py-24 bg-gray-50 dark:bg-[#0A0A0B] text-center px-6 md:px-12 border-y border-royal-gold/10">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } }
        }}
        className="max-w-4xl mx-auto"
      >
        {/* Top pill badge */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
          }}
          className="inline-flex items-center px-5 py-2 rounded-full bg-royal-gold/10 dark:bg-[#211A0D] text-royal-gold uppercase tracking-widest text-[10px] md:text-xs font-bold mb-6"
        >
          SOVEREIGN TESTIMONIES
        </motion.div>
        
        {/* Header */}
        <motion.h2 
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
          }}
          className="font-display text-4xl md:text-5xl font-black text-gray-950 dark:text-gilded-ivory mb-12"
        >
          Words From The Court
        </motion.h2>

        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
          }}
          className="relative min-h-[300px] flex flex-col items-center justify-center"
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: 20, pointerEvents: 'none' }}
              animate={{ 
                opacity: i === currentIndex ? 1 : 0, 
                x: i === currentIndex ? 0 : (i < currentIndex ? -20 : 20),
                pointerEvents: i === currentIndex ? 'auto' : 'none',
                position: i === currentIndex ? 'relative' : 'absolute' 
              }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="flex flex-col items-center max-w-3xl mx-auto w-full"
            >
              <h3 className="font-display italic text-xl md:text-2xl lg:text-3xl leading-relaxed text-gray-800 dark:text-gray-200 mb-10">
                "{t.quote}"
              </h3>
              
              <div className="flex items-center gap-4">
                <img 
                  src={t.avatar} 
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-royal-gold"
                />
                <div className="text-left">
                  <div className="font-sans font-bold text-royal-gold text-lg">{t.name}</div>
                  <div className="font-sans text-xs text-gray-500 dark:text-gray-400 mt-1 uppercase tracking-wider">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Controls */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
          }}
          className="mt-12 flex items-center justify-center gap-6"
        >
          <button 
            onClick={prevTestimonial}
            className="w-10 h-10 rounded-full border border-royal-gold/30 text-royal-gold hover:bg-royal-gold/10 hover:border-royal-gold flex items-center justify-center transition-all"
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-8 bg-royal-gold' : 'w-2 bg-royal-gold/30 hover:bg-royal-gold/60'}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={nextTestimonial}
            className="w-10 h-10 rounded-full border border-royal-gold/30 text-royal-gold hover:bg-royal-gold/10 hover:border-royal-gold flex items-center justify-center transition-all"
            aria-label="Next testimonial"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}

