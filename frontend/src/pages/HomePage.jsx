import { HeroSection } from '../components/HeroSection';
import { CTASection } from '../components/CTASection';
import { VideosSection } from '../components/VideosSection';
import { InfographicsSection } from '../components/InfographicsSection';
import { NotesSection } from '../components/NotesSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';

export default function HomePage() {
  return (
    <main className="bg-black min-h-screen">
      <HeroSection />
      <CTASection />
      <VideosSection />
      <InfographicsSection />
      <NotesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
