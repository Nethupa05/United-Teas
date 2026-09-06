import { motion } from "framer-motion";
import { milestones } from "../../data/legacyMilestones";

export default function LegacyTimeline() {
  return (
    <div className="relative pl-8 md:pl-0">
      <div className="hidden md:block absolute left-[7.5rem] top-2 bottom-2 w-px bg-forest/15" />
      <div className="md:hidden absolute left-2 top-2 bottom-2 w-px bg-forest/15" />

      <div className="space-y-14">
        {milestones.map((m, i) => (
          <motion.div
            key={m.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="relative grid md:grid-cols-[7.5rem_1fr] gap-2 md:gap-10"
          >
            <div className="hidden md:block text-right text-sm text-gold pt-1">{m.label}</div>
            <div className="absolute -left-8 md:left-[7.25rem] top-1.5 w-2.5 h-2.5 rounded-full bg-gold" />
            <div>
              <p className="md:hidden text-sm text-gold mb-1">{m.label}</p>
              <h3 className="text-xl text-forest-dark">{m.title}</h3>
              <p className="mt-2 text-muted leading-relaxed max-w-xl">{m.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
