import React from "react";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="hero-sub-container">
        <img src="https://picsum.photos/id/60/1200/800" alt="Hero image" />
      </div>
      <div className="page">
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}
