const flags = [
  { name: 'UAE', src: 'https://flagcdn.com/ae.svg' },
  { name: 'Iran', src: 'https://flagcdn.com/ir.svg' },
  { name: 'Iraq', src: 'https://flagcdn.com/iq.svg' },
  { name: 'Ukraine', src: 'https://flagcdn.com/ua.svg' },
  { name: 'Poland', src: 'https://flagcdn.com/pl.svg' },
  { name: 'Israel', src: 'https://flagcdn.com/il.svg' },
  { name: 'Palestine', src: 'https://flagcdn.com/ps.svg' },
  { name: 'China', src: 'https://flagcdn.com/cn.svg' },
  { name: 'Turkey', src: 'https://flagcdn.com/tr.svg' },
  { name: 'Russia', src: 'https://flagcdn.com/ru.svg' },
];

export default function FlagRibbon() {
  return (
    <section className="w-full overflow-hidden bg-ivory py-4 md:py-6" aria-label="Global Presence">
      <div className="relative w-full max-w-[100vw] overflow-hidden flex items-center bg-ivory">
        <div className="flex w-max animate-scroll hover:pause-scroll">
          {[...flags, ...flags].map((flag, index) => (
            <div 
              key={`${flag.name}-${index}`} 
              className="flex flex-col items-center justify-center mx-4 sm:mx-6 w-16 sm:w-20 group cursor-default transition-transform duration-300"
            >
              <div className="relative w-full h-10 sm:h-14 shadow-sm overflow-hidden rounded-[2px] transition-all duration-300 ring-1 ring-black/10 group-hover:shadow-md group-hover:ring-gold/40">
                <div className="absolute inset-0 bg-forest-dark/20 mix-blend-multiply z-10 transition-opacity duration-500 group-hover:opacity-0 pointer-events-none" />
                <img 
                  src={flag.src} 
                  alt={`${flag.name} flag`} 
                  className="object-cover w-full h-full transition-all duration-500 sepia-[20%] grayscale-[30%] group-hover:sepia-0 group-hover:grayscale-0"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
