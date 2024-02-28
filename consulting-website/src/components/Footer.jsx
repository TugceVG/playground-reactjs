import "./footer.css";
import logo from "../assets/logo3.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>MRC</h1>
          <p>INSAN KAYNAKLARI YÖNETIM DANIŞMANLIĞI</p>
        </div>
        <div>
          <a href="/">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="/">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="/">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="/">
            <i className="fab fa-twitterS"></i>
          </a>
          <a href="/">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Hakkimizda</h4>
          <a href="/">Tarihce</a>
          <a href="/">Vizyon</a>
          <a href="/">Misyon</a>
          <a href="/">Referanslar</a>
        </div>
        <div>
          <h4>Servisler</h4>
          <a href="/">Kat Hizmetleri</a>
          <a href="/">Genel Alan Temizlik Personeli</a>
          <a href="/">Profesyonel Is yeri Temizligi</a>
          <a href="/">Mobil Ekip</a>
        </div>
        <div>
          <h4>Iletisim</h4>
          <a href="/">Adres</a>
          <a href="/">Irtibat</a>
          <a href="/">Mail</a>
          <a href="/">Calisma Saatlerimiz</a>
        </div>
      </div>
    </div>
  );
}
