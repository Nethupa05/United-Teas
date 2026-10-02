import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ExportStory() {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["0 1", "0.6 1"],
  });

  const imageX = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
  const textX = useTransform(scrollYProgress, [0, 1], ["20%", "0%"]);

  return (
    <section
      ref={sectionRef}
      className="bg-ivory pb-12 md:pb-16 w-full px-6 md:px-12 relative z-10 overflow-hidden"
    >
      <div className="container-page max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
        {/* Image */}
        <motion.div style={{ x: imageX }} className="md:col-span-5 relative">
          <div className="relative rounded-r-sm overflow-hidden ring-1 ring-gold/30 shadow-[0_12px_40px_-12px_rgba(28,43,32,0.35)] ml-[calc(-3rem)] w-[calc(100%+3rem)] md:ml-[calc(-1*max(4.5rem,calc(50vw-34.5rem)))] md:w-[calc(100%+max(4.5rem,calc(50vw-34.5rem)))]">
            <img
              src="/images/engteadrink.webp"
              alt="Tea leaves being sorted and prepared for export"
              className="w-full h-[420px] md:h-[520px] object-cover grayscale-[15%] sepia-[15%] contrast-[1.05]"
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div style={{ x: textX }} className="md:col-span-7">
          <h2 className="font-jakarta text-3xl md:text-4xl lg:text-[2.75rem] text-forest-dark leading-tight mb-6 max-w-lg">
            From our estates to <br className="hidden lg:block" />
            <span className="font-[family-name:var(--font-caveat)] text-forest text-5xl md:text-6xl lg:text-[4.5rem] tracking-wide mt-2 inline-block">
              10+ countries
            </span>
          </h2>

          <p className="font-sans text-lg md:text-xl leading-relaxed text-forest-dark/80 max-w-xl">
            Premium, hand-graded Ceylon tea, exported to importers who settle
            for nothing less.
          </p>
        </motion.div>
      </div>
    </section>
  );
}