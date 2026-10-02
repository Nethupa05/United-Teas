import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/layout/PageHero";
import GlobalMap from "../components/Globalmap.jsx";

/* ---------- Data ---------- */
const countries = [
  { name: "UAE", region: "Middle East", src: "https://flagcdn.com/ae.svg" },
  { name: "Iran", region: "Middle East", src: "https://flagcdn.com/ir.svg" },
  { name: "Iraq", region: "Middle East", src: "https://flagcdn.com/iq.svg" },
  { name: "Israel", region: "Middle East", src: "https://flagcdn.com/il.svg" },
  { name: "Palestine", region: "Middle East", src: "https://flagcdn.com/ps.svg" },
  { name: "Turkey", region: "Middle East", src: "https://flagcdn.com/tr.svg" },
  { name: "Ukraine", region: "Europe", src: "https://flagcdn.com/ua.svg" },
  { name: "Poland", region: "Europe", src: "https://flagcdn.com/pl.svg" },
  { name: "Russia", region: "Europe", src: "https://flagcdn.com/ru.svg" },
  { name: "China", region: "Asia", src: "https://flagcdn.com/cn.svg" },
];

const stats = [
  { value: countries.length, suffix: "", label: "Countries Served" },
  { value: 3, suffix: "", label: "Regions" },
  { value: 100, suffix: "%", label: "Pure Ceylon Tea" },
];

/* Same tea-leaf pattern used on Who We Are / Achievements.
   Move this into a shared file (e.g. utils/teaPattern.js) and import it everywhere. */
const LEAF =
  "M12 10.436C12 10.780,13.741 14.133,15.868 17.888C28.841 40.781,40.380 74.628,44.044 100.537C45.066 107.765,45.077 111.749,44.099 120.444C42.407 135.484,39.490 143.805,30.873 158.184C19.885 176.518,14.381 187.781,15.743 189.143C17.745 191.145,19.861 189.225,23.398 182.202C26.305 176.430,28.053 174.417,34.184 169.785C38.208 166.745,44.772 162.342,48.772 160.002L56.044 155.746 70.461 157.031C87.760 158.572,111.262 157.882,138.500 155.032C158.337 152.956,176.498 152.507,183.763 153.912C189.340 154.990,188.559 154.058,175.904 144.525C154.124 128.119,135.883 120.983,115.803 121.015C96.051 121.046,80.136 127.952,62.397 144.188C58.604 147.659,51.450 152.873,46.500 155.773C41.550 158.673,36.439 161.798,35.142 162.716C33.212 164.084,33.554 163.129,37.030 157.443C48.347 138.933,62.648 120.081,78.710 102.500L90.586 89.500 99.043 88.962C105.596 88.544,108.738 87.795,113 85.633C125.546 79.268,136.154 68.545,148.197 50.053C151.938 44.307,155 39.238,155 38.788C155 37.045,132.373 49.870,119.500 58.909C102.313 70.977,75.105 97.452,59.048 117.730C53.300 124.990,48.451 130.784,48.272 130.606C48.094 130.427,48.467 125.879,49.102 120.498C50.052 112.441,50.841 109.724,53.571 105.107C55.395 102.023,58.103 95.900,59.591 91.500C63.106 81.100,63.293 68.818,60.090 58.794C54.939 42.675,38.601 25.249,16.750 12.567C14.137 11.051,12 10.092,12 10.436";
const teaPattern = `url("data:image/svg+xml,%3Csvg width='400' height='400' viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2314332A' opacity='0.04'%3E%3Cpath d='${LEAF}' transform='translate(20,50) rotate(15) scale(0.35)' /%3E%3Cpath d='${LEAF}' transform='translate(300,290) rotate(-20) scale(0.45)' /%3E%3C/g%3E%3C/svg%3E")`;

/* ---------- Hooks ---------- */
function useInView(options) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, options);
    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
}

/* Counts up once when `start` becomes true.
   The final value is rendered invisibly to reserve the exact width, so the
   layout never shifts while the number is animating. */
