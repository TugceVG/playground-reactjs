import React from "react";
import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="page">
        <AboutUs />
      </div>
      <Footer />
    </>
  );
}
