import React from "react";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HeroSub from "../components/HeroSub";

export default function Contact() {
  return (
    <>
      <Navbar />
      <HeroSub image="https://picsum.photos/id/60/1200/800" />
      <div className="page">
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}
