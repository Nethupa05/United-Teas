import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { testimonials } from "../../data/testimonials";

function TeaserCard({ label, title, description, to, quote, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="relative bg-ivory border border-forest-dark/10 rounded-2xl p-8 md:p-10 flex flex-col justify-between h-full overflow-hidden group hover:border-gold/40 hover:shadow-2xl hover:shadow-forest-dark/5 transition-all duration-500"
    >
      {/* Decorative SVGs */}
      {index === 0 && (
        <svg className="absolute -bottom-8 -right-8 w-56 h-56 text-forest-dark/[0.03] group-hover:text-gold/10 transition-colors duration-700 pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 0 C50 50, 100 50, 100 100 C100 50, 50 50, 50 0 Z" />
          <path d="M50 0 C50 50, 0 50, 0 100 C0 50, 50 50, 50 0 Z" opacity="0.6" />
        </svg>
      )}
      {index === 1 && (
        <span className="absolute -top-2 right-4 text-[160px] font-serif leading-none text-forest-dark/[0.03] group-hover:text-gold/10 transition-colors duration-700 pointer-events-none select-none">
          “
        </span>
      )}
      {index === 2 && (
        <svg className="absolute -bottom-12 -right-12 w-64 h-64 text-forest-dark/[0.03] group-hover:text-gold/10 transition-colors duration-700 pointer-events-none" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
          <circle cx="50" cy="50" r="40" />
          <ellipse cx="50" cy="50" rx="20" ry="40" />
          <line x1="10" y1="50" x2="90" y2="50" />
          <ellipse cx="50" cy="50" rx="40" ry="20" />
        </svg>
      )}

      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-6">
          <span className="font-[family-name:var(--font-caveat)] text-forest-light text-2xl md:text-3xl tracking-wide mb-2 block">
            {label}
          </span>
          <h3 className="font-jakarta text-3xl md:text-4xl text-forest-dark font-medium tracking-tight">
            {title}
          </h3>
        </div>
        
        <div className="flex-grow">
          {quote ? (
            <p className="text-forest-dark/75 text-lg leading-relaxed italic">
              &ldquo;{quote}&rdquo;
            </p>
          ) : (
            <p className="text-forest-dark/75 text-lg leading-relaxed">
              {description}
            </p>
          )}
        </div>

        <Link
          to={to}
          className="mt-10 inline-flex items-center gap-3 text-forest-dark text-xs md:text-sm uppercase tracking-[0.2em] font-bold group-hover:text-gold transition-colors w-fit relative after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-0 after:h-[1px] after:bg-gold hover:after:w-full after:transition-all after:duration-300"
        >
          Read more
          <ArrowUpRight size={16} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </div>
    </motion.div>
  );
}

export default function Teasers() {
  const quote = testimonials[0];

  return (
    <section className="py-24 md:py-32 bg-ivory">
      <div className="container-page max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          <TeaserCard
            index={0}
            label="150 years of Ceylon tea"
            title="Our Legacy"
            description="From founding vision to global exports, the milestones behind United Teas."
            to="/about/legacy"
          />
          <TeaserCard
            index={1}
            label="What partners say"
            title="Feedback"
            quote={quote.quote}
            to="/feedback"
          />
          <TeaserCard
            index={2}
            label="30+ countries"
            title="Global Clients"
            description="Trade partners across the Asia, Middle East, Europe and beyond."
            to="/global-clients"
          />
        </div>
      </div>
    </section>
  );
}
