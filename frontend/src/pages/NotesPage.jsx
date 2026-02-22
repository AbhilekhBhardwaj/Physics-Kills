import { NotesSection } from '../components/NotesSection';
import { Footer } from '../components/Footer';

export default function NotesPage() {
  return (
    <main className="bg-black min-h-screen">
      <NotesSection isPage />
      <Footer />
    </main>
  );
}
