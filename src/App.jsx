import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import AreasShowcase from "./components/AreasShowcase.jsx";
import Gallery from "./components/Gallery.jsx";
import Services from "./components/Services.jsx";
import ContactSection from "./components/ContactSection.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-charcoal-950 text-neutral-100">
      <Navbar />
      <Hero />
      <AreasShowcase />
      <Gallery />
      <Services />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
