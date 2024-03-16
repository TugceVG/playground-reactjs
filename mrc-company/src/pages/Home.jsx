import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import ContactForm from "../components/ContactForm";
import Referance from "../components/Referance";
import { Button } from "../components/Button";
import { serviceData } from "../components/serviceData";

import "../styles/home.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="hero-container">
        <h1>MRC INSAN KAYNAKLARI</h1>
        <p>Kaliteli Hizmetin Adresi</p>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            HEMEN ARA
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            onClick={console.log("hey")}
          >
            WHATSAPP <i className="fab fa-whatsapp"></i>
          </Button>
        </div>
      </div>
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
