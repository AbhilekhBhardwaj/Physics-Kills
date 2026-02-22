import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Instagram, Youtube, Mail } from 'lucide-react';
import { toast } from 'sonner';

export const ContactSection = ({ isPage = false }) => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      toast.success('Message sent! We\'ll get back to you soon.');
      setForm({ name: '', email: '', message: '' });
      setSending(false);
    }, 1200);
  };

  return (
    <section className={`relative ${isPage ? 'pt-28 pb-20' : 'py-20 sm:py-28'} px-6 bg-black`}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading tracking-wider text-white mb-3">
            GET IN <span className="text-pk-red">TOUCH</span>
          </h2>
          <p className="text-white/40 font-body text-sm sm:text-base">
            Questions, feedback, or collaboration? Let's talk.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 space-y-5"
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="pk-input"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="pk-input"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={5}
                className="pk-input resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="pk-btn-primary w-full sm:w-auto disabled:opacity-50"
            >
              <Send className="w-4 h-4 mr-2" />
              {sending ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 flex flex-col justify-center"
          >
            <h3 className="text-sm font-body font-semibold text-white/60 tracking-widest mb-6 uppercase">
              Connect With Us
            </h3>
            <div className="space-y-4">
              <a
                href="https://instagram.com/physicskills"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-pk-surface border border-white/5 flex items-center justify-center transition-all duration-300 group-hover:border-pk-red/30 group-hover:shadow-[0_0_15px_rgba(230,57,70,0.2)]">
                  <Instagram className="w-4 h-4 text-white/50 group-hover:text-pk-red transition-colors duration-300" />
                </div>
                <span className="text-sm font-body text-white/50 group-hover:text-white/80 transition-colors duration-300">
                  @physicskills
                </span>
              </a>
              <a
                href="https://youtube.com/@physicskills"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-pk-surface border border-white/5 flex items-center justify-center transition-all duration-300 group-hover:border-pk-red/30 group-hover:shadow-[0_0_15px_rgba(230,57,70,0.2)]">
                  <Youtube className="w-4 h-4 text-white/50 group-hover:text-pk-red transition-colors duration-300" />
                </div>
                <span className="text-sm font-body text-white/50 group-hover:text-white/80 transition-colors duration-300">
                  Physics Kills
                </span>
              </a>
              <a
                href="mailto:hello@physicskills.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-pk-surface border border-white/5 flex items-center justify-center transition-all duration-300 group-hover:border-pk-red/30 group-hover:shadow-[0_0_15px_rgba(230,57,70,0.2)]">
                  <Mail className="w-4 h-4 text-white/50 group-hover:text-pk-red transition-colors duration-300" />
                </div>
                <span className="text-sm font-body text-white/50 group-hover:text-white/80 transition-colors duration-300">
                  hello@physicskills.com
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
