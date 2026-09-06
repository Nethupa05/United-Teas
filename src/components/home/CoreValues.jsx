import { motion } from "framer-motion";
import { Leaf, Award, Lightbulb, Globe2 } from "lucide-react";
import { coreValues } from "../../data/coreValues";
import SectionHeading from "../ui/SectionHeading";

const icons = {
  "garden-fresh": Leaf,
  traditional: Award,
  innovation: Lightbulb,
  "pure-ceylon": Globe2,
};

export default function CoreValues() {
  return (
    <section className="py-24 bg-cream">
      <div className="container-page">
        <SectionHeading
          title="What drives us"
          lede="Four principles guide every decision, from the auction floor to the final pack."
        />

        <div className="mt-14 border-t border-forest/10">
          {coreValues.map((value, i) => {
            const Icon = icons[value.id];
            return (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="grid md:grid-cols-[auto_1fr_1.4fr] gap-4 md:gap-10 items-start py-8 border-b border-forest/10"
              >
                <Icon size={26} className="text-gold mt-1" strokeWidth={1.5} />
                <h3 className="text-xl text-forest-dark">{value.title}</h3>
                <p className="text-muted leading-relaxed">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
