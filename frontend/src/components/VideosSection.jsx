import { useState } from 'react';
import { motion } from 'framer-motion';
import { VIDEOS, TOPICS, CLASS_LEVELS } from '../data/mock';
import { FlashCards } from './FlashCards';
import { ExternalLink, ChevronLeft, ChevronRight, Layers } from 'lucide-react';
import { Badge } from './ui/badge';

export const VideosSection = ({ isPage = false }) => {
  const [activeTopic, setActiveTopic] = useState('All');
  const [activeClass, setActiveClass] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [scrollPos, setScrollPos] = useState(0);

  const filteredVideos = VIDEOS.filter(v => {
    const topicMatch = activeTopic === 'All' || v.topic === activeTopic;
    const classMatch = activeClass === 'All' || v.classLevel === activeClass;
    return topicMatch && classMatch;
  });

  const scroll = (direction) => {
    const container = document.getElementById('video-carousel');
    if (container) {
      const scrollAmount = 340;
      const newPos = direction === 'left'
        ? Math.max(0, scrollPos - scrollAmount)
        : scrollPos + scrollAmount;
      container.scrollTo({ left: newPos, behavior: 'smooth' });
      setScrollPos(newPos);
    }
  };

  return (
    <section className={`relative ${isPage ? 'pt-28 pb-20' : 'py-20 sm:py-28'} px-6 bg-pk-dark`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading tracking-wider text-white mb-3">
            VIDEO <span className="text-pk-red">LECTURES</span>
          </h2>
          <p className="text-white/40 font-body text-sm sm:text-base max-w-lg">
            Cinematic physics explanations from Instagram. Each video comes with flash cards for quick revision.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          <div className="flex flex-wrap gap-2">
            {CLASS_LEVELS.map(cl => (
              <button
                key={cl}
                onClick={() => setActiveClass(cl)}
                className={`px-4 py-1.5 rounded-full text-xs font-body tracking-wide transition-all duration-300 border ${
                  activeClass === cl
                    ? 'bg-pk-red/15 border-pk-red/50 text-pk-red shadow-[0_0_12px_rgba(230,57,70,0.2)]'
                    : 'border-white/10 text-white/50 hover:border-white/20 hover:text-white/70'
                }`}
              >
                {cl === 'All' ? 'All Classes' : `Class ${cl}`}
              </button>
            ))}
          </div>
          <div className="w-px h-6 bg-white/10 self-center hidden sm:block" />
          <div className="flex flex-wrap gap-2">
            {TOPICS.map(topic => (
              <button
                key={topic}
                onClick={() => setActiveTopic(topic)}
                className={`px-4 py-1.5 rounded-full text-xs font-body tracking-wide transition-all duration-300 border ${
                  activeTopic === topic
                    ? 'bg-pk-red/15 border-pk-red/50 text-pk-red shadow-[0_0_12px_rgba(230,57,70,0.2)]'
                    : 'border-white/10 text-white/50 hover:border-white/20 hover:text-white/70'
                }`}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel */}
        <div className="relative group">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/80 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-pk-red/30 transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div
            id="video-carousel"
            className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredVideos.map((video, i) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex-shrink-0 w-[300px] snap-start"
              >
                <div className="group/card rounded-2xl border border-white/5 bg-pk-surface overflow-hidden transition-all duration-500 hover:border-pk-red/30 hover:shadow-[0_0_30px_rgba(230,57,70,0.1)] hover:-translate-y-1">
                  {/* Thumbnail */}
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <Badge className="absolute top-3 right-3 bg-pk-red/80 text-white border-0 text-[10px] font-body">
                      Class {video.classLevel}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <Badge variant="outline" className="mb-3 text-[10px] text-pk-red/70 border-pk-red/20 font-body">
                      {video.topic}
                    </Badge>
                    <h3 className="text-base font-body font-semibold text-white mb-2 line-clamp-1">
                      {video.title}
                    </h3>
                    <p className="text-xs text-white/40 font-body line-clamp-2 mb-4">
                      {video.description}
                    </p>

                    <div className="flex gap-2">
                      <a
                        href={video.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 pk-btn-sm-primary"
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Instagram
                      </a>
                      <button
                        onClick={() => setSelectedVideo(selectedVideo === video.id ? null : video.id)}
                        className="flex-1 pk-btn-sm-outline"
                      >
                        <Layers className="w-3 h-3 mr-1" />
                        Flash Cards
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/80 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-pk-red/30 transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Flash Cards for selected video */}
        {selectedVideo && (
          <FlashCards
            cards={VIDEOS.find(v => v.id === selectedVideo)?.flashCards || []}
            videoTitle={VIDEOS.find(v => v.id === selectedVideo)?.title}
          />
        )}
      </div>
    </section>
  );
};
