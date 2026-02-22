import { VideosSection } from '../components/VideosSection';
import { Footer } from '../components/Footer';

export default function VideosPage() {
  return (
    <main className="bg-black min-h-screen">
      <VideosSection isPage />
      <Footer />
    </main>
  );
}
