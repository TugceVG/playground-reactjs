import "./service.css";
import Service from "./Service";
import image1 from "../assets/2.jpeg";
import image2 from "../assets/7.jpeg";
import image3 from "../assets/8.jpeg";
import image4 from "../assets/10.jpeg";

const services = [
  {
    id: 1,
    heading: "Kat Hizmetleri",
    text: "Konukların zamanının büyük bir kısmını odalarında ve tesisin genel alanlarında geçirdiğini düşünürsek, kat hizmetlerinin ne kadar önemli bir departman olduğu bilincinde olarak ve buradan yola çıkarak çalışanlarımızın, sorumluluğunu aldığı görev konusunda yeterli eğitimi almış, deneyimli, temiz, düzenli, konuklara karşı saygılı ve güler yüzlü, misafir odalarında gürültü yapmadan çalışan ve çalışma esnasında özel hayata saygı gösteren, her an hizmet ve yardım edebileceğini hissettiren çalışanlarımızla güçlü bir kadroyla sizi başarıya taşımayı ve bunun parçası olmayı arzu ediyoruz.",
    image: image1,
  },
  {
    id: 2,
    heading: "Genel Alan Temizlik Personeli",
    text: "Misafirlere ilk izlenimi yansıtan alanlar olarak, konukların kullandığı tüm alanların (restoran, lobi, tuvalet vb.) sağlık bilgisi ve güvenlik kurallarına uygun çalışarak, temizliğini itinalı ve titiz bir şekilde, güler yüzlü, sorumluluk bilinci ve görev anlayışı yüksek personellerimizle hizmetinizdeyiz.",
    image: image2,
  },
  {
    id: 3,
    heading: "Profesyonel İş Yeri Temizliği",
    text: "Günlük, haftalık veya aylık periyodlarla olduğu gibi, mesai saatleri dışında da talep edilebilmektedir. Bu nedenle, farklı sektörlere yönelik çeşitli çözümler sunabilen bir yapıya sahip olan firmamız, sizin için uygun ekip ve donanım konusunda yardımcı olmaya hazırdır.",
    image: image3,
  },
  {
    id: 4,
    heading: "Mobil Ekip",
    text: "İşyeri temizliği kapsamında lavabolarınız, iş atölyeniz, ofis mutfağınız, yer döşemeleriniz, koltuklarınız, halılarınız, ofis masalarınız, kitaplıklarınız ve camlarınız, uzmanlaşmış geniş kadromuz tarafından titizlikle ve özenle temizlenir.",
    image: image4,
  },
];

// classname=> trip=service, t-card=service-card, t-image=service-image tripcard=serviceCardContainer

export default function ServiceData() {
  return (
    <div className="service">
      <h1>Hizmetlerimiz</h1>
      <div className="serviceCardContainer">
        {services.map((service) => (
          <Service
            key={service.id}
            image={service.image}
            heading={service.heading}
            text={service.text}
          />
        ))}
      </div>
    </div>
  );
}
