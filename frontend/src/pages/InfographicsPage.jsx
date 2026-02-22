import { InfographicsSection } from '../components/InfographicsSection';
import { Footer } from '../components/Footer';

export default function InfographicsPage() {
  return (
    <main className="bg-black min-h-screen">
      <InfographicsSection isPage />
      <Footer />
    </main>
  );
}
