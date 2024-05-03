import "./footer.css";

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
            <i className="fab fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fab fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="/">
            <i className="fab fa-twitter-square"></i>
          </a>
          <a href="/">
            <i className="fab fa-whatsapp-square"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Hakkimizda</h4>
          <a href="/">Hikayemiz</a>
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
          <a href="/">
            <i className="fas fa-location-dot"></i> Adres
          </a>
          <a href="/">
            <i className="fas fa-phone"></i> Irtibat
          </a>
          <a href="/">
            <i className="fas fa-envelope"></i> Mail
          </a>
          <a href="/">
            {" "}
            <i className="fas fa-clock"></i> Calisma Saatlerimiz
          </a>
        </div>
      </div>
    </div>
  );
}
