import "./contactForm.css";

import React from "react";

export default function ContactForm() {
  return (
    <div className="form-container">
      <h1>Bize mail göndererek ulaşabilirsiniz.</h1>
      <p>
        Öneri, şikayet veya herhangi bir hizmet alımı için fiyat teklifi
        taleplerinizi bizlere mail aracılığıyla iletebilirsiniz.
      </p>
      <form>
        <input placeholder="Adınız" />
        <input placeholder="Email Adresiniz" />
        <input placeholder="Konu" />
        <textarea placeholder="Mesajınızı Giriniz..." rows="4"></textarea>
        <button>Mesajı Gönder</button>
      </form>
    </div>
  );
}
