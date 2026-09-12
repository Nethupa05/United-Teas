import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Layers } from "lucide-react";

// Tea collection dataset
const TEA_VARIANTS = [
  {
    id: "black-tea",
    name: "Black Tea",
    keyword: "Black Tea",
    subtitle:
      "Hand-plucked orthodox whole leaf. Brews to a luminescent ruby-amber liquor with brisk malt undertones, refined citrus notes, and a lingering golden finish.",
    color: "#841E26",
    dotColor: "#841E26",
    glowColor: "rgba(132, 30, 38, 0.16)",
    image: "/images/black-tea.png",
  },
  {
    id: "fruit-tea",
    name: "Fruit Tea",
    keyword: "Fruit Infusion",
    subtitle:
      "A sun-drenched melange of hand-selected Ceylon leaves tossed with sun-dried passionfruit, sweet orange peel, and hibiscus petals. Vibrant, aromatic, and naturally nectarous.",
    color: "#C85E25",
    dotColor: "#C85E25",
    glowColor: "rgba(200, 94, 37, 0.16)",
    image: "/images/fruit-tea.png",
  },
  {
    id: "green-tea",
    name: "Green Tea",
    keyword: "Green Tea",
    subtitle:
      "Tender young spring buds pan-fired in the heritage artisanal tradition. Unfurls with a pristine jade cup, fresh grassy bouquet, and a silken, honeyed sweetness free of bitterness.",
    color: "#1C613D",
    dotColor: "#1C613D",
    glowColor: "rgba(28, 97, 61, 0.15)",
    image: "/images/green-tea.png",
  },
  {
    id: "herbal-tea",
    name: "Herbal Tea",
    keyword: "Herbal Infusion",
    subtitle:
      "A serene evening restorative blending calming whole chamomile blossoms, wild butterfly pea flower, fragrant lemongrass, and native Ceylon herbs for deep restorative balance.",
    color: "#1B3A82",
    dotColor: "#1B3A82",
    glowColor: "rgba(27, 58, 130, 0.16)",
    image: "/images/herbal-tea.png",
  },
];

// Slot definitions — the two on-stage positions. Every tea animates
// between these via `layout`, so switching is a continuous slide
// rather than an unmount/remount fade.
const SLOTS = {
  primary: { left: "14%", top: "46%", scale: 1.08, zIndex: 20, opacity: 1, floatDuration: 5.6 },
  secondary: { left: "66%", top: "54%", scale: 0.78, zIndex: 10, opacity: 0.72, floatDuration: 7.2 },
};

