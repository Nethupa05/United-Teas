import { motion } from "framer-motion";

export default function IntroText() {
  return (
    <section className="bg-ivory py-24 md:py-32 w-full flex items-center justify-center px-6 md:px-12 relative z-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="relative max-w-4xl text-center"
      >
        {/* Top ornament */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="h-px w-10 bg-gold/60" />
          <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <span className="h-px w-10 bg-gold/60" />
        </div>

        <p className="font-[family-name:var(--font-caveat)] text-2xl md:text-3xl lg:text-4xl text-forest-dark font-semibold text-center leading-snug lg:leading-relaxed tracking-wide">
          We select only the finest handpicked teas from Sri Lanka's renowned
          plantations, combining traditional artisanal methods with modern
          precision to share the true essence of Ceylon tea with the world.
        </p>

        {/* Bottom ornament */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <span className="h-px w-10 bg-gold/60" />
          <svg className="w-6 h-6 text-gold scale-x-[-1]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <span className="h-px w-10 bg-gold/60" />
        </div>
      </motion.div>
    </section>
  );
}
