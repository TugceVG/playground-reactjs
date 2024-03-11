import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import aboutImg from "../assets/about.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://picsum.photos/id/847/1200/800"
        title="ILETISIM"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}
