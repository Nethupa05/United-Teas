import React from 'react';

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
    <section className="w-full overflow-hidden bg-ivory py-10 border-y border-gold/20 relative z-10" aria-label="Global Presence">
      <div className="container-page mb-6 text-center">
        <h3 className="text-sm font-sans tracking-widest uppercase text-gold">Our Global Reach</h3>
      </div>
      
      {/* 
        We use a relative container and fade the edges using a mask-image or gradient.
        Here we use simple gradients on the sides to blend into the ivory background.
      */}
      <div className="relative w-full max-w-[100vw] overflow-hidden flex items-center bg-ivory">
        {/* Left Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-ivory to-transparent z-10 pointer-events-none"></div>
        
        {/* Scrolling Container */}
        <div className="flex w-max animate-scroll hover:pause-scroll">
          {/* We duplicate the flags array to create a seamless infinite loop */}
          {[...flags, ...flags].map((flag, index) => (
            <div 
              key={`${flag.name}-${index}`} 
              className="flex flex-col items-center justify-center mx-8 w-24 sm:w-32 group cursor-default transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative w-full h-16 sm:h-20 shadow-sm overflow-hidden rounded-[2px] transition-all duration-300 ring-1 ring-black/5 group-hover:shadow-md group-hover:ring-gold/30">
                <img 
                  src={flag.src} 
                  alt={`${flag.name} flag`} 
                  className="object-cover w-full h-full transition-all duration-500"
                  loading="lazy"
                />
              </div>
              <span className="mt-3 text-xs sm:text-sm font-sans font-medium tracking-wide text-muted group-hover:text-forest transition-colors duration-300">
                {flag.name}
              </span>
            </div>
          ))}
        </div>
        
        {/* Right Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-ivory to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
}
