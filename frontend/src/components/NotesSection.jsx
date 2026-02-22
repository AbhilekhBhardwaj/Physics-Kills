import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NOTES, TOPICS, CLASS_LEVELS } from '../data/mock';
import { Download, BookOpen, X, ChevronRight } from 'lucide-react';
import { Badge } from './ui/badge';

export const NotesSection = ({ isPage = false }) => {
  const [activeTopic, setActiveTopic] = useState('All');
  const [activeClass, setActiveClass] = useState('All');
  const [readingNote, setReadingNote] = useState(null);
  const [activeChapter, setActiveChapter] = useState(0);

  const filtered = NOTES.filter(n => {
    const topicMatch = activeTopic === 'All' || n.topic === activeTopic;
    const classMatch = activeClass === 'All' || n.classLevel === activeClass;
    return topicMatch && classMatch;
  });

  return (
    <section className={`relative ${isPage ? 'pt-28 pb-20' : 'py-20 sm:py-28'} px-6 bg-pk-dark`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading tracking-wider text-white mb-3">
            STUDY <span className="text-pk-red">NOTES</span>
          </h2>
          <p className="text-white/40 font-body text-sm sm:text-base max-w-lg">
            Comprehensive, beautifully formatted physics notes. Download or read online.
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
                    ? 'bg-pk-red/15 border-pk-red/50 text-pk-red'
                    : 'border-white/10 text-white/50 hover:border-white/20'
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
                    ? 'bg-pk-red/15 border-pk-red/50 text-pk-red'
                    : 'border-white/10 text-white/50 hover:border-white/20'
                }`}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((note, i) => (
            <motion.div
              key={note.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-white/5 bg-pk-surface p-6 transition-all duration-500 hover:border-pk-red/20 hover:shadow-[0_0_30px_rgba(230,57,70,0.08)]"
            >
              <div className="flex items-start justify-between mb-4">
                <Badge variant="outline" className="text-[10px] text-pk-red/70 border-pk-red/20 font-body">
                  {note.topic}
                </Badge>
                <Badge className="bg-white/5 text-white/40 border-0 text-[10px] font-body">
                  Class {note.classLevel}
                </Badge>
              </div>

              <h3 className="text-base font-body font-semibold text-white mb-2">
                {note.title}
              </h3>
              <p className="text-xs text-white/40 font-body leading-relaxed mb-5 line-clamp-2">
                {note.summary}
              </p>

              <div className="flex gap-2">
                <button
                  onClick={() => { setReadingNote(note); setActiveChapter(0); }}
                  className="flex-1 pk-btn-sm-outline"
                >
                  <BookOpen className="w-3 h-3 mr-1" />
                  Read
                </button>
                <a href={note.downloadUrl} className="flex-1 pk-btn-sm-primary">
                  <Download className="w-3 h-3 mr-1" />
                  Download
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Reader View */}
      <AnimatePresence>
        {readingNote && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/98"
          >
            <div className="flex h-full">
              {/* Sidebar */}
              <div className="w-64 bg-pk-surface/50 border-r border-white/5 p-6 hidden md:flex flex-col">
                <h3 className="text-sm font-body font-semibold text-pk-red mb-6 tracking-wide">
                  {readingNote.title}
                </h3>
                <nav className="flex-1 space-y-1">
                  {readingNote.chapters.map((ch, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveChapter(i)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-body transition-all duration-300 flex items-center gap-2 ${
                        activeChapter === i
                          ? 'bg-pk-red/10 text-pk-red'
                          : 'text-white/40 hover:text-white/60 hover:bg-white/5'
                      }`}
                    >
                      <ChevronRight className="w-3 h-3 flex-shrink-0" />
                      {ch}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto">
                <div className="max-w-3xl mx-auto px-6 sm:px-12 py-8">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-heading tracking-wider text-white">
                      {readingNote.chapters[activeChapter]}
                    </h2>
                    <button
                      onClick={() => setReadingNote(null)}
                      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-pk-red/30 transition-all duration-300"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="prose prose-invert max-w-none">
                    {readingNote.content.split('\n\n').map((para, i) => (
                      <p key={i} className="text-sm text-white/70 font-body leading-[1.8] mb-4">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
