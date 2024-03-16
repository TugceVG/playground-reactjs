import { useRef } from "react";
import emailjs from "@emailjs/browser";

import "./contactForm.css";

const emailjsServiceId = import.meta.env.VITE_EMAIL_JS_SERVICE_ID;
const emailjsTemplateId = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID;
const emailjsPublicKey = import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY;

export default function ContactForm() {
  const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(emailjsServiceId, emailjsTemplateId, formRef.current, {
        publicKey: emailjsPublicKey,
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <h1>İletişim</h1>
      <div className="contact-container">
        <div className="form-container">
          <div className="form-container-title">
            <h2>Bize mail göndererek ulaşabilirsiniz.</h2>
            <p>
              Öneri, şikayet veya herhangi bir hizmet alımı için fiyat teklifi
              taleplerinizi bizlere mail aracılığıyla iletebilirsiniz.
            </p>
          </div>
          <form ref={formRef} onSubmit={sendEmail}>
            <input type="text" placeholder="Adınız" name="name" required />
            <input
              type="email"
              placeholder="Email Adresiniz"
              name="email"
              required
            />
            <input type="text" placeholder="Konu" name="subject" required />
            <textarea
              type="text"
              placeholder="Mesajınızı Giriniz..."
              rows="4"
              name="message"
              required
            ></textarea>
            <button type="submit">Mesajı Gönder</button>
          </form>
        </div>

        <div className="address-container">
          <div className="map-container">
            <h2>Şirket Lokasyonu</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6017.0499502587!2d28.985282076664408!3d41.05751601639063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7054b58c1c7%3A0x2ff56cead09652d5!2sMRC%20%C4%B0nsan%20Kaynaklar%C4%B1!5e0!3m2!1str!2slu!4v1710328157338!5m2!1str!2slu"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="address-detail-container">
            <div className="address-info">
              <h2>Adres Bilgisi</h2>
              <p>
                Baglarbasi Mah. Ataturk Cad. Karapinar Apt. No:88/2
                Maltepe/Istanbul
              </p>
            </div>
            <div className="contact-info">
              <h2>İletişim Bilgisi</h2>
              <p>
                0538 867 00 00 / 0543 899 00 28 /0533 042 00 68
                <br />
                caner@mrcik.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
