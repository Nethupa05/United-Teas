import { motion } from "framer-motion";
import { journeySteps } from "../../data/journeySteps";
import SectionHeading from "../ui/SectionHeading";

export default function JourneySteps() {
  return (
    <section className="py-24 bg-forest-dark">
      <div className="container-page">
        <SectionHeading
          title="From garden to cup"
          lede="Every batch passes through four stages before it reaches a trade partner's table."
          tone="light"
        />

        <div className="mt-14 grid md:grid-cols-2 gap-x-12 gap-y-12">
          {journeySteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex gap-6"
            >
              <span className="font-display text-2xl text-gold/70 shrink-0 w-10">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-xl text-ivory">{step.title}</h3>
                <p className="mt-2 text-cream/65 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
