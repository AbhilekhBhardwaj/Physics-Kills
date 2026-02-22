import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ASSETS, NAV_LINKS } from '../data/mock';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 max-sm:py-5 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
        <img
          src={ASSETS.logo}
          alt="Physics Kills"
          className="h-10 w-10 max-sm:h-8 max-sm:w-8 object-cover rounded-full ring-2 ring-pk-red/30 transition-transform duration-300 group-hover:scale-110"
        />
        <span className="text-white font-heading text-xl tracking-wider hidden sm:block">
          PHYSICS <span className="text-pk-red">KILLS</span>
        </span>
      </Link>

      {/* Hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-[60] w-10 h-10 max-sm:w-8 max-sm:h-8 flex items-center justify-center rounded-lg border border-white/10 bg-black/40 backdrop-blur-md transition-all duration-300 hover:border-pk-red/50 hover:shadow-[0_0_15px_rgba(230,57,70,0.3)]"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-5 h-5 max-sm:w-4 max-sm:h-4 text-pk-red" />
        ) : (
          <Menu className="w-5 h-5 max-sm:w-4 max-sm:h-4 text-white" />
        )}
      </button>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 36px) 36px)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at calc(100% - 36px) 36px)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 36px) 36px)' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center"
          >
            {/* Red glow orbs */}
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-pk-red/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-pk-red/5 rounded-full blur-[80px]" />

            <nav className="flex flex-col items-center gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block text-4xl sm:text-5xl md:text-6xl font-heading tracking-widest py-3 px-8 transition-all duration-300 ${
                      location.pathname === link.path
                        ? 'text-pk-red drop-shadow-[0_0_20px_rgba(230,57,70,0.5)]'
                        : 'text-white/70 hover:text-white hover:drop-shadow-[0_0_15px_rgba(230,57,70,0.3)]'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
