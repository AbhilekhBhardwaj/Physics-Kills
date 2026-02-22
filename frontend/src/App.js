import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Toaster } from "./components/ui/sonner";
import HomePage from "./pages/HomePage";
import VideosPage from "./pages/VideosPage";
import NotesPage from "./pages/NotesPage";
import InfographicsPage from "./pages/InfographicsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/infographics" element={<InfographicsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Toaster position="bottom-right" theme="dark" />
      </BrowserRouter>
    </div>
  );
}

export default App;
