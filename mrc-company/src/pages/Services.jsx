import Page from "../components/Page";
import { serviceData } from "../components/serviceData";

import "../styles/services.css";

export default function Services() {
  return (
    <Page>
      <h1>Hizmetlerimiz</h1>
      {serviceData.map(({ id, title, text, src }) => (
        <section key={id} className="services" id={id}>
          <img src={src} />
          <div className="service-info">
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
        </section>
      ))}
    </Page>
  );
}
