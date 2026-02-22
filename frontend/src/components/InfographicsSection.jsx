import { useState } from 'react';
import { motion } from 'framer-motion';
import { INFOGRAPHICS, TOPICS } from '../data/mock';
import { Download, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Badge } from './ui/badge';

export const InfographicsSection = ({ isPage = false }) => {
  const [activeTopic, setActiveTopic] = useState('All');
  const [viewingImage, setViewingImage] = useState(null);
  const [scrollPos, setScrollPos] = useState(0);

  const filtered = INFOGRAPHICS.filter(
    ig => activeTopic === 'All' || ig.topic === activeTopic
  );

  const scroll = (direction) => {
    const container = document.getElementById('infographic-carousel');
    if (container) {
      const scrollAmount = 320;
      const newPos = direction === 'left'
        ? Math.max(0, scrollPos - scrollAmount)
        : scrollPos + scrollAmount;
      container.scrollTo({ left: newPos, behavior: 'smooth' });
      setScrollPos(newPos);
    }
  };

  return (
    <section className={`relative ${isPage ? 'pt-28 pb-20' : 'py-20 sm:py-28'} px-6 bg-black`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading tracking-wider text-white mb-3">
            INFO<span className="text-pk-red">GRAPHICS</span>
          </h2>
          <p className="text-white/40 font-body text-sm sm:text-base max-w-lg">
            Visual summaries and cheat sheets for quick revision.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {TOPICS.map(topic => (
            <button
              key={topic}
              onClick={() => setActiveTopic(topic)}
              className={`px-4 py-1.5 rounded-full text-xs font-body tracking-wide transition-all duration-300 border ${
                activeTopic === topic
                  ? 'bg-pk-red/15 border-pk-red/50 text-pk-red'
                  : 'border-white/10 text-white/50 hover:border-white/20 hover:text-white/70'
              }`}
            >
              {topic}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div className="relative group">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/80 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-pk-red/30 transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div
            id="infographic-carousel"
            className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filtered.map((ig, i) => (
              <motion.div
                key={ig.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex-shrink-0 w-[280px] snap-start"
              >
                <div className="group/card rounded-2xl border border-white/5 bg-pk-surface overflow-hidden transition-all duration-500 hover:border-pk-red/30 hover:shadow-[0_0_30px_rgba(230,57,70,0.1)] hover:scale-[1.02]">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={ig.image}
                      alt={ig.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={() => setViewingImage(ig.image)}
                        className="w-12 h-12 rounded-full bg-black/60 border border-pk-red/40 flex items-center justify-center text-pk-red hover:bg-pk-red/20 transition-all duration-300"
                      >
                        <Maximize2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="p-5">
                    <Badge variant="outline" className="mb-3 text-[10px] text-pk-red/70 border-pk-red/20 font-body">
                      {ig.topic}
                    </Badge>
                    <h3 className="text-sm font-body font-semibold text-white mb-4 line-clamp-1">
                      {ig.title}
                    </h3>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setViewingImage(ig.image)}
                        className="flex-1 pk-btn-sm-outline"
                      >
                        <Maximize2 className="w-3 h-3 mr-1" />
                        View
                      </button>
                      <a href={ig.downloadUrl} className="flex-1 pk-btn-sm-primary">
                        <Download className="w-3 h-3 mr-1" />
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/80 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-pk-red/30 transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {viewingImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6 cursor-pointer"
          onClick={() => setViewingImage(null)}
        >
          <img
            src={viewingImage}
            alt="Infographic"
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      )}
    </section>
  );
};
