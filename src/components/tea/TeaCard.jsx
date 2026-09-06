import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

export default function TeaCard({ tea }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.4 }}
      className="border border-forest/12 bg-ivory p-7 flex flex-col"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs text-gold uppercase tracking-wide">{tea.category}</p>
          <h3 className="mt-2 text-xl text-forest-dark">{tea.name}</h3>
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Hide details" : "Show details"}
          className="shrink-0 w-9 h-9 flex items-center justify-center border border-forest/20 text-forest-dark hover:border-gold hover:text-gold transition-colors"
        >
          <Plus size={16} className={`transition-transform duration-300 ${open ? "rotate-45" : ""}`} />
        </button>
      </div>

      <p className="mt-4 text-sm text-muted">{tea.origin} · {tea.elevation}</p>
      <p className="mt-3 text-muted leading-relaxed">{tea.notes}</p>

      {open && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
          className="mt-4 pt-4 border-t border-forest/10 text-sm text-charcoal leading-relaxed overflow-hidden"
        >
          {tea.description}
        </motion.p>
      )}
    </motion.div>
  );
}
