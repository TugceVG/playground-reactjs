import "./referance.css";
import hhh from "../assets/cvk.jpeg";

const referanceData = [
  {
    id: 1,
    name: "CVK Hotels & Resorts Park Bosphorus Istanbul",
    logo: "src/assets/cvk.jpeg",
  },
  {
    id: 2,
    name: "Hampton by Hilton",
    logo: "src/assets/hampton.jpeg",
  },
  {
    id: 3,
    name: "Mövenpick Living Istanbul",
    logo: "src/assets/movenpick.jpeg",
  },
  {
    id: 4,
    name: "De Camondo Galata",
    logo: "src/assets/decamondo-galata.jpeg",
  },
  {
    id: 5,
    name: "De Camondo Collection",
    logo: "src/assets/decamondo.jpeg",
  },
  {
    id: 6,
    name: "Eser Premium Hotel&Spa Istanbul",
    logo: "src/assets/eser.jpeg",
  },
  {
    id: 7,
    name: "Le Meridien Etiler Istanbul",
    logo: "src/assets/meridien.jpeg",
  },
  {
    id: 8,
    name: "Vital Hotel Fulya",
    logo: "src/assets/vital.jpeg",
  },
  {
    id: 9,
    name: "Marriott Executive Apartments Fulya Istanbul",
    logo: "src/assets/marriot-fulya.jpeg",
  },
  {
    id: 10,
    name: "Radisson Collection VadIstanbul",
    logo: "src/assets/Radisson.jpeg",
  },
  {
    id: 11,
    name: "Mövenpick Living Camlivadi",
    logo: "src/assets/movenpick-camlivadi.jpeg",
  },
  {
    id: 12,
    name: "DoubleTree by Hilton Moda",
    logo: "src/assets/doubleTree.jpeg",
  },
  {
    id: 13,
    name: "Radisson Blu",
    logo: "src/assets/RadissonBlu.jpeg",
  },
];

export default function Referance() {
  return (
    <>
      <h1 className="referance">Referanslar</h1>
      <div className="referance-container">
        {referanceData.map((referance) => (
          <div className="referance-item">
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
