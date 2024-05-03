import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import heroImg from "../assets/hero.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={heroImg}
        // title="MRC INSAN KAYNAKLARI YONETIM DANISMANLIGI"
        title="MRC INSAN KAYNAKLARI"
        text="Guvenilir Hizmet icin Dogru Adres"
        btnClass="show"
        btnText="Bize Ulasin"
        url="/"
      />
      <AboutUs />
      <Footer />
    </>
  );
}
