import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ParticleCanvas } from './ParticleCanvas';
import { Play, Download, Image } from 'lucide-react';

export const CTASection = () => {
  const cards = [
    {
      icon: Play,
      title: 'Start Watching',
      desc: 'Cinematic physics videos that make complex concepts click.',
      link: '/videos',
    },
    {
      icon: Download,
      title: 'Download Notes',
      desc: 'Comprehensive, beautifully formatted study notes.',
      link: '/notes',
    },
    {
      icon: Image,
      title: 'Explore Infographics',
      desc: 'Visual summaries that make revision a breeze.',
      link: '/infographics',
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 px-6 bg-pk-dark overflow-hidden">
      <ParticleCanvas />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pk-red/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-[2] max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading tracking-wider text-white mb-4">
            MASTER PHYSICS.<br />
            <span className="text-pk-red">DON'T MEMORIZE IT.</span>
          </h2>
          <p className="text-white/40 font-body text-base sm:text-lg max-w-xl mx-auto">
            Build real understanding through visual learning, not rote memorization.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <Link
                to={card.link}
                className="group block p-8 rounded-2xl border border-pk-red/10 bg-pk-surface/50 backdrop-blur-sm transition-all duration-500 hover:border-pk-red/40 hover:shadow-[0_0_40px_rgba(230,57,70,0.12)] hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-pk-red/10 flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-pk-red/20 group-hover:shadow-[0_0_20px_rgba(230,57,70,0.3)]">
                  <card.icon className="w-5 h-5 text-pk-red" />
                </div>
                <h3 className="text-xl font-heading tracking-wide text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-white/40 font-body leading-relaxed">
                  {card.desc}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
