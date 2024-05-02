import "./footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      {/* <div className="footer-links"> */}

      <div className="social-media-wrap">
        <div className="footer-logo">
          <Link to="/" className="social-logo">
            MRC
          </Link>
        </div>
        <div className="social-icons">
          <Link
            className="social-icon-link facebook"
            to="/"
            target="_blank"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f" />
          </Link>
          <Link
            className="social-icon-link instagram"
            to="/"
            target="_blank"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram" />
          </Link>
          <Link
            className="social-icon-link youtube"
            to="/"
            target="_blank"
            aria-label="Youtube"
          >
            <i className="fab fa-youtube" />
          </Link>
          <Link
            className="social-icon-link twitter"
            to="/"
            target="_blank"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter" />
          </Link>
          <Link
            className="social-icon-link twitter"
            to="/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin" />
          </Link>
        </div>
      </div>

      <div className="footer-link-wrapper">
        <div className="footer-link-items">
          <h2>Site Haritasi</h2>
          <Link to="/">Ana Sayfa</Link>
          <Link to="/">Hakkimizda</Link>
          <Link to="/">Hizmetlerimiz</Link>
          <Link to="/">Iletisim</Link>
        </div>
        <div className="footer-link-items">
          <h2>Hakkimizda</h2>
          <Link to="/sign-up">Hikayemiz</Link>
          <Link to="/">Vizyon</Link>
          <Link to="/">Misyon</Link>
          <Link to="/">Referanslar</Link>
        </div>
        <div className="footer-link-items">
          <h2>Hizmetlerimiz</h2>
          <Link to="/">Kat Hizmetleri</Link>
          <Link to="/">Genel Alan Temizlik Personeli</Link>
          <Link to="/">Profesyonel Is Yeri Temizligi</Link>
          <Link to="/">Mobil Ekip</Link>
        </div>
        <div className="footer-link-items">
          <h2>Iletisim</h2>
          <Link to="/">Adres</Link>
          <Link to="/">Tel</Link>
          <Link to="/">Email</Link>
        </div>
      </div>

      <small className="website-rights">MRC © 2016</small>
      {/* </div> */}
      {/* <section className="social-media"> */}
      {/* </section> */}
    </div>
  );
}

export default Footer;
