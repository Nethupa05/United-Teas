import { motion } from "framer-motion";

export default function PageHero({ title, description }) {
  return (
    <section className="bg-forest-dark pt-40 pb-20">
      <div className="container-page">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl text-ivory max-w-2xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="mt-5 text-cream/75 max-w-lg text-[1.05rem] leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
