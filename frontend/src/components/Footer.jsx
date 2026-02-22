import { Link } from 'react-router-dom';
import { ASSETS, NAV_LINKS } from '../data/mock';
import { Instagram, Youtube, Mail, ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="relative bg-black border-t border-white/5 px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <img src={ASSETS.logo} alt="Physics Kills" className="h-10 w-10 object-cover rounded-full ring-2 ring-pk-red/30" />
              <span className="text-white font-heading text-xl tracking-wider">
                PHYSICS <span className="text-pk-red">KILLS</span>
              </span>
            </Link>
            <p className="text-sm text-white/30 font-body leading-relaxed max-w-sm mb-6">
              Making physics education cinematic, engaging, and accessible. No memorization — just pure understanding.
            </p>
            <div className="flex gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-pk-red hover:border-pk-red/30 transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-pk-red hover:border-pk-red/30 transition-all duration-300">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="mailto:hello@physicskills.com" className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-pk-red hover:border-pk-red/30 transition-all duration-300">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-body font-semibold text-white/50 tracking-widest uppercase mb-5">Navigate</h4>
            <nav className="space-y-3">
              {NAV_LINKS.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="flex items-center gap-1 text-sm font-body text-white/30 hover:text-pk-red transition-colors duration-300 group"
                >
                  {link.label}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-body font-semibold text-white/50 tracking-widest uppercase mb-5">Resources</h4>
            <nav className="space-y-3">
              <Link to="/videos" className="block text-sm font-body text-white/30 hover:text-pk-red transition-colors duration-300">Video Lectures</Link>
              <Link to="/notes" className="block text-sm font-body text-white/30 hover:text-pk-red transition-colors duration-300">Study Notes</Link>
              <Link to="/infographics" className="block text-sm font-body text-white/30 hover:text-pk-red transition-colors duration-300">Infographics</Link>
              <Link to="/contact" className="block text-sm font-body text-white/30 hover:text-pk-red transition-colors duration-300">Get Help</Link>
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20 font-body">
            © {new Date().getFullYear()} Physics Kills. All rights reserved.
          </p>
          <p className="text-xs text-white/20 font-body">
            Made with passion for physics students everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};
