import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import aboutImg from "../assets/about.jpg";
import Footer from "../components/Footer";

export default function Referances() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://picsum.photos/id/852/1200/800"
        title="REFERANSLARIMIZ"
        btnClass="hide"
      />
      <Footer />
    </>
  );
}
