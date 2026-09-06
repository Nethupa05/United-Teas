import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

// Extracts a leading integer from strings like "12+" or "100%" so we can
// animate the number while preserving the suffix.
function splitValue(value) {
  const match = String(value).match(/^(\d+)(.*)$/);
  if (!match) return { number: null, suffix: String(value) };
  return { number: parseInt(match[1], 10), suffix: match[2] };
}

export default function StatCounter({ value, label, tone = "light" }) {
  const { number, suffix } = splitValue(value);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || number === null) return;
    const duration = 900;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      setDisplay(Math.round(progress * number));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [inView, number]);

  const numColor = tone === "light" ? "text-ivory" : "text-forest-dark";
  const labelColor = tone === "light" ? "text-cream/70" : "text-muted";

  return (
    <div ref={ref}>
      <p className={`font-display text-4xl md:text-5xl ${numColor}`}>
        {number !== null ? display : ""}
        {suffix}
      </p>
      <p className={`mt-2 text-sm ${labelColor}`}>{label}</p>
    </div>
  );
}
