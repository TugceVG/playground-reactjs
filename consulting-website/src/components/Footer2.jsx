import "./footer2.css";
import logo from "../assets/logo3.png";

export default function Footer2() {
  return (
    <div className="footer">
      <div className="up">
        <div>
          <h1>MRC</h1>
          <p>INSAN KAYNAKLARI YÖNETIM DANIŞMANLIĞI</p>
        </div>
        <div>
          <a href="/">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="/">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="/">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="/">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="/">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
      <div className="down">
        <p>MRC ®2020 Tüm Hakları saklıdır.</p>
      </div>
    </div>
  );
}
