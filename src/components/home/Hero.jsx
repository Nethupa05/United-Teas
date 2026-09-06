import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";

const slides = [
  {
    kicker: "From Hill Country to the Globe",
    headline: "Fresh tea, direct from the gardens of Sri Lanka",
  },
  {
    kicker: "Tradition. Quality. Integrity.",
    headline: "150 years of Ceylon tea heritage, in every cup",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, []);

  const slide = slides[index];

  return (
    <section className="relative bg-forest-dark overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06]">
        <div className="w-full h-full" style={{
          backgroundImage: "radial-gradient(circle, #AC8A46 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }} />
      </div>

      <div className="container-page relative grid lg:grid-cols-[1.3fr_0.7fr] gap-16 pt-40 pb-24 lg:pt-48 lg:pb-32">
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <p className="text-gold text-sm mb-5">{slide.kicker}</p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.1] text-ivory max-w-xl">
                {slide.headline}
              </h1>
            </motion.div>
          </AnimatePresence>

          <p className="mt-7 text-cream/70 max-w-md leading-relaxed">
            United Teas exports garden fresh, Pure Ceylon Tea — handpicked from the country's
            finest plantations and crafted the traditional way, for over twelve years.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button to="/tea-collection" variant="solid">Explore the collection</Button>
            <Button to="/about" variant="outline">Our story</Button>
          </div>

          <div className="flex gap-2 mt-14">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Show slide ${i + 1}`}
                className={`h-[2px] transition-all duration-300 ${
                  i === index ? "w-8 bg-gold" : "w-4 bg-cream/25"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="hidden lg:flex flex-col justify-end border-l border-gold/25 pl-10">
          <p className="font-display text-5xl text-gold">12+</p>
          <p className="mt-2 text-cream/70 text-sm max-w-[16ch]">
            years exporting Pure Ceylon Tea to trade partners worldwide
          </p>
          <div className="hairline my-8 opacity-20" />
          <p className="font-display text-5xl text-gold">100%</p>
          <p className="mt-2 text-cream/70 text-sm max-w-[16ch]">
            Pure Ceylon Tea, handpicked and garden fresh
          </p>
        </div>
      </div>
    </section>
  );
}
