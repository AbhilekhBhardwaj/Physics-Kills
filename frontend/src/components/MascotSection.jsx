import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ASSETS } from '../data/mock';

export const MascotSection = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const springConfig = { stiffness: 60, damping: 20, mass: 0.8 };

  const rawY = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [80, 10, 0, -10, -60]);
  const rawRotate = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [-6, 3, 0, -3, 5]);
  const rawScale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.85, 1.05, 1.05, 0.9]);
  const rawX = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [-30, 15, 0, -15, 25]);
  const rawGlow = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [0, 0.6, 1, 0.6, 0]);

  const mascotY = useSpring(rawY, springConfig);
  const rotate = useSpring(rawRotate, springConfig);
  const scale = useSpring(rawScale, springConfig);
  const x = useSpring(rawX, springConfig);
  const glowOpacity = useSpring(rawGlow, springConfig);

  return (
    <section
      ref={sectionRef}
      className="relative py-10 sm:py-14 bg-black overflow-hidden"
    >
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-pk-red/10 rounded-full blur-[90px] pointer-events-none"
        style={{ opacity: glowOpacity }}
      />

      <div className="relative z-[2] flex flex-col items-center">
        <motion.div
          style={{ y: mascotY, rotate, scale, x }}
          className="relative"
        >
          <motion.video
            autoPlay
            muted
            loop
            playsInline
            disablePictureInPicture
            controlsList="nodownload noplaybackrate"
            className="w-64 sm:w-80 md:w-[22rem] relative z-10 pointer-events-none"
            style={{ mixBlendMode: 'screen' }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <source src="/video for website .mp4" type="video/mp4" />
          </motion.video>
        </motion.div>
      </div>
    </section>
  );
};
