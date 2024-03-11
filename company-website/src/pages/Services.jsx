import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceData from "../components/ServiceData";

export default function Services() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://picsum.photos/id/842/1200/800"
        title="SERVISLERIMIZ"
        btnClass="hide"
      />
      <ServiceData />
      <Footer />
    </>
  );
}
