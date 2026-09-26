import { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionTemplate,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";

// ---------------------------------------------------------------------
// Stage scenes — small illustrated, internally-animated vignettes.
// Each takes `isStatic`: true renders the same artwork with no motion,
// used for the mobile / reduced-motion fallback.
// ---------------------------------------------------------------------

function PluckScene({ isStatic }) {
  return (
    <svg viewBox="0 0 300 260" className="w-full h-full" fill="none">
      <motion.g
        animate={isStatic ? undefined : { y: [0, 24, 0] }}
        transition={isStatic ? undefined : { duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M150 54 C 144 70, 146 84, 158 92 C 170 84, 172 70, 166 54 Z" stroke="var(--color-gold)" strokeWidth="2" />
        <path d="M150 92 L150 132" stroke="var(--color-gold)" strokeWidth="2.4" strokeLinecap="round" />
      </motion.g>
      <motion.circle
        cx="158"
        cy="66"
        r="4"
        fill="var(--color-gold)"
        initial={{ opacity: 1, y: 0 }}
        animate={isStatic ? undefined : { opacity: [1, 1, 0], y: [0, -8, -34] }}
        transition={isStatic ? undefined : { duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
      />
      {[70, 130, 210].map((x, i) => (
        <ellipse
          key={i}
          cx={x}
          cy={168 - (i % 2) * 8}
          rx="20"
          ry="10"
          stroke="var(--color-gold-soft)"
          strokeWidth="1.2"
          opacity="0.55"
        />
      ))}
    </svg>
  );
}

function WitherScene({ isStatic }) {
  return (
    <svg viewBox="0 0 300 260" className="w-full h-full" fill="none">
      <rect x="46" y="150" width="208" height="24" rx="4" stroke="var(--color-gold)" strokeWidth="2" />
      <path
        d="M60 174 V196 M96 174 V196 M132 174 V196 M168 174 V196 M204 174 V196 M240 174 V196"
        stroke="var(--color-gold)"
        strokeWidth="1.4"
        opacity="0.6"
      />
      {[70, 108, 146, 184, 222].map((x, i) => (
        <ellipse key={i} cx={x} cy={138 - (i % 2) * 4} rx="18" ry="7" stroke="var(--color-gold-soft)" strokeWidth="1.3" opacity="0.65" />
      ))}
      <motion.g
        style={{ transformOrigin: "150px 92px" }}
        animate={isStatic ? undefined : { rotate: 360 }}
        transition={isStatic ? undefined : { duration: 3.2, repeat: Infinity, ease: "linear" }}
      >
        <circle cx="150" cy="92" r="4" fill="var(--color-gold)" />
        <path d="M150 92 L150 62 M150 92 L176 106 M150 92 L124 106" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" />
      </motion.g>
      <motion.path
        d="M196 84 C 210 84, 222 90, 232 90"
        stroke="var(--color-cream)"
        strokeWidth="1.4"
        opacity="0.4"
        animate={isStatic ? undefined : { opacity: [0.1, 0.5, 0.1], x: [0, 8, 0] }}
        transition={isStatic ? undefined : { duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}

function RollScene({ isStatic }) {
  const leaves = [
    { r: 46, size: 10, duration: 4.5 },
    { r: 62, size: 8, duration: 6 },
    { r: 30, size: 7, duration: 3.4 },
  ];
  return (
    <svg viewBox="0 0 300 260" className="w-full h-full" fill="none">
      <circle cx="150" cy="120" r="20" stroke="var(--color-gold)" strokeWidth="2.2" />
      <path
        d="M138 108 L162 132 M138 132 L162 108"
        stroke="var(--color-gold)"
        strokeWidth="1.6"
        opacity="0.7"
      />
      {leaves.map((leaf, i) => (
        <motion.g
          key={i}
          style={{ transformOrigin: "150px 120px" }}
          animate={isStatic ? undefined : { rotate: i % 2 === 0 ? 360 : -360 }}
          transition={isStatic ? undefined : { duration: leaf.duration, repeat: Infinity, ease: "linear" }}
        >
          <ellipse cx={150 + leaf.r} cy="120" rx={leaf.size} ry={leaf.size * 0.6} stroke="var(--color-gold-soft)" strokeWidth="1.4" />
        </motion.g>
      ))}
    </svg>
  );
}

function OxidizeScene({ isStatic }) {
  return (
    <svg viewBox="0 0 300 260" className="w-full h-full" fill="none">
      <defs>
        <clipPath id="leafClip">
          <path d="M150 40 C 182 66, 198 104, 172 148 C 160 168, 152 182, 150 190 C 148 182, 140 168, 128 148 C 102 104, 118 66, 150 40 Z" />
        </clipPath>
      </defs>
      <path
        d="M150 40 C 182 66, 198 104, 172 148 C 160 168, 152 182, 150 190 C 148 182, 140 168, 128 148 C 102 104, 118 66, 150 40 Z"
        stroke="var(--color-gold)"
        strokeWidth="2"
      />
      <g clipPath="url(#leafClip)">
        <motion.rect
          x="90"
          y="30"
          width="0"
          height="170"
          fill="var(--color-rust)"
          initial={{ width: 0, opacity: 0.85 }}
          animate={isStatic ? { width: 130 } : { width: [0, 130, 0] }}
          transition={isStatic ? undefined : { duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </g>
      {[0, 1].map((i) => (
        <motion.path
          key={i}
          d={`M${186 + i * 10} 150 C ${196 + i * 10} 132, ${182 + i * 10} 118, ${190 + i * 10} 98`}
          stroke="var(--color-cream)"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.5"
          initial={{ opacity: 0.15, y: 0 }}
          animate={isStatic ? undefined : { opacity: [0.1, 0.5, 0.1], y: [0, -14, 0] }}
          transition={isStatic ? undefined : { duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
        />
      ))}
    </svg>
  );
}

function FireScene({ isStatic }) {
  return (
    <svg viewBox="0 0 300 260" className="w-full h-full" fill="none">
      <rect x="86" y="150" width="128" height="18" rx="3" stroke="var(--color-gold)" strokeWidth="2.2" />
      <path d="M96 168 L96 186 M204 168 L204 186" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" />
      {[110, 150, 190].map((x, i) => (
        <motion.path
          key={i}
          d={`M${x} 130 C ${x - 8} 112, ${x + 8} 100, ${x} 80`}
          stroke="var(--color-rust)"
          strokeWidth="2"
          strokeLinecap="round"
          animate={isStatic ? undefined : { scaleY: [1, 1.25, 1], y: [0, -4, 0] }}
          transition={isStatic ? undefined : { duration: 1.4 + i * 0.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }}
          style={{ transformOrigin: `${x}px 130px` }}
        />
      ))}
      {[70, 230].map((x, i) => (
        <motion.path
          key={i}
          d={`M${x} 60 C ${x + 6} 48, ${x - 6} 40, ${x} 28`}
          stroke="var(--color-cream)"
          strokeWidth="1.2"
          opacity="0.35"
          animate={isStatic ? undefined : { x: [0, 4, -4, 0] }}
          transition={isStatic ? undefined : { duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
        />
      ))}
    </svg>
  );
}

function CupScene({ isStatic }) {
  return (
    <svg viewBox="0 0 300 260" className="w-full h-full" fill="none">
      <defs>
        <clipPath id="cupClip">
          <path d="M110 116 H190 V150 C190 172, 174 186, 150 186 C126 186, 110 172, 110 150 Z" />
        </clipPath>
      </defs>
      <path d="M108 106 H192 V150 C192 174, 174 188, 150 188 C126 188, 108 174, 108 150 Z" stroke="var(--color-gold)" strokeWidth="2.2" />
      <path d="M192 116 C 208 116, 214 132, 202 140" stroke="var(--color-gold)" strokeWidth="2.2" />
      <path d="M104 106 H196" stroke="var(--color-gold)" strokeWidth="2.2" />
      <g clipPath="url(#cupClip)">
        <motion.rect
          x="104"
          y="188"
          width="96"
          height="0"
          fill="var(--color-rust)"
          opacity="0.85"
          initial={{ height: 0 }}
          animate={{ height: 70 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        />
      </g>
      {[0, 1].map((i) => (
        <motion.path
          key={i}
          d={`M${138 + i * 24} 96 C ${148 + i * 24} 84, ${132 + i * 24} 74, ${142 + i * 24} 60`}
          stroke="var(--color-cream)"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.5"
          animate={isStatic ? undefined : { opacity: [0.15, 0.55, 0.15], y: [0, -10, 0] }}
          transition={isStatic ? undefined : { duration: 2.8 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
        />
      ))}
    </svg>
  );
}

const STAGES = [
  {
    key: "pluck",
    title: "Plucking",
    body: "Two leaves and a bud, hand-plucked each morning across the high-grown gardens.",
    Scene: PluckScene,
  },
  {
    key: "wither",
    title: "Withering",
    body: "Spread thin on troughs, the leaves soften in the cool mountain air for up to eighteen hours.",
    Scene: WitherScene,
  },
  {
    key: "roll",
    title: "Rolling",
    body: "Rolled to break the cell walls, releasing the enzymes that build flavor and aroma.",
    Scene: RollScene,
  },
  {
    key: "oxidise",
    title: "Oxidation",
    body: "Left to rest and darken, developing the color and character of the finished leaf.",
    Scene: OxidizeScene,
  },
  {
    key: "fire",
    title: "Firing",
    body: "Fixed with heat to halt oxidation and lock in the aroma.",
    Scene: FireScene,
  },
  {
    key: "cup",
    title: "The Cup",
    body: "Graded, packed, and shipped — Pure Ceylon Tea, ready to pour.",
    Scene: CupScene,
  },
];

const STOPS = [0, 0.2, 0.4, 0.6, 0.8, 1];
const SKY_TOP = ["#F6ECD2", "#F2E2B0", "#E9CE8A", "#C98F52", "#5B3B2E", "#111E19"];
const SKY_BOTTOM = ["#EADFC0", "#E3D19C", "#D3B36E", "#A8703C", "#3A2A22", "#0B211B"];
const ORB_COLOR = ["#F2C77A", "#F5CE73", "#F0C463", "#E3924B", "#C97A46", "#EDE6D2"];

const RING_RADIUS = 16;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

// Non-scroll-jacked rendering — small screens and reduced-motion visitors.
function StaticJourney() {
  return (
    <section className="relative bg-forest-dark py-20">
      <div className="container-page">
        <p className="text-gold text-sm mb-4">The Journey</p>
        <h2 className="font-display text-3xl text-ivory mb-12 max-w-sm">From leaf to cup</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {STAGES.map((s) => {
            const Scene = s.Scene;
            return (
              <div key={s.key}>
                <div className="w-20 h-20 mb-4 text-gold">
                  <Scene isStatic />
                </div>
                <h3 className="font-display text-xl text-ivory mb-2">{s.title}</h3>
                <p className="text-cream/70 text-sm leading-relaxed">{s.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function ProcessJourney() {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const ringProgress = useTransform(scrollYProgress, (v) => {
    const scaled = v * STAGES.length;
    return Math.min(1, Math.max(0, scaled - Math.floor(scaled)));
  });
  const dashOffset = useTransform(ringProgress, (v) => RING_CIRCUMFERENCE * (1 - v));

  // Time-of-day backdrop: sky gradient + an arcing sun/moon disc that
  // dips behind the hillside at the start (dawn) and end (dusk/night).
  const skyTop = useTransform(scrollYProgress, STOPS, SKY_TOP);
  const skyBottom = useTransform(scrollYProgress, STOPS, SKY_BOTTOM);
  const skyBackground = useMotionTemplate`linear-gradient(to bottom, ${skyTop}, ${skyBottom})`;
  const orbColor = useTransform(scrollYProgress, STOPS, ORB_COLOR);
  const orbLeft = useTransform(scrollYProgress, [0, 1], ["6%", "92%"]);
  const orbTop = useTransform(scrollYProgress, (v) => `${60 - 46 * Math.sin(v * Math.PI)}%`);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [0.4, 0.35, 0.15]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(STAGES.length - 1, Math.floor(v * STAGES.length));
    setActive(idx);
  });

  if (reduceMotion) {
    return <StaticJourney />;
  }

  const stage = STAGES[active];
  const Scene = stage.Scene;

  return (
    <>
      <div className="lg:hidden">
        <StaticJourney />
      </div>

      <section
        ref={sectionRef}
        className="relative hidden lg:block bg-forest-dark"
        style={{ height: `${STAGES.length * 100}vh` }}
      >
        <div className="sticky top-0 h-screen overflow-hidden flex items-center">
          {/* Time-of-day sky */}
          <motion.div className="absolute inset-0" style={{ background: skyBackground }} />

          {/* Sun / moon, arcing across the frame as the story progresses */}
          <motion.div
            className="absolute w-20 h-20 rounded-full blur-2xl"
            style={{ left: orbLeft, top: orbTop, backgroundColor: orbColor, opacity: glowOpacity }}
          />
          <motion.div
            className="absolute w-8 h-8 rounded-full"
            style={{ left: orbLeft, top: orbTop, backgroundColor: orbColor }}
          />

          {/* Terraced hillside — sits in front of the orb near the horizon
              so it rises from / sets behind the hills */}
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 w-full h-[36%]">
            <path
              d="M0 160 C 180 110, 360 170, 540 130 C 720 90, 900 150, 1080 120 C 1260 95, 1350 130, 1440 110 L1440 320 L0 320 Z"
              fill="var(--color-forest)"
            />
            <path
              d="M0 210 C 200 170, 380 220, 560 190 C 760 160, 940 210, 1120 180 C 1300 155, 1380 190, 1440 170 L1440 320 L0 320 Z"
              fill="var(--color-forest-dark)"
            />
          </svg>

          {/* Fine grain, kept consistent with the Tea Collection page */}
          <svg aria-hidden="true" className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.05] mix-blend-overlay">
            <filter id="journeyGrain">
              <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" result="noise" />
              <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.6 0" />
            </filter>
            <rect width="100%" height="100%" filter="url(#journeyGrain)" />
          </svg>

          <div className="container-page relative z-10 w-full grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center">
            {/* Text + stepper */}
            <div>
              <p className="text-gold text-sm mb-5">The Journey</p>

              <AnimatePresence mode="wait">
                <motion.div
                  key={stage.key}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                >
                  <h2 className="font-display text-4xl lg:text-5xl text-ivory">{stage.title}</h2>
                  <p className="mt-5 text-cream/80 max-w-md leading-relaxed">{stage.body}</p>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center gap-4 mt-12">
                <svg viewBox="0 0 40 40" className="w-9 h-9 -rotate-90 shrink-0">
                  <circle cx="20" cy="20" r={RING_RADIUS} stroke="rgba(245,240,227,0.18)" strokeWidth="2.5" fill="none" />
                  <motion.circle
                    cx="20"
                    cy="20"
                    r={RING_RADIUS}
                    stroke="var(--color-gold)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                    strokeDasharray={RING_CIRCUMFERENCE}
                    style={{ strokeDashoffset: dashOffset }}
                  />
                </svg>
                <div className="flex gap-2">
                  {STAGES.map((s, i) => (
                    <div
                      key={s.key}
                      className={`h-[2px] transition-all duration-300 ${
                        i === active ? "w-8 bg-gold" : i < active ? "w-4 bg-gold/50" : "w-4 bg-cream/25"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Illustrated stage scene */}
            <div className="relative h-[380px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={stage.key}
                  className="w-full max-w-[360px]"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                >
                  <Scene isStatic={false} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}