import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function CTABanner() {
  return (
    <section className="bg-forest-dark py-24">
      <div className="container-page">
        <div className="border-t border-b border-gold/25 py-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl text-ivory max-w-md"
          >
            Discover the finest Ceylon tea, crafted with 150 years of expertise.
          </motion.h2>
          <Button to="/tea-collection" variant="solid" className="w-fit">
            Explore our teas
          </Button>
        </div>
      </div>
    </section>
  );
}
