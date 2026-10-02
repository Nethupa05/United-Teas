import { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [showLogo, setShowLogo] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["0px", "1000px"]);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      if (videoRef.current.currentTime >= 8) {
        if (!showLogo) setShowLogo(true);
      } else {
        if (showLogo) setShowLogo(false);
      }
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section ref={containerRef} className="relative w-full h-[150vh] bg-ivory">
      <div className="sticky top-0 w-full h-screen overflow-hidden flex justify-center items-start">
        <motion.div
          className="relative w-full h-full overflow-hidden bg-forest-dark shadow-xl"
          style={{ scale, borderRadius, transformOrigin: "top center" }}
        >
          {/* Video Background */}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            onTimeUpdate={handleTimeUpdate}
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/hero-vid.mp4" type="video/mp4" />
          </video>

          {/* Dynamic overlay: darkens and blurs the video when the logo appears */}
          <div
            className={`absolute inset-0 pointer-events-none transition-all duration-1000 ${
              showLogo
                ? "bg-black/40 backdrop-blur-md"
                : "bg-black/25 backdrop-blur-none"
            }`}
          />

          {/* Controls Overlay */}
          <div className="absolute bottom-8 right-8 flex items-center gap-4 z-20">
            <button
              onClick={toggleMute}
              className="p-3 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full text-ivory transition-all border border-white/20 shadow-lg"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
            <button
              onClick={togglePlay}
              className="p-3 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full text-ivory transition-all border border-white/20 shadow-lg"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
          </div>

          {/* Logo Overlay */}
          <div
            className={`absolute inset-0 z-10 flex justify-center items-center pointer-events-none transition-opacity duration-1000 ${
              showLogo ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src="/images/unitedTeasLogo.png"
              alt="United Teas Logo"
              className="w-[280px] md:w-[400px] lg:w-[500px] object-contain drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}