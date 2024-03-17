import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "./contactForm.css";

const emailjsServiceId = import.meta.env.VITE_EMAIL_JS_SERVICE_ID;
const emailjsTemplateId = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID;
const emailjsPublicKey = import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY;

const SuccessMessage = () => (
  <div className="status-message">
    <i class="fa-solid fa-thumbs-up" />
    <p>
      Mailiniz tarafimiza iletilmistir. Size en kisa surede donus yapilacaktir.
    </p>
  </div>
);

const FailureMessage = () => (
  <div className="status-message failure">
    <i class="fa-solid fa-circle-exclamation"></i>
    <p>
      Teknik bir problemden dolayi mailiniz iletilmedi. Lutfen telefon ile
      iletisime geciniz.
    </p>
  </div>
);

export default function ContactForm() {
  const [emailSendingStatus, setEmailSendingStatus] = useState("");
  const formRef = useRef(null);

  const sendEmail = async (event) => {
    event.preventDefault();

    emailjs
      .sendForm(emailjsServiceId, emailjsTemplateId, formRef.current, {
        publicKey: emailjsPublicKey,
      })
      .then(
        () => {
          event.target.reset();
          setEmailSendingStatus("success");
        },
        (error) => {
          console.error(error);
          setEmailSendingStatus("failure");
        }
      );
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
            {emailSendingStatus === "success" && <SuccessMessage />}
            {emailSendingStatus === "failure" && <FailureMessage />}
            <button type="submit">Mesajı Gönder</button>
          </form>
        </div>

        <div className="address-container">
          <div className="map-container">
            <h2>Şirket Lokasyonu</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d859.6827066379739!2d29.133916531482623!3d40.92865740520354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac6a148f4659b%3A0xc8a8ba48e6a6f2c5!2zQmHEn2xhcmJhxZ_EsSwgQXRhdMO8cmsgQ2QuIE5vOjg4LCAzNDg0NCBNYWx0ZXBlL8Swc3RhbmJ1bCwgVMO8cmtpeWU!5e0!3m2!1str!2slu!4v1710704746106!5m2!1str!2slu"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
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
