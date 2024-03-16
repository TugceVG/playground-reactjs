import React from "react";
import Footer from "../components/Footer";
import HeroSub from "../components/HeroSub";
import Navbar from "../components/Navbar";
import Referance from "../components/Referance";

export default function Referances() {
  return (
    <>
      <Navbar />
      <HeroSub image="https://picsum.photos/id/1031/1200/800" />
      <div className="page">
        <Referance />
      </div>
      <Footer />
    </>
  );
}
