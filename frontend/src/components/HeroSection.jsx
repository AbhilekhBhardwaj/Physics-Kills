import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ASSETS } from '../data/mock';
import { ParticleCanvas } from './ParticleCanvas';
import { Play, FileText, BarChart3 } from 'lucide-react';

export const HeroSection = () => {
  const videoRef = useRef(null);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src={ASSETS.heroVideo} type="video/mp4" />
      </video>

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black z-[1]" />

      {/* Particles */}
      <ParticleCanvas />

      {/* Content */}
      <div className="relative z-[2] flex flex-col items-center justify-center h-full px-6 text-center">
        {/* Feynman Quote */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mb-8 max-w-3xl"
        >
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-body italic leading-relaxed">
            <span className="block">"There is a difference between knowing something</span>
            <span className="block">and knowing the name of something"</span>
          </p>
          <p className="mt-4 text-sm sm:text-base text-white/40 font-body tracking-widest">
            — Richard Feynman
          </p>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mb-4"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-heading tracking-wider text-white">
            PHYSICS <span className="text-pk-red drop-shadow-[0_0_30px_rgba(230,57,70,0.5)]">KILLS</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-base sm:text-lg text-white/50 font-body tracking-wide mb-10"
        >
          Learn Physics Like Never Before
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link to="/videos" className="pk-btn-primary group">
            <Play className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:scale-110" />
            Videos
          </Link>
          <Link to="/notes" className="pk-btn-outline group">
            <FileText className="w-4 h-4 mr-2" />
            Notes
          </Link>
          <Link to="/infographics" className="pk-btn-outline group">
            <BarChart3 className="w-4 h-4 mr-2" />
            Infographics
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
