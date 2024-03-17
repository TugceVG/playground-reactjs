import { Link } from "react-router-dom";

import AboutUs from "../components/AboutUs";
import ContactForm from "../components/ContactForm";
import Referance from "../components/Referance";
import Page from "../components/Page";
import { serviceData } from "../components/serviceData";

import "../styles/home.css";

export default function Home() {
  return (
    <Page>
      <div className="hero-container">
        <h1>MRC INSAN KAYNAKLARI</h1>
        <p>Kaliteli Hizmetin Adresi</p>
        <div className="hero-btns">
          <a className="call-now-link" href="tel:+905388670000">
            <p>HEMEN ARA</p>
          </a>
          <a
            className="call-now-link"
            href="https://wa.me/905388670000"
            target="_blank"
          >
            <p>WHATSAPP</p>
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
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
    </Page>
  );
}
