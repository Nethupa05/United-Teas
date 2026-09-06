import { motion } from "framer-motion";

export default function VisionaryCard({ person, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <div className="w-20 h-20 rounded-full bg-forest/10 border border-gold/30" />
      <h3 className="mt-5 text-xl text-forest-dark">{person.name}</h3>
      <p className="text-sm text-gold mt-1">{person.title}</p>
      <p className="mt-3 text-muted leading-relaxed max-w-xs">{person.bio}</p>
    </motion.div>
  );
}
