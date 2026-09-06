import { motion } from "framer-motion";

export default function TestimonialCard({ testimonial, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="border border-forest/12 bg-ivory p-8"
    >
      <p className="text-charcoal leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
      <div className="hairline w-10 my-5" />
      <p className="text-sm text-forest-dark">{testimonial.name}</p>
      <p className="text-xs text-muted mt-0.5">{testimonial.location}</p>
    </motion.div>
  );
}
