import { motion } from "framer-motion";
import { ShieldCheck, Sprout } from "lucide-react";

export default function WhoWeAre() {
  return (
    <section className="py-20 bg-cream">
      <div className="container-page grid lg:grid-cols-[1.1fr_0.9fr] gap-16">
        <div>
          <h2 className="text-3xl text-forest-dark max-w-lg">
            A consumer-focused business, built on integrity and consistency
          </h2>
          <p className="mt-6 text-muted leading-relaxed max-w-xl">
            United Teas (Pvt) Ltd was established with a strong commitment to deliver garden
            fresh, premium-quality Pure Ceylon Tea, while upholding the highest standards of
            integrity, quality, and consistency in everything we deliver.
          </p>
          <p className="mt-4 text-muted leading-relaxed max-w-xl">
            Over twelve years, we have grown into a recognised business corporation in Sri
            Lanka, led by an experienced and professional team with a strong focus on our
            consumers, customers, and trade partners alike.
          </p>

          <div className="mt-10 hairline w-16" />

          <p className="mt-10 text-xl text-forest-dark max-w-lg">
            Mathurata Plantations, Nuwara Eliya
          </p>
          <p className="mt-3 text-muted leading-relaxed max-w-xl">
            We are one of the largest buyers of tea from Mathurata Plantations, where some of
            the finest teas in the country are grown. This partnership ensures we deliver only
            the finest Ceylon tea to trade partners worldwide.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border border-forest/12 bg-ivory p-9 h-fit"
        >
          <p className="text-sm text-gold">Certifications</p>
          <div className="mt-6 space-y-6">
            <div className="flex gap-4">
              <ShieldCheck size={22} className="text-forest-dark shrink-0" strokeWidth={1.5} />
              <div>
                <p className="text-forest-dark">ISO 9001:2008</p>
                <p className="text-sm text-muted mt-1">
                  Manufacturing processes certified for quality management and food safety.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Sprout size={22} className="text-forest-dark shrink-0" strokeWidth={1.5} />
              <div>
                <p className="text-forest-dark">Sri Lanka Tea Board</p>
                <p className="text-sm text-muted mt-1">
                  Sourced and processed to standards that qualify for national quality certification.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
