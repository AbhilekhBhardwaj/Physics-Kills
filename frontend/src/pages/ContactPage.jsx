import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';

export default function ContactPage() {
  return (
    <main className="bg-black min-h-screen">
      <ContactSection isPage />
      <Footer />
    </main>
  );
}
