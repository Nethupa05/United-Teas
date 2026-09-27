import { useState, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Handpicked Selection",
    text: "Our teas are handpicked and carefully selected from some of the finest plantations in the country, and from the Colombo Tea Auctions, where the country's best teas are auctioned daily.",
    image: "https://696cc31bb4314a7cce671fda--unitedteastest.netlify.app/background/Picture3.jpg",
  },
  {
    number: "02",
    title: "Quality Control & Blending",
    text: "A stringent quality process runs through blending, tasting, and packing, carried out by experienced professionals to a standard that meets international benchmarks.",
    image: "https://696cc31bb4314a7cce671fda--unitedteastest.netlify.app/background/Picture9.png",
  },
  {
    number: "03",
    title: "World-Class Packing",
    text: "Packed at origin using advanced, technologically current machinery, in a plant certified to ISO 9001:2008 and food safety standards.",
    image: "https://696cc31bb4314a7cce671fda--unitedteastest.netlify.app/background/image10.png",
  },
  {
    number: "04",
    title: "Quality Certification",
    text: "Sourced from plantations at specified elevations and processed under systems that qualify for certification from the Sri Lanka Tea Board and international bodies.",
    image: "https://696cc31bb4314a7cce671fda--unitedteastest.netlify.app/background/Picture10.png",
  },
];

export default function GardenToCup() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["0 1", "0.6 1"]
  });

  const imageX = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const textX = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);

  const handleNext = () => setActive((prev) => (prev + 1) % steps.length);
  const handlePrev = () => setActive((prev) => (prev - 1 + steps.length) % steps.length);

  const currentStep = steps[active];

  return (
    <section ref={sectionRef} className="bg-ivory py-24 md:py-32 px-6 md:px-12 relative overflow-hidden text-forest-dark z-10">
      {/* Abstract background curves */}
      <svg className="absolute w-[150vw] h-[150vh] -left-[25vw] -top-[25vh] pointer-events-none opacity-[0.08] text-forest-dark" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="0.05">
        <path d="M 0 40 Q 40 70 100 30" />
        <path d="M 0 45 Q 40 75 100 35" />
        <path d="M 0 50 Q 40 80 100 40" />
        <path d="M 0 55 Q 40 85 100 45" />
      </svg>

      <div className="container-page max-w-7xl mx-auto relative z-10">
        {/* Eyebrow and Headline */}
        <div className="text-center mb-20 md:mb-28">
          <span className="text-xs md:text-sm font-sans tracking-[0.25em] uppercase font-bold mb-6 block">
            From garden to cup
          </span>
          <h2 className="font-jakarta text-3xl md:text-5xl lg:text-[3.5rem] leading-snug md:leading-tight max-w-5xl mx-auto">
            Every batch passes through{" "}
            <span className="font-[family-name:var(--font-caveat)] text-5xl md:text-7xl lg:text-[5.5rem] font-normal tracking-wide mx-2 block md:inline-block">
              four stages
            </span>{" "}
            before it reaches a{" "}
            <span className="font-[family-name:var(--font-caveat)] text-5xl md:text-7xl lg:text-[5.5rem] font-normal tracking-wide mx-2 block md:inline-block">
              trade partner's table
            </span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Images (Swapped to right on desktop) */}
          <motion.div style={{ x: imageX }} className="relative w-[85%] md:w-[75%] ml-auto md:order-last aspect-[4/5] md:aspect-[3/4]">
            <div className="relative w-[calc(100%+3.5rem)] mr-[calc(-3.5rem)] md:w-[calc(100%+max(4.5rem,calc(50vw-34rem)))] md:mr-[calc(-1*max(4.5rem,calc(50vw-34rem)))] h-full">
              {/* Main Image Crossfade */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 rounded-l-2xl md:rounded-l-[2rem] overflow-hidden shadow-2xl bg-forest-dark/10"
                >
                  <img src={currentStep.image} alt={currentStep.title} className="w-full h-full object-cover" />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div style={{ x: textX }} className="flex flex-col pt-12 md:pt-0">
            {/* Controls */}
            <div className="flex items-center gap-8 mb-8 md:mb-10">
              <span className="font-sans text-sm font-bold tracking-[0.25em]">
                {currentStep.number} / 04
              </span>
              <div className="flex gap-8">
                <button onClick={handlePrev} className="hover:opacity-50 transition-opacity" aria-label="Previous">
                  <ArrowLeft size={20} strokeWidth={1.5} />
                </button>
                <button onClick={handleNext} className="hover:opacity-50 transition-opacity" aria-label="Next">
                  <ArrowRight size={20} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Text Crossfade */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${active}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <h3 className="font-jakarta text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
                  {currentStep.title}
                </h3>
                <p className="font-sans text-base md:text-lg lg:text-xl leading-relaxed opacity-90 mb-10 max-w-md font-medium">
                  {currentStep.text}
                </p>

              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}