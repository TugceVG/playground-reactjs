import "../index.css";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cards />
      <Footer />
    </div>
  );
}
