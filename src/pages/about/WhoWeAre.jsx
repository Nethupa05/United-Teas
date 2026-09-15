import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "12+", label: "Years of Excellence" },
  { value: "100%", label: "Pure Ceylon Tea" },
  { value: "150", label: "Years of Ceylon Tea Heritage" },
  { value: "ISO", label: "9001:2008 Certified" },
];

const values = [
  {
    title: "Garden Fresh Tea",
    description:
      "Only garden-fresh teas are selected for export, preserving richer flavour, aroma, and antioxidants.",
  },
  {
    title: "Traditional Manufacturing",
    description: "An artisanal, expertise-driven process is honoured at every step of production.",
  },
  {
    title: "Innovation & Excellence",
    description: "A seasoned professional team keeps trade partners at the centre of everything we do.",
  },
  {
    title: "Pure Ceylon Tea",
    description: "Only the finest Ceylon teas are chosen, protecting the island's 150-year tea heritage.",
  },
];

const process = [
  {
    step: "01",
    title: "Handpicked Selection",
    description:
      "Handpicked from top plantations and the daily Colombo Tea Auctions, sourced from gardens across the country.",
    image: "https://696cc31bb4314a7cce671fda--unitedteastest.netlify.app/background/Picture3.jpg",
  },
  {
    step: "02",
    title: "Quality Control & Blending",
    description:
      "Stringent quality control across blending, tasting, and packing — carried out by a team with international-standard expertise.",
    image: "https://696cc31bb4314a7cce671fda--unitedteastest.netlify.app/background/Picture9.png",
  },
  {
    step: "03",
    title: "World-Class Packing",
    description:
      "Packed at origin, inside an ISO 9001:2008 and food-safety certified facility, using advanced packing machinery.",
    image: "https://696cc31bb4314a7cce671fda--unitedteastest.netlify.app/background/image10.png",
  },
  {
    step: "04",
    title: "Quality Certification",
    description:
      "Sourced from plantations of choice at specified elevations, certified by the Sri Lanka Tea Board and international bodies.",
    image: "https://696cc31bb4314a7cce671fda--unitedteastest.netlify.app/background/Picture10.png",
  },
];

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

