import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "../../data/testimonials";

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 7000);
    return () => clearInterval(id);
  }, []);

  const t = testimonials[index];
  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="bg-forest-dark px-8 py-16 md:px-16 md:py-20 relative">
      <Quote size={40} className="text-gold/40" strokeWidth={1.2} />

      <AnimatePresence mode="wait">
        <motion.div
          key={t.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4 }}
          className="mt-6 max-w-2xl"
        >
          <p className="font-display text-2xl md:text-3xl text-ivory leading-snug">
            {t.quote}
          </p>
          <p className="mt-6 text-gold text-sm">
            {t.name} — {t.location}
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="flex gap-3 mt-10">
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="w-10 h-10 flex items-center justify-center border border-cream/20 text-cream hover:border-gold hover:text-gold transition-colors"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={next}
          aria-label="Next testimonial"
          className="w-10 h-10 flex items-center justify-center border border-cream/20 text-cream hover:border-gold hover:text-gold transition-colors"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
