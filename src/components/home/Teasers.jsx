import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { testimonials } from "../../data/testimonials";

function TeaserCard({ label, title, description, to, quote }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5 }}
      className="border border-forest/12 bg-ivory p-8 flex flex-col justify-between h-full"
    >
      <div>
        <p className="text-gold text-sm">{label}</p>
        <h3 className="mt-3 text-2xl text-forest-dark">{title}</h3>
        {quote ? (
          <p className="mt-4 text-muted leading-relaxed italic">&ldquo;{quote}&rdquo;</p>
        ) : (
          <p className="mt-4 text-muted leading-relaxed">{description}</p>
        )}
      </div>
      <Link
        to={to}
        className="mt-8 inline-flex items-center gap-1.5 text-forest-dark text-sm border-b border-transparent hover:border-gold transition-colors w-fit"
      >
        Read more
        <ArrowUpRight size={15} />
      </Link>
    </motion.div>
  );
}

export default function Teasers() {
  const quote = testimonials[0];

  return (
    <section className="py-24 bg-cream">
      <div className="container-page">
        <div className="grid md:grid-cols-3 gap-6">
          <TeaserCard
            label="150 years of Ceylon tea"
            title="Our Legacy"
            description="From founding vision to global exports — the milestones behind United Teas."
            to="/about/legacy"
          />
          <TeaserCard
            label="What partners say"
            title="Feedback"
            quote={quote.quote}
            to="/feedback"
          />
          <TeaserCard
            label="30+ countries"
            title="Global Clients"
            description="Trade partners across the Middle East, Europe, North America, and beyond."
            to="/global-clients"
          />
        </div>
      </div>
    </section>
  );
}
