import AboutUsData from "./AboutUsData";
import "./aboutUs.css";

import image1 from "../assets/2.jpeg";
import image4 from "../assets/5.jpeg";

export default function AboutUs() {
  return (
    <div className="about">
      <h1>Kısaca Biz</h1>
      <p>
        MRC İnsan Kaynakları, 2016 yılında İstanbul Şişli'de faaliyete
        geçmiştir. Turizm ve otelcilik alanında 12 yılı aşkın deneyime sahip
        olan firmamız, güçlü organizasyon yapısıyla iş ortaklarının üzerindeki
        büyük iş yükünü azaltmayı hedeflemektedir. Dönemsel işçilik
        ihtiyaçlarınızı karşılamak için "doğru işgücü" anlayışıyla hareket eden
        MRC İnsan Kaynakları, esnek iş gücü hizmetleri sunarak otel ve
        işletmelere ekstra personel desteği sağlamaktadır. Kalite politikamız
        doğrultusunda, otel ve işletmelerin insan kaynağı ihtiyaçları, mevcut iş
        gücü portföyümüzden, talep edilen işlere uygun olarak, istenilen zaman
        dilimi içerisinde karşılanmaktadır. MRC İnsan Kaynakları olarak, iş
        alanlarında müşteri memnuniyetini ve adayların memnuniyetini en üst
        düzeyde tutarak, ihtiyaçları analiz edip, hızlı ve kaliteli profesyonel
        çözümlerle iş ortaklığını teklif ediyoruz.{" "}
      </p>
      <AboutUsData
        className="first-des"
        heading="Vizyonumuz"
        text="MRC İnsan Kaynakları, markasını oluşturarak, alanında sektöre yön veren
        standartların oluşmasına öncülük eden; profesyonel, hızlı ve doğru
        çözümler sunarak sektörün önde gelen insan kaynakları danışmanlık
        şirketi olmayı hedeflemektedir."
        img1="https://picsum.photos/id/1/1200/800"
        img2="https://picsum.photos/id/8/1200/800"
      />

      <AboutUsData
        className="first-des-reverse"
        heading="Misyonumuz"
        text="MRC İnsan Kaynakları olarak, 12 yılı aşkın turizm ve otelcilik
        deneyimimizde her zaman eksikliğini hissettiğimiz başta güleryüz olmak
        üzere, profesyonel, genç, dinamik ve eğitimli, yaşamdan haz alan
        personelleri sektörle buluşturarak çözüm ortağı olma isteğiyle yola
        çıkmıştır."
        img1={image4}
        img2={image1}
      />
    </div>
  );
}
