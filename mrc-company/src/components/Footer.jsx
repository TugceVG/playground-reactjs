import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>MRC</h1>
          <p>INSAN KAYNAKLARI YÖNETIM DANIŞMANLIĞI</p>
        </div>
        <div className="top-icon-container">
          <a
            href="https://www.facebook.com/p/MRC-I%CC%87nsan-Kaynaklar%C4%B1-100063868550362"
            target="_blank"
          >
            <i className="fab fa-facebook-square"></i>
          </a>
          <a
            href="https://www.instagram.com/mrc_insankaynaklari"
            target="_blank"
          >
            <i className="fab fa-instagram-square"></i>
          </a>
          <a href="/" target="_blank">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://wa.me/905388670000" target="_blank">
            <i className="fab fa-whatsapp-square"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Hakkimizda</h4>
          <Link to="/about">Hikayemiz</Link>
          <Link to="/about">Vizyon</Link>
          <Link to="/about">Misyon</Link>
          <Link to="/referances">Referanslar</Link>
        </div>
        <div>
          <h4>Servisler</h4>
          <Link to="/services">Kat Hizmetleri</Link>
          <Link to="/services">Genel Alan Temizlik Personeli</Link>
          <Link to="/services">Profesyonel Is yeri Temizligi</Link>
          <Link to="/services">Mobil Ekip</Link>
        </div>
        <div>
          <h4>İletişim</h4>
          <a href="https://maps.app.goo.gl/VKG2LmNcVgiMPDAg6" target="_blank">
            <i className="fas fa-location-dot"></i> Bağlarbaşı Mah. Atatürk Cad.
            Karapınar Apt. <br /> No: 88 - 2 Maltepe İstanbul
          </a>
          <a href="tel:+905388670000">
            <i className="fas fa-phone"></i> 0538 867 00 00
          </a>
          <a href="mailto:caner@mrcik.com" target="_blank">
            <i className="fas fa-envelope"></i> caner@mrcik.com
          </a>
          <a href="/">
            <i className="fas fa-clock"></i> Pazartesi - Cuma 08:00 - 18:00
          </a>
        </div>
      </div>
    </div>
  );
}