// A single line-art tea leaf (Camellia sinensis), used as a faint
// watermark motif — central vein plus paired side veins, drawn with
// `currentColor` so it inherits the forest-dark tone at low opacity.
function TeaLeafMotif({ top, left, right, bottom, size = 120, rotate = 0, opacity = 0.05, flip = false }) {
  return (
    <svg
      viewBox="0 0 100 140"
      width={size}
      height={size * 1.4}
      style={{
        position: "absolute",
        top,
        left,
        right,
        bottom,
        opacity,
        transform: `rotate(${rotate}deg)${flip ? " scaleX(-1)" : ""}`,
      }}
      fill="none"
    >
      <path
        d="M50 4 C 78 28, 92 62, 70 100 C 60 118, 52 130, 50 136 C 48 130, 40 118, 30 100 C 8 62, 22 28, 50 4 Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M50 10 L50 128" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M50 30 L30 46 M50 30 L70 46 M50 55 L26 72 M50 55 L74 72 M50 80 L32 96 M50 80 L68 96 M50 102 L38 114 M50 102 L62 114"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}

export default function TeaCollection() {
  // `order` is the full rotation queue: order[0] is on the primary slot,
  // order[1] is on the secondary slot, order[2]/order[3] are waiting
  // off-stage. This avoids a 2-item ping-pong: promoting the secondary
  // always pulls in a fresh third item behind it, and the old primary
  // is sent to the back of the queue instead of bouncing straight back
  // into the secondary slot.
  const [order, setOrder] = useState(TEA_VARIANTS.map((t) => t.id));
  const teaById = Object.fromEntries(TEA_VARIANTS.map((t) => [t.id, t]));

  const promote = (id) => {
    setOrder((prev) => {
      if (id === prev[0]) return prev; // already primary, no-op
      if (id === prev[1]) {
        // Promoting the secondary: rotate the whole queue left by one.
        // Old primary goes to the back (exits), old secondary becomes
        // primary, and the third item in line becomes the new secondary.
        return [...prev.slice(1), prev[0]];
      }
      // Arbitrary pick from the product list: bring it to the front,
      // keep everyone else in their existing relative order behind it.
      return [id, ...prev.filter((x) => x !== id)];
    });
  };

  const activeTea = teaById[order[0]];
  const companionTea = teaById[order[1]];

  // Only the two teas currently on stage get rendered. When either one
  // changes to a tea that wasn't already on stage, AnimatePresence
  // slides it in/out; when a tea stays on stage but swaps slots (e.g.
  // clicking the background item to promote it), the shared `layout`
  // key means it just glides to its new position.
  const onStage = [
    { tea: activeTea, slot: "primary" },
    { tea: companionTea, slot: "secondary" },
  ];

  return (
    <div className="relative w-full h-[calc(100dvh-5rem)] mt-20 overflow-hidden bg-[#FAF8F5] select-none text-charcoal">
      {/* Fine paper grain — a nod to kraft tea packaging, kept very
          faint so it reads as texture rather than noise */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.035] mix-blend-multiply"
      >
        <filter id="teaGrain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" result="noise" />
          <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.6 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#teaGrain)" />
      </svg>

      {/* Ambient aura that shifts with the active blend */}
      <motion.div
        className="pointer-events-none absolute inset-0 transition-colors duration-1000 ease-out"
        animate={{
          background: `radial-gradient(circle at 68% 48%, ${activeTea.glowColor} 0%, rgba(250, 248, 245, 0.0) 62%)`,
        }}
      />

      <div className="hidden lg:block absolute left-[40%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-forest-dark/10 to-transparent z-10 pointer-events-none" />

      <div className="relative z-10 w-full h-full flex flex-col lg:flex-row">
        {/* LEFT: name + description + product list */}
        <div className="relative w-full lg:w-[40%] h-full flex flex-col justify-between px-8 sm:px-12 lg:pl-16 lg:pr-10 py-8 lg:py-10 z-20">
          <div className="absolute inset-0 overflow-hidden pointer-events-none text-forest-dark" aria-hidden="true">
            <TeaLeafMotif top="-48px" left="-36px" size={190} rotate={-16} opacity={0.05} />
            <TeaLeafMotif top="40%" left="2%" size={64} rotate={10} opacity={0.04} />
            <TeaLeafMotif bottom="8%" left="56%" size={110} rotate={26} opacity={0.045} flip />
          </div>

          <div className="relative z-10 my-auto py-4 space-y-6">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.6rem] leading-[1.06] text-forest-dark tracking-tight">
              Finest Ceylon{" "}
              <span className="block mt-1">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={activeTea.id}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="italic font-normal transition-colors duration-500"
                    style={{ color: activeTea.color }}
                  >
                    {activeTea.keyword}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>

            <AnimatePresence mode="wait">
              <motion.p
                key={activeTea.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="text-sm sm:text-base text-muted leading-relaxed max-w-md font-sans"
              >
                {activeTea.subtitle}
              </motion.p>
            </AnimatePresence>

            {/* Product list / selector */}
            <div className="pt-2">
              <div className="text-[11px] font-semibold uppercase tracking-widest text-muted/80 mb-3 flex items-center gap-2">
                <span>Select Flavor Blend</span>
                <div className="h-[1px] flex-1 bg-forest-dark/10 max-w-[120px]" />
              </div>

              <div className="flex flex-col space-y-2.5" role="tablist" aria-label="Tea Flavor Selector">
                {TEA_VARIANTS.map((tea) => {
                  const isSelected = tea.id === activeTea.id;
                  return (
                    <button
                      key={tea.id}
                      onClick={() => promote(tea.id)}
                      role="tab"
                      aria-selected={isSelected}
                      className={`group relative flex items-center gap-3 w-full max-w-xs text-left px-3.5 py-2.5 rounded-lg transition-all duration-300 ${
                        isSelected
                          ? "bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] border border-forest-dark/10"
                          : "hover:bg-white/60 text-muted hover:text-charcoal border border-transparent"
                      }`}
                    >
                      <span
                        className="relative block w-3 h-3 rounded-full transition-all duration-300 shadow-sm"
                        style={{
                          backgroundColor: tea.dotColor,
                          transform: isSelected ? "scale(1.15)" : "scale(1)",
                        }}
                      />
                      <span
                        className={`text-sm tracking-wide transition-colors ${
                          isSelected
                            ? "font-semibold text-forest-dark"
                            : "font-normal text-muted group-hover:text-charcoal"
                        }`}
                      >
                        {tea.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="relative z-10 flex items-center gap-4 pt-4 border-t border-forest-dark/10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-forest-dark text-ivory hover:bg-forest-light hover:text-gold transition-all duration-200 shadow-sm"
            >
              <span>Inquire for Trade</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* RIGHT: product staging area */}
        <div className="w-full lg:w-[60%] h-full relative overflow-hidden flex items-center justify-center">
          <AnimatePresence initial={false}>
            {onStage.map(({ tea, slot }) => {
              const cfg = SLOTS[slot];
              const isPrimary = slot === "primary";
              return (
                <motion.div
                  key={tea.id}
                  layout
                  layoutId={tea.id}
                  className="absolute -translate-y-1/2 cursor-pointer select-none"
                  style={{ left: cfg.left, top: cfg.top, zIndex: cfg.zIndex }}
                  initial={{ opacity: 0, x: 150, scale: cfg.scale * 0.9 }}
                  animate={{ opacity: cfg.opacity, x: 0, scale: cfg.scale }}
                  exit={{ opacity: 0, x: -180, scale: cfg.scale * 0.85 }}
                  transition={{
                    layout: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                    default: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                  }}
                  onClick={() => !isPrimary && promote(tea.id)}
                  title={!isPrimary ? `Focus on ${tea.name}` : undefined}
                  whileHover={!isPrimary ? { scale: cfg.scale * 1.05 } : undefined}
                >
                  {/* Ground shadow */}
                  <motion.div
                    className="absolute left-1/2 -bottom-10 -translate-x-1/2 rounded-full pointer-events-none"
                    style={{
                      width: isPrimary ? "320px" : "220px",
                      height: isPrimary ? "36px" : "28px",
                      background:
                        "radial-gradient(ellipse at center, rgba(33, 31, 26, 0.22) 0%, rgba(33, 31, 26, 0) 70%)",
                      filter: "blur(7px)",
                    }}
                    animate={{ scale: [1, 0.86, 1], opacity: [0.4, 0.24, 0.4] }}
                    transition={{ duration: cfg.floatDuration, repeat: Infinity, ease: "easeInOut" }}
                  />

                  {/* Idle antigravity float, independent of slot transitions */}
                  <motion.div
                    animate={{
                      y: isPrimary ? [-14, 14, -14] : [12, -14, 12],
                      rotate: isPrimary ? [-1.2, 1.4, -1.2] : [1.8, -1.2, 1.8],
                    }}
                    transition={{ duration: cfg.floatDuration, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <img
                      src={tea.image}
                      alt={tea.name}
                      draggable={false}
                      className={`h-auto object-contain filter transition-opacity duration-300 ${
                        isPrimary
                          ? "w-[340px] sm:w-[410px] lg:w-[470px] xl:w-[500px] drop-shadow-[0_28px_35px_rgba(0,0,0,0.18)]"
                          : "w-[260px] sm:w-[310px] lg:w-[350px] drop-shadow-[0_20px_25px_rgba(0,0,0,0.14)] group-hover:opacity-95"
                      }`}
                    />

                    {isPrimary && (
                      <div
                        className="pointer-events-none absolute -inset-6 rounded-full opacity-20 blur-xl"
                        style={{ background: `radial-gradient(circle, ${tea.color} 0%, transparent 60%)` }}
                      />
                    )}

                    {!isPrimary && (
                      <div className="absolute -bottom-2 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm border border-forest-dark/10 rounded-full shadow-sm text-[11px] text-muted flex items-center gap-1.5">
                        {/* <span className="w-2 h-2 rounded-full" style={{ backgroundColor: tea.dotColor }} />
                        <span>{tea.name}</span>
                        <span className="text-[9px] text-gold uppercase tracking-wider font-semibold">
                          · Tap to swap
                        </span> */}
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}