import "./referance.css";
import cvk from "../assets/cvk.jpeg";
import hampton from "../assets/hampton.jpeg";
import movenpick from "../assets/movenpick.jpeg";
import decamondoGalata from "../assets/decamondo-galata.jpeg";
import decamondo from "../assets/decamondo.jpeg";
import eser from "../assets/eser.jpeg";
import meridien from "../assets/meridien.jpeg";
import vital from "../assets/vital.jpeg";
import marriotFulya from "../assets/marriot-fulya.jpeg";
import Radisson from "../assets/Radisson.jpeg";
import movenpickCamlivadi from "../assets/movenpick-camlivadi.jpeg";
import doubleTree from "../assets/doubleTree.jpeg";
import RadissonBlu from "../assets/RadissonBlu.jpeg";

const referanceData = [
  {
    id: 1,
    name: "CVK Hotels & Resorts Park Bosphorus Istanbul",
    logo: cvk,
  },
  {
    id: 2,
    name: "Mövenpick Living Camlivadi",
    logo: movenpickCamlivadi,
  },
  {
    id: 3,
    name: "Mövenpick Living Istanbul",
    logo: movenpick,
  },
  {
    id: 4,
    name: "Radisson Blu",
    logo: RadissonBlu,
  },
  {
    id: 5,
    name: "De Camondo Collection",
    logo: decamondo,
  },
  {
    id: 6,
    name: "Eser Premium Hotel&Spa Istanbul",
    logo: eser,
  },
  {
    id: 7,
    name: "Le Meridien Etiler Istanbul",
    logo: meridien,
  },
  {
    id: 8,
    name: "Vital Hotel Fulya",
    logo: vital,
  },
  {
    id: 9,
    name: "Marriott Executive Apartments Fulya Istanbul",
    logo: marriotFulya,
  },
  {
    id: 10,
    name: "Radisson Collection VadIstanbul",
    logo: Radisson,
  },
  {
    id: 11,
    name: "Hampton by Hilton",
    logo: hampton,
  },
  {
    id: 12,
    name: "DoubleTree by Hilton Moda",
    logo: doubleTree,
  },
  {
    id: 13,
    name: "De Camondo Galata",
    logo: decamondoGalata,
  },
];

export default function Referance() {
  return (
    <>
      <h1 className="referance">Referanslar</h1>
      <div className="referance-container">
        {referanceData.map((referance) => (
          <div className="referance-item" key={referance.id}>
            <img
              src={referance.logo}
              className="referans-logo"
              alt="Referance Name"
            />
          </div>
        ))}
      </div>
    </>
  );
}
