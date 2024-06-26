import "./cards.css";
import { serviceData } from "./serviceData";
import CardItem from "./CardItem";

export default function Cards() {
  return (
    <div className="cards">
      <h1>Hizmetlerimiz</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {serviceData.map((servisItem) => (
              <CardItem
                src={servisItem.src}
                title={servisItem.title}
                text={servisItem.text}
                label={servisItem.label}
                path={servisItem.path}
              />
            ))}
            {/* <CardItem
              src="images/img-9.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Incele"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Incele"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Incele"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Experience Football on Top of the Himilayan Mountains"
              label="Incele"
              path="/services"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Incele"
              path="/services"
            /> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
