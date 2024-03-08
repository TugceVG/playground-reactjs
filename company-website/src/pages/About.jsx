import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

export default function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://picsum.photos/id/6/1200/800"
        title="HAKKIMIZDA"
        btnClass="hide"
      />
      <AboutUs />
      <Footer />
    </>
  );
}