export default function WhoWeAre() {
  const [introRef, introInView] = useInView({ threshold: 0.15 });
  const [statsRef, statsInView] = useInView({ threshold: 0.15 });
  const [valuesRef, valuesInView] = useInView({ threshold: 0.15 });
  const [processRef, processInView] = useInView({ threshold: 0.1 });

  return (
    <section className="py-20 bg-cream font-jakarta relative overflow-hidden">
      {/* Tea Leaf Pattern Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='400' height='400' viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2314332A' opacity='0.04'%3E%3Cpath d='M12 10.436C12 10.780,13.741 14.133,15.868 17.888C28.841 40.781,40.380 74.628,44.044 100.537C45.066 107.765,45.077 111.749,44.099 120.444C42.407 135.484,39.490 143.805,30.873 158.184C19.885 176.518,14.381 187.781,15.743 189.143C17.745 191.145,19.861 189.225,23.398 182.202C26.305 176.430,28.053 174.417,34.184 169.785C38.208 166.745,44.772 162.342,48.772 160.002L56.044 155.746 70.461 157.031C87.760 158.572,111.262 157.882,138.500 155.032C158.337 152.956,176.498 152.507,183.763 153.912C189.340 154.990,188.559 154.058,175.904 144.525C154.124 128.119,135.883 120.983,115.803 121.015C96.051 121.046,80.136 127.952,62.397 144.188C58.604 147.659,51.450 152.873,46.500 155.773C41.550 158.673,36.439 161.798,35.142 162.716C33.212 164.084,33.554 163.129,37.030 157.443C48.347 138.933,62.648 120.081,78.710 102.500L90.586 89.500 99.043 88.962C105.596 88.544,108.738 87.795,113 85.633C125.546 79.268,136.154 68.545,148.197 50.053C151.938 44.307,155 39.238,155 38.788C155 37.045,132.373 49.870,119.500 58.909C102.313 70.977,75.105 97.452,59.048 117.730C53.300 124.990,48.451 130.784,48.272 130.606C48.094 130.427,48.467 125.879,49.102 120.498C50.052 112.441,50.841 109.724,53.571 105.107C55.395 102.023,58.103 95.900,59.591 91.500C63.106 81.100,63.293 68.818,60.090 58.794C54.939 42.675,38.601 25.249,16.750 12.567C14.137 11.051,12 10.092,12 10.436M33.553 32.441C40.771 39.804,45.997 49.587,48.556 60.528C50.079 67.036,50.143 79.112,48.756 97.975C48.564 100.586,48.926 101.535,50.214 101.791C52.837 102.314,53.500 98.220,53.500 81.500C53.500 64.419,51.782 56.826,45.242 45C41.846 38.859,30.319 26,28.211 26C27.675 26,30.079 28.899,33.553 32.441M97.025 137.514C82.256 140.335,67 145.869,67 148.405C67 151.279,69.151 151.115,77.288 147.620C90.915 141.767,100.342 139.885,119 139.294C136.926 138.726,144.867 139.708,161.631 144.566C166.380 145.942,170.441 146.892,170.657 146.677C171.292 146.041,159.677 142.062,149.215 139.331C141.026 137.194,136.751 136.740,122 136.441C109.663 136.191,102.295 136.508,97.025 137.514' transform='translate(20,50) rotate(15) scale(0.35)' /%3E%3Cpath d='M12 10.436C12 10.780,13.741 14.133,15.868 17.888C28.841 40.781,40.380 74.628,44.044 100.537C45.066 107.765,45.077 111.749,44.099 120.444C42.407 135.484,39.490 143.805,30.873 158.184C19.885 176.518,14.381 187.781,15.743 189.143C17.745 191.145,19.861 189.225,23.398 182.202C26.305 176.430,28.053 174.417,34.184 169.785C38.208 166.745,44.772 162.342,48.772 160.002L56.044 155.746 70.461 157.031C87.760 158.572,111.262 157.882,138.500 155.032C158.337 152.956,176.498 152.507,183.763 153.912C189.340 154.990,188.559 154.058,175.904 144.525C154.124 128.119,135.883 120.983,115.803 121.015C96.051 121.046,80.136 127.952,62.397 144.188C58.604 147.659,51.450 152.873,46.500 155.773C41.550 158.673,36.439 161.798,35.142 162.716C33.212 164.084,33.554 163.129,37.030 157.443C48.347 138.933,62.648 120.081,78.710 102.500L90.586 89.500 99.043 88.962C105.596 88.544,108.738 87.795,113 85.633C125.546 79.268,136.154 68.545,148.197 50.053C151.938 44.307,155 39.238,155 38.788C155 37.045,132.373 49.870,119.500 58.909C102.313 70.977,75.105 97.452,59.048 117.730C53.300 124.990,48.451 130.784,48.272 130.606C48.094 130.427,48.467 125.879,49.102 120.498C50.052 112.441,50.841 109.724,53.571 105.107C55.395 102.023,58.103 95.900,59.591 91.500C63.106 81.100,63.293 68.818,60.090 58.794C54.939 42.675,38.601 25.249,16.750 12.567C14.137 11.051,12 10.092,12 10.436M33.553 32.441C40.771 39.804,45.997 49.587,48.556 60.528C50.079 67.036,50.143 79.112,48.756 97.975C48.564 100.586,48.926 101.535,50.214 101.791C52.837 102.314,53.500 98.220,53.500 81.500C53.500 64.419,51.782 56.826,45.242 45C41.846 38.859,30.319 26,28.211 26C27.675 26,30.079 28.899,33.553 32.441M97.025 137.514C82.256 140.335,67 145.869,67 148.405C67 151.279,69.151 151.115,77.288 147.620C90.915 141.767,100.342 139.885,119 139.294C136.926 138.726,144.867 139.708,161.631 144.566C166.380 145.942,170.441 146.892,170.657 146.677C171.292 146.041,159.677 142.062,149.215 139.331C141.026 137.194,136.751 136.740,122 136.441C109.663 136.191,102.295 136.508,97.025 137.514' transform='translate(300,290) rotate(-20) scale(0.45)' /%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "400px 400px",
        }}
      />

      <div className="container-page relative z-10">
        {/* Intro */}
        <div
          ref={introRef}
          className={`mb-16 transition-all duration-700 ease-out ${
            introInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-sm text-rust mb-2">Who We Are</p>
          <h2 className="font-jakarta font-semibold tracking-tight text-3xl md:text-4xl text-forest-dark mb-5">
            From Hill Country to the Globe
          </h2>
          <div className="">
            <p className="text-muted leading-relaxed">
              United Teas (Pvt) Ltd is a Ceylon tea exporter built on tradition, quality, and
              integrity. We export 100% Pure Ceylon Tea with garden-fresh, handpicked, and
              manufactured the traditional way while blending in the innovation needed to
              serve trade partners around the world.
            </p>
            <p className="text-muted leading-relaxed">
              We're one of the largest buyers of Mathurata Plantations in Nuwara Eliya, and we
              source teas from gardens across the country and the Colombo Tea Auctions. Every
              batch is packed at origin, in a facility certified to international quality and
              food-safety standards.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 transition-all duration-700 ease-out ${
            statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <p className="font-jakarta font-semibold tracking-tight text-3xl md:text-4xl text-forest-dark mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="hairline mb-16" />

        {/* Core values */}
        <div
          ref={valuesRef}
          className={`mb-20 transition-all duration-700 ease-out ${
            valuesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="mb-10">
            <h3 className="font-jakarta font-semibold tracking-tight text-2xl text-center text-forest-dark">
              What we stand for
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((value) => (
              <div key={value.title} className="text-center group">
                {/* <div className="mx-auto w-16 h-16 mb-4 rounded-full border border-gold/50 flex items-center justify-center text-2xl transition-colors duration-300 group-hover:border-gold">
                  {value.icon}
                </div> */}
                <h4 className="font-jakarta font-semibold tracking-tight text-lg text-forest-dark mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-muted leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hairline mb-16" />

        {/* From Garden to Cup process */}
        <div
          ref={processRef}
          className={`transition-all duration-700 ease-out ${
            processInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="max-w-xl mb-10">
            <h3 className="font-jakarta font-semibold tracking-tight text-2xl text-forest-dark">
              From garden to cup
            </h3>
            <p className="mt-3 text-muted leading-relaxed">
              Four stages stand between the tea garden and your cup — each one built on
              decades of expertise.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item) => (
              <div key={item.step} className="group">
                <div className="relative mb-5 overflow-hidden rounded-2xl aspect-[4/5]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 font-jakarta font-semibold text-sm text-cream bg-forest-dark/80 rounded-full w-8 h-8 flex items-center justify-center">
                    {item.step}
                  </span>
                </div>
                <h4 className="font-jakarta font-semibold tracking-tight text-lg text-forest-dark mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}