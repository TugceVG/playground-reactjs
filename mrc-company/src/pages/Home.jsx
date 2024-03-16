import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import ContactForm from "../components/ContactForm";
import Referance from "../components/Referance";
import { serviceData } from "../components/serviceData";

import "../styles/home.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="page">
        <AboutUs />
        <h1>Hizmetlerimiz</h1>
        <ul className="service-list">
          {serviceData.map(({ id, title, src, path }) => (
            <li className="service-item" key={id}>
              <Link to={path}>
                <img src={src} alt={title} />
                <p>{title}</p>
              </Link>
            </li>
          ))}
        </ul>
        <Referance />
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}