function CountUp({ to, suffix = "", start }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!start) return;
    const duration = 1200;
    const t0 = performance.now();
    let raf;
    const tick = (t) => {
      const p = Math.min((t - t0) / duration, 1);
      setN(Math.round((1 - Math.pow(1 - p, 3)) * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, to]);

  return (
    <span className="relative inline-block tabular-nums" aria-label={`${to}${suffix}`}>
      <span className="invisible" aria-hidden="true">
        {to}
        {suffix}
      </span>
      <span className="absolute inset-0" aria-hidden="true">
        {n}
        {suffix}
      </span>
    </span>
  );
}

/* ---------- Page ---------- */
export default function GlobalClients() {
  const [introRef, introInView] = useInView({ threshold: 0.15 });
  const [statsRef, statsInView] = useInView({ threshold: 0.3 });
  const [gridRef, gridInView] = useInView({ threshold: 0.1 });
  const [hovered, setHovered] = useState(null);

  return (
    <>
      {/* <PageHero
        title="Global Clients"
        description="Garden fresh Ceylon tea, exported to trade partners across three regions."
      /> */}

      <section className="py-50 bg-cream font-jakarta relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ backgroundImage: teaPattern, backgroundSize: "400px 400px" }}
        />

        <div className="container-page relative z-10">
          {/* Intro + stats */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <div
              ref={introRef}
              className={`transition-all duration-700 ease-out ${
                introInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <p className="text-sm text-rust mb-2">Our Global Reach</p>
              <h2 className="font-jakarta font-semibold tracking-tight text-3xl md:text-4xl text-forest-dark mb-5">
                Ceylon Tea, Poured Worldwide
              </h2>
              <p className="text-muted leading-relaxed max-w-xl">
                From the Hill Country to the Middle East, Europe and Asia, United Teas supplies
                trade partners who rely on consistent quality and dependable shipments.
              </p>
            </div>

            {/* Fixed-size stat cells: identical footprint before and after the count-up */}
            <div
              ref={statsRef}
              className={`grid grid-cols-3 divide-x divide-gold/30 transition-opacity duration-700 ${
                statsInView ? "opacity-100" : "opacity-0"
              }`}
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="h-32 sm:h-36 flex flex-col items-center justify-center px-2 text-center"
                >
                  <p className="h-12 flex items-center font-jakarta font-semibold tracking-tight text-4xl text-forest-dark">
                    <CountUp to={s.value} suffix={s.suffix} start={statsInView} />
                  </p>
                  <p className="mt-1 h-10 text-sm text-muted leading-tight flex items-start justify-center">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* World map */}
          <div className="mb-16 w-full mx-auto">
            <GlobalMap hovered={hovered} onHover={setHovered} />
          </div>

          {/* All flags at once */}
          <h3 className="font-jakarta font-semibold tracking-tight text-2xl text-forest-dark mb-10">
            Where we export
          </h3>

          <ul
            ref={gridRef}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6"
          >
            {countries.map((c, i) => (
              <li
                key={c.name}
                tabIndex={0}
                onMouseEnter={() => setHovered(c.name)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(c.name)}
                onBlur={() => setHovered(null)}
                style={{ transitionDelay: gridInView ? `${i * 60}ms` : "0ms" }}
                className={`group rounded-2xl p-3 transition-all duration-500 ease-out hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                  hovered === c.name ? "border-rust" : "border-gold/50 hover:border-gold"
                } ${
                  gridInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <div className="aspect-[3/2] overflow-hidden rounded-lg ring-1 ring-forest-dark/10">
                  <img
                    src={c.src}
                    alt={`${c.name} flag`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-3 text-center font-jakarta font-semibold tracking-tight text-forest-dark">
                  {c.name}
                </p>
                <p className="text-center text-xs text-muted">{c.region}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Closing band */}
      <section className="py-16 bg-forest-dark font-jakarta">
        <div className="container-page flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h2 className="font-jakarta font-semibold tracking-tight text-2xl md:text-3xl text-ivory max-w-md">
            Looking for a Ceylon tea partner?
          </h2>
          <Link
            to="/contact"
            className="self-start md:self-auto px-6 py-2.5 rounded-full border border-gold text-ivory text-sm transition-colors duration-300 hover:bg-gold hover:text-forest-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            Contact our trade team
          </Link>
        </div>
      </section>
    </>
  );
}