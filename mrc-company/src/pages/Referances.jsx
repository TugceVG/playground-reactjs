import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Referance from "../components/Referance";

export default function Referances() {
  return (
    <>
      <Navbar />
      <div className="hero-sub-container">
        <img src="https://picsum.photos/id/1031/1200/800" alt="Hero image" />
      </div>
      <div className="page">
        <Referance />
      </div>
      <Footer />
    </>
  );
}
