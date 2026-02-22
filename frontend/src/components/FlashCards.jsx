import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';

export const FlashCards = ({ cards = [], videoTitle = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  if (cards.length === 0) return null;

  const currentCard = cards[currentIndex];

  const goNext = () => {
    setFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 150);
  };

  const goPrev = () => {
    setFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
    }, 150);
  };

  const typeColors = {
    formula: 'border-amber-500/30 bg-amber-500/5',
    concept: 'border-emerald-500/30 bg-emerald-500/5',
    definition: 'border-sky-500/30 bg-sky-500/5',
  };

  const typeBadge = {
    formula: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    concept: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    definition: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
  };

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      className="mt-8"
    >
      <div className="max-w-lg mx-auto">
        <p className="text-center text-white/40 font-body text-xs mb-4 tracking-wide">
          FLASH CARDS — {videoTitle}
        </p>

        {/* Card */}
        <div
          className="relative cursor-pointer perspective-1000"
          onClick={() => setFlipped(!flipped)}
          style={{ perspective: '1000px' }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`${currentCard.id}-${flipped ? 'back' : 'front'}`}
              initial={{ rotateY: flipped ? -90 : 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: flipped ? 90 : -90, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className={`min-h-[200px] rounded-2xl border p-8 flex flex-col items-center justify-center text-center ${typeColors[currentCard.type] || 'border-white/10 bg-pk-surface'}`}
            >
              <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-body tracking-wider uppercase mb-4 border ${typeBadge[currentCard.type] || 'text-white/50'}`}>
                {currentCard.type}
              </span>

              {!flipped ? (
                <p className="text-lg sm:text-xl font-body font-semibold text-white">
                  {currentCard.front}
                </p>
              ) : (
                <p className="text-sm sm:text-base font-body text-white/80 whitespace-pre-line leading-relaxed">
                  {currentCard.back}
                </p>
              )}

              <p className="mt-6 text-[10px] text-white/20 font-body tracking-widest">
                {flipped ? 'TAP TO SEE QUESTION' : 'TAP TO REVEAL ANSWER'}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-5">
          <button
            onClick={goPrev}
            className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-pk-red/30 transition-all duration-300"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <span className="text-xs text-white/30 font-body tracking-wider">
            {currentIndex + 1} / {cards.length}
          </span>

          <button
            onClick={() => setFlipped(false)}
            className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-pk-red/30 transition-all duration-300"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={goNext}
            className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-pk-red/30 transition-all duration-300"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
